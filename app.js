const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/* 
lugar.getLugarLatLong(argv.direccion)
    .then(resp => {
        console.log(resp);
        clima.getClima(resp.latitud, resp.longitud)
            .then(
                resp => {
                    console.log(resp);
                }
            )
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e)); */

let getInfo = async() => {
    try {
        let lug = await lugar.getLugarLatLong(argv.direccion);
        let temp = await clima.getClima(lug.latitud, lug.longitud);

        return `El clima en ${lug.nombrelocalidad} es de ${temp}`;
    } catch (e) {
        return console.log(`No se pudo determinar el clima en ${argv.direccion}`);
    }

}


getInfo()
    .then(resp => console.log(resp))
    .catch(e => console.log(e));