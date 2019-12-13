const Queue = require('./queue');
const QueueDLL = require('./queuedll.js');

function peek(queue) {
  if (!isEmpty(queue)) return queue.first.value;
  else return null;
}
function isEmpty(queue) {
  return queue.first === null;
}
function display(queue) {
  const temp = new Queue();
  if (isEmpty(queue)) return null;
  let item = queue.dequeue();
  let string = '[';

  while (item !== null && item !== undefined) {
    string += `${item}, `;
    temp.enqueue(item);
    item = queue.dequeue();
  }
  item = temp.dequeue();
  while (item !== null && item !== undefined) {
    queue.enqueue(item);
    item = temp.dequeue();
  }
  return string.substring(0, string.length - 2) + ']';
}
function squareDanceParing() {
    let men = new Queue();
    ['Frank', 'John', 'Sherlock', 'David', 'Christopher'].forEach(dude => men.enqueue(dude));

    let women = new Queue();
    ['Jane', 'Madonna', 'Beyonce'].forEach(gal => women.enqueue(gal));

    while (!isEmpty(women)) {
        console.log(`Female dancer is ${women.dequeue()}, and the male dancer is ${men.dequeue()}`)
    }
    let spares = 0;
    while (!isEmpty(men)) {
        spares++;
        men.dequeue();
    }
    console.log(`There are ${spares} male dancers waiting to dance.`)
}
function Ophidian(queue) {
  let customer = queue.dequeue();
  while (customer !== null) {
    if (Math.random() < 0.25) {
      console.log(`Sending ${customer} back to the end of the line`);
      queue.enqueue(customer);
    } else {
      console.log(`Helping ${customer}`);
    }
    customer = queue.dequeue();
  }
}
function main(){
    let starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    starTrekQ.remove('Spock');
    console.log(display(starTrekQ));

    let starTrekQ2 = new QueueDLL();
    starTrekQ2.enqueue('Kirk');
    starTrekQ2.enqueue('Spock');
    starTrekQ2.enqueue('Uhura');
    starTrekQ2.enqueue('Sulu');
    starTrekQ2.enqueue('Checkov');
    starTrekQ2.remove('Spock');
    console.log(starTrekQ2.tail.value, starTrekQ2.head.value)
    console.log(display(starTrekQ2));
  let ophidianQueue = new Queue();
  for (let i = 0; i < 20; i++) {
    ophidianQueue.enqueue(i);
  }
  Ophidian(ophidianQueue);
}
main();
