import React from "react";
import s from './Skill.module.css'




export const Skill = ({title, description, icon}) => {
    return (
        <div className={s.skillBlock}>
            <img className={s.icon} src={icon} alt="icon"/>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
}

