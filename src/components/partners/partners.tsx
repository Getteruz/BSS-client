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
                <PartnersBox img={"https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"} title={"Polaris Creative Backline"} text={"Узбекистан"} />
                <PartnersBox img={"https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"} title={"Polaris Creative Backline"} text={"Узбекистан"} />
                <PartnersBox img={"https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"} title={"Polaris Creative Backline"} text={"Узбекистан"} />
                <PartnersBox img={"https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"} title={"Polaris Creative Backline"} text={"Узбекистан"} />
                <PartnersBox img={"https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"} title={"Polaris Creative Backline"} text={"Узбекистан"} />
            </div>

        </div>
    )
}