const { crear: crearCancion, borrar: borrarCancion, ordenarCanciones, listarCanciones,editarArtista,leercancion } = require('./cancion.js')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'añadir cancion',
    builder: {
        nombre: {
            alias: 't',
            describe: 'el nombre',
            demandOption: true,
            type: 'string'
        },
        artista: {
            alias: 'a',
            describe: 'el artista',
            demandOption: true,
            type: 'string'
        },
        anyo:{
            alias:'a',
            describe:'El año que salio la cancion',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        crearCancion(argv.nombre, argv.artista, argv.anyo)
    }
})
yargs.command({
    command: 'list',
    describe: 'lista todas las canciones',
    builder: {},
    handler(argv) {
        listarCanciones()
    }
})

yargs.command({
    command: 'leer',
    describe: 'lee una cancion',
    builder: {
        nombre: {
            alias: 't',
            describe: 'el nombre',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        leercancion(argv.nombre)
    }
})


yargs.command({
    command: 'rmv',
    describe: 'Borrar cancion',
    builder: {
        nombre: {
            alias: 't',
            describe: 'el nombre',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        borrarCancion(argv.nombre)
    }
})

yargs.command({
    command: 'ord',
    describe: 'ordenar cancion',
    builder: {
        opcion: {
            alias: 'o',
            describe: 'Opcion',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ordenarCanciones(argv.opcion)
    }
})
yargs.command({
    command: 'leert',
    describe: 'lee cancion apartir del titulo',
    builder: {
        artista: {
            alias: 'a',
            describe: 'el artista',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        editarArtista(argv.artista)
    }
})

yargs.parse()

//crearCancion('Numb','Linkin Park',2003)

/*
crearCancion('Numb','Linkin Park',2003)
crearCancion('Numb','Linkin Park',2003)
listarCanciones();
leercancion('Numb')
editarArtista('Numb','link')
listarCanciones()
borrarCancion("Numb")
listarCanciones();

*/
// {"nombre":"Numb","artista":"Linkin Park","anyo":2003}