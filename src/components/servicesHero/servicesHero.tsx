import { useTranslation } from "react-i18next";
import Safety from "../safety/safety";

export default function ServiceHero() {
    const { t } = useTranslation()
    return (
        <div className="serviceHero">
            <div className="container">
                <h3 className="serviceHero-ltitle">{t('')}</h3>
                <h2 className="serviceHero-title">Услуги, которые мы предлагаем!</h2>
                <p className="serviceHero-text">которые предоставляемых нами услуг.</p>
            </div>
        </div>
    )
}
