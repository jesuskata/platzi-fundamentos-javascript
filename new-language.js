function platzom(str) {
  let translation = str;

  // Si la palabra termina en "ar", quitamos estos dos últimos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // Si la palabra inicia con Z, se añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  // Si la palabra traducida tiene 10 o más letras, la partimos a la mitad y agregamos un guión en medio
  const length = translation.length;
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2));
    const secondHalf = translation.slice(Math.round(length / 2));
    translation = `${firstHalf}-${secondHalf}`
  }

  // Si la palabra original es un palíndromo, ninguna regla anterior cuenta
  // y se retorna la misma palabra intercalando mayúsculas y minúsculas
  const reverse = (str) => str.split('').reverse().join('');

  function minMay(str) {
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  if (str.toLowerCase() == reverse(str)) {
    return minMay(str)
  }

  return translation;
}
console.log(platzom("Programar")); // Must return Program
console.log(platzom("Zorro")); // Must return Zorrope
console.log(platzom("Zarpar")); // Must return Zarppe
console.log(platzom("Abecedario")); // Must return Abece-dario
console.log(platzom("Murciélagos")); // Must return Murcié-lagos
console.log(platzom("anitalavolatina")); // Must return AnItAlAvAlAtInA