import React from "react";
import { useSearchParams, Link } from "react-router-dom";
// import achievment.json
import achievment from "./achievment/achievment.json";
import AchievmentDetail from "./achievment/AchievmentDetail";

function PageAchievment() {
    return(
        <div class="container-gallery">
            
            {
                achievment.map((item, index) => {
                    return (
                        <div class="wrapper">
                            <div class="image-wrapper">
                                <img alt={item.title} data-src={item.img} class="lazyload"/>
                            </div>
                            <div class="caption">
                                <p><Link class="link-href" type="achievment" id={item.id} to={ item.id}>{item.title}</Link></p>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default PageAchievment;