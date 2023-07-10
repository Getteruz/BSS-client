import React, { useEffect, useState } from 'react'
import AboutUsHero from '../../components/AboutUsHero/AboutUsHero'
import Footer from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import ObjectsNews from '../../components/objectNews/ObjectNews'
import Partners from '../../components/partners/partners'
import Team from '../../components/Team/Team'
import { GetAboutUs } from '../../shared/api/aboutUs'
interface Props {
    aboutus: any;
    object: any,
}
export default function AboutUs({ aboutus, object }: Props) {
    return (
        <>
            <Header />
            <AboutUsHero data={aboutus} />
            <Team data={aboutus} />
            <Partners />
            <Footer />
        </>
    )
}
