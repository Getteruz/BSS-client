import Litelabout from "../litelabout/Litelabout";
import Safety from "../safety/safety";
interface Props {
    service: any,
    aboutus: any,

}
export default function AboutUs({ service, aboutus }: Props) {

    return (
        <div className="container">
            <div className="hero-safety2" >
                {service && service?.map((e: any) => (
                    <Safety title={e?.title} text={e?.text} id={e?._id} />
                ))}

            </div>
            <Litelabout aboutus={aboutus} />
        </div>
    )
}
