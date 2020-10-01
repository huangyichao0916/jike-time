import React, { Component } from 'react';
import './course.styl';
import Header from './header/Header';
import {renderRoutes} from 'react-router-config';

class Course extends Component {
    render() { 
        console.log(this.props.route)
        return ( 
            <div className="course">
                <Header />
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default Course;