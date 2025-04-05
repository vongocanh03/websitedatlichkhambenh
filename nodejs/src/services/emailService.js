require('dotenv').config();
import nodemailer from 'nodemailer';

let sendSimpleEmail = async (dataSend) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: '"VNA Booking Care" <anhhung05032003@gmail.com>', // sender address
    to: dataSend.reciverEmail, // list of receivers
    subject: "Thông tin đặt lịch khám bệnh", // Subject line
    html: getBodyHTMLEmail(dataSend),
  });
};
let getBodyHTMLEmail = (dataSend) => {
  let result = '';
  if (dataSend.language === 'vi') {
    result = `
    <h3>Xin chào ${dataSend.patientName}!</h3>
    <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên VNA Booking Care</p>
    <p>Thông tin đặt lịch khám bệnh:</p>
    <div><b>Thời gian: ${dataSend.time}</b></div>
    <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
    <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.</p>
    <div>
      <a href=${dataSend.redirectLink} target="_blank">click here</a>
    </div>
    <div>Xin chân thành cảm ơn</div>
  `;
  }
  if (dataSend.language === 'en') {
    result = `
      <h3>Hello ${dataSend.patientName}!</h3>
      <p>You are receiving this email because you have booked an online medical appointment on VNA Booking Care.</p>
      <p>Appointment details:</p>
      <div><b>Time: ${dataSend.time}</b></div>
      <div><b>Doctor: ${dataSend.doctorName}</b></div>
      <p>If the above information is correct, please click the link below to confirm and complete the appointment booking process.</p>
      <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
      </div>
      <div>Thank you very much!</div>
    `;
  }
  return result;
}
module.exports = {
  sendSimpleEmail: sendSimpleEmail
}
