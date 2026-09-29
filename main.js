//<TO-DO>
//change local variables with new ones
//-FIX IMAGE RATIOS
//-FIX CALENDAR
//-ADD SUPPORT PAGE
//archive doesn't work constanlt refreshing
// var fake_date = new Date("October 4, 2023 08:00:00");
// Date = function(){return fake_date;}; 
// Date.now = () => fake_date.getTime();
//json sitrgifiy local objects
//pre-load images
//image placeholder
// gameover movie name

  var gameBeginning = new Date('October 1, 2026 00:00:00');
  var countDownTime =  new Date();
  var present_date = new Date();

  dayCounter();
  window.addEventListener ("load", function() {
    loader.style.display = 'none';
});
  if(dayCount<0){
    document.getElementById("movieFrame").style.display = "none";
    document.getElementById("guessForm").style.display = "none";
    document.getElementsByClassName("picButtons")[0].style.display="none";
    document.getElementById("movieName").innerHTML = "<br><br>Horrordle will be back starting October 1st!";
    document.getElementById("feedback").innerHTML = " <br><br> <a href='https://bsky.app/profile/horrordle.bsky.social'>follow me on Bluesky for updates</a><br><br> ";
  }else if(dayCount>30){
    document.getElementById("movieFrame").style.display = "none";
    document.getElementById("guessForm").style.display = "none";
    document.getElementsByClassName("picButtons")[0].style.display="none";
    document.getElementById("movieName").innerHTML = "<br><br>Thanks for playing!";
    document.getElementById("feedback").innerHTML = "Horrordle will be back next October! <br><br> <a href='https://bsky.app/profile/horrordle.bsky.social'>follow me on Bluesky for updates</a><br><br> In the meantime you can go back and play  <br> the days you've missed by visiting the <br> <a href='#stats'>archive page</a>  on the top right and <br>clicking on the orange dates.";
  }else{

getReady()



function getReady() {


guess='Skipped';

 if(!localStorage.getItem('playedBefore____')){
  // window.location = window.location.href + "#info";
  window.location = "https://gocivici.github.io/horrordle/#info"
  //  window.location = "file:///C:/Users/gogob/Documents/dEATHDLE/Test/index.html#info"
  localStorage.setItem('playedBefore____',"true");
 }

 if(localStorage.getItem('archiveButtonPressed____')){

  document.getElementsByClassName("gif")[0].style.display="none";
 }



var buttonNo = 0;


bonusRoundState = false;
var playedBefore = false;
var sameDay = false;
}
for (var i = 0; i < localStorage.length; i++){
  console.log(localStorage.key(i));
}

function revealButtons(g = guessNo){
  picButtons = document.getElementsByClassName('imageButton');
  picButtons[g].classList.add('active');
  picButtons[0].style.display = "none";
  picButtons[1].style.display = "none";
  picButtons[2].style.display = "none";
  picButtons[3].style.display = "none";
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
// document.getElementById("footer").style.display = "block"



  var pix = [];
  // autocomplete(document.getElementById("guess"), movies);
  // var gameBeginning = new Date('October 1, 2024 00:00:00');
  // var countDownTime =  new Date();
  // var present_date = new Date();
  // var present_date = new Date('November 1, 2022 00:00:00');
  // var present_date = new Date('September 26, 2022 00:00:00');

  // gameBeginning = new Date(gameBeginning.getTime() + 0 * 60 * 1000);
  // console.log(gameBeginning.getTimezoneOffset());
  if(dayCount>30){
    document.getElementsByClassName("gif")[0].style.display="block";
  }
  // console.log("gameBeginning: ",gameBeginning);
  // console.log("now: ",present_date);
  // console.log("Current dayCount: ", dayCount)
  

// console.log(textResult);


markCalendar();



function markCalendar() {
  calendarResult="            "
  winCount = 0;
loseCount = 0;
  dates = document.getElementsByClassName('calendar__number');
  console.log("dateslength: " + dates.length);
  console.log("datesObejcts: " + dates);
  var tag = [];
  for (var i = 0; i < dates.length; i++) {


      if (dates[i].innerHTML==dayCount) {
        dates[i+1].classList.add('current');
      }
        
          if (localStorage.getItem('day____'+(i))) {
            if (localStorage.getItem('day____'+(i))=='true') {
                dates[i].classList.add('won');
                calendarResult+="🟩"
                if((i+6)%7==0){calendarResult+="\n"}
                winCount=winCount + 1;
            } else if (localStorage.getItem('day____'+(i))=='false') {
                dates[i].classList.add('lost');
                calendarResult+="🟥"
                if((i+6)%7==0){calendarResult+="\n"}
                loseCount=loseCount + 1;
            }

          }else if(dates[i].innerHTML<=dayCount){


          dates[i].classList.add('past');
          dates[i] = document.createElement('a');
          calendarResult+="🟧"
          if((i+6)%7==0){calendarResult+="\n"}
          //dates[j].setAttribute('href','#');
          if(localStorage.getItem("playedToday____")){
          // dates[i].setAttribute('onclick','getArchive(' + (i+1) +')');
          // dates[j] = "<a href='#'>" + dates[j] + "</a>";
            }
          }
          // dates[j] = "<a href='" + dayCount + "'>" + dates[j] + "</a>";
          //tag[j].appendChild(dates[j]);
          //console.log(tag[j]);
          // console.log(dates[j]);
        

        // console.log(dates[i]);
      
  }
  // calendarResult = calendarResult.replace(/(.{8})/g, "$1|");
  console.log("calo reso"+ calendarResult);
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
  if(!localStorage.getItem('streak____')){localStorage.setItem('streak____',0)}
  if(!localStorage.getItem('firstGuessStat____')){localStorage.setItem('firstGuessStat____',0)}
  if(!localStorage.getItem('secondGuessStat____')){localStorage.setItem('secondGuessStat____',0)}
  if(!localStorage.getItem('thirdGuessStat____')){localStorage.setItem('thirdGuessStat____',0)}
}






function clearGuess() {
  localStorage.removeItem('firstGuess____');
  localStorage.removeItem('secondGuess____');
  localStorage.removeItem('guessNo____');
  localStorage.removeItem('winningGuess____');
  localStorage.removeItem('lost____');
  localStorage.removeItem('movieName____');
  localStorage.removeItem("playedToday____");
  localStorage.removeItem('result____');
  document.getElementById("firstGuess").style.display = "none";
  document.getElementById("secondGuess").style.display = "none";
  document.getElementById("shareResult").style.display = "none";
  document.getElementById("guessForm").style.display = "block";
  document.getElementById("countDown").style.display = "none";
  // document.getElementById("footer").style.display = "none";
  // document.getElementById("resultText").innerHTML =textResult;
  document.getElementById("movieFrame").style.display = "block";
  document.getElementsByClassName("resultContainer")[0].style.display="none";
  document.getElementsByClassName("picButtons")[0].style.display="block";
  document.getElementById("movieName").innerHTML="";
  document.getElementById("bonusQuestion").innerHTML="";
  tempButton = document.getElementsByClassName("imageButton");
  for (let i = 0; i < 3; i++) {
    tempButton[i].classList.remove("bonusScreen");
  }
  // revealButtons(2);


 
 
  // document.getElementById("movieFrame").style.display = "block";
  // document.getElementById("resultContainer").style.display = "none";
  
}


function checkingGuess() {
  

streakNumber.textContent =localStorage.getItem('streak____');

  if (localStorage.getItem('day____')==dayCount) {


  playedBefore = true;
  textResult=localStorage.getItem('result____')
  document.getElementById("movieName").innerHTML = localStorage.getItem('movieName____')
  
  // console.log("played before: ",playedBefore);
  // console.log(localStorage.getItem('firstGuess'));
  // console.log(localStorage.getItem('secondGuess'));
  if(localStorage.getItem('guessNo____')){guessNo=localStorage.getItem('guessNo____')};
  feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
  if(localStorage.getItem('result____')) {localStorage.setItem('result____', textResult);}
  if(localStorage.getItem('firstGuess____')){firstGuess.textContent = "❌ " + localStorage.getItem('firstGuess____');document.getElementById("firstGuess").style.display = "block";}
  if(localStorage.getItem('secondGuess____')){secondGuess.textContent = "❌ " + localStorage.getItem('secondGuess____');document.getElementById("secondGuess").style.display = "block";}
  if(localStorage.getItem('winningGuess____')||localStorage.getItem('lost____')){document.getElementById("resultText").innerHTML =textResult;document.getElementById("movieFrame").style.display = "none";document.getElementById("links").style.display = "block";document.getElementsByClassName("resultContainer")[0].style.display="flex";document.getElementsByClassName("picButtons")[0].style.display="none";document.getElementById("feedback").innerHTML = "Next movie at <b>midnight!</b> 🕛";document.getElementById("shareResult").style.display = "block";document.getElementById("countDown").style.display = "block";document.getElementById("footer").style.display = "block";document.getElementById("guessForm").style.display = "none";document.getElementById("firstGuess").style.display = "none";document.getElementById("secondGuess").style.display = "none";document.getElementById("resultText").style.display="block";}else {document.getElementById("resultText").innerHTML =textResult;document.getElementById("movieFrame").style.display = "block";document.getElementsByClassName("resultContainer")[0].style.display="none";document.getElementsByClassName("picButtons")[0].style.display="block";document.getElementById("shareResult").style.display = "none";document.getElementById("countDown").style.display = "none";document.getElementById("footer").style.display = "block";document.getElementById("guessForm").style.display = "block";};
  if(localStorage.getItem('lost____')){ document.getElementById("congratz").innerHTML = "You lost☠️"; document.getElementsByClassName("resultContainer")[0].style.borderColor = "#C62828";}
  secondGuess.textContent = "❌ " + localStorage.getItem('secondGuess____');
  revealButtons();
}else {
clearGuess();
localStorage.setItem('day____', dayCount);
}
markCalendar();

}


window.onload = deathOftheDay();
checkingGuess();

  // console.log(dayCount);


  async function attemptImageLoad(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.addEventListener('error', () => {
        reject(image);
      });

      image.addEventListener('load', () => {
        resolve(image);
      });

      image.src = url;
    })
  }

  async function deathOftheDay(x=dayCount){
    pix = [];
   
    
      movieOfTheDay = movies[x];
      document.getElementById("movieFrame").style.display = "block";

    let imageLocation = 'images'
    try {
      await attemptImageLoad(`${imageLocation}/${movieOfTheDay[0]}/1.jpg`)
    } catch(e) {
      imageLocation = 'images/2022'
    }

    for (let i = 1; i < 5; i++) {
      pix.push(imageLocation+"/"+movieOfTheDay[0]+"/"+i+".jpg");
      preloadImage(imageLocation+"/"+movieOfTheDay[0]+"/"+i+".jpg");
    }
    // preloadImage("images/"+movieOfTheDay[0]+"/poster.png");
    document.getElementById("posterFrame").src = imageLocation+"/"+movieOfTheDay[0]+"/poster.jpg";
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
    for (let i=0; i<4; i++){
      picButtons[i].classList.remove('active');
    }
    picButtons[p].classList.add('active');
    // for (let i = 0; i < 2; i++) {
    //   const element = array[i];
      
    // }
  }

  function transitionToCompletedState() {
    document.getElementById("movieFrame").style.display = "none";
    document.getElementsByClassName("resultContainer")[0].style.display="flex";
    localStorage.setItem('result____', textResult);
    document.getElementById("feedback").style.display = "block";
    document.getElementById("feedback").innerHTML = "Next movie at <b>midnight!</b> 🕛 <br>";
    document.getElementById("resultText").innerHTML = textResult;
    document.getElementById("resultText").style.display="block";
    document.getElementById("countDown").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("links").style.display = "block";
    document.getElementById("shareResult").style.display = "block";
    document.getElementById("submitBonusGuess").style.display="none";
    document.getElementById("skipBonusGuess").style.display="none";
    document.getElementsByClassName("picButtons")[0].style.display="none";

    showPic(movieOfTheDay[1])
    addData();
  }

  function submitBonus(b=0){
    if (buttonNo==movieOfTheDay[1]&&b==0) {
      // bonusRoundState= true;
      document.getElementById("bonusQuestion").style.display="none";
      // document.getElementById("bonusQuestion").innerHTML ="Bonus Question ⭐"+ "<br />" + "Survivor: "+ movieOfTheDay[2];

      // textResult = textResult + "(⭐)"
      console.log("you win!")
    } else if(b==1){
      // document.getElementById("bonusQuestion").innerHTML = "Survivor: "+ movieOfTheDay[2];
      document.getElementById("congratz").innerHTML = "You lost☠️";
      document.getElementsByClassName("resultContainer")[0].style.borderColor = "#C62828";
    }
    else{
      console.log('you lose')
      // document.getElementById("bonusQuestion").innerHTML = "Bonus Question ❌"+ "<br />" + "Survivor: "+ movieOfTheDay[2];
    }
    transitionToCompletedState()
  }
  setResult();
function setResult(){
  if(!localStorage.getItem('result____')){
  textResult = "🔪";
}else{
  textResult = localStorage.getItem('result____');
}
}

document.getElementById("letterboxd").href = movieOfTheDay[2];
document.getElementById("wikipedia").href = movieOfTheDay[3];
  function checkGuess() {
    localStorage.setItem('playedBefore____','true');
    
// console.log("day count:" + dayCount);
    let myGuess = guess
   


    if (myGuess === movieOfTheDay[0]) {
      
      if(guessNo==0){localStorage.setItem('firstGuessStat____',parseInt(localStorage.getItem('firstGuessStat____')) + 1);}
      if(guessNo==1){localStorage.setItem('secondGuessStat____',parseInt(localStorage.getItem('secondGuessStat____')) + 1);}
      if(guessNo==2){localStorage.setItem('thirdGuessStat____',parseInt(localStorage.getItem('thirdGuessStat____')) + 1);}
      localStorage.setItem('streak____',parseInt(localStorage.getItem('streak____')) + 1);
      localStorage.setItem('day____'+dayCount,'true');
      
      // document.getElementById("movieFrame").src = "images/"+movieOfTheDay+"/poster.jpg";
      console.log(localStorage.getItem('day____'+dayCount));
      streakNumber.textContent = localStorage.getItem('streak____');
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("feedback").style.display = "none";
      document.getElementById("movieName").innerHTML = movieOfTheDay[0] + " ✅";
      
      localStorage.setItem('movieName____', movieOfTheDay[0] + " ✅")
      plausible('Win');
      // document.getElementById("bonusQuestion").innerHTML = "⭐BONUS ROUND⭐<br> Can you guess which <b>image</b> contains the survivor?";

      // if(movieOfTheDay.length > 1) {
      //   document.getElementById("bonusQuestion").innerHTML = "⭐BONUS ROUND⭐<br> Use the buttons below to choose the image with the survivor";
      //   document.getElementById("submitBonusGuess").style.display = "inline";
      //   document.getElementById("skipBonusGuess").style.display = "inline";
      // } else {
      //   transitionToCompletedState()
      // }

      textResult = textResult + "🟩";
      for (var i = 1; i < (3-guessNo); i++) {
        textResult = textResult + "⬛";
      }
      localStorage.setItem('result____', textResult);
      // document.getElementById("countDown").style.display = "block";
      // document.getElementById("shareResult").style.display = "block";
      // document.getElementsByClassName("picButtons")[0].classList.add('bonusScreen')
      tempButton = document.getElementsByClassName("imageButton");
      for (let i = 0; i < 3; i++) {
        tempButton[i].classList.add("bonusScreen");
      }
      // document.getElementsByClassName("imageButton")[0].style.fontSize = "32px";
      localStorage.setItem("winningGuess____", guess);
      localStorage.setItem("playedToday____", "yes");
        document.getElementById("firstGuess").style.display = "none";
  document.getElementById("secondGuess").style.display = "none";
      

      dates[dayCount].classList.add('won');
      submitBonus(2)

    } else if(guessNo==1){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo____', guessNo);
      feedback.textContent = "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      firstGuess.textContent = "❌ " + guess;
      localStorage.setItem('firstGuess____', guess);
      document.getElementById("firstGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result____', textResult);
      revealButtons();
    }else if(guessNo<2){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo____', guessNo);
      feedback.textContent =  "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      secondGuess.textContent = "❌ " + guess;
      localStorage.setItem('secondGuess____', guess);
      document.getElementById("secondGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result____', textResult);
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
      localStorage.setItem('guessNo____', guessNo);
      localStorage.setItem('streak____', 0);
      localStorage.setItem('day____'+dayCount,'false');
      localStorage.setItem("lost____", "yes");
      localStorage.setItem("playedToday____", "yes");
      dates[dayCount].classList.add('lost');
      plausible('Lose');
      submitBonus(1);

    }
    
    console.log(textResult);
    document.getElementById("guessForm").reset();
    markCalendar();
    guess = "Skipped"
    
 }

 countdowAndRefresh();
 const autoCompleteJS = new autoComplete({
  placeHolder: "Search for Movies...",
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
  // console.log(event.detail.selection.value);
  checkGuess();
});

function copyToClipboard() {
    navigator.clipboard.writeText("Horrordle #" + (dayCount+1) + "\n"+ textResult).then(() => {
      shareResult.value = "copied!";
      
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!

    });
  }
  function copyToClipboardCalendar() {
  
    navigator.clipboard.writeText("Horrordle 2022: \n" + calendarResult + "").then(() => {
      shareResultCalender.value = "copied!";
      
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!

    });
  }

function getArchive(j,d = dayCount){
  for (var i = 0; i < dates.length; i++) {
    dates[i].classList.remove('current'); 
  }
  //  present_date.setYear(2023);
  present_date.setMonth(9,j);
  // present_date.setDate(j);
  console.log(present_date);
  getReady();
  var pix = [];
  dayCounter();
  markCalendar();
  var points = "⬛⬛⬛"
  firstCheck();
  clearGuess();
  revealButtons();
  checkingGuess();
  deathOftheDay();
  setResult();

  // dayCounter();
  // firstCheck();
  // revealButtons();
  // clearGuess();

  // dates[d-1].classList.remove('current');
  // d = j;
  // dates[j-1].classList.add('current');
  // deathOftheDay(j);
  // document.getElementById('guess').value = "";
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
    data: [localStorage.getItem('firstGuessStat____'), localStorage.getItem('secondGuessStat____'), localStorage.getItem('thirdGuessStat____')],
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


function addData(){
	myChart.data.datasets[0].data[0] = localStorage.getItem('firstGuessStat____');
  myChart.data.datasets[0].data[1] = localStorage.getItem('secondGuessStat____');
  myChart.data.datasets[0].data[2] = localStorage.getItem('thirdGuessStat____');
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
function resetFunction() {
  if (confirm("this will delete all you progress, are you sure?") == true) {
    window.localStorage.clear();
  } else {

  } 
}

function remember(){
  localStorage.setItem('archiveButtonPressed____','true');
  document.getElementsByClassName("gif")[0].style.display="none";
}

}
function dayCounter(){
  dayCount = Math.floor((present_date - gameBeginning) / (1000 * 60 * 60 * 24));
  console.log("dayCount: " + dayCount);

  return dayCount;
}
function countdowAndRefresh(){
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
if (localStorage.getItem('day____')!=dayCount)  {
     window.location.reload();
}
}, 1000);
//window.localStorage.clear();
}