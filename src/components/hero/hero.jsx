import { useState } from "react";
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith";
import Safety from "../safety/safety";
import TelNumber from "../telnumber/TelNumber";
import sample from '../../assets/vidoe/dasads.mp4'

export default function Hero({ service }) {
    const widthwindow = useGetWindowWidth()
    return (
        <>

            <div className="hero">
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                <div className="container">
                    <div className="hero_left">
                        <div className="hero_left-wrap">
                            <h1 className="hero_left-title">Что нужно знать, чтобы обезопасить своих сотрудников в вашей компании</h1>
                            <p className="hero_left-text">Обеспечение безопасности ваших сотрудников и бесперебойной работы вашего бизнеса — наша главная задача!</p>
                        </div>
                        <div className="hero-safety">
                            {service && service.slice(0, 2)?.map((e) => (
                                <Safety title={e?.title} text={e?.text} id={e?._id} />
                            ))}
                        </div>
                    </div>

                    {widthwindow > 1000 ? <TelNumber /> : ""}
                </div>

                <div>
                    <div className="hero_color"></div>
                    <div className="hero_color"></div>
                    <div className="hero_color"></div>
                </div>
            </div>
        </>
    )
}