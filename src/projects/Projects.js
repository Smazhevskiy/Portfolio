import React from "react";
import s from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = (props) => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer} ${s.projectsContainer}`}>
                <h2 className={s.titleProjects}>Projects</h2>
               <div className={s.projects}>
                   <Project title={'Social Network'}
                            description={"A social network is a social structure made up of a set of social actors grgr rhr hrhr geeeeeee hreh hrtrtht hth rghrhr "}
                   />
                   <Project title={'To Do List'}
                            description={'TodoList is a simple web application with which you can create a list of tasks, mark done and delete them.'}
                   />
                   <Project title={'To Do List'}
                            description={'TodoList is a simple web application with which you can create a list of tasks, mark done and delete them.'}
                   />
               </div>

            </div>

        </div>
    );
}

