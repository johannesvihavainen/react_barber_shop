import heroImage from '../assets/barber_shop_hero.jpg'
export default function Hero() {
    return (
        <div className="hero-container">
            <img src={heroImage} alt="barber shop cover" />
            <p>Welcome to the Lone Star State’s <span>premier barbershop.</span></p>
        </div>
    )
}