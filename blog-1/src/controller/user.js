const loginCheck = (username, password) => {
//先使用假数据
    if(password === '123' && username === 'zhangsan') {
        return true
    } else {
        return false
    }
}

module.exports={
    loginCheck
}