import React from 'react'

import { Child2, Child3 } from '@/components'

export default class TestLift extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 100
        }
    }
    changeCount(val) {
        this.setState({count: val})
    }
    render() {
        let { count } = this.state
        return (
            <div>
                <h1>测试状态提升</h1>
                <Child2 
                    count={count} 
                    onChange={this.changeCount.bind(this)}
                    msg={'hello child2'}
                    title={<span>Hello Child2</span>}
                />
                <hr />
                <Child3 count={count} />
            </div>
        )
    }
}