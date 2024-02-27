
const fs = require('fs');
require('colors');




//convertimos en funcion asincrona
//valor por defecto
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try{
        let salida ='';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base } x  ${i} = ${base * i }\n`;
            consola += `${base } ${'x'.red} ${i} = ${base * i }\n`;


          }
      
        //l true en consola para mostrar multiplicacion
        if(listar){
            console.log('--------------------------'.green);
            console.log('Tabla del:', base);
            console.log('--------------------------'.green);

            console.log(consola);
        }
     

        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        // ./salida/ con esto configuro la ruta donde se va a guardar las tablas
        return(`tabla-${base}.txt Creado`);

    }catch(error){
        throw(err)

    }

}
    //exportar funcion de multiplicar a index

module. exports = {
    crearArchivo
}