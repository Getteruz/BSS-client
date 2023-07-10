import logo from "../../assets/images/Logo.svg";

import Sidebar from "../sidebar/Sidebar";
import { Link, useLocation } from "react-router-dom";
import routes from "../../shared/constants/routes";
import TelNumber from "../telnumber/TelNumber";
import { useEffect, useRef, useState } from "react";
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith";
import { Facebook, Instagram, LanguageIcon, Linkedin, Logo, Twitter } from "../icons";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const x = useRef<any>()
    const { i18n } = useTranslation()
    const widthwindow: any = useGetWindowWidth()
    const router: any = useLocation()
    const [scrollPosition, setScrollPosition] = useState<any>(0);
    const [color, setColor] = useState<any>("block");
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

    const { t } = useTranslation()



    return (
        <>
            <header className="header"
                style={(scrollPosition < 10 && router.pathname == '/') ? { "background": "transparent" } : { "background": "white" }}
            >
                <div className="container_header">
                    <Link to={routes.HOME}>  {scrollPosition < 10 && router.pathname == '/' ? <Logo fill={'#ffffff'} fill2={'#ffffff'} /> : <Logo fill={'#3B42C5'} fill2={'#57C5B6'} />}</Link>
                    {widthwindow > 1145 ? <>
                        {scrollPosition < 10 && router.pathname == '/' ? <Sidebar color={'white'} /> : <Sidebar color={'none'} />}

                    </> : widthwindow > 500 ? <p className={`header-munutext ${color}`} style={(scrollPosition < 10 && router.pathname == '/') ? { color: "white" } : { color: "black" }}>MENU</p> : ""}

                    <div className={'header_languagewrap'}>
                        <LanguageIcon fill={scrollPosition < 10 && router.pathname == '/' ? "white" : "black"} />
                        <p

                            className="header_language"
                            style={(scrollPosition < 10 && router.pathname == '/') ? { color: "white" } : { color: "black" }}
                        >  {widthwindow > 684 ? <>  {t('lang')}</> : <>Ру</>}
                            <ul className="wrapLaga">
                                <li onClick={() => i18n.changeLanguage('uz')}>O'zbekcha</li>
                                <li onClick={() => i18n.changeLanguage('tr')}>Turkce</li>
                                <li onClick={() => i18n.changeLanguage('en')}>English</li>
                                <li onClick={() => i18n.changeLanguage('ru')}>Русский</li>
                            </ul>
                        </p>
                    </div>
                    {widthwindow > 640 ? <>
                        <button

                            className="btn"
                            onClick={() => x.current.style.display = "block"}
                            style={(scrollPosition < 10 && router.pathname == '/') ? { background: "white", color: "#3B42C5" } : { background: "#3B42C5", color: "white" }}
                        >{t('request')}</button>
                        <div className="header_icons">
                            <Linkedin fill={scrollPosition < 10 && router.pathname == '/' ? "white" : "#3910CE"} />
                            <Twitter fill={scrollPosition < 10 && router.pathname == '/' ? "white" : "#3910CE"} />
                            <Facebook fill={scrollPosition < 10 && router.pathname == '/' ? "white" : "#3910CE"} />
                            <Instagram fill={scrollPosition < 10 && router.pathname == '/' ? "white" : "#3910CE"} />

                        </div>
                    </> : <div>
                        <div className='header_burger' style={(scrollPosition < 10 && router.pathname == '/') ? { background: "white" } : { background: "black" }}></div>
                        <div className='header_burger' style={(scrollPosition < 10 && router.pathname == '/') ? { background: "white" } : { background: "black" }}></div>
                    </div>
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
