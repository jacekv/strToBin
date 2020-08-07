const decimal = new RegExp('^[1-9][0-9]*');

function oddsToOne(s) {
    if (
        s.endsWith('1') ||
        s.endsWith('3') ||
        s.endsWith('5') ||
        s.endsWith('7') ||
        s.endsWith('9'))
    { 
        return 1;
    }
    return 0; 
} 

function divByTwo(str) { 
    let newS = '';       
    let add = 0;
    let newDigit;
    [...str].forEach(chr => {
        newDigit = Math.floor((chr.charCodeAt() - '0'.charCodeAt()) / 2) + add;
        newS = newS.concat(newDigit.toString());
        // 5 here, because 10 / 2 = 5
        // 13 / 2 = (10 + 3) / 2 = 10 / 2 + 3 / 2
        add = oddsToOne(chr) * 5;
    });

    if (newS != '0' && newS.startsWith('0')){
        newS = newS.slice(1);
    }
    return newS;
}

function TypeNotSupportedException(message) {
    this.message = message;
    this.name = 'TypeNotSupportedException';
}

function InvalidInputException(message) {
    this.message = message;
    this.name = 'InvalidInputException';
}

/**
 * Takes a decimal number as a string and converts it to a binary string or
 * array representation.
 * @param {string} str - Decimal number as string
 * @param {number} type - Type for output. 0 is string, anything else is array
 */
function strToBin(str, type=0) {
    if (!decimal.test(str)) {
        throw new InvalidInputException('Only positive decimal numbers are allowed')
    }
    let stack;
    if (type === 1) {
        stack = [];
    } else if (type === 0) {
        stack = '';
    } else {
        throw new TypeNotSupportedException(`Type ${type} is not supported`)
    }
    if (str === '0') {
        stack = '0';
    } else {
        while (str !== '0') {
            if (type) {
                stack.unshift(oddsToOne(str));
            } else {
                stack = `${oddsToOne(str).toString()}${stack}`;
            }
            str = divByTwo(str);
        }
    }
    return stack;    
}

module.exports = {
    strToBin,
}