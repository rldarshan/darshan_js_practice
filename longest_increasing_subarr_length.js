function longest_increasing_subarr_length(arr) {
  var start = 0,
    end = 0,
    subarr = [],
    long_arr_length = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      end = i + 2;
    } else {
      if (start < end) {
        subarr.push(arr.slice(start, end));
      }
      start = i + 1;
    }
  }

  if (end == arr.length) {
    subarr.push(arr.slice(start, end));
  }
  
  subarr.forEach((item) => {
    if (long_arr_length < item.length) {
      long_arr_length = item.length;
    }
  });
  return long_arr_length;
}

// arr = [5,8,3,7,9,1,2,3,4,5]
arr = [1, 2, 3, 4, 5, 5, 3, 4, 5, 6, 7, 8, 9, 1];
console.log(longest_increasing_subarr_length(arr));
