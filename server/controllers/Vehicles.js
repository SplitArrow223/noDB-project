let id = 1;

let vehicles = [

    {
        id: id++,
        imageUrl: 'https://cdn.motor1.com/images/mgl/RVevg/s4/2017-ford-f-150-raptor.jpg',
        make: 'Ford',
        model: 'Raptor',
        year: 2019,
        price: 75000
    },
    {
        id: id++,
        imageUrl: 'https://ccmarketplace.azureedge.net/cc-temp/listing/119/6380/15669702-1967-shelby-gt500-srcset-sm.jpg',
        make: 'Ford',
        model: 'GT500 Shelby Mustang',
        year: 1966,
        price: 100000
    },
    {   
        id: id++,
        imageUrl: 'https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
        make: 'Ferrari',
        model: 'undefined',
        year: 2012,
        price: 150000
    }
]
module.exports = {
    get: (req, res) => {
        res.send(vehicles)
    },

    create: (req, res) => {
        let {imageUrl, make, model, year, price} = req.body

        let vehicle = {
            id: id++,
            imageUrl,
            make,
            model,
            year,
            price
        }
        
        vehicles.push(vehicle)
        res.send(vehicles)
    },
    update: (req, res) => {
        let {imageUrl, make, model, year, price} = req.body

        let updatedVehicle = {
            id: req.params.id,
            imageUrl,
            make,
            model,
            year: Number(year),
            price: Number(price),
        }
       let index = vehicles.findIndex(vehicle => Number(vehicle.id) === Number(req.params.id))
       vehicles.splice(index, 1, updatedVehicle)
       res.send(vehicles)
    },
    delete: (req, res) => {
        let index = null
        let {id} = req.params
        vehicles.forEach((vehicle, i) => {
            if(vehicle.id * 1 === id * 1){
                index = i
            }
        })
        vehicles.splice(index, 1)
        res.send(vehicles)
    }
   

}