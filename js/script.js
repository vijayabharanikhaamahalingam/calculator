const inputValue = document.getElementById("result");
const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (inputValue.value === "NaN") {
        inputValue.value = "";
      }
      if (inputValue.value === "0") {
        inputValue.value = "";
      }
      inputValue.value += e.target.innerHTML.trim();
    });
  });
  const calculate = document
  .querySelectorAll(".operations")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      console.log(e.target.innerHTML);
      let lastValue = inputValue.value.substring(inputValue.value.length, inputValue.value.length - 1);

if (!isNaN(lastValue) && e.target.innerHTML === "=") {
    inputValue.value = eval(inputValue.value);
} else if (e.target.innerHTML === "AC") {
    inputValue.value = 0;
} else if (e.target.innerHTML === "DEL") {
    inputValue.value = inputValue.value.substring(0,inputValue.value.length - 1);
    if (inputValue.value.length == 0) {
        inputValue.value = 0;
    }
} else {
    if (!isNaN(lastValue)) {
        inputValue.value += e.target.innerHTML;
    }
}
    });
  });
  