function start() {
    document.getElementById("ans").value = 0;
    document.getElementById("end").innerHTML = ""
}

function plus() {
    let res = parseInt(document.getElementById("ans").value);
    ++res;
    document.getElementById("ans").value = res;
}

function minus() {
    let res = parseInt(document.getElementById("ans").value);
    res = (res-1) <= 0 ? 0 : --res;
    document.getElementById("ans").value = res;
}

function stop() {
    let res = document.getElementById("ans").value;

    if (res == 0)
        document.getElementById("end").innerHTML = "আপনি এখনো জিকির শুরু করেন নি।"
    else
        document.getElementById("end").innerHTML = "আলহামদুলিল্লাহ্‌, আপনি " + res + " বার জিকির করেছেন!"
}