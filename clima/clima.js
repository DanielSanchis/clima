const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=3cc3f14e45d9744ed0a7300dc63dd1c3`)

    let info = resp.data;
    //console.log(info.main);
    return info.main.temp;
}

module.exports = {
    getClima
}