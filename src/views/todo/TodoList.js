import React from 'react'

// 使用antd组件
import { Button } from 'antd'


import { observer, inject } from 'mobx-react'
// inject 表示注入状态管理的数据
// observer 观察者，当状态管理数据发生变化时，当前组件自动更新

@inject('store')
@observer
class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }
    }
    // 实现TODO LIST 功能
    todoChange(e) {
        this.setState({task: e.target.value})
    }
    remove(idx) {
        let { todo } = this.props.store
        todo.delTodo(idx)
    }
    comfirm() {
        let { todo } = this.props.store
        todo.addTodo(this.state.task)
        this.setState({task: ''})
    }
    skipToDetail(ele) {
        this.props.history.push('/todo/detail/'+ele.id)
    }
    render() {
        let { task } = this.state
        let { todo } = this.props.store
        return(
            <div>
                <input value={task} onChange={this.todoChange.bind(this)} />
                <button onClick={this.comfirm.bind(this)}>添加任务</button>
                <div>
                    {
                        todo.list.map((ele, idx)=>(
                            <div key={ele.id}>
                                <span>{ele.id}</span>
                                <span>---</span>
                                <span onClick={this.skipToDetail.bind(this, ele)}>{ele.task}</span>
                                <span>---</span>
                                <span onClick={this.remove.bind(this, idx)}>删除</span>
                            </div>)
                        )
                    }
                </div>
                <hr/>

                <Button type="primary">Primary Button</Button>
                <Button type="link">Link Button</Button>
            </div> 
        )
    }
}

export default TodoList
// export default inject('store')(observer(TodoList))