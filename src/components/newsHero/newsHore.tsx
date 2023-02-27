import { Link } from "react-router-dom";

export default function Newshero() {
    return (
        <div className="Newshero">
            <div className="container">
                <div className="Newshero_left">
                    <p className="Newshero_left-data">12  Феврваль. 2023</p>
                    <h2 className="Newshero_left-title">Вы можете быть разочарованы, если потерпите неудачу, но вы обречены, если не попытаетесь.</h2>
                    <div className="Newshero_left-btn">
                        <Link to='/news' className="Newshero_left-text">Поделится с друзями</Link>
                        <p className="Newshero_left-text">Прочитана</p>
                    </div>
                </div>
                <div className="Newshero_right">
                    <p className="Newshero_right-text">Читайте все о наших последних проектах, события и объявлениях компании</p>
                    <Link to='/news' className="ObjectsHero-tbn">Все новости</Link>
                </div>
            </div>
        </div >
    )
}