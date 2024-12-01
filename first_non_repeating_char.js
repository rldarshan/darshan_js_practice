function first_non_repating_char(s){
    charobj = {}
    str = s.toLowerCase()

    for(var i=0; i<str.length; i++){
        if (charobj.hasOwnProperty(str[i])) {
            charobj[str[i]] += 1;
        } else {
            charobj[str[i]] = 1;
        }
    }

    for(let i=0; i< str.length; i++){
        if(charobj[str[i]] == 1) { 
            return s[i]
        }
    }
}

str = "sTreSS"
console.log(first_non_repating_char(str))