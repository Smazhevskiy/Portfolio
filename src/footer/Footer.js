import React from "react";
import s from './Footer.module.scss'
import stylesContainer from '../common/styles/Container.module.css'




export const Footer = () => {
    return (
        <div>
            <div className={s.footerBlock}>
                <div className={`${stylesContainer.container} ${s.footerContainer}`}>
                    <h2>Артем Смажевский</h2>
                    <div className={s.socialIcons}>
                        <div className={s.socialIcon}>Vk</div>
                        <div className={s.socialIcon}>Facebook</div>
                        <div className={s.socialIcon}>Inst</div>
                        <div className={s.socialIcon}>GitHub</div>
                    </div>
                    <span className={s.copyright}>2021 All rights reserved</span>
                </div>

            </div>
        </div>
    )
}
