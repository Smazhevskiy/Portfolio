import React from "react";
import style from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.titleDescription}>
                <h3 className={style.titleProject}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
            <div className={style.icon}></div>
        </div>
    );
}

