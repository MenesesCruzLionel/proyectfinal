function convert() {
    // Conversion rates
    const cupToKg = 0.24; // 1 cup = 0.24 kg (approximately, varies by ingredient)
    const tablespoonToGram = 15; // 1 tablespoon = 15 grams
    const teaspoonToGram = 5; // 1 teaspoon = 5 grams
    
    // Get values from input fields
    const cups = parseFloat(document.getElementById('cups').value);
    const kgs = parseFloat(document.getElementById('kgs').value);
    const tablespoons = parseFloat(document.getElementById('tablespoons').value);
    const grams = parseFloat(document.getElementById('grams').value);
    
    let result = '';

    // Conversion logic
    if (!isNaN(cups)) {
        const convertedKg = cups * cupToKg;
        result += `${cups} tazas = ${convertedKg.toFixed(2)} kilogramos<br>`;
    }
    if (!isNaN(kgs)) {
        const convertedCups = kgs / cupToKg;
        result += `${kgs} kilogramos = ${convertedCups.toFixed(2)} tazas<br>`;
    }
    if (!isNaN(tablespoons)) {
        const convertedGrams = tablespoons * tablespoonToGram;
        result += `${tablespoons} cucharadas = ${convertedGrams.toFixed(2)} gramos<br>`;
    }
    if (!isNaN(grams)) {
        const convertedTablespoons = grams / tablespoonToGram;
        result += `${grams} gramos = ${convertedTablespoons.toFixed(2)} cucharadas<br>`;
    }
    
    document.getElementById('result').innerHTML = result;
}
function convertirTempe() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const kelvin = parseFloat(document.getElementById('kelvin').value);
    let result = '';
    if (!isNaN(celsius)) {
        const convertedFahrenheit = (celsius * 9/5) + 32;
        const convertedKelvin = celsius + 273.15;
        result += `${celsius}°C = ${convertedFahrenheit.toFixed(2)}°F = ${convertedKelvin.toFixed(2)}K<br>`;
    }
    if (!isNaN(fahrenheit)) {
        const convertedCelsius = (fahrenheit - 32) * 5/9;
        const convertedKelvin = (fahrenheit - 32) * 5/9 + 273.15;
        result += `${fahrenheit}°F = ${convertedCelsius.toFixed(2)}°C = ${convertedKelvin.toFixed(2)}K<br>`;
    }
    if (!isNaN(kelvin)) {
        const convertedCelsius = kelvin - 273.15;
        const convertedFahrenheit = (kelvin - 273.15) * 9/5 + 32;
        result += `${kelvin}K = ${convertedCelsius.toFixed(2)}°C = ${convertedFahrenheit.toFixed(2)}°F<br>`;
    }
    document.getElementById('resultTemperature').innerHTML = result;
}

function convetirliquidos() {
    const literToCup = 4.22675; // 1 liter = 4.22675 cups
    const literToMilliliter = 1000; // 1 liter = 1000 milliliters
    const cupToMilliliter = 240; // 1 cup = 240 milliliters
    const liters = parseFloat(document.getElementById('liters').value);
    const cups = parseFloat(document.getElementById('cupsLiquid').value);
    const milliliters = parseFloat(document.getElementById('milliliters').value);
    let result = '';
    if (!isNaN(liters)) {
        const convertedCups = liters * literToCup;
        const convertedMilliliters = liters * literToMilliliter;
        result += `${liters} litros = ${convertedCups.toFixed(2)} tazas = ${convertedMilliliters.toFixed(2)} mililitros<br>`;
    }
    if (!isNaN(cups)) {
        const convertedLiters = cups / literToCup;
        const convertedMilliliters = cups * cupToMilliliter;
        result += `${cups} tazas = ${convertedLiters.toFixed(2)} litros = ${convertedMilliliters.toFixed(2)} mililitros<br>`;
    }
    if (!isNaN(milliliters)) {
        const convertedLiters = milliliters / literToMilliliter;
        const convertedCups = milliliters / cupToMilliliter;
        result += `${milliliters} mililitros = ${convertedLiters.toFixed(2)} litros = ${convertedCups.toFixed(2)} tazas<br>`;
    }
    document.getElementById('resultLiquidMeasures').innerHTML = result;
}