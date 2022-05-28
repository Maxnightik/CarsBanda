/*
1. При нажатии кнопки START должен открыться блок main  - done
2. Должна играть музыка - done
*/

// START
start = document.querySelector("#start");
// игровое поле
main - document.querySelector("#main");
// аудио плеер
audioPlayer = document.querySelector("audio");
// ресурс музыка
source = document.querySelector("audio source");
// машинка
car = document.querySelector("#car");
// машинка врага
enemyCar = document.querySelector("#enemycar");

// начало игры
start.onclick = function () {
  // показать блок игры
  main.style.display = "block";
  // скрыть блок START
  start.style.display = "none";
  // запустить музыку
  audioPlayer.play();
  //createLine1();
  //створення доріжки 
  //createLine2();
  cyclecreateLine();
  
};

// управление машинкой
document.onkeydown = function (event) {
  console.dir(event)
    // если нажали вверх
  if (event.keyCode == 87)
   {
    if (car.offsetTop > 50){
      // если позиция игрока больше 50px
      // то двигаться вверх
      car.style.top = car.offsetTop - 10 + "px";
    }
  }
  if (event.keyCode == 83) 
  {
    
      // если позиция игрока меньше 640px
      // то двигаться вниз
      car.style.top = car.offsetTop + 10 + "px";
  }
  if (event.keyCode == 65 ) {
     // если нажали  влево
    // то двигаться влево
    car.style.left = car.offsetLeft - 10 + "px";
  }
  // если нажали вправо
  if (event.keyCode == 68) {
    // то двигаться вправо
    car.style.left = car.offsetLeft + 10 + "px";
  }
  console.dir(car)
};



// createLine();
function createLine1(){
  let lineLong  = document.createElement("div");
  lineLong.className ="line1";
  main.appendChild(lineLong);
  moveLine(lineLong);
}
function createLine2(){
  let lineShort  = document.createElement("div");
  lineShort.className ="line2";
  main.appendChild(lineShort);
  moveLine(lineShort);
}
function moveLine(line){
  timerId = setInterval(function (){
    line.style.top =  line.offsetTop + 3 + "px";
      if(line.offsetTop >880){
        line.remove();
        
      }
    
  },5)
}

function cyclecreateLine(){
  let allline = main.querySelectorAll('line1').length;
  console.dir(allline);
  if (allline<2){
    setInterval(function(){
      createLine1();
    },500)  
  }
  
  
  
}




