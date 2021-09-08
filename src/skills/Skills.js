import React from "react";
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import jsIcon from '../common/images/jsIcon.png'


export const Skills = ({title, description}) => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>

                    <Skill title={title.js}
                           description={description.js}
                           icon={jsIcon}/>

                    <Skill title={title.css}
                           description={description.css}/>

                    <Skill title={title.react}
                           description={description.react}/>

                </div>
            </div>
        </div>
    );
}

