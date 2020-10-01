import React from 'react';
import './allCourses.styl';
import AllCoursesItem from '@/components/course/lesson/allCoursesItem/AllCoursesItem';

const AllCourses = props => {
    const {courseLessonDataSource} = props;
    // console.log(courseLessonDataSource);
    const items = courseLessonDataSource.map((item,index) => {
        const {img,title,desc,month,day,price,oldprice,isPurchased,name} = item;
        return(
            <AllCoursesItem 
            img={img}
            key={index}
            id={index}
            lessonName={title}
            teacherName={name}
            teacherDesc={desc}
            month={month}
            day={day}
            price={price}
            oldprice={oldprice}
            isPurchased={isPurchased}
        />
        )
    })
    return(
        <div className="allCourses">
            <div className="allCoursesTop">
                全部课程
            </div>
            <div className="allCoursesNavBar">
                <div className="left">
                    课程形式
                </div>
                <div className="middle">
                    订阅状态
                </div>
                <div className="right">
                    上新
                </div>
            </div>
            <div className="allCoursesItemWrapper">
                {items}
            </div>
        </div>
    )
}

export default AllCourses;