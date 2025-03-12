function clearDisplay(){
    document.getElementById('input-text').value = ' ';
}
function calculate(){
    let expression = document.getElementById('input-text').value;
    let result = eval(expression);
    document.getElementById('input-text').value = result;
}
function appendNumber(number) {
    document.getElementById('input-text').value += number;
}