import React from 'react';
import './courseDirection.styl';
import CourseDirectionItem from '@/components/course/lesson/courseDirectionItem/CourseDirectionItem';
import classnames from 'classnames';

const CourseDirection = props => {
    let items = ['计算机专业课','后端&架构','前端&移动','产品&运营','人工智能&大数据','运维&测试','管理&效率','职场软技能','面试专场'];
    // console.log(items);
    items = items.map((i,index) => {
        let isEvenNumber = index % 2 === 0 ? false : true;
        return(
            <CourseDirectionItem 
            key={index} 
            title={i}
            myClassname={classnames({
                courseDirectionItem:true,
                evenNumberItem:isEvenNumber,
            })}
            />
        )
    });
    return (
        <div className="courseDirection">
            <div className="courseDirectionTop">
                <div className="left">
                    课程方向
                </div>
                <div className="right">
                    查看全部
                </div>
            </div>
            <div className="courseDirectionItemWrapper">
                {items}
            </div>
        </div>
    )
}

export default CourseDirection;