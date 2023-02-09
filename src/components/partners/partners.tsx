import PartnersBox from "../partnersBox/partnersBox";
import Titles from "../titles/titles";

export default function Partners() {
    return (
        <div className="Partners">
            <div className="container">
                <Titles span="Мы благодарны" title="Наше партнеры" text={""} />

                <div className="Partners-Wrap">
                    <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                    <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                    <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                    <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                    <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                </div>
            </div>
        </div>
    )
}