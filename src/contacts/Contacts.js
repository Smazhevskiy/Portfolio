import React, {useState} from 'react'
import s from './Contacts.module.scss'
import axios from 'axios'
import {Title} from '../common/components/title/Title'
import Fade from 'react-reveal/Fade'




export const Contacts = ({setModal}) => {

    const [name, setName] = useState('')
    const [contacts, setContacts] = useState('')
    const [message, setMessage] = useState('')
    const [sendMessage, setSendMessage] = useState('')
    const [disabled, setDisabled] = useState(false)
    const ChangeInputName = (e) => {
        setName(e.currentTarget.value)
    }
    const ChangeInputEmail = (e) => {
        setContacts(e.currentTarget.value)
    }
    const ChangeInputMessage = (e) => {
        setMessage(e.currentTarget.value)
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        setDisabled(true)
        if(name.trim()) {
            const res = await axios.post('https://smtp-nodemailer.herokuapp.com/sendMessage',
                {name, contacts, message})
            try {
                if(res.status === 200) {
                    setSendMessage('Success!')

                    setTimeout(() => {
                        setSendMessage('')
                        setName('')
                        setContacts('')
                        setMessage('')
                        setModal && setModal(true)
                    }, 1000)

                }
                setDisabled(false)
            }
            catch (e) {
                return setSendMessage(e.message)
            }
        } else {
            setDisabled(false)
            setSendMessage('Incorrect data')
        }
    }
    return (
        <div id="contacts" className={s.contactsBlock}>
            <div className={s.container}>
                <Title text={'Contacts'}/>
                <Fade>
                    <form className={s.contactForm}>
                        <input className={s.formArea}
                               type="text"
                               placeholder="Name"
                               value={name}
                               onChange={(e) => ChangeInputName(e)}
                        />
                        <input className={s.formArea}
                               type="text"
                               placeholder="E-mail or telephone"
                               value={contacts}
                               onChange={(e) => ChangeInputEmail(e)}
                        />
                        <textarea className={s.messageArea}
                                  placeholder="Message"
                                  value={message}
                                  onChange={(e) => ChangeInputMessage(e)}
                        />
                        <button type="submit" onClick={onSubmitHandler}>Send message</button>
                        {
                            disabled ? <span className={s.sendFont}>Loading...</span> : sendMessage.length > 0
                                ? <span className={s.sendFont}>{sendMessage}</span> : null
                        }
                    </form>
                </Fade>
            </div>
        </div>

    )
}

