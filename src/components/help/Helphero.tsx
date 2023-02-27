import React, { useRef, useState } from 'react'


const data = [
    {
        id: "21wqq9812",
        title: "Как обезопасить персонал компании?",
        text: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success. Do not focus on the victory, focus on the task. You miss 100 percent of the shots you don't take. If you keep moving in the right direction you'll get your dream or something better. The question isn't who is going to let me. It's who is going to stop me. If you wait until you feel like doing something, you will likely never accomplish it"
    },
    {
        id: "21dsdeiuy212",
        title: "If everything seems under control, youre just not going fast enough.",
        text: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success. Do not focus on the victory, focus on the task. You miss 100 percent of the shots you don't take. If you keep moving in the right direction you'll get your dream or something better. The question isn't who is going to let me. It's who is going to stop me. If you wait until you feel like doing something, you will likely never accomplish it"
    },
    {
        id: "21wqdswq9812",
        title: "Time is the capital of your life, so spend it wisely.",
        text: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success. Do not focus on the victory, focus on the task. You miss 100 percent of the shots you don't take. If you keep moving in the right direction you'll get your dream or something better. The question isn't who is going to let me. It's who is going to stop me. If you wait until you feel like doing something, you will likely never accomplish it"
    },
    {
        id: "21wqq98r3212",
        title: "Success usually comes to those who are too busy to be looking for it.",
        text: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success. Do not focus on the victory, focus on the task. You miss 100 percent of the shots you don't take. If you keep moving in the right direction you'll get your dream or something better. The question isn't who is going to let me. It's who is going to stop me. If you wait until you feel like doing something, you will likely never accomplish it"
    },
    {
        id: "21wqqkjk9812",
        title: "If everything seems under control, youre just not going fast enough.",
        text: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success. Do not focus on the victory, focus on the task. You miss 100 percent of the shots you don't take. If you keep moving in the right direction you'll get your dream or something better. The question isn't who is going to let me. It's who is going to stop me. If you wait until you feel like doing something, you will likely never accomplish it"
    },
    {
        id: "21wqqkjk981ds2",
        title: "Time is the capital of your life, so spend it wisely.",
        text: "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success. Do not focus on the victory, focus on the task. You miss 100 percent of the shots you don't take. If you keep moving in the right direction you'll get your dream or something better. The question isn't who is going to let me. It's who is going to stop me. If you wait until you feel like doing something, you will likely never accomplish it"
    }
]
export default function Helphero() {
    const [input, setInput] = useState<any>('')
    const [text, setText] = useState<string | boolean>(data[0].id)
    return (
        <>
            <div className='Helphero'>
                <div className="container">
                    <p className='Helphero-text'>Помощь</p>
                    <h2 className='Helphero-title'>Часто задаваемые вопросы</h2>
                </div>
            </div>
            <div className='Help_Question'>
                <div className="container">
                    <ul className='Help_Question-left'>
                        {data && data.map((e) => (
                            <li className='Help_Question-item'>
                                <h3 className='Help_Question-title' onClick={() => setText(state => state === e.id ? false : e.id)} >{e.title}?</h3>
                                <p className='Help_Question-text' style={text == e.id ? { display: "inline-block" } : { display: "none" }}>{e.text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="hero_right">
                        <h3 className="hero_right-title">Контакт для консультации:</h3>
                        <p className="hero_right-tel">+998 90 100-00-00</p>
                        <p className="hero_right-gmail">info@gmail.com</p>
                        <p className="hero_right-text">Оставить свой номер телефона для обратного звонка?</p>
                        <input className="hero_right-input" type="text" placeholder="+998" value={input} onChange={e => {
                            if (e.target.value.length == 1) {
                                setInput("+998" + e.target.value)
                            } else {
                                setInput(e.target.value)
                            }
                        }} />
                        <button className="btn-send">Отправить</button>
                    </div>
                </div>
            </div>
        </>
    )
}
