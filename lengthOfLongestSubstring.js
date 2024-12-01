// chatGPT
// function longestSubstringWithoutRepeating(s) {
//     let maxLength = 0;
//     let start = 0;  // Starting point of current substring
//     let charIndexMap = new Map();  // Map to store the last index of each character
//     let longestSubstring = "";  // Variable to store the longest substring

//     for (let end = 0; end < s.length; end++) {
//         let currentChar = s[end];

//         // If the character is found in the map and is within the current window
//         if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
//             // Move the start of the window to the next character after the last occurrence
//             start = charIndexMap.get(currentChar) + 1;
//         }

//         // Update the character's latest index in the map
//         charIndexMap.set(currentChar, end);

//         // Calculate the length of the current substring
//         let currentLength = end - start + 1;

//         // Update the longest substring if the current one is longer
//         if (currentLength > maxLength) {
//             maxLength = currentLength;
//             longestSubstring = s.substring(start, end + 1);
//         }
//     }

//     return longestSubstring;
// }




// Gemini
function longestSubstringWithoutRepeating(s) {
  let maxLength = 0;
  let start = 0;
  let end = 0;
  let longestSubstring = "";
  const charSet = new Set();

  while (end < s.length) {
    if (!charSet.has(s[end])) {
      charSet.add(s[end]);
      if (end - start + 1 > maxLength) {
        maxLength = end - start + 1;
        longestSubstring = s.substring(start, end + 1);
      }
      end++;
    } else {
      charSet.delete(s[start]);
      start++;
    }
  }

  return longestSubstring;
}

// const inputString = "abcdeafgha";    //  => bcdeafgh
const inputString = 'geeksforgeeks';    //  => eksforg
console.log(longestSubstringWithoutRepeating(inputString)); // Output: 8  => bcdeafgh
