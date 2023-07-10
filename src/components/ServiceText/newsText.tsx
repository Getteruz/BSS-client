import { useTranslation } from "react-i18next"
import img from "../../assets/images/Rectangle111001494.png"
interface Props {
    data: any,

}

export default function ServiceText({ data }: Props) {
    const { i18n } = useTranslation()
    return (
        <div className="newsText" >
            <div className="container" >
                <img className="newsText__img" width={1200} height={520} src={"https://lirp.cdn-website.com/45c271ae/dms3rep/multi/opt/shutterstock_626410364-1920w.jpg"} alt="https://i.ytimg.com/vi/fqVlvocpOYU/maxresdefault.jpg" />
                <div className="newsText-wrap">
                    <p className="newsText-text">
                        {data && data[`${i18n.language}_text`].slice(0, 500)}
                    </p>
                    <p className="newsText-text">
                        {data && data[`${i18n.language}_text`].slice(500)}
                    </p>
                </div>


            </div>
        </div >
    )
}