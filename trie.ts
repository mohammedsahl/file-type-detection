export class trieNode {
    value: string;
}

export class Trie {
    private tree: trieNode;
    constructor() {
        this.tree = new trieNode();
    }
    private _walk(keys: string[], node: trieNode, level: number): void {
        keys = keys.filter(key => key !== "value");
        for (let [index, key] of keys.entries()) {
            //Prints values with indentation
            console.log(`${"| ".repeat(level - 1)}|-> ${level}.${index + 1} ${node[key].value}`);
            
            //Recursion step
            this._walk(Object.keys(node[key]), node[key], level + 1);
        }
        return;
    }

    private _walkInsert(node: trieNode, string: string, index: number): trieNode {
        if (index === string.length - 1) {
            return (node[string[index]] = { value: string })
        } else {
            if (!node[string[index]]) {
                node[string[index]] = { value: string.slice(0, index + 1) }
            }

            node[string[index]][string[index + 1]] = {
                ...node[string[index]][string[index + 1]],
                ...this._walkInsert(node[string[index]], string, index + 1)
            }
        }

        return node[string[index]];
    }

    private _walkSearch(string: string, node: trieNode, index: number): string {
        if (!node) {
            console.error("Not there lul!");
            return "INVALID";
        }

        if (index === string.length) {
            console.log("Got em'");
            return node.value;
        } else {
            return this._walkSearch(string, node[string[index]], index + 1);
        }
    }

    public insert(string: string): void {
        this._walkInsert(this.tree, string, 0)
    }

    public search(string: string): void {
        console.log(this._walkSearch(string, this.tree, 0));
    }

    public print(): void {
        console.log("Tree");
        this._walk(Object.keys(this.tree), this.tree, 1);
    }
}

const testTrie = new Trie();
testTrie.insert("test");
testTrie.insert("teseract");
testTrie.insert("tennis");
testTrie.insert("testing");
testTrie.insert("insertion");
testTrie.insert("insert");
testTrie.insert("inseparable");
testTrie.insert("international");
testTrie.print();