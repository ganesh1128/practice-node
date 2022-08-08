const express = require("express");
const app = express();
var bodyParser = require('body-parser')


app.use(express.json())

const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                  //  .update('Welcome to JavaTpoint')  x
                   .digest('hex');  
console.log(hash);  

// function middleware(req,res,next){
//     console.log("i am middleware");
//     next()
// }

// function example(req,res,next){
//     console.log(("i am standard express function"));
//     res.send("<h1>Hello World Welcome!!!...</h1>")
//     next()
// }

// console.log(global)

var event = require('events');  
var eventEmitter = new event.EventEmitter();  
eventEmitter.on('invoked', () => {
  console.log('custem event invoked');
})

  
// //  Add listener function for Sum event  
// eventEmitter.on('Sum', function(num1, num2) {  
//     console.log('Total: ' + (Number(num1) + Number(num2)));  
// });  

// //  Call Event.  
// eventEmitter.emit('Sum', '10', '20');

// app.get("/",middleware,example)


var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
  console.log(req.body.username);
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})



app.listen(3000);

