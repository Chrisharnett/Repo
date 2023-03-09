function convert() {
    let tempInCelsius = parseFloat (document.querySelector("#cel-temp").value)
    let tempInFahrenheit = ((tempInCelsius * (9/5)) + 32)
    document.querySelector('#result').innerHTML = `${tempInCelsius}'C = ${tempInFahrenheit}'F`
}