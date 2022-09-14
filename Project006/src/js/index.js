const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const equals = document.querySelector('[data-equals]');
const del = document.querySelector('[data-del]');
const ac = document.querySelector('[data-ac]');

const previous_operand_text = document.querySelector('[data-previous-operand]');
const current_operand_text = document.querySelector('[data-current-operand]');

class Calculator{
    constructor(previous_operand_text, current_operand_text){
        this.previous_operand_text = previous_operand_text;
        this.current_operand_text = current_operand_text;
        this.clear();
        this.updateDisplay();
    }

    delete(){
        this.current_operand = this.current_operand.toString().slice(0, -1);
    }

    chooseOperation(operation){
        
        if (this.previous_operand != '') this.calculate();

        this.operation = operation;
        this.previous_operand = this.current_operand;
        this.current_operand = '0';
    }

    clear(){
        this.current_operand = '0';
        this.previous_operand = '';
        this.operation = undefined;
    }

    updateDisplay(){
        this.previous_operand_text.innerHTML = `${this.previous_operand} ${this.operation || ''}`;
        this.current_operand_text.innerHTML = this.current_operand;
    }

    appendNumber(number){
        if (this.current_operand.toString().includes(".") && number === '.') return;
        if (this.current_operand == 0) this.current_operand = '';

        this.current_operand = `${this.current_operand}${number}`;
    }

    calculate(){
        let result;
        const calc_previous_operand = parseFloat(this.previous_operand);
        const calc_current_operand = parseFloat(this.current_operand);

        switch(this.operation){
            case '+':
                result = calc_previous_operand + calc_current_operand;
                break;
            case '-':
                result = calc_previous_operand - calc_current_operand;
                break;
            case '÷':
                result = calc_previous_operand / calc_current_operand;
                break;  
            case '*':
                result = calc_previous_operand * calc_current_operand;
                break; 

            default: return;  
        }

        this.current_operand = result;
        this.operation = undefined;
        this.previous_operand = '';
    }
}

const calculator = new Calculator(previous_operand_text, current_operand_text);

ac.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

equals.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
});

del.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

for (const number of numbers){
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerText);
        calculator.updateDisplay();
    });
}

for (const operator of operators){
    operator.addEventListener('click', () => {
        calculator.chooseOperation(operator.innerText);
        calculator.updateDisplay();
    });
}

