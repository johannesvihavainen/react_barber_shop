import NewsLetterPhoto from '../assets/newsletter_photo.jpg'

export default function EmailNewsLetter() {
    return (
        <div className='email-newsletter-container'>
            <img className="newsletter-photo" src={NewsLetterPhoto} alt="photo for the newsletter sign up form" />
            <div className="newsletter-info-container">
                <p>Join our newsletter for exclusive deals, grooming tips, and the latest trends in hair and beard care.</p>
                <div className="newsletter-subscribe-container">
                    <input type="email" placeholder='Email Address' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}