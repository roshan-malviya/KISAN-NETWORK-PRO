
const fs = require('fs')
module.exports = () =>{
    const data = fs.readFileSync('/home/lenovo/Desktop/KNP/contacts/contacts.json','utf8')
    const contacts = JSON.parse(data)
    return contacts
}

