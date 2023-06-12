const pads = document.querySelector(".pads");
const pad1 = document.getElementById("pad1");
const pad2 = document.getElementById("pad2");
const pad3 = document.getElementById("pad3");
const pad4 = document.getElementById("pad4");
const pad5 = document.getElementById("pad5");
const pad6 = document.getElementById("pad6");

function brightAnimation(){
    this.classList.add("clicked");
    setTimeout(()=>{
        this.classList.remove("clicked");
    }, 150)
}

function brilha(element, path){
    element.classList.add("clicked");
    setTimeout(()=>{
        element.classList.remove("clicked");
    }, 150)
}

function playAudio(path){
    let audio = new Audio(path);
    audio.play();
}


pad1.addEventListener("click", ()=>{
    pad1.classList.add("clicked");
    setTimeout(()=>{
        pad1.classList.remove("clicked");
    }, 150)
    playAudio("sounds/kick.wav");

});
pad2.addEventListener("click",  ()=>{
    pad2.classList.add("clicked");
    setTimeout(()=>{
        pad2.classList.remove("clicked");
    }, 150)
    playAudio("sounds/snare.wav");

});
pad3.addEventListener("click",  ()=>{
    pad3.classList.add("clicked");
    setTimeout(()=>{
        pad3.classList.remove("clicked");
    }, 150)
    playAudio("sounds/hihat.ogg");

});
pad4.addEventListener("click",  ()=>{
    pad4.classList.add("clicked");
    setTimeout(()=>{
        pad4.classList.remove("clicked");
    }, 150)
    playAudio("sounds/claps.wav");

});
pad5.addEventListener("click", brightAnimation);
pad6.addEventListener("click", brightAnimation);


function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    

    if (key === "q") {
        brilha(pad1);
        playAudio("sounds/kick.wav");
    }
    if (key === "w") {
        brilha(pad2);
        playAudio("sounds/snare.wav");
    }
    if (key === "e") {
        brilha(pad3);
        playAudio("sounds/hihat.ogg");
    }
    if (key === "a") {
        brilha(pad4);
        playAudio("sounds/claps.wav");
    }
    if (key === "s") {
        brilha(pad5);
    }
    if (key === "d") {
        brilha(pad6);
      }

  }
  
document.addEventListener("keydown", handleKeyPress);



