import React, { useState } from 'react'

export default function TelNumber() {
    const [input, setInput] = useState<any>('')
    return (
        <div className="hero_right">
            <h3 className="hero_right-title">Контакт для консультации:</h3>
            <p className="hero_right-tel">+998 90 100-00-00</p>
            <p className="hero_right-gmail">info@gmail.com</p>
            <p className="hero_right-text">Оставить свой номер телефона для обратного звонка?</p>
            <input className="hero_right-input" type="text" placeholder="+998" value={input}
                onChange={e => {
                    console.log(e.target.value)
                    if (e.target.value !== "+" && e.target.value.length == 1) {
                        setInput("+998" + e.target.value)
                    } else {
                        setInput(e.target.value)
                    }
                }} />

            <button className="btn-send">Отправить</button>
        </div>
    )
}
