import Titles from "../titles/titles";
import img1 from '../../assets/images/Globe.png'
import img2 from '../../assets/images/sheild-dynamic-color.png'
import img3 from '../../assets/images/AirBalloon.png'
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
interface Props {
    object: any,
}
export default function Objects({ object }: Props) {
    const { i18n } = useTranslation()

    const x = useRef<any>()
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    };

    return (
        <>
            <div className="Object">
                <div className="container">
                    <Titles span="Наше проекты" text="которые предоставляемых нами услуг." title="Примеры объектов!" />
                </div>
                < div className="Object__cardsBox" >
                    <Slider {...settings} centerMode centerPadding="500px">
                        {object && object?.map((e: any) => (
                            <div className="Object__cardsBox-box">
                                <div className="Object__cardsBox-imgdiv">
                                    <img className="Object__cardsBox-img" src={object[0]?.img[0]?.url} alt="" />
                                </div>
                                <div className="Object__cardsBox-content">
                                    <h3 className="Object__cardsBox-country">Узбекистан</h3>
                                    <h2 className="Object__cardsBox-title">Qibray 240 MW </h2>
                                    <p className="Object__cardsBox-text">Мы оказали услуги по технике безопасности, включая анализ и определение рисков, разработку плана безопасности, обучение сотрудников и установку системы видеонаблюдения. Результат - обеспечение безопасности объекта и предотвращение возможных угроз. </p>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </ div>

                <div className="container">
                    <div className="Object__pluss">
                        <div className="Object__pluss-card">
                            <img src={img1} alt="img" />
                            <h2 className="Object__pluss-title">Среда</h2>
                        </div>
                        <div className="Object__pluss-card">
                            <img src={img2} alt="img" />
                            <h2 className="Object__pluss-title">Безопасности</h2>
                        </div>
                        <div className="Object__pluss-card">
                            <img src={img3} alt="img" />
                            <h2 className="Object__pluss-title">Здоровья</h2>
                        </div>
                    </div>
                    <div className="Object__texts">
                        Как полностью интегрированная компания по оказанию профессиональных услуг и управлению проектами с офисами по всему миру, мы работаем в соответствии с нашими четырьмя основными ценностями: безопасность, добросовестность, сотрудничество и инновации. Мы коллективно обязуемся защищать наших сотрудников, заинтересованные стороны и окружающую среду от вреда.
                    </div>
                </div>
            </div >
        </>

    )

}