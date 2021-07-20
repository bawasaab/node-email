const sendMailService = require('./singleEmailAsService');

sendMailService()
.then( (result) => {
    console.log('result', result);
} )
.catch( ( ex ) => {
    console.log('ex', ex);
} );