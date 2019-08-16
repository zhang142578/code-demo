const env =process.env.NODE_ENV //环境参数 
//配置
let MYSQL_CONF
let REDIS_CONF

//开发环境
if(env === 'dev') {
    // mysql配置

    MYSQL_CONF = {
        host:'47.100.8.252',
        user:'root',
        password:'zhty2252',
        port:'3306',
        database:'myblog'
    }

    //redis配置
    REDIS_CONF = {
        port:6379,
        host:'47.100.8.252'
    }
}
//产品环境
if(env === 'production'){

    //mysql
    MYSQL_CONF = {
        host:'47.100.8.252',
        user:'root',
        password:'zhty2252',
        port:'3306',
        database:'myblog'
    }
    //redis
    REDIS_CONF = {
        port:6379,
        host:'47.100.8.252'
    }
}
module.exports = {MYSQL_CONF,REDIS_CONF}