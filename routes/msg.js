
const express =require('express');
const router=express.Router();

const {check,validationResult}= require("express-validator")

const messanger = require('../msg/test')
const moment = require('moment')

const saveMsg = require('../msg/sentMsg')




router.post('/',[

    check('name','message should not be empty').not().isEmpty(),
    check('number','please enter a valid phone number').isLength(10)
],async(req,res)=>{
    try {
        const errors=validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        let otp = require('../msg/otp');
        otp = otp()

        const time = moment().format('MMMM Do YYYY, h:mm:ss a');

        const {name,number}=req.body;

        const ress = await messanger(name,number,otp)

          saveMsg(name,number,otp,time)

        
        res.status(200).json({msg:ress})
    
    } catch (err) {

        console.error(err.message)
        res.status(400).json(err.message)
        
    }
})

module.exports = router;