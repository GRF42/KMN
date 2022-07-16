let scorePlayer = 0;
let scoreComp = 0;
let round = 0;
let score=scorePlayer+`:`+scoreComp;
let selectPlayer;
let selectComp;
// рандомные значения
function selectPk(){
let posibleOptions = [`rock`,`paper`,`scissors`];
function random(options){
    return options[Math.floor(Math.random()*options.length)]    
}
let Comp = random(posibleOptions);

// отображение картинки выбора ПК
const rockComp =document.createElement(`img`)
rockComp.src=`picture/rock.jpg`;
const paperComp=document.createElement(`img`)
paperComp.src=`picture/paper.jpg`;
const scissorsComp =document.createElement(`img`)
scissorsComp.src=`picture/scissors.jpg`;
if (Comp === `rock`){
document.querySelector(`.pkItemSelect`).appendChild(rockComp);
return selectComp= `rock`;
}
else if (Comp === `paper`){
    document.querySelector(`.pkItemSelect`).appendChild(paperComp);
    return selectComp=`paper`
}
else {document.querySelector(`.pkItemSelect`).appendChild(scissorsComp);
return selectComp = `scissors`};
}

// отображение выбора пользователя
function selectUser(){
const rockUser =document.createElement(`img`)
rockUser.src=`picture/rock.jpg`;
const paperUser=document.createElement(`img`)
paperUser.src=`picture/paper.jpg`;
const scissorsUser =document.createElement(`img`)
scissorsUser.src=`picture/scissors.jpg`;
document.querySelector(`#rock`).onclick =function(){
    document.querySelector(`.userItemSelect`).appendChild(rockUser)
    document.querySelector(`#paper`).disabled =true;
    document.querySelector(`#rock`).disabled =true;
    document.querySelector(`#scissors`).disabled =true;
    selectPlayer =`rock`;
    selectPk();
    game();
    seeScore();
    vic();

    
}
document.querySelector(`#scissors`).onclick =function(){
    document.querySelector(`.userItemSelect`).appendChild(scissorsUser)
    document.querySelector(`#paper`).disabled =true;
    document.querySelector(`#rock`).disabled =true;
    document.querySelector(`#scissors`).disabled =true;
    selectPlayer =`scissors`;
    selectPk();
    game();
    seeScore();
    vic();

   
}
document.querySelector(`#paper`).onclick =function(){
    document.querySelector(`.userItemSelect`).appendChild(paperUser);
    document.querySelector(`#paper`).disabled =true;
    document.querySelector(`#rock`).disabled =true;
    document.querySelector(`#scissors`).disabled =true;
    selectPlayer =`paper`;
    selectPk();
    game();
    seeScore();
    vic();
    
}}


//Сравнение
function game(){  
if (selectPlayer === `rock`) {
    if (selectComp === `scissors`) {
        scorePlayer++;
        console.log(`Ты победил`);}
    else if (selectComp === `paper`){
        scoreComp++;
        console.log(`ты проиграл`);}
    else {console.log(`ничья`)}    
    }
if (selectPlayer === `paper`){
    if (selectComp === `rock`){
        scorePlayer++;
        console.log(`Ты победил`);}
    else if (selectComp === `scissors`){
        scoreComp++;
        console.log(`ты проиграл`);}
        else {console.log(`ничья`)}   
    }  
if(selectPlayer === `scissors`){
    if (selectComp === `paper`){
        scorePlayer++;
        console.log(`Ты победил`);}
    else if (selectComp === `rock`){
        scoreComp++;
        console.log(`ты проиграл`);}
    else {console.log(`ничья`)}  }
    round ++;
    console.log(scorePlayer,scoreComp, `раунд`+` `+round);
    }
 

    // Отображение счета   
    function seeScore (){
        document.getElementById('scoreInp1').innerHTML=scorePlayer;
        document.getElementById('scoreInp2').innerHTML=scoreComp;
    }
    selectUser();
    
    //Счет
 function vic(){
    if (scorePlayer ==5){
        document.getElementById(`winPlayer1`).style.display =`block`;
    } 
    else if (scoreComp==5){
        document.getElementById(`winComp1`).style.display =`block`;
        }  }
   

document.getElementById(`but`).onclick=
function clear(){
    document.querySelector(`#paper`).disabled =false;
    document.querySelector(`#rock`).disabled =false;
    document.querySelector(`#scissors`).disabled =false;
    document.querySelector(`.userItemSelect`).firstChild.remove();
    document.querySelector(`.pkItemSelect`).firstChild.remove();
}

document.getElementById(`new`).onclick= function (){
    location.reload();    
}
document.getElementById(`new1`).onclick= function (){
    location.reload();    
}




