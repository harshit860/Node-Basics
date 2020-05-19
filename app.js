let logger = require('./looger')
let path = require('path')
const os = require('os')
const fs = require('fs')
const EventEmitter = require('events')
const http = require('http')

let osswitch = 0
let pathswitch = 0 
let fsswitch = 0
let eventswitch = 0
let httpswitch = 1

if( osswitch == 1)
{
    console.log(os.userInfo())          //Displaying the userinfo
    console.log(os.freemem())           // Diosplaying the free memory of the system
}

if(pathswitch == 1)
{
    console.log(logger)
    console.log(path.parse(__filename))
}
           

if(fsswitch == 1)
{
    const files = fs.readdirSync('./')                          // Files in the current directory
    console.log(files)   

    fs.readdir('./', function (err,files){                  // Error handling in file system
            if( err ) console.log('Error' + err)
            else console.log(files) 
    })
}

if (eventswitch == 1) {

    const emiiter = new EventEmitter()
    emiiter.on('messagelog', (args) => {
        console.log(args)
    })
    emiiter.emit('messagelog', { id: 1, url: 'test' })
  
}

if(httpswitch == 1) 
{
    const server = http.createServer((req,res)=>{
        if(req.url == '/')
        {
            res.write('hello world')
            res.end()
        }
        if(req.url == '/harshit')
        {
            let obj = {
                id:'1',
                name : "harshit"
            }
            
            res.write(JSON.stringify(obj))
            res.end()
        }
    })

    server.listen(3000);
    console.log('Listening to 3000.....')
}