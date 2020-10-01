import React from 'react';
import './footer.styl';
import { NavLink } from 'react-router-dom';

// import {renderRoutes} from 'react-router-config';

const Footer = props => {
    // const {route} = props;
    // return(
    //     <div className="footer">
    //         {renderRoutes(route.routes)}
    //     </div>
    // )
    return (
        <div className="footer">
            <div className="footerItem">
                <NavLink to="/home/discover" exact activeClassName="highlight">
                    <span className="icon iconfont">&#xe600;</span>
                    <div className="footerItemContent">发现</div>
                </NavLink>
            </div>
            <div className="footerItem">
                <NavLink to="/home/course" activeClassName="highlight">
                    <span className="icon iconfont">&#xe663;</span>
                    <div className="footerItemContent">讲堂</div>
                </NavLink>
            </div>
            <div className="footerItem">
                <NavLink to="/home/study" activeClassName="highlight">
                    <span className="icon iconfont">&#xe602;</span>
                    <div className="footerItemContent">学习</div>
                </NavLink>
            </div>
            <div className="footerItem">
                <NavLink to="/home/mine" activeClassName="highlight">
                    <div className="footer-red-dot"></div>
                    <span className="icon iconfont">&#xe603;</span>
                    <div className="footerItemContent">我的</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Footer;