import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import img from "../../assets/images/Vectorleft1.svg"
import routes from '../../shared/constants/routes'
interface Props {
    object: any,

}
export default function ObjectText({ object }: Props) {
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    return (

        <>
            <div className='ObjectHeros'>
                <div className="container">
                    <p className='ObjectHeros-object'>Объекты</p>
                    <h2 className='ObjectHeros-title'>Услуги, которые мы предлагаем!</h2>
                    <p className='ObjectHeros-text'>которые предоставляемых нами услуг.</p>
                </div>
            </div>
            <div className="container ObjectHeros__boxyy">
                {object && object?.map((e: any) => (
                    <div className="Object__cardsBox-box1" onClick={() => navigate(routes.OBJECT + `/${e?._id}`)}>
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
            </div >
        </>
    )
}
