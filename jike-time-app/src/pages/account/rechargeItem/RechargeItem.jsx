import React, { Component } from 'react';
import './rechargeItem.styl'
class RechargeItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div 
            className={"recharge-item "+ this.props.className}
            onClick={this.props.handleHighlight}
            >
                <div>￥{this.props.money}</div>
            </div>
         );
    }
}
 
export default RechargeItem;