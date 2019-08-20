const {exec} = require('../db/mysql')

const login = (username, password) => {
    const sql = `select username ,realname from users where username='${username}' and password = '${password}'`
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })
}
const register = (username, password,realname) =>{
    const sql = `select username from users where username='${username}'`
    return exec(sql).then(res=>{
        if(res[0]){
            console.log(res)
            return res[0] || {}
        } else {
            const sql = `insert into users (username,password,realname) values ('${username}','${password}','${realname}')`
            return exec(sql).then(res=>{
                console.log(res)
                return res[0] || {}
            })
        }
    }) 
}
module.exports={
    login,
    register
}