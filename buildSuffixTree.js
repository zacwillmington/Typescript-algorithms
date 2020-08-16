//Expected output
//SuffixTrie: {
//  "a": {"b": {"c": {"*": true}}},
//  "b": {"a": {"b": {"c": {"*": true}}}, "c": {"*": true}},
//  "c": {"*": true}
//}
var SuffixTrie = /** @class */ (function () {
    function SuffixTrie(str) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(str);
    }
    SuffixTrie.prototype.populateSuffixTrieFrom = function (str) {
        for (var index = 0; index < str.length; index++) {
            this.suffixTreeHelper(str, index);
        }
    };
    SuffixTrie.prototype.suffixTreeHelper = function (strArray, index) {
        var current = this.root;
        for (var j = index; j < strArray.length; j++) {
            var currentChar = strArray[j];
            if (!(currentChar in current)) {
                current[currentChar] = {};
            }
            current = current[currentChar];
        }
        current[this.endSymbol] = {};
    };
    return SuffixTrie;
}());
var trie = new SuffixTrie('abc');
console.log(trie);
