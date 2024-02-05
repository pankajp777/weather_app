
const { exec } = require("child_process"); 
const pid = parseInt(process.argv[2])
console.log("pid" + process.argv[2])


const command = "taskkill /PID " + pid + " /F"


exec(command, (err, outs, errs) => { 
	console.log(outs); 
    console.log(err);
    console.log(pid)
}); 

