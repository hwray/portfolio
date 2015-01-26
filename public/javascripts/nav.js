//var markdown = require('markdown').markdown; 

var about_button = document.getElementById("about-nav"); 
var projects_button = document.getElementById("projects-nav");
var experience_button = document.getElementById("experience-nav");  

var main_container = document.getElementById("main-container"); 

var dais_button = document.getElementById("dais-button"); 
var discoveroute_button = document.getElementById("discoveroute-button"); 
var gesturemath_button = document.getElementById("gesturemath-button"); 
var narrative_button = document.getElementById("narrative-button"); 
var tutti_button = document.getElementById("tutti-button"); 
var phonemone_button = document.getElementById("phonemone-button"); 

var current = "about"; 

var visited = {
  about: "true", 
  project_dais: "false", 
  project_discoveroute: "false", 
  project_gesturemath: "false", 
  project_narrative: "false", 
  project_tutti: "false", 
  project_phonemone: "false", 
  projects_visited: 0
}; 

var indices = {
  about: 1, 
  project_dais: 2, 
  project_discoveroute: 3, 
  project_gesturemath: 4, 
  project_narrative: 5, 
  project_tutti: 6, 
  project_phonemone: 7
};

window.onload = function() {
    var progressBar = $("#progress-inner"); 

    $(progressBar).animate({
      height: "10vh"
    }, 2000);

    $(main_container).animate({
      marginTop: "0px",
    }, 400) 
    .animate({
      opacity: "1",
    }, 1000).dequeue(); 
};

about_button.onclick = function(e) {
  e.preventDefault(); 
  if (current === "about")
    return; 

  resetState(); 

  $("#main-container").animate({
    marginTop: "+200px"
  }, {queue: false, duration: 300})
  .animate({
    opacity: 0
  }, {queue: false, duration: 300, complete: function() {
    main_container.innerHTML = ""; 
    main_container.innerHTML = '<div class="container-fluid"><div class="row row-eq-height"><div class="col-md-8"><h1 id="about-title">Developer &amp; Designer <br> of <br> Digital   <img src="images/emoji.png" alt="Joy" style="padding-left:10px;"> </h1></div><div class="col-md-4"><div class="circular-about-me"></div></div></div><div class="row"><div class="col-md-8"></div><div class="col-md-4 about-right"><a href="files/Harrison_Wray_Resume.pdf" target="_blank"><img src="images/resume.png"></a></div></div><div class="row"><div class="col-md-8"></div><div class="col-md-4 about-right"><a href="https://www.linkedin.com/in/hawray/" target="_blank"><img src="images/linkedin2.png"></a></div></div><div class="row"><div class="col-md-8"></div><div class="col-md-4 about-right"><img src="images/github.png"></div></div></div>';
    $("#main-container").animate({
      marginTop: "0px"
    }, {queue: false, duration: 300})
    .animate({
      opacity: 100
    }, {queue: false, duration: 2000}).dequeue(); 
  }}).dequeue(); 

  current = "about"; 
}

projects_button.onclick = function(e) {
  e.preventDefault(); 
  if (current === "projects")
    return; 

  $("#sidebar-projects-sub-container").fadeTo(5000, 100);

  $("#projects-nav").animate({
    top: "-=100px"
  }, 200).dequeue();

  var projects_sublist = document.getElementById("sidebar-projects-sub-container"); 
  projects_sublist.style.display = "inline-block"; 
  projects_sublist.style.opacity = "0"; 
  current = "projects"; 
}

experience_button.onclick = function(e) {
  e.preventDefault(); 
  resetState(); 

  current = "experience"; 
}

var resetState = function() {
  if (current === "projects") {
    $("#projects-nav").animate({
      top: "+=100px"
    }, 400); 
    $("#sidebar-projects-sub-container").animate({
      opacity: 0
    }, 400).dequeue(); 
    var projects_sublist = document.getElementById("sidebar-projects-sub-container"); 
    projects_sublist.style.display = "none"; 
    projects_sublist.style.opacity = "0";
  }
}

var iterateProgress = function() {
  var progressBar = $("#progress-inner"); 
  $(progressBar).animate({
    height: "+=10vh"
  }, 1500);
}

dais_button.onclick = function(e) {
  e.preventDefault(); 

  $("#main-container").animate({
    marginTop: "-200px"
  }, {queue: false, duration: 300})
  .animate({
    opacity: 0
  }, {queue: false, duration: 300, complete: function() {
    main_container.innerHTML = ""; 
    main_container.innerHTML += "<div class='container-fluid'>"
                              + "<div class='row'>"
                              + "<div class='col-md-7'>"
                              + "<h2 class='project-title'>Dais:</h2>"
                              + "<h3 class='project-subtitle'>Realtime presentation feedback and analytics for Google Glass.</h3><br /><br /><br />"
                              + "<div style='text-align:center;'>"
                              + "<a href='https://github.com/hwray/dais' target='_blank'><img src='images/github-large.png' alt='Github'></a>"
                              + "</div>"
                              + "<br /><br /><br />"
                              + "<div class='project-text'>"
                              + "Dais helps you improve your visual spread, and maintain consistent speech volume and pace.<br /><br />"
                              + "Before presenting, perform the simple 3-step calibration:<br /><br />"
                              + "<ul><li><b>Tap while looking left and then right.</b> This stores compass headings which are used to define the boundaries of the audience.<br /><br />"
                              + "<li><b>Tap and say the first sentence of your presentation.</b> This is used to determine the desired speech volume for your presentation.</li> </ul> <br /><br /><br /><br />"
                              + "During your presentation, Dais provides (optional) live micro-feedback to help improve your performance.<br /><br />"
                              + "<ul>"
                              + "<li>A <b>left/right arrow</b> indicates that you haven't looked at the other side of the audience in a while. </li><br /><br />"
                              + "<li>An <b>up arrow</b> indicates that you've been looking down at your notes for too long, and should look back up at the audience. </li> <br /><br />"
                              + "<li>A <b>'Face forward!'</b> prompt indicates that you're facing away from the audience. Useful for slide-based presentations, where it can be tempting to turn your back on your audience and read off your slides. </li><br /><br />"
                              + "<li>A <b>'Speak up!'</b> prompt indicates that the volume of your voice has fallen too far below the ideal speech threshold for your presentation. In other words: stop mumbling. </li><br /><br />"
                              + "<li>The rest of the time, Dais maintains a blank screen and stays out of your way.</li><br /><br />"
                              + "</ul><br /> <br />"
                              + "After your presentation, view analytics about your performance using Glass or the companion web app.<br /><br />"
                              + "<ul>"
                              + "<li>A heatmap of your head orientation summarizes your <b>visual spread across the audience,</b> and shows you where to focus next time.</li><br /><br />"
                              + "<li>A line graph of your voice level shows how well you maintained your <b>ideal speech volume.</b> </li><br /><br />"
                              + "</ul> <br /><br />"
                              + "</div>"
                              + "</div>"
                              + "<div class='col-md-5'>"
                              + "<img src='images/dais_1.png' alt='Dais'><br /> <br />"
                              + "<img src='images/dais_2.png' alt='Dais'><br /><br />"
                              + "<img src='images/dais_3.png' alt='Dais'><br /><br />"
                              + "<img src='images/dais_4.png' alt='Dais'><br /><br />"
                              + "<img src='images/dais_5.png' alt='Dais'><br /><br />"
                              + "<img src='images/dais_6.png' alt='Dais'><br /><br />"
                              + "<img src='images/dais_7.png' alt='Dais'><br /><br />"
                              + "<img src='images/dais_8.png' alt='Dais'><br /><br />"
                              + "<img src='images/dais_9.png' alt='Dais'><br /><br />"
                              + "</div>"
                              + "</div>"
                              + "<div class='row row-eq-height'>"
                              + "<div class='col-md-7'>"
                              + "<div class='project-text'>"
                              + "</div>"
                              + "</div>"
                              + "<div class='row row-eq-height'>"
                              + "<div class='col-md-7'>" 
                              + "<div class='project-text'>"
                              + "</div>"
                              + "</div>"
                              + "<div class='col-md-5'>"
                              + "</div>"
                              + "</div>"
                              + "</div>"; 
    $("#main-container").animate({
      marginTop: "0px"
    }, {queue: false, duration: 300})
    .animate({
      opacity: 100
    }, {queue: false, duration: 2000}).dequeue(); 
  }}).dequeue(); 

  if (visited.project_dais === "false") {
    iterateProgress(); 
    document.getElementById("dais-checkbox").src = "../images/checked-small.png";
    visited.projects_visited++; 
    visited.project_dais = "true"; 

    if (visited.projects_visited == 6) {
      document.getElementById("projects-checkbox").src ="../images/checked.png"; 
    }
  }
}

discoveroute_button.onclick = function(e) {
  e.preventDefault(); 

  if (visited.project_discoveroute === "false") {
    iterateProgress(); 
    document.getElementById("discoveroute-checkbox").src = "../images/checked-small.png";
    visited.projects_visited++; 
    visited.project_discoveroute = "true"; 

    if (visited.projects_visited == 6) {
      document.getElementById("projects-checkbox").src ="../images/checked.png"; 
    }
  }
}

gesturemath_button.onclick = function(e) {
  e.preventDefault(); 

  if (visited.project_gesturemath=== "false") {
    iterateProgress(); 
    document.getElementById("gesturemath-checkbox").src = "../images/checked-small.png";
    visited.projects_visited++; 
    visited.project_gesturemath= "true"; 

    if (visited.projects_visited == 6) {
      document.getElementById("projects-checkbox").src ="../images/checked.png"; 
    }
  }
}

narrative_button.onclick = function(e) {
  e.preventDefault(); 

  if (visited.project_narrative === "false") {
    iterateProgress(); 
    document.getElementById("narrative-checkbox").src = "../images/checked-small.png";
    visited.projects_visited++; 
    visited.project_narrative = "true"; 

    if (visited.projects_visited == 6) {
      document.getElementById("projects-checkbox").src ="../images/checked.png"; 
    }
  }
}

tutti_button.onclick = function(e) {
  e.preventDefault(); 

  if (visited.project_tutti === "false") {
    iterateProgress(); 
    document.getElementById("tutti-checkbox").src = "../images/checked-small.png";
    visited.projects_visited++; 
    visited.project_tutti = "true"; 

    if (visited.projects_visited == 6) {
      document.getElementById("projects-checkbox").src ="../images/checked.png"; 
    }
  }
}

phonemone_button.onclick = function(e) {
  e.preventDefault(); 

  if (visited.project_phonemone === "false") {
    iterateProgress(); 
    document.getElementById("phonemone-checkbox").src = "../images/checked-small.png";
    visited.projects_visited++; 
    visited.project_phonemone = "true"; 

    if (visited.projects_visited == 6) {
      document.getElementById("projects-checkbox").src ="../images/checked.png"; 
    }
  }
}