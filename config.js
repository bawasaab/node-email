module.exports = config = {
    auth: {
        service: 'gmail',
        user: 'your-gmail-address@gmail.com',
        pass: 'your-gmail-password'
    },
    from: 'some-valid-user-gmail-address@gmail.com',
    to: ['some-valid-user-yahoomail-address@yahoo.com'],
    subject: 'Sending Email using Node.js cust',
    text: 'Welcome this.',
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
};
