const express = require('express')

const vehicleCtrl = require('./controllers/Vehicles')

const app = express()
const port = 3319

app.use(express.json())

app.get('/api/vehicles', vehicleCtrl.get)
app.post('/api/vehicles', vehicleCtrl.create)
app.put('/api/vehicles/:id', vehicleCtrl.update)
app.delete('/api/vehicles/:id', vehicleCtrl.delete)

app.listen(port, () => {
    console.log('LISTEN!! on', port)
})