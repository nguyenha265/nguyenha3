function b() {
    let r = parseInt(document.getElementById("a").value);
    let r1 = parseInt(document.getElementById("a1").value);
    let r2 = r + r1;
    document.getElementById("i").innerHTML = "result Division : " + r2;
}

function b1() {
    let r = parseInt(document.getElementById("a").value);
    let r1 = parseInt(document.getElementById("a1").value);
    let r2 = r - r1;
    document.getElementById("i").innerHTML = "result Division : " + r2;
}

function b2() {
    let r = parseInt(document.getElementById("a").value);
    let r1 = parseInt(document.getElementById("a1").value);
    let r2 = r * r1;
    document.getElementById("i").innerHTML = "result Division : " + r2;
}

function b3() {
    let r = parseInt(document.getElementById("a").value);
    let r1 = parseInt(document.getElementById("a1").value);
    let r2 = r / r1;
    document.getElementById("i").innerHTML = "result Division : " + r2;
}
