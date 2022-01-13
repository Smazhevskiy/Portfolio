import React from 'react'
import s from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect'
import Particles from 'react-tsparticles'
import {particlesConfig} from '../assets/particleConfig/particleConfig'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'



export const Main = () => {
    return (
        <div id="main" className={s.mainBlock}>
            <Particles
                className={s.particles}
                options={particlesConfig}
            />
            <Fade top>
                <div className={s.container}>
                    <div className={s.greeting}>
                        <span>Hi There</span>
                        <span>I am Artem <span>Smazhevskiy</span></span>
                        <ReactTypingEffect
                            text={'Front-end developer.'}
                        />
                    </div>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <div className={s.photo}>
                            <div className={s.image}></div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    )
}

