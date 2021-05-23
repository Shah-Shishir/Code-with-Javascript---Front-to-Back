const cardInput = document.querySelector(".card-input");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener('click', submitCardNumber);

let cardNumber = '';

function initialize() { 
    for (let i=0; i<16; i++) {
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

    if (![0,1,2,3,4,5,6,7,8,9].includes(+value)) {
        e.target.value = '';
        alert('Please enter a digit between 0 and 9');
        return;
    }

    if (value) {
        if (serial === 15) {
            serial = 0;
        } else {
            ++serial;
            document.querySelector(`#input-id-${serial}`).focus();
        }
    }
    
    cardNumber += e.target.value;
}

function submitCardNumber() {
    if (cardNumber.length < 16 || (cardNumber.length === 16 && +cardNumber === 0)) {
        alert('Please enter a valid credit card!');
        return;
    }
    document.querySelector(".result").innerText = `Your card number is ${cardNumber}`;
}

initialize();