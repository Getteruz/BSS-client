import icon from "../../assets/images/Vectorleft.svg"
import iconW from "../../assets/images/VectorleftW.svg"


export default function Safety() {
    return (
        <div className="safety" >
            <h2 className="safety-title">Здоровье и безопасность</h2>
            <p className="safety-text">Обеспечение безопасности ваших сотрудников и бесперебойной работы вашего бизнеса — наша главная задача!</p>
            <img className="safety-img1" src={icon} alt="icon" width={24.59} />
            <img className="safety-img2" src={iconW} alt="icon" width={24.59} />
        </div>
    )
}

