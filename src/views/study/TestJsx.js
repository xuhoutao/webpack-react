import React from 'react'
import avatar from '@/assets/image/1.png'

// jsx = javascript xml 是javascript的语言扩展、语法糖
// 你如何理解jsx？
// jsx是变量、表达式
// jsx是对象
// jsx可以嵌套，要使用 {} 包裹
// jsx可以防注入攻击

const msg = 'hello msg'
const col = 'box'

const ele2 = <h1>{msg}</h1>

const ele1 = <div>
<h1>hello react</h1>
{ ele2 }
</div>

function createDom(arg) {
    return <h1 className={col}>{arg*100}</h1>
}

const ele3 = createDom(100)

// react元素
// const hello = <h1 className='greeting'>HELLO WORLD.</h1>
const hello = React.createElement(
    'h1',
    {className: 'greeting'},
    'HELLO WORLD.'
)

// 无状态组件
export default function TestJsx() {
    return (
        <div>
            {ele1}
            {ele3}
            {/* 这是我的注释 */}
            {createDom(300)}
            <img src={avatar} />
            { hello }
        </div>
    )
}
