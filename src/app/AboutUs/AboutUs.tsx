import React from 'react'
import AboutUsHero from '../../components/AboutUsHero/AboutUsHero'
import Footer from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import ObjectsNews from '../../components/objectNews/ObjectNews'
import Team from '../../components/Team/Team'

export default function AboutUs() {
    return (
        <>
            <Header />
            <AboutUsHero />
            <Team />
            <ObjectsNews />
            <Footer />
        </>
    )
}
