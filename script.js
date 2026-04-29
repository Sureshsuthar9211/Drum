let buttons = document.querySelectorAll(".btn");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let key = buttons[i].innerHTML;

        console.log(key);
        makeSound(key);
        buttonAnimation(key);


    });
};

document.addEventListener('keypress', (event) => {
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "q":
            console.log("press q");
            let sound1 = new Audio("sound1/acoustic-snare (2).wav");

            sound1.play();
            break;

        case "w":
            console.log("press w");
            let sound2 = new Audio("sound1/acoustic-snare.wav");
            sound2.play();
            break;
        case "e":
            console.log("press e");
            let sound3 = new Audio("sound1/clean-snare.wav");

            sound3.play();
            break;
        case "r":
            console.log("press r");
            let sound4 = new Audio("sound1/crispy-snare.wav");

            sound4.play();
            break;
        case "t":
            console.log("press t");
            let sound5 = new Audio("sound1/heavy-snare.wav");

            sound5.play();
            break;
        case "y":
            console.log("press y");
            let sound6 = new Audio("sound1/reverb-snare.wav");

            sound6.play();
            break;


            //capslock

        case "Q":
            console.log("press Q");
            let soundQ = new Audio("sound2/acp-pradyuman-garma-garam-bhosdi-made-with-voicemod_KjtAC4l6.mp3");

            soundQ.play();
            break;

        case "W":
            console.log("press W");
            let soundW = new Audio("sound2/chut-chut-made-with-voicemod_FLqFRDOF.mp3");
            soundW.play();
            break;
        case "E":
            console.log("press E");
            let soundE = new Audio("sound2/cid-abhijeet-slap-meme-made-with-voicemod_kcfqBcCC.mp3");

            soundE.play();
            break;
        case "R":
            console.log("press R");
            let soundR = new Audio("sound2/cid-copy-made-with-voicemod_7o8jCOhN.mp3");

            soundR.play();
            break;
        case "T":
            console.log("press T");
            let soundT = new Audio("sound2/cid-copy-made-with-voicemod_pNVZWLjh.mp3");

            soundT.play();
            break;
        case "Y":
            console.log("press Y");
            let soundY = new Audio("sound2/cid-made-with-Voicemod.mp3");

            soundY.play();
            break;
        default:
            console.log("Invalid key");
            let invalidSound = new Audio("sound2/myinstants-made-with-Voicemod.mp3");
            invalidSound.play();
            break;
    };

};

//Animations

function buttonAnimation(currentKey) {
    let button = document.querySelector("." + currentKey);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");

    }, 100)
}