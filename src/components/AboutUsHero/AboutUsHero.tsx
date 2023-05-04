import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../shared/constants/routes'
interface Props {
    data: any;
}


export default function AboutUsHero({ data }: Props) {

    return (
        <div className='AboutUsHero'>
            <div className="container">
                <div className='AboutUsHero_top'>
                    <div className='AboutUsHero_top-right'>
                        <p className='AboutUsHero_top-text2'>О Нас</p>
                        <h2 className='AboutUsHero_top-title'>{data?.title}</h2>
                        <p className='AboutUsHero_top-bss'>{data?.name}</p>

                    </div>
                    <div className="Newshero_right">
                        <p className="Newshero_right-text">Читайте все о наших последних проектах, события и объявлениях компании</p>
                        <Link to={routes.NEWS} className="ObjectsHero-tbn">Все новости</Link>
                    </div>
                </div>
                <p className='AboutUsHero-text'>{data?.text2}</p>
            </div>
        </div>
    )
}
