Jeg vil lave en lommeregner som kan gøre lidt forskelligt, disse ting består forhåbentligt af:
    Plus
    Minus
    Gange
    Dividere
    Opløftet*
    Pi*
    Kvadratrod*

Dem med * er dem som jeg ikke er sikker på om de kommer til at virke, men jeg vil prøve.
Jeg kunne også godt tænkte mig at der er knapper man kan trykke på lidt lige som den der allerede er i windows.


let resultat = create("p")
resultat.innerHTML = 10;

let input = create("input")

function udregnPlus() {
    resultat.innerHTML = parseFloat(resultat.innerHTML) + parseFloat(input.value);
    input.value = "";
  }

function udregnMinus() {
    resultat.innerHTML = parseFloat(resultat.innerHTML) - parseFloat(input.value);
    input.value = "";
  }

function udregnGange() {
    resultat.innerHTML = parseFloat(resultat.innerHTML) * parseFloat(input.value);
    input.value = "";
}

function udregnDividere() {
    resultat.innerHTML = parseFloat(resultat.innerHTML) / parseFloat(input.value);
    input.value = "";
}

function udregnIanden() {
    resultat.innerHTML = parseFloat(resultat.innerHTML) * parseFloat(resultat.innerHTML);
    input.value = "";
}

function create(type) {
  return document.body.appendChild(document.createElement(type));
}