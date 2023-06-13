// const mdLinks = require('../');
import { mdlinks } from "../mdlinks.js";

describe('mdlinks', () => {

  it('mdlinks procesa un solo archivo con 3 links.', () => {
    const ruta = 'ejemplo.md';

    return mdlinks (ruta, {validate: false})
    .then(
      (array) => {
        expect (array).toEqual([]);
      }
    );//final de .then
    // console.log('FIX ME!');
  });//final de it

});//final de funcion describe
