const billing = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53
};

const total = Object.values(billing).reduce((acc, valor) => acc + valor, 0);

for (const [state, value] of Object.entries(billing)) {
    const percentage = (value / total * 100).toFixed(2);
    console.log(`Percentual de representação de ${state}: ${percentage}%`);
}
