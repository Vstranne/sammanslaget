let buttons = document.querySelectorAll(".arrowDown");
console.log(buttons);

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.id === "arrow") {
      let moreButton = event.target.parentNode;
      let parentDiv = moreButton.parentNode;
      parentDiv.classList.remove("visible");
      parentDiv.classList.add("invisible");
      let parentOfParent = parentDiv.parentNode;
      parentOfParent.children[1].classList.remove("invisible");
      parentOfParent.children[1].classList.add("visible");
      parentOfParent.children[2].classList.remove("invisible");
      parentOfParent.children[2].classList.add("visible");
    }
    console.dir(event.target);
  });
});

let crossButtons = document.querySelectorAll(".cross");

crossButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.id === "cross") {
      let crossButton = event.target.parentNode;
      let parentDiv = crossButton.parentNode;
      parentDiv.children[0].classList.remove("invisible");
      parentDiv.children[0].classList.add("visible");
      parentDiv.children[1].classList.remove("visible");
      parentDiv.children[1].classList.add("invisible");
      parentDiv.children[2].classList.remove("visible");
      parentDiv.children[2].classList.add("invisible");
    }
  });
});
