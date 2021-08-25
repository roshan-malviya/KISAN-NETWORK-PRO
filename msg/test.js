// const twilio = require("twilio")
const config = require('config')



module.exports = async(name,phone,otp)=>{
const accountSid = config.get("twiliosid");
const authToken = config.get("twiliotoken");


const client = require('twilio')(accountSid, authToken);

const msg = await client.messages
  .create({
     body: `Hello ${name} this is your respected otp ${otp}`,
     from: config.get('number'),
     to: `+91${phone}`
   })
   return(msg.body)

}


