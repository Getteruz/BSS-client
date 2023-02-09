interface Props {
    img: any;
    title: string;
    text: string;
}


export default function PartnersBox({ img, title, text }: Props) {
    return (
        <div className="PartnersBox">
            <div className="PartnersBox-img"></div>
            <h4 className="PartnersBox-title">СЩьзфтг тфьу</h4>
            <p className="PartnersBox-text">Узбекистан</p>
        </div>
    )
}