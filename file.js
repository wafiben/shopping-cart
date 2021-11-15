var plusButtons = document.querySelectorAll(".pqt-plus");
var minusButtons = document.querySelectorAll(".pqt-minus");
var total = document.querySelector(".order_total").children[2];
var likeButtons = document.querySelectorAll(".btn");
var deleteButtons = document.querySelectorAll(".btn-delete");
for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function (event) {
    event.target.previousElementSibling.textContent++;
    let quatnities = event.target.previousElementSibling;
    let priceOfItem =
      event.target.previousElementSibling.previousElementSibling
        .previousElementSibling;
    total.textContent =
      parseInt(total.textContent) + parseInt(priceOfItem.textContent);
  });
}
for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function (event) {
    let quantities = event.target.nextElementSibling;
    let priceOfItem = event.target.previousElementSibling;
    if (parseInt(quantities.textContent) >= 1) {
      event.target.nextElementSibling.textContent--;
      total.textContent =
        parseInt(total.textContent) - parseInt(priceOfItem.textContent);
    }
  });
}
for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function () {
    if (likeButtons[i].style.backgroundColor == "red") {
      likeButtons[i].style.backgroundColor = "grey";
    } else {
      likeButtons[i].style.backgroundColor = "red";
    }
  });
}
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function (event) {
    event.target.parentElement.parentElement.remove(); 
   let priceOfItem = event.target.parentElement.previousElementSibling.nextElementSibling.children[3].children[1]
    let quantity=event.target.parentElement.previousElementSibling.nextElementSibling.children[3].children[1].nextElementSibling.nextElementSibling
    total.textContent=parseInt(total.textContent)-parseInt(priceOfItem.textContent)*parseInt(quantity.textContent)
  });
}
