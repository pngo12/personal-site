import React from 'react';

const Contact = props => {
    return (
        <div className="flex flex-column">
            <div className="pa0 pa5-ns">

                <h1 className="f3 f2-m f1-l"> {props.title} </h1>

                <div className="di v-mid">
                    <ion-icon size="large" name="mail"></ion-icon>
                    <a href="mailto:pngo12.com">{props.email}</a>
                </div>
                <div className="di v-mid">
                    <ion-icon size="large" name="logo-linkedin"></ion-icon>
                    <a href="https://linkedin.com/in/phillip-ngo12">{props.linkedIn}</a>
                </div>
                <div className="di v-mid">
                    <ion-icon size="large" name="logo-octocat"></ion-icon>
                    <a href="https://github.com/pngo12">{props.github}</a>
                </div>

            </div>
        </div>
    );
}

export default Contact;