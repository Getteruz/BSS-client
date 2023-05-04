import icon from "../../assets/images/Vectorleft.svg"
import iconW from "../../assets/images/VectorleftW.svg"
interface Props {
    id: any
    title: string,
    text: string,
}

export default function Safety({ id, title, text }: Props) {
    return (
        <div className="safety" key={id} >
            <h2 className="safety-title">{title}</h2>
            <p className="safety-text">{text}</p>
            <img className="safety-img1" src={icon} alt="icon" width={24.59} />
            <img className="safety-img2" src={iconW} alt="icon" width={24.59} />
        </div>
    )
}

