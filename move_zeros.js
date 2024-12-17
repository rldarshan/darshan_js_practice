var moveZeroesToLast = function(nums) {
    result = [], count = 0;

    nums.forEach(item => {
        if (item) {
            result.push(item)
        } else {
            count++;
        }
    })
    result = result.concat(Array(count).fill(0))
    return result;
};

arr = [0,1,0,3,12]
console.log(moveZeroesToLast(arr))