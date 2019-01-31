import React from 'react';

const About = props => {
    return (
        <div class="pa3 pa5-ns">
            <p class="f4 lh-copy measure">
                {props.text}
            </p>
        </div>

    );
}

export default About;