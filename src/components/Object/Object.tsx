import Titles from "../titles/titles";
import img1 from '../../assets/images/Globe.png'
import img2 from '../../assets/images/sheild-dynamic-color.png'
import img3 from '../../assets/images/AirBalloon.png'
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith";
import { useNavigate } from "react-router-dom";
import routes from "../../shared/constants/routes";
interface Props {
    object: any,
}
export default function Objects({ object }: Props) {
    const { i18n } = useTranslation()
    const { t } = useTranslation()
    const x = useRef<any>()
    const [width, setWidth] = useState()
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
    };
    const widthwindow = useGetWindowWidth()

    const navigate = useNavigate()
    return (
        <>
            <div className="Object">
                <div className="container">
                    <Titles span={t('ourProject')} text={t('ourProjectText')} title={t('ourProjectTitle')} />
                </div>
                < div className="Object__cardsBox" >
                    {/* <Slider {...settings} centerMode centerPadding="500px"> */}
                    {object && object?.map((e: any) => (
                        <div className="Object__cardsBox-box" onClick={() => navigate(routes.OBJECT + `/${e?._id}`)}>
                            <div className="Object__cardsBox-imgdiv">
                                <img className="Object__cardsBox-img" src={e?.img[0]?.url} alt="" />
                            </div>
                            <div className="Object__cardsBox-content">
                                <h3 className="Object__cardsBox-country">{e?.[`${i18n.language}_tag`]}</h3>
                                <h2 className="Object__cardsBox-title">{e?.[`${i18n.language}_title`]} </h2>
                                <p className="Object__cardsBox-text">{e?.[`${i18n.language}_text`]}</p>
                            </div>
                        </div>
                    ))}

                    {/* </Slider> */}
                </ div>

                <div className="container">
                    <div className="Object__pluss">
                        <div className="Object__pluss-card">
                            <img src={img1} alt="img" />
                            <h2 className="Object__pluss-title">{t('serviceCenter')}</h2>
                        </div>
                        <div className="Object__pluss-card">
                            <img src={img2} alt="img" />
                            <h2 className="Object__pluss-title">{t('serviceSafety')}</h2>
                        </div>
                        <div className="Object__pluss-card">
                            <img src={img3} alt="img" />
                            <h2 className="Object__pluss-title">{t('serviceHaelty')}</h2>
                        </div>
                    </div>
                    <div className="Object__texts">
                        {t('serviceText1')}
                    </div>
                </div>
            </div >
        </>

    )

}