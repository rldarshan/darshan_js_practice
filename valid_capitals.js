var detectCapitalUse = function(word) {
    lower = word.toLowerCase()
    upper = word.toUpperCase()
    capitalized = word.slice(0,1).toUpperCase() + word.slice(1,).toLowerCase()

    // console.log(word == lower, word == upper, word == capitalized)

    if (word == lower || word == upper || word == capitalized) { 
        return true;
    } else {
        return false;
    }
};

str1 = "USA" // output => true
str2 = "FlaG" // output => false
str3 = "Google" // output => true
str4 = "leetcode" // output => true

console.log(detectCapitalUse(str2))