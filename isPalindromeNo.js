function isPalindromeNumber(num) { 
    if (num < 0) return false; 
    
    let originalNum = num; 
    let reverseNum = 0;
    
    while (num > 0) { 
        let digit = num % 10; 
        reverseNum = reverseNum * 10 + digit; 
        num = Math.floor(num / 10); 
    }
    
    return originalNum === reverseNum; 
}

// Example usage
const number = 121;
console.log(isPalindromeNumber(number)); // Output: true

const anotherNumber = 123;
console.log(isPalindromeNumber(anotherNumber)); // Output: false
