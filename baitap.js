function dauCong() {
    let soThuNhat = parseInt(document.getElementById("num1").value);
    let soThuHai = parseInt(document.getElementById("num2").value);
    let ketQua = soThuNhat + soThuHai;
    document.getElementById("i").innerHTML = "result Division : " + ketQua;
}

function dauTru() {
    let soThuNhat = parseInt(document.getElementById("num1").value);
    let soThuHai = parseInt(document.getElementById("num2").value);
    let ketQua = soThuNhat - soThuHai;
    document.getElementById("i").innerHTML = "result Division : " + ketQua;
}

function dauNhan() {
    let soThuNhat = parseInt(document.getElementById("num1").value);
    let soThuHai = parseInt(document.getElementById("num2").value);
    let ketQua = soThuNhat * soThuHai;
    document.getElementById("i").innerHTML = "result Division : " + ketQua;
}

function dauChia() {
    let soThuNhat = parseInt(document.getElementById("num1").value);
    let soThuHai = parseInt(document.getElementById("num2").value);
    let ketQua = soThuNhat / soThuHai;
    document.getElementById("i").innerHTML = "result Division : " + ketQua;
}
