function aop(n) {
    document.getElementById('in1').value += n;
}

function cleared() {
    document.querySelector('#in1').value = "";
    document.querySelector('#in2').value = "";
}

function remove() {
    var str = document.querySelector('#in1').value;
    document.querySelector('#in1').value = str.slice(0, str.length - 1);
}

function fact() {
    var i, num, f;
    f = 1;
    num = document.querySelector("#in1").value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    document.querySelector("#in2").value = f;
}


function operate() {
    var op = document.querySelector("#in1").value;
    var opfiltered = filtersymbols(op)
    document.querySelector("#in2").value = eval(opfiltered);
}

function filtersymbols(i) {
    i = i.replace("x", "*");
    i = i.replace("^", "**");
    i = i.replace("sin", "Math.sin");
    i = i.replace("cos", "Math.cos");
    i = i.replace("tan", "Math.cos");
    i = i.replace("√", "Math.sqrt");
    i = i.replace("ln", "Math.log");
    return i;
}