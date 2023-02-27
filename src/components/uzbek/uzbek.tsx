import { useState } from "react"
import Group from "../../assets/images/Group.png"
import imgGrap from "../../assets/images/Groupround.svg"


export const Uzbek = () => {
    const data = [
        {
            country: "UZBEKISTAN",
            title: "Be undeniably good. No marketing effort or social media buzzword can be a substitute for that.",
            text: "Media can be a substitute for that"
        },
        {
            country: "UZBEKISTAN 2",
            title: "Title 2",
            text: "Media can be a substitute for that 2"
        }
    ]
    const [number, setNumber] = useState<any>(0)
    return (
        <div className="Uzbek">
            <div className="container">
                <div className="Uzbek-imgwrap">
                    <img className="Uzbek-img" src={Group} alt="uzbek" />
                    <img className="Uzbek-imgrount" src={imgGrap} onClick={() => setNumber(0)} />
                    <img className="Uzbek-imgrount2" src={imgGrap} onClick={() => setNumber(1)} />
                </div>

                <div className="Uzbek-right">
                    <h3 className="Uzbek-country">{data[number]?.country}</h3>
                    <h2 className="Uzbek-title">{data[number]?.title}</h2>
                    <p className="Uzbek-text">{data[number]?.text}</p>
                </div>
                <div>
                    <div className="Uzbek-backcoler"></div>
                    <div className="Uzbek-backcoler"></div>
                    <div className="Uzbek-backcoler"></div>
                </div>

            </div>
        </div>
    )

}
