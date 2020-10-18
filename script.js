var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    resultBtn = document.getElementById('result'),
    powBtn = document.getElementById('pow'), 
    negBtn = document.getElementById('neg'),
    sqrtBtn = document.getElementById('sqrt'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
    console.log(decimal);
    console.log(ce);
    console.log(c);
    console.log(result);
    console.log(neg); 

for (var i=0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function(e) {
    numberPress(e.target.textContent); 
    });
};

for (var i=0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e) {
        operation(e.target.textContent);
    });
};

for (var i=0; i < clearBtns.length; i++) {
    var clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e) {
        clear(e.srcElement.id);
    });
};


sqrtBtn.addEventListener('click', sqrt);

powBtn.addEventListener('click', pow);

negBtn.addEventListener('click', neg);

decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);





function numberPress(number) {
    if(MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if(display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
    
};

function operation(op) {
    console.log("operation   " + MemoryNewNumber);
    var localOperationMemory = display.value;

    if (op === '√x') {
        MemoryNewNumber = true;
        MemoryCyrrentNumber = parseFloat(Math.sqrt(localOperationMemory));
        display.value = MemoryCyrrentNumber;

    } else if (op === '+/-') {
        display.value = display.value * -1;
    } else {

    if(MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value =  MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if(MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);  
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '^') {
            MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, parseFloat(localOperationMemory));
        /* } else if (MemoryPendingOperation === '+/-') {
            display.value = display.value * -1;
        } else if (MemoryPendingOperation === '√x') {
            MemoryCurrentNumber = parseFloat(Math.sqrt(localOperationMemory)); */
        }
         else { 
            MemoryCurrentNumber = parseFloat(localOperationMemory); 
        }
        
        display.value = Math.trunc(MemoryCurrentNumber*1000000000000000)/1000000000000000;
    }
        MemoryPendingOperation = op;
    }
    
};


function decimal(argument) { 
    var localDecimalMemory = display.value;

    if(MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
       
        if (localDecimalMemory.indexOf('.') === -1 ) {
            localDecimalMemory += '.';
        };
    } 
    
    display.value = localDecimalMemory;
};

function clear(id) {
    if (id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    };

    console.log('Клик по кнопке с десятичной дробью!');
};
