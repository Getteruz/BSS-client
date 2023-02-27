import { NewsBox } from "../newsbox/newsBox"
import Titles from "../titles/titles"
import img from "../../assets/images/Rectangleds.png"
import Settings from "../../assets/images/Settings.png"
import { Link } from "react-router-dom"
import routes from "../../shared/constants/routes"
export const News = () => {
    return (
        <div className="News">
            <div className="container">
                <div className="News_left">

                    <Titles span={"Новости"} title={"Последние новости"} text={"Читайте все о наших последних проектах, события и объявлениях компании"} />

                    <Link to={routes.NEWS} className="News_left-btn">Все новости</Link>
                </div>
                <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
            </div>
            <div>
                <div className="setting">
                    <div className="setting-div">
                        <div className="setting-img">
                            <img src={Settings} alt="Settings" />
                        </div>
                        <p className="setting-text">Если вы хотите проверить безопасность вашего объекта и ваших сотрудников, отправьте заявку!</p>
                    </div>
                    <button className="btn">Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}