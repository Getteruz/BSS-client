import React, { useState } from 'react'

export default function Litelabout() {
    const [input, setInput] = useState<any>()
    return (
        <div className='container'>

            <h1 className="AboutUs-title">Немного о наших компании</h1>
            <div className="AboutUs-wrap">
                <p>Гарантия увеличения объема бизнес-операций, что повышает производительность за счет сокращения аварий, перерывов и остановок операций. Снижение расходов и снижение рисков, сокращение числа рабочих дней по болезни и текучести кадров, меньше несчастных случаев и снижение риска юридических проблем.</p>
                <p>Снижение расходов и снижение рисков, сокращение числа рабочих дней по болезни и текучести кадров, меньше несчастных случаев и снижение риска юридических проблем.</p>
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
