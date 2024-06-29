let video = document.querySelector("video")
let videoContainer = getElementById("video-container")
let controls = document.getElementById("controls");

        videoContainer.addEventListener("mouseover", function() {
            controls.style.opacity = 1; // Torna os controles visíveis
        });

        videoContainer.addEventListener("mouseout", function() {
            controls.style.opacity = 0; // Torna os controles invisíveis
        });
function retoceder(){
video.currentTime -= 5
}

function pausa(){
video.pause();
video.currentTime = 0;
}

function play (){
video.play();
}


function avanca(){
    video.currentTime +=5

}