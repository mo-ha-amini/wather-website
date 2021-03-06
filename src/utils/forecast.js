const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=bf17034c300b2693383f150277c61371&query=' +
    latitude +
    ',' +
    longitude

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        'Check Time : '+
          body.current.observation_time +
          ' .  ' +
          body.current.weather_descriptions +
          ' It is currently ' +
          body.current.temperature +
          ' degress out. There is a ' +
          body.current.precip +
          '% chance of rain.'
      )
    }
  })
}

module.exports = forecast
