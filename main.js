//
  window.onload = deathOftheDay;
var playedBefore = false;
var sameDay = false;
for (var i = 0; i < localStorage.length; i++){
  console.log(localStorage.key(i));
}





  var movies = ["A Nightmare on Elm Street","Friday the 13th","Event Horizon","Hellraiser","The Cabin in the Woods","American Psycho","It Follows","Candyman","Child's Play","The Texas Chain Saw Massacre","Alien","Halloween"];
  var pix = [];
  autocomplete(document.getElementById("guess"), movies);
  var gameBeginning = new Date('September 9, 2022 24:00:00');
  var countDownTime =  new Date();
  var present_date = new Date();

  // gameBeginning = new Date(gameBeginning.getTime() + 0 * 60 * 1000);
  console.log(gameBeginning.getTimezoneOffset());
  
  console.log("gameBeginning: ",gameBeginning);
  console.log("now: ",present_date);
  var dayCount = Math.floor((present_date - gameBeginning) / (1000 * 60 * 60 * 24));
var textResult = "Horrordle #"+dayCount+"\n🔪";

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
    let myGuess = guess.value
    if (myGuess === movieOfTheDay) {
      if(guessNo==0){localStorage.setItem('firstGuessStat',parseInt(localStorage.getItem('firstGuessStat')) + 1);}
      if(guessNo==1){localStorage.setItem('secondGuessStat',parseInt(localStorage.getItem('secondGuessStat')) + 1);}
      if(guessNo==2){localStorage.setItem('thirdGuessStat',parseInt(localStorage.getItem('thirdGuessStat')) + 1);}
      localStorage.setItem('streak',parseInt(localStorage.getItem('streak')) + 1);
      localStorage.setItem('day'+dayCount,'true');
      console.log(localStorage.getItem('day'+dayCount));
      streakNumber.textContent = " " + localStorage.getItem('streak');
      document.getElementById("guessForm").style.display = "none";
      document.getElementById("movieName").innerHTML = movieOfTheDay + " ✅";
      document.getElementById("countDown").style.display = "block";
      document.getElementById("shareResult").style.display = "block";
      localStorage.setItem("winningGuess", guess.value);
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
      firstGuess.textContent = "❌" + guess.value;
      localStorage.setItem('firstGuess', guess.value);
      document.getElementById("firstGuess").style.display = "block";
      textResult = textResult + "🟥";
      localStorage.setItem('result', textResult);
    }else if(guessNo<2){
      guessNo = guessNo + 1;
      localStorage.setItem('guessNo', guessNo);
      feedback.textContent =  "🩸 " + (3-guessNo) + " guesses remaining";
      document.getElementById("movieFrame").src = pix[guessNo];
      secondGuess.textContent = "❌" + guess.value;
      localStorage.setItem('secondGuess', guess.value);
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


 function autocomplete(inp, arr) {
   /*the autocomplete function takes two arguments,
   the text field element and an array of possible autocompleted values:*/
   var currentFocus;
   /*execute a function when someone writes in the text field:*/
   inp.addEventListener("input", function(e) {
       var a, b, i, val = this.value;
       /*close any already open lists of autocompleted values*/
       closeAllLists();
       if (!val) { return false;}
       currentFocus = -1;
       /*create a DIV element that will contain the items (values):*/
       a = document.createElement("DIV");
       a.setAttribute("id", this.id + "autocomplete-list");
       a.setAttribute("class", "autocomplete-items");
       /*append the DIV element as a child of the autocomplete container:*/
       this.parentNode.appendChild(a);
       /*for each item in the array...*/

       for (i = 0; i < arr.length; i++) {
        //  newArray = arr[i].split(" ");
        newArray = arr[i].split(" ");
         /*check if the item starts with the same letters as the text field value:*/
         for (var j = 0; j < newArray.length; j++) {


         if (newArray[j].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
           /*create a DIV element for each matching element:*/
           b = document.createElement("DIV");

           /*make the matching letters bold:*/
           b.innerHTML = newArray.slice(0,j).join(' ') + " <strong>" + newArray[j].substr(0, val.length) + "</strong>";
           b.innerHTML += newArray[j].substr(val.length) + " " + newArray.slice(j+1,newArray.length).join(' ');
           /*insert a input field that will hold the current array item's value:*/
           b.innerHTML += "<input type='hidden' value='" + newArray.join(' ') + "'>";
           /*execute a function when someone clicks on the item value (DIV element):*/
               b.addEventListener("click", function(e) {
               /*insert the value for the autocomplete text field:*/
               inp.value = this.getElementsByTagName("input")[0].value;
               /*close the list of autocompleted values,
               (or any other open lists of autocompleted values:*/
               closeAllLists();
           });
           a.appendChild(b);
         }
       }
    }
   });
   /*execute a function presses a key on the keyboard:*/
   inp.addEventListener("keydown", function(e) {
       var x = document.getElementById(this.id + "autocomplete-list");
       if (x) x = x.getElementsByTagName("div");
       if (e.keyCode == 40) {
         /*If the arrow DOWN key is pressed,
         increase the currentFocus variable:*/
         currentFocus++;
         /*and and make the current item more visible:*/
         addActive(x);
       } else if (e.keyCode == 38) { //up
         /*If the arrow UP key is pressed,
         decrease the currentFocus variable:*/
         currentFocus--;
         /*and and make the current item more visible:*/
         addActive(x);
       } else if (e.keyCode == 13) {
         /*If the ENTER key is pressed, prevent the form from being submitted,*/
         e.preventDefault();
         if (currentFocus > -1) {
           /*and simulate a click on the "active" item:*/
           if (x) x[currentFocus].click();
         }
       }
   });
   function addActive(x) {
     /*a function to classify an item as "active":*/
     if (!x) return false;
     /*start by removing the "active" class on all items:*/
     removeActive(x);
     if (currentFocus >= x.length) currentFocus = 0;
     if (currentFocus < 0) currentFocus = (x.length - 1);
     /*add class "autocomplete-active":*/
     x[currentFocus].classList.add("autocomplete-active");
   }
   function removeActive(x) {
     /*a function to remove the "active" class from all autocomplete items:*/
     for (var i = 0; i < x.length; i++) {
       x[i].classList.remove("autocomplete-active");
     }
   }
   function closeAllLists(elmnt) {
     /*close all autocomplete lists in the document,
     except the one passed as an argument:*/
     var x = document.getElementsByClassName("autocomplete-items");
     for (var i = 0; i < x.length; i++) {
       if (elmnt != x[i] && elmnt != inp) {
       x[i].parentNode.removeChild(x[i]);
     }
   }
 }
 /*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

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
  countDownTime.setDate(present_date.getDate()+1);
  countDownTime.setHours(24);
  countDownTime.setMinutes(0);
  countDownTime.setSeconds(0);
  var now = new Date();
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
if (remainingTime < 0) {
  //  window.location.reload();
}
}, 1000);
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);