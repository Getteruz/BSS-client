import logo from "../../assets/images/Logo.svg";
import linkedin from "../../assets/images/linkedin.svg"
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagram.svg"
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";
import TelNumber from "../telnumber/TelNumber";
import { useRef } from "react";


export const Header = () => {
    const x = useRef<any>()
    return (
        <>
            <header className="header">
                <div className="container_header">
                    <Link to={routes.HOME}>  <img src={logo} alt="logo" /></Link>
                    <Sidebar />


                    <p className="header_language">Русский
                        <ul className="wrapLaga">
                            <li>O'zbekcha</li>
                            <li>Turkce</li>
                            <li>English</li>
                            <li>Русский</li>
                        </ul>
                    </p>


                    <button className="btn" onClick={() => x.current.style.display = "block"}>Оставить заявку</button>
                    <div className="header_icons">
                        <img src={linkedin} alt="icon" />
                        <img src={twitter} alt="icon" />
                        <img src={facebook} alt="icon" />
                        <img src={instagram} alt="icon" />
                    </div>
                </div>
                <div ref={x} className="wrap" onClick={(e: any) => {
                    if (e.target == x.current) {
                        e.target.style.display = "none"
                    }
                }}>
                    <TelNumber />
                </div>

            </header>

        </>
    )
}
