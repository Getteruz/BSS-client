import { useState } from "react"
import img from "../../assets/images/Rectangleds.png"
import { useGetWindowWidth } from "../../shared/hooks/useGetWindowWith"
import { NewsBox } from "../newsbox/newsBox"
interface Props {
    data: any,

}
export default function ObjectsCard({ data }: Props) {
    const widthwindow: any = useGetWindowWidth()

    return (
        <>
            {widthwindow > 876 ?
                <div className="object_cardtop">
                    <div className="container">
                        <NewsBox title={data[0]?.title} text={data[0]?.text} img={data[0]?.img[0]?.url} />
                        {widthwindow > 1170 ? <NewsBox title={data[0]?.title} text={data[0]?.text} img={data[0]?.img[0]?.url} /> : ""}
                    </div>
                </div>
                : ""}

            <div className="object_card">
                <div className="container">
                    {data && data?.map((e: any, i: any) => {
                        if (widthwindow < 1171) {
                            if (i >= 1) {
                                return (
                                    <NewsBox title={e?.title} text={e?.text} img={e?.img[0]?.url} />
                                )
                            }
                        }
                        if (widthwindow < 877) {
                            return (
                                <NewsBox title={e?.title} text={e?.text} img={e?.img[0]?.url} />
                            )
                        }
                        else {
                            if (i >= 2) {
                                return (
                                    <NewsBox title={e?.title} text={e?.text} img={e?.img[0]?.url} />
                                )
                            }
                        }
                    })}


                </div>
            </div>
        </>
    )
}