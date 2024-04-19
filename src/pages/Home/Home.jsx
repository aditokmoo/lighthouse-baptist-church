// Components
import About from './About/About';
import Calendar from './Calendar/Calendar';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import { Verse } from './Verse';
// SCSS
import styles from './Home.module.scss';

export default function Home() {
    return (
        <>
            <HeroSection title='Lighthouse Baptist Church' />
            <About />
            <Verse />
            <Calendar />
            <FAQ />
            <Footer />
        </>
    )
}