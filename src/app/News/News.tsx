import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import Newshero from "../../components/newsHero/newsHore"


import Partners from "../../components/partners/partners"
import NewsText from "../../components/newsText/newsText"

export default function NewsPage() {
    return (
        <>
            <Header />
            <Newshero />
            <NewsText />
            <Partners />
            <Footer />
        </>
    )
}