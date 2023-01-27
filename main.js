let submitBtn = document.querySelector('input[type="submit"]');
let inputs = document.querySelectorAll('input[type="radio"]');
let cardFace = document.querySelector(".face");
let cardBack = document.querySelector(".back");
let result = document.querySelector(".result");
let inputValue;

submitBtn.onclick = function (e) {
  inputs.forEach((input) => {
    if (input.checked) {
      inputValue = input.value;
    }
  });
  cardFace.style.display = "none";
  cardBack.style.display = "block";
  result.innerHTML = `You selected ${inputValue} out of 5`;
};
