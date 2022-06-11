const nodemailer = require("nodemailer");

const sendMail = async (message) => {
  console.log({
    user: process.env.email,
    pass: process.env.password,
  });

  let mailTransporter = nodemailer.createTransport({
      service: "Yahoo",
      host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true,
    secureConnection: false,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    tls: {
      rejectUnAuthorized: true,
    },
  });
  console.log(message);

  let mailDetails = {
    from: process.env.email,
    to: message.receiver,
    subject: message.subject,
    html: `<div>
    <h1>Welcome to AgriEdge</h1>
    <p>We are so glad you can join us ${message.fullname.toUpperCase()}.</p>
    <p>Feel free to use this Service to make your Planning Decisions. Our Models are well curated to serve your best Interests.</p>
    </div>`,
  };

  await mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports = sendMail;
