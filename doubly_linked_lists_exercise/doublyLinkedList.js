class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        } 
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        let temp = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp.val;
    }

    unshift(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp.val; // this
    }

    insert(index, val){
        if(index < 0 || index > this.length){
            return;
        }
        let node = new Node(val);
        if(index === 0){
            this.unshift(val);
        }
        if(index === this.length){
            this.push(val);
        }

        let current = this.head;
        let counter = 0;

        while(counter !== index){
            current = current.next;
            counter++;
        }

        let temp = current;
        let prev = temp.prev;

        prev.next = node;
        node.next = temp;
        node.prev = prev;
        temp.prev = node;

        this.length++;
        return this;
    }

    remove(index) {
        if(index < 0 || index > this.length){
            return;
        }
        if(index === 0){
            this.shift();
        }
        if(index === this.length - 1){
            this.pop();
        }

        let current = this.head;
        let counter = 0;

        while(counter !== index){
            current = current.next;
            counter++;
        }

        let prev = current.prev;
        let next = current.next;
        prev.next = next;
        next.prev = prev;

        this.length--;
        return this;
    }

    reverse(){
        if(!this.head){
            return undefined;
        }
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let counter = 0;
        let prev = null;
        let next;

        while(counter < this.length){
            next = node.next;
            node.prev = next;
            node.next = prev;
            prev = node;
            node = next;
            counter++;
        }
        return this;
    }

    // same get & set methods from singly linked list -> tests pass
    // are changes required? not really but you can optimize performance 
    // by searching from the tail or the head depending if the index is closer to the middle

    /*
    _get(){
    if (index < 0 || index >= this.length) {
        return null;
      }
    
      var el = null;
      var count;
    
      if (index <= Math.floor(this.length/2)) {
        count = 0;
        for (el = this.head; el !== null && count != index; el = el.next) {
          count++;
        }
      } else {
        count = this.length - 1;
        for (el = this.tail; el !== null && count != index; el = el.prev) {
          count--;
        }
      }
    
      return el;
    }
    */

    get(index) {
        if (index < 0 || index >= this.length) {
          return null;
        }
        let foundNode;
        if (index === 0) {
          foundNode = this.head;
        } else {
          let prev = this.head;
          for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
          }
          foundNode = prev.next;
        }
        return foundNode.val;
    }

    set(index, element) {
        var node = new Node(element);
    
        var currentNode = this.head;
        var previousNode;
        var currentIndex = 0;
    
        if(index > this.length){
            return;
        }
    
        if(index === 0){
            node.next = currentNode;
            this.head = node;
        } else {
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
    }

}