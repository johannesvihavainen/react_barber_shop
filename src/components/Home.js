import Hero from "./Hero";
import BarberDisplay from "./BarberDisplay";
import EmailNewsLetter from "./EmailNewsLetter";
import Footer from "./Footer";

export default function Home() {
    return (
        <div>
            <Hero />
            <BarberDisplay />
            <EmailNewsLetter />
            <Footer />
        </div>
    )
}