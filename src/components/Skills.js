import React from 'react';

const Skills = props => {
    return (
        // <div className="pa3 pa5-ns">
        <div>
            <h1 className="f3 f2-m lh-solid">{props.title}</h1>
            <p className="f4 lh-copy">
                {props.text}
            </p>
            <ul className="f4 lh-copy">
                <li>{props.bullets}</li>
            </ul>
        </div>
    );
}

export default Skills;