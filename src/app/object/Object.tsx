import React from 'react'
import Footer from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import Litelabout from '../../components/litelabout/Litelabout'
import ObjectText from '../../components/ObjectText/ObjectText'
import Partners from '../../components/partners/partners'

export default function Object() {
    return (
        <>
            <Header />
            <ObjectText />
            <Litelabout />
            <Partners />
            <Footer />
        </>
    )
}
