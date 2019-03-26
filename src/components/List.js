import React from 'react'

import Vehicle from './Vehicle'

function List(props) {
    return(
          props.vehicles.map(vehicle => {   
           return <Vehicle key={vehicle.id} vehicle={vehicle}
           updateVehicle={props.updateVehicle}
           deleteVehicle={props.deleteVehicle}/>
          })
        
        
    )
}
export default List