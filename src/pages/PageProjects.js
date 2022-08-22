import React from "react";
// import projects.json
import projects from "./projects/projects.json";

function PageProjects() {
  return (
    <div class="container-gallery">
        
        {
            projects.map((item, index) => {
                return (
                    <div class="wrapper">
                        <div class="image-wrapper">
                            <img alt={item.name} data-src={item.image} class="lazyload"/>
                        </div>
                        <div class="caption">
                            <p><a class="link-href" type="project" image={item.img} page={'project' + item.id} id={item.id} href={'project/' + item.id}>{item.name}</a></p>
                        </div>
                    </div>

                )
            })
        }

    </div>
  );
}

export default PageProjects;