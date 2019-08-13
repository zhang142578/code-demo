// eslint-disable-next-line no-unused-vars
const getList = (author,keyword) => {
  // 先返回假数据（格式是正确的）
  return[
      {
          id:1,
          title:'标题A',
          content:'内容A',
          createTime:1563280383697,
          author:'zhangsan'
      },
      {
          id:2,
          title:'标题B',
          content:'内容B',
          createTime:1563280435273,
          author:'lisi'
      }
  ]
}
// eslint-disable-next-line no-unused-vars
const getDetail = (id)=>{
    //返回假数据
    return {
        id:1,
        title:'标题A',
        content:'内容A',
        createTime:1563280383697,
        author:'zhangsan'
    }
}

// eslint-disable-next-line no-unused-vars
const newBlog = (blogData = {}) => {
    //blogData是一个博客对象，包含title content属性
    return {
        id:3 //表示新建博客，插入到数据表里面的id
    }
}

// eslint-disable-next-line no-unused-vars
const updateBlog = (id,blogData = {}) => {
    return true
}

//删除博客

// eslint-disable-next-line no-unused-vars
const delBlog = (id) =>{
    // id就是要删除博客的id
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}