/* eslint-disable */
export const regPhone = /^1\d{10}$/ // 手机号
export const regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
// export const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ //邮箱
export const regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/ // 密码8-20位字符，包含大小写字母、数字
export const regIDCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ // 身份证号
export const regCode = /^\d{6}$/ // 验证码
export const regSignPassword = /^\d{6}$/ // 签约密码
export const regName = /^[\u4e00-\u9fa5\.]{2,15}$/ // 姓名 2-15位汉字，可以包含“·”
// export const regComponyName = /^[\u4e00-\u9fa5]{2,50}$/ //公司、机构名称 2-50位汉字
export const regComponyName = null
export const regCreditCode = /^[0-9a-zA-Z]{18}$/ // 信用代码 18位数字，可以包含字母
export const regOrganizationcCode = /^[0-9a-zA-Z]{1,18}$/ // 机构代码 18位以内数字，可以包含字母
export const regBankCardNumber = /^([0-9]\d{10,24})$/ // 银行卡号\打款账号
export const regBankName = /.{2,50}/ // 开户支行
export const regDepartmentName = /^[\u4e00-\u9fa5]{2,10}$/ // 部门名称
export const regApplicationName = /^[A-Za-z0-9\u4e00-\u9fa5]{1,20}$/ // 应用名称
export const regSealName = /^[\u4e00-\u9fa5]{1,20}$/ // 印章名称，20字以内中文
export const regPostalCode = /^[[0-9]{6}$/ // 邮政编码
export const regPostalChinese = /^[\u4e00-\u9fa5]{1,50}$/ // 中文
/* eslint-disable */
