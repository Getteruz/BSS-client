
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import Newshero from "../../components/newsHero/newsHore"

// import NewsText from "../../components/newsText/newsText"
import ObjectsNews from "../../components/objectNews/ObjectNews"
import Partners from "../../components/partners/partners"
import ServiceHere from "../../components/ServiceHere/Service"
import ServiceText from "../../components/ServiceText/newsText"
import { GetNewsbyid } from "../../shared/api/news"
import { GetServicebyid } from "../../shared/api/service"
interface Props {
    object: any,

}

export default function ServicePage({ object }: Props) {

    const [data, setData] = useState<any>()
    const params = useParams()

    useEffect(() => {
        const fetchNews = async () => {
            const data = await GetServicebyid(params?.id);

            setData(data)
        }
        fetchNews()
            .then((err) => {
                console.log("err");
            })
    }, []);

    return (
        <>
            <Header />
            <ServiceHere data={data} />
            <ServiceText data={data} />
            <Partners />
            <Footer />
        </>
    )
}