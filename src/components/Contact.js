import React from 'react';

const Contact = props => {
    return (
        <section>
            <div className="flex flex-wrap justify-around">
                <h1 className="f3 f2-m lh-solid">{props.title}</h1>
                <div className="flex items-center">
                    <ion-icon size="large" name="mail"></ion-icon>
                    <a href="mailto:pngo12@gmail.com">{props.email}</a>
                </div>

                <div className="flex items-center">
                    <ion-icon size="large" name="logo-linkedin"></ion-icon>
                    <a href="https:linkedin.com/in/phillip-ngo12">{props.linkedIn}</a>
                </div>

                <div className="flex items-center">
                    <ion-icon size="large" name="logo-octocat"></ion-icon>
                    <a href="https:github.com/pngo12">{props.github}</a>
                </div>

            </div>
        </section>
    );
}

export default Contact;