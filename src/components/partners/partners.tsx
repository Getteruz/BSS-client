import { useTranslation } from "react-i18next";
import PartnersBox from "../partnersBox/partnersBox";
import Titles from "../titles/titles";

export default function Partners() {
    const { t } = useTranslation()
    return (
        <div className="Partners">
            <div className="container">
                <Titles span={t('grateful')} title={t('gratefulPartnors')} text={""} />

            </div>

            <div className="Partners-Wrap">
                <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
                <PartnersBox img={""} title={"СЩьзфтг тфьу"} text={"Узбекистан"} />
            </div>

        </div>
    )
}