function addDigits(num) {
  result = 0;

  while (num >= 10) {
    result += num % 10;
    num = parseInt(num / 10);
	console.log(num, result)
  }
  result += num;
  
  console.log("result ==",result)
  if (String(result).length > 1) {
	return addDigits(result) 
  }

  return result;
}

n = 3585656683;
console.log(addDigits(n));
