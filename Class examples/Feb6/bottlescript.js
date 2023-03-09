function convert() {
    const smallBottles = parseFloat (document.querySelector("#smallBottles").value)
    const largeBottles = parseFloat (document.querySelector("#largeBottles").value)
    const refund = (smallBottles*.10) + (largeBottles*.25)
    document.querySelector('#result').value=refund
    document.querySelector('#result').innerHTML=refund
}