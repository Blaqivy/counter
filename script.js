    const valueElement = document.getElementById("value");
    const decreaseButton = document.querySelector(".btn-decrease");
    const resetButton = document.querySelector(".btn-reset");
    const increaseButton = document.querySelector(".btn-increase");

    let counterValue = 0;

    function updateValue() {
      valueElement.textContent = counterValue;
    }

    decreaseButton.addEventListener("click", function () {
      counterValue--;
      updateValue();
    });

    resetButton.addEventListener("click", function () {
      counterValue = 0;
      updateValue();
    });

    increaseButton.addEventListener("click", function () {
      counterValue++;
      updateValue();
    });
