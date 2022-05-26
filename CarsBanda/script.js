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
console.dir(car);
// начало игры
start.onclick = function () {
  // показать блок игры
  main.style.display = "block";
  // скрыть блок START
  start.style.display = "none";
  // запустить музыку
  audioPlayer.play();
};

// управление
document.onkeydown = function (event) {
  // если нажали w
  if (event.keyCode == 87) {
    // если позиция игрока больше 50px
    if (car.offsetTop > 50)
      // то двигаться вверх
      car.style.top = car.offsetTop - 20 + "px";
  } // если нажали s
  if (event.keyCode == 83) {
    // если позиция игрока меньше 640px
    if (car.offsetTop < 640)
      // то двигаться вниз
      car.style.top = car.offsetTop + 20 + "px";
  }
  // если нажали a
  if (event.keyCode == 68) {
    // то двигаться влево
    car.style.left = car.offsetLeft + 20 + "px";
  }
  // если нажали d
  if (event.keyCode == 65) {
    // то двигаться вправо
    car.style.left = car.offsetLeft - 20 + "px";
  }
};
