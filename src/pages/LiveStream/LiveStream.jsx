import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../Home/Footer/Footer";
import LiveStreamService from "./LiveStreamService/LiveStreamService";

export default function LiveStream() {
    return (
        <>
            <HeroSection title='Live stream service' />
            <LiveStreamService />
            <Footer />
        </>
    )
}