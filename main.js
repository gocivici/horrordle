//<TO-DO>
//-FIX TIMER
//-FIX IMAGE RATIOS
//-FIX CALENDAR
//
// var fake_date = new Date("September 19, 2022 23:58:00");
// Date = function(){return fake_date;}; 
// Date.now = () => fake_date.getTime();
window.onload = deathOftheDay;
var playedBefore = false;
var sameDay = false;
for (var i = 0; i < localStorage.length; i++){
  console.log(localStorage.key(i));
}





  var movies = ["A Nightmare on Elm Street","Friday the 13th","Event Horizon","Hellraiser","The Cabin in the Woods","American Psycho","It Follows","Candyman","Child's Play","The Texas Chain Saw Massacre","Alien","Halloween"];
  var pix = [];
  // autocomplete(document.getElementById("guess"), movies);
  var gameBeginning = new Date('September 18, 2022 00:00:00');
  var countDownTime =  new Date();
  var present_date = new Date();

  // gameBeginning = new Date(gameBeginning.getTime() + 0 * 60 * 1000);
  console.log(gameBeginning.getTimezoneOffset());
  dayCounter();
  console.log("gameBeginning: ",gameBeginning);
  console.log("now: ",present_date);
  
var textResult = "Horrordle #"+dayCount+"\n🔪";
console.log(textResult);
function dayCounter(){
  dayCount = Math.floor((present_date - gameBeginning) / (1000 * 60 * 60 * 24));
  return dayCount;
}

markCalendar();

function markCalendar() {
  dates = document.getElementsByClassName('calendar__number');
  console.log(dates[10].innerHTML);
  var tag = [];
  for (var i = 0; i < dates.length; i++) {


      if (dates[i].innerHTML==dayCount) {
        dates[i].classList.add('current');
        for (var j = 0; j < i; j++) {
          if (localStorage.getItem('day'+(j+1))) {
            if (localStorage.getItem('day'+(j+1))=='true') {
                dates[j].classList.add('won');
            } else if (localStorage.getItem('day'+(j+1))=='false') {
                dates[j].classList.add('lost');
            }

          }else {


          dates[j].classList.add('past');
          dates[j] = document.createElement('a');
          //dates[j].setAttribute('href','#');
          dates[j].setAttribute('onclick','getArchive(' + (j+1) + ')');
          dates[j] = "<a href='#'>" + dates[j] + "</a>";

          }
          // dates[j] = "<a href='" + dayCount + "'>" + dates[j] + "</a>";
          //tag[j].appendChild(dates[j]);
          //console.log(tag[j]);
          console.log(dates[j]);
        }

        console.log(dates[i]);
      }
  }
}


var points = "⬛⬛⬛"
//check if the user played this before
firstCheck()
function firstCheck(){
  guessNo = 0;
  feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
  if(!localStorage.getItem('streak')){localStorage.setItem('streak',0)}
  if(!localStorage.getItem('firstGuessStat')){localStorage.setItem('firstGuessStat',0)}
  if(!localStorage.getItem('secondGuessStat')){localStorage.setItem('secondGuessStat',0)}
  if(!localStorage.getItem('thirdGuessStat')){localStorage.setItem('thirdGuessStat',0)}
}





textResult = "Horrordle #"+dayCount+"\n🔪";
function clearGuess() {
  localStorage.removeItem('firstGuess');
  localStorage.removeItem('secondGuess');
  localStorage.removeItem('guessNo');
  localStorage.removeItem('winningGuess');
  // localStorage.removeItem('result');
  document.getElementById("firstGuess").style.display = "none";
  document.getElementById("secondGuess").style.display = "none";
  document.getElementById("shareResult").style.display = "none";
  document.getElementById("guessForm").style.display = "block";
  document.getElementById("countDown").style.display = "none"
  
}
function checkingGuess() {
  

streakNumber.textContent = localStorage.getItem('streak');
  if (localStorage.getItem('day')==dayCount) {


  playedBefore = true;
  textResult=localStorage.getItem('result')
  console.log("played before: ",playedBefore);
  console.log(localStorage.getItem('firstGuess'));
  console.log(localStorage.getItem('secondGuess'));
  if(localStorage.getItem('guessNo')){guessNo=localStorage.getItem('guessNo')};
  feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
  if(localStorage.getItem('result')) {localStorage.setItem('result', textResult);document.getElementById("resultText").innerHTML =textResult}
  if(localStorage.getItem('firstGuess')){firstGuess.textContent = "❌" + localStorage.getItem('firstGuess');document.getElementById("firstGuess").style.display = "block";}
  if(localStorage.getItem('secondGuess')){secondGuess.textContent = "❌" + localStorage.getItem('secondGuess');document.getElementById("secondGuess").style.display = "block";}
  if(localStorage.getItem('winningGuess')){document.getElementById("feedback").innerHTML = "Next movie will reveal at <b>midnight!</b> 🕛";document.getElementById("shareResult").style.display = "block";document.getElementById("countDown").style.display = "block";document.getElementById("guessForm").style.display = "none";document.getElementById("firstGuess").style.display = "none";document.getElementById("secondGuess").style.display = "none";}else {document.getElementById("shareResult").style.display = "none";document.getElementById("guessForm").style.display = "block";};
  secondGuess.textContent = "❌" + localStorage.getItem('secondGuess');
}else {
clearGuess();
localStorage.setItem('day', dayCount);
}
}
checkingGuess();

  console.log(dayCount);




  function deathOftheDay(){
    pix = [];
   movieOfTheDay = movies[dayCount-1];

    for (let i = 1; i < 4; i++) {
      pix.push("images/"+movieOfTheDay+"/"+i+".png");
    }
    console.log('Movie: ', movieOfTheDay);
    console.log('Array: ', pix);
    document.getElementById("movieFrame").src = pix[guessNo];
  }

  function checkGuess() {
    
console.log("day count:" + dayCount);
    let myGuess = guess
    if (myGuess === movieOfTheDay) {
      if(guessNo==0){localStorage.setItem('firstGuessStat',parseInt(localStorage.getItem('firstGuessStat')) + 1);}
      if(guessNo==1){localStorage.setItem('secondGuessStat',parseInt(localStorage.getItem('secondGuessStat')) + 1);}
      if(guessNo==2){localStorage.setItem('thirdGuessStat',parseInt(localStorage.getItem('thirdGuessStat')) + 1);}
      localStorage.setItem('streak',parseInt(localStorage.getItem('streak')) + 1);
      localStorage.setItem('day'+dayCount,'true');
      // document.getElementById("movieFrame").src = "images/"+movieOfTheDay+"/poster.jpg";
      console.log(localStorage.getItem('day'+dayCount));
      streakNumber.textContent = " " + localStorage.getItem('streak');
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("movieName").innerHTML = movieOfTheDay + " ✅";
      document.getElementById("countDown").style.display = "block";
      document.getElementById("shareResult").style.display = "block";
      localStorage.setItem("winningGuess", guess);
        document.getElementById("firstGuess").style.display = "none";
  document.getElementById("secondGuess").style.display = "none";
      
      textResult = textResult + "🟩";
      for (var i = 1; i < (3-guessNo); i++) {
        textResult = textResult + "⬛";
      }
      localStorage.setItem('result', textResult);
      document.getElementById("feedback").innerHTML = "Next movie revealed at midnight! 🕛 <br>";
      document.getElementById("resultText").innerHTML = textResult;
      dates[dayCount-1].classList.add('won');


    } else if(guessNo==1){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo', guessNo);
      feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      firstGuess.textContent = "❌" + guess;
      localStorage.setItem('firstGuess', guess);
      document.getElementById("firstGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result', textResult);
    }else if(guessNo<2){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo', guessNo);
      feedback.textContent =  "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      secondGuess.textContent = "❌" + guess;
      localStorage.setItem('secondGuess', guess);
      document.getElementById("secondGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result', textResult);
    }
     else{
      feedback.textContent = "GAME OVER";
      textResult = textResult + "🟥";
      localStorage.setItem('guessNo', guessNo);
      localStorage.setItem('streak', 0);
      localStorage.setItem('day'+dayCount,'false');
      dates[dayCount-1].classList.add('lost');

    }
    console.log(textResult);
    document.getElementById("guessForm").reset();
 }


 const autoCompleteJS = new autoComplete({
  placeHolder: "Search for Movies...",
  data: {
      src: movies
  },
  resultItem: {
      highlight: true,
  },
  events: {
    input: {
        selection: (event) => {
            const selection = event.detail.selection.value;
            autoCompleteJS.input.value = selection;
        },
        open() {
          const position =
              autoCompleteJS.input.getBoundingClientRect().bottom + autoCompleteJS.list.getBoundingClientRect().height >
              (window.innerHeight || document.documentElement.clientHeight);

          if (position) {
              autoCompleteJS.list.style.bottom = autoCompleteJS.input.offsetHeight + 8 + "px";
          } else {
              // autoCompleteJS.list.style.bottom = -autoCompleteJS.list.offsetHeight - 8 + "px";
          }
      },
    }
}
});
autoCompleteJS.input.addEventListener("selection", function (event) {
  const feedback = event.detail;
  // Prepare User's Selected Value
  guess = event.detail.selection.value
  autoCompleteJS.input.value = guess;
  // Console log autoComplete data feedback
  console.log(event.detail.selection.value);
});

function copyToClipboard() {
    navigator.clipboard.writeText(textResult).then(() => {
      shareResult.value = "copied!";
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!

    });
  }

function getArchive(j){

  dates[dayCount-1].classList.remove('current');
    dayCount = j;
  dates[j-1].classList.add('current');
  deathOftheDay();
  clearGuess();
  checkingGuess();
  // checkGuess();
  firstCheck();
  document.getElementById('guess').value = "";
  location.href='#';
  //window.open("#");
}



 submitGuess.addEventListener('click', checkGuess)

 const labels = [
  'First Guess',
  'Second Guess',
  'Third Guess',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Number of guesses',
    backgroundColor: 'rgb(255, 99, 132)',
    fontColor: 'white',
    color:'white',
    data: [localStorage.getItem('firstGuessStat'), localStorage.getItem('secondGuessStat'), localStorage.getItem('thirdGuessStat')],
  }]
};

Chart.defaults.color='white'
Chart.defaults.borderColor='grey'
const config = {
  type: 'bar',
  data: data,
  options: {
    scales:{
      yAxes:{
        ticks:{
          stepSize:1
        }
      }
    }
  }
};

var x = setInterval(function() {
  // countDownTime.setDate(Math.floor((present_date - gameBeginning) / (1000 * 60 * 60 * 24))+2);
  dayCounter();
  
  dateVariable = present_date.getDate()
  countDownTime.setDate(dateVariable+1);
  countDownTime.setHours(0);
  countDownTime.setMinutes(0);
  countDownTime.setSeconds(0);
  var now = new Date();
  // console.log("now: ",now);
  var remainingTime = countDownTime - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  hoursLeft = Math.trunc((remainingTime % day) / hour);
  minutesLeft = Math.trunc((remainingTime % hour) / minute);
  secondsLeft = Math.trunc((remainingTime % minute) / second);
document.getElementById("countDown").innerHTML =  hoursLeft + "h "
+ minutesLeft + "m " + secondsLeft + "s ";
//console.log(remainingTime);
// console.log(localStorage.getItem('day'));
// console.log("day count: " + dayCount);
dayCount = Math.floor((now - gameBeginning) / (1000 * 60 * 60 * 24));
if (localStorage.getItem('day')!=dayCount)  {
    window.location.reload();
}
}, 1000);

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
//window.localStorage.clear();