const mysql = require('mysql')
//创建连接对象

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'zhty2252',
    port:'3306',
    database:'myblog'
})

con.connect()

const sql = `update users set realname = '李四2' where username = 'lisi'`;
const sql2 = `select * from users`;
const sql3 = `insert into blogs(title,content,createtime,author) values('标题C','内容C',1565764680893,'zhangsan')`;
const sql4 = `select * from blogs`;
con.query(sql4, (err, result) => {
    if (err) {
        console.log(err)
        return
    } else {
        console.log(result)
    }
})

con.end()