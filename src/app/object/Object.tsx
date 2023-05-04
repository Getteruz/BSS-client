import React from 'react'
import Footer from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import Litelabout from '../../components/litelabout/Litelabout'
import ObjectText from '../../components/ObjectText/ObjectText'
import Partners from '../../components/partners/partners'

interface Props {
    object: any,
    aboutus: any,
}
export default function Object({ object, aboutus }: Props) {
    return (
        <>
            <Header />
            <ObjectText object={object} />
            <Litelabout aboutus={aboutus} />
            <Partners />
            <Footer />
        </>
    )
}
