import React from 'react';

const Skills = props => {
    const columnOne = props.columnOne;
    const columnTwo = props.columnTwo;
    const skillsColumnOne = columnOne.map((skill, i) =>
        <li key={i}>{skill}</li>
    );
    const skillsColumnTwo = columnTwo.map((skill, i) =>
        <li key={i}>{skill}</li>
    );
    return (
        <div>
            <h1 className="f3 f2-m lh-solid">{props.title}</h1>
            <p className="f4 lh-copy">
                {props.text}
            </p>
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-50-ns ph2">
                        <ul className="f4 lh-copy">
                            {skillsColumnOne}
                        </ul>
                    </div>
                    <div className="fl w-50-ns ph2">
                        <ul className="f4 lh-copy">
                            {skillsColumnTwo}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;