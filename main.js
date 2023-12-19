const EmailUtil  = require('./sendemail')
const BirthdayUtil = require('./familyBirthdayCheck')
const isBirthday = BirthdayUtil.checkDate();
if (isBirthday==='false'){
  console.log('不是');
  return;
}
const emailText = `今天是${isBirthday}的生日,请及时送上祝福！`
EmailUtil.sendEmail('2649144933@qq.com','家人生日提醒',emailText)