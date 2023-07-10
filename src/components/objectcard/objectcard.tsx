import { useState } from "react"
import { useTranslation } from "react-i18next"
import img from "../../assets/images/Rectangleds.png"
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith"
import { NewsBox } from "../newsbox/newsBox"
interface Props {
    data: any,

}
export default function ObjectsCard({ data }: Props) {
    const widthwindow: any = useGetWindowWidth()
    const { i18n } = useTranslation()
    return (
        <>
            {widthwindow > 876 ?
                <div className="object_cardtop">
                    <div className="container">
                        <NewsBox id={data[0]?._id} title={data[0]?.[`${i18n.language}_title`]} text={data[0]?.[`${i18n.language}_text`]} img={data[0]?.img[0]?.url} />
                        {widthwindow > 1170 ? <NewsBox id={data[1]?._id} title={data[1]?.[`${i18n.language}_title`]} text={data[1]?.[`${i18n.language}_text`]} img={data[1]?.img[0]?.url} /> : ""}
                    </div>
                </div>
                : ""}

            <div className="object_card">
                <div className="container">
                    {data && data?.map((e: any, i: any) => {
                        if (widthwindow < 1171) {
                            if (i >= 1) {
                                return (
                                    <NewsBox id={e?._id} title={e?.[`${i18n.language}_title`]} text={e?.[`${i18n.language}_text`]} img={e?.img[0]?.url} />
                                )
                            }
                        }
                        if (widthwindow < 877) {
                            return (
                                <NewsBox id={e?._id} title={e?.[`${i18n.language}_title`]} text={e?.[`${i18n.language}_text`]} img={e?.img[0]?.url} />
                            )
                        }
                        else {
                            if (i >= 2) {
                                return (
                                    <NewsBox id={e?._id} title={e?.[`${i18n.language}_title`]} text={e?.[`${i18n.language}_text`]} img={e?.img[0]?.url} />
                                )
                            }
                        }
                    })}


                </div>
            </div>
        </>
    )
}