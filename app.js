//Recibir funcion de multiplicar.js
const { boolean } = require('yargs');
require('colors');

const { crearArchivo } =require('./helpers/multiplicar');
const argv = require('yargs')
          //banderas
          .option('b', {
            alias: 'base',
            type: 'number',
            demandOption : true
          } )

          //condicion para que si no se pone l en la consola no se imprima la multiplicacion
          .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption : true,
            default :false 
          })


          //bandera que determina el numero de multiplicaciones que se van a imprimir
          .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta qué número se imprimirá la tabla'
          })

          .check ( (argv, option ) => {
              if(isNaN(argv.b) ){
                throw 'ERROR!!!la base tiene que ser numero'
              }
              return true;
          })
          .argv;

console.clear();


console.log( argv);




// Llamamos a la función y manejamos la promesa
//se le pasa los argumentos(banderas)
crearArchivo(argv.b, argv.l, argv.h)
  .then( nombreArchivo => console.log(nombreArchivo.blue, 'creado') )
  .catch ( err => console.log(err));


// const [,,arg3 = 'base=5'] = process.argv;
// const [, base=5] =arg3.split('=');
