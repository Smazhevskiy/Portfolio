import React from "react";
import style from './Skill.module.css'


export const Skill = ({title, description, icon}) => {
    return (
        <div className={style.skill}>
            <img className={style.icon} src={icon} alt="icon"/>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    );
}


{/*<div className={style.icon}>{<img src={icon} alt="icon"/>}</div>*/}