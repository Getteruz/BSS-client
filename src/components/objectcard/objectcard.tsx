import img from "../../assets/images/Rectangleds.png"
import { NewsBox } from "../newsbox/newsBox"
export default function ObjectsCard() {
    return (
        <>

            <div className="object_cardtop">
                <div className="container">
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                </div>
            </div>

            <div className="object_card">
                <div className="container">
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />

                </div>
            </div>
        </>
    )
}