const sendMailService = require('./singleEmailAsService');

async function sendMails()  {

    try {
    
        let result = await sendMailService();
        return result;
    } catch( ex ) {
        return exception;
    }
}

sendMailService()
.then( (result) => {
    console.log('result', result);
} )
.catch( ( ex ) => {
    console.log('ex', ex);
} );