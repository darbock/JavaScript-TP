console.log("Début de programme");
// Pop-Up
alert("Devine le chiffre aléatoire !");
// Pop-Up
alert("Tu as 6 essai pour trouver le bon chiffre");
// variable qui a pour but de généré un nombre aléatoire compris entre 1 et 100
var numberRand = Math.floor(Math.random() * 100) + 1;
// Nombre d'essai
var essai = 6;
// Je déclare ma variable
var numberPlayer = Number(prompt("Entre un nombre compris entre 1 et 100"));
// Tant que numberPlayer n'est pas strictement égal à numberRand et
// que le nombre d'essai n'est pas strictement égal à 0, je boucle
while ((numberPlayer !== numberRand) && (essai !== 0)) {
  // si numberPlayer est inférieur à numberPlayer, on repick un nombre
  if (numberPlayer > numberRand) {
    // on perd un essai
    essai--;
    console.log(numberPlayer + " est plus grand");
    numberPlayer = Number(prompt("Retante ta chance, il te reste " + essai + " essai"));
  }
  // si numberPlayer est supérieur à numberPlayer, on repick un nombre
  if (numberPlayer < numberRand) {
    // on perd un essai
    essai--;
    console.log(numberPlayer + " est plus petit");
    numberPlayer = Number(prompt("Retante ta chance, il te reste " + essai + " essai"));
  }
}
//on gagne si notre choix est égal à numberRand
if (numberPlayer == numberRand) {
  console.log("Félicitations, tu as gagné !");
  alert("Tu as gagné, la réponse était bien " + numberRand);
  // si tout les vies sont épuisées on perd
} else {
  console.log("Tu as perdu, tu n'as plus de vie :(")
  alert("C'est perdu, tu n'as plus de vie, la réponse était " + numberRand);
}
console.log("Fin du programme");
