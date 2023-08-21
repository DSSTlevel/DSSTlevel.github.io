function closeTime() {
  var isTrue=false
  if (new Date().getTime() > new Date('Jun 14, 2023 13:00:00').getTime()&&new Date().getTime() < new Date('Jun 14, 2023 15:00:00').getTime()) var isTrue=true
  else if (new Date().getTime() > new Date('Jun 21, 2023 13:00:00').getTime()&&new Date().getTime() < new Date('Jun 21, 2023 15:30:00').getTime()) var isTrue=true
  return isTrue
}

var WebsiteStatus=false//False = Open, True = Closed
if ((closeTime()===false&&WebsiteStatus===false)) {
  document.getElementById("navigbar").innerHTML = `
  <style>
  ::-webkit-scrollbar {width: 5px;}
  ::-webkit-scrollbar-track {background: black;}
  ::-webkit-scrollbar-thumb {background: rgb(0, 51, 128);}
  ::-webkit-scrollbar-thumb:hover {background: rgb(0, 53, 96);}
  
  </style>
  <nav class="navbar">
    <ul class="navbar-list">
        <li class="navbar-item">
            <a href="#" class="navbar-link"><i class="fa-solid fa-bars"> </i><i class="fa-solid fa-a"></i></a>
            <ul class="dropdown-menu">
              <li><a href="https://dsstlevel.github.io/Web/html/BusinessContext" class="dropdown-link">Business Context</a></li>
              <li><a href="https://dsstlevel.github.io/Web/html/Culture" class="dropdown-link">Culture</a></li>
              <li><a href="https://dsstlevel.github.io/Web/html/DigitalEnvironments" class="dropdown-link">Digital Environments</a></li>
              <li><a href="https://dsstlevel.github.io/Web/html/DiversityandInclusion" class="dropdown-link">Diversity and Inclusion</a></li>
              <li><a href="https://dsstlevel.github.io/Web/html/BusinessContext" class="dropdown-link">Learning</a></li>
              <li><a href="#" class="dropdown-link">Planning</a></li>
            </ul>
        </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link"><i class="fa-solid fa-bars"></i> <i class="fa-solid fa-b"></i></a>
        <ul class="dropdown-menu">
          <li><a href="https://dsstlevel.github.io/Web/html/Testing" class="dropdown-link">Testing</a></li>
          <li><a href="#" class="dropdown-link">Tools</a></li>
          <li><a href="https://dsstlevel.github.io/Web/html/Legislation" class="dropdown-link">Legislation</a></li>
          <li><a href="https://dsstlevel.github.io/Web/html/Security" class="dropdown-link">Security</a></li>
          <li><a href="https://dsstlevel.github.io/Web/html/Data" class="dropdown-link">Data</a></li>
          <li><a href="https://dsstlevel.github.io/Web/html/DigitalAnalysis" class="dropdown-link">Digital Analysis</a></li>
        </ul>
      </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link"><i class="fa-solid fa-bars"></i> <i class="fa-solid fa-newspaper"></i></a>
        <ul class="dropdown-menu">
          <li><a href="https://www.netacad.com/portal/learning" target="_blank" class="dropdown-link">Cisco</a></li>
          <li><a href="https://dsstlevel.github.io/Web/html/codingScripts" class="dropdown-link">Scripts (Quizzes)</a></li>
          <li><a href="https://ncfe.org.uk" target="_blank" class="dropdown-link">NCFE Website</a></li>
          <li><a href="https://www.qualhub.co.uk/qualification-search/qualification-detail/t-level-technical-qualification-in-digital-support-services-level-3-delivered-by-5034?login=false&originalUrl=https%3A%2F%2Fwww.qualhub.co.uk.mcas.ms%2Fqualification-search%2Fqualification-detail%2Ft-level-technical-qualification-in-digital-support-services-level-3-delivered-by-5034%3FMcasTsid%3D20892&McasCSRF=2a04a17a9a924bcc526b4bd772189cf149d6804c98bb8c2c08d559e394f185f9" target="_blank" class="dropdown-link">DSS Past Papers</a></li>
          <li><a href="https://www.amazon.co.uk/Digital-Level-Support-Services-Business/dp/1398346799?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3P5ROKL5A1OLE" target="_blank" class="dropdown-link">Revision Book</a></li>
          <li><a href="https://studenthub.tmc.ac.uk" class="dropdown-link">Student Hub</a></li>
          <li><a href="https://proportal.tmc.ac.uk" class="dropdown-link">ProPortal</a></li>
          <li><a href="https://grofar.com/" class="dropdown-link">GroFar</a></li>
        </ul>
      </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link">Info</a>
        <ul class="dropdown-menu">
          <li><a href="https://dsstlevel.github.io/Web/html/year1" class="dropdown-link">Examination Details</a></li>
          <li><a href="https://dsstlevel.github.io/Web/html/altontowers" class="dropdown-link">Alton Towers</a></li>
        </ul>
      </li>
    </ul>
    <ul class="navbar-list-right">
      <li class="navbar-item">
        <a href="https://dsstlevel.github.io" class="navbar-link"><i class="fa fa-home" style="font-size:20px;"></i></a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" id='darkmode-icon'><i class="fa fa-moon" style="font-size:20px;"></i></a>
      </li>
      <li class="navbar-item">
        <a class="navbar-link" id="settings-cog-icon"><i class="fa fa-cog" style="font-size:20px;"></i></a>
      </li>
    </ul>
  </nav>
<link rel="stylesheet" href="../global/g.css">
<script src="https://kit.fontawesome.com/b457945b5f.js" crossorigin="anonymous"></script>
<div class="settings-menu" id="settings-menu">
<h2>Settings</h2>
<a>Legacy Home Page</a><br>
<button id="legacybutton">Newest</button>
</div>
</div>
`
}
else {
 location='https://dsstlevel.github.io/Web/WebsiteClose.html'
}

if (localStorage.getItem("DarkMode") === "true") {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
document.getElementById('darkmode-icon').onclick = function() {
    const body = document.body;
    const DarkMode = localStorage.getItem("DarkMode");
    body.classList.toggle("dark-mode");
    if (DarkMode==="true") {
        localStorage.setItem("DarkMode", "false");
    } else {
        localStorage.setItem("DarkMode","true");
    }
}

var vis = false
document.getElementById("settings-cog-icon").onclick = function() {
  if (vis==false) {
    vis=true
    document.getElementById("settings-menu").style.display='block'
  } else {
    vis=false
    document.getElementById("settings-menu").style.display='none'
  }
}

document.getElementById("legacybutton").onclick = function() {
  if (localStorage.getItem('LegacyMain')==="true") {
    localStorage.setItem("LegacyMain","false")
    window.location="https://dsstlevel.github.io/Web/Main"
  } else {
    localStorage.setItem("LegacyMain","true")
    window.location="https://dsstlevel.github.io/Web/LegacyMain"
  }
}

if (localStorage.getItem("LegacyMain")==="true") {document.getElementById("legacybutton").textContent='Newest'} else {document.getElementById("legacybutton").textContent='Legacy'} 

document.getElementById('importantDates').innerHTML=`  const dateRN = new Date().getDay();
setInterval(function() {
  var now = new Date().getTime();
  var countDownDate = new Date('Oct 23, 2023 00:00:00').getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('EoT').innerHTML = "Unidentified"/*"End of Term<br>" + days + " Days, " + hours + ":" + minutes + ":" + seconds*/;
}, 1000);

setInterval(function() {
  var now = new Date().getTime();
  var countDownDate = new Date('Sep 11, 2023 00:00:00').getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('EoHT').innerHTML = "End of Half Term<br>" + days + " Days, " + hours + ":" + minutes + ":" + seconds;
}, 1000);

setInterval(function() {
  var now = new Date().getTime();
  var countDownDate = new Date('Sep 9, 2023 11:00:00').getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('training').innerHTML = "Training Round<br>" + days + " Days, " + hours + ":" + minutes + ":" + seconds;
}, 1000);`

document.getElementById("footer").innerHTML = `
<style>
body {background-color: #111;}
/*::-webkit-scrollbar {width:1px}*/
@media screen and (max-width: 600px) {.column {width: 100%;height: auto;}}
</style>
<div class="footer-basic">
  <footer>
    <ul class="list-inline">
        <li class="list-inline-item"><a href="https://dsstlevel.github.io/">Home</a></li>
        <li class="list-inline-item"><a href="https://dsstlevel.github.io/README.md">About</a></li>
        <li class="list-inline-item"><a href="#">Top of Page</a></li>
    </ul>
    <p class="copyright">© DM at TMC</p>
  </footer>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>function autoRefresh() {window.location = window.location.href;}setInterval('autoRefresh()', 600000);</script>
`

