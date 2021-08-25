const express = require("express")

const app = express()

app.use(express.json({extended : false}))

app.get('/',(req,res)=>{
    res.send("roshan")
})

app.use('/send',require('./routes/msg'))
app.use('/contacts',require('./routes/contacts'))



const PORT = process.env.PORT || 5001 ;


app.listen(PORT,()=> console.log(`server is running on port ${PORT}`))