const request = require('request')
const forecast = (longitude, latitude, callback) =>{
    const url ='http://api.weatherstack.com/current?access_key=3903ef8b71dde02aa708ae5cd1c7ba28&query='+ longitude + ','+ latitude + '&unit=f'
    request({url: url, json: true}, (error, response) => {
        if(error){
           callback('Unable to connect to weather services!', undefined) 
        }else if(response.body.error){
            callback('Unable to find location, Try another search', undefined)
        } else {
            callback(undefined, 
                response.body.current.weather_descriptions[0] + ' Conditions. It is currently ' +
                 response.body.current.temperature + ' degrees out. Feels like '+
                 response.body.current.feelslike + ' degrees.'

            )
        }
    })
}

module.exports = forecast