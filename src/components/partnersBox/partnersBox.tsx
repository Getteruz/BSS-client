interface Props {
    img: any;
    title: string;
    text: string;
}


export default function PartnersBox({ img, title, text }: Props) {
    return (
        <div className="PartnersBox">
            <div className="PartnersBox-img"><img src={img} alt="" /></div>
            <h4 className="PartnersBox-title">{title}</h4>
            <p className="PartnersBox-text">{text}</p>
        </div>
    )
}