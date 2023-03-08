const http = require("http");
const fs = require("fs");
const os = require("os");
const dns = require("node:dns");
const cowsay = require("cowsay");

let userCnt = 0; //To count the number of users


const Server=()=>{
  server.listen(4500, () => {
    console.log('server running on the port 4500')
})
}
//" make the server function and export";

  //Handling the home route, send an h1 tag
 
  //counting the number of users and writing the initial number in the logs.txt along with the time stamp
 

  const server=http.createServer((req,res)=>{
    if(req.url==="/"){
      res.write(`<h1>HOME PAGE</h1>`)
      res.end()
    }
  })
    
  
  //updating the user database
 
    //should append updated number of users in logs.txt along with the time stamp

  //get the first names of all the users from the json file and send as a response in list format

  //to get the website url from terminal and write its ip address and family in logs.txt
 
  // using the cowsay external module
  



// Do not listen to the server just export(default) it

// server.listen(4500,()=>{
//   console.log('server running on the port 4500')
// })

