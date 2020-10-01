import Mock from 'mockjs';

const data = Mock.mock('mock/discover/practiceCamp',{
    'practiceCamps|4':[{
        'id|+1':0,
        'title': '@ctitle',
        'img': "@Image('161.5x90','@color','@cname')",
        'lessonDesc': '@csentence',
        'teacher':'@cname',
        'teacherDesc': '@csentence',
        'phase|1-20':1,
        'month|1-12':1,
        'day|1-30': 10,
    }]
})

export default data;