let countDay = document.getElementById("count-day");
let countHour = document.getElementById("count-hour");
let countMinute = document.getElementById("count-minute");
let countSecond = document.getElementById("count-second");
let inputTimer = document.getElementById("input-timer");

inputTimer.addEventListener("input" ,renderTimer)
 function renderTimer(){
    var timeArr = inputTimer.value.split("-");
    console.log(timeArr)

    var selectTime = new Date(timeArr[0], timeArr[1] - 1, timeArr[2], 0, 0, 0).getTime()
    console.log(selectTime)

    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;

    var today = new Date().getTime();
    console.log(today)

    var timeTemaining = selectTime - today;
    console.log(timeTemaining)

    var countTime = {
        days: Math.floor(timeTemaining / (d)),
        hours: Math.floor((timeTemaining % d) / h ), 
        minutes: Math.floor((timeTemaining % h) / m),
        seconds: Math.floor((timeTemaining % m) / s)
    }

    countDay.innerHTML = countTime.days;
    countHour.innerHTML = countTime.hours;
    countMinute.innerHTML = countTime.minutes;
    countSecond.innerHTML = countTime.seconds;

    setInterval(function(){
        renderTimer()
    },1000)

}








