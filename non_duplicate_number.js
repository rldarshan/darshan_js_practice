function non_duplicate(arr) {
    result = 0;

    arr.forEach(x => {
        if(arr.lastIndexOf(x) == arr.indexOf(x)) {
            result = x
        }
    })

    return result
}

console.log(non_duplicate([4,1,2,1,2]))