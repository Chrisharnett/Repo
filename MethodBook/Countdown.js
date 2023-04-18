"use strict"

var i = 0;

function countDown(interval) {
    i = i + 1;
    let currentTime = interval - i;
    postMessage(currentTime);
    if (currentTime > 0){
        setInterval(countDown,1000, 180);
    }
    
}

countDown(180);