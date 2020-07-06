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

    public insert(string: string): void {}

    public search(string: string): void {}

    public delete(string: string): void {}
    
    public printAll(): void {}
}