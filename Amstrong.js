function isAmstrong(value) {
    sum = 0
      val = String(value).split('')
    
      for (let i=0; i < val.length; i++){
          sum += Math.pow(Number(val[i]), val.length)
      }
    
      return sum == value
  }
  
  console.log(isAmstrong(9474))