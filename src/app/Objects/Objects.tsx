import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import ObjectsCard from "../../components/objectcard/objectcard"
import ObjectsHero from "../../components/objectHero/objectHero"
import Partners from "../../components/partners/partners"
interface Props {
    news: any,

}
export default function ObjectPage({ news }: Props) {
    return (
        <>
            <Header />
            <ObjectsHero />
            <ObjectsCard data={news} />
            <Partners />
            <Footer />
        </>
    )
}