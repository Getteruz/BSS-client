import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith";
interface Props {
    data: any,

}
export default function Newshero({ data }: Props) {
    const widthwindow: any = useGetWindowWidth()

    const { i18n } = useTranslation()
    return (
        <div className="Newshero">
            <div className="container">
                <div className="Newshero_left">
                    <p className="Newshero_left-data">{data?.data}</p>
                    <h2 className="Newshero_left-title">{data && data[`${i18n.language}_title`]}</h2>
                    {widthwindow > 700 ? <div className="Newshero_left-btn">
                        <Link to='/news' className="Newshero_left-text">Поделится с друзями</Link>
                        <p className="Newshero_left-text">Прочитана</p>
                    </div> : ""}

                </div>
                <div className="Newshero_right">
                    <p className="Newshero_right-text">Читайте все о наших последних проектах, события и объявлениях компании</p>
                    <Link to='/news' className="ObjectsHero-tbn">Все новости</Link>

                </div>
                {widthwindow < 701 ? <div className="Newshero_left-btn">
                    <Link to='/news' className="Newshero_left-text">Поделится с друзями</Link>
                    <p className="Newshero_left-text">Прочитана</p>
                </div> : ""}
            </div>
        </div >
    )
}