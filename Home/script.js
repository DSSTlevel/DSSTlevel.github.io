function toggleSideContent() {
    var sideContent = document.querySelector('.infobox');
    sideContent.style.display = sideContent.style.display === 'none' ? 'block' : 'none';
 }
 var x = setInterval(function() {
   document.title = "DSSTlevel | Main Menu";
   var now = new Date().getTime();
   var startTime = new Date(new Date().setHours(9, 0, 0)).getTime();
   var newd = new Date();
   var countDownTime;
   switch (newd.getDay()) {
       case 1: //Monday
       case 2: //Tuesday
           countDownTime = 16, 45, 0;
           break;
       case 3: //Wednesday
           countDownTime = 15, 0, 0;
           break;
       case 5: //Friday
           countDownTime = 12, 15, 0;
           break;
       default: //Every Other Day + Weekends
           countDownTime = 0, 0, 0;
           break;
   }
   var countDownDate = new Date(newd.getFullYear(), newd.getMonth(), newd.getDate(), countDownTime).getTime();
   if (now < startTime || now > countDownDate) {
       document.getElementById("timetableCountdown").innerHTML = "The day hasn't begun yet";
   } else {
       var distance = countDownDate - now;
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       document.getElementById("timetableCountdown").innerHTML = `${hours}hr ${minutes}m ${seconds}s`;
       document.title = `DSSTlevel | ${hours}hr ${minutes}m ${seconds}`;
       if (distance < 0) {
           clearInterval(x);
           document.getElementById("timetableCountdown").innerHTML = "The Day is over";
           setInterval(function() {}, 5000);
       }
   }
 }, 1000);
 function percentage_1() {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    const output = document.getElementById("value1")
    var percentage = Math.round((num1/num2)*100)
    if (num1 > num2) {
      return alert('Your marks awarded cant be higher than the total marks')
    } else {
      output.value=`${percentage}%`
   }
 }
 function setCountdown(targetDate, elementId, labelText) {
     setInterval(function() {
         var now = new Date().getTime();
         var countDownDate = new Date(targetDate).getTime();
         var distance = countDownDate - now;
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

         document.getElementById(elementId).innerHTML = labelText + " - " + days + " Days, " + hours + ":" + minutes + ":" + seconds;
     }, 1000);
 }

 setCountdown('Oct 23, 2023 00:00:00', 'EoT', 'End of Term');
 // setCountdown('Sep 11, 2023 00:00:00', 'EoHT', 'End of Half Term');
 setCountdown('Sep 29, 2023 11:00:00', 'training', 'Training Round');

 const RandNum = Math.floor(Math.random() * 100) + 1;
 let attempts = 0;
 function checkGuess() {
   let guessNum = document.getElementById("guess").value 
   attempts++
   document.getElementById("attempts").innerText = attempts 
   if (guessNum == RandNum) {
     document.getElementById("message").innerText = `Congrats! You guessed it` 
   }
   else if (guessNum > RandNum) {
     document.getElementById("message").innerText = `Your guess is too high` 
   }
   else if (guessNum < RandNum) {
     document.getElementById("message").innerText = `Your guess is too low` 
   }
 }

document.getElementById("guess").addEventListener("keypress", (event)=>{
  if (event.key=="Enter") {
    checkGuess()
  }
})

setInterval(function() {
  window.location.reload();
}, 300000); 

function isEvening() {
  var hour = new Date().getHours()
  if (hour >= 0 && hour < 12) {
    document.getElementById("timeofdaystate").innerText="Good Morning"
  }
  else if (hour >= 12 && hour < 18) {
    document.getElementById("timeofdaystate").innerText="Good Afternoon"
  }
  else {
    document.getElementById("timeofdaystate").innerText="Good Evening"
  } 
}

isEvening()