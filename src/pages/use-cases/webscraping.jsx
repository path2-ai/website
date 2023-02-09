import { CallToAction } from "@/components/jsx/CallToAction";
import { Webscraping } from "@/components/jsx/UseCases/Webscraping";

export default function Home() {
    return (
        <>
            <Webscraping />
            <CallToAction />
        </>
    )
}
