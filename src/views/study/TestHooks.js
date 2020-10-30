import React from 'react'
import { useState, useEffect } from 'react'

// Hooks+无状态组件
// 全部都是类组件
// Hooks+无状态组件+类组件

// Hooks
// 是一套Api，让无状态组件（函数式组件）拥有类组件相似的特征
// 1、拥有state状态
// 2、拥有生命周期
// 3、拥有ref/context等特性

// useState
// 语法：const [msg, setMsg] = useState('hello 2005')


// useEffect
// 作用：为当前的函数式组件提供类似生命周期的特性
// 类似 componentDidMount()
// 类似 componentDidUpdate()
// 类似 componentWillUnmount()
// 语法：useEffect(fn,[])
// 在同一个函数式组件中，可同时使用多个useEffect。自已开启的定时器自己清除。

export default function TestHooks(props) {

    // 定义了一个count的声明式变量
    let [count, setCount] = useState(1000)
    let [bol, setBol] = useState(false)
    let [list, setList] = useState([])
    let timer = null

    function changeCount() {
        setCount(count+1)
    }

    // useEffect()完整语法
    useEffect(()=>{
        // 类似 componentDidMount() 的功能
        // 开启定时器、调接口、开启长连接
        timer = setInterval(()=>{
            console.log(1)
        }, 1000)
        return ()=>{
            // 类似 componentWillUnmount()
            // 关闭定时器、关闭长连接
            clearInterval(timer)
        }
    }, [count])
    // [count]，类似 componentDidUpdate() 的作用

    useEffect(()=>{
        document.title = '2005'
        // return undefined
    })

    return (
        <div>
            <h1>测试hooks</h1>
            <h3>{count}</h3>
            <button onClick={changeCount}>增加</button>
            <hr />
        </div>
    )
}