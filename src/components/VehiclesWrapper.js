import React, { Component } from 'react'
import axios from 'axios'

import Vehicles from './Vehicles'

class VehiclesWrapper extends Component {
    constructor() {
        super()

        this.state = {
            vehicles: []
        }
    }
    updateVehicle = vehicle => {
        axios.put(`/api/vehicles/${vehicle.id}`, vehicle).then(res => {
            this.setState({vehicles: res.data})
        }).catch(err => console.log('failed to edit:', err))
    }

    addVehicle = vehicle => {
        axios.post('/api/vehicles', vehicle).then(res => {
            this.setState({vehicles: res.data})
        }).catch(err => console.log('failed to add:', err))     
    }

    deleteVehicle = vehicle => {
        axios.delete(`/api/vehicles/${vehicle.id}`, vehicle).then(res => {
            this.setState({vehicles: res.data})
        }).catch(err => console.log('failed to edit:', err))
    }
    
    componentDidMount() {
        axios.get('/api/vehicles').then(res => {            
            this.setState({vehicles: res.data})
        }).catch(err => {console.log('theres a problem:', err)})
    }

    render() {
        return(
            <div className='middle'>
               <Vehicles 
               vehicles={this.state.vehicles}
               addVehicle={this.addVehicle}
               updateVehicle={this.updateVehicle}
               deleteVehicle={this.deleteVehicle} />
            </div>
        )
    }
}
export default VehiclesWrapper