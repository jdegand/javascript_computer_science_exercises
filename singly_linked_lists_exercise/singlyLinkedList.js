class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}
  
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        if(this.length === 0){
            return null;
        }
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        return curr;
    }

    isEmpty(){
        return this.length === 0;
    }

    getLength() {
        return this.length;
    }

    unshift(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head = node;
        }
        this.length++;
        return this;
      }
  
      
    push(val) {
      const node = new Node(val);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
        this.tail = node; //delete?
      }
      this.length++;
      return this;
    }
    

    insert(index, val) {
      let newNode = new Node(val); 
      if (index < 0 || index > this.length) { 
        return;
      } else {
        if (this.head === null) { 
          this.head = newNode; 
          this.tail = newNode; 
        } else {
          let prev = null; 
          let curr = this.head; 
          let currIndex = 0;
          while (currIndex < index) { 
            prev = curr; 
            curr = curr.next; 
            currIndex++;
          }
          newNode.next = curr;
          prev.next = newNode; 
        }
        this.length++;
    }
  }
  /*
  insert(val, index) {
      if (index < 0 || index > this.length) {
        return;
      }
      if (index === 0) {
        this.unshift(val);
        this.length++;
      } else {
        const node = new Node(val);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.length++;
      }
    }
  */

    /*
    insert(val,index) {
      if (index < 0 || index > this.length) {
        return;
      }
      if (index === 0) {
        this.unshift(val);
      } else {
        let prev = null; 
        let curr = this.head; 
        let currIndex = 0;
        while (currIndex < position) { 
          prev = curr; 
          curr = curr.next; 
        }
        currentIndex++;
        newNode.next = curr; 
        prev.next = newNode;
      }
      this.length++;
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
  
    remove(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
      this.length--;
      return removedNode.val;
    }
  
    /*
    removeVal(val) {
      if (this.isEmpty()) {
        return null;
      }
      if (this.head.val === val) {
        this.head = this.head.next;
        this.length--;
        return val;
      } else {
        let prev = this.head;
        while (prev.next && prev.next.val !== val) {
          prev = prev.next;
        }
        if (prev.next) {
          const removedNode = prev.next;
          prev.next = removedNode.next;
          this.length--;
          return val;
        }
      }
      return null;
    }
    */

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

    pop() {
        if (this.isEmpty()) {
          return undefined;
        }
        // could use this.tail instead?
        let prev = this.head;
        while(prev.next !== null){
          prev = prev.next
        }
        prev.next = null;
        this.length--;
        return prev.val;
    }

    contains(val) {
        if (this.isEmpty()) {
          return false;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
          if (curr.val === val) {
            return true;
          }
          curr = curr.next;
          i++;
        }
        return false;
      }
  
    find(val) {
      if (this.isEmpty()) {
        return null;
      }
      let i = 0;
      let curr = this.head;
      while (curr) {
        if (curr.val === val) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return null;
    }
  
    reverse() {
      let prev = null;
      let curr = this.head;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  
    toString() {
      if (this.isEmpty()) {
        return null;
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.val} -> `;
          curr = curr.next;
        }
        list += 'null'
        return list;
      }
    }

    shift(){
        if (this.isEmpty()) {
            return undefined;
        }
        let removedNode = this.head;
        this.head = this.head.next;
        this.length--;
        return removedNode.val;
    }

}
