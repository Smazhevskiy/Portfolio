import React from 'react'
import s from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect'
import Particles from 'react-tsparticles'
import {particlesConfig} from '../assets/particleConfig/particleConfig'






export const Main = () => {
    return (
        <div id="main" className={s.mainBlock}>
            <Particles
                className={s.particles}
                options={particlesConfig}
            />
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <span>I am Artem <span>Smazhevskiy</span></span>
                    <ReactTypingEffect
                        text={'Front-end developer.'}
                    />
                </div>
                <div className={s.photo}>
                    <div className={s.image}></div>
                </div>
            </div>
        </div>
    )
}

