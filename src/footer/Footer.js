import React from 'react'
import s from './Footer.module.scss'
import {Title} from '../common/components/title/Title'
import telegramIcon from '../assets/images/telegram.svg'
import likedInIcon from './../assets/images/linkedin.svg'
import vkIcon from './../assets/images/vk.svg'
import gitHubIcon from '../assets/images/gitHubIcon.png'
import instImg from '../assets/images/instagram.svg'





export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <Title text={'Artem Smazhevskiy'}/>
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}>
                        <a target={'blank'}
                           href="https://t.me/smazhevskiy_a">
                            <img src={telegramIcon} alt="telegram"/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a target={'blank'}
                           href="https://vk.com/smazhevskiy_a">
                            <img src={vkIcon} alt="vk"/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a target={'blank'}
                           href="https://www.linkedin.com/in/artem-zmazhevskiy-330a40215/">
                            <img src={likedInIcon} alt="linkedIn"/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a target={'blank'}
                           href="https://github.com/Smazhevskiy">
                            <img src={gitHubIcon} alt="gitHub"/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a target={'blank'}
                           href="http://instgram.ru/artemsmazheuski">
                            <img src={instImg} alt="inst"/>
                        </a>
                    </div>
                </div>
                <span className={s.copyright}>2022 All Rights Reserved.</span>
            </div>
        </div>
    )
}

