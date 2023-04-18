const nodemailer = require("nodemailer");

// 使用async..await 创建执行函数
async function main() {
  

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
           user: "david.sun.cool@gmail.com",
           pass: "YOUR_APP_PASSWORD"
        }
     });




  // 定义transport对象并发送邮件
  let info = await transporter.sendMail({
    from: '孙和 <david.sun.cool@gmail.com>', // 发送方邮箱的账号
    to: "sun.he.cool@163.com, david.sun.sg@gmail.com", // 邮箱接受者的账号
    subject: "Hello David", // Subject line
    text: "text", // 文本内容
    html: "欢迎", // html 内容, 如果设置了html内容, 将忽略text内容
  });
}

main().catch(console.error);

