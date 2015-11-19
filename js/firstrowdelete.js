var secondsCount = 0;
var timerInterval;
var firstRow = document.getElementById("firstRow");

setTimeout(function() {
  if(secondsCount === 0) {
    clearInterval(timerInterval);
    firstRow.parentNode.removeChild(firstRow);
  }
}, (Math.round(Math.random()*(10-5)+5))*1000);

function addSeconds () {
  secondsCount++;
}