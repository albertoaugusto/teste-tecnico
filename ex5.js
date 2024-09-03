function invertString(s) {
    return s.split('').reverse().join('');
}

const text = prompt("Digite a string para inverter:");
const invertedText = invertString(text);
console.log(`String invertida: ${invertedText}`);
