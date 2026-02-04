let sec = 0;
let min = 0;
let hr = 0;
let timer = null;
const secEl = document.getElementById("sec");
const minEl = document.getElementById("min");
const hrEl = document.getElementById("hr");
const handleStart = () => {
    if (timer !== null) return;
    timer = setInterval(() => {
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }
        secEl.innerText = String(sec).padStart(2, "0");
        minEl.innerText = String(min).padStart(2, "0");
        hrEl.innerText = String(hr).padStart(2, "0");
    }, 1000);
};

const handleStop=() => {
    clearInterval(timer);
    timer = null;
};

const handleReset= () => {
    clearInterval(timer);
    timer = null;
    sec = 0;
    min = 0;
    hr = 0;
    secEl.innerText = "00";
    minEl.innerText = "00";
    hrEl.innerText = "00";
    document.getElementById("start").style.backgroundColor = "";
};
