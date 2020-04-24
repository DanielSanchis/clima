const axios = require("axios");

const getLugarLatLong = async(direccion) => {


    let encondedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}&key=AIzaSyBF7F2VM2t8_mKlUiwcOBnkNCoRI9k_CQc`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad' + direccion);
    } else {
        let location = resp.data.results[0];
        let nombrelocalidad = location.formatted_address;
        let latitud = location.geometry.location.lat;
        let longitud = location.geometry.location.lng;

        return {
            nombrelocalidad,
            latitud,
            longitud
        }
    }
}

module.exports = {
    getLugarLatLong
}