import Titles from "../titles/titles";
import icon from "../../assets/images/Vectorleftr.svg"
import iconr from "../../assets/images/Vectorr.svg"
import Presentation from "../../assets/images/Presentation.png"
import Rreess from "../../assets/images/Rectanglesaa.png"
import Rectangl from "../../assets/images/Rectanglehelopng.png"
import Rectangle2 from "../../assets/images/Rectangle24491.png"
import Calendar from "../../assets/images/Calendar.png"
import Achivement from "../../assets/images/Achivement.png"
import NeedKnow from "../needknow/needKnow";
export default function Objects() {
    return (
        <div className="Object">
            <div className="container">
                <Titles span={"Наше проекты"} title={"Примеры объектов!"} text={"которые предоставляемых нами услуг."} />
                <div className="Object_region">
                    <h2 className="Object_region-title"> Название регионального объекта Баку</h2>
                    <span className="Object_region-year">2018</span>
                    <div className="Object_region-wrap">
                        <div className="Object_region-btns" >
                            <div className="Object_region-btnClick"></div>
                            <div className="Object_region-btn"></div>
                            <div className="Object_region-btn"></div>
                            <div className="Object_region-btn"> </div>
                        </div>
                        <p className="Object_region-text">Гарантия увеличения объема бизнес-операций, что повышает производительность за счет сокращения аварий, перерывов и остановок операций. Снижение расходов и снижение рисков, сокращение числа рабочих дней по болезни и текучести кадров, меньше несчастных случаев и снижение риска юридических проблем.</p>
                        <div className="Object_region-icons">
                            <img className="Object_region-iconright" src={iconr} alt="icon" />
                            <img className="Object_region-iconleft" src={icon} alt="icon" />
                        </div>

                        <img className="Object_region-images2" src={Rectangl} alt="" />
                        <img className="Object_region-images3" src={Rectangle2} alt="" />
                        <img className="Object_region-images" src={Rreess} alt="" />
                    </div>
                </div>
                <div className="Titles-wrap">  <Titles span={"Процесс"} title={"Что нужно знать?"} text={"чтобы обезопасить своих сотрудников с помощью нашей компанией"} /> <button className="btn">Нужна консултация</button></div>
            </div>

            <div className="NeedKnow-wrap">
                <div className="container">
                    <NeedKnow img={Presentation} text={"Гарантия увеличения объема бизнес-операций, что повышает производительность за счет сокращения аварий, перерывов и остановок операций."} />
                    <NeedKnow img={Calendar} text={"Снижение расходов и снижение рисков, сокращение числа рабочих дней по болезни и текучести кадров, меньше несчастных случаев и снижение риска юридических проблем."} />
                    <NeedKnow img={Achivement} text={"Повышение репутации и увеличение числа просмотров среди покупателей, клиентов и других партнеров."} />
                </div>
            </div>

        </div>
    )
}