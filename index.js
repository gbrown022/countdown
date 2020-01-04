let seconds = document.getElementById("countdown").textContent;
let countdown = setInterval(() => {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

/* function myInterval(i) {
        setTimeout(() => console.log("step = " + i), 1000);
}

for (let i = 0; i < 5; i++) {
    myInterval(i);
} */