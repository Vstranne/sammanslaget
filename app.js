let buttons = document.querySelectorAll(".arrowDown");
console.log(buttons);

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let moreButton = event.target.parentNode;
    let parentDiv = moreButton.parentNode;
    console.log(parentDiv.children);
    console.log(parentDiv.children);
    parentDiv.classList.remove("visible");
    parentDiv.classList.add("invisible");
    let parentOfParent = parentDiv.parentNode;
    console.log(parentOfParent);
    parentOfParent.children[1].classList.remove("invisible");
    parentOfParent.children[1].classList.add("visible");
    parentOfParent.children[2].classList.remove("invisible");
    parentOfParent.children[2].classList.add("visible");
    parentDiv.children[0].classList.add("hidden");
    parentDiv.children[0].classList.add("hidden");
    parentDiv.children[5].classList.remove("hidden");
    console.log(event.target);
  });
});

let crossButtons = document.querySelectorAll(".cross");

crossButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event);
    let crossButton = event.target.parentNode;
    let parentDiv = crossButton.parentNode;
    parentDiv.children[0].classList.remove("invisible");
    parentDiv.children[0].classList.add("visible");
    parentDiv.children[1].classList.remove("visible");
    parentDiv.children[1].classList.add("invisible");
    parentDiv.children[2].classList.remove("visible");
    parentDiv.children[2].classList.add("invisible");
  });
});
