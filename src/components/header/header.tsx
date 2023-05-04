import logo from "../../assets/images/Logo.svg";
import linkedin from "../../assets/images/linkedin.svg"
import twitter from "../../assets/images/twitter.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from "../../assets/images/instagram.svg"
import Sidebar from "../sidebar/Sidebar";
import { Link, useLocation } from "react-router-dom";
import routes from "../../shared/constants/routes";
import TelNumber from "../telnumber/TelNumber";
import { useEffect, useRef, useState } from "react";
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith";
import { Logo } from "../icons";

export const Header = () => {
    const x = useRef<any>()
    const y = useRef<any>()
    const widthwindow: any = useGetWindowWidth()
    const router: any = useLocation()
    const [scrollPosition, setScrollPosition] = useState<any>(0);
    // const [colose, setColose] = useState<any>(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    if (scrollPosition > 609 && y?.current) {
        y.current.style.background = "#ffffff"
    }
    if (scrollPosition < 609 && y?.current && router.pathname == '/') {
        y.current.style.background = "transparent"
    }

    return (
        <>
            <header ref={y} className="header">
                <div className="container_header">
                    <Link to={routes.HOME}>  <Logo fill={'black'} /></Link>
                    {widthwindow > 1130 ? <Sidebar /> : widthwindow > 500 ? <p className="header-munutext">MENU</p> : ""}

                    <p className="header_language"> {widthwindow > 684 ? <>Русский</> : <>Ру</>}
                        <ul className="wrapLaga">
                            <li>O'zbekcha</li>
                            <li>Turkce</li>
                            <li>English</li>
                            <li>Русский</li>
                        </ul>
                    </p>
                    {widthwindow > 640 ? <>
                        <button className="btn" onClick={() => x.current.style.display = "block"}>Оставить заявку</button>
                        <div className="header_icons">
                            <img src={linkedin} alt="icon" />
                            <img src={twitter} alt="icon" />
                            <img src={facebook} alt="icon" />
                            <img src={instagram} alt="icon" />
                        </div>
                    </> : <div className='header_burger'></div>
                    }
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
