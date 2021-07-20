const sendMailService = require('./singleEmailAsService');

async function sendMails()  {

    try {
    
        let result = await sendMailService();
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