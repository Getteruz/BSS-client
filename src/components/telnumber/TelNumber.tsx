import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function TelNumber() {
    const [input, setInput] = useState<any>('')
    const { t } = useTranslation()
    return (
        <div className="hero_right">
            <h3 className="hero_right-title">{t('contactTalk')}</h3>
            <Link to="tel:9876543210" className="hero_right-tel">+998 90 100-00-00</Link>
            <Link to={"mailto:nfo@gmail.com"} className="hero_right-gmail">info@gmail.com</Link>
            <p className="hero_right-text">{t('contactText')}</p>
            <input className="hero_right-input" type="text" placeholder="+998" value={input}
                onChange={e => {

                    if (e.target.value !== "+" && e.target.value.length == 1) {
                        setInput("+998" + e.target.value)
                    } else {
                        setInput(e.target.value)
                    }
                }} />

            <button className="btn-send">{t("send")}</button>
        </div>
    )
}
