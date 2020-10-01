import React from 'react';
import './geekUniversityItem.styl'


function GeekUniversityItem(props) {
    const { title, lessonDesc, teacher, teacherDesc, phase, month, day, img } = props;
    
    return (
        <div className="geek-university-item">
            <div className="geek-university-item-img">
                <img src={img} alt="" />
            </div>
            <div className="geek-university-item-title">{title}</div>
            <div className="geek-university-item-desc">{lessonDesc}</div>
            <div className="geek-university-item-teacher">
                <div className="geek-university-item-teacherName">{teacher}</div>
                <div className="geek-university-item-teacherDesc">{teacherDesc}</div>
            </div>
            <div className="geek-university-item-time">第{phase}期 {month}月{day}日开课</div>
        </div>
    )
}

export default GeekUniversityItem;