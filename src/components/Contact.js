import React from 'react';

const Contact = props => {
    return (
        <div className="mw9 center">
            <div className="cf pa3 pa5-ns">
                <h1 className="f3 f2-m lh-solid"> {props.title} </h1>
                <div className="fl w-100 w-third-ns pa2">
                        <ion-icon size="large" name="mail"></ion-icon>
                        <a href="mailto:pngo12.com">{props.email}</a>
                </div>
                <div className="fl w-100 w-third-ns pa2">
                        <ion-icon size="large" name="logo-linkedin"></ion-icon>
                        <a href="https://linkedin.com/in/phillip-ngo12">{props.linkedIn}</a>
                </div>
                <div className="fl w-100 w-third-ns pa2">
                        <ion-icon size="large" name="logo-octocat"></ion-icon>
                        <a href="https://github.com/pngo12">{props.github}</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;




        // <div className="mw9 center ph3-ns">
        //     <div className="pa0 pa5-ns">
        //         <h1 className="f3 f2-m f1-l"> {props.title} </h1>

        //         <div className="">
        //             <ion-icon size="large" name="mail"></ion-icon>
        //             <a href="mailto:pngo12.com">{props.email}</a>
        //         </div>
        //         <div className="">
        //             <ion-icon size="large" name="logo-linkedin"></ion-icon>
        //             <a href="https://linkedin.com/in/phillip-ngo12">{props.linkedIn}</a>
        //         </div>
        //         <div className="">
        //             <ion-icon size="large" name="logo-octocat"></ion-icon>
        //             <a href="https://github.com/pngo12">{props.github}</a>
        //         </div>

        //     </div>
        // </div>