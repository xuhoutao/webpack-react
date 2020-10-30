import React from 'react'

import PropTypes from 'prop-types'

// 无状态组件
// 函数式组件（纯函数）
// PureComponent(纯组件)



function Child2(props) {
    function click(e) {
        console.log(e)
        // 触发父组件传递过来的自定义事件
        props.onChange(200)
    }
    return(
        <div>
            <h1>{props.count}</h1>
            <button onClick={click}>改变Count</button>
        </div>
    )
}

// props: {
//     msg: {
//         type: String,
//         required: false,
//         default: 'hello'
//     }
// }


// 自定义属性的类型检查，一般检查两个东西：
// 1、检查自定义属性的数据类型
// 2、检查自定义属性的必填与非必填

// 在React中，推荐使用 prop-types 这个库来实现自定义属性的类型检查
// cnpm install prop-types -S

Child2.propTypes = {
    count: PropTypes.number,
    msg: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.element
}

export default Child2