"use strict";

const $ = selector => document.querySelector(selector);

const displayErrorMsgs = msgs => {
    alert(msgs);
}

const processEntries = () => {
    const email = $("#email");
    const confirm = $("#confirm_email");
    const first_name = $("#first_name");
    const country = $("#country");
    const terms = $("#terms");

    let msgs = "";

    if (email.value == "") {
        msgs += "First email is required.\n";
    }
    if (confirm.value == "") {
        msgs += "Second email is required.\n";
    }
    if (email.value != confirm.value) {
        msgs += "Email addresses do not match.\n";
    }
    if (first_name.value == "") {
       msgs += "First name is required.\n";
    }
    if (country.value == "") {
        msgs += "Please select a country.\n";
    }
    if(terms.checked == false){
        msgs += "You must agree to the terms of service.\n";
    }
    if (msgs.length == 0) {
        // $("form").submit();
        alert("GOOD TO GO")
    } else{
        displayErrorMsgs(msgs);
    }
};


const resetForm = () => {   
    $("form" ).reset();
    $("#email").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#join").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", resetForm);
    $("#email").focus();
});