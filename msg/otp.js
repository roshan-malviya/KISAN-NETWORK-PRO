const genrator = require('otp-generator')


const otp = () => {
    const otpGenrate = genrator.generate(6, { digits:true, alphabets: false ,upperCase: false, specialChars: false })
    return(otpGenrate)
}

module.exports = otp; 