import React, { Component } from 'react';
import './studyPath.styl';
import StudyPathItem from './studyPathItem/StudyPathItem';
// import BScroll from 'better-scroll';

class StudyPath extends Component {
    render() {
        // console.log('studypatch重新渲染');
        const { courseLessonDataSource } = this.props;
        const studyPathItemData = courseLessonDataSource.reduce((pre, cur) => {
            let type = cur.getIn(['type']);
            if (!pre[type]) {
                pre[type] = 1;
            } else {
                pre[type]++;
            }
            return pre;
        }, {})
        // console.log(studyPathItemData);//object
        const finalStudyPathItem = Object.keys(studyPathItemData).map((i,index) => {
            return (
                <StudyPathItem key={index} type={i} total={studyPathItemData[i]}/>
            )
        })
        return (
            <div className="studyPath">
                <div className="top">
                    <div className="left">
                        学习路径
                    </div>
                    <div className="right">
                        查看全部
                    </div>
                </div>
                <div className="studyPathItemWrapper">
                    <div className="content">
                        {finalStudyPathItem}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudyPath;