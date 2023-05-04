import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/Vectorleft.svg"
import routes from "../../shared/constants/routes";
interface Props {
    title: string;
    text: string;
    img: any;
}
export const NewsBox = ({ title, text, img }: Props) => {
    const navgate = useNavigate()
    return (
        <div className="NewsBox" onClick={() => navgate(routes.ONENEW)}>
            <div className="NewsBox-top">
                <h2 className="NewsBox-title">{title}</h2>
                <p className="NewsBox-text">{text}</p>
                <div className="NewsBox-btnimg">
                    <img className="NewsBox-img2" src={icon} alt="icon" />
                </div>
            </div>
            <img className="NewsBox-img" src={img} alt="alrt" width={391} height={288} />
        </div>
    )
}