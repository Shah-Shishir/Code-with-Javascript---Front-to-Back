let cbs = document.querySelectorAll("input");
let verdict = document.querySelector("#verdict");

let loadThePage = () => {
    for (let i=0; i<cbs.length; i++) {
        cbs[i].checked = false;
    }
}

let checkIt = (e) => {
    let id = e.target.id;
    for (let i=0; i<cbs.length; i++) {
        let cid = cbs[i].id;
        if (id !== cid)
          cbs[i].disabled = true;
    }
    verdict.innerHTML = (id === "optionA") ? "CORRECT" : "WRONG ANSWER";
    verdict.style.color = (id === "optionA") ? "green" : "red";
}