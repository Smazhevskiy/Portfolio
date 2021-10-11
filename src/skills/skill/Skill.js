import React from "react";
import s from './Skill.module.scss'




export const Skill = ({title, description, icon}) => {
    return (
        <div className={s.skillBlock}>
            <img src={icon} alt="icon"/>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
}

