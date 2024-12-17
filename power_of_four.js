var isPowerOfFour = function(n) {
    for (let i=0; i<=Array(20).length; i++){
        val = Math.pow(4,i)
        if(val == n) return true;
        if(val > n) return false;
    }
};

n = 16 //  => output true
// n = 1 => output true
// n = 5 => output false
console.log(isPowerOfFour(n))