import linkedin from "../../assets/images/linkedin1.svg"
import twitter from "../../assets/images/twitter1.svg"
import facebook from "../../assets/images/facebook1.svg"
import instagram from "../../assets/images/instagram1.svg"

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <button className="Footer-btn">Связатся с нами</button>
                <div className="Footer_center">
                    <div className="Footer_center-left">
                        <p>© 2023 Все права защищены.</p>
                        <ul>
                            <li>О компании</li>
                            <li>Услуги</li>
                            <li>Объекты</li>
                            <li>Новости</li>
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
                            <li>О нас</li>
                            <li>Помощь</li>
                        </ul>
                    </div>
                    <div className="Footer_bottom-right">

                        <p>Designed by:</p> <span>Getter</span>

                    </div>
                </div>
            </div>
        </div>
    )
}