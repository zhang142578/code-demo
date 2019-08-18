const { login } = require('../controller/user')
const { SuccessModel,ErrorModel } = require('../model/resModel')
const {set} = require('../db/redis')
//获取cookie过期时间
const getCookieExpires = () => {
    const d =new Date()
    d.setTime(d.getTime()+(24*60*60*1000))
    return d.toGMTString()
}

const handleUserRouter = (req,res) => {
    const method = req.method //GET POST

    //登陆
    if(method === 'POST' && req.path === '/api/user/login') {
        const {username, password } = req.body
        // const {username, password } = req.query 
        const result = login(username,password)

        return result.then(data=>{
            if(data.username){ 
                
                req.session.username = data.username
                req.session.realname = data.realname
                //同步到redis
                set(req.sessionId,req.session)

                console.log('req.session is ', req.session)
                return new SuccessModel(req.session.username)
            } else {
                return new ErrorModel('登陆失败')
            }
        })
    }

    // if(method === 'GET' && req.path === '/api/user/login-test') {
    //     if(req.session.username){
    //         return Promise.resolve(
    //             new SuccessModel({
    //                 username:req.session
    //             })
    //         )
    //     }
    //     return Promise.resolve(new ErrorModel('尚未登陆'))
    // }
}

module.exports = {handleUserRouter,getCookieExpires}