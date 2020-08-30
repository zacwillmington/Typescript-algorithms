var input = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
// Output = [["foo"], ["flop", "olfp"], ["oy", "yo"], ["act", "cat", "tac"]];
function findAnagrams(input) {
    var sorted = {};
    // Loop through the input. At each string, sort it and see if it exists in the sorted hashMap.
    // If it does not exist in the hash map, add it.
    // If it does exits in the hashMap, push into that key's array.
    input.forEach(function (str) {
        var sortedString = str.split('').sort().join();
        if (sortedString in sorted) {
            sorted[sortedString].push(str);
        }
        else {
            sorted[sortedString] = [str];
        }
    });
    var result = Object.keys(sorted).map(function (key) { return sorted[key]; });
    return result;
}
console.log(findAnagrams(input));
