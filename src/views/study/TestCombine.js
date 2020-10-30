import React from 'react'

import { Modal } from '@/components'

function MobileBtns(props) {
    return (
        <div>
            <span className='confirm'>确定</span>
            <span className='cancel'>取消</span>
        </div>
    )
}
function MobileContent(props) {
    return (
        <div>
            <span>手机：</span>
            <input />
        </div>
    )
}

function LogoutBtns(props) {
    return (
        <div>
            <span className='del'>确定</span>
        </div>
    )
}

export default class TestCombine extends React.Component {
    render() {
        return (
            <div>
                <h1>测试组合</h1>

                <Modal 
                    title={<span>修改手机</span>} 
                    btns={<MobileBtns />}
                    content={<MobileContent />} 
                />

                <Modal 
                    title={<span>警告</span>} 
                    btns={<LogoutBtns />} 
                    content={<div>你确定要注销当前会员吗？</div>}
                />
            </div>
        )
    }
}