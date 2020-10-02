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