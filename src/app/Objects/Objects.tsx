import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import ObjectsCard from "../../components/objectcard/objectcard"
import ObjectsHero from "../../components/objectHero/objectHero"
import Partners from "../../components/partners/partners"

export default function ObjectPage() {

    return (
        <>
            <Header />
            <ObjectsHero />
            <ObjectsCard />
            <Partners />
            <Footer />
        </>
    )
}