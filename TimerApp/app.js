// timer

var appendMins = document.getElementById('mins');
var appendSeconds = document.getElementById('seconds');

// buttons

const btnStart = document.getElementById("button-start");
const btnPause = document.getElementById("button-pause");
const btnReset = document.getElementById("button-reset")

var minsValue = 00;
var secondsValue = 00;
var Interval;

btnStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 1000);
  }

  btnReset.onclick = function() {
    clearInterval(Interval);
    appendMins.innerHTML = "00";
    appendSeconds.innerHTML = "00";
}

btnPause.onclick = function(){
    clearInterval(Interval);
}

function startTimer(){
    secondsValue++;
    console.log(secondsValue)
    if(secondsValue >= 60){
        secondsValue = 0;
        minsValue++;
    }

    if(secondsValue <= 9){
        appendSeconds.innerHTML = "0" + secondsValue;
    }else if(secondsValue > 9){
        appendSeconds.innerHTML = secondsValue;
    }

    if(minsValue >= 1){
        appendMins.innerHTML = "0" + minsValue;
    }
}

function increase(){
    secondsValue += 55;
}