import React, { useEffect, useState } from 'react';
import PracticeCampItem from './practiceCampItem/PracticeCampItem'
import './practiceCamp.styl'
import axios from 'axios';
import '@/mock/course-practiceCamp-data';
import {connect} from 'react-redux';
import {addDataToPracticeCampActionCreator} from '@/store/action';
import BScroll from 'better-scroll';

const PracticeCamp = props => {
    let {practiceCampDataSource,loadPracticeCampData} = props;
    useEffect(() => {
        if (practiceCampDataSource.length > 0) {
            console.log('因为practiceCampDataSource中有数据，所以阻断了axios请求');
            return;
        }
        axios.get('mock/course/practiceCamp')
            .then(res => res.data.practiceCamps)
            .then(res => loadPracticeCampData(res))
    }, [])
    const [scroll,setScroll] = useState(null);
    useEffect(() => {
        const bscroll = new BScroll('.practiceCamp-wrapper',{
            scrollX:false,
            click:true,
            scrollY:true,
        })
        setScroll(bscroll);
    }, [])

    let items = practiceCampDataSource.map((item, i) => {
        const { img, title, name, desc, month, day, price, oldprice, isPurchased} = item;
        return (
            <PracticeCampItem
                img={img}
                key={i}
                id={i}
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
    return (
        <div className="practiceCamp-wrapper">
            <div className="content">
                <div className="practiceCamp-swiper-wrapper"></div>
                <div className="practiceCampCamp-item-wrapper">
                    <div className="practiceCamp-title">
                        <div className="practiceCamp-main-title">训练营</div>
                        <div className="go-my-classroom">去我的教室学习</div>
                    </div>
                    {
                        items
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        practiceCampDataSource:state.getIn(['practiceCampDataSource']).toJS(),
    }
}
const mapDispatchToProps = dispatch => {
    return{
        loadPracticeCampData:(payload) => {
            dispatch(addDataToPracticeCampActionCreator(payload));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PracticeCamp);