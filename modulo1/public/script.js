var numero1 = document.querySelector('#numero1');
var numero2 = document.querySelector('#numero2');
var res = document.querySelector('#resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
document.querySelector('#calcular').addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
