var score1 = document.querySelector('.player1');
var score2 = document.querySelector('.player2');
var plr1 = document.querySelector('.one');
var plr2 = document.querySelector('.two');
var reset = document.querySelector('.reset');
var win_point = document.querySelector('.winning_point');
var limit = document.getElementById('number');
max = 5;
finalScore1 = 0;
finalScore2 = 0;
var gameOver = false;

limit.addEventListener('change',()=>{
    win_point.textContent = limit.value;
    max = Number(limit.value);
    
})

plr1.addEventListener('click',()=>{
    if(!gameOver){
        finalScore1++ ;
        if(finalScore1 === max){
            score1.classList.add('winner');
            gameOver = true;
           
        }
            score1.textContent = finalScore1;
        
            
    }
});


plr2.addEventListener('click',()=>{
    if(!gameOver){
        finalScore2++ ;
        if(finalScore2 === max){
            score2.classList.add('winner');
            gameOver = true;
            
    }
    score2.textContent = finalScore2;
   
    }
   
    
});
reset.addEventListener('click',()=>{
    finalScore1 =0;
    finalScore2 =0;
    score1.textContent = finalScore1;
    score2.textContent = finalScore2;
    score1.classList.remove('winner');
    score2.classList.remove('winner');
    gameOver = false;

})