// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure:false,
//     requireTLS:true,
//     auth: {
//       user: "gautam.ramani06@gmail.com",
//       pass: "jrokfxqnjnitmgdj"
//   }
// });

// var mailOptions = {
//   from: 'gautam.ramani06@gmail.com',
//   to: 'gautam.ramani06@gmail.com',
//   subject: 'How To Send Email With Attachment Using Node.js - Websolutionstuff',
//   html: '<h1>Hello, This is websolutionstuff !!</h1><p>This is test mail..!</p>'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });