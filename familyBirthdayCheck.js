const calendar = require('js-calendar-converter')

const dayMap = {
  '313': '小铭父亲',
  '1018': '小铭母亲',
  '220': '小徐父亲',
  '1014': '大姐',
  '1027': '二姐',
  '620': '弟弟',
}

function checkDate() {
  var today = new Date()
  console.log('当前时间为:', today)
  const lunarDate = calendar.solar2lunar(today.getFullYear(), today.getMonth()+1, today.getDate())
  // const lunarDate = calendar.solar2lunar(2024, 4, 21)
  console.log('农历时间为:', lunarDate.lunarDate)

  const monthDay = '' + lunarDate.lMonth + lunarDate.lDay
  if (dayMap[monthDay]) {
    return dayMap[monthDay]
  }
  return 'false'
}

function birthCountDown() {
  var today = new Date()
  console.log('当前时间为:', today)
  const year = today.getFullYear()
  for (const key in dayMap) {
    var tempkey = key.padStart(4, '0')
    var month = tempkey.substring(0, 2)
    var day = tempkey.substring(2, 4)
    var lunarDate = calendar.lunar2solar(year, month, day).date
    var lunar = new Date(lunarDate)
    if (today < lunar) {
      let diff = lunar.getTime() - today.getTime()
      if (diff <= 3 * 24 * 60 * 60 * 1000) {
        return '只剩3天'
      } else if (diff <= 7 * 24 * 60 * 60 * 1000) {
        return '只剩7天'
      }
    }
  }
}

module.exports = { checkDate,birthCountDown}
