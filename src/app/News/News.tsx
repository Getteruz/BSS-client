import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import Newshero from "../../components/newsHero/newsHore"



import NewsText from "../../components/newsText/newsText"
import ObjectsNews from "../../components/objectNews/ObjectNews"

export default function NewsPage() {
    return (
        <>
            <Header />
            <Newshero />
            <NewsText />
            <ObjectsNews />
            <Footer />
        </>
    )
}