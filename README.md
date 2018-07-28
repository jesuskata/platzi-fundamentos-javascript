# Fundamentos de Javascript de Platzi

- [Fundamentos de Javascript de Platzi](#fundamentos-de-javascript-de-platzi)
  - [Concatenar strings con operadores](#concatenar-strings-con-operadores)
  - [Declaración y uso de variables en operaciones](#declaraci%C3%B3n-y-uso-de-variables-en-operaciones)
  - [Uso de funciones en JS](#uso-de-funciones-en-js)
    - [El nuevo uso de las arrow functions](#el-nuevo-uso-de-las-arrow-functions)
    - [La variable const](#la-variable-const)
  - [Condicionales en JavaScript](#condicionales-en-javascript)
  - [Comandos, métodos y palabras reservadas de javascript](#comandos-m%C3%A9todos-y-palabras-reservadas-de-javascript)

En este README procuraré llevar los apuntes relevantes del curso, con el objetivo de que primeramente yo los pueda recordar para poder aplicarlos en un futuro.

## Concatenar strings con operadores

1. Podemos establecer strings con comillas dobles (__""__)
2. Funciona igual si usamos comillas simples (__''__)
3. Pero JS también nos permite usar el acento invertido (__``__) para hacer lo mismo e incluir dentro el operador con el signo de pesos y llaves (__${}__)

Por ejemplo:

```javascript
console.log("El área de un triángulo de base 5 y altura 7 es: " + 5 * 7 / 2);
```

se puede escribir también así:

```javascript
console.log(`El área de un triángulo de base 5 y altura 7 es: ${5 * 7 / 2}`);
```

## Declaración y uso de variables en operaciones

Una forma correcta de hacer operaciones, es declarando variables que posteriormente pueden ser utilizadas en diferentes partes. Lo podemos hacer con la palabra reservada __var__, __let__ y __const__.

Por ejemplo:

```javascript
let base = 5;
let height = 7;
console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${base * height / 2}`);
```

## Uso de funciones en JS

Las funciones pueden tener nombres o también pueden no tenerlo, a estas últimas se les llama funciones anónimas, pero hay un detalle con ellas, que no pueden ser llamadas posteriormente.

Por ejemplo:

```javascript
function () {

}
```

Un ejemplo de una función y su llamado, lo vemos en el siguiente ejemplo:

```javascript
let base = 5;
let height = 7;

function triangleArea(base, height) {
  return base * height / 2;
}

console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${triangleArea(base, height)}`);
```

También podemos asignar una función a una variable, como se muestra a continuación:

```javascript
let triangleArea = function (base, height) {
  return base * height / 2;
}
```

### El nuevo uso de las arrow functions

Esta manera de escribir funciones tiene sus ventajas con la tradicional forma de escribir código. Algunas de esas ventajas son, que al incluir en la función una sola línea de código, la función se simplifica, como en el siguiente ejemplo:

```javascript
let triangleArea = (base, height) => base * height / 2;
```

Como se nota en el ejemplo anterior, evitamos la palabra function, dejamos el paréntesis con los parámetros que vayamos a usar en la función, usamos una flecha con el signo igual y mayor que __=>__. Lo posterior es abrir llaves __{}__ y dentro de ella retornar lo que vayamos a querer como resultado __return__.

### La variable const

En el caso que la "variable" que vayamos a usar no vaya a requerir cambios en el futuro, la podemos declarar con la palabra reservada __const__, como se ve en el ejemplo completo que hemos estado desarrollando:

```javascript
let base = 5;
let height = 7;

let triangleArea = (base, height) => base * height / 2;

console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${triangleArea(base, height)}`);
```

## Condicionales en JavaScript

Las condiciones nos ayudan a establecer en el código, reglas a través de las cuales se va a evaluar alguna funcionalidad del programa, para dar acceso o denegarlo en caso que cumpla o no con las reglas preestablecidas.

Para ello, la palabra reservada para condicionar en _javascript_ es __if__, y entre paréntesis escribimos la condición que deseamos que se cumpla, y posteriormente abrimos llaves para programar la respuesta que va a tener si cumple la condición; en caso que no se cumpla, existen dos palabras reservadas más: __else__ y __else if__.

Por ejemplo:

```javascript
const starWars7 = 'Star Wars VII: El Despertar de la Fuerza';
const pgStartWars7 = 13;

const nameJesus = 'Jesús';
const ageJesus = '33';

const nameAleisa = 'Aleisa';
const ageAleisa = '4';

function canWatchStarWars7(name, age, isWithAdult) {
  if (age >= pgStartWars7) {
    alert(`${name} puede pasar a ver ${starWars7}`);
  } else if (isWithAdult) {
    alert(`${name} puede entrar a ver ${starWars7}.
    Aunque su edad es ${age}, lo acompaña un adulto.`)
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.
    Tiene ${age} años y necesita tener ${pgStartWars7} años para entrar.`);
  }
}

canWatchStarWars7(nameJesus, ageJesus);
canWatchStarWars7(nameAleisa, ageAleisa, true);
```

Del ejemplo anterior:

1. `if` se usa para dar inicio a la condición que vamos a programar
2. `else if` se usa en el caso que no se cumpla la condición establecida en el if, pero queremos agregar alguna condición adicional.
3. `else` se usa en caso que tengamos algo que responder si no se cumple la condición del __if__ o el __else if__.

Como nota importante, se debe resaltar que tanto `else` como `else if` no son bloques de código obligatorios, ya que solo se usarán cuando deseemos que se ejecute algo en caso que no se cumpla la condición del `if`.

## Comandos, métodos y palabras reservadas de javascript

- `console.log()`
- `var`
- `const`
- `let`
- `${}`
- `Math.PI`
- `Math.pow()`
- `if () {}`
- `else {}`
- `else if () {}`
- `alert()`
- `true`
- `false`
- `toLowerCase()`
- `endsWith()`
- `slice()`
- `startsWith()`
- `+=`
- `++`
- `==`
- `>=`
- `length`
- `Math.round()`
- `split()`
- `reverse()`
- `join()`
- `for () {}`
- `charAt()`
- `toUpperCase()`
- `!`
- `? :`
- `Math.floor()`
- `Math.random()`
- `toFixed()`