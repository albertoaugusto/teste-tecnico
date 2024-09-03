fetch('billing.json')
    .then(response => response.json())
    .then(data => {
        const values = data.billing
            .map(item => item.value)
            .filter(valor => valor > 0);
        
        if (values.length === 0) {
            console.log('Não há dados de faturamento.');
            return;
        }

        const lowestValue = Math.min(...values);
        const higherValue = Math.max(...values);
        const monthlyAv = values.reduce((acc, valor) => acc + valor, 0) / values.length;
        const daysAbove = values.filter(valor => valor > monthlyAv).length;

        console.log(`Menor valor de faturamento: R$${lowestValue.toFixed(2)}`);
        console.log(`Maior valor de faturamento: R$${higherValue.toFixed(2)}`);
        console.log(`Número de dias acima da média: ${daysAbove}`);
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
