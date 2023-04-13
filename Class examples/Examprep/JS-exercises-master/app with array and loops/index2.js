const scores = [];

let score = 0;
do {
    score = parseInt(
        prompt("Enter a test score, -1 when you're done.", -1));
    
    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must be between 0 and 100");
    }
}
while(score !=- 1)
if (scores.length > 0) {
    let total = 0;
    for (let i in scores) {
        total += scores[i];
        document.write(
            `<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`
        );
    }

const average = parseInt(total/scores.length);
document.write(`<p>Average score is ${average}</p>`)
}