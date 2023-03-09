const investment = 10000;
const annualRate = 7.0;
const years = 1;

let futureValue = investment;
for(let i = 1; i <= years; i++) {
    futureValue += futureValue * annualRate / 100 ;
}
alert(futureValue.toFixed(0));