import React from 'react';
import './practiceCampItem.styl'
import { connect } from 'react-redux'
import { practiceCampBuyLessonActionCreator } from '@/store/action'
const PracticeCampItem = props => {
    const {
        img,
        lessonName,
        teacherName,
        teacherDesc,
        month,
        day,
        price,
        oldprice,
        onHandleJoinCamp,
        isPurchased,
        id,
    } = props;

    return (
        <div className="practiceCamp-item">
            <div className="practiceCamp-item-img">
                <img src={img} alt="图片不见了" />
            </div>
            <div className="practiceCamp-item-detail">
                <div className="practiceCamp-item-name">{lessonName}</div>
                <div className="practiceCamp-item-teacher">
                    <div className="practiceCamp-item-teacher-name">{teacherName}</div>
                    <div className="practiceCamp-item-teacher-desc">{teacherDesc}</div>
                </div>
                <div className="practiceCamp-item-time">最近开营：{month}月{day}日</div>
                <div className="price-and-join">
                    <div className="practiceCamp-item-price">￥{price}</div>
                    <div className="practiceCamp-item-oldprice">￥{oldprice}</div>
                    {!isPurchased && <button onClick={() => {
                        onHandleJoinCamp(price,id,{
                            lessonName,
                            teacherName,
                            teacherDesc,
                        });
                    }}>立即报名</button>}
                    {isPurchased && <button className="hasBeenPurchased">已报名</button>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleJoinCamp: (payload,id,lesson) => {
            // console.log(payload,id)
            dispatch(practiceCampBuyLessonActionCreator(payload,id,lesson))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PracticeCampItem);