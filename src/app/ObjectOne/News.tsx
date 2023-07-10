
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import Newshero from "../../components/newsHero/newsHore"
import NewsText from "../../components/newsText/newsText"


import ObjectsNews from "../../components/objectNews/ObjectNews"
import ObejctOnehero from "../../components/ObjectoneHero/newsHore"
import ObjectOneText from "../../components/ObjectTextOne/newsText"
import Partners from "../../components/partners/partners"
import { GetNewsbyid } from "../../shared/api/news"
import { GetObjectsbyid } from "../../shared/api/object"
interface Props {
    object: any,

}

export default function ObjectOnePage({ object }: Props) {

    const [data, setData] = useState<any>()
    const params = useParams()

    useEffect(() => {
        const fetchNews = async () => {
            const data = await GetObjectsbyid(params?.id);

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
            <ObejctOnehero data={data} />
            <ObjectOneText data={data} />
            <Partners />
            <Footer />
        </>
    )
}