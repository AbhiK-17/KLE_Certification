let fs = require('fs');

//Perform CRUD operation

//let data = "Monkeys in antarctica are called as cool niggas";

//task-1 create a file and write data into it
//way-1

// fs.writeFile('demo.txt',data,{
//     encoding : 'utf-8'
// },(err)=>{
//     if(err) throw err;
//     console.log("File is created successfully");

// })

//way-2
// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//             if(err) throw err;
//             console.log("File is created successfully");
//         });

//Read a file
//let fileread = fs.readFileSync('demo.txt');
// console.log(fileread.toString());

//Update a file
//fs.appendFileSync('demo.txt','\n Those one of the monkeys are now called as ISHOWSPEED');

//delete data
//fs.unlinkSync('demo.txt');



//create

let data = "Kohli lift it up that is a shot of an EMPEROR"

fs.writeFileSync('king.txt',data,
    (err)=>{
            if(err) throw err;
            console.log("File is created successfully");
        });

//Update
fs.appendFileSync('king.txt','\n He is not just a king he is a GENIUS');
