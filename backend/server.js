const express = require('express')
const cors = require('cors')

const app = express()          // create app first
app.use(cors())                // then apply middleware
app.use(express.json())  



const barbers = [
  {
    id: 1,
    name: 'Augustine',
    services: ['Haircut', 'Beard Trim'],
    availableSlots: ['2025-08-20T10:00', '2025-08-20T13:00'],
    image: '/images/augustine.jpg'
  },
  {
    id: 2,
    name: 'Chris',
    services: ['Haircut', 'Fades'],
    availableSlots: ['2025-08-21T11:00', '2025-08-21T15:00'],
    image: '/images/chris.jpg'
  },
  {
    id: 3,
    name: 'Joffrey',
    services: ['Classic Cut', 'Beard Trim'],
    availableSlots: ['2025-08-22T09:00', '2025-08-22T14:00'],
    image: '/images/joffrey.jpg'
  }
];

app.get('/api/barbers', (req, res) => {
    res.json(barbers)
})

app.post('/api/book', (req, res) => {
    const {barberId, slot} = req.body
    const barber = barbers.find(b => b.id === barberId)

    if(!barber) return res.status(404).json({error: 'barber not found'})
        if(!barber.availableSlots.includes(slot)){
            return res.status(400).json({error: 'Slot not available'})
        }

        barber.availableSlots = barber.availableSlots.filter(s => s !== slot)
        res.json({success: true, message: `Booked ${slot} with ${barber.name}`})
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));