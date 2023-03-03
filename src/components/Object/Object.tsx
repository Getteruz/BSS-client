import Titles from "../titles/titles";
import icon from "../../assets/images/Vectorleftr.svg"
import iconr from "../../assets/images/Vectorr.svg"
import Presentation from "../../assets/images/Presentation.png"
import Rreess from "../../assets/images/Rectangle4490.png"
import Rectangl from "../../assets/images/Rectanglehelopng.png"
import Rectangle2 from "../../assets/images/Rectangle24491.png"
import Calendar from "../../assets/images/Calendar.png"
import Achivement from "../../assets/images/Achivement.png"
import NeedKnow from "../needknow/needKnow";
import { useRef, useState } from "react";
import TelNumber from "../telnumber/TelNumber";
export default function Objects() {
    const [number, setNunber] = useState<number>(0)
    const [number2, setNunber2] = useState<any>(1)
    const [number3, setNunber3] = useState<any>(2)
    console.log(number, number2, number3)
    const data = [
        {
            text: "Гарантия увеличения объема бизнес-операций, что повышает производительность за счет сокращения аварий, перерывов и остановок операций. Снижение расходов и снижение рисков, сокращение числа рабочих дней по болезни и текучести кадров, меньше несчастных случаев и снижение риска юридических проблем.",
            title: "Название регионального объекта Баку",
            year: 2018,
            img: Rreess
        },
        {
            text: "Обеспечение безопасности ваших сотрудников и бесперебойной работы вашего бизнеса — наша главная задача! ",
            title: "Название регионального объекта АЛЛВЫ",
            year: 2014,
            img: Rectangle2
        },
        {
            text: "Читайте все о наших последних проектах, события и объявлениях компании.",
            title: "Название регионального объекта ЩВЫВОЫ",
            year: 2019,
            img: Rectangl
        }

    ]
    const x = useRef<any>()

    return (

        <div className="Object">
            <div className="container">
                <Titles span={"Наше проекты"} title={"Примеры объектов!"} text={"которые предоставляемых нами услуг."} />
                <div className="Object_region">
                    <h2 className="Object_region-title"> {data[number].title}</h2>
                    <span className="Object_region-year">{data[number].year}</span>
                    <div className="Object_region-wrap">
                        <div className="Object_region-btns" >
                            {data.map((e, i): any => {
                                if (i == number) {
                                    return (<div className="Object_region-btnClick"></div>)
                                } else {
                                    return (<div className="Object_region-btn"></div>)
                                }
                            })}

                        </div>
                        <p className="Object_region-text">{data[number].text}</p>

                        <img className="Object_region-images2" src={data[number3]?.img} width={336} height={413} alt="" />
                        <img className="Object_region-images3" src={data[number2]?.img} width={378} height={441} alt="" />
                        <img className="Object_region-images" src={data[number]?.img} width={413} height={495} alt="" />
                        <div className="Object_region-icons">

                            <img className="Object_region-iconright" src={iconr} alt="icon" onClick={(e) => {
                                if (number > 0) {
                                    setNunber(number - 1)
                                }
                                if (number == 0) {
                                    setNunber(data.length - 1)
                                }
                                if (number2 > 0) {
                                    setNunber2(number2 - 1)
                                }
                                if (number2 == 0) {
                                    setNunber2(data.length - 1)
                                }
                                if (number3 > 0) {
                                    setNunber3(number3 - 1)
                                }
                                if (number3 == 0) {
                                    setNunber3(data.length - 1)
                                }
                            }} />
                            <img className="Object_region-iconleft" src={icon} alt="icon" onClick={(e) => {
                                if (number !== (data.length - 1)) {
                                    setNunber(number + 1)
                                }
                                if (number == (data.length - 1)) {
                                    setNunber(0)
                                }
                                if (number2 !== (data.length - 1)) {
                                    setNunber2(number2 + 1)
                                }
                                if (number2 == (data.length - 1)) {
                                    setNunber2(0)
                                }
                                if (number3 !== (data.length - 1)) {
                                    setNunber3(number3 + 1)
                                }
                                if (number3 == (data.length - 1)) {
                                    setNunber3(0)
                                }
                            }} />
                        </div>

                    </div>
                </div>
                <div className="Titles-wrap">  <Titles span={"Процесс"} title={"Что нужно знать?"} text={"чтобы обезопасить своих сотрудников с помощью нашей компанией"} /> <button className="btn" onClick={() => x.current.style.display = "block"}>Нужна консултация</button></div>
            </div>
            <div ref={x} className="wrap" onClick={(e: any) => {
                if (e.target == x.current) {
                    e.target.style.display = "none"
                }
            }}>
                <TelNumber />
            </div>

            <div className="NeedKnow-wrap">
                <div className="container">
                    <NeedKnow img={Presentation} text={"Гарантия увеличения объема бизнес-операций, что повышает производительность за счет сокращения аварий, перерывов и остановок операций."} />
                    <NeedKnow img={Calendar} text={"Снижение расходов и снижение рисков, сокращение числа рабочих дней по болезни и текучести кадров, меньше несчастных случаев и снижение риска юридических проблем."} />
                    <NeedKnow img={Achivement} text={"Повышение репутации и увеличение числа просмотров среди покупателей, клиентов и других партнеров."} />
                </div>
            </div>

        </div >
    )
}