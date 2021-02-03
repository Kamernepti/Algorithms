//BST: Add
//Create an add(val) method on the BST object to add new value to the tree. This entails 
//creating a BTNode with this value and connecting it at the appropriate place in the tree. 
//Unless specified otherwise, BSTs can contain duplicate values.

class BTSNode {
    constructor (value) {
        this.val = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(value) {
        this.root = null
    }

    //methods go here
    add(value) {
        var newNode = BSTNode(value)
        if(this.root ==null){
            this.root=newNode
            return this
        }
        var runner =this.root
        while(runner != null){
            if (runner.val > newNode.val){
                if (runner.left == null){
                    runner.left = newNode
                    return this
                }
                else {
                    runner = runner.left
                }
            }
            else {
                if (runner.right == null){
                    runner.right = newNode
                    return this
                }
                runner = runner.right
            }
        }
    }
}

bst1 = new BST()
bst1.add(4).add(5)
console.log(bst1.root)
