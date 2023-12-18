
// fs.writeFileSync sirve para crear un archivo txt con los datos 
const colors = require('colors/safe');
const fs = require('fs')

const crearArchivo = async (base, l = false, h = 10) => {
    try {
        
        let salida = '';
        for (let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        };
        if (l){
            console.log(colors.america('==============='));
            console.log(`Tabla del ${base}`);
            console.log(colors.rainbow('==============='));
            console.log(colors.rainbow(salida))
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}