import React from "react";
import s from './Contact.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import imgIcon from '../common/images/jsIcon.png'




export const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${stylesContainer.container} ${s.contactContainer}`}>
                <h2>Contact</h2>
                <p>I am available for freelance jobs. Please contact me and send me your questions and inquiries. </p>
                <div className={s.contactMeBlock}>
                    <div>
                        <ul>
                            <li>Name</li>
                            <li>Address</li>
                            <li>Email</li>
                            <li>Mobile</li>
                            <li>Telegram</li>
                        </ul>
                    </div>
                    <div className={s.gitHubBlock}>
                        <span><a href="https://github.com/Smazhevskiy">gitHub</a></span>
                        <span><a href="https://github.com/Smazhevskiy">Vk</a></span>
                        <span><a href="https://github.com/Smazhevskiy">Inst</a></span>
                        <span><a href="https://github.com/Smazhevskiy">Telegr</a></span>
                        <span><a href="https://github.com/Smazhevskiy">WatsUp</a></span>

                    </div>
                </div>
            </div>
        </div>
    );
}

