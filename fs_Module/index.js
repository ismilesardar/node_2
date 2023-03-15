const fs = require('fs');

console.log('first')

const fileRead = fs.readFileSync('./file.txt','utf-8');
console.log(fileRead);

console.log('second')

fs.readFile('./file.txt','utf-8',(error,data)=>{
    error ? console.log(error) : console.log(data);
});

console.log('third')


fs.writeFileSync('./demo.txt','Hello Word!');

fs.writeFile('./demo.txt',' Hello Ismile!',{flag:'a'},(err)=>{
    if (err) {
        console.log(err);   
    }else{
        console.log('File is add');
    }
})