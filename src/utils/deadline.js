import { fDateSubtract } from '~/utils/formatTime'

const deadline = date => {
  if (!date) {
    return 'Không giới hạn đăng ký'
  }
  const day = fDateSubtract(date)

  if (day > 0) {
    return `Còn ${day} ngày để đăng ký`
  }
  if (day === 0) {
    return `Duy nhất ngày hôm nay`
  }
  return `Đã hết hạn đăng kí`
}
export default deadline
