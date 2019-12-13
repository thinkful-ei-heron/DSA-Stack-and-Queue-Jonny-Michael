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
  // display(starTrek);

  // const balanced = '()()(())';
  // console.log(matchParens(balanced));
  // const unbalanced = '()()(()))';
  // console.log(matchParens(unbalanced));
  // console.log(matchBrackets(balanced));
  // console.log(matchBrackets(unbalanced));

  // const nested = '([{}])';
  // const nesterr = '([{]})';
  // const nestunbal = '([{)';
  // console.log(matchBrackets(nested));
  // console.log(matchBrackets(nesterr));
  // console.log(matchBrackets(nestunbal));
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
    stack.push(item);
    item = temp.pop();
  }
}

function matchParens(str) {
  let parens = new Stack();
  for (let idx in str) {
    if (str[idx] === '(') {
      parens.push(idx);
    } else if (str[idx] === ')') {
      if (parens.pop() === null) {
        console.log(`Unexpected ')' at position ${idx}`);
        return false;
      }
    }
  }
  let final = parens.pop();
  if (final !== null) {
    console.log(`Unclosed expression (unmatched '(' at ${final})`);
    return false;
  }
  return true;
}
function matchBrackets(str) {
  let brackets = new Stack();
  for (let idx in str) {
    let char = str[idx];
    if ('([{'.includes(char)) {
      brackets.push([idx, char]);
      continue;
    }
    if ('}])'.includes(char)) {
      let latest = brackets.pop();
      let errString = `Unexpected ${char} at position ${idx}`;
      if (latest === null) {
        console.log(errString);
        return false;
      }
      switch (char) {
        case ')':
          if (latest[1] !== '(') {
            console.log('line 91: ' + errString);
            return false;
          }
          break;
        case ']':
          if (latest[1] !== '[') {
            console.log(errString);
            return false;
          }
          break;
        case '}':
          if (latest[1] !== '{') {
            console.log(errString);
            return false;
          }
      }
    }
  }
  const final = brackets.pop();
  if (final !== null) {
    console.log(`Unmatched ${final[1]} at position ${final[0]}`);
    return false;
  }
  return true;
}

main();
