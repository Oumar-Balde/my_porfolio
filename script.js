// menu 
let icon = document.querySelector(".icon");
let lien = document.querySelector("header ul")
icon.addEventListener('click', () => {
    lien.classList.toggle("visible")
})
// text Animation
let anim = document.querySelector(".anim")
let typewriter = new Typewriter(anim, {
    loop: true,
    delay: 95,
    deleteSpeed: 75,
    cursor: "",
})
typewriter
    .typeString("Fullstack")
    .pauseFor(400)
    .deleteChars(9)
    .typeString("<span style='color: #b2512e; display:inline;'>Javascript</span>")
    .pauseFor(400)
    .deleteChars(10)
    .typeString("<span style='color:rgb(46, 130, 178); display:inline;'>ReactJs</span>")
    .pauseFor(400)
    .deleteChars(7)
    .typeString("<span style='color:#fff; display:inline;'>PHP</span>")
    .pauseFor(400)
    .deleteChars(3)
    .typeString("<span style='color:#ad7931; display:inline;'>NodeJs</span>")
    .pauseFor(700)
    .start()

/*
const wordList = ["Fullstack", "PHP", "JavaScript"];

let listIndex = 0, wordIndex = 0;

let isPaused = false;

let element = document.querySelector(".slogan .anim");
animText()
setTimeout(() => {
   animText()
}, 0);
function animText() {
   setInterval(() => {
       if (isPaused) {
           return
       }
       if (wordIndex == wordList[listIndex].length) {
           listIndex += (listIndex + 1 == wordList.length) ? - listIndex : 1;

           wordIndex = 0;

           isPaused = true;

           let innerInterval = setInterval(() => {
               if (element.innerHTML.length == 1) {
                   setTimeout(() => {
                       isPaused = false;
                       clearInterval(innerInterval);
                   }, 300);
               }
               else {
                   setTimeout(() => {
                       element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 2) + "|";

                   }, 400);
               }
           }, 150);
       }
       else {
           wordIndex += 1;
           element.innerHTML = wordList[listIndex].substring(0, wordIndex) + " |";
       }
   }, 200);
}
*/