import React from "react";
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"Js"}
                           description={"Search for the keywords to learn more about each warning."}/>
                    <Skill title={"CSS"}
                           description={" it with appropriate styles. Learn more:"}/>
                    <Skill title={"React"}
                           description={" attribute requires a valid value to be accessible. Provide a valid, navigable address as the hr"}/>
                    <Skill title={"Redux"}
                           description={" but still need the element to resemble a link, use a button and change"}/>
                </div>
            </div>
        </div>
    );
}

