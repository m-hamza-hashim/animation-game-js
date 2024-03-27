var char1 = document.getElementById("char1");
var counterLR = 0,
  counterUD = 0,
  counterA = 0;
  counterU = 0;
var char1SrcLR, char1SrcUD, up, indicatorLR, char1SrcA;

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    if (counterLR < 1) {
      char1.src = "images/char1-right.gif";
      char1.style.width = "150px";
      counterLR++;
      char1SrcLR = true;
      indicatorLR = true;
      char1moving = true;
    }
    if (Number(char1.style.left.slice(0, -2)) <= 1153) {
      char1.style.left = Number(char1.style.left.slice(0, -2)) + 10 + "px";
    }
  } else if (event.code === "ArrowLeft") {
    if (counterLR < 1) {
      char1.src = "images/char1-right.gif";
      counterLR++;
      char1.style.width = "150px";
      char1SrcLR = true;
      indicatorLR = true;
      char1moving = true;
    }
    if (Number(char1.style.left.slice(0, -2)) >= 23) {
      char1.style.left = Number(char1.style.left.slice(0, -2)) - 10 + "px";
    }
  } else if (event.code === "ArrowUp") {
    if (counterUD < 1) {
      char1.src = "images/char1-jump.gif";
      char1.style.width = "200px";
      counterUD++;
      counterU++;
      char1SrcUD = true;
      up = true;
    }
  } else if (event.code === "ArrowDown") {
    if (counterUD < 1) {
      char1.src = "images/char1-down.gif";
      char1.style.width = "150px";
      counterUD++;
      char1SrcUD = true;
    }
  }
  else if (event.code === "Space") {
    if (counterA < 1 && Number(char1.style.left.slice(0, -2)) <= 430
    )
     {
        char1.src = "images/char1-attack.gif";
        char1.style.width = "850px";
        char1SrcA = true;
        char1.style.bottom = "20px";
        counterA++;
        console.log("hello");
    }
  }
});

document.addEventListener("keyup", function () {
  if (char1SrcLR) {
    char1.src = "images/char1-still.gif";
    char1.style.width = "142px";
    counterLR = 0;
    char1SrcLR = false;
    indicatorLR = false;
    char1moving = false;
  } else if (char1SrcUD) {
    window.setTimeout(function () {
      if (!indicatorLR) {
        char1.src = "images/char1-still.gif";
        char1.style.width = "142px";
        if (
          counterU > 1 &&
          Number(char1.style.left.slice(0, -2)) <= 1153 &&
          up
        ) {
          char1.style.left = Number(char1.style.left.slice(0, -2)) + 47 + "px";
        } else if (
          counterU <= 1 &&
          Number(char1.style.left.slice(0, -2)) <= 1153 &&
          up
        ) {
          char1.style.left = Number(char1.style.left.slice(0, -2)) + 70 + "px";
        }
        char1SrcUD = false;
        counterUD = 0;
        up = false;
      } else {
        counterUD = 0;
      }
    }, 500);
  }
  else if (char1SrcA) {
    window.setTimeout(function () {
        char1.src = "images/char1-still.gif";
        char1.style.width = "142px";
        char1.style.bottom = "20px";
        char1Src = false;
        counterA = 0;
    }, 1000);
  }
});
