import React from 'react'


// 无状态组件（函数式组件）
// 就是没有state的组件，也没有生命周期，也没有this
// 这样的组件渲染性能更高、速度更快

// props
// 它是父子组件之间唯一纽带
// props是只读的，不能改


export default function TestPorps(props) {
    return(
        <div>
            <h1>测试props</h1>
            <h3>{props.msg}</h3>
            <button onClick={props.click}>触发自定义事件</button>
        </div>
    )
}