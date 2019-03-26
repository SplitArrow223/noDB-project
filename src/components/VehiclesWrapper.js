import React, { Component } from 'react'
import axios from 'axios'

import Vehicles from './Vehicles'
import List from './List'


class VehiclesWrapper extends Component {
    constructor() {
        super()

        this.state = {
            vehicles: [],
            togg: false,
            list: false
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
    handleToggClick = () => {
        this.setState({togg: true})
    }
    handleReturnClick = () => {
        this.setState({togg: false})
    }
    handleListClick = () => {
        this.setState({list: true})
    }
    handleHomeClick = () => {
        this.setState({list: false})
    }
    
    
    componentDidMount() {
        axios.get('/api/vehicles').then(res => {            
            this.setState({vehicles: res.data})
        }).catch(err => {console.log('theres a problem:', err)})
    }

    render() {
         
          if(this.state.togg === true){
              return (
                  <div className='middle'>
                      
                     <Vehicles 
                     vehicles={this.state.vehicles}
                     addVehicle={this.addVehicle}
                     updateVehicle={this.updateVehicle}
                     deleteVehicle={this.deleteVehicle} />
                     <button className='return' onClick={this.handleReturnClick}>{'<return'}</button>
                  </div>
              )   
            }else if (this.state.list === true){
                return (                
                <div className='home'>
                    <h1 className='list'>My Sweet List!!</h1>
                   <List
                     vehicles={this.state.vehicles}
                     updateVehicle={this.updateVehicle}
                     deleteVehicle={this.deleteVehicle} /> 
                      <button className='homeB' onClick={this.handleHomeClick}>Home</button>
                </div> 
                )
            }else if (this.state.togg === false){
                return(
                <div>
                   <h1 className='listH'>This is the Home Page! </h1>
                 <div className='homeBtn'>
                   <button className='create' onClick=  {this.handleToggClick}>Create List + </button>
                  <button className='create' onClick={this.handleListClick}>My List</button> 
                 </div> 
                </div> 
                ) 
                
            }
              
        
    }
}
export default VehiclesWrapper