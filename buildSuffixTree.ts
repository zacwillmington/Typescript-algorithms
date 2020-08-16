
//Expected output
//SuffixTrie: {
//  "a": {"b": {"c": {"*": true}}},
//  "b": {"a": {"b": {"c": {"*": true}}}, "c": {"*": true}},
//  "c": {"*": true}
//}

interface TrieNode {
    [key: string]: TrieNode | boolean;
}

class SuffixTrie {

    protected endSymbol: string
    protected root: TrieNode;

    constructor(str: string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(str);
    }

    populateSuffixTrieFrom(str: string): void {
        for (let index = 0; index < str.length; index++) {
            this.suffixTreeHelper(str, index);
        }
    }

    suffixTreeHelper(strArray: string, index: number): void {
        let current: TrieNode = this.root;
        for (let j: number = index; j < strArray.length; j++) {
            let currentChar: string = strArray[j];
            if (!(currentChar in current)) {
                current[currentChar] = {};
            }
            current = current[currentChar] as TrieNode;
        }
        current[this.endSymbol] = {};
    }

}


const trie: SuffixTrie = new SuffixTrie('abc');
console.log(trie);