import React, { Component } from 'react';
import StudyPath from '@/components/course/lesson/studyPath/StudyPath';
import './lesson.styl';
import axios from 'axios';
import '@/mock/course-lesson-data';
import { connect } from 'react-redux';
import { addDataToCourseLessonActionCreator,courseLessonPullDownActionCreator } from '@/store/action';
import CourseDirection from './courseDirection/CourseDirection';
import AllCourses from './allCourses/AllCourses';
// import BScroll from 'better-scroll';
import Scroll from '@/components/Scroll/Scroll';
import {forceCheck} from 'react-lazyload';

class Lesson extends Component {
    componentDidMount() {
        // this.bscroll = new BScroll('.lesson', {
        //     scrollY: true,
        //     click:true,
        //     scrollX: false
        // })
        if (this.props.courseLessonDataSource.size > 0) {
            console.log('courseLessonDataSource已经有数据，所以阻断了axios请求');
            return;
        }
        console.log('请求courseLesson的数据');
        axios.get('/mock/course/lesson')
        .then(res => res.data.courses)
        .then(res => this.props.addDataToCourseLesson(res));
    }
    render() {
        // console.log('lesson重新渲染');
        const {courseLessonDataSource,handlePullDown} = this.props;
        return (
                <div className="lesson">
                    <Scroll 
                    direction={'vertical'} 
                    pullUp={handlePullDown}
                    onScroll={forceCheck}
                    >
                        <div className="content">
                            <StudyPath courseLessonDataSource={courseLessonDataSource}/>
                            <CourseDirection />
                            <AllCourses courseLessonDataSource={courseLessonDataSource.toJS()}/>
                        </div>
                    </Scroll>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        courseLessonDataSource: state.getIn(['courseLessonDataSource']),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addDataToCourseLesson: (payload) => {
            dispatch(addDataToCourseLessonActionCreator(payload));
        },
        handlePullDown:() => {
            console.log('123');
            dispatch(courseLessonPullDownActionCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);