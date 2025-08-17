import Footer from "./Footer";

export default function Services() {
    return (
        <div className="App">
            <div className="services">
                <h1 className="services-title">Services</h1>
                <p className="services-address">McKinney, Texas</p>
                <div className="services-container">
                    <div className="service">
                        <p>New Client Cut And Consultation</p>
                        <p>Book this service if it is your first time booking with us. Service includes a thorough consultation and hair wash to get desired results.</p>
                        <div className="service-pricing">
                            <button>Book now</button>
                            <p className="service-price-and-duration">$60,00 - 50 mins</p>
                        </div>
                    </div>
                    <div className="service">
                        <p>Kid's Haircut</p>
                        <p>Perfect for little ones! Our kid-friendly haircut includes a gentle consultation and a relaxing hair wash to ensure a fun and comfortable experience.</p>
                        <div className="service-pricing">
                            <button>Book now</button>
                            <p className="service-price-and-duration">$45,00 - 45 mins</p>
                        </div>
                    </div>
                    <div className="service">
                        <p>Haircut</p>
                        <p>Our professional haircut includes a personalized consultation and a precise trim to leave your hair looking fresh and stylish.</p>
                        <div className="service-pricing">
                            <button>Book now</button>
                            <p className="service-price-and-duration">$49,00 - 45 mins</p>
                        </div>
                    </div>
                    <div className="service">
                        <p>Men's Haircut+Beard</p>
                        <p>Get a sharp, polished look with our combined haircut and beard grooming. Includes a tailored consultation, precise trimming, and styling for a clean finish.</p>
                        <div className="service-pricing">
                            <button>Book now</button>
                            <p className="service-price-and-duration">$56,00 - 45 mins</p>
                        </div>
                    </div>
                    <div className="service">
                        <p>Haircut And Hair Wash</p>
                        <p>Enjoy a refreshing haircut with a relaxing hair wash. Includes a personalized consultation and styling to leave your hair looking neat and revitalized.</p>
                        <div className="service-pricing">
                            <button>Book now</button>
                            <p className="service-price-and-duration">$52,00 - 30 mins</p>
                        </div>
                    </div>
                    <div className="service">
                        <p>Edge Up And Style</p>
                        <p>Keep your look sharp and clean with our precision edge-up and styling service. Perfect for a polished finish and well-groomed appearance.</p>
                        <div className="service-pricing">
                            <button>Book now</button>
                            <p className="service-price-and-duration">$52,00 - 30 mins</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}