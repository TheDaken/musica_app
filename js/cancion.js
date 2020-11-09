const fs = require('fs')



const leerCanciones = (fichero)=>{
    try {
        const buffer = fs.readFileSync(fichero)
        const datosString = buffer.toString()
        return JSON.parse(datosString)
    } catch (error) {
        console.log(error)
        return []
    }
}

const crearCancion =  (nombre, artista,anyo) => {

    const canciones = leerCanciones('../json/canciones.json')

    // buscar si existe la nota
    const indice = canciones.findIndex(
         (cancion) => cancion.nombre == nombre
    )
    if (indice === -1) {
        console.log('Cancion creada')
        canciones.push({ nombre, artista,anyo }) // cuerpo:cuerpo
        escrivirCan('../json/canciones.json', canciones)
    } else {
        console.log('Cancion ya existente')
    }
}

function leercancion(nombre){
    const canciones = leerCanciones('../json/canciones.json')
    const cancionEn = canciones.find(function (cancion) {
        return cancion.nombre === nombre
    })
    if(cancionEn){
        console.log(cancionEn);
    }else{
        console.log('no encontrada');
    }
}
function editarArtista(nombre,artista) {
    const canciones = leerCanciones('../json/canciones.json')

    const indice = canciones.findIndex( (cancion)=> cancion.nombre === nombre)
    if (indice === -1) {
        console.log('Nota no encontrada')
    } else {
        console.log('Nota borrada')
        const can = canciones[indice]
        canciones.splice(indice, 1)
        canciones.push({nombre: can.nombre,artista: artista, anyo: can.anyo})
        escrivirCan('../json/canciones.json', canciones) // notas tiene un elemento menos
    }

   /* const cancionEn = canciones.find(function (cancion,i) {
       
        const bcancion =  cancion.nombre.includes(nombre)
        canciones.push({nombre: bcancion.nombre, artista: artista, anyo: bcancion.anyo});
       // return 

    })
    if (cancionEn) {
        console.log('Cancion encontrada');
        escrivirCan('../json/canciones.json',canciones)
        return cancionEn
    } else {
        console.log('Cancion no encontrada');
        return {}
    }*/
}

const escrivirCan = function (fichero, canciones) {
    const textoJSON = JSON.stringify(canciones)
    fs.writeFileSync(fichero, textoJSON)
}

function listarCanciones(){
    const canciones = leerCanciones('../json/canciones.json')
    console.log(canciones);
}

function ordenarCanciones(option){
    const canciones = leerCanciones('../json/canciones.json')
    if (option === 'nombre') {
        return canciones.sort(function (cancionA, cancionB) {
            if (cancionA.nombre.toLowerCase() < cancionB.nombre.toLowerCase()) {
                return -1
            } else if (cancionA.nombre.toLowerCase() > cancionB.nombre.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return canciones.sort(function (cancionA, cancionB) {
            if (cancionA.anyo < cancionB.anyo) {
                return -1
            } else if (cancionA.anyo > cancionB.anyo) {
                return 1
            } else {
                return 0
            }
        })
    }
}

function borrarCancion(nombre) {
    const canciones = leerCanciones('../json/canciones.json')
    let i = canciones.findIndex(function (cancion) { return cancion.nombre === nombre });


    if (i === -1) {
        console.log('cancion no encontrada');
        return {}
    } else {
        console.log('cancion borrada');
        canciones.splice(i, 1);
        escrivirCan('../json/canciones.json',canciones)
        return {}
    }
}


module.exports = {
    crear: crearCancion,
    borrar: borrarCancion,
    ordenarCanciones,
    listarCanciones,
    editarArtista,
    leercancion
}