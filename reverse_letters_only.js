var reverseOnlyLetters = function(s) {
    str = []
    result = ''

    for(let i=0; i<s.length; i++) {
        if(/[a-zA-Z]/.test(s[i])) {
            str.push(s[i])
        }
    }

    // reverse = str.reverse()

    for(let i=0; i<s.length; i++) {
        if(/[a-zA-Z]/.test(s[i])) {
            result += str.pop()
        } else {
            result += s[i]
        }
    }

    return result
};

str = "a-bC-dEf-ghIj"  //  Output: "j-Ih-gfE-dCba"
str2 = "Test1ng-Leet=code-Q!"   //  Output: "Qedo1ct-eeLg=ntse-T!"

console.log(reverseOnlyLetters(str2))