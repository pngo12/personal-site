import React from 'react';

const Main = props => {
    return (
        <header className="pl3 pa5-ns">
            <h1 className="f3 f1-m f-headline-l"> {props.title} </h1>
            <h1 className="f-subheadline-l lh-title"> {props.subtitle} </h1>
            <p className="f4 lh-copy">
                {props.body}
            </p>
            <div className="w-85 pv3 mv4">
                <h1 className="f3 f2-m lh-solid">{props.subhead}</h1>
                <p className="f4 lh-copy">
                    {props.text}
                    <br />
                    <br />
                    {props.text2}
                </p>
            </div>
        </header>
    );
}

export default Main;