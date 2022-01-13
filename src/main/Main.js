import React from 'react'
import s from './Main.module.scss'



export const Main = () => {
    return (
        <div id="main" className={s.mainBlock}>
                <div className={s.container}>
                    <div className={s.greeting}>
                        <span>Hi There</span>
                        <span>I am Artem <span>Smazhevskiy</span></span>
                    </div>
                    <div className={s.photo}>
                        <div className={s.image}></div>
                    </div>
                </div>
        </div>
    )
}

