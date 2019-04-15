const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e4c81fdec54d67dcd3845f444be30c59/' + encodeURIComponent(longtitude) + ',' + encodeURIComponent(latitude)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to service.", undefined)
        } else if (body.error) {
            callback("Unable to find loction.", undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '. There is a ' + body.currently.precipProbability +'% chance of rain.')
        }
    })
}
module.exports = forecast