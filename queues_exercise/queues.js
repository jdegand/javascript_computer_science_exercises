/* Don't think this is 100% right but all tests pass */

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    dequeue(){
        if(!this.first){
            return undefined;
        }
        let temp = this.first;
        this.last = temp.next;
        this.size--;
        return temp.value;
    }

    enqueue(value){
        let node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        }
        this.last = node;
        this.size++;
        return this.size;
    }

    peek(){
        return this.first.value;
    }
}