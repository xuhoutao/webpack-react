import React from 'react'
import { Child1 } from '@/components'

// 类组件
// 有state，有生命周期，有this
// 相对无状态组件来说，它的性能较差、渲染速度也更慢

// state
// 特点1：单向绑定，state变化视图自动更新，视图变化state不更新的
// 特点2：单向数据流，数据只能向下传递
// 特点3：state不能直接修改，要使用 this.setState()来修改
// 特点4：this.setState()是异步的，但在定时器里是同步的
// 特点5：多个this.setState()同时发生时，会被react合并成一个this.setState({})


export default class TestState extends React.Component {
    // 构造器函数，当类被实例化时调用
    constructor(props) {
        super(props) // 调用父组件的构造器函数，必须是当前构造器第一行代码
        // 单向绑定，state变化视图自动更新，视图变化state不更新的
        this.state = {
            msg: 'hello 2005',
            count: 1
        }
    }

    // 自定义方法
    changeMsg() {
        this.setState({
            msg: 'hello 2007'
        }, ()=>{
            console.log('msg 更新完成')
        })
    }

    add() {
        // this.setState({count: this.state.count+1})
        // this.setState(function(state, props){
        //     return {
        //         count: state.count+1
        //     }
        // })
        this.setState((state, props)=>({count:state.count+1}))
    }

    sub() {
        // this.setState({count: this.state.count-1})
        // this.setState(function(state, props) {
        //     return {
        //         count: state.count-1
        //     }
        // })
        this.setState((state, props)=>({count:state.count-1}))
    }

    
    // 定义类组件时，这唯一的一个必须的生命周期
    render() {
        // 写任何的代码运算
        let { msg, count } = this.state

        return (
            <div>
                <h1>测试state</h1>
                <h1>{msg}</h1>
                <Child1 msg={msg} />
                <button onClick={this.changeMsg.bind(this)}>改变msg</button>
                <hr />
                <h1>{count}</h1>
                <button onClick={this.add.bind(this)}>加</button>
                <button onClick={this.sub.bind(this)}>减</button>
            </div>
        )
    }
}