import React from 'react'

import ReactDOM from 'react-dom'
import App from './App'
import '@/assets/css/style.scss'
// 把自定义的App组件，渲染到真实的DOM节点去
ReactDOM.render(<App />, document.getElementById('app'))


// 以下代码，用于复习

// import { fetchUserList } from '@/utils/api'
// import a from '@/assets/image/1.png'
// import '@/assets/css/style.scss'

// /*eslint-disable*/
// console.log('started')
// console.log(a)
// console.log(1)
// /*eslint-enable*/

// document.getElementById('h1').style.color = 'red'
// document.getElementById('img').src = a
// fetchUserList()


