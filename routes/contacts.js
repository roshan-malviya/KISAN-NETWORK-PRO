const express =require('express');
const router=express.Router();
const getAllContacts = require('../contacts/allContacts')

const {check,validationResult}= require("express-validator")


router.get('/',(req,res)=>{

    try {

        const contacts = getAllContacts()

        res.status(200).json(contacts)
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server error !!')        
    }

})

module.exports = router;