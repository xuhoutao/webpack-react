import React from 'react'


// 在React路由中，只有被Route直接包裹过的组件中，才能访问到路由信息及其API

// 对那些没有路由信息及API的组件，如何才能使用到这些路由信息和API呢？要使用 withRouter（高阶组件）
import { withRouter } from 'react-router-dom'

class TestRouter extends React.Component {
    render() {
        // console.log('----test rourer', this.props)
        return (
            <div>
                <h1>这是一个没有被 Route 组件包裹的组件</h1>
            </div>
        )
    }
}

export default withRouter(TestRouter)