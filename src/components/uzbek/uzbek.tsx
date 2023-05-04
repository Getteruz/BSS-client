import { useState } from "react"
import Group from "../../assets/images/Group.png"
import imgGrap from "../../assets/images/Groupround.svg"


interface Props {

    object: any,


}
export const Uzbek = ({ object }: Props) => {

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
                    <h3 className="Uzbek-country">{object[number]?.tag}</h3>
                    <h2 className="Uzbek-title">{object[number]?.title}</h2>
                    <p className="Uzbek-text">{object[number]?.text}</p>
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
