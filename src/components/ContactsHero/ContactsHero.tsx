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
                        <div className='ContactsHero_bottom-div'>
                            <p className='ContactsHero_bottom-text'>Наш адресс:</p>
                            <Link to={"/"} className='ContactsHero_bottom-title'>г.Ташкент, ул. Истиклол
                                дом 167А, кв 44</Link>
                        </div>
                        <div>
                            <p className='ContactsHero_bottom-text'>Контакты</p>
                            <Link to={"tel:9876543210"} className='ContactsHero_bottom-title'>+998 78 100-00-00</Link> <br />
                            <Link to={"tel:9876543210"} className='ContactsHero_bottom-title'>+998 90 000-00-00</Link>

                        </div>
                        <div>
                            <p className='ContactsHero_bottom-text'>E-mail</p>
                            <Link to={"mailto:nfo@gmail.com"} className='ContactsHero_bottom-title'>info@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='ContactsHero-map'>
                    <YMaps >
                        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                    </YMaps>
                </div>
            </div>
        </>
    )
}
