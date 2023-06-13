// module.exports = () => {
//   // ...
// };

/* ======== !!!  RUTA DEBE SER ABSOLUTA(COMPLETA) SIEMPRE !!! ==========*/
import { rutaAbsoluta,convertirRutaAbsoluta,existeArchivo,archivoMD,leerMD,prueba } from "./funciones.js";

/*ruta relativa* (CORTA)/*/
  //let docum = 'ejemplo.md'; /*ruta relativa*/ 
 // const docum = 'ejemplo03-sin-links.md'; /*ruta relativa*/ 
  
  //const docum = 'ejemplo02.txt'; /*ruta relativa*/ 

  //const docum = 'ejemplo.tc'; /*ruta relativa*/ 

 /*ruta absoluta(COMPLETA)*/ 
   let docum = 'C:/Users/Morocha1/Desktop/Proyectos Laboratoria/MDLinks/ejemplo.md'; /* ruta absoluta*/
 //  let docum = 'C:\Users\Morocha1\Desktop\Proyectos Laboratoria\MDLinks\ejemplo.md'; /* ruta absoluta*/

 /*ruta relativa INEXISTENTE* (CORTA)/*/
  //let docum = 'PRUEBAFALSA.md'; /*ruta relativa*/ 

 /* =============================================================== */


//  var ruta = 'C:\\Users\\Morocha1\\Desktop\\Proyectos Laboratoria\\MDLinks\\ejemplo.md';
//  var nuevaRuta2 = ruta.replace(/\\/g, '/');
//  console.log(nuevaRuta2,31);



//let docum = 'C:\\Users\\Morocha1\\Desktop\\Proyectos Laboratoria\\MDLinks\\ejemplo.md';
//let cambio = (/\\/g,'joooo');
// let docum2 = docum.replace("/\\","KOL ","g");
// console.log(docum2,41);




const respuesta = existeArchivo(docum);
if (respuesta === false){
    console.log('Archivo no existe en la ruta entregada, favor vuelva a ejecutar...');
    process.exit();
}else{
  //si respuesta es === true
  //console.log('Archivo existe en la ruta dada: ');//este lo puedo comentar al salir a produccion
  console.log(
    "¿Se encuentra en una ruta absoluta (completa) ??: ",rutaAbsoluta(docum)); //este lo puedo comentar al salir a produccion
  if (rutaAbsoluta(docum) === false) {
    //console.log('necesario convertir ruta, porque es relativa');
    //convertirRutaAbsoluta(docum);
    //es necesario que vuelva a asignar a docum la ruta nueva
    docum =  convertirRutaAbsoluta(docum);
   // console.log(docum, 'i54');


    console.log(
      "Ruta ahora es absoluta(Completa) : ",docum/*convertirRutaAbsoluta(docum)*/,'i56');
  } else {
    // if  (rutaAbsoluta(docum) === true) {//este lo puedo comentar al salir a produccion
    //     console.log('Esta es la ruta Absoluta(Completa) : ',rutaAbsoluta(docum));
    // }
  }
  const respuestaMD = archivoMD(docum);
  console.log(respuestaMD, "i57"); //me devuelve true en este caso, tambien puede ser false
  if (respuestaMD === false) {
    console.log(
      "Por el momento solo se pueden leer extensiones .md, favor vuelva a ejecutar... "
    );
    process.exit();
  } //fin If

  // Leer el archivo
  leerMD(docum)
    .then((info) => {
      //    console.log('Contenido del archivo MD:', info);
      // prueba(info,docum);
      // console.log(result);
      prueba(info, docum);
      console.log( prueba(info, docum), ' i80');
    })
    .catch((error) => {
      console.error("Ocurrió un error al leer el archivo:", error);
    }); //final de funcion
}//GRAN FINAL




//  existeArchivo(docum).then((respuesta) =>{
//     // console.log('Respuesta : ',respuesta);
//  }).catch((error) =>{
//      console.log('Error : ',error);
//      process.exit();
 //  })//final de funcion

