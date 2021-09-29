import React from "react";
import s from './Project.module.css'




export const Project = ({title, description, style}) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.img} style={style}>
                <a className={s.viewBtn}>View</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>


        </div>
    );
}

