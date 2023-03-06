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
                        <Link className="Footer_center-leftlink" to={routes.HOME}>© 2023 Все права защищены.</Link>
                        <ul>
                            <li><Link className="Footer_center-navbar" to={routes.HOME}>О компании</Link></li>
                            <li> <Link className="Footer_center-navbar" to={routes.SERVICES}>Услуги</Link></li>
                            <li ><Link className="Footer_center-navbar" to={routes.OBJECT}>Объекты</Link></li>
                            <li><Link className="Footer_center-navbar" to={routes.NEWS}>Новости</Link></li>
                        </ul>
                    </div>

                    <div className="Footer_center-right">
                        <Link className="Footer_center-right-tel" to={"tel:+998900000000"}>+998 90 000 00 00</Link>
                        <Link className="Footer_center-right-link" to={routes.HOME}><img src={linkedin} alt="linkedin" /></Link>
                        <Link className="Footer_center-right-link" to={routes.HOME}><img src={twitter} alt="twitter" /></Link>
                        <Link className="Footer_center-right-link" to={routes.HOME}><img src={facebook} alt="facebook" /></Link>
                        <Link className="Footer_center-right-link" to={routes.HOME}><img src={instagram} alt="instagram" /></Link>

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
                        <p>Designed by:</p> <span> <Link className="Footer_bottom-right-link" to={"https://getter.uz/"}>Getter </Link> </span>
                    </div>
                </div>
            </div>
        </div >
    )
}