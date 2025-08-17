import alex from '../assets/gallery/alex.jpg'
import andre from '../assets/gallery/andre.jpg'
import chris from '../assets/gallery/chris_knight.jpg'
import megan from '../assets/gallery/megan.jpg'
import michael1 from '../assets/gallery/michael_demoya.jpg'
import michael2 from '../assets/gallery/michael_demoya2.jpg'
import mostafa from '../assets/gallery/mostafa.jpg'
import salah from '../assets/gallery/salah.jpg'
import mitchell from '../assets/gallery/mitchell.jpg'
import Footer from './Footer'

export default function Gallery() {
    return (
        <div className='gallery'>
            <h1 className='gallery-title'>Browse our gallery!</h1>
            <div className="image-gallery">
                <div className="image-card">
                    <img src={alex} alt="alex's work" />
                </div>
                <div className="image-card">
                    <img src={andre} alt="andre's work" />
                </div>
                <div className="image-card">
                    <img src={chris} alt="chris's work" />
                </div>
                <div className="image-card">
                    <img src={megan} alt="megan's work" />
                </div>
                <div className="image-card">
                    <img src={michael1} alt="michael's work" />
                </div>
                <div className="image-card">
                    <img src={michael2} alt="michael's work" />
                </div>
                <div className="image-card">
                    <img src={mostafa} alt="mostafa's work" />
                </div>
                <div className="image-card">
                    <img src={salah} alt="salah's work" />
                </div>
                <div className="image-card">
                    <img src={mitchell} alt="mitchell's work" />
                </div>
            </div>
            <Footer />
        </div>
    )
}