import { useTranslation } from "react-i18next";
import img from "../../assets/images/Rectangleds.png"

import { NewsBox } from "../newsbox/newsBox";
import Titles from "../titles/titles";
interface Props {
    object: any,

}
export default function ObjectsNews({ object }: Props) {
    const { i18n } = useTranslation()
    return (
        <div className="Partners">
            <div className="container">
                <Titles span="Мы благодарны" title="Наше партнеры" text={""} />

                <div className="Partners-Wrap">
                    {object && object?.slice(0, 2).map((e: any) => (
                        <NewsBox key={e?._id} id={"1"} title={e?.[`${i18n.language}_title`]} text={e?.[`${i18n.language}_text`]} img={e?.img[0]?.url} />
                    ))
                    }

                </div>
            </div>
        </div>
    )
}