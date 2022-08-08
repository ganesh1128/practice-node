// var event = require('events');  
// var eventEmitter = new event.EventEmitter();  
// eventEmitter.on('invoked', (a,b) => {
//   console.log('custem event invoked', a + b);
//   eventEmitter.emit('practice')
// })
// eventEmitter.on('practice', () => {
//   console.log('custem event practice');
// })

// eventEmitter.emit('invoked', 10,30)
// // console.log(global);
// console.log(__filename);

const {exec} = require('child_process')
exec('dir', (err, stdout, stderr) => {
    if(err){
        console.log(`err: ${err.message}`);
        return
    }
    if(stderr){
        console.log(`err: ${stderr.message}`);
        return
    }
    console.log(`stdout: ${stdout}`);
})