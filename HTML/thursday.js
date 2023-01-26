function sayHi () {
    alert("Hi");
}
function playPause() { 
    var myVideo = document.getElementById("video1"); 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
} 
  
  function makeBig() { 
    var myVideo = document.getElementById("video1"); 
    myVideo.width = 560; 
  } 
  
  function makeSmall() { 
    var myVideo = document.getElementById("video1"); 
    myVideo.width = 320; 
  } 
  
  function makeNormal() { 
    var myVideo = document.getElementById("video1"); 
    myVideo.width = 420; 
  } 


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var x = document.getElementById("demo");
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    var x = document.getElementById("demo");
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }