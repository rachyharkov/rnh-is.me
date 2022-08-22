import "./App.css";
import PageAbout from "./pages/PageAbout";
import PageTimeline from "./pages/PageTimeline";
import PageResources from "./pages/PageResources";
import PageAchievment from "./pages/PageAchievment";
import AchievmentDetail from "./pages/achievment/AchievmentDetail";
import PageProjects from "./pages/PageProjects";
import ReactDOM from "react-dom";
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
  useOutlet
} from "react-router-dom";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.loadingState = this.loadingState.bind(this);
    this.NyasarState = this.NyasarState.bind(this);
    this.Layout = this.Layout.bind(this);
    this.showMobileNav = this.showMobileNav.bind(this);
    this.hideMobileNav = this.hideMobileNav.bind(this);

  }
  
  loadingState() {
    return(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          style={{
            filter: "invert(1)",
            margin: "auto",
            color: "var()",
          }}
        >
          <circle
            cx="0"
            cy="50"
            r="10"
            fill="#25282B"
            className="anim-0-0-17"
            style={{
              animationDelay: "0s",
              animationDuration: "2.5s",
            }}
          ></circle>
          <circle
            cx="0"
            cy="50"
            r="10"
            fill="#25282B"
            className="anim-0-0-17"
            style={{
              animationDelay: "-0.625s",
              animationDuration: "2.5s",
            }}
          ></circle>
          <circle
            cx="0"
            cy="50"
            r="10"
            fill="#25282B"
            className="anim-0-0-17"
            style={{
              animationDelay: "-1.25s",
              animationDuration: "2.5s",
            }}
          ></circle>
          <circle
            cx="0"
            cy="50"
            r="10"
            fill="#25282B"
            className="anim-0-0-17"
            style={{
              animationDelay: "-1.875s",
              animationDuration: "2.5s",
            }}
          ></circle>
        </svg>
        <p>🐢</p>
      </div>
    )
  }

  showMobileNav(){
    // addclass nav-m-active to #nav-mobile
    document.getElementById("nav-mobile").classList.add("nav-m-active");
    document.documentElement.classList.add("locked");
    document.getElementsByClassName("nav-list")[0].classList.add("showed");
  }

  hideMobileNav(){
    // removeclass nav-m-active to #nav-mobile
    document.getElementById("nav-mobile").classList.remove("nav-m-active");
    document.documentElement.classList.remove("locked");
    document.getElementsByClassName("nav-list")[0].classList.remove("showed");
  }
  
  NyasarState() {
    return(
      <div>
        Maaf, laman ini tidak dapat diakses. Apakah kamu nyasar? 🤷‍♂️
      </div>
    )
  }
  
  
  Layout() {
    return (
      <div className="App">
        <button id="btn-color-scheme-changer" className="x">
          💫
        </button>
        <div>
          <button className="nav-mobile-init" onClick={this.showMobileNav}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div id="nav-mobile">
          <button className="btn-close-m-nav" onClick={this.hideMobileNav}>
            <span className="close rounded thick"></span>
          </button>
            <div className="nav-list">
              <Link onClick={this.hideMobileNav} to="/"><i className="fas fa-address-card"></i>About</Link>
              <Link onClick={this.hideMobileNav} to="/timeline"><i className="fas fa-history"></i>Timeline</Link>
              <Link onClick={this.hideMobileNav} to="/resources"><i className="fas fa-server"></i>Resources</Link>
              <Link onClick={this.hideMobileNav} to="/achievment"><i className="fas fa-trophy"></i>Achievment</Link>
              <Link onClick={this.hideMobileNav} to="/projects"><i className="fas fa-project-diagram"></i>Projects</Link>
              <Link onClick={this.hideMobileNav} to="/blog"><i className="fas fa-newspaper"></i>Blog</Link>
            </div>
        </div>
          <div id="header">
            <h1>R N H</h1>
            <p>RACHMAD NUR HAYAT</p>
            <div className="nav-wrapper">
              <Link to="/"><i className="fas fa-address-card"></i>About</Link>
              <Link to="/timeline" ><i className="fas fa-history"></i>Timeline</Link>
              <Link to="/resources"><i className="fas fa-server"></i>Resources</Link>
              <Link to="/achievment"><i className="fas fa-trophy"></i>Achievment</Link>
              <Link to="/projects"><i className="fas fa-project-diagram"></i>Projects</Link>
              <Link to="/blog"><i className="fas fa-newspaper"></i>Blog</Link>
            </div>
          </div>
        <div id="body">
          <div id="box">
            <Outlet/>
          </div>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      <Routes>
        <Route path="/" element={<this.Layout/>}>
          <Route index element={<PageAbout/>} />
          <Route path="timeline" element={<PageTimeline/>} />
          <Route path="resources" element={<PageResources/>} />
          <Route path="achievment" element={<PageAchievment/>}/>
          <Route path="achievment/:id" element={<AchievmentDetail/>} />
          <Route path="projects" element={<PageProjects/>}/>
        </Route>
      </Routes>
    );
  }
}

export default App;
