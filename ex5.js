function stringInvert(str) {
  let invertedText = "";

  for (let i = str.length - 1; i >= 0; i--) {
    invertedText += str[i];
  }

  return invertedText;
}

const stringInverted = prompt("Digite a string para inverter:");
const result = stringInvert(stringInverted);

console.log(`String invertida: ${result}`);
