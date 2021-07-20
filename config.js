module.exports = config = {
    auth: {
        service: 'gmail',
        user: 'your-gmail-address@gmail.com',
        pass: 'your-gmail-password'
    },
    from: 'some-user-valid-gmail-address@gmail.com',
    to: ['some-user-valid-ymail-address@ymail.com'],
    subject: 'Sending Email using Node.js cust',
    text: 'Welcome this.',
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
};