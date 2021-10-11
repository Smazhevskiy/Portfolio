import React from "react";
import s from './Contacts.module.scss'
import stylesContainer from "../common/styles/Container.module.css";




export const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${stylesContainer.container} ${s.contactContainer}`}>
                <h2>Contacts</h2>
                <p>I am available for freelance jobs </p>
                <form className={s.form}>
                    <input type='text' placeholder={'Name'}/>
                    <input type="text" placeholder={'example@gmail.com'}/>
                    <textarea placeholder={'input text'}/>
                    <button type={'submit'} className={s.submitBtn}>Send</button>
                < /form>
            </div>
        </div>
    );
}

