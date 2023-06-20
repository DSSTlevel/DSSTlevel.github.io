
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
  * {box-sizing: border-box;}
  
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
        <a href="https://dsstlevel.github.io" class="navbar-link"><i class="fa fa-home" style="font-size:20px;color:rgb(0, 0, 0)"></i></a>
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
          <li><a href="https://dsstlevel.github.io/Web/altontowers" class="dropdown-link">Alton Towers</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  `
}
else {
 location='https://dsstlevel.github.io/Web/WebsiteClose.html'
}

document.getElementById('importantDates').innerHTML=["const dateRN=new Date().getDay()",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Jun 21, 2023 13:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('paperB').innerHTML = `PaperB: ${days} Days, ${hours}:${minutes}:${seconds}`",
"if (distance < 0) {clearInterval(x);document.getElementById('paperB').innerHTML = 'Exam has begun';}}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Jul 7, 2023 15:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('EoT').innerHTML = `End of Term: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);",
"var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Sep 7, 2023 00:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('EoHT').innerHTML = `End of Half Term: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);", "var x = setInterval(function() {var now = new Date().getTime();var countDownDate = new Date('Sep 09, 2023 11:00:00').getTime();var distance = countDownDate - now;var days = Math.floor(distance / (1000 * 60 * 60 * 24));var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));var seconds = Math.floor((distance % (1000 * 60)) / 1000);",
"document.getElementById('training').innerHTML = `Training Round: ${days} Days, ${hours}:${minutes}:${seconds}`}, 1000);"].join('\n')