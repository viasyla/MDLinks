import fs, { stat } from "fs";
import path from "path";
import { exit } from "process";

//-------------------------------------------------------
/* validando si ruta es absoluta */
const rutaAbsoluta = (paths) => {
  if (path.isAbsolute(paths)) {
    //este log solo es paa ver en pantalla la direccion correcta que trae paths, se puede borrar luego
    // console.log('RUTA ABSOLUTA : ',paths);

    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------
/* Funcion conviertiendo la ruta en absoluta*/
const convertirRutaAbsoluta = (paths) => {
  //   console.log('esta es la ruta al convertir a absoluta: ',paths);
  return path.resolve(paths);
  //console.log('esta es la ruta al convertir a absoluta: ',paths);
};

//-------------------------------------------------------
// /* validando si el archivo existe en la ruta */
// const existeArchivo = (paths) => {
//     /*resolve=entrega respuesta // reject=entrega error */
//     return new Promise((resolve, reject) => {
//         fs.stat(paths,(error,stats) =>{
//             //me muestra el valor que trae stat
//             //console.log('valor de stat: ',stats);

//             if (stats === undefined) {
//                 reject('no existe archivo en la ruta indicada');
//             }else{
//                 resolve('la ruta es :',paths );

//             }
//             // console.log('valor de stat: ',paths);
//             // resolve(paths);

//         })//final de fs.stat
//         // resolve(paths);
//         // reject('no existe archivo');
//     })//final de promesa
// };//final de funcion
//-------------------------------------------------------
//Funcion existe archivo en la ruta entregada??
const existeArchivo = (paths) => {
  // console.log(path.normalize(paths),47);
  if (fs.existsSync(paths)) {
    // console.log(paths,48);
    return true;
  } else {
    return false;
  } //final de existsSync
}; //final de funcion

//-------------------------------------------------------
//funcion es archivo .md?
const archivoMD = (paths) => {
  return path.extname(paths) === ".md";
//  console.log(path.extname(paths), 58); // .me imprime .md
}; //final de funcion

//-------------------------------------------------------
//funcion leer archivo.md?
const leerMD = (paths) => {
  /*resolve=entrega respuesta // reject=entrega error */
  return new Promise((resolve, reject) => {
    fs.readFile(paths,'utf8', (error, info) => {
      if (error) {
        // reject("no existe archivo en la ruta indicada");
        reject(error,'f78');
      } else {
        resolve(info,'f82');
      }
    }); //final de fs.stat
  }); //final de promesa
}; //final de funcion

//-------------------------------------------------------
//funcion extraer y mostrar links del archivo.md?
const prueba = (info, docum) =>{
    //console.log(info.match(/[^!]\[.+?\]\(.+?\)/g),86);

    const arrayDeLinks = info.match(/[^!]\[.+?\]\(.+?\)/g); // extrae link y texto de docum
    // console.log(arrayDeLinks,90);
    //si al filtrar con macht no encuentra links, me arroja como resultado NULL, y debo finalizar el porgrama.
    if (arrayDeLinks === null) {
        console.log('archivo sin links, favor revisar el documento... ','f93');
        process.exit();
    };
    console.log(docum,'f96');
    //formar objeto 3prop
    const arrayDeElementos = arrayDeLinks.map( (elem) =>{
        //elem son los elementos que contiene el arreglo(los links) y que conformaran el objeto
        //console.log(elem,'******');
        //console.log(elem.match(/https*?:([^"')\s]+)/), '******');//filtra los href
        //console.log(elem.match(/https*?:([^"')\s]+)/)[0], '******');//filtra los href
        //console.log(elem.match(/\[(.*)\]/)[1], '-*-*-*-*-*-*');//filtra los textos de los links
        return    {//creamos un objeto con los console.log
            href: elem.match(/https*?:([^"')\s]+)/)[0],
            text: elem.match(/\[(.*)\]/)[1],
            file: docum
        }
    })//final de funcion array
    //  console.log(arrayDeElementos);
    return arrayDeElementos
  
}//final de funcion

//-------------------------------------------------------
//funcion extraer y mostrar links del archivo.md?















//     return new Promise((resolve, reject) => {
//         fs.stat(paths,(error,stats) =>{
//             //me muestra el valor que trae stat
//             //console.log('valor de stat: ',stats);

//             if (stats === undefined) {
//                 reject('no existe archivo en la ruta indicada');
//             }else{
//                 resolve('la ruta es :',paths );

//             }
//             // console.log('valor de stat: ',paths);
//             // resolve(paths);

//         })//final de fs.stat
//         // resolve(paths);
//         // reject('no existe archivo');
//     })//final de promesa
// };//final de funcion
//

/* aca exporto las funciones y debo importarlas en el index.js  */
export { rutaAbsoluta, convertirRutaAbsoluta, existeArchivo, archivoMD,leerMD,prueba };
