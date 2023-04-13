"use strict";

const $ = selector => document.querySelector(selector);

const exercises = []
let exerciseCounter = 0;
let timer = null;
let exercise = null;

const currentExercise = $("#exercise_script");
const title = $("#exercise_title")

const runPractice = function() {
    exerciseCounter = (exerciseCounter + 1) % exercises.length;
    exercise = exercises[exerciseCounter];
    currentExercise.src = exercise[0];
    currentExercise.title = exercise[1];
    title.value = exercise[1];
    document.write(`<script src="${exercise[0]}"></script>`)
};

document.addEventListener("DOMContentLoaded", () => {
    const links = $("#exercise_list").querySelectorAll("a");

    for ( let link of links ) {
        exercise = [link.href, link.title];
        exercises.push(exercise)

    }

    $("#start").addEventListener("click", () => {
        runPractice();
        timer = setInterval(runPractice, 1000);
        $("#start").disabled = true;
        $("#reset").disabled = false;

    });
});