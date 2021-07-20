const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'your-google-mail-account@gmail.com',
		pass: 'your-google-mail-password'
	}
});

transporter.verify().then(console.log).catch(console.error);

const arrayUsersMail = ['receipient1@ymail.com', 'receipient2@gmail.com'];
const stringUsersMail = arrayUsersMail.join(', ');

var mailOptions = {
	from: 'your-google-mail-account@gmail.com',
	to: stringUsersMail, // myfriend@yahoo.com, myotherfriend@yahoo.com using comma seperate strings
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});