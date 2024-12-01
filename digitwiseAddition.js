// function digitwiseAddition(n, k) {
//   addition = "";
//   num = String(n)

//   for (let i = 0; i < k; i++) {
//     for (let j = 0; j < num.length; j++) {
//       if (num[j] == 9) {
//         addition += "10";
//       } else {
//         addition += String(parseInt(num[j]) + 1);
//       }
//     }
//     console.log(addition);
//     num = addition;
//     addition = "";
//   }

//   return num.length;
// }

function digitwiseAddition(n, k) {
  addition = "";
  num = String(n);

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[j] == 9) {
        addition += "10";
      } else {
        addition += String(parseInt(num[j]) + 1);
      }
    }
    console.log(addition);
    num = addition;
    addition = "";
  }

  return num.length;
}

console.log(digitwiseAddition(9899, 3));
