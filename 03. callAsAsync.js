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

async function sendMails()  {
    
    try {
        
        const sendMailServiceObj = new sendMailService( config );
        let result = await sendMailServiceObj.sendMail();
        return result;
    } catch( ex ) {
        return ex;
    }
}

sendMails()
.then( (result) => {
    console.log('result', result);
} )
.catch( ( ex ) => {
    console.log('ex', ex);
} );