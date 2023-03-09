"use strict";

// initialize total variable
let total = 0;

//get 3 scores from user and add them together
const score1 = parseInt(prompt("Enter test score"));
total += score1;

const score2 = parseInt(prompt("Enter test score"));
total += score2;

const score3 = parseInt(prompt("Enter test score"));
total += score3;

//calculate the average
const average = parseInt(total/3);

// display the scores
document.getElementById("score1").innerHTML=`Score 1 = ${score1}`
document.getElementById("score2").innerHTML=`Score 2 = ${score2}`
document.getElementById("score3").innerHTML=`Score 3 = ${score3}`
document.getElementById("average").innerHTML=`Average = ${average}`
// const html = "Score 1 = " + score1 + "<br><br>Score 2 = " +
//  score2 + "<br><br>Score 3 = " + score3 +
//   "<br><br>Average = " + average;
// document.write(html);