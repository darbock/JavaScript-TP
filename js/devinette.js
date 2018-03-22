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
var numberPlayer = null;
while (essai !== 0) {
  numberPlayer = Number(prompt("Retante ta chance, il te reste " + essai + " essai"));
  // si numberPlayer est inférieur, on boucle un tour avec un essai en moins
  if (numberPlayer > numberRand) {
    console.log("C'est plus grand");
    alert("C'est moins !");
   }
  // si numberPlayer est supérieur, on boucle un tour avec un essai en moins
  if (numberPlayer < numberRand) {
    console.log("C'est plus petit");
    alert("C'est plus !");
  }
  // si notre chiffre est égal au chiffre aléatoire, on sors de la boucle.
  if (numberPlayer === numberRand) {
    break;
  }
  essai--;
}
//on gagne si notre choix est égal à numberRand
if (numberPlayer === numberRand) {
  console.log("Félicitations, tu as gagné !");
  alert("Tu as gagné, la réponse était bien " + numberRand);
  // si tout les vies sont épuisées on perd
} else {
  console.log("Tu as perdu, tu n'as plus de vie :(")
  alert("C'est perdu, tu n'as plus de vie, la réponse était " + numberRand);
}
console.log("Fin du programme");
