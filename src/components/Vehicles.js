import React, { Component } from 'react'

import Vehicle from './Vehicle'

class Vehicles extends Component {
     constructor() {
         super()

         this.state = {
            
             imageUrl: '',
             make: '',
             model: '',
             year: '',
             price: '',
             
         }
     }
     handleChange = e => {
         let {name, value} = e.target
         this.setState({[name]: value})
     }
    
     
    
     handleClick = () => {
         let vehicle = this.state
         this.props.addVehicle(vehicle)
         this.setState({
            imageUrl: '',
            make: '',
            model: '',
            year: '',
            price: '',
         })
     }

     render() {
         return (
             <div className='wishlist'>
                 <h1 className='list'>Its Ok To Want!...          Sometimes! </h1>
                 <div className='inputs'>
                 <input type="text" name='imageUrl' placeholder='ImageUrl' value={this.state.imageUrl} onChange={this.handleChange}/>
                 <input type="text" name='make' placeholder='Make' value={this.state.make} onChange={this.handleChange}/>
                 <input type="text" name='model' placeholder='Model' value={this.state.model} onChange={this.handleChange}/>
                 <input type="number" name='year' placeholder='Year' value={this.state.year} onChange={this.handleChange}/>
                 <input type="number" name='price' placeholder='$-Price' value={this.state.price} onChange={this.handleChange}/>
                     
                 <button className='addVehicle' onClick={this.handleClick}>+Add Vehicle</button>
                </div>               
                  {/* {this.props.vehicles.map(vehicle => {                     
                    return <Vehicle key={vehicle.id} vehicle={vehicle}
                     updateVehicle={this.props.updateVehicle}
                     deleteVehicle={this.props.deleteVehicle}/>
                  })} */}
                
             </div>
         )
         
     }

}
export default Vehicles