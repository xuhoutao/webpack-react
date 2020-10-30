import React from 'react'

// props.children代表的是当前组件被使用时其内部所包裹的所有子元素

export default function Modal(props) {
    return (
        <div className='qf-modal'>
            <div className='header'>
                { props.title }
                <span>X</span>
            </div>
            <div className='content'>
                { props.content }
            </div>
            <div className='footer'>
                { props.btns }
            </div>
        </div>
    )
}