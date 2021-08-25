const fs = require('fs')
const { parse } = require('path')

module.exports = (name,number,otp,time)=>{
    const data = fs.readFileSync('/home/lenovo/Desktop/KNP/msg/sentMsg.json','utf-8')
    const k = JSON.parse(data)
    const mainData = JSON.parse(k)
    k.unshift({
        name,number,otp, time

    })
    const jsonData = JSON.stringify(mainData)
    // fs.writeFileSync('/home/lenovo/Desktop/KNP/msg/sentMsg.json',jsonData)

    
}
