import React from 'react'
import img from "../../assets/images/Rectangleds7.png"
import memebr from "../../assets/images/Ellipse1394.png"

export default function Team() {
    return (
        <div className='Team'>
            <div className='Team-img'>
                <img src={img} alt="" />
            </div>
            <div className="container">
                <p className='Team-text'>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <ul className='Team_member'>
                    <li className='Team_member-item'>
                        <img src={memebr} alt="" width={180} />
                        <h4 className='Team_member-name'>Abdullo Xolmurodov</h4>
                        <p className='Team_member-text'>Директор компании</p>
                    </li>
                    <li className='Team_member-item'>
                        <img src={memebr} alt="" width={180} />
                        <h4 className='Team_member-name'>Abdullo Xolmurodov</h4>
                        <p className='Team_member-text'>Директор компании</p>
                    </li>
                    <li className='Team_member-item'>
                        <img src={memebr} alt="" width={180} />
                        <h4 className='Team_member-name'>Abdullo Xolmurodov</h4>
                        <p className='Team_member-text'>Директор компании</p>
                    </li>
                    <li className='Team_member-item'>
                        <img src={memebr} alt="" width={180} />
                        <h4 className='Team_member-name'>Abdullo Xolmurodov</h4>
                        <p className='Team_member-text'>Директор компании</p>
                    </li>
                    <li className='Team_member-item'>
                        <img src={memebr} alt="" width={180} />
                        <h4 className='Team_member-name'>Abdullo Xolmurodov</h4>
                        <p className='Team_member-text'>Директор компании</p>
                    </li>
                </ul>
                <p className='Team-text'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <h3 className='Team_services-title'>Предлагаем услуги</h3>
                <ul className='Team_services'>
                    <li className='Team_services-item'>Здоровье и безопасность</li>
                    <li className='Team_services-item'>Услуги по управлению безопасностью</li>
                    <li className='Team_services-item'>Медицинские услуги</li>
                    <li className='Team_services-item'>Тяжелый подъем и Риггер</li>
                    <li className='Team_services-item'>Безопасность</li>
                    <li className='Team_services-item'>Покраска и пескоструйная обработка</li>
                    <li className='Team_services-item'>Строительные леса и обслуживание строительных лесов</li>
                </ul>
            </div>

        </div>
    )
}
