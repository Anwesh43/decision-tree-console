class DecisionNode {

    constructor(question, data) {
        this.children = []
        this.data = data
        this.question = question
    }

    addChild(child) {
        //const child = new DecisionNode(question, data)
        this.children.push(child)
    }

    getChildren() {
        return this.children
    }

    getChild(i) {
        return this.children[i]
    }

    printAnswer() {
        console.log(`you chose ${this.data}`)
    }

    print() {
        console.log(this.question)
        const msg = this.children.map((child, i) => `${i + 1}. ${child.data}`).join("  ")
        console.log(msg)
        process.stdin.resume()
        var input = ""
        process.stdin.on('data', (data) => {
            input = `${input}${data.toString()}`
            if (input.charAt(input.length - 1) !== '\n') {
                return
            }
            try {
                const option = parseInt(input.replace("\n", ""))
                input = ''
                if (option > 0 && option <= this.children.length) {
                    const child = this.children[option - 1]
                    if (child.question != null) {
                        child.print()
                    } else {
                        child.printAnswer()
                        process.exit()
                    }
                }
            } catch(e) {

            }
        })
        process.stdin.on('end', () => {


        })
    }
}

module.exports = DecisionNode
