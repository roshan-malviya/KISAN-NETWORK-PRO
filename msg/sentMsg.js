const { json } = require('express')
const fs = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)


module.exports =  async(name,number,otp,time)=>{

    const data = await readFileAsync('/home/lenovo/Desktop/KNP/msg/sentMsg.json','utf-8')
    if(data.length==0){
       var newData = [{
           name,
           number,
           otp,
           time
       }]
    }else{
         newData = JSON.parse(data)
        newData.unshift({
            name,
            number,
            otp,
            time
        })

    }
   const jsonData = JSON.stringify(newData)

   await writeFileAsync('/home/lenovo/Desktop/KNP/msg/sentMsg.json',jsonData)

   console.log('mai file ke last me hu');
   
    
}



