import logo from "../../assets/images/Logo.svg";
import linkedin from "../../assets/images/linkedin.svg"
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagram.svg"
import Sidebar from "../sidebar/Sidebar";


export const Header = () => {
    return (
        <header className="header">
            <div className="container_header">
                <img src={logo} alt="logo" />
                <Sidebar />
                <p className="header_language">Русский</p>
                <button className="btn">Оставить заявку</button>
                <div className="header_icons">
                    <img src={linkedin} alt="icon" />
                    <img src={twitter} alt="icon" />
                    <img src={facebook} alt="icon" />
                    <img src={instagram} alt="icon" />
                </div>
            </div>
        </header>
    )
}
