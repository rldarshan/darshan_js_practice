var removeNthFromEnd = function(arr, n) {
    arr.reverse().splice(n-1,1)
    arr = arr.reverse()
    return arr
}

console.log(removeNthFromEnd([1,2,3,4,5,6,7,8,9], 4))
console.log(removeNthFromEnd([1,2], 1))