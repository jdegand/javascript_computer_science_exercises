class Node {
    constructor(value) {
       this.value = value;
       this.left = null;
       this.right = null;
    }
 }
 
 class BinarySearchTree {
    constructor() {
       this.root = null;
    }
 
    isEmpty() {
       return this.root === null;
    }
 
    insertIteratively(value) {
       // you can return 'this' multiple times
       // or you can break inside the while loop and return 'this' after all checks are completed
       const newNode = new Node(value);
 
       if (this.root === null) {
          this.root = newNode;
       } else {
          let current = this.root;
          while (true) {
             if (value < current.value) {
                if (current.left === null) {
                   current.left = newNode;
                   break;
                } else {
                   current = current.left;
                }
             } else if (value > current.value) {
                if (current.right === null) {
                   current.right = newNode;
                   break;
                } else {
                   current = current.right;
                }
             }
          }
       }
       return this;
    }
 
    insertRecursively(value) {
       let newNode = new Node(value);
       if (this.isEmpty()) {
          this.root = newNode;
       } else {
          this.insertNode(this.root, newNode);
       }
 
       return this;
    }
 
    insertNode(root, newNode) {
       if (newNode.value < root.value) {
          if (root.left === null) {
             root.left = newNode;
          } else {
             this.insertNode(root.left, newNode);
          }
       } else {
          if (root.right === null) {
             root.right = newNode;
          } else {
             this.insertNode(root.right, newNode);
          }
       }
    }
 
    findIteratively(value) {
       let current = this.root;
       while (current.value !== value) {
          if (value < current.value) {
             current = current.left;
          } else {
             current = current.right;
          }
          if (current === null) {
             return undefined;
          }
       }
       return current;
    }
 
    findRecursively(value, root) {
       let current = root || this.root;
 
       if (!current) {
          return undefined;
       }
 
       if (value === current.value) {
          return current;
       }
 
       if (value < current.value) {
          if (current.left) {
             return this.findRecursively(value, current.left);
          }
          return undefined;
       } else {
          if (current.right) {
             return this.findRecursively(value, current.right);
          }
          return undefined;
       }
    }
 
 
    toArray(node = this.root) {
       let nodes = [];
       if (!node) {
          return nodes;
       }
       nodes = nodes.concat(
          ...this.toArray(node.left),
          node.value,
          ...this.toArray(node.right)
       );
 
       return nodes;
    }
 
    /*
 
     toArray(node = this.root){ 
         // need to make copy of root
         // if you use this.root in place of node - maximum call stack
 
         let arr = [];
   
         if (!node) {
             return arr;
         }
         
         if (node.left) {
             arr = arr.concat(this.toArray(node.left));
         }
         
         arr.push(node.value);
         
         if(node.right) {
             arr = arr.concat(this.toArray(node.right));
         }
         
         return arr;
     }
     */
 
    // left, root, right
    DFSInOrder() {
       let result = []
       const traverse = (node) => {
          if (node) {
             if (node.left) {
                traverse(node.left)
             }
             result.push(node.value)
             if (node.right) {
                traverse(node.right)
             }
          }
       }
       traverse(this.root)
       return result
    }
 
    //root, left, right
    DFSPreOrder() {
       let result = []
       const traverse = (node) => {
          if (node) {
             result.push(node.value)
             if (node.left) {
                traverse(node.left)
             }
             if (node.right) {
                traverse(node.right)
             }
          }
       }
       traverse(this.root)
       return result
    }
 
    // left, right, root
    DFSPostOrder() {
       let result = []
       const traverse = (node) => {
          if (node) {
             if (node.left) {
                traverse(node.left)
             }
             if (node.right) {
                traverse(node.right)
             }
          }
          result.push(node.value)
       }
       traverse(this.root)
       return result
    }
 
    // bfs
    breadthFirstSearch() {
       /* Use an optimised queue  */
       const queue = [];
       const output = [];
       queue.push(this.root);
       while (queue.length) {
          let curr = queue.shift();
          output.push(curr.value);
          if (curr.left) {
             queue.push(curr.left);
          }
          if (curr.right) {
             queue.push(curr.right);
          }
       }
       return output
    }
 
    min(root) {
       if (!root.left) {
          return root.value;
       } else {
          return this.min(root.left);
       }
    }
 
    remove(value) {
       this.root = this.removeNode(this.root, value);
    }
 
    removeNode(root, value) {
       if (root === null) {
          return root;
       }
       if (value < root.value) {
          root.left = this.removeNode(root.left, value);
       } else if (value > root.value) {
          root.right = this.removeNode(root.right, value);
       } else {
          if (!root.left && !root.right) {
             return null;
          }
          if (!root.left) {
             return root.right;
          } else if (!root.right) {
             return root.left;
          }
          root.value = this.min(root.right);
          root.right = this.removeNode(root.right, root.value);
       }
       return root;
    }
 
 
    prettyPrint(node, prefix = '', isLeft = true) {
       if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
       }
       console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
       if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
       }
    }
 }