let oparator = null ;
let firstNumber = null ;
let lastNumber = null ;
let hafExpression = null ;

function clearDisplay(){
    document.getElementById('input-text').value = null;
    this.oparator = null ;
    this.firstNumber = null ;
    this.lastNumber = null ;
    this.hafExpression = null ;
}
function calculate(){
    this.lastNumber = document.getElementById('input-text').value;

    let expression = `${this.hafExpression } ${this.lastNumber}`;

    let result = eval(expression);
    document.getElementById('input-text').value = result;

    this.oparator = null ;
    this.firstNumber = null ;
    this.lastNumber = null ;
    this.hafExpression = null ;
}
function appendNumber(number){
    document.getElementById('input-text').value += number;
}
function appendOparator(oparator){

    this.firstNumber = document.getElementById('input-text').value;
    this.oparator = oparator;
    
    if( this.hafExpression == null){
        this.hafExpression = `${this.firstNumber } ${this.oparator}`;
    }else{
        this.hafExpression += `${this.firstNumber } ${this.oparator}`;
    }
    document.getElementById('input-text').value = null;
}