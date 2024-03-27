// char1 
var char1 = document.getElementById("char1");
var counterLR = 0,
  counterUD = 0,
  counterA = 0;
counterU = 0;
var char1SrcLR, char1SrcUD, up, indicatorLR, char1SrcA;

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowRight":
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
      break;

    case "ArrowLeft":
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
      break;

    case "ArrowUp":
      if (counterUD < 1) {
        char1.src = "images/char1-jump.gif";
        char1.style.width = "200px";
        counterUD++;
        counterU++;
        char1SrcUD = true;
        up = true;
      }
      break;

    case "ArrowDown":
      if (counterUD < 1) {
        char1.src = "images/char1-down.gif";
        char1.style.width = "150px";
        counterUD++;
        char1SrcUD = true;
      }
      break;

    case "Space":
      if (counterA < 1 && Number(char1.style.left.slice(0, -2)) <= 430) {
        char1.src = "images/char1-attack.gif";
        char1.style.width = "850px";
        char1SrcA = true;
        char1.style.bottom = "20px";
        counterA++;
        console.log("hello");
      }
      break;
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
  } else if (char1SrcA) {
    window.setTimeout(function () {
      char1.src = "images/char1-still.gif";
      char1.style.width = "142px";
      char1.style.bottom = "20px";
      char1Src = false;
      counterA = 0;
    }, 1000);
  }
});

// char2 
var char2 = document.getElementById("char2");
window.setInterval(function () {
  char2.style.right = Number(char2.style.right.slice(0, -2)) + 100 + "px";
  window.setTimeout(function () {
    char2.src = "images/char2-jump.gif";
    window.setTimeout(function () {
      char2.src = "images/char2-still.gif";
    }, 1000);
  }, 2000);
  window.setTimeout(function () {
    char2.style.right = Number(char2.style.right.slice(0, -2)) + 100 + "px";
  }, 5000);
  window.setTimeout(function () {
    char2.src = "images/char2-down.gif";
    window.setTimeout(function () {
      char2.src = "images/char2-still.gif";
    }, 1000);
  }, 7000);
  window.setTimeout(function () {
    char2.src = "images/char2-attack.gif";
    char2.style.width = "400px";
    window.setTimeout(function () {
      char2.src = "images/char2-still.gif";
      char2.style.width = "180px";
    }, 1000);
  }, 10000);
  window.setTimeout(function () {
    char2.style.right = Number(char2.style.right.slice(0, -2)) - 100 + "px";
  }, 12000);
}, 14000);
