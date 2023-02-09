import icon from "../../assets/images/Vectorleft.svg"
import iconW from "../../assets/images/VectorleftW.svg"

interface Props {
    color: string
}
export default function Safety({ color }: Props) {
    return (
        <div className="safety" id={color}>
            <h2 className="safety-title">Здоровье и безопасность</h2>
            <p className="safety-text">Обеспечение безопасности ваших сотрудников и бесперебойной работы вашего бизнеса — наша главная задача!</p>
            {color == "white" ? <img src={icon} alt="icon" width={24.59} /> : <img src={iconW} alt="icon" width={24.59} />}
        </div>
    )

}

