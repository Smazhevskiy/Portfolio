import React from "react";
import s from './Projects.module.scss'
import stylesContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";
import socialImg from '../assets/images/socialNetwork.jpg'
import todoImg from '../assets/images/toDolList.jpg'
import cardsImg from '../assets/images/cardsImg.jpeg'
import {Title} from "../common/components/title/Title";




export const Projects = (props) => {
    const socialNetwork = {
        backgroundImage: `url(${socialImg})`
    }
    const todo = {
        backgroundImage: `url(${todoImg})`
    }
    const cards = {
        backgroundImage: `url(${cardsImg})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${stylesContainer.container} ${s.projectsContainer}`}>
               <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project
                        style={socialNetwork} //обязательно через атрибут style
                        title={'Social Network'}
                        description={"A social network is a social structure made up of a set of social"}/>
                    <Project
                        style={todo}
                        title={'To Do List'}
                        description={'TodoList is a simple web application with which you can create a list of tasks, mark done and delete them.'}/>
                    <Project
                        style={cards}
                        title={'Cards'}
                        description={'Cards is on with which you can create a list of tasks, mththark done and delete them.'}/>
                </div>
            </div>
        </div>
    );
}

