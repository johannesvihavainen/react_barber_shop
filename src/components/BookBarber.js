import NavBar from './Navbar'
import { useEffect, useState } from 'react'


export default function BookBarber() {
    const [barbers, setBarbers] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/barbers')
            .then(res => res.json())
            .then(data => setBarbers(data))
            .catch(err => console.error(err))
    }, [])

    const handleBook = (barberId, slot) => {
        fetch('http://localhost:4000/api/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ barberId, slot })
        })
            .then(res => res.json())
            .then(data => alert(data.message))
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div>
                <h1>Book a Barber</h1>
                {barbers.map(barber => (
                    <div key={barber.id}>
                        <h2>{barber.name}</h2>
                        <p>Services: {barber.services.join(', ')}</p>
                        <h3>Available Slots:</h3>
                        {barber.availableSlots.length > 0 ? (
                            barber.availableSlots.map(slot => (
                                <button key={slot} onClick={() => handleBook(barber.id, slot)}>{new Date(slot).toLocaleString()}</button>
                            ))
                        ) : (
                            <p>No slots available</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}