import React from "react";
import s from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'



export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${stylesContainer.container}`}>
                <div className={s.textBlock}>
                    <span> Hi There</span>
                    <h1>I'm Artem Zmazhevskiy</h1>
                    <p>I'm frontend Developer</p>
                </div>
                <div className={s.photo}><img src="" alt="profilePhoto"/></div>
            </div>
        </div>
    );
}
