class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}
function main() {
    let queue = new Queue();
    queue.enqueue('Totes7');
    queue.enqueue('Totes6');
    queue.enqueue('Totes5');
    queue.enqueue('Totes4');
    queue.enqueue('Totes3');
    queue.enqueue('Totes2');
    queue.enqueue('Totes1');
    console.log(queue.dequeue())
}
main();