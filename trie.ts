class trieNode {
    value: string;
}

class Trie {
    private tree: any;
    constructor() {
        this.tree = {};
    }
    private _walk(keys: string[], node: trieNode, level: number): void {
        keys = keys.filter(key => key !== "value");
        for (const [index, key] of keys.entries()) {
            //Prints values with indentation
            console.log(`${"\t".repeat(level - 1)} -> ${level}.${index + 1} ${node[key].value}`);
            
            //Recursion step
            this._walk(Object.keys(node[key]), node[key], level + 1);
        }
        return;
    }

    private _walkInsert(node: trieNode, string: string, index: number): trieNode {
        if (index === string.length - 1) {
            return (node[string[index]] = {
                value: string
            })
        } else {
            if (!node[string[index]]) {
                node[string[index]]
            }
        }
    }

    private _walkSearch(string: string, node: trieNode, index: number): void {}

    public insert(string: string): void {}

    public search(string: string): void {}

    public delete(string: string): void {}
    
    public printAll(): void {}
}