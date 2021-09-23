import React from "react";
import s from './Skills.module.css'
import stylesContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import jsIcon from './../common/images/jsIcon.png'





export const Skills = ({title, description}) => {

    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={title.js} description={description.js} icon={jsIcon}/>
                    <Skill title={title.css} description={description.css}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                    <Skill title={title.react} description={description.react}/>
                </div>
            </div>
        </div>
    );
}

