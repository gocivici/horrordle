//<TO-DO>
//-FIX IMAGE RATIOS
//-FIX CALENDAR
//-ADD SUPPORT PAGE
//archive doesn't work constanlt refreshing
// var fake_date = new Date("September 19, 2022 23:58:00");
// Date = function(){return fake_date;}; 
// Date.now = () => fake_date.getTime();
//json sitrgifiy local objects
//pre-load images
//image placeholder
// gameover movie name

window.addEventListener ("load", function() {
    loader.style.display = 'none';
});
guess='Skipped';

 if(!localStorage.getItem('playedBefore')){
  // window.location = window.location.href + "#info";
  window.location = "https://gocivici.github.io/horrordle/#info"
  //  window.location = "file:///C:/Users/gogob/Documents/dEATHDLE/Test/index.html#info"
  localStorage.setItem('playedBefore',"true");
 }

var buttonNo = 0;


bonusRoundState = false;
var playedBefore = false;
var sameDay = false;
for (var i = 0; i < localStorage.length; i++){
  console.log(localStorage.key(i));
}

function revealButtons(g = guessNo){
  picButtons = document.getElementsByClassName('imageButton');
  picButtons[g].classList.add('active');
  for (var i = 0; i <= g; i++){
    console.log("revealButton guess no " + guessNo);
     picButtons[i].style.display = "inline";
     picButtons[i].classList.remove('active');
  }
  showPic();
  // picButtons[g].classList.add('active');
}
// document.getElementById("button2").style.display = "none"
// document.getElementById("button3").style.display = "none"



  var movies = [["The Texas Chainsaw Massacre",1,"Sally Hardesty"],["It Follows",2,"Jaime Height"],["Friday the 13th",0,"Alice Hardy"],["Event Horizon",2,"Lieutenant Starck"],["Hellraiser",2,"Kirsty Cotton"],["A Nightmare on Elm Street",1,"Nancy Thompson"],["The Cabin in the Woods",2],["American Psycho",0]];
  var pix = [];
  // autocomplete(document.getElementById("guess"), movies);
  var gameBeginning = new Date('September 22, 2022 00:00:00');
  var countDownTime =  new Date();
  var present_date = new Date();

  // gameBeginning = new Date(gameBeginning.getTime() + 0 * 60 * 1000);
  console.log(gameBeginning.getTimezoneOffset());
  dayCounter();
  console.log("gameBeginning: ",gameBeginning);
  console.log("now: ",present_date);
  

// console.log(textResult);
function dayCounter(){
  dayCount = Math.floor((present_date - gameBeginning) / (1000 * 60 * 60 * 24));
  return dayCount;
}

markCalendar();

function markCalendar() {
  winCount = 0;
loseCount = 0;
  dates = document.getElementsByClassName('calendar__number');
  console.log(dates[10].innerHTML);
  var tag = [];
  for (var i = 0; i < dates.length; i++) {


      if (dates[i].innerHTML==dayCount) {
        dates[i].classList.add('current');
        
        for (var j = 0; j <= i; j++) {
          if (localStorage.getItem('day'+(j+1))) {
            if (localStorage.getItem('day'+(j+1))=='true') {
                dates[j].classList.add('won');
                winCount=winCount + 1;
            } else if (localStorage.getItem('day'+(j+1))=='false') {
                dates[j].classList.add('lost');
                loseCount=loseCount + 1;
            }

          }else {


          dates[j].classList.add('past');
          dates[j] = document.createElement('a');
          //dates[j].setAttribute('href','#');
          if(localStorage.getItem("playedToday")){
          // dates[j].setAttribute('onclick','getArchive(' + (j+1) +')');
          // dates[j] = "<a href='#'>" + dates[j] + "</a>";
            }
          }
          // dates[j] = "<a href='" + dayCount + "'>" + dates[j] + "</a>";
          //tag[j].appendChild(dates[j]);
          //console.log(tag[j]);
          console.log(dates[j]);
        }

        console.log(dates[i]);
      }
  }
  console.log("win:"+ winCount)
  console.log("lose:"+ loseCount)
  winPerc.textContent = Math.ceil(winCount/(winCount+loseCount)*100)+"%";
  totalPlays.textContent = winCount+loseCount
}


var points = "⬛⬛⬛"
//check if the user played this before
firstCheck();
revealButtons();
function firstCheck(){
  guessNo = 0;
  feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
  if(!localStorage.getItem('streak')){localStorage.setItem('streak',0)}
  if(!localStorage.getItem('firstGuessStat')){localStorage.setItem('firstGuessStat',0)}
  if(!localStorage.getItem('secondGuessStat')){localStorage.setItem('secondGuessStat',0)}
  if(!localStorage.getItem('thirdGuessStat')){localStorage.setItem('thirdGuessStat',0)}
}






function clearGuess() {
  localStorage.removeItem('firstGuess');
  localStorage.removeItem('secondGuess');
  localStorage.removeItem('guessNo');
  localStorage.removeItem('winningGuess');
  localStorage.removeItem('lost');
  localStorage.removeItem('movieName');
  localStorage.removeItem("playedToday");
  localStorage.removeItem('result');
  document.getElementById("firstGuess").style.display = "none";
  document.getElementById("secondGuess").style.display = "none";
  document.getElementById("shareResult").style.display = "none";
  document.getElementById("guessForm").style.display = "block";
  document.getElementById("countDown").style.display = "none"
  
}


function checkingGuess() {
  

streakNumber.textContent =localStorage.getItem('streak');

  if (localStorage.getItem('day')==dayCount) {


  playedBefore = true;
  textResult=localStorage.getItem('result')
  document.getElementById("movieName").innerHTML = localStorage.getItem('movieName')
  
  console.log("played before: ",playedBefore);
  console.log(localStorage.getItem('firstGuess'));
  console.log(localStorage.getItem('secondGuess'));
  if(localStorage.getItem('guessNo')){guessNo=localStorage.getItem('guessNo')};
  feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
  if(localStorage.getItem('result')) {localStorage.setItem('result', textResult);document.getElementById("resultText").innerHTML =textResult;document.getElementById("movieFrame").style.display = "none";document.getElementsByClassName("resultContainer")[0].style.display="flex";}
  if(localStorage.getItem('firstGuess')){firstGuess.textContent = "❌ " + localStorage.getItem('firstGuess');document.getElementById("firstGuess").style.display = "block";}
  if(localStorage.getItem('secondGuess')){secondGuess.textContent = "❌ " + localStorage.getItem('secondGuess');document.getElementById("secondGuess").style.display = "block";}
  if(localStorage.getItem('winningGuess')||localStorage.getItem('lost')){document.getElementsByClassName("picButtons")[0].style.display="none";revealButtons(2);document.getElementById("feedback").innerHTML = "Next movie will reveal at <b>midnight!</b> 🕛";document.getElementById("shareResult").style.display = "block";document.getElementById("countDown").style.display = "block";document.getElementById("guessForm").style.display = "none";document.getElementById("firstGuess").style.display = "none";document.getElementById("secondGuess").style.display = "none";document.getElementById("resultText").style.display="block";}else {document.getElementById("shareResult").style.display = "none";document.getElementById("guessForm").style.display = "block";document.getElementById("resultText").style.display="none";};
  if(localStorage.getItem('lost')){ document.getElementById("congratz").innerHTML = "You lost☠️"; document.getElementsByClassName("resultContainer")[0].style.borderColor = "#C62828";}
  secondGuess.textContent = "❌ " + localStorage.getItem('secondGuess');
  revealButtons();
}else {
clearGuess();
localStorage.setItem('day', dayCount);
}
markCalendar();

}
checkingGuess();
window.onload = deathOftheDay();
  // console.log(dayCount);




  function deathOftheDay(x=dayCount){
    pix = [];
   movieOfTheDay = movies[x-1];

    for (let i = 1; i < 4; i++) {
      pix.push("images/"+movieOfTheDay[0]+"/"+i+".png");
      preloadImage("images/"+movieOfTheDay[0]+"/"+i+".png");
    }
    // preloadImage("images/"+movieOfTheDay[0]+"/poster.png");
    document.getElementById("posterFrame").src = "images/"+movieOfTheDay[0]+"/poster.jpg";
    console.log('Movie: ', movieOfTheDay[0]);
    console.log('Array: ', pix);
    showPic();

    // picButton = document.getElementsByClassName('picButton');
    // picButton.setAttribute('onclick','getImage()');
  }

  function showPic(p=guessNo){
    
    // document.getElementById("movieFrame").src = "http://www.deelay.me/3000/https://via.placeholder.com/1920x1080";
    document.getElementById("movieFrame").src = pix[p];
    buttonNo = p;
    picButtons = document.getElementsByClassName('imageButton');
    for (let i=0; i<3; i++){
      picButtons[i].classList.remove('active');
    }
    picButtons[p].classList.add('active');
    // for (let i = 0; i < 2; i++) {
    //   const element = array[i];
      
    // }
  }

  function submitBonus(b=0){
    if (buttonNo==movieOfTheDay[1]&&b==0) {
      bonusRoundState= true;
      // document.getElementById("bonusQuestion").style.display="none";
      document.getElementById("bonusQuestion").innerHTML = "Survivor: "+ movieOfTheDay[2] + " ⭐";

      textResult = textResult + "(⭐)"
      console.log("you win!")
    } else if(b==1){
      // document.getElementById("bonusQuestion").innerHTML = "Survivor: "+ movieOfTheDay[2];
      document.getElementById("congratz").innerHTML = "You lost☠️";
      document.getElementsByClassName("resultContainer")[0].style.borderColor = "#C62828";
    }
    else{
      console.log('you lose')
      document.getElementById("bonusQuestion").innerHTML = "Survivor: "+ movieOfTheDay[2];


    }
    document.getElementById("movieFrame").style.display = "none";
    document.getElementsByClassName("resultContainer")[0].style.display="flex";
    localStorage.setItem('result', textResult);
    document.getElementById("feedback").style.display = "block";
    document.getElementById("feedback").innerHTML = "Next movie revealed at midnight! 🕛 <br>";
    document.getElementById("resultText").innerHTML = textResult;
    document.getElementById("resultText").style.display="block";
    document.getElementById("countDown").style.display = "block";
    document.getElementById("shareResult").style.display = "block";
    document.getElementById("submitBonusGuess").style.display="none";
    document.getElementById("skipBonusGuess").style.display="none";
    document.getElementsByClassName("picButtons")[0].style.display="none";
    showPic(movieOfTheDay[1])
    console.log(buttonNo);
    addData();
  }
  if(!localStorage.getItem('result')){
  textResult = "🔪";
}else{
  textResult = localStorage.getItem('result');
}
  function checkGuess() {
    localStorage.setItem('playedBefore','true');
    
console.log("day count:" + dayCount);
    let myGuess = guess
   
    if (myGuess === movieOfTheDay[0]) {
      
      if(guessNo==0){localStorage.setItem('firstGuessStat',parseInt(localStorage.getItem('firstGuessStat')) + 1);}
      if(guessNo==1){localStorage.setItem('secondGuessStat',parseInt(localStorage.getItem('secondGuessStat')) + 1);}
      if(guessNo==2){localStorage.setItem('thirdGuessStat',parseInt(localStorage.getItem('thirdGuessStat')) + 1);}
      localStorage.setItem('streak',parseInt(localStorage.getItem('streak')) + 1);
      localStorage.setItem('day'+dayCount,'true');
      // document.getElementById("movieFrame").src = "images/"+movieOfTheDay+"/poster.jpg";
      // console.log(localStorage.getItem('day'+dayCount));
      streakNumber.textContent = localStorage.getItem('streak');
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("feedback").style.display = "none";
      document.getElementById("movieName").innerHTML = movieOfTheDay[0] + " ✅";
      
      localStorage.setItem('movieName', movieOfTheDay[0] + " ✅")
      document.getElementById("bonusQuestion").innerHTML = "⭐BONUS ROUND⭐<br> Can you guess the survivor?";
      document.getElementById("submitBonusGuess").style.display = "inline";
      document.getElementById("skipBonusGuess").style.display = "inline";
      textResult = textResult + "🟩";
      for (var i = 1; i < (3-guessNo); i++) {
        textResult = textResult + "⬛";
      }
      localStorage.setItem('result', textResult);
      // document.getElementById("countDown").style.display = "block";
      // document.getElementById("shareResult").style.display = "block";
      // document.getElementsByClassName("picButtons")[0].classList.add('bonusScreen')
      tempButton = document.getElementsByClassName("imageButton");
      for (let i = 0; i < 3; i++) {
        tempButton[i].classList.add("bonusScreen");
      }
      document.getElementsByClassName("imageButton")[0].style.fontSize = "32px";
      localStorage.setItem("winningGuess", guess);
      localStorage.setItem("playedToday", "yes");
        document.getElementById("firstGuess").style.display = "none";
  document.getElementById("secondGuess").style.display = "none";
      

      dates[dayCount-1].classList.add('won');
      revealButtons(2);

    } else if(guessNo==1){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo', guessNo);
      feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      firstGuess.textContent = "❌ " + guess;
      localStorage.setItem('firstGuess', guess);
      document.getElementById("firstGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result', textResult);
      revealButtons();
    }else if(guessNo<2){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo', guessNo);
      feedback.textContent =  "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      secondGuess.textContent = "❌ " + guess;
      localStorage.setItem('secondGuess', guess);
      document.getElementById("secondGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result', textResult);
      revealButtons();
    }
     else{
      // guessNo = guessNo + 1;
      feedback.textContent = "GAME OVER";
      // document.getElementById("movieName").innerHTML = movieOfTheDay[0];
      textResult = textResult + "🟥";
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("feedback").style.display = "none";
      document.getElementById("firstGuess").style.display = "none";
      document.getElementById("secondGuess").style.display = "none";
      localStorage.setItem('guessNo', guessNo);
      localStorage.setItem('streak', 0);
      localStorage.setItem('day'+dayCount,'false');
      localStorage.setItem("lost", "yes");
      localStorage.setItem("playedToday", "yes");
      dates[dayCount-1].classList.add('lost');
      submitBonus(1);

    }
    console.log(textResult);
    document.getElementById("guessForm").reset();
    markCalendar();
    guess = "Skipped"
    
 }


 const autoCompleteJS = new autoComplete({
  placeHolder: "Search for Horror Movies...",
  // wrapper: false,
  data: {
      src: movies.map(movies => movies[0])
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
  // guess = "skipped"
  // event.detail.selection.value = "skipped";
  const feedback = event.detail;
  // Prepare User's Selected Value
  guess = event.detail.selection.value
  autoCompleteJS.input.value = guess;
  // Console log autoComplete data feedback
  console.log(event.detail.selection.value);
  checkGuess();
});

function copyToClipboard() {
    navigator.clipboard.writeText("Horrordle #" + dayCount + "\n"+ textResult).then(() => {
      shareResult.value = "copied!";
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!

    });
  }

function getArchive(j,d = dayCount){

  dates[d-1].classList.remove('current');
  d = j;
  dates[j-1].classList.add('current');
  deathOftheDay(j);
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
    backgroundColor: ['#BB86FC'],
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
    // maintainAspectRatio: false,
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
function addData(){
	myChart.data.datasets[0].data[0] = localStorage.getItem('firstGuessStat');
  myChart.data.datasets[0].data[1] = localStorage.getItem('secondGuessStat');
  myChart.data.datasets[0].data[2] = localStorage.getItem('thirdGuessStat');
  myChart.update();
}
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
};
//window.localStorage.clear();