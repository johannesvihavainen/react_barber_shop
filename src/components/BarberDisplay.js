import augustineProfile from '../assets/augustine_profile.jpg'
import chrisProfile from '../assets/chris_profile.jpg'
import joffreyProfile from '../assets/joffrey_profile.jpg'
import johnProfile from '../assets/john_profile.jpg'
import michaelProfile from '../assets/michael_profile.jpg'
import nateProfile from '../assets/nate_profile.jpg'

export default function BarberDisplay() {
    return (
        <div className="barber-display-container">
            <div className="barber-card">
                <img src={augustineProfile} alt="a profile of Augustine" />
                <div className="barber-info">
                    <p className='barber-title'>Augustine</p>
                    <p className='barber-description'>With over 10 years of experience, Augustine provides expert, detail-focused haircuts. As the founder, he is dedicated to delivering exceptional grooming services and ensuring every client leaves satisfied.</p>
                </div>
                <button className='display-book-button'>BOOK</button>
            </div>
            <div className="barber-card">
                <img src={chrisProfile} alt="a profile of Chris" />
                <div className="barber-info">
                    <p className='barber-title'>Chris</p>
                    <p className='barber-description'>Chris has been honing his craft for 5 years, specializing in modern cuts and fades. Friendly and approachable, he ensures each client leaves with a fresh, polished look.</p>
                </div>
                <button className='display-book-button'>BOOK</button>
            </div>
            <div className="barber-card">
                <img src={joffreyProfile} alt="a profile of Joffrey" />
                <div className="barber-info">
                    <p className='barber-title'>Joffrey</p>
                    <p className='barber-description'>Joffrey brings 8 years of experience to the chair, with a focus on classic styles and precision trimming. He takes pride in creating looks that match each client’s personality and style.</p>
                </div>
                <button className='display-book-button'>BOOK</button>
            </div>
            <div className="barber-card">
                <img src={johnProfile} alt="a profile of John" />
                <div className="barber-info">
                    <p className='barber-title'>John</p>
                    <p className='barber-description'>John has 3 years of experience and a passion for trendy cuts and clean shaves. Known for his attention to detail and friendly approach, he makes every visit a comfortable and stylish experience.</p>
                </div>
                <button className='display-book-button'>BOOK</button>
            </div>
            <div className="barber-card">
                <img src={michaelProfile} alt="a profile of Michael" />
                <div className="barber-info">
                    <p className='barber-title'>John</p>
                    <p className='barber-description'>Michael has 10 years of experience, specializing in modern fades and beard sculpting. With a creative eye and steady hand, he ensures every client leaves looking sharp and confident.</p>
                </div>
                <button className='display-book-button'>BOOK</button>
            </div>
            <div className="barber-card">
                <img src={nateProfile} alt="a profile of Nate" />
                <div className="barber-info">
                    <p className='barber-title'>John</p>
                    <p className='barber-description'>Nate is a skilled barber with 6 years of experience, known for his precision cuts and friendly demeanor. He enjoys helping clients find the perfect style that suits their personality.</p>
                </div>
                <button className='display-book-button'>BOOK</button>
            </div>
        </div>
    )
}