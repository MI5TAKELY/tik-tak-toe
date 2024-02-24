let buttons=document.querySelectorAll('.game-button');
let winner=document.querySelector('.winner');
let playAgain=document.querySelector('.play-again');
let reset=document.querySelector('.reset');

let initialValue=true;
let winingPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function resetGame(){
    for (let button of buttons){
        button.disabled=false;
        button.innerText="";
        winner.classList.add("hide");
        playAgain.classList.add("hide");
    }

    // buttons.innerText="";
}

reset.addEventListener('click',resetGame);
playAgain.addEventListener('click',resetGame);

buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(initialValue==true){
            btn.innerText="X";
            initialValue=false;
            btn.disabled=true;
        }else{
            btn.innerText="O";
            initialValue=true;
            btn.disabled=true;
        }

        chechkWinner();

    });
});


const disableButton=()=>{
    for(let button of buttons){
        button.disabled=true;
    }
}

function chechkWinner(){
    winingPattern.forEach(wp=>{
        let pos1val=buttons[wp[0]].innerText;
        let pos2val=buttons[wp[1]].innerText;
        let pos3val=buttons[wp[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                winner.innerText=`Winner is ${pos1val}`;
                winner.classList.remove("hide");
                playAgain.classList.remove("hide");
                disableButton();
            }
        }
    });
}