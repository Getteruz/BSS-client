interface Props {
    text: string;
    img: any
}


export default function NeedKnow({ text, img }: Props) {
    return (
        <div className="NeedKnow">
            <img src={img} alt="img" />
            <p className="NeedKnow-text">{text}</p>
        </div>
    )
}