/* =====================================
   ELEMENTS
===================================== */

const screens = document.querySelectorAll(".screen");

const welcome = document.getElementById("welcome");
const message = document.getElementById("message");
const loading = document.getElementById("loading");
const birthday = document.getElementById("birthday");
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const final = document.getElementById("final");

const goodBtn = document.getElementById("goodBtn");
const badBtn = document.getElementById("badBtn");

const continue1 = document.getElementById("continue1");
const nextQuestion = document.getElementById("nextQuestion");
const finalBtn = document.getElementById("finalBtn");

const loadingText = document.getElementById("loadingText");
const progress = document.querySelector(".progress");

const messageEmoji = document.querySelector("#message h2");
const replyText = document.getElementById("replyText");

const sameBtns = document.querySelectorAll(".same");
const same2Btns = document.querySelectorAll(".same2");
const catchPanda = document.getElementById("catchPanda");
const panda = document.getElementById("panda");
const pandaCounter = document.getElementById("pandaCounter");
const restartBtn = document.getElementById("restartBtn");


/* =====================================
   CHANGE SCREEN
===================================== */

function showScreen(screen){

    screens.forEach(function(item){

        item.classList.remove("active");

    });

    screen.classList.add("active");

}
/* =====================================
   HAPTIC FEEDBACK
===================================== */

function haptic(){

    if("vibrate" in navigator){

        navigator.vibrate(10);

    }

}

/* =====================================
   WELCOME
===================================== */

goodBtn.addEventListener("click",function(){

    haptic();

    messageEmoji.style.display = "none";

    replyText.innerHTML = `
    Pta Hai Chill Gurl 💅😎
    `;

    showScreen(message);

});


badBtn.addEventListener("click",function(){

    messageEmoji.style.display = "block";

    replyText.innerHTML = `
    Tu to chill wali hai...

    Bhool kaise jaati hai?👺

    Chalo...

    Mood theek karte hain.😁
    `;

    showScreen(message);

});


/* =====================================
   CONTINUE
===================================== */

continue1.addEventListener("click", function () {

    haptic();

    showScreen(loading);

    progress.style.width = "0%";

    loadingText.textContent = "Preparing Something Special...";

    setTimeout(() => {

        progress.style.width = "35%";
        loadingText.textContent = "Wrapping Your Surprise...";

    }, 700);

    setTimeout(() => {

        progress.style.width = "70%";
        loadingText.textContent = "Almost Ready...";

    }, 1500);

    setTimeout(() => {

        progress.style.width = "100%";
        loadingText.textContent = "Done!";

    }, 2500);

    setTimeout(() => {

        showScreen(birthday);

    }, 3200);

});


/* =====================================
   NEXT
===================================== */

nextQuestion.addEventListener("click",function(){

    showScreen(q1);

});
/* =====================================
   QUESTION 1
===================================== */

sameBtns.forEach(function(button){

    button.addEventListener("click",function(){

        showScreen(q2);

    });

});


/* =====================================
   QUESTION 2
===================================== */

same2Btns.forEach(function(button){

    button.addEventListener("click",function(){

        showScreen(q3);

    });

});


/* =====================================
   FINAL
===================================== */

finalBtn.addEventListener("click",function(){

    showScreen(catchPanda);

    startPandaGame();

});
/* =====================================
   CONFETTI
===================================== */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confettiPieces = [];

function launchConfetti(){

    confettiPieces=[];

    for(let i=0;i<180;i++){

        confettiPieces.push({

            x:Math.random()*canvas.width,
            y:-20,

            size:4+Math.random()*6,

            speed:3+Math.random()*6,

            vx:(Math.random()-.5)*6,

            angle:Math.random()*360,

            rotate:(Math.random()-.5)*12,

            color:[
                "#6c5ce7",
                "#00d2ff",
                "#ffffff",
                "#ffd166",
                "#ff6b81"
            ][Math.floor(Math.random()*5)]

        });

    }

    const start=Date.now();

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        confettiPieces.forEach(c=>{

            c.x+=c.vx;
            c.y+=c.speed;
            c.angle+=c.rotate;

            ctx.save();

            ctx.translate(c.x,c.y);

            ctx.rotate(c.angle*Math.PI/180);

            ctx.fillStyle=c.color;

            ctx.fillRect(
                -c.size/2,
                -c.size/2,
                c.size,
                c.size*1.8
            );

            ctx.restore();

        });

        if(Date.now()-start<3000){

            requestAnimationFrame(animate);

        }else{

            ctx.clearRect(0,0,canvas.width,canvas.height);

        }

    }

    animate();

}


/* =====================================
   TYPEWRITER
===================================== */

const finalMessage=document.getElementById("finalMessage");

const messageText=`Dear Fidak Batul 🎀

Amber tum amazing ho har baar to bolta hi hu it's not a big deal i always say facts 😁 or aj ka day kafi special hai 😁 aj koy earth ke gola per aaya tha sabko shocked 🙀 ye hoor pari kon hai 😱😈 phir journey aagye bdha phir dhere dhere kafi mature ho gyi mentally per kabhi kabhi break bhi liya jata hai always acts like maturity but kya hi jarurat hai har baar break Madam ji🤚 aj ke din tera hai khool ker ji 😁 or aagye in future u become a very independence and successful too hard tarike se or kisi ne khub kaha hai past se tum soch ker ukhad nhi sakte or future se to hn if u have time machine 💃🕺 hoga to btnana mai bhi chalunga 😁🤚 khool ker jio 😁 or jab independence hona to or khool ker jina 😁 In sha Allah Allah Apka future bhi janta hai or wo future for sure mast hoga sabko milta hai bhale past mai present mai ya future mai khushi 😁 And yes u too duniya ghumna 💃🕺 or jada bla bla keregi to utha ker fake dunga 😎😈 Yakin nhi hota sg se yaha tak ka safar 😆 it's speechless abhi bhi 😭🫠

✨`;

function typeMessage(){

    finalMessage.innerHTML="";
    document.querySelector(".tiny").classList.remove("show");

    let i=0;

    const timer=setInterval(()=>{

        if(messageText[i]==="\n"){

            finalMessage.innerHTML+="<br>";

        }else{

            finalMessage.innerHTML+=messageText[i];

        }

        i++;

        if(i>=messageText.length){

            clearInterval(timer);

            finalMessage.classList.add("done");
 document.querySelector(".tiny").classList.add("show");

        }

    },35);

}
/* ===========================
   🐼 CATCH YOURSELF
=========================== */

let pandaCaught = 0;

function randomPanda(){

    const area = document.getElementById("pandaArea");

    const maxX = area.clientWidth - 60;
    const maxY = area.clientHeight - 60;

    panda.style.left = Math.random()*maxX + "px";
    panda.style.top = Math.random()*maxY + "px";

}

function startPandaGame(){

    pandaCaught = 0;

    pandaCounter.innerHTML = "🐼 Caught : 0 / 5";

    randomPanda();

}

panda.addEventListener("click",function(){

    pandaCaught++;

    pandaCounter.innerHTML =
    "🐼 Caught : " + pandaCaught + " / 5";

    panda.style.transform = "scale(.65)";

    setTimeout(()=>{

        panda.style.transform = "scale(1)";

    },120);

    if (pandaCaught >= 5) {

    setTimeout(() => {

        showScreen(final);
        launchConfetti();
        typeMessage();
        startRain();

    }, 500);

} else {

    randomPanda();

}
});
function startRain(){

    const rain = document.getElementById("rain");

    rain.innerHTML = "";

    for(let i = 0; i < 110; i++){

        const drop = document.createElement("div");
        const depth = Math.random();

        drop.className = "drop";

        drop.style.left = (Math.random() * 120 - 10) + "%";
        drop.style.height = (25 + depth * 65) + "px";
        drop.style.width = (1 + depth * 1.5) + "px";

        drop.style.animationDuration =
            (0.55 + Math.random() * 0.65) + "s";

        drop.style.animationDelay =
            (Math.random() * 1.2) + "s";

        drop.style.opacity =
            0.12 + depth * 0.4;

        rain.appendChild(drop);
    }

    setTimeout(() => {
        rain.innerHTML = "";
    }, 20000);
}
restartBtn.addEventListener("click", function(){

    location.reload();

});