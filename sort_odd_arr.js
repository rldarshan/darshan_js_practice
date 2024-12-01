function sortArray(array) {
    sorted_arr = JSON.parse(JSON.stringify(array)).sort((a,b) => a-b)
    result = []
  
    sorted_odd_arr = []
    for(let i=0; i<sorted_arr.length; i++){
      if (sorted_arr[i] % 2 != 0){
        sorted_odd_arr.push(sorted_arr[i])
      }
    }
  
    for (let i=0;  i<array.length; i++){
      if (array[i] % 2 != 0){
        result.push(sorted_odd_arr.shift())
      } else {
        result.push(array[i])
      }
    }
  
  return result
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))