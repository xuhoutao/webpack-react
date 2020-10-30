import React from 'react'

export default class TestList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                { id: 1, name: 'lisi-1' },
                { id: 2, name: 'lisi-2' },
                { id: 3, name: 'lisi-3' },
                { id: 4, name: 'lisi-4' }
            ]
        }
    }

    rowClick(ele) {
        console.log('行', ele.id)
    }
    rowChange(e) {
        console.log(e)
    }

    // 这种方式渲染，可以做复杂的业务运算
    createList1() {
        let { arr } = this.state
        let res = []
        arr.map((ele,index)=>{
            // 写语句，可以做复杂的计算
            ele.checked = !(index%2==0)

            res.push(
                <div key={ele.id} onClick={this.rowClick.bind(this, ele)}>
                    <input type='checkbox' checked={ele.checked} onChange={this.rowChange.bind(this)} />
                    <span>{index}</span>
                    <span>--</span>
                    <span>{ele.name}</span>
                </div>
            )
        })
        return res
    }

    // 这种写法，一般不用做复杂的运算，不用对数组进行处理
    createList2() {
        let { arr } = this.state
        return arr.map((ele,index)=>(
            <div key={ele.id} onClick={this.rowClick.bind(this, ele)}>
                <span>{index}</span>
                <span>--</span>
                <span>{ele.name}</span>
            </div>
        ))
    }

    
    render() {
        let { arr } = this.state
        return (
            <div>
                <h1>列表渲染</h1>

                {/* [<div key='1'>1</div>, <div key='2'>2</div>, <div key='3'>3</div>] */}

                { this.createList1() }
                <hr />

                { this.createList2() }
                <hr />

                {
                    arr.map((ele,index)=>(
                        <div key={ele.id} onClick={this.rowClick.bind(this, ele)}>
                            <span>{index}</span>
                            <span>--</span>
                            <span>{ele.name}</span>
                        </div>
                    ))
                }

            </div>
        )
    }
} 