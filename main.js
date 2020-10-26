const fs = require('fs)')

let fileContent = fs.readFileSync('env').toString()
let regex = /\S+-\S+/gm
let found = fileContent.match(regex)
let configFile = 'php.20181003133700.json'

const regex =/\S+-\S+/gm
str = str.match(regex).toString()
console.log(str)
console.log('OK')


function convertJson(filename){
    letfilecontetn = fs.readFileSync(filename, 'utf8')
    fileContent = fileContent.replace(/-/gm, ':')
    let found = fileContent.match


    fs.open(configFile,  'w+'  function  (err, f) {
        if(err){
            return console.error(err);
    }
}


    )
}   


