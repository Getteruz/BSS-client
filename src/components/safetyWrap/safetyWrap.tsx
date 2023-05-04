import Safety from "../safety/safety";
interface Props {
    service: any,

}
export default function SafetyWrap({ service }: Props) {
    return (
        <div className="container">
            <div className="safety-Wrap">
                {service && service.slice(2)?.map((e: any) => (
                    <Safety title={e?.title} text={e?.text} id={e?._id} />
                ))}
            </div>
        </div>
    )
}   