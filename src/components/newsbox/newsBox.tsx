import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/Vectorleft.svg"
import routes from "../../shared/constants/routes";
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith";
interface Props {
    id: string;
    title: string;
    text: string;
    img: any;
}
export const NewsBox = ({ id, title, text, img }: Props) => {
    const navgate = useNavigate()
    const widthwindow: any = useGetWindowWidth()
    return (
        <div className="NewsBox" onClick={() => navgate(routes.NEWS + `/${id}`)}>
            <div className="NewsBox-top">
                <h2 className="NewsBox-title">{title?.slice(0, 50)}...</h2>
                <p className="NewsBox-text">{text?.slice(0, 100)}</p>
                {widthwindow > 500 ?
                    <div className="NewsBox-btnimg">
                        <img className="NewsBox-img2" src={icon} alt="icon" />
                    </div> : ""
                }
            </div>
            <img className="NewsBox-img" src={img} alt="alrt" width={391} height={288} />
        </div>
    )
}