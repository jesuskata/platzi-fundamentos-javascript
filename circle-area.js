// Definiendo la variable que corresponde al radio
let radius = 5;
// Definiendo la función areaCircle que hará la operación
// La palabra reservada Math es una función de JS que al ser usada con el método correcto, ejecuta la operación deseada
let areaCircle = (radius) => Math.PI * Math.pow(radius, 2);
// Esta es la visualización en la consola de la operación que hemos creado
console.log(`El área de un círculo de radio ${radius} es: ${areaCircle(radius)}`);