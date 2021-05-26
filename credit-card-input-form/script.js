const cardInput = document.querySelector(".card-input");
const submitBtn = document.querySelector(".submit-btn");
const result = document.querySelector(".result");

submitBtn.addEventListener("click", submitCardNumber);

let cardNumber = "";

function initialize() {
  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "tel");
    input.setAttribute("id", `input-id-${i}`);
    input.setAttribute("maxlength", 1);
    cardInput.appendChild(input);
  }
  const telInputs = document.querySelectorAll("input[type=tel]");
  telInputs[0].setAttribute("autofocus", true);
  for (const telInput of telInputs) {
    telInput.addEventListener("input", inputCardNumber);
    telInput.addEventListener("keydown", clearCurrentNumber);
  }
}

function inputCardNumber(e) {
  const id = e.srcElement.id;
  const value = e.target.value;
  let serial = +id.split("-")[2];

  if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+value)) {
    e.target.value = "";
    setResultNull();
    alert("Please enter a digit between 0 and 9");
    return;
  }

  if (value) {
    cardNumber =
      cardNumber.substr(0, serial) +
      e.target.value +
      cardNumber.substr(serial + 1, 15);
    document.querySelector(`#input-id-${serial}`).value = value;
    if (serial >= 15) {
      serial = 0;
    } else {
      ++serial;
      document.querySelector(`#input-id-${serial}`).focus();
    }
  }
}

function submitCardNumber() {
  if (cardNumber[0] !== "4") {
    setResultNull();
    alert("Card number must start with 4!");
    return;
  }
  if (
    cardNumber.length < 16 ||
    (cardNumber.length === 16 && +cardNumber === 0)
  ) {
    setResultNull();
    alert("Please enter a valid credit card!");
    return;
  }
  result.innerText = `Your card number is ${cardNumber}`;
}

function clearCurrentNumber(e) {
  const id = e.srcElement.id;
  let serial = +id.split("-")[2];
  const code = e.which || e.keyCode;
  if (code === 8 || code === 229) {
    e.target.value = "";
    if (serial > 0) {
      setResultNull();
    }
  } else if (code === 37) {
    if (serial > 0) {
      const elem = document.querySelector(`#input-id-${serial - 1}`);
      elem.focus();
    }
  } else if (code === 39) {
    if (serial < 15) {
      const elem = document.querySelector(`#input-id-${serial + 1}`);
      elem.focus();
    }
  }
}

function setResultNull() {
  result.innerText = "";
}

initialize();
