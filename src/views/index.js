import loadable from "@loadable/component"

// ()=>import() 需要安装 @babel/plugin-syntax-dynamic-import 来支持这种语法
// 这种语法，eslint默认是无法解析的，需要安装 babel-eslint 这个解析器来解析

const TestJsx = loadable(()=>import('./study/TestJsx'))
const TestProps = loadable(()=>import('./study/TestProps'))

const MusicList = loadable(()=>import('./music/MusicList'))
const MusicDetail = loadable(()=>import('./music/MusicDetail'))

const TodoList = loadable(()=>import('./todo/TodoList'))
const TodoDetail = loadable(()=>import('./todo/TodoDetail'))

import TestState from './study/TestState'
import TestEvent from './study/TestEvent'
import TestCondition from './study/TestCondition'
import TestList from './study/TestList'
import TestForm from './study/TestForm'
import TestLife from './study/TestLife'
import TestCombine from './study/TestCombine'
import TestLift from './study/TestLift'
import TestHoc from './study/TestHoc'
import TestContext from './study/TestContext'
import TestHooks from './study/TestHooks'

const routes = [
    {
        id: 10,
        path: '/todo',
        component: TodoList,
        text: 'ToDoLiSt',
        children: [
            {
                id: 1001,
                path: '/todo/detail/:id',
                component: TodoDetail,
                text: 'Todo详情'
            }
        ]
    },
    {
        id: 11,
        path: '/',
        component: MusicList,
        text: '音乐列表',
        children: [
            {
                id: 1101,
                // 动态路由
                // 在详情页面中，使用 this.props.match.params来接收
                path: '/music/detail/:id/:name',
                component: MusicDetail,
                text: '音乐详情'
            }
        ]
    },
    {
        id: 12,
        path: '/jsx',
        component: TestJsx,
        text: '测试JSX'
    },
    {
        id: 13,
        path: '/props',
        component: TestProps,
        text: '测试Props'
    }
]

export default routes

