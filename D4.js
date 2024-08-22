/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
  return l1 * l2;
}
console.log("l'area del rettangolo è", area(7, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(x1, x2) {
  if (x1 === x2) {
    return (x1 + x2) * 3;
  } else {
    return x1 + x2;
  }
}
console.log("il risultato è", crazySum(6, 4));
console.log("il risultato è", crazySum(4, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number = 19;
function crazyDiff(y1, number) {
  if (y1 > number) {
    return (y1 - number) * 3;
  } else {
    return y1 - number;
  }
}
console.log("il risultato è", crazyDiff(12, number));
console.log("il risultato è", crazyDiff(29, number));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if (n > 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(29));
console.log(boundary(400));
console.log(boundary(5));
console.log(boundary(134));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}
console.log(epify(" corso per web developer"));
console.log(epify("EPICODE corso per web developer"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n2) {
  if (n2 > 0 && (n2 % 7 === 0 || n2 % 3 === 0)) {
    return "numero positivo divisibile per 7 o per 3";
  } else {
    return "il numero è negativo o non divisibile per 3 o 7";
  }
}
console.log(check3and7(21));
console.log(check3and7(15));
console.log(check3and7(4));
console.log(check3and7(-21));
console.log(check3and7(-15));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}
console.log("EPICODE AL CONTARIO:", reverseString("EPICODE"));
console.log("SELVAGGIO AL CONTARIO:", reverseString("SELVAGGIO"));
console.log("VIDEOCASSETTA AL CONTARIO:", reverseString("VIDEOCASSETTA"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
