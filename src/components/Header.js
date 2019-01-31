import React from 'react';

const Header = props => {
    return (
        <header className="pa3 pa5-ns">
            <h1 className="f3 f1-m f-headline-l"> {props.title} </h1>
            <h1 className="f3 f2-m f1-l"> {props.subtitle} </h1>
            <p className="f4 lh-copy">
                {props.body}
            </p>
        </header>
    );
}

export default Header;