function findEmirp(n) {
    prime_no = [];
    result = [];
    val = String(n).split("");
  
    if (n > 12) {
      for (let i = 13; i < n; i++) {
        if (isPrime(i) && isPrime(Number(String(i).split('').reverse().join('')))) {
          if (String(i).length > 2 && String(i) != Number(String(i).split('').reverse().join(''))) {
            prime_no.push(i);
          } else if (String(i).length < 3) {
            prime_no.push(i);
          }
        }
      }
      
      console.log(prime_no);
      result.push(prime_no.length);
  
      result.push(Math.max(...prime_no));
  
      result.push(sumArray(prime_no));
  
      return result;
    } else {
      return [0, 0, 0];
    }
  }
  
  function sumArray(arr) {
      return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
console.log(findEmirp(50))