
const input: string[] = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
// Output = [["foo"], ["flop", "olfp"], ["oy", "yo"], ["act", "cat", "tac"]];

function findAnagrams(input: string[]): string[][] {
    const sorted: {
        [key: string]: string[]
        //[act]: [act, cat, tac]
    } = {};

    // Loop through the input. At each string, sort it and see if it exists in the sorted hash map.
    // If it does not exist in the hash map, add it.
    // If it does exits in the hashMap, push the unsorted string into that sorted key's array.
    input.forEach(str => {
        const sortedString: string = str.split('').sort().join();
        if (sortedString in sorted) {
            sorted[sortedString].push(str);
        } else {
            sorted[sortedString] = [str];
        }
    });

    const result = Object.keys(sorted).map(key => sorted[key]);

    return result;
}

console.log(findAnagrams(input));