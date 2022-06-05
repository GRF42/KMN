let scorePlayer = 0;
let scoreComp = 0;
let round = 0;
function game(){
//Выбор рандомного значения
let posibleOptions = [`rock`,`paper`,`scissors`];
function random(options){
    return options[Math.floor(Math.random()*options.length)]    
}
let selectComp = random(posibleOptions);
//Выбор игрока
let inputPlayer = prompt(`твой выбор?`);
let selectPlayer = inputPlayer.toLocaleLowerCase(0); 
//Сравнение    
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
//Чтоб игра повторялась
for (scorePlayer; scorePlayer<5; ){
    game();
    if (scoreComp ==5) break;    
}
//Счет
 function generalScore(){
  if (scorePlayer ==5){
      console.log(`Красавчик,скайнет повержен!`)
  } 
  else if (scoreComp==5){
      console.log(`Компьютер выйграл`)
  }  
 }
 generalScore();



    
 
    

    


