"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#begin").addEventListener("click", () => {
        const firstName = $("#firstName");
        const lastName = $("#lastName");
        const email = $("#email");
        const confirmEmail = $("#confirmEmail");
        const focus = $("#practiceFocus");
        const duration = $("#duration");
        const funTimes = $("#funTimes");

        let errorMessage = "";

        if (firstName.value == "") {
            errorMessage += "First name is required.\n";
        }
        if (lastName.value == "") {
            errorMessage += "Last name is required.\n";
        }
        if (email.value != confirmEmail.value) {
            errorMessage += "Emails must match.\n";
        }
        if (focus.value == "Select a focus") {
            errorMessage += "Choose a session focus.\n";
        }
        if (funTimes != true) {
            errorMessage += "We'll only start if you're ready for fun.\n";
        }

        if(errorMessage == "") {
            // $("#form").submit();
            alert("Taking you to the practice session.")
        } else {
            alert(errorMessage);
        }
    });

    $("#clearForm").addEventListener("click", () => {
        $("#form > *").value = "";
        $("#firstName").focus();
    })
})