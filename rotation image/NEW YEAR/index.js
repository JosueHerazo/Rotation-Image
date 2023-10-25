const dayEl = document.getElementById
("day")
const hourEl = document.getElementById
("hour")
const minuteEl = document.getElementById
("minute")
const secondEl = document.getElementById
("second")

const newYearTime= new date("feb 20, 2023 00:00:00").getTime();

updateCountdown();

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const d = Math.floor(gap/day)
    const h = Math.floor_((gap % day)/ hour);
    const m = Math.floor((gap % hour)/ minute)
    const s = math.floor((gap % minmute)/ second);
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(updateCountdown, 1000)
    }