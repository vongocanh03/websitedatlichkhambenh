import db from "../models/index";
require('dotenv').config();
import emailService from './emailService';

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.doctorId || !data.timeType || !data.date) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                });
            } else {
                await emailService.sendSimpleEmail({
                    reciverEmail: data.email,
                    patientName: 'Võ Ngọc Anh patient name',
                    time: '8:00 - 9:00 Chủ nhật 06/04/2025',
                    doctorName: "VNA",
                    redirectLink: 'https://www.facebook.com/profile.php?id=100022548919558'
                  })
                // upsert patient
                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3'
                    },
                });
                // create a booking record
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType
                        }
                    })
                }
                resolve({
                    errCode: 0,
                    errMessage: 'Save infor patient succeed'
                })
            }
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    postBookAppointment: postBookAppointment

}