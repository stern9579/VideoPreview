console.log("page loaded...");

var video = $(".myVideo");
var vid = video.find("myVideo");

function playVideo(element) {
    element.play();
}

function pauseVideo(element) {
    element.pause();
}

// using element we will ba able to tue the function to any other video. Makes the function generic.