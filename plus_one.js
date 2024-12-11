var plusOne = function(digits) {
    num = Number(digits.join('')) + 1
    a = num.toString().split('').map(Number);
    return a
};

console.log(plusOne([1,2,3]))