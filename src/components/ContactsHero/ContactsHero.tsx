import React from 'react'
import { Link } from 'react-router-dom'
import { YMaps, Map } from "react-yandex-maps";

export default function ContactsHero() {
    return (
        <>

            <div className='ContactsHero'>
                <div className="container">
                    <div className='ContactsHero-top'>
                        <div className="ContactsHero_left">
                            <p className='ContactsHero_left-contact'>Контакты</p>
                            <h3 className='ContactsHero_left-title' >Наше контакты</h3>
                            <p className='ContactsHero_left-text'>Читайте все о наших последних проектах, события</p>
                        </div>
                        <div className="Newshero_right">
                            <p className="Newshero_right-text">Заинтересованы в сотрудничестве с нами?</p>
                            <Link to='/contact' className="ObjectsHero-tbn">Позвоните</Link>
                        </div>
                    </div>
                    <div className='ContactsHero_bottom'>
                        <div>
                            <p className='ContactsHero_bottom-text'>Наш адресс:</p>
                            <h3 className='ContactsHero_bottom-title'>г.Ташкент, ул. Истиклол
                                дом 167А, кв 44</h3>
                        </div>
                        <div>
                            <p className='ContactsHero_bottom-text'>Контакты</p>
                            <h3 className='ContactsHero_bottom-title'>+998 78 100-00-00
                                +998 90 000-00-00</h3>
                        </div>
                        <div>
                            <p className='ContactsHero_bottom-text'>E-mail</p>
                            <h3 className='ContactsHero_bottom-title'>info@gmail.com</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='ContactsHero-map'>
                    <YMaps >
                        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width={1202} height={428} />
                    </YMaps>
                </div>
            </div>
        </>
    )
}
