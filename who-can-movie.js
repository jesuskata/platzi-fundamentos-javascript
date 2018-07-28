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

// This is a refactored version from teh above

const starWars7 = 'Star Wars VII: El Despertar de la Fuerza';
const pgStartWars7 = 13;

const nameJesus = 'Jesús';
const ageJesus = '33';

const nameAleisa = 'Aleisa';
const ageAleisa = '4';

let canWatchStarWars7 = (name, age, isWithAdult) => {
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