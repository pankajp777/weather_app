


const { exec } = require("child_process"); 
const PID = parseInt(process.argv[2])
const command ="netstat -ano | findstr :"+ PID



exec(command, (err, outs, errs) => { 
      
  if(outs){

    console.log(outs.toString().split("       ")[9])

  }
  
  else {

    console.log(err)
  }
    console.log(PID)
}); 