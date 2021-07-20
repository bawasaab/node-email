const nodemailer = require('nodemailer');

module.exports = function sendMailService() {
    
    try {

        return new Promise((resolve, reject) => {

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'deepak4bawa@gmail.com',
                    pass: 'bqmsgvhcphrgpvrn'
                }
            });
            
            const arrayUsersMail = ['bawa_d@ymail.com'];
            const stringUsersMail = arrayUsersMail.join(', ');
            
            var mailOptions = {
                from: 'your-google-mail-account@gmail.com',
                to: stringUsersMail, // myfriend@yahoo.com, myotherfriend@yahoo.com using comma seperate strings
                subject: 'Sending Email using Node.js',
                text: 'That was easy!'
            };
            
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return reject({
                        sent: false,
                        msg: error.response,
                        obj: error
                    });
                } else {
                    return resolve({
                        sent: true,
                        msg: info.response,
                        obj: info
                    });
                }
            });
        });
    } catch( ex ) {

        return reject({
            sent: false,
            msg: ex.toString(),
            obj: ex
        });
    }
}