const Queue = require('./queue');
const QueueDLL = require('./queuedll.js');

function peek(queue){
    if(!isEmpty(queue))
    return queue.first.value;
    else
        return null;
}
function isEmpty(queue){
    return queue.first === null;
}
function display(queue){
    const temp = new Queue();
    if (isEmpty(queue)) return null;
    let item = queue.dequeue();
    let string = '[';

    while (item !==  null && item !== undefined) {
        string += `${item}, `;
        temp.enqueue(item);
        item = queue.dequeue();
    }
    item = temp.dequeue();
    while (item !== null && item !== undefined) {
        queue.enqueue(item);
        item = temp.dequeue();
    }
    return string.substring(0, string.length-2)+']';
}

function squareDanceParing(){
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
}
main();