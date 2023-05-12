import { useTranslation } from "react-i18next";
import Safety from "../safety/safety";
interface Props {
    service: any,

}
export default function SafetyWrap({ service }: Props) {
    const { i18n } = useTranslation()

    return (
        <div className="container">
            <div className="safety-Wrap">
                {service && service.slice(2)?.map((e: any) => (
                    <Safety title={e?.[`${i18n.language}_title`]} text={e?.[`${i18n.language}_text`]} id={e?._id} />
                ))}
            </div>
        </div>
    )
}   