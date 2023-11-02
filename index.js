document.getElementById('submitButton').onclick = function calc() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let sumPower = Math.pow(a, 2) + Math.pow(b, 2);
    let c = Math.sqrt(sumPower);
    document.getElementById('c').innerHTML = c;
    console.log(c);
}
