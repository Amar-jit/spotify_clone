//Initializing var
let audioElement = new Audio('1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "overtaken", filepath: "1.mp3"}
]

//Play audio
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;   
    }
})

//List of events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progBar.value = progress;
})

progBar.addEventListener('change', ()=>{
    audioElement.currentTime = progBar.value * audioElement.duration / 100;
})

console.log(songs);