import img from "../../assets/images/Rectangleds.png"

import { NewsBox } from "../newsbox/newsBox";
import Titles from "../titles/titles";

export default function ObjectsNews() {
    return (
        <div className="Partners">
            <div className="container">
                <Titles span="Мы благодарны" title="Наше партнеры" text={""} />

                <div className="Partners-Wrap">
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                    <NewsBox title={"Отчет об устойчивом развитии"} text={"If everything seems under control, youre just not going fast enough."} img={img} />
                </div>
            </div>
        </div>
    )
}