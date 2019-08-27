const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9ff8950a6daef16d8d922506e58816fc&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}