import React from 'react'

import img from "../../assets/images/Vectorleft1.svg"

export default function ObjectText() {
    return (

        <>
            <div className='ObjectHeros'>
                <div className="container">
                    <p className='ObjectHeros-object'>Объекты</p>
                    <h2 className='ObjectHeros-title'>Услуги, которые мы предлагаем!</h2>
                    <p className='ObjectHeros-text'>которые предоставляемых нами услуг.</p>
                </div>
            </div>
            <div className="container">
                <ul className='ObjectText'>
                    <li className='ObjectText-item'>
                        <div className="ObjectText-top">
                            <div className="ObjectText-left">
                                <h3 className='ObjectText-title'>OOO “Safety Service”</h3>
                                <p className='ObjectText-text'>Украина </p>
                            </div>
                            <img src={img} alt="img" />
                        </div>
                        <p className='ObjectText-text2'>You shouldn't focus on why you cant do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.</p>
                    </li>
                    <li className='ObjectText-item'>
                        <div className="ObjectText-top">
                            <div className="ObjectText-left">
                                <h3 className='ObjectText-title'>OOO “Safety Service”</h3>
                                <p className='ObjectText-text'>Украина </p>
                            </div>
                            <img src={img} alt="img" />
                        </div>

                        <p className='ObjectText-text2'>You shouldn't focus on why you cant do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.</p>
                    </li>

                    <li className='ObjectText-item'>
                        <div className="ObjectText-top">
                            <div className="ObjectText-left">
                                <h3 className='ObjectText-title'>OOO “Safety Service”</h3>
                                <p className='ObjectText-text'>Украина </p>
                            </div>
                            <img src={img} alt="img" />
                        </div>
                        <p className='ObjectText-text2'>You shouldn't focus on why you cant do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.</p>
                    </li>
                    <li className='ObjectText-item'>
                        <div className="ObjectText-top">
                            <div className="ObjectText-left">
                                <h3 className='ObjectText-title'>OOO “Safety Service”</h3>
                                <p className='ObjectText-text'>Украина </p>
                            </div>
                            <img src={img} alt="img" />
                        </div>

                        <p className='ObjectText-text2'>You shouldn't focus on why you cant do something, which is what most people do. You should focus on why perhaps you can, and be one of the exceptions.</p>
                    </li>
                </ul>
            </div >
        </>
    )
}
