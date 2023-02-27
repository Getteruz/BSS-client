import linkedin from "../../assets/images/linkedin1.svg"
import twitter from "../../assets/images/twitter1.svg"
import facebook from "../../assets/images/facebook1.svg"
import instagram from "../../assets/images/instagram1.svg"
import { Link } from "react-router-dom"
import routes from "../../shared/constants/routes"

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <button className="Footer-btn">Связатся с нами</button>
                <div className="Footer_center">
                    <div className="Footer_center-left">
                        <p>© 2023 Все права защищены.</p>
                        <ul>
                            <li><Link to={routes.HOME}>О компании</Link></li>
                            <li> <Link to={routes.SERVICES}>Услуги</Link></li>
                            <li ><Link to={routes.OBJECT}>Объекты</Link></li>
                            <li><Link to={routes.NEWS}>Новости</Link></li>
                        </ul>
                    </div>
                    <div className="Footer_center-right">
                        <p>+998 90 000 00 00</p>
                        <img src={linkedin} alt="linkedin" />
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>

            </div>
            <div className="Footer_bottom">
                <div className="container">
                    <div className="Footer_bottom-left">
                        <p>Copyright: 2023</p>
                        <ul>
                            <li><Link className="Footer_bottom-link" to={routes.ABOUTUS}>О нас</Link></li>
                            <li><Link className="Footer_bottom-link" to={routes.HELP}>Помощь</Link> </li>
                        </ul>
                    </div>
                    <div className="Footer_bottom-right">
                        <p>Designed by:</p> <span>Getter</span>
                    </div>
                </div>
            </div>
        </div >
    )
}