import React from 'react'

import img from "../../assets/images/Vectorleft1.svg"
interface Props {
    object: any,

}
export default function ObjectText({ object }: Props) {
    return (

        <>
            <div className='ObjectHeros'>
                <div className="container">
                    <p className='ObjectHeros-object'>Объекты</p>
                    <h2 className='ObjectHeros-title'>Услуги, которые мы предлагаем!</h2>
                    <p className='ObjectHeros-text'>которые предоставляемых нами услуг.</p>
                </div>
            </div>
            <div className="container">
                <ul className='ObjectText'>
                    {object && object?.map((e: any) => (
                        <li className='ObjectText-item'>
                            <div className="ObjectText-top">
                                <div className="ObjectText-left">
                                    <h3 className='ObjectText-title'>{e?.title}</h3>
                                    <p className='ObjectText-text'>{e?.tag} </p>
                                </div>
                                <img src={img} alt="img" />
                            </div>

                            <p className='ObjectText-text2'>{e?.text}</p>
                        </li>
                    ))}
                </ul>
            </div >
        </>
    )
}
