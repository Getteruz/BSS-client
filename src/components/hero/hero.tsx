import { useState } from "react";
import Safety from "../safety/safety";
import TelNumber from "../telnumber/TelNumber";

export default function Hero() {

    return (
        <div className="hero">
            <div className="container">

                <div className="hero_left">
                    <div className="hero_left-wrap">
                        <h1 className="hero_left-title">Что нужно знать, чтобы обезопасить своих сотрудников в вашей компании</h1>
                        <p className="hero_left-text">Обеспечение безопасности ваших сотрудников и бесперебойной работы вашего бизнеса — наша главная задача!</p>
                    </div>

                    <div className="hero-safety">
                        <Safety />
                        <Safety />
                    </div>
                </div>
                <TelNumber />
            </div>

            <div>
                <div className="hero_color"></div>
                <div className="hero_color"></div>
                <div className="hero_color"></div>
            </div>
        </div>
    )
}