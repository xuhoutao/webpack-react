import { 
    makeObservable, 
    observable, 
    action,
    makeAutoObservable,
} from 'mobx'

// observable 可被观察的，用于定义可共享的数据，相当于是Vuex中的 state
// action 相当于Vuex中的 mutations + actions，用于定义改变state的方法

// 特点强调：装饰器只是用来修饰class类及其属性和方法的

// [mobx 5]写法
// export default class TodoStore {
//     @observable list = [
//         {id: 1, task: '睡觉'}
//     ]
//     @action addTodo(payload) {
//         this.list.push({
//             id: Date.now(),
//             task: payload
//         })
//     }
// }

// [mobx 6]写法
export default class TodoStore {
    constructor() {
        makeObservable(this, {
            list: observable,
            msg: observable,
            addTodo: action,
            delTodo: action
        })
    }

    list = [
        {id: 1, task: '睡觉'},
        {id: 2, task: '吃饭'}
    ]
    msg = 'hello mobx 6'

    addTodo(payload) {
        this.list.push({
            id: Date.now(),
            task: payload
        })
    }

    delTodo(payload) {
        this.list.splice(payload, 1)
    }
}

// export default class TodoStore {
//     constructor() {
//         makeAutoObservable(this)
//     }
//     msg = 'hello mobx 6'
// }