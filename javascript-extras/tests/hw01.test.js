const {
    totalChar,
    subCadena,
    sinEspacios,
    comienzaCon,
    hoyEs,
    mesActual,
    anioActual,
    dateComplet
} = require('../01-homeworks')

describe('totalChar', ()=>{
    it('Deberia devolver el total en longitud de ambas string', ()=>{
        expect(totalChar('Hola', 'Mundo')).toEqual(9)
        expect(totalChar('Hola', 'Mundo!')).toEqual(10)
        expect(totalChar('Bien', 'venido')).toEqual(10)
    })
})
describe('subCadena', () => {
    it('Deberia devolver como cadena los primeros 4 indice', ()=>{
        expect(subCadena('JavaScript')).toBe('Java');
        expect(subCadena('Hola Mundo')).toBe('Hola');
        expect(subCadena('DaysOfJavaScript')).toBe('Days');
        expect(subCadena('Bienvenido')).toBe('Bien');
        })
})
describe('sinEspacios', () => {
    it('Deberia devolver como cadena los primeros 4 indice', ()=>{
        expect(sinEspacios('    JavaScript    ')).toBe('JavaScript');
        expect(sinEspacios('   Hola Mundo   ')).toBe('Hola Mundo');
        expect(sinEspacios('     Days Of JavaScript     ')).toBe('Days Of JavaScript');
        expect(sinEspacios('  Bienvenido  ')).toBe('Bienvenido');
        })
})
describe('comienzaCon', () => {
    it('Deberia devolver como cadena los primeros 4 indice', ()=>{
        expect(comienzaCon('WorkSpace')).toBe(true)
        expect(comienzaCon('HomeWork')).toBe(false);
        expect(comienzaCon('WorkStation')).toBe(true);
        })
})
describe('Object Date', () => {
    const now = new Date();

    it('Deberia devolver el número del día actual', ()=>{
        expect(hoyEs()).toBe(now.getDate())
        })

    it('Deberia devolver el número del mes actual', ()=>{
        expect(mesActual()).toBe(now.getMonth())
        })
        
    it('Deberia devolver el año actual', ()=>{
        expect(anioActual()).toBe(now.getFullYear())
        })

    it('Deberia devolver objeto date completo.', ()=>{
        expect(dateComplet()).toBe(now)
        })
})