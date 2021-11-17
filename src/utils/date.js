import dayjs from 'dayjs'

// 时间格式化函数
const formatFn = (date, format) => {
  date = dayjs(date)
  if (!date.isValid()) return null
  if (format === 'timestamp') return date.valueOf()
  return date.format(format)
}

// 默认日期格式化方法
export const parseDate = (date, format = 'YYYY-MM-DD') => {
  return formatFn(date, format)
}

// 默认时间格式化方法
export const parseTime = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  return formatFn(date, format)
}

export default {
  parseDate,
  parseTime,
  dayjs
}
