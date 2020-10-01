import React from 'react';
import {Redirect} from 'react-router-dom';

import Course from '@/pages/course/Course';
import Discover from '@/pages/discover/Discover';
import Mine from '@/pages/mine/Mine';
import Study from '@/pages/study/Study';
import App from '@/App';
import Account from '@/pages/account/Account';
import Home from '@/pages/home/Home';
import Lesson from '@/pages/course/lesson/Lessons';
import LessonEveryday from '@/pages/course/lessonEveryday/LessonEveryday';
import PracticeCamp from '@/pages/course/practiceCamp/PracticeCamp';
import RechargeRecord from '@/pages/rechargeRecord/RechargeRecord';

const routes = [
    {
        path: '/',
        // exact: true,
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => <Redirect to='/home'/>
            },
            {
                path: '/home',
                // exact: true,
                component: Home,
                routes: [
                    {
                        path: '/home',
                        exact: true,
                        render: () => <Redirect to='/home/discover'/>
                    },
                    {
                        path: '/home/discover',
                        component: Discover,
                    },
                    {
                        path: '/home/course',
                        // exact: true,
                        component: Course,
                        routes: [
                            {
                                path: '/home/course',
                                exact: true,
                                render: () => <Redirect to='/home/course/lesson' />
                            },
                            {
                                path: '/home/course/lesson',
                                component: Lesson,
                            },
                            {
                                path: '/home/course/practiceCamp',
                                component: PracticeCamp,
                            },
                            {
                                path: '/home/course/lessonEveryday',
                                component: LessonEveryday,
                            },
                        ]
                    },
                    {
                        path: '/home/mine',
                        component: Mine,
                    },
                    {
                        path: '/home/study',
                        component: Study,
                    }
                ]
            },
            {
                path: '/account',
                // exact: true,
                component: Account,
            },
            {
                path: '/rechargeRecord',
                component: RechargeRecord,
            }
            
        ]
    },

]

export default routes;