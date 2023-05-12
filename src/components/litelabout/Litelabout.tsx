import React, { useState } from 'react'
interface Props {

    aboutus: any,

}
export default function Litelabout({ aboutus }: Props) {
    const [input, setInput] = useState<any>()

    return (
        <div className='container'>

            <h1 className="AboutUs-title">Немного о наших компании</h1>
            <div className="AboutUs-wrap">
                <p>{aboutus?.text}</p>
                <p>{aboutus?.text2}.</p>
            </div>

            <div className="AboutUs_form">
                <h3 className="AboutUs_form-title">Оставьте свои контакты для консультации!</h3>
                <div className="AboutUs_form-wrap">
                    <div>
                        <label>
                            Имя
                            <input type="text" placeholder="name" />
                        </label>
                        <label >
                            Номер телефона
                            <input type="text" placeholder="+998" value={input} onChange={e => {

                                if (e.target.value !== "+" && e.target.value.length == 1) {
                                    setInput("+998" + e.target.value)
                                } else {
                                    setInput(e.target.value)
                                }
                            }} />
                        </label>
                    </div>

                    <button className="btn">Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}
