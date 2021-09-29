import React from "react";
import s from './Title.module.scss'




export const Title = ({text}) => {
    return (
        <div className={s.title}>
            <h2 className={s.text}>{text}</h2>
        </div>
    );
}

