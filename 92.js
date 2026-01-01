class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
    }
    
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

const mystack = new Stack(90);
mystack.push(34);
mystack.push(98);
mystack.push(27);
mystack.push(77);

console.log(mystack);

console.log(mystack.pop());


console.log(mystack);
