function removeDuplicate(arr) {
    unique = []

    arr.forEach(x => {
        if(!unique.includes(x)) {
            unique.push(x)
        }
    })

    return unique;
}

console.log(removeDuplicate([1,1,2,3,3]))