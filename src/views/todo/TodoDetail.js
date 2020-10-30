import React from 'react'

// 在函数式组件中，如何使用 mobx
import { observer, inject } from 'mobx-react'

// [用function关键字来定义无状态组件]
// function TodoDetail(props) {
//     console.log('store', props.store)
//     let { todo } = props.store
//     return (
//         <div>
//             <h1>todo 详情</h1>
//             <h1>总共有多少<span>{todo.list.length}</span>条任务</h1>
//         </div>
//     )
// }


// [用箭头函数来定义无状态组件]
const TodoDetail = (props)=>{
    console.log('store', props.store)
    let { todo } = props.store
    return (
        <div>
            <h1>todo 详情</h1>
            <h1>总共有多少<span>{todo.list.length}</span>条任务</h1>
        </div>
    )
}

export default inject('store')(observer(TodoDetail))
