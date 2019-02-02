import React from 'react';

const Skills = props => {
    const bullets = props.bullets
    const skillsList = bullets.map(skill =>
        <li>{skill}</li>
    );
    return (
        <div>
            <h1 className="f3 f2-m lh-solid">{props.title}</h1>
            <p className="f4 lh-copy">
                {props.text}
            </p>
            <div class="mw9 center ph3-ns">
                <div class="cf ph2-ns">
                    <div class="fl w-50-ns ph2">
                        <ul className="f4 lh-copy">
                            {skillsList}
                        </ul>
                    </div>
                    <div class="fl w-50-ns ph2">
                        <ul className="f4 lh-copy">
                            {skillsList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;