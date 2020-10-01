import Mock from 'mockjs';

const data = Mock.mock('/mock/course/lesson',{
    'courses|10':[{
        // 'id|+1':0,
        'img': "@Image('82x108.5','@color','@cname')",
        'title': '@ctitle',
        'name':'@cname',
        'desc': '@csentence',
        'month|10-30':11,
        'day|500-3000': 1000,
        'price|10-99':20,
        'oldprice|100-200':155,
        'isPurchased':false,
        'type|1':['Java工程师','Python工程师','计算机基础知识','前端工程师','测试工程师','架构师','iOS工程师'],
    }]
})

export default data;
