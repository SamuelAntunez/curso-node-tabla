const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limita la tabla de multiplicar'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        } else if (isNaN(argv.h)){
            throw 'El h tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;


// const base = 3;
// process,argv son los argumentos de una consola, el primero es el directorio de instalacion de node y el segundo es donde se inicializa la app
// const [ , , arg3='base=5'] = process.argv;
// const [ , base ] = arg3.split('=')
// console.log('base: yargs', argv.base);