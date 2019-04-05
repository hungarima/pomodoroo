let timer = 25 * 60, minutes, seconds;


let isPaused = true;

let interval = setInterval(function() {
  
  if (!isPaused) {
    
    minutes = parseInt(timer / 60);
    seconds = parseInt(timer % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(minutes + ":" + seconds);
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    

    if (timer-- == 0) {
      timer = 0;
      clearInterval(interval);
    }
  }
}, 1000);

function startTimer() {
  isPaused = false;
}

function pauseTimer() {
  isPaused = true;
}

function resetTimer() {
  timer = 25 * 60;
  isPaused = true;
  document.getElementById("timer").innerHTML = "25" + ":" + "00";
}
