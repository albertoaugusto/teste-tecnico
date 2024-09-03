function isFibonacci(n) {
    let a = 0, b = 1;
    while (a < n) {
        [a, b] = [b, a + b];
    }
    return a === n;
}

const number = parseInt(prompt("Informe um número:"), 10);
if (isFibonacci(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}
