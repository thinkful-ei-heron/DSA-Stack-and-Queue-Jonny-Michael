const Queue = require('./queue');

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


function main(){
    let starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    starTrekQ.remove('Spock');
    console.log(display(starTrekQ));
}
main();