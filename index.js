
// Масив з попередньо визначеними курсами валют
const exchangeRates = {
    "USD": 1.0,
    "EUR": 0.85,
    "GBP": 0.75,
    "JPY": 110.0,
    "RUB": 75.0
};

// Функція для конвертації валюти
/**
 * @param {number} amount
 * @param {string} fromCurrency
 * @param {string} toCurrency
 * @returns {number}
 */
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        console.error("Некоректна валюта");
        return null;
    }
    // Конвертація через базову валюту (долар)
    const amountInUSD = amount / exchangeRates[fromCurrency];
    const convertedAmount = amountInUSD * exchangeRates[toCurrency];
    return convertedAmount;
}

// Приклад використання конвертера
const amount = 100;
const fromCurrency = "USD";
const toCurrency = "EUR";

const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
if (convertedAmount !== null) {
    console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
}

// Ще приклади конвертацій
console.log(`50 GBP = ${convertCurrency(50, "GBP", "JPY").toFixed(2)} JPY`);
console.log(`1000 JPY = ${convertCurrency(1000, "JPY", "RUB").toFixed(2)} RUB`);
console.log(`150 EUR = ${convertCurrency(150, "EUR", "USD").toFixed(2)} USD`);

// Функція для додавання нової валюти та її курсу
/**
 * @param {string} currency
 * @param {number} rate
 */
function addCurrency(currency, rate) {
    if (rate <= 0) {
        console.error("Некоректний курс валюти");
        return;
    }
    exchangeRates[currency] = rate;
    console.log(`${currency} додана з курсом ${rate}`);
}

// Додавання нової валюти
addCurrency("CAD", 1.25);
console.log(`100 CAD = ${convertCurrency(100, "CAD", "USD").toFixed(2)} USD`);

// Оновлення курсу існуючої валюти
addCurrency("EUR", 0.90);
console.log(`200 USD = ${convertCurrency(200, "USD", "EUR").toFixed(2)} EUR`);

// Функція для видалення валюти
/**
 * @param {string} currency
 */
function removeCurrency(currency) {
    if (!exchangeRates[currency]) {
        console.error("Валюта не знайдена");
        return;
    }
    delete exchangeRates[currency];
    console.log(`${currency} видалена`);
}

// Видалення валюти
removeCurrency("JPY");
console.log(`5000 JPY = ${convertCurrency(5000, "JPY", "USD")}`);
