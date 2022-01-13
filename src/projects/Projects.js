import React from 'react'
import s from './Projects.module.scss'
import todoImage from '../assets/images/todoImg.png'
import socialImage from '../assets/images/socialImg.png'
import cardsImg from '../assets/images/cardsImg.png'
import {Title} from '../common/components/title/Title'
import {Project} from './project/Project'




export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    const cards = {
        backgroundImage: `url(${cardsImg})`,
    }

    return (
        <div id="projects" className={s.projectsBlock}>
            <div className={s.container}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={socialNetwork}
                             title={'Social Network'}
                             hrefDemo={'https://smazhevskiy.github.io/socialNetwork'}
                             hrefCode={'https://github.com/Smazhevskiy/socialNetwork'}
                             description={'A social networking service. An online platform for people to build ' +
                             'social networks or social relationships with other people.'}/>
                    <Project style={todolist}
                             title={'Todolist'}
                             hrefDemo={'https://smazhevskiy.github.io/toDoList'}
                             hrefCode={'https://github.com/Smazhevskiy/toDoList'}
                             description={'App for Task Management, Project Management, Productivity. '}/>
                    <Project style={cards}
                             title={'Cards'}
                             hrefDemo={'https://smazhevskiy.github.io/learningCards_App'}
                             hrefCode={'https://github.com/Smazhevskiy/learningCards_App'}
                             description={'Here you can create your own card packs with questions and answers. Then you can check your skills trying to give give answers to cards and grading your success or failure. Future cards will be offered based on personal grade.'}/>
                </div>
            </div>
        </div>
    )
}

