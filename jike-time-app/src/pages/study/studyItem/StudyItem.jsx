import React from 'react';
import './studyItem.styl'

const StudyItem = props => {
    const { lessonName, teacherName, teacherDesc } = props;
    return (
        <div className="study-item">
            <div className="study-item-title">{lessonName}</div>
            <div className="study-item-teacher-name">{teacherName}</div>
            <div className="study-item-teacher-desc">{teacherDesc}</div>
        </div>
    )
}
export default StudyItem;