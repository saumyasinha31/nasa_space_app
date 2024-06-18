function myfunc1() {
  var element = document.getElementById("red1");
  element.classList.add("red");
}

function myfunc3() {
  var element = document.getElementById("red2");
  element.classList.add("red");
}

function myfunc2() {
  var element = document.getElementById("green");
  element.classList.add("green");
}

function myfunc4() {
  var element = document.getElementById("red3");
  element.classList.add("red");
}

function hint1() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox1");
  element.innerText = " Observe the images  carefully";
}
function hint2() {
  var element = document.getElementById("hb1");
  element.classList.remove("image");
  element.classList.add("hintBox2");
  element.innerText = " Read the rules carefully";
}


let count = 30,
  timer = setInterval(function () {
    count--;
    if (count == 0) {
      hint1();
      myfunc2();
      clearInterval(timer);
    }
    document.querySelector("#counter").innerHTML = count;
  }, 1000);
