
document.getElementById("footer").innerHTML = `
<style>
body {background-color: #111;}
/*::-webkit-scrollbar {width:1px}*/
@media screen and (max-width: 600px) {.column {width: 100%;height: auto;}}
</style>
<div class="footer-basic">
  <footer>
    <ul class="list-inline">
        <li class="list-inline-item"><a href="https://dsstlevel.github.io/index.html">Home</a></li>
        <li class="list-inline-item"><a href="https://dsstlevel.github.io/Web/changelog.html">Changelog</a></li>
        <li class="list-inline-item"><a href="https://dsstlevel.github.io/README.md">About</a></li>
        <li class="list-inline-item"><a href="#">Top of Page</a></li>
        <li class="list-inline-item"><a href="https://dsstlevel.github.io/Web/html/Sitemap.html">Sitemap</a></li>
    </ul>
    <p class="copyright">© DM at TMC</p>
  </footer>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>function autoRefresh() {window.location = window.location.href;}setInterval('autoRefresh()', 600000);</script>
`

function closeTime() {
  var isTrue=false
  if (new Date().getTime() > new Date('May 09, 2023 10:00:00').getTime()&&new Date().getTime() < new Date('May 09, 2023 12:30:00').getTime()) var isTrue=true
  else if (new Date().getTime() > new Date('May 10, 2023 9:00:00').getTime()&&new Date().getTime() < new Date('May 10, 2023 15:10:00').getTime()) var isTrue=true
  return isTrue
}

var WebsiteStatus=false//False = Open, True = Closed
if ((closeTime()===false&&WebsiteStatus===false)||(window.location=="https://dsstlevel.github.io/Web/Main.html"||window.location=="https://dsstlevel.github.io/index.html")) {
  document.getElementById("navigbar").innerHTML = `
  <style>
  ::-webkit-scrollbar {width: 5px;}
  ::-webkit-scrollbar-track {background: black;}
  ::-webkit-scrollbar-thumb {background: rgb(0, 51, 128);}
  ::-webkit-scrollbar-thumb:hover {background: rgb(0, 53, 96);}
  * {box-sizing: border-box;}.row {display: flex;flex-wrap: wrap;}.side {flex: 1%;background-color: rgb(159, 123, 135);color:azure;padding: 15px;}.main {flex: 70%;padding: 20px;}
  .side a {color: black;text-decoration: none;}.side a:hover {color:palegoldenrod;transition:0.2s;}
  </style>
  <div class="nav_ul">
    <ul id="nav_ul">
    <a href="https://dsstlevel.github.io/index.html"><i class="fa fa-home" style="font-size:20px;color:white"></i></a>
    <li class="dropdown">
    <a><i class="fa-solid fa-bars"> </i><i class="fa-solid fa-a"></i></a>
    <ul class="dropdown-content">
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/BusinessContext.html">Business Context</a>
      <li class="dropdown-sub">  
        <a href="https://dsstlevel.github.io/Web/html/Culture.html">Culture</a>
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/DigitalEnvironments.html">Digital Environments</a>
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/DiversityandInclusion.html">Diversity and Inclusion</a>
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/Learning.html">Learning</a>
      <li class="dropdown-sub">
        <a>Planning</a>
        <ul class="dropdown-sub-list">
        </ul></li>
      </li>
    </ul>
    </li>
    <li class="dropdown">
    <a><i class="fa-solid fa-bars"></i> <i class="fa-solid fa-b"></i></a>
    <ul class="dropdown-content">
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/Testing.html">Testing</a>
      <li class="dropdown-sub">  
        <a>Tools</a>
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/Legislation.html">Legislation</a>
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/Security.html">Security</a>
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/Data.html">Data</a>
      <li class="dropdown-sub">
      <a href="https://dsstlevel.github.io/Web/html/DigitalAnalysis.html">Digital Analysis</a>
        <ul class="dropdown-sub-list">
        </ul></li>
      </li>
    </ul>
    </li>
    <li class="dropdown">
    <a><i class="fa-solid fa-bars"></i> <i class="fa-solid fa-newspaper"></i></a>
    <ul class="dropdown-content">
      <li class="dropdown-sub">
        <a href="https://www.netacad.com/portal/learning" target="_blank">Cisco</a>
        <a href="https://dsstlevel.github.io/Web/html/codingScripts">Scripts (Quizzes)</a>
        <li class="dropdown-sub">
        <a>NCFE</a>
        <ul class="dropdown-sub-list">
          <li><a href="https://ncfe.org.uk" target="_blank">NCFE Website</a></a>
          <li><a href="https://www.qualhub.co.uk/qualification-search/qualification-detail/t-level-technical-qualification-in-digital-support-services-level-3-delivered-by-5034?login=false&originalUrl=https%3A%2F%2Fwww.qualhub.co.uk.mcas.ms%2Fqualification-search%2Fqualification-detail%2Ft-level-technical-qualification-in-digital-support-services-level-3-delivered-by-5034%3FMcasTsid%3D20892&McasCSRF=2a04a17a9a924bcc526b4bd772189cf149d6804c98bb8c2c08d559e394f185f9" target="_blank">DSS Past Papers</a></li>
          </ul></li>
        <a href="https://www.amazon.co.uk/Digital-Level-Support-Services-Business/dp/1398346799?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3P5ROKL5A1OLE">Revision Book</a>
        <li class="dropdown-sub">
        <a>TMC</a>
        <ul class="dropdown-sub-list">
          <li><a href="https://studenthub.tmc.ac.uk">Student Hub</a></li>
          <li><a href="https://proportal.tmc.ac.uk">ProPortal</a></li>
          <li><a href="https://grofar.com/">GroFar</a></li>
          </ul></li>
        </li>
    </ul>
    </li>
    <li class="dropdown">
    <a><i class="fa-solid fa-bars"></i>Info</a>
    <ul class="dropdown-content">
      <li class="dropdown-sub">
        <a href="https://dsstlevel.github.io/Web/html/year1.html">Examination Details</a>
      </li>
    </ul>
    </li>
  </div>
  `
}
else {
 location='https://dsstlevel.github.io/Web/WebsiteClose.html'
}

document.getElementById('importantDates').innerHTML=["const dateRN=new Date().getDay()",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Jun 14, 2023 13:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('paperA').innerHTML = `PaperA: ${days} Days, ${hours}:${minutes}:${seconds}`", "if (distance < 0) {clearInterval(x);document.getElementById('paperA').innerHTML = 'Exam has begun';}}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Jun 21, 2023 13:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('paperB').innerHTML = `PaperB: ${days} Days, ${hours}:${minutes}:${seconds}`",
"if (distance < 0) {clearInterval(x);document.getElementById('paperB').innerHTML = 'Exam has begun';}}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('May 09, 2023 9:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('ESP').innerHTML = `ESP: ${days} Days, ${hours}:${minutes}:${seconds}`",
"if (distance < 0) {clearInterval(x);document.getElementById('ESP').innerHTML = 'ESP has begun';}}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Mar 30, 2023 15:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('EoT').innerHTML = `End of Term: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('May 18, 2023 15:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('EoHT').innerHTML = `End of Half Term: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);", "var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Sep 09, 2023 11:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('training').innerHTML = `Training Round: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);"].join('\n')