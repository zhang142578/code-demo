const redis = require('redis')

const redisClient = redis.createClient(6379,'47.100.8.252')
redisClient.on('error',err => {
    console.log(err)
})

//测试
redisClient.set('myname','zhangsan',redis.print)
redisClient.get('myname',(err,val) => {
    if(err){
        console.log(err)
        return
    }
    console.log(val)

    redisClient.quit()
})
