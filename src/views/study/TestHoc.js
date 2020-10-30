import React from 'react'

import roleHoc from '@/utils/hoc/roleHoc'

// React.Fragment 碎片

// @roleHoc
class TestHoc extends React.Component {
    render() {
        let { role } = this.props
        return (
            <React.Fragment>
                <div>
                    <h1>测试高阶组件</h1>
                    <h1>{role}</h1>
                    <h1>{this.props.getRoleName()}</h1>
                    {role===1 && <button>只有当role=1时才可以被看见</button>}
                </div>
                <div>9020930932</div>
            </React.Fragment>
            
        )
    }
}

export default roleHoc(TestHoc)  // 修饰、装饰
