class DecisionTreeConsole {

    constructor(decisionNode) {
        this.root = decisionNode
    }

    parse() {
        this.root.print()
    }
}
module.exports = DecisionTreeConsole
