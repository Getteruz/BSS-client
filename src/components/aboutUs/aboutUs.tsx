import { useTranslation } from "react-i18next";
import Litelabout from "../litelabout/Litelabout";
import Safety from "../safety/safety";
interface Props {
    service: any,
    aboutus: any,

}
export default function AboutUs({ service, aboutus }: Props) {
    const { i18n } = useTranslation()
    return (
        <div className="container">
            <div className="hero-safety2" >
                {service && service?.map((e: any) => (
                    <Safety title={e?.[`${i18n.language}_title`]} text={e?.[`${i18n.language}_text`]} id={e?._id} />
                ))}

            </div>
            <Litelabout aboutus={aboutus} />
        </div>
    )
}
