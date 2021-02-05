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

    min () {
        var runner = this.root
        if (runner == null){
            return "you have nothing"
        }
        while(runner != null){
            if(runner.left == null ){
                return runner.val
            }
            runner = runner.left
        }
    }

    max () {
        var runner = this.root
        if (runner == null){
            return "you have nothing"
        }
        while(runner != null){
            if(runner.right == null ){
                return runner.val
            }
            runner = runner.right
        }
    }

    contains(value){
        var runner = this.root
        if (runner ==null){
            return false
        }
        while(runner != null){
            if (runner.val == value){
                return true
            } else{
                if(runner.val>value){
                    runner = runner.left
                }else {
                    runner = runner.right
                }
            }
            return false
        }
    }

    isEmpty(){
        if (this.root ==null){
            return true
        } else{
            return false
        }
    }
    
    Size (current_node){
        if(current_node == null){
            return 0
        }
        var leftSide = this.size(current_node.left)
        var rightSide = this.size(current_node.right)
        return 1 + leftSide + rightSide
    }

    }
}


bst1 = new BST();
bst1.add(4).add(5);
console.log(bst1.root);
console.log(bst1.min());
console.log(bst1.max());
console.log(bst1.size(bst1.root))
