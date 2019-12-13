const Stack = require('./stack');

class Queue {
  constructor() {
    this.main = new Stack();
    this.aux = new Stack();
  }
  enqueue(data) {
    let temp = this.main.pop();
    while (temp !== null) {
      this.aux.push(temp);
    }
    this.main.push(data);
    temp = this.aux.pop();
    while (temp !== null) {
      this.main.push(temp);
      temp = this.aux.pop();
    }
  }
  dequeue() {
    return this.main.pop();
  }
}

module.exports = Queue;
