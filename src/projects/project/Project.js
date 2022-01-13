import React from 'react'
import style from './Project.module.scss'
import s from '../../common/components/button/Button.module.scss'




export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a className={s.btn} href={props.hrefDemo} target={'blank'}>View</a>
                <a className={s.btn} href={props.hrefCode} target={'blank'}>Code</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    )
}

