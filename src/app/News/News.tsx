
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import Newshero from "../../components/newsHero/newsHore"

import NewsText from "../../components/newsText/newsText"
import ObjectsNews from "../../components/objectNews/ObjectNews"
import { GetNewsbyid } from "../../shared/api/news"
interface Props {
    object: any,

}

export default function NewsPage({ object }: Props) {

    const [data, setData] = useState<any>()
    const params = useParams()

    useEffect(() => {
        const fetchNews = async () => {
            const data = await GetNewsbyid(params?.id);

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
            <Newshero data={data} />
            <NewsText data={data} />
            <ObjectsNews object={object} />
            <Footer />
        </>
    )
}