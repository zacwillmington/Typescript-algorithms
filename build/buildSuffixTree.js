//Expected output
//SuffixTrie: {
//  "a": {"b": {"c": {"*": true}}},
//  "b": {"a": {"b": {"c": {"*": true}}}, "c": {"*": true}},
//  "c": {"*": true}
//}
class SuffixTrie {
    constructor(str) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(str);
    }
    populateSuffixTrieFrom(str) {
        for (let index = 0; index < str.length; index++) {
            this.suffixTreeHelper(str, index);
        }
    }
    suffixTreeHelper(strArray, index) {
        let current = this.root;
        for (let j = index; j < strArray.length; j++) {
            let currentChar = strArray[j];
            if (!(currentChar in current)) {
                current[currentChar] = {};
            }
            current = current[currentChar];
        }
        current[this.endSymbol] = {};
    }
}
const trie = new SuffixTrie('abc');
console.log(trie);
