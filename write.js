let fs =require('fs');
let path = __dirname + '/write.txt';

fs.writeFile(path,"learning fs module writefile",()=>{
    if(err){
        console.log(err);
    } else {
        console.log("write file successfully");
    }   
})  