class Node {
     constructor(value) {
        this.val=value;
        this.next = null;
    }
 }

class SLL{
    constructor() {
        this.head = null;
    }
    front(){
        if (!this.head) {
            return null
        }
        return this.head.val
    }
    removeFront(){
        if(!this.head){
            return null
        }
        this.head= this.head.next
        return this.head
    }
    addFront(value){
        var newNode = new Node(value)
        newNode.next=this.head
        this.head=newNode
        return this.head
    }

    contains(value){
        var runner=this.head
        while(runner != null){
            if (runner.val ==value){
                return true
            }
            runner = runner.next
        }
        return false
    }
    
    length(){
        var runner = this.head
        var count = 0
        while (runner != null){
            count ++
            runner= runner.next
        }
        return count
    }

    display(){
        var runner = this.head
        var str=""
        while (runner != null){
            str += runner.val + " "
            runner= runner.next
        }
        return str
    }
}



var myNode1 = new Node("Reptar");
var myNode2 = new Node("Angelica");
var myNode3 = new Node("Tommy");
var sll1 = new SLL()
sll1.head = myNode1
myNode.next = myNode2
myNode.next = myNode3

var sll2 = new SLL()
console.log(sll1.front())
console.log(sll2.front())

console.log(sll1.removeFront())
console.log(sll2.removeFront())

console.log(sll1.addFront("Dil"))

console.log(sll1.length())
console.log(sll1.contains("Tommy"))
console.log(sll1.display())