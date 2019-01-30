import React from 'react';

const Hero = () => {
    return ( 
        <div class="section started">
            <div class="slide" 
            // style="background-image: url(images/slide-bg-1.jpg);"
            // style={{backgroundColor: 'black'}}
            ></div>
            <div class="centrize full-width">
                <div class="vertical-center">
                    <div class="st-title align-center">
                        <div class="typing-title">
                            <p>Web Applications</p>
                            <p>Problem Solver</p>
                            <p>Web Design</p>
                        </div>
                        <span class="typed-title"></span>
                    </div>
                </div>
            </div>
            <a href="#" class="mouse-btn"><i class="icon ion ion-chevron-down"></i></a>
        </div>
     );
}
 
export default Hero;
