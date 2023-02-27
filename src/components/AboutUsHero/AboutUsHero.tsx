import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUsHero() {
    return (
        <div className='AboutUsHero'>
            <div className="container">
                <div className='AboutUsHero_top'>
                    <div className='AboutUsHero_top-right'>
                        <p className='AboutUsHero_top-text2'>О Нас</p>
                        <h2 className='AboutUsHero_top-title'>BSS Expert Safety service</h2>
                        <p className='AboutUsHero_top-bss'>OOO “BSS Expert”</p>

                    </div>
                    <div className="Newshero_right">
                        <p className="Newshero_right-text">Читайте все о наших последних проектах, события и объявлениях компании</p>
                        <Link to='/news' className="ObjectsHero-tbn">Все новости</Link>
                    </div>
                </div>
                <p className='AboutUsHero-text'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </div>
    )
}
