// 定义状态管理

import { observable } from 'mobx'

// observable 可观察的，用于定义可被组件共享的状态数据
// 装饰器用于修饰类或类的属性（方法）

import TodoStore from './modules/TodoStore'
import GoodStore from './modules/GoodStore'

class Store {
    // 在构造器中，对所有的子store进行实例化
    constructor() {
        this.todo = new TodoStore()
        this.good = new GoodStore()
    }
}

export default new Store() // 实例化  store.todo

