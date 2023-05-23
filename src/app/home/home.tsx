import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import Hero from "../../components/hero/hero"
import { News } from "../../components/news/news"
import Objects from "../../components/Object/Object"
import Partners from "../../components/partners/partners"
import SafetyWrap from "../../components/safetyWrap/safetyWrap"
import { Uzbek } from "../../components/uzbek/uzbek"


interface Props {
    service: any,
    object: any,
    news: any,

}
export default function Home({ service, object, news }: Props) {
    return (
        <>
            <Header />
            <Hero service={service} />
            <SafetyWrap service={service} />
            {/* <Objects object={object} /> */}
            <Uzbek object={object} />
            <News news={news} />
            <Partners />
            <Footer />
        </>
    )
}