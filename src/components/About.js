import React from 'react';

const About = props => {
    return (
        <section>
            <div className="pa3 pa5-ns">
                <p className="f4 lh-copy measure">
                    {props.text}
                </p>
            </div>
        </section>

    );
}

export default About;