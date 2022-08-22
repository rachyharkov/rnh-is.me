import "./App.css";
import PageAbout from "./pages/PageAbout";
import PageTimeline from "./pages/PageTimeline";
import PageResources from "./pages/PageResources";
import PageAchievment from "./pages/PageAchievment";
import AchievmentDetail from "./pages/achievment/AchievmentDetail";
import PageProjects from "./pages/PageProjects";
import ProjectDetail from "./pages/projects/ProjectDetail";
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
  LinkProps,
  useResolvedPath,
  useLocation,
  useParams,
  useMatch
} from "react-router-dom";
  
function loadingState() {
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

function showMobileNav(){
  // addclass nav-m-active to #nav-mobile
  document.getElementById("nav-mobile").classList.add("nav-m-active");
  document.documentElement.classList.add("locked");
  document.getElementsByClassName("nav-list")[0].classList.add("showed");
}

function hideMobileNav(){
  // removeclass nav-m-active to #nav-mobile
  document.getElementById("nav-mobile").classList.remove("nav-m-active");
  document.documentElement.classList.remove("locked");
  document.getElementsByClassName("nav-list")[0].classList.remove("showed");
}
  
function NyasarState() {
  return(
    <div>
      Maaf, laman ini tidak dapat diakses. Apakah kamu nyasar? 🤷‍♂️
    </div>
  )
}

function Menunya({children, to, ...props}) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const indicator = match ? "nav-btn-active" : "";
  return (
    <div>
      <Link style={{
        textDecoration: match ? "underline" : "none",
      }} to={to} className={"btn-nav-menu " + props.namaMenu + " " + indicator}>
        {children}
      </Link>
    </div>
  )
}

function Layout() {
  return (
    <div className="App">
      <button id="btn-color-scheme-changer" className="x">
        💫
      </button>
      <div>
        <button className="nav-mobile-init" onClick={showMobileNav}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div id="nav-mobile">
        <button className="btn-close-m-nav" onClick={hideMobileNav}>
          <span className="close rounded thick"></span>
        </button>
          <div className="nav-list">
            <Link onClick={hideMobileNav} to="/"><i className="fas fa-address-card"></i>About</Link>
            <Link onClick={hideMobileNav} to="/timeline"><i className="fas fa-history"></i>Timeline</Link>
            <Link onClick={hideMobileNav} to="/resources"><i className="fas fa-server"></i>Resources</Link>
            <Link onClick={hideMobileNav} to="/achievment"><i className="fas fa-trophy"></i>Achievment</Link>
            <Link onClick={hideMobileNav} to="/projects"><i className="fas fa-project-diagram"></i>Projects</Link>
            <Link onClick={hideMobileNav} to="/blog"><i className="fas fa-newspaper"></i>Blog</Link>
          </div>
      </div>
        <div id="header">
          <h1>R N H</h1>
          <p>RACHMAD NUR HAYAT</p>
          <div className="nav-wrapper">
            <Menunya to="/" namaMenu="about"><i className="fas fa-address-card"></i>About</Menunya>
            <Menunya to="/timeline" namaMenu="timeline"><i className="fas fa-history"></i>Timeline</Menunya>
            <Menunya to="/resources" namaMenu="resources"><i className="fas fa-server"></i>Resources</Menunya>
            <Menunya to="/achievment" namaMenu="achievment"><i className="fas fa-trophy"></i>Achievment</Menunya>
            <Menunya to="/projects" namaMenu="projects"><i className="fas fa-project-diagram"></i>Projects</Menunya>
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
  
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<PageAbout/>} />
        <Route path="timeline" element={<PageTimeline/>} />
        <Route path="resources" element={<PageResources/>} />
        <Route path="achievment" element={<PageAchievment/>}/>
        <Route path="achievment/:id" element={<AchievmentDetail/>} />
        <Route path="projects" element={<PageProjects/>}/>
        <Route path="project/:id" element={<ProjectDetail/>} />
        <Route path="*" element={<NyasarState/>} />
      </Route>
    </Routes>
  );
}

export default App;
