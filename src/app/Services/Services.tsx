import { useEffect, useState } from "react";
import AboutUs from "../../components/aboutUs/aboutUs";
import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header";
import Partners from "../../components/partners/partners";
import ServiceHero from "../../components/servicesHero/servicesHero";
interface Props {
    service: any,
    aboutus: any,
}

export default function Services({ service, aboutus }: Props) {

    return (
        <>
            <Header />
            <ServiceHero />
            <AboutUs service={service} aboutus={aboutus} />
            <Partners />
            <Footer />
        </>
    )
}