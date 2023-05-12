import { useState } from "react"
import { useTranslation } from "react-i18next"
import img1 from "../../assets/images/bsc-logo.png"
import img2 from "../../assets/images/logo-iema.png"


interface Props {

    object: any,


}
export const Uzbek = ({ object }: Props) => {
    const [number, setNumber] = useState<any>(0)
    const { t } = useTranslation()
    return (
        <div className="Uzbek">
            <div className="container">

                <h2 className="Accredited-title">{t('Accredited')}</h2>
                <div className="Accredited__wrap">
                    <div className="Accredited__wrap-card">
                        <img src={img1} alt="img" />
                        <h3 className="Accredited__wrap-title">British Safety Council</h3>
                        <p className="Accredited__wrap-text">{t('AccreditedText')}</p>
                    </div>
                    <div className="Accredited__wrap-card">
                        <img src={img2} alt="img" />
                        <h3 className="Accredited__wrap-title">Institute of Environmental Management</h3>
                        <p className="Accredited__wrap-text">{t('AccreditedText')}</p>
                    </div>
                </div>
                <div>
                    <div className="Uzbek-backcoler"></div>
                    <div className="Uzbek-backcoler"></div>
                    <div className="Uzbek-backcoler"></div>
                </div>
            </div>
        </div>
    )

}
