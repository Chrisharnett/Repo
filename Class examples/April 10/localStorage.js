// THE SYNTAX FOR WORKING WITH LOCAL STORAGE

// Saves the data in the item
localStorage.setItem("key, "value")

// gets the data in the item
localStorage.getItem("key")

// removes the item
localStorage.removeItem("key")

// removes all items
localStorage.clear()

//JS that uses local and session storage for hit counters

$(document).ready( () => {
    if (localStorage.hits) {
        localStorage.hits = 
            parseInt(localStorage.hits +1;)
    } else {localStorage.hits = 1; }
}