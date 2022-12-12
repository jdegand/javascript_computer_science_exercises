class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    peek(){
        return this.first.value;
    }

    push(value){
        let node = new Node(value);
        
        if(!this.first){
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        this.size++;
        return this.size;
    }

    pop(){
        if(!this.first) {
            return undefined;
        }

        if(this.first === this.last){
            this.last = null;
        }

        let temp = this.first;
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}