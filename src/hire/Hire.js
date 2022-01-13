import React from 'react'
import s from './Hire.module.scss'
import {Title} from '../common/components/title/Title'
import {Button} from '../common/components/button/Button'




export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={s.container}>
                <Title text={'I am open to work'}/>
                <Button text={'Hire me'}/>
            </div>
        </div>
    )
}

