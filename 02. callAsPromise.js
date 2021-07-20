const sendMailService = require('./singleEmailAsService');

let config = {
    auth: {
        service: 'gmail',
        user: 'deepak4bawa@gmail.com',
        pass: 'bqmsgvhcphrgpvrn'
    },
    from: 'deepak4bawa@gmail.com',
    to: ['bawa_d@ymail.com'],
    subject: 'Sending Email using Node.js cust',
    text: 'Welcome this.'
};
const sendMailServiceObj = new sendMailService( config );

sendMailServiceObj.sendMail()
.then( (result) => {
    console.log('result', result);
} )
.catch( ( ex ) => {
    console.log('ex', ex);
} );