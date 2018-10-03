
var myVideo = document.getElementById("video1");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

$(document).ready(function(){
  $('.about-us-video').mouseover(function(){
    $('.about-us-video button').fadeIn();
  });
  $('.about-us-video').mouseleave(function(){
    $('.about-us-video button').fadeOut();
  });

});
