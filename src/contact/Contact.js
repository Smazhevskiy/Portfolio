import React from "react";
import style from './Contact.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <p>I am available for freelance jobs. Please contact me and send me your questions and inquiries. </p>
                    <div className={style.contactBox}>
                        <h3>GET IN TOUCH</h3>
                        <div>Contact address</div>
                        <div>Contact phone</div>
                        <div>Contact Email</div>
                </div>
            </div>
        </div>
    );
}

