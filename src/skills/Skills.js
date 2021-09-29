import React from "react";
import s from './Skills.module.css'
import stylesContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";




export const Skills = ({title, description}) => {

    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
               <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={title.js} description={description.js}/>
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

