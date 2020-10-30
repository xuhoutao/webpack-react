import React from 'react'

// React 上下文
// 作用：在React DOM树中自上而下地传递数据
// 用法：
// 1、创建上下文对象 const AbcContext = React.createContext()
// 2、在App根组件外面包裹 <AbcContext.Provider value={}></AbcContext.Provider>
// 3、在组件中，使用 .contextType 这个属性来添加上下文数据，代码中就可以通过 this.context 进行访问
// 4、在组件中，或者使用 ThemeContext.Consumer 来使用上下文数据

import { ThemeContext } from '@/utils/ctx/theme'


// [使用上下文的第一种写法]
// class TestContext extends React.Component {
//     render() {
//         console.log('theme ctx', this.context)
//         const theme = this.context
//         return (
//             <div className='test-ctx' style={{background: theme.background, color: theme.color}}>
//                 <h1>测试上下文</h1>
//             </div>
//         )
//     }
// }
// TestContext.contextType = ThemeContext
// export default TestContext


// [使用上下文的第二种写法]
export default class TestContext extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (theme)=>(
                        <div className='test-ctx' style={{background: theme.background, color: theme.color}}>
                            <h1>测试上下文</h1>
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
