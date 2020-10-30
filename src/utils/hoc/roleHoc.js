import React from 'react'

// 高阶组件、高阶函数（纯函数）
// 作用：对组件中的业务逻辑进行封装和复用
// 比如，当多个组件中有相同的业务逻辑时，我们就可以使用高阶组件这种思想来实现代码复用
// 高阶组件是一种设计模式、开发经验、也是一种组件封装思想

// 入参是React类（组件），返回值是一个新的React类（组件）

// 高阶组件，也叫容器组件
// WrappedComponent 被高阶组件修饰的组件，也叫UI组件
export default function roleHoc(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                role: 1
            }
        }

        componentDidMount() {
            // 调接口获取当前用户的角色
            this.setState({role: 1})
        }

        getRoleName() {
            let res = ''
            switch(this.state.role) {
                case 1:
                    res = 'CEO'
                    break
                case 2:
                    res = '经理'
                    break
                default:
                    res = '普通员工'
            }
            return res
        }
        
        render() {
            return (
                <div>
                    <WrappedComponent 
                        role={this.state.role}
                        getRoleName={this.getRoleName.bind(this)}
                    />
                    <h3>footer</h3>
                </div>
            )
        }
    }
}
 