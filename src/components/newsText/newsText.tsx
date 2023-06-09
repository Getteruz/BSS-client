import { useTranslation } from "react-i18next"
import img from "../../assets/images/Rectangle111001494.png"
interface Props {
    data: any,

}

export default function NewsText({ data }: Props) {
    const { i18n } = useTranslation()
    return (
        <div className="newsText">
            <div className="container">
                <img className="newsText__img" width={1200} height={520} src={data?.img?.[0].url} alt="" />
                <div className="newsText-wrap">
                    <p className="newsText-text">
                        {data && data[`${i18n.language}_text`].slice(0, 1500)}
                    </p>
                    <p className="newsText-text">
                        {data && data[`${i18n.language}_text`].slice(1500)}
                    </p>
                </div>

                <div className="newsText-tags">
                    <h3 className="newsText-tags-title">Новости</h3>
                    <h2 className="newsText-tags-title2">Теги по тематике</h2>
                    <div className="newsText-tags-div">
                        <p>{data && data[`${i18n.language}_tag`]}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}