"use strict"

var i = 1;

function countDown(interval) {
    let currentTime = interval - i;
    postMessage(currentTime);
    if (currentTime > 0){
        timer = setInterval(countDown,1000,180);
        i++
    }
    else {
        postMessage("Done. Hit Next.")
    }
    
}

countDown(180);