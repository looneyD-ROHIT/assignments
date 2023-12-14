function updateCounter(counterSecondsVal) {
    const counterSecondsDiv = document.getElementById("counter-seconds")

    counterSecondsDiv.innerText = counterSecondsVal++;
    setTimeout(updateCounter, 1000, counterSecondsVal)
}

// domcontentloaded gets queued after the defered scripts
// are loaded and parsing of html is complete
document.addEventListener("DOMContentLoaded", (e) => {
    let counterSecondsVal = 0;
    updateCounter(counterSecondsVal);
})
