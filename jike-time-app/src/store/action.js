import axios from 'axios';
import '@/mock/course-lesson-data';

/**
 * 充值明细相关的action 和 action creator
 */
export const ADD_RECORD_TO_RECHARGE_RECORD = 'ADD_RECORD_TO_RECHARGE_RECORD';
export const addRecordToRechargeRecordActionCreator = payload => {//payload为充值的数目
    let d = Date();
    let year = d.slice(11,15) + d.slice(4,7) + d.slice(8,10);
    let time = d.slice(16,25);
    let newPayload = {
        year,
        time,
        number:payload,
    }
    return{
        type:ADD_RECORD_TO_RECHARGE_RECORD,
        payload: newPayload,
    }
}

/**
 * account相关的action creator
 */
export const BUY_LESSON = 'BUY_LESSON';
export const RECHARGE = 'RECHARGE';
export const buyLessonActionCreator = payload => {
    return {
        type:BUY_LESSON,
        payload,
    }
}
export const rechargeActionCreator = payload => {//payload为充值的数目
    return {
        type:RECHARGE,
        payload,
    }
}

export const rechargeAndRecordActionCreator = howMuch => {
    return (dispatch,getState) => {
        dispatch(rechargeActionCreator(howMuch));
        dispatch(addRecordToRechargeRecordActionCreator(howMuch))
        // console.log(getState().getIn(['rechargeRecordDataSource'].toJS()));
    }
}

/**
 * mineItemDateSource相关的action creator
 */
export const ADD_DATA_TO_MINE_PAGE = 'ADD_DATA_TO_MINE_PAGE';
export const SET_IS_DOTED_TO_TRUE = 'SET_IS_DOTED_TO_TRUE';
export const SET_IS_DOTED_TO_FALSE = 'SET_IS_DOTED_TO_FALSE';
export const addDataToMinePageActionCreator = payload => {//现在的payload是mine的datasource
    return{
        type:ADD_DATA_TO_MINE_PAGE,
        payload,
    }
}
export const setIsDotedToTrueActionCreator = payload => {//现在的payload是mineItem的key
    return{
        type:SET_IS_DOTED_TO_TRUE,
        payload
    }
}
export const setIsDotedToFalseActionCreator = payload => {//现在的payload是mineItem的key
    return{
        type:SET_IS_DOTED_TO_FALSE,
        payload
    }
}


/**
 * studyItem相关的actioncreator 权佳欣
 */
export const ADD_PURCHASED_LESSONS_TO_STUDY_PAGE = 'ADD_PURCHASED_LESSONS_TO_STUDY_PAGE';
export const addPurchasedLessonsToStudyPageActionCreator = payload => {
    return {
        type: ADD_PURCHASED_LESSONS_TO_STUDY_PAGE,
        payload
    }
}

/**
 * 讲堂 -》 训练营相关的action 以及action creator
 */
// practiceCampItem相关的action creator
export const ADD_DATA_TO_PRACTICE_CAMP = 'ADD_DATA_TO_PRACTICE_CAMP';
export const SET_PRACTICE_CAMP_TO_BE_PURCHASED = 'SET_PRACTICE_CAMP_TO_BE_PURCHASED';
export const addDataToPracticeCampActionCreator = payload => {//现在的payload是数据
    return {
        type:ADD_DATA_TO_PRACTICE_CAMP,
        payload,
    }
}
export const setPracticeCampToBePurchasedActionCreator = payload => {//现在的payload是 id
    return {
        type:SET_PRACTICE_CAMP_TO_BE_PURCHASED,
        payload
    }
}
// practiceCamp购买课程相关的action creator 权佳欣
export const practiceCampBuyLessonActionCreator = (price,id,lesson) => {
    return (dispatch, getState) => {
        dispatch(buyLessonActionCreator(price));
        dispatch(setIsDotedToTrueActionCreator(0));
        dispatch(setIsDotedToTrueActionCreator(1));
        dispatch(setIsDotedToTrueActionCreator(2));
        dispatch(setPracticeCampToBePurchasedActionCreator(id));
        dispatch(addPurchasedLessonsToStudyPageActionCreator(lesson))
    }
}

/**
 * courseLessonItem相关的action creator
 */
export const ADD_DATA_TO_COURSE_LESSON = 'ADD_DATA_TO_COURSE_LESSON';
export const addDataToCourseLessonActionCreator = payload => {//现在的payload是数据
    return {
        type:ADD_DATA_TO_COURSE_LESSON,
        payload
    }
}
export const SET_LESSON_TO_BE_PURCHASED = 'SET_LESSON_TO_BE_PURCHASED';
export const setLessonToBePurchasedActionCreator = payload => {//现在的payload是id
    return{
        type:SET_LESSON_TO_BE_PURCHASED,
        payload
    }
}
export const lessonBuyLessonActionCreator = (price,id,lesson) => {
    return (dispatch,getState) => {
        dispatch(buyLessonActionCreator(price));
        dispatch(setIsDotedToTrueActionCreator(0));
        dispatch(setIsDotedToTrueActionCreator(1));
        dispatch(setIsDotedToTrueActionCreator(2));
        dispatch(addPurchasedLessonsToStudyPageActionCreator(lesson));
        dispatch(setLessonToBePurchasedActionCreator(id));
    }
}
export const courseLessonPullDownActionCreator = () => {
    return (dispatch,getState) => {
        axios.get('/mock/course/lesson')
            .then(res => res.data.courses)
            .then(res => dispatch(addDataToCourseLessonActionCreator(res)));
    }
}
