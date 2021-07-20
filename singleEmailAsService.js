const nodemailer = require('nodemailer');
let $this;

module.exports = class sendMailService {
    
    transporter;
    from;
    to;
    subject;
    text;
    html;
    auth;

    constructor( object ) {

        $this = this;
        $this = object;

        $this.transporter = nodemailer.createTransport({
            service: $this.auth.service,
            auth: {
                user: $this.auth.user,
                pass: $this.auth.pass
            }
        });

        /**
         * connecting to gmail starts here
         */
        $this.transporter.verify()
        .then( ( result ) => {
            console.log(`${$this.auth.service} connected: `, result);
        } ).catch( ( error ) => {
            console.log(`${$this.auth.service} connection error: `, error);
        } );
        /**
         * connecting to gmail ends here
         */
    }

    sendMail = () => {

        try {

            return new Promise((resolve, reject) => {
                
                const arrayUsersMail = $this.to ? $this.to : ['recepient1@yopmail.com'];
                const stringUsersMail = arrayUsersMail.join(', ');
                
                var mailOptions = {
                    from: $this.from ? $this.from : 'your-google-mail-account@gmail.com',
                    to: stringUsersMail, // myfriend@yahoo.com, myotherfriend@yahoo.com using comma seperate strings
                    subject: $this.subject ? $this.subject : 'Sending Email using Node.js',
                    // text: $this.text ? $this.text : 'That was easy!',
                    html: $this.html ? $this.html : "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
                };
                
                $this.transporter.sendMail(mailOptions, function (error, info) {
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
}