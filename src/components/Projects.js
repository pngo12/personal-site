import React from 'react';

const Projects = () => {
    return (
        <div class="section works align-left" id="works-section">
            <div class="fw">
                <div class="titles animated">
                    <div class="title">Projects</div>
                </div>
                <div class="row box-items">
                    <div class="col col-m-12 col-t-6 col-d-6 box-item f-mockups">
                        <div class="item animated">
                            <div class="desc">
                                <div class="image">
                                    <a href="#popup-1" class="has-popup"><img src="images/works/work1.jpg" alt="" /></a>
                                </div>
                                <div class="category">Mockups</div>
                                <div class="name">
                                    <a href="#popup-1" class="has-popup">Shopping Bag PSD MockUp</a>
                                </div>
                            </div>
                        </div>
                        <div id="popup-1" class="popup-box mfp-fade mfp-hide">
                            <div class="content">
                                <div class="image">
                                    <img src="images/works/work1.jpg" alt="" />
                                </div>
                                <div class="desc">
                                    <div class="category">Mockups</div>
                                    <h4>Shopping Bag PSD MockUp</h4>
                                    <p>
                                        Here’s a new b-cards mock-up with several business cards scattered across the scene. The PSD file allows you to easily. Here’s a new b-cards mock-up with several business cards scattered across the scene.
							</p>
                                    <a href="#" class="btn">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    );
}

export default Projects;