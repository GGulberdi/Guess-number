const random = Math.floor(Math.random()*25)+1; //
let point = 10;//
let checkButton = document.querySelector('.check');//
let playAgain = document.querySelector('.btnn');//
let guess = document.querySelector('.guess');//
let message = document.querySelector('.message');//
let number = document.querySelector('.number');//
let score = document.querySelector('.score');//
let highpoint = 0;
let highscore = document.querySelector('.highscore');//



 checkButton.onclick = () =>{
    console.log(random)
    if(point>1){
    if(guess.value<25 && guess.value>1){
        if(random>guess.value*1){
            message.innerHTML = 'It is low'
            point-- 
            score.innerHTML = point;
                   
        }else if(random<guess.value*1){
            message.innerHTML = 'It is high'
            point--   
            score.innerHTML = point;
                
        }else {
            message.innerHTML = 'You Won'
            document.querySelector('body').style.backgroundColor = 'green';
            number.innerHTML = random;
            if(point>highpoint){
            highpoint = point;
            highscore.innerHTML = highpoint;
            }
        }
        
    }else{
        alert('Enter number beetwen 1-20')
    }
    
    }else {
     point--
     message.innerHTML='You are looser'
     score.innerHTML = point; 
     checkButton.disabled=true;
     document.querySelector('body').style.backgroundColor = 'red';

    }
 }




  playAgain.onclick = () =>{
    if (random !== guess.value * 1 && point === 0 ||random === guess.value * 1) {
      point = 10;
      rundom = Math.floor(Math.random() * 50) + 1;
      message.innerHTML = "Start guessing";
      document.querySelector(".score").textContent = point;
      document.querySelector(".number").textContent = "?";
      document.querySelector(".guess").value = "";
      score.innerHTML =10;
      guess.value = '';
      document.querySelector("body").style.backgroundColor = "rgb(34, 34, 34)";
      checkButton.disabled=false;
    }
  }
  