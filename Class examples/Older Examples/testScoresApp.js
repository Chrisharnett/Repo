const scores = [];
let score = 0;
let average = 0;
do {
    score = parseInt(prompt("Enter a test score, or enter -1 to end scores", -1));
    if(score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1) {
        alert("Score must be a valid number from 0 through 100");
    }
}
while(score != -1);

if (scores.length > 0) {
    let total = 0;
    for (let i in scores) {
        total = total + scores[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }
    average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}
while (average > 10) {
    let total = 0
    for (let i in scores) {
        scores[i] = scores[i]/2
        total = total + scores[i];
    }
    average = parseInt(total/scores.length);
    
}
for(let i in scores){
document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
}
document.write(`<p>Average score is ${average}</p>`);
