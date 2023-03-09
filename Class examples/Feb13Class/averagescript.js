function calculateAverage() {
    const score1 = parseFloat (document.querySelector("#score1").value)
    const score2 = parseFloat (document.querySelector("#score2").value)
    const score3 = parseFloat (document.querySelector("#score3").value)
    const averageScore = (score1 + score2 + score3)/3
    document.querySelector('#average').value=averageScore
}
function oddOrEven() {
    const num = parseFloat(document.querySelector("#oddoreven").value)
    const mod = num%2
    if (mod == 0){
        document.querySelector("#oddorevenresult").value="Even"
    } else if (mod == 1) {
        document.querySelector("#oddorevenresult").value="Odd"
    } else {
        document.querySelector("#oddorevenresult").value="Error!"
    }
}
function triangleType() {
    const side1 = parseFloat (document.querySelector("#side1").value)
    const side2 = parseFloat (document.querySelector("#side2").value)
    const side3 = parseFloat (document.querySelector("#side3").value)
    
    var result;
    if ((side1 == side2) && (side1 == side3)) {
        result = "Equilateral"
    } else if ((side1 == side2 && side1 != side3) || (side1 != side2 && side2==side3) || (side1==side3 && side1!=side2)){
        result = "Isosceles"
    }else if (side1 != side2 && side2 != side3) {
        result="Scalene"
    }else {
        result="Error"
    }
    document.querySelector("#triangle").value=result
}