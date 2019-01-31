import React from 'react';

const About = props => {
    return (
        <main class="pa3 pa5-ns">
            <p class="f4 lh-copy measure">
                {props.text}
            </p>
        </main>

    );
}

export default About;