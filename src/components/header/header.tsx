import logo from "../../assets/images/Logo.svg";

import Sidebar from "../sidebar/Sidebar";
import { Link, useLocation } from "react-router-dom";
import routes from "../../shared/constants/routes";
import TelNumber from "../telnumber/TelNumber";
import { useEffect, useRef, useState } from "react";
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith";
import { Facebook, Instagram, LanguageIcon, Linkedin, Logo, Twitter } from "../icons";

export const Header = () => {
    const x = useRef<any>()
    const y = useRef<any>()
    const b = useRef<any>()
    const l = useRef<any>()
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
    if (scrollPosition > 629 && y?.current && b?.current && l?.current) {
        y.current.style.background = "#ffffff"
        b.current.style.background = "#3B42C5"
        b.current.style.color = "#ffffff"
        l.current.style.color = "black"


    }
    if (scrollPosition < 629 && y?.current && b?.current && l?.current && router.pathname == '/') {
        y.current.style.background = "transparent"
        b.current.style.background = "#ffffff"
        b.current.style.color = "#3B42C5"
        l.current.style.color = "#ffffff"

    }

    return (
        <>
            <header ref={y} className="header">
                <div className="container_header">
                    <Link to={routes.HOME}>  {scrollPosition < 629 && router.pathname == '/' ? <Logo fill={'#ffffff'} fill2={'#ffffff'} /> : <Logo fill={'#3B42C5'} fill2={'#57C5B6'} />}</Link>
                    {widthwindow > 1145 ? <>
                        {scrollPosition < 629 && router.pathname == '/' ? <Sidebar color={'white'} /> : <Sidebar color={'none'} />}

                    </> : widthwindow > 500 ? <p className={`header-munutext ${color}`}>MENU</p> : ""}

                    <div className={'header_languagewrap'}>
                        <LanguageIcon fill={scrollPosition < 629 && router.pathname == '/' ? "white" : "black"} />
                        <p ref={l} className="header_language" >  {widthwindow > 684 ? <>  Русский</> : <>Ру</>}
                            <ul className="wrapLaga">
                                <li>O'zbekcha</li>
                                <li>Turkce</li>
                                <li>English</li>
                                <li>Русский</li>
                            </ul>
                        </p>
                    </div>
                    {widthwindow > 640 ? <>
                        <button ref={b} className="btn" onClick={() => x.current.style.display = "block"}>Оставить заявку</button>
                        <div className="header_icons">
                            <Linkedin fill={scrollPosition < 629 && router.pathname == '/' ? "white" : "#3910CE"} />
                            <Twitter fill={scrollPosition < 629 && router.pathname == '/' ? "white" : "#3910CE"} />
                            <Facebook fill={scrollPosition < 629 && router.pathname == '/' ? "white" : "#3910CE"} />
                            <Instagram fill={scrollPosition < 629 && router.pathname == '/' ? "white" : "#3910CE"} />

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
