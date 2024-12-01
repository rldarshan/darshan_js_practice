function longestUniqueSubstrLength(s) {
    let n = s.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        // Initializing all characters as not visited
        let visited = new Array(256).fill(false);

        for (let j = i; j < n; j++) {
            // If current character is visited
            // Break the loop
            if (visited[s.charCodeAt(j)] === true) {
                break;
            } else {
                // Else update the result if this window is larger,
                // and mark current character as visited.
                res = Math.max(res, j - i + 1);
                visited[s.charCodeAt(j)] = true;
            }
        }
    }
    return res;
}

const s = "geeksforgeeks";
// const s = "abcdeafgha";
console.log(longestUniqueSubstrLength(s));