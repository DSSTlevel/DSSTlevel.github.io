function closeTime() {
  var isTrue=false
  if (new Date().getTime() > new Date('Jun 14, 2023 13:00:00').getTime()&&new Date().getTime() < new Date('Jun 14, 2023 15:00:00').getTime()) var isTrue=true
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
              <li><a href="https://dsstlevel.github.io/Year1/PaperA/BusinessContext" class="dropdown-link">Business Context</a></li>
              <li><a href="https://dsstlevel.github.io/Year1/PaperA/Culture" class="dropdown-link">Culture</a></li>
              <li><a href="https://dsstlevel.github.io/Year1/PaperA/DigitalEnvironments" class="dropdown-link">Digital Environments</a></li>
              <li><a href="https://dsstlevel.github.io/Year1/PaperA/DiversityandInclusion" class="dropdown-link">Diversity and Inclusion</a></li>
              <li><a href="https://dsstlevel.github.io/Year1/PaperA/BusinessContext" class="dropdown-link">Learning</a></li>
              <li><a href="https://dsstlevel.github.io/Year1/PaperA/Planning" class="dropdown-link">Planning</a></li>
            </ul>
        </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link"><i class="fa-solid fa-bars"></i> <i class="fa-solid fa-b"></i></a>
        <ul class="dropdown-menu">
          <li><a href="https://dsstlevel.github.io/Year1/PaperB/Testing" class="dropdown-link">Testing</a></li>
          <li><a href="https://dsstlevel.github.io/Year1/PaperB/Tools" class="dropdown-link">Tools</a></li>
          <li><a href="https://dsstlevel.github.io/Year1/PaperB/Legislation" class="dropdown-link">Legislation</a></li>
          <li><a href="https://dsstlevel.github.io/Year1/PaperB/Security" class="dropdown-link">Security</a></li>
          <li><a href="https://dsstlevel.github.io/Year1/PaperB/Data" class="dropdown-link">Data</a></li>
          <li><a href="https://dsstlevel.github.io/Year1/PaperB/DigitalAnalysis" class="dropdown-link">Digital Analysis</a></li>
        </ul>
      </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link"><i class="fa-solid fa-bars"></i> <i class="fa-solid fa-newspaper"></i></a>
        <ul class="dropdown-menu">
          <li><a href="https://www.netacad.com/portal/learning" target="_blank" class="dropdown-link">Cisco</a></li>
          <li><a href="https://dsstlevel.github.io/Others/codingScripts" class="dropdown-link">Scripts (Quizzes)</a></li>
          <li><a href="https://ncfe.org.uk" target="_blank" class="dropdown-link">NCFE Website</a></li>
          <li><a href="https://www.qualhub.co.uk/qualification-search/qualification-detail/t-level-technical-qualification-in-digital-support-services-level-3-delivered-by-5034?login=false&originalUrl=https%3A%2F%2Fwww.qualhub.co.uk.mcas.ms%2Fqualification-search%2Fqualification-detail%2Ft-level-technical-qualification-in-digital-support-services-level-3-delivered-by-5034%3FMcasTsid%3D20892&McasCSRF=2a04a17a9a924bcc526b4bd772189cf149d6804c98bb8c2c08d559e394f185f9" target="_blank" class="dropdown-link">DSS Past Papers</a></li>
          <li><a href="https://www.amazon.co.uk/Digital-Level-Support-Services-Business/dp/1398346799?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3P5ROKL5A1OLE" target="_blank" class="dropdown-link">Revision Book</a></li>
          <li><a href="https://studenthub.tmc.ac.uk" class="dropdown-link">Student Hub</a></li>
          <li><a href="https://proportal.tmc.ac.uk" class="dropdown-link">ProPortal</a></li>
          <li><a href="https://grofar.com/" class="dropdown-link">GroFar</a></li>
          <li><a href="https://www.tmc.ac.uk/media/filer_public/1b/e9/1be9396f-8969-4de6-9660-97c26bc6dab9/tmc-ucen-term-dates-2023-24.pdf" class="dropdown-link">Term Dates</a></li>
        </ul>
      </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link">Info</a>
        <ul class="dropdown-menu">
          <li><a href="https://dsstlevel.github.io/Others/year1" class="dropdown-link">Examination Details</a></li>
          <li><a href="https://dsstlevel.github.io/Others/altontowers" class="dropdown-link">Alton Towers</a></li>
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
 location='https://dsstlevel.github.io/Others/WebsiteClose.html'
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
    window.location="https://dsstlevel.github.io/Home/homepage"
  } else {
    localStorage.setItem("LegacyMain","true")
    window.location="https://dsstlevel.github.io/Home/legacymain"
  }
}

if (localStorage.getItem("LegacyMain")==="true") {document.getElementById("legacybutton").textContent='Newest'} else {document.getElementById("legacybutton").textContent='Legacy'} 

document.getElementById("footer").innerHTML = `
<footer>
  <h1 style="color:rgb(0, 160, 205)">DSS T-Level Website</h1>
  <div class="bigfootercontent">
      <ul>
          <li><h2>Key stuff</h2></li>
          <li><a href="https://dsstlevel.github.io/">Home</a></li>
          <li><a href="https://dsstlevel.github.io/README.md">About</a></li>
          <li><a href="https://dsstlevel.github.io/LICENSE.md">Website License</a></li>
      </ul>
      <ul>
          <li><h2>Off-Topic</h2></li>
          <li><a href="https://dsstlevel.github.io/Others/altontowers">Alton Towers</a></li>
          <li><a href="https://dsstlevel.github.io/Images/OGLook.png">Original Look</a></li>
          <li><a href="https://dsstlevel.github.io/Others/codingScripts">Coding Scripts</a></li>
          <li><a href="#">Top of the page</a></li>
      </ul>
  </div>
</footer>
`


