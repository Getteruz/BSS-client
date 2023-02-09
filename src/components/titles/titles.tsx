interface Props {
    span: string;
    title: string;
    text: string;

}

export default function Titles({ span, title, text }: Props) {
    return (
        <div className="Title">
            <p className="Title-span">{span}</p>
            <h3 className="Title-title">{title}</h3>
            <p className="Title-text">{text}</p>
        </div>

    )
}