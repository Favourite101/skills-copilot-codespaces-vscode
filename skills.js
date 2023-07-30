function calculateNumbers() {
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = document.getElementById("number3").value;
    var result = parseInt(x) + parseInt(y) + parseInt(z);
    document.getElementById("result").innerHTML = result;
}