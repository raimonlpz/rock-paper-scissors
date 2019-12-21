let user = document.getElementsByClassName('btn');



let refresh = document.getElementById('refresh');
refresh.addEventListener('click', newGame);


user[0].addEventListener('click', displayRock);
user[1].addEventListener('click', displayPaper);
user[2].addEventListener('click', displayScissors);

 
let resultBtn = document.getElementById('refresh');
resultBtn.style.visibility = "hidden";

let elemChoosed = false;

function displayRock(){
    if(elemChoosed == false){

        let rockEmoji = document.createElement('h3');
        rockEmoji.innerHTML = '🗿 vs ? ';
        rockEmoji.setAttribute('id','rock');
        rockEmoji.setAttribute('class','emoji');
        document.body.appendChild(rockEmoji); 

   
        let buttonPlay = document.createElement('h5');
        buttonPlay.setAttribute('id','btnPlay');
        buttonPlay.innerHTML = 'PLAY!'
        document.body.appendChild(buttonPlay);

        //Location.reload();


        let choice = user[0].value;

        let btnPLAY = document.getElementById('btnPlay');
        btnPLAY.addEventListener('click', startGame(choice)); 
        
        elemChoosed = true;
    }
       
}

function displayPaper(){
    if(elemChoosed == false){
    let paperEmoji = document.createElement('h3');
    paperEmoji.innerHTML = '📄 vs ? ';
    paperEmoji.setAttribute('id','paper');
    paperEmoji.setAttribute('class','emoji');
    document.body.appendChild(paperEmoji);
    

    let buttonPlay = document.createElement('h5');
    buttonPlay.setAttribute('id','btnPlay');
    buttonPlay.innerHTML = 'PLAY!'
    document.body.appendChild(buttonPlay);


    let choice = user[1].value;

    let btnPLAY = document.getElementById('btnPlay');
    btnPLAY.addEventListener('click', startGame(choice));  

    elemChoosed = true;
    }
}



function displayScissors(){
    if(elemChoosed == false){
    let scissorsEmoji = document.createElement('h3');
    scissorsEmoji.innerHTML = '✂️ vs ? ';
    scissorsEmoji.setAttribute('id','scissor');
    scissorsEmoji.setAttribute('class','emoji');
    document.body.appendChild(scissorsEmoji);
    

    let buttonPlay = document.createElement('h5');
    buttonPlay.setAttribute('id','btnPlay');
    buttonPlay.innerHTML = 'PLAY!'
    document.body.appendChild(buttonPlay);

    let choice = user[2].value;

    let btnPLAY = document.getElementById('btnPlay');
    btnPLAY.addEventListener('click', startGame(choice));  


    elemChoosed = true;
    }
} 








function startGame(choice){
    let arrChoices = ['rock','paper','scissors']
    let userChoice;
    userChoice = choice;
    
    
    let result;
    result = Math.floor(Math.random() * 3);
    let pcChoice = arrChoices[result];



    let buttonPlay = document.getElementById('btnPlay');
    buttonPlay.innerHTML = buttonPlay.innerHTML.replace('PLAY!',` USER: <span>${userChoice.toUpperCase()}</span> | PC: <span>${pcChoice.toUpperCase()}</span>`);

    let resultBtn = document.getElementById('refresh');
    resultBtn.style.visibility = 'visible';

    let userWins = resultBtn.innerHTML.replace('PLAY AGAIN','<span>USER WINS!</span> ➩ PLAY AGAIN');
    let pcWins = resultBtn.innerHTML.replace('PLAY AGAIN','<span>PC WINS!</span> ➩ PLAY AGAIN');

    if(pcChoice == userChoice){
            resultBtn.innerHTML = resultBtn.innerHTML.replace('PLAY AGAIN','<span>NOBODY WINS!</span> ➩ PLAY AGAIN');
    } else if(userChoice == 'rock'){
        if(pcChoice == 'scissors'){
            resultBtn.innerHTML = userWins;
        } else if(pcChoice == 'paper'){
            resultBtn.innerHTML = pcWins;
        }
    } else if(userChoice == 'paper'){
        if(pcChoice == 'scissors'){
            resultBtn.innerHTML = pcWins;
        } else if(pcChoice == 'rock'){
            resultBtn.innerHTML = userWins;
        }
    } else if(userChoice == 'scissors'){
        if(pcChoice == 'rock'){
            resultBtn.innerHTML = pcWins;
        } else if(pcChoice == 'paper'){
            resultBtn.innerHTML = userWins;
        }
    } 
};


function newGame(){
    window.location.reload();
}
