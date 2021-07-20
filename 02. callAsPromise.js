const config = require('./config');
const sendMailService = require('./singleEmailAsService');
const sendMailServiceObj = new sendMailService( config );

sendMailServiceObj.sendMail()
.then( (result) => {
    console.log('result', result);
} )
.catch( ( ex ) => {
    console.log('ex', ex);
} );