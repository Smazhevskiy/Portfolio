import React from "react";
import s from './Project.module.css'




export const Project = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.icon}></div>
                <h3>{props.title}</h3>
                <span>{props.description}</span>

        </div>
    );
}

