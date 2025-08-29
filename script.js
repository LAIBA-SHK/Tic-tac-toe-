console.log("Tic Tac Toe")
let turnsound = new Audio("turn.wav")
let gameover = new Audio("gameover.wav")

let turns = "X"
let over = false;

// function to change the turn
const changeturn = () => {
    return turns === "X" ? "O" : "X";
}

// function to check win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [0,3,6],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if( boxtexts[e[0]].innerText !== "" &&
            boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
            boxtexts[e[1]].innerText === boxtexts[e[2]].innerText)
        {
        document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won";
        over = true;
        gameover.play();
        document.querySelector('.image').getElementsByTagName('img')[0].style.width= "230px"
        e.forEach(i => {
            boxtexts[i].style.backgroundColor = "#90ee90"; // light green
        });
        }
    } )
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && !over){
            boxtext.innerText= turns;
            turns =changeturn();
            turnsound.play();
            checkWin();
            if(!over){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turns;
            }
        }
    })
})

//reset logic
let reset = document.getElementById("reset"); 
reset.addEventListener('click',()=>{
    boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(element =>{
        element.innerText="";
        element.style.backgroundColor = "";
    });
    turns="X";
    over = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turns;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width= "0px"
})