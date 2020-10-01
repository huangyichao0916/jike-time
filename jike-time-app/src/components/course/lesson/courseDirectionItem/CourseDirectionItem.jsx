import React from 'react';
import './courseDirectionItem.styl';

const CourseDirectionItem = props => {
    const {title,myClassname} = props;
    return (
        <div className={myClassname}>
            {title}
        </div>
    )
}

export default CourseDirectionItem;