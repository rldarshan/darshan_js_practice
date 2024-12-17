var missingNumber = function(nums) {
    sorted_arr = nums.sort((a,b) => a-b)
    sorted_arr.push(sorted_arr.length + 1)
    count = 0;
    result = 0;

    sorted_arr.forEach(item => {
        if(item == count) {
            count +=1;
        } else {
            result = count;
        }
    })

    return result;
};

arr_1 = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,
        33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
arr_2 = [0,1]
console.log(missingNumber(arr_1));