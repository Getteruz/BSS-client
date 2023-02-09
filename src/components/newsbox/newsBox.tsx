import icon from "../../assets/images/Vectorleft.svg"
interface Props {
    title: string;
    text: string;
    img: any;
}
export const NewsBox = ({ title, text, img }: Props) => {
    return (
        <div className="NewsBox">
            <div className="NewsBox-top">
                <h2 className="NewsBox-title">{title}</h2>
                <p className="NewsBox-text">{text}</p>
                <div className="NewsBox-btnimg">
                    <img src={icon} alt="icon" />
                </div>
            </div>
            <img className="NewsBox-img" src={img} alt="alrt" />
        </div>
    )
}