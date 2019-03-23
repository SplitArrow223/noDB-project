import React, {Component} from 'react'



class Vehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
          id: this.props.vehicle.id,
          imageUrl: this.props.vehicle.imageUrl,
          make: this.props.vehicle.make,
          model: this.props.vehicle.model,
          year: this.props.vehicle.year,
          price: this.props.vehicle.price,
          edit: false
        }
    }
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    handleEditClick = () => {
        this.setState({edit: true})
    }
    handleUpdateClick = () => {
        this.props.updateVehicle(this.state)
        this.setState({edit: false})
    }




    render() {
        return this.state.edit ? (
            <div className='inputs'>
                 <input type="text" name='imageUrl'  placeholder='imageUrl' value={this.state.imageUrl} onChange={this.handleChange}/>
                 <input type="text" name='make' placeholder='Make' value={this.state.makel} onChange={this.handleChange}/>
                 <input type="text" name='model' placeholder='Model' value={this.state.model} onChange={this.handleChange}/>
                 <input type="number" name='year' placeholder='Year' value={this.state.year} onChange={this.handleChange}/>
                 <input type="number" name='price' placeholder='Price' value={this.state.price} onChange={this.handleChange}/>
                 <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        ) : (
            
            <div className='section'>
               
                 <div className='Info'>
                <p>{this.props.vehicle.make}</p>
                <p>{this.props.vehicle.model}</p>
                <p>{this.props.vehicle.year}</p>
                <p>{this.props.vehicle.price}</p>
                </div>  
                <img src={this.props.vehicle.imageUrl} alt="" width='350'/>
                <div>
                <button className='DeleteBtn' onClick={()=> this.props.deleteVehicle(this.state)}>X</button>
                <button className='EditBtn' onClick={this.handleEditClick}><i className='fa fa-edit fa-1x'></i></button>
                </div>

                
            </div> 
        )
     }


}    
export default Vehicle