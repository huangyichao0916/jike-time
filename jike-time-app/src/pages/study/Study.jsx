import React from 'react';
import './study.styl'
import { Header } from './studyHeader.style'
import { connect } from 'react-redux'
import StudyItem from './studyItem/StudyItem'
import {Link} from 'react-router-dom';

const Study = props => {
    const studyItemList = props.studyItems.map((item, i) => {
        return (
            <StudyItem {...item} key={i}/>
        )
    })
    const len = studyItemList.length > 0 ? true : false;
    return (
        <div className="study">
            <Header>
                <span className="study-header-title">我的学习</span>
                <span className="icon iconfont">&#xe615;</span>
            </Header>
            <div className="study-time">
                本周时长<strong>0</strong>小时<strong>0</strong>分钟 <span className="icon iconfont">&#xe613;</span>
            </div>
            <div className="study-record">
                <div className="study-record-item notes">
                    <div>0</div>
                    <div>笔记</div>
                </div>
                <div className="study-record-item comments">
                    <div>0</div>
                    <div>留言</div>
                </div>
                <div className="study-record-item collection">
                    <div>0</div>
                    <div>收藏</div>
                </div>
                <div className="study-record-item download">
                    <div>0</div>
                    <div>下载</div>
                </div>
            </div>

            <div className="study-content-wrapper">
                {!len &&
                    <div> <div className="no-study-record">暂无学习内容</div>
                        <Link to="/course">
                            <button className="subscribe-button">订阅</button>
                        </Link>
                    </div>
                }
                {
                    len && studyItemList
                }
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        studyItems: state.getIn(['studyItemDatatSource']).toJS().reverse(),
    }
}


export default connect(mapStateToProps)(Study);