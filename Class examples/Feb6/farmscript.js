function convert() {
    const length = parseFloat (document.querySelector("#length").value)
    const width = parseFloat (document.querySelector("#width").value)
    const area = ((length*width)/43560)
    document.querySelector('#result').value=area
}