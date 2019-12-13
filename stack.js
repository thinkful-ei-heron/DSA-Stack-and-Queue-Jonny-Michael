class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    this.top = new _Node(data, this.top);
  }
  pop() {
    const temp = this.top;
    if (temp === null) return null;
    this.top = temp.next;
    return temp.data;
  }
}

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

module.exports = Stack;
