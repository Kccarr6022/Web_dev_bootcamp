// eventloop = offloading time consuming opperations

console.log('first task');
setTimeout(() => { // callback for asynchronous
    console.log('second task');
}, 0)

console.log('next task')