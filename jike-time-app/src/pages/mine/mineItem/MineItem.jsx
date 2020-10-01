import React, { Component } from 'react';
import './mineItem.styl'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setIsDotedToFalseActionCreator} from '@/store/action';


class MineItem extends Component {
    render() {
        // console.log('MineItem重新渲染了');
        let {isDotShow,title,myClassName,linkTo,balance,id,icon} = this.props;
        // console.log('-----',id,isDotShow)
        isDotShow = isDotShow === 1 ? true : false;
        return (
                <Link to={linkTo} className={myClassName} onClick={() => this.props.handleOnClick(id,isDotShow)}>
                    <span className="icon iconfont left" dangerouslySetInnerHTML={{ __html: icon}}></span>
                    <div className="title-wrapper">
                        <div className="title">{title}</div>
                        {isDotShow && <div className="red-dot"></div>}
                        <div className="detail">{balance}</div>      
                    </div>
                    <span className="icon iconfont right">&#xe613;</span>
                </Link>
        );
    }
}

const mapStateToProps = state => {
    return {
        balance : state.getIn(['account']),
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleOnClick:(id,isDotShow) => {
            console.log('id为'+id)
            if (!isDotShow) {
                console.log('因为本身不带有Dot，所以阻断了dispatch请求')
                return; 
            }
            dispatch(setIsDotedToFalseActionCreator(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MineItem);