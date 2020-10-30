import React from 'react'

// 事件绑定
// 所有事件绑定都要以on开头，比如绑定单击事件用'onClick', 绑定键盘事件用'onKeyUp'

export default class TestEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 1
        }
        this.clickHandle = this.clickHandle1.bind(this, '2', false)
    }

    // 用于ES5的方式来绑定事件
    // 事件对象永远都是最后一个参数
    clickHandle1(arg1, arg2, e) {
        // 阻止默认事件
        e.preventDefault()
        // 阻止冒泡
        e.stopPropagation()
        console.log('clicked', this)
        console.log('e', e)
        console.log('事件传参', arg1, arg2)
        this.setState({num: 100})
    }

    // 用于ES6的方式来绑定事件
    clickHandle2(arg3, e, arg4) {
        // 阻止默认事件
        e.preventDefault()
        // 阻止冒泡
        e.stopPropagation()
        console.log('clicked', this)
        console.log('e', e)
        console.log('事件传参', arg3, arg4)
        this.setState({num: 100})
    }

    // 键盘事件绑定，使用键盘码实现不同的按钮事件
    enterHandle(e) {
        if(e.keyCode===13) {
            console.log('提交表单')
        }
    }

    render() {
        return (
            <div>
                <h1>测试事件绑定</h1>

                <button onClick={this.clickHandle1.bind(this, '1', true)}>事件一</button>
                <button onClick={this.clickHandle}>事件二</button>

                <button onClick={(e)=>this.clickHandle2('3', e, [1,2,3])}>事件三</button>

                <hr />

                <input type='text' onKeyUp={this.enterHandle.bind(this)} />



            </div>
        )
    }
}
