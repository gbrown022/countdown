// grab the value of the countdown ID
let seconds = document.getElementById("countdown").textContent;

// iterate down from the countdown ID value
let countdown = setInterval(() => {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);