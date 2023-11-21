const {
    imprimirMayor,
    asignarCalificacion,
    esDiaLaboral,
    determinarTipoDato,
    esCadenaVacia,
    verificarContrasena,
    verificarPalabra,
    calcularDescuento,
    obtenerMayor,
    calcularPrecioEnvio,
    determinarTipoTriangulo,
    calcularDescuentoExtra,
    calcularCalificacionFinal,
    calcularDescuentoCompra
} = require('../02-homeworks')

describe('imprimirMayor', () => {
    it('Deberia devolver un string indicanco cual es mayor', () =>{
        expect(imprimirMayor(10, 9)).toBe('10 es mayor que 9')
        expect(imprimirMayor(8, 9)).toBe('9 es mayor que 8')
        expect(imprimirMayor(1, 15)).toBe('15 es mayor que 1')
        expect(imprimirMayor(10, 10)).toBe('Los números son iguales')
    })
})

describe('asignarCalificacion', () => {
    it('Deberia asigar la clasificacion correspondiente', () =>{
        expect(asignarCalificacion(10)).toBe('Calificación: F')
        expect(asignarCalificacion(95)).toBe('Calificación: A')
        expect(asignarCalificacion(68)).toBe('Calificación: D')
        expect(asignarCalificacion(82)).toBe('Calificación: B')
        expect(asignarCalificacion(77)).toBe('Calificación: C')
    })
})

describe('esDiaLaboral', () => {
    it('Deberia devolver un msj con el dia e indicando si es laboral o no', () =>{
        expect(esDiaLaboral('Lunes')).toBe('Lunes es un día laboral')
        expect(esDiaLaboral('Miercoles')).toBe('Miercoles es un día laboral')
        expect(esDiaLaboral('Jueves')).toBe('Jueves es un día laboral')
        expect(esDiaLaboral('Sabado')).toBe('Sabado no es un día laboral')
        expect(esDiaLaboral('Domingo')).toBe('Domingo no es un día laboral')
    })
})

describe('determinarTipoDato', () => {
    it('Deberia devolver un mensaje con el tipo de dato correspondiente', () =>{
        expect(determinarTipoDato('Hola')).toBe('La variable es de tipo cadena de texto')
        expect(determinarTipoDato(10)).toBe('La variable es de tipo número')
        expect(determinarTipoDato(true)).toBe('La variable es de tipo booleano')
        expect(determinarTipoDato('Sabado')).toBe('La variable es de tipo cadena de texto')
        expect(determinarTipoDato({name: 'leo', apellido: 'avila'})).toBe("Tipo de dato desconocido")
    })
})

describe('esCadenaVacia', () => {
    it('Deberia devolver un msj con el dia e indicando si es laboral o no', () =>{
        expect(esCadenaVacia('Lunes')).toBe('La cadena no está vacía')
        expect(esCadenaVacia('A')).toBe('La cadena no está vacía')
        expect(esCadenaVacia('')).toBe('La cadena está vacía')
        expect(esCadenaVacia('ABC')).toBe('La cadena no está vacía')
        expect(esCadenaVacia('')).toBe('La cadena está vacía')
    })
})

describe('verificarContrasena', () => {
    it('Deberia devolver el msj correspondiente si ingresó bien la contrasena', () =>{
        expect(verificarContrasena('holaSoyUnaContraseña#' , 'holaSoyUnaContraseña#')).toBe('Contraseña válida')
        expect(verificarContrasena('Miercoles', 'miercoles')).toBe('Contraseña inválida')
        expect(verificarContrasena('Jueves', 'Jueves')).toBe('Contraseña válida')
        expect(verificarContrasena('Sabado', 'sabado123')).toBe('Contraseña inválida')
        expect(verificarContrasena('pepe2023', 'pepe2023')).toBe('Contraseña válida')
    })
})

describe('verificarPalabra', () => {
    it('Deberia verificar la longitud de las palabras y devuelve el msj correspondiente', () =>{
        expect(verificarPalabra('holaSoyUnaContraseña#')).toBe('La palabra es larga')
        expect(verificarPalabra('Miercoles')).toBe('La palabra es mediana')
        expect(verificarPalabra('Jueves')).toBe('La palabra es mediana')
        expect(verificarPalabra('Hola')).toBe('La palabra es corta')
        expect(verificarPalabra('pepe')).toBe('La palabra es corta')
    })
})

describe('calcularDescuento', () => {
    it('Deberia calcular el descuento, en base del costo total', () =>{
        expect(calcularDescuento(1000)).toBe(900)
        expect(calcularDescuento(499)).toBe(499)
        expect(calcularDescuento(500)).toBe(475)
        expect(calcularDescuento(150)).toBe(150)
        expect(calcularDescuento(1800)).toBe(1620)
    })
})

describe('obtenerMayor', () => {
    it('Deberia devolver el numero mayor', () =>{
        expect(obtenerMayor(1, 5, 10)).toBe(10)
        expect(obtenerMayor(5, 1, 3)).toBe(5)
        expect(obtenerMayor(8, 1 , 99)).toBe(99)
        expect(obtenerMayor(1, 2, 3)).toBe(3)
        expect(obtenerMayor(13, 15, 11)).toBe(15)
    })
})

describe('calcularPrecioEnvio', () => {
    it('Deberia devovler el precio total con descuento, según corresponda', () =>{
        expect(calcularPrecioEnvio(1, 100)).toBe(10)
        expect(calcularPrecioEnvio(3, 150)).toBe(20)
        expect(calcularPrecioEnvio(6, 100)).toBe(30)
    })
})

describe('determinarTipoTriangulo', () => {
    it('Deberia decir el tipo de triangulo que es', () =>{
        expect(determinarTipoTriangulo(2, 2, 2)).toBe('El triángulo es equilátero')
        expect(determinarTipoTriangulo(5, 5, 3)).toBe('El triángulo es isósceles')
        expect(determinarTipoTriangulo(8, 8 , 8)).toBe('El triángulo es equilátero')
        expect(determinarTipoTriangulo(1, 2, 3)).toBe('El triángulo es escaleno')
        expect(determinarTipoTriangulo(13, 15, 15)).toBe('El triángulo es isósceles')
    })
})

describe('calcularDescuentoExtra', () => {
    it('Deberia calcular y devolver el total con el descuento correspondiente', () =>{
        expect(calcularDescuentoExtra(1000, 'A', true)).toBe(700)
        expect(calcularDescuentoExtra(1000, 'B', true)).toBe(800)
        expect(calcularDescuentoExtra(1500, 'A', false)).toBe(1200)
        expect(calcularDescuentoExtra(3800, 'B', false)).toBe(3230)
    })
})

describe('calcularCalificacionFinal', () => {
    it('Deberia devolver la clasificacion final correspondiente', () =>{
        expect(calcularCalificacionFinal(60, 60, 60, 80)).toBe('A')
        expect(calcularCalificacionFinal(100, 100, 100, 60)).toBe('Reprobado')
        expect(calcularCalificacionFinal(20, 45, 30, 95)).toBe('D')
        expect(calcularCalificacionFinal(15, 35, 30, 85)).toBe('F')
        expect(calcularCalificacionFinal(40, 60, 35, 80)).toBe('B')
    })
})

describe('calcularDescuentoCompra', () => {
    it('Deberia devolver total segun el descuento aplicado', () =>{
        expect(calcularDescuentoCompra(1000, '', true)).toBe(750)
        expect(calcularDescuentoCompra(2800, 'DESC5', false)).toBe(2660)
        expect(calcularDescuentoCompra(800, 'DESC10', false)).toBe(720)
        expect(calcularDescuentoCompra(3800, '', true)).toBe(2850)
        expect(calcularDescuentoCompra(10000, 'DESC10', false)).toBe(9000)
    })
})