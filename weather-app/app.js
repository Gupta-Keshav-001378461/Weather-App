const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=3903ef8b71dde02aa708ae5cd1c7ba28&query=37.8267,-122.4233&units=f'

request({url: url, json: true}, (error, response) =>{
    if(error){
        console.log('Unable to connect to weather service!')
    } else {
        console.log(response.body.current.weather_descriptions[0] +'. It is currently ' + response.body.current.temperature + ' degrees out. It feels like  ' 
    + response.body.current.feelslike + ' degree temperature')
    }
    })

//Geocoding
// Address -> Lat/Long -> Weather

// const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2VzaGF2OTUiLCJhIjoiY2ttMTZvdDdkMHN0bjJ2cXN3anBmNGJscSJ9.KMLEb1Vh9wy8wK4iCNIs4g'

// request ({url: mapBoxUrl, json: true}, (error, response) =>{
   
//     console.log(response.body.features[0].center[1], response.body.features[0].center[0])
// })