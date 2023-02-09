import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import Hero from "../../components/hero/hero"
import { News } from "../../components/news/news"
import Objects from "../../components/Object/Object"
import Partners from "../../components/partners/partners"
import SafetyWrap from "../../components/safetyWrap/safetyWrap"
import { Uzbek } from "../../components/uzbek/uzbek"



export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <SafetyWrap />
            <Objects />
            <Uzbek />
            <News />
            <Partners />
            <Footer />
        </>
    )
}