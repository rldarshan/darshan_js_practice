var reverseVowels = function(s) {
    vowels = ['a', 'e', 'i', 'o', 'u']
    myVowels = []
    result = ''

    for(let i=0; i<=s.length-1; i++) {
        if(vowels.includes(s[i].toLowerCase())) {
            myVowels.push(s[i])
        }
    }

    // reverseVowels = myVowels.reverse();
    console.log("myVowels=======",myVowels)

    for(let i=0; i<=s.length-1; i++) {
        if(vowels.includes(s[i].toLowerCase())) {
            result += myVowels.pop()
        } else {
            result += s[i]
        }
    }

    return result
};

str = "leetcode"  // output => "leotcede"
str2 = "IceCreAm" // output => "AceCreIm"

console.log(reverseVowels(str))