function longest_palindromic_substring(s) {
    palindrom = []

    for(let i=0; i< s.length; i++){
        count = i
        substr = ''

        while(s.length){
            if(count < s.length-1) {
                count++;
            }

            if (s[i] == s[count]){
                substr = s.slice(i,count+1)

                if(substr == substr.split('').reverse().join('')){
                    palindrom.push(substr)
                }
            }

            if(count == s.length-1) break;
        }
    }

        if (palindrom.length) {
        sorted_palindrom = palindrom.sort((a, b) => b.length - a.length);
        return sorted_palindrom[0]
    }
}

s = "mylevelisveryhighinmalayalamlanguage"
console.log(longest_palindromic_substring(s)) //  malayalam