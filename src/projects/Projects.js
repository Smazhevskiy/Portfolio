import React from 'react'
import s from './Projects.module.scss'
import todoImage from '../assets/images/todoImg.png'
import socialImage from '../assets/images/socialImg.png'
import cardsImg from '../assets/images/cardsImg.png'
import {Title} from '../common/components/title/Title'
import {Project} from './project/Project'
import booksImg from '../assets/images/searchBooksImg.png'
import landingImg from '../assets/images/landingImg.png'
import gradientsImg from '../assets/images/gradients.png'
import Fade from 'react-reveal/Fade'




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

    const books = {
        backgroundImage: `url(${booksImg})`,
    }

    const landing = {
        backgroundImage: `url(${landingImg})`,
    }

    const gradients = {
        backgroundImage: `url(${gradientsImg})`,
    }


    return (
        <div id="projects" className={s.projectsBlock}>
            <div className={s.container}>
                <Title text={'Projects'}/>
                <Fade>
                    <div className={s.projects}>
                        <Project style={socialNetwork}
                                 title={'Social Network'}
                                 hrefDemo={'https://smazhevskiy.github.io/socialNetwork'}
                                 hrefCode={'https://github.com/Smazhevskiy/socialNetwork'}
                                 description={'A social networking service. An online platform for people to build ' +
                                 'social networks or social relationships with other people.'}
                        />
                        <Project style={todolist}
                                 title={'Todolist'}
                                 hrefDemo={'https://smazhevskiy.github.io/toDoList'}
                                 hrefCode={'https://github.com/Smazhevskiy/toDoList'}
                                 description={'App for Task Management, Project Management, Productivity. '}
                        />
                        <Project style={cards}
                                 title={'Cards'}
                                 hrefDemo={'https://smazhevskiy.github.io/learningCards_App'}
                                 hrefCode={'https://github.com/Smazhevskiy/learningCards_App'}
                                 description={'Here you can create your own card packs with questions and answers.'}
                        />
                        <Project style={books}
                                 title={'Search books'}
                                 hrefDemo={'https://smazhevskiy.github.io/googleBooks'}
                                 hrefCode={'https://github.com/Smazhevskiy/googleBooks'}
                                 description={'App for searching books bu goole API.'}
                        />
                        <Project style={gradients}
                                 title={'Gradients'}
                                 hrefDemo={'https://smazhevskiy.github.io/VertageLabTest'}
                                 hrefCode={'https://github.com/Smazhevskiy/VertageLabTest'}
                                 description={'Mixing two colors in #hex format with the ability to edit, delete colors and validate for a color code'}
                        />
                        <Project style={landing}
                                 title={'Simple landing'}
                                 hrefDemo={'https://smazhevskiy.github.io/layout-Freelance'}
                                 hrefCode={'https://github.com/Smazhevskiy/layout-Freelance'}
                        />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

