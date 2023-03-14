const start = document.querySelector(".start");
const submit = document.querySelector(".sub-btn");
const rangeInput = document.querySelector(".range");
const resultContent = document.querySelector(".text-content-holder");
const enterContent = document.querySelector(".text-content");

let user_num;
let rand_num;
let isNotZero = true;

rangeInput.addEventListener("change", (event) => {
  //   console.log(event);

  let total_attempts = 0;

  start.addEventListener("click", function () {
    const range = Number(document.querySelector(".range").value);

    // If user enter 0 in range(0 means wrong condition)
    if (range == 0) {
      isNotZero = false;
      rangeInput.remove();
      start.remove();
      const node = document.createElement("p");
      document.querySelector(".square").appendChild(node);
      node.innerText = "Choose range above 0";
      node.classList.add("rangeValue");
      return;
    }

    start.remove();
    rangeInput.remove();

    const node = document.createElement("p");
    document.querySelector(".square1").appendChild(node);
    node.innerHTML = `0 - ${range}`;
    node.classList.add("rangeValue");

    // rand_num = Math.floor(Math.random() * range + 1);
    rand_num = Math.round(Math.random() * range);
  });

  submit.addEventListener("click", () => {
    total_attempts++;

    user_num = Number(document.querySelector(".input-value").value);

    // if (user_num !== rand_num) {
    let gif = document.querySelector(".gif-img");

    if (user_num > rand_num) {
      document.querySelector(".font-c-text").innerHTML =
        "Oops Sorry!! <br> Try a Smaller Number";
      gif.setAttribute("src", `./img/notguess.gif`);
      gif.style.marginTop = "0";
    } else if (user_num < rand_num) {
      document.querySelector(".font-c-text").innerHTML =
        "Oops Sorry!! <br> Try a Bigger Number";
      gif.setAttribute("src", `./img/notguess.gif`);
      gif.style.marginTop = "0";
    }
    //wining condition
    else if (user_num == rand_num) {
      document.querySelector(".font-c-text").innerHTML = "CONGRATULATION!";
      gif.setAttribute("src", `./img/win.gif`);
      gif.style.marginTop = "0";

      document.querySelectorAll(".square").forEach((ele) => {
        ele.style.display = "none";
      });

      document.querySelector(".text-content-holder").style.display = "block";

      //inner-circle
      document.querySelector(".inner-circle").style.left = "300px";
      document.querySelector(".guess-number").innerHTML = rand_num;

      document
        .querySelector(".lock-close")
        .setAttribute("class", "material-symbols-outlined lock-close");
      document.querySelector(".lock-close").innerHTML = "lock_open";
      //attempts
      document.querySelector(".attempt").innerHTML = total_attempts;

      if (total_attempts <= 1) {
        document.querySelector(".change-rank").innerHTML = "🥇";
      } else if (total_attempts <= 2) {
        document.querySelector(".change-rank").innerHTML = "🥈";
      } else if (total_attempts <= 3) {
        document.querySelector(".change-rank").innerHTML = "🥉";
      } else if (total_attempts >= 4) {
        document.querySelector(".change-rank").innerHTML = "🎁";
      }
    }
    // }
  });
});

document
  .querySelector(".game-over-restart-square")
  .addEventListener("click", () => {
    window.location.reload();
  });
