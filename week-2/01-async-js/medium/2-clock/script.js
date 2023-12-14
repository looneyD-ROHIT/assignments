function updateClock(clockVal) {
    const clock24H = document.getElementById("clock-24h")
    clock24H.innerText = clockVal.toLocaleTimeString();
    const clock12H = document.getElementById("clock-12h")
    clock12H.innerText = formatAMPM(clockVal);
    setTimeout(updateClock, 1000, new Date())
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
}


document.addEventListener("DOMContentLoaded", (e) => {
    updateClock(new Date());
})
