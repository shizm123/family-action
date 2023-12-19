const EmailUtil  = require('./sendemail')
const BirthdayUtil = require('./familyBirthdayCheck')
const isBirthday = BirthdayUtil.checkDate();
console.log('username',process.env.USER_NAME)
console.log('password',process.env.PASS_WORD)
if (isBirthday==='false'){
  console.log('不是');
  // EmailUtil.sendEmail('2649144933@qq.com','家人生日提醒',"test")
  return;
}
const emailText = `今天是${isBirthday}的生日,请及时送上祝福！`
EmailUtil.sendEmail('2649144933@qq.com','家人生日提醒',emailText)
