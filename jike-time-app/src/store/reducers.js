import {fromJS} from 'immutable';
import {BUY_LESSON,RECHARGE} from './action';
import {ADD_DATA_TO_MINE_PAGE,SET_IS_DOTED_TO_TRUE,SET_IS_DOTED_TO_FALSE} from './action';
import {ADD_DATA_TO_COURSE_LESSON,SET_LESSON_TO_BE_PURCHASED} from './action';
import {ADD_DATA_TO_PRACTICE_CAMP,SET_PRACTICE_CAMP_TO_BE_PURCHASED} from './action';
import {ADD_PURCHASED_LESSONS_TO_STUDY_PAGE} from './action';
import {ADD_RECORD_TO_RECHARGE_RECORD} from './action';

let defaultBalanceState = 10000;
const balanceReducer = (state = defaultBalanceState,action) => {
    const {type,payload} = action;
    switch (type) {
        case BUY_LESSON:
            return state - payload;
        case RECHARGE:
            return state + payload;
        default:
            return state;
    }
}

const defaultMineItemState = fromJS([]);
const mineItemReducer = (state = defaultMineItemState,action) => {
    const {type,payload} = action;
    switch (type) {
        case ADD_DATA_TO_MINE_PAGE:
            return fromJS(payload);
        case SET_IS_DOTED_TO_TRUE:
            return state.setIn([payload,'isDotShow'],1);
        case SET_IS_DOTED_TO_FALSE:
            return state.setIn([payload,'isDotShow'],0);
        default:
            return state;
    }
}

const defaultcourseLessonItemState = fromJS([]);
const courseLessonItemReducer = (state = defaultcourseLessonItemState , action) => {
    const {type,payload} = action;
    switch (type) {
        case ADD_DATA_TO_COURSE_LESSON:
            return state.push(...fromJS(payload));
        case SET_LESSON_TO_BE_PURCHASED:
            return state.setIn([payload,'isPurchased'],true);
        default:
            return state;
    }
}

const defaultPracticeCampItemState = fromJS([]);
const practiceCampItemReducer = (state = defaultPracticeCampItemState,action) => {
    const {type , payload} = action;
    switch (type) {
        case ADD_DATA_TO_PRACTICE_CAMP:
            return fromJS(payload);
        case SET_PRACTICE_CAMP_TO_BE_PURCHASED:
            return state.setIn([payload,'isPurchased'],true)
        default:
            return state;
    }
}

const defaultStudyItemState = fromJS([]);
const studyItemReducer = (state = defaultStudyItemState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_PURCHASED_LESSONS_TO_STUDY_PAGE:
            return state.push(fromJS(payload));

        
        default:
            return state;
    }
}

const defaultRechargeRecordState = fromJS([]);
const rechargeRecordReducer = (state = defaultRechargeRecordState , action) => {
    const {type,payload} = action;
    switch (type) {
        case ADD_RECORD_TO_RECHARGE_RECORD:
            return state.unshift(fromJS(payload));
        default:
            return state;
    }
}

const reducers = {
    account:balanceReducer,//账户余额 Number
    mineItemDateSource:mineItemReducer,//我的 页面的每一项的数据 Array
    courseLessonDataSource:courseLessonItemReducer,//讲堂的课程页面下面的数据源 Array
    practiceCampDataSource:practiceCampItemReducer,//讲堂的训练营下面的数据源  Array
    studyItemDatatSource:studyItemReducer, // 我的学习下面的数据源
    rechargeRecordDataSource:rechargeRecordReducer,//充值明细的数据源  Array
}

export default reducers;