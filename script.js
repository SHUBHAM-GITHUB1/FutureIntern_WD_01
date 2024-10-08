function convertTemperature() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'C') {
        celsius = parseFloat(inputValue);
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (inputUnit === 'F') {
        fahrenheit = parseFloat(inputValue);
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else {
        kelvin = parseFloat(inputValue);
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById('resultC').innerText = `${celsius.toFixed(2)} °C`;
    document.getElementById('resultF').innerText = `${fahrenheit.toFixed(2)} °F`;
    document.getElementById('resultK').innerText = `${kelvin.toFixed(2)} K`;
}
