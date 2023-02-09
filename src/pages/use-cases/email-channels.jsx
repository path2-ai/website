import { CallToAction } from "@/components/jsx/CallToAction";
import { EmailChannels } from "@/components/jsx/UseCases/EmailChannels";

export default function Home() {
    return (
        <>
            <EmailChannels />
            <CallToAction />
        </>
    )
}
