const Stack = require('./stack');

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  let temp = new Stack();
  let top = starTrek.pop();
  while (top !== null && top !== 'McCoy') {
    temp.push(top);
    top = starTrek.pop();
  }
  while (!isEmpty(temp)) {
    starTrek.push(temp.pop());
  }
  display(starTrek);
}

function peek(stack) {
  const top = stack.pop();
  stack.push(top);
  return top;
}

function isEmpty(stack) {
  return peek(stack) === null;
}

function display(stack) {
  const temp = new Stack();
  if (isEmpty(stack)) return;
  let item = stack.pop();
  while (item !== null) {
    console.log(item);
    temp.push(item);
    item = stack.pop();
  }
  item = temp.pop();
  while (item !== null) {
    item = temp.pop();
    stack.push(item);
  }
}

main();
