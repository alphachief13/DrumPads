const pads = document.querySelector(".pads");
const pad1 = document.getElementById("pad1");
const pad2 = document.getElementById("pad2");
const pad3 = document.getElementById("pad3");
const pad4 = document.getElementById("pad4");
const pad5 = document.getElementById("pad5");
const pad6 = document.getElementById("pad6");
const samples = document.querySelector("#samples");
const dropdown = document.querySelector(".dropdown");
const caret = document.querySelector(".caret");
const m1 = document.querySelector("#m1");
const m2 = document.querySelector("#m2");
const m3 = document.querySelector("#m3");
let musicas = [];
let musica1 = new Audio("sounds/piano-loop.wav");
let musica2 = new Audio("sounds/piano-loop2.wav");
let musica3 = new Audio("sounds/piano-loop3.wav")
musicas.push(musica1);
musicas.push(musica2);
musicas.push(musica3);


function brightAnimation(){
    this.classList.add("clicked");
    setTimeout(()=>{
        this.classList.remove("clicked");
    }, 150)
}

function brilha(element){
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
pad5.addEventListener("click", ()=>{
    pad5.classList.add("clicked");
    setTimeout(()=>{
        pad5.classList.remove("clicked");
    }, 150)
    playAudio("sounds/cymbal.wav");

});
pad6.addEventListener("click",  ()=>{
    pad6.classList.add("clicked");
    setTimeout(()=>{
        pad6.classList.remove("clicked");
    }, 150)
    for(let i = 0; i < musicas.length; i++){
        musicas[i].pause();
        musicas[i].currentTime = 0;
    }

});


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
        playAudio("sounds/cymbal.wav");
    }
    if (key === "d") {
        brilha(pad6);
        for(let i = 0; i < musicas.length; i++){
            musicas[i].pause();
            musicas[i].currentTime = 0;
        }
      }

    if(key === "1"){
        if(musica1.paused && musica2.paused && musica3.paused){
            musica1.play();
            dropdown.style.display = "none";
        }
    }

    if(key === "2"){
        if(musica1.paused && musica2.paused && musica3.paused){
            musica2.play();
            dropdown.style.display = "none";
        }
    }

    if(key === "3"){
        if(musica1.paused && musica2.paused && musica3.paused){
            musica3.play();
            dropdown.style.display = "none";
        }
    }


  }
  
document.addEventListener("keydown", handleKeyPress);

samples.addEventListener("click", ()=>{
    if(dropdown.style.display === "block"){
        dropdown.style.display = "none";
        caret.classList.remove("girar")

    } else{
        dropdown.style.display = "block";
        caret.classList.add("girar")
    }
});

m1.addEventListener("click", ()=>{
    if(musica1.paused && musica2.paused && musica3.paused){
        musica1.play();
        dropdown.style.display = "none";
    }
});

m2.addEventListener("click", ()=>{
    if(musica1.paused && musica2.paused && musica3.paused){
        musica2.play();
        dropdown.style.display = "none";
    }
});

m3.addEventListener("click", ()=>{
    if(musica1.paused && musica2.paused && musica3.paused){
        musica3.play();
        dropdown.style.display = "none";
    }
});

