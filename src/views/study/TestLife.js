import React from 'react'

// React生命周期

// React生命周期只有三个阶段

// 挂载阶段：3
// 更新阶段：2
// 卸载阶段：1

export default class TestLife extends React.Component {

    // 挂载阶段：3

    // 构建器，组件实例化时被调用
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            num: 1
        }
        console.log('-------- constructor')
        // 不能使用this.setState()
        // 不建议把props赋值给state
        // super(props) 必须是第一行代码
    }
    // static getDerivedStateFromProps() {
    //     console.log('-------- getDerivedStateFromProps')
    //     return null
    // }

    // DOM初始化渲染完成时被调用
    componentDidMount() {
        console.log('-------- componentDidMount')
        // 相当于是Vue中的mounted()
        // 调接口
        // 开启定时器，开启websocket长连接
    }


    // 更新阶段：2

    // [特殊]它是一个开关，它控制着组件的更新能力
    // 当它返回值是假时，当前组件的更新能力就失败了
    shouldComponentUpdate() {
        console.log('-------- shouldComponentUpdate')
        return false
    }

    // 在更新阶段，React是怎么工作的？
    // 组件初始化完成后，内存中存在一个virtual DOM（本质上就是一个用于描述真实DOM结构的json变量）
    // 当state发生变化时，会生成一个新的 vm2
    // React就执行 Diff(vm1, vm2) 找出最小的变化差异（脏节点）
    // 最后再通过真实的DOM操作来更新DOM

    // 当state发生变化时，DOM重新渲染并更新完成时被调用
    componentDidUpdate() {
        console.log('-------- componentDidUpdate')
        // 相当于是Vue中的updated()
    }


    // 卸载阶段：1

    // 当组件销毁时被调用
    componentWillUnmount() {
        console.log('-------- componentWillUnmount')
        // 相当于是Vue中的beforeDestroy()
        // 清除定时器，清除一些占用内在的变量和websocket长连接
    }


    
    changeCount() {
        this.setState({count: 100})
    }
    // 渲染函数，渲染时被调用
    render() {
        console.log('-------- render')
        let { count } = this.state
        return (
            <div>
                <h1>测试生命周期</h1>

                <h2>{count}</h2>
                <button onClick={this.changeCount.bind(this)}>更新数据</button>
            </div>
        )
    }
    
}