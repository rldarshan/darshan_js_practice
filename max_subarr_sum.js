function maxSubArraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        console.log()
    }

    return maxSoFar;
}

// Example usage
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArraySum(arr);
console.log(result); // Output: 6
