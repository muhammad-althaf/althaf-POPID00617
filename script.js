const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const convertButton = document.getElementById('convert');
const resultParagraph = document.getElementById('result');

// Replace with a real API URL that provides currency exchange rates
const exchangeRateApiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';

// Fetch and populate currency options
fetch(exchangeRateApiUrl)
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.rates);
        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            const option2 = option1.cloneNode(true);
            fromCurrencySelect.appendChild(option1);
            toCurrencySelect.appendChild(option2);
        });
    });

// Conversion function
function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Get exchange rates from API data
    const exchangeRates = data.rates;
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    // Perform currency conversion
    const convertedAmount = (amount / fromRate) * toRate;

    // Display the result
    resultParagraph.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

// Event listener for the conversion button
convertButton.addEventListener('click', convertCurrency);
