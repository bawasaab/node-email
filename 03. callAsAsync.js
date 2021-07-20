const config = require('./config');
const sendMailService = require('./singleEmailAsService');

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