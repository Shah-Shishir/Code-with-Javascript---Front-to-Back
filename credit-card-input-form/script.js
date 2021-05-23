const cardInput = document.querySelector(".card-input");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener('click', submitCardNumber);

let cardNumber = '';

function initialize() { 
    for (let i=0; i<12; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', 'tel');
        input.setAttribute('id', `input-id-${i}`);
        input.setAttribute('maxlength', 1);
        cardInput.appendChild(input);
    }
    const telInputs = document.querySelectorAll("input[type=tel]");
    telInputs[0].setAttribute('autofocus', true);
    for (const telInput of telInputs) {
        telInput.addEventListener("input", inputCardNumber);
    }
}

function inputCardNumber(e) {
    const id = e.srcElement.id;
    const value = e.target.value;
    let serial = +id.split('-')[2];

    if (value) {
        if (serial === 11) {
            serial = 0;
        } else {
            ++serial;
            document.querySelector(`#input-id-${serial}`).focus();
        }
    }
    
    cardNumber += e.target.value;
}

function submitCardNumber(e) {
    document.querySelector(".result").innerText = `Your card number is ${cardNumber}`;
}

initialize();