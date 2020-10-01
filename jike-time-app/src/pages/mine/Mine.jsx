import React, { Component } from 'react';
import './mine.styl'
import avatar from '@/assets/imgs/avatar.JPG';
import imgg from '@/assets/imgs/account.png';
import MineItem from './mineItem/MineItem'
import Swiper from "swiper"
import "swiper/css/swiper.min.css";
// import axios from 'axios';
import classNames from 'classnames';
import { connect } from 'react-redux'
// import { addDataToMinePageActionCreator } from '@/store/action';
import BScroll from 'better-scroll';

class Mine extends Component {
    componentDidMount() {
        new Swiper(".slider-container", {
            loop: true,
            autoplay: {
                delay: 2000,
            },
        })
        this.bscroll = new BScroll('.bscroll-wrapper', {
            scrollY: true,
            click: true,
            scrollX: false
        })
        // console.log(this.props.items.size)
        if (this.props.items.length > 0) {
            return;
        }
        // axios.get('/mine/mineItem.json')
        //     .then(res => res.data.items)
        //     .then(res => {
        //         this.props.loadMineItemData(res)
        //         // console.log('reload');
        //     })
    }
    render() {
        let { items } = this.props;
        items = items.map(i => {
            // let id = i.getIn(['id']);
            // let title = i.getIn(['title']);
            // let isBalanceShow = i.getIn(['isBalanceShow']);
            // let linkTo = i.getIn(['linkTo']);
            // let isDotShow = i.getIn(['isDotShow']);
            // let icon = i.getIn(['icon']);

            const { id, title, isBalanceShow, linkTo, isDotShow, icon } = i;

            const myClassName = classNames({
                'mine-item-wrapper': true,
                'hidden': isBalanceShow === 1 ? false : true,
            })
            return (
                <MineItem
                    title={title}
                    linkTo={linkTo}
                    myClassName={myClassName}
                    isDotShow={isDotShow}
                    id={id}
                    key={id}
                    icon={icon}
                />
            )
        })
        return (
            <div className="mine">
                <div className="mine-header-wrapper">
                    <span>我的</span>
                    <span className="icon iconfont">&#xe665;</span>
                </div>
                <div className="bscroll-wrapper" >
                    <div className="content">
                        <div className="mine-info-wrapper">
                            <div className="avatar">
                                <img src={avatar} alt="图片不见了" />
                            </div>
                            <div className="name-and-phone">
                                <h3 className="name">
                                    Geek_14dce3
                                </h3>
                                <div className="phone-and-selfPage">
                                    <div className="phone">12345678910</div>
                                    <div className="selfPage">
                                        个人主页<span className="icon iconfont right">&#xe613;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src={imgg} alt="图片不见了" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                        {items.length > 0 && items}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.getIn(['mineItemDateSource']).toJS(),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // loadMineItemData: (data) => {
        //     dispatch(addDataToMinePageActionCreator(data));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);