let gameSeq=[];
let userSeq=[];
let btns = ["grey","white","yellow","black"];
let started = false;
let level=0;
let highScore=0;
let h2= document.querySelector("h2");
let currScore=0;
let h3=document.querySelector("h3");

function updateScore(){
    currScore++;
    document.getElementById("currScore").innerText= `Current Score : ${currScore-1}`;
    
}
function Score(){
    if(highScore<currScore){
        highScore=currScore;
        document.getElementById("highScore").innerText= `Highest Score : ${highScore-1}`;
    }
     
    

    
}
  
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();

    }
});


function btnFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function levelUp(){
    
    userSeq=[];
    level++;
    
    h2.innerText= `Level ${level}`
    
    

    let randomInx= Math.floor(Math.random() *4);
    let randomColor = btns[randomInx];
    let randBtn = document.querySelector(`.${randomColor}`);
   
    gameSeq.push(randomColor);
    console.log(gameSeq);
   

    btnFlash(randBtn);
    updateScore();
    Score();
}



function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 600); 
        }
    }else{
        h2.innerHTML = `Game Over! You score was <b>${level-1}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";

        }, 150);
        
        reset();
  
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
    // let h3= document.querySelector("h3");
    

}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
    
}




function reset(){
    started=false;
    gameSeq =[];
    userSeq = [];
    level=0;
    currScore=0;
    
    
}


