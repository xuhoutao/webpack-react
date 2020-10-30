import React from 'react'

function toggleRow2(flag, arr) {
    return flag ? arr[0] : arr[1]
}

export default class TestCondition extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bol: false,
            dis: 'block',
            sty: {
                'color':'red', 
                'fontSize': '100px'
            },
            display: 'none',
            bol2: true,
            type: 1
        }
    }
    toggle1() {
        // this.setState({bol: !this.state.bol})
        this.setState(state=>({bol:!state.bol}))
    }
    toggle2() {
        // this.setState({dis: this.state.dis==='block' ? 'hidden':'block'})
        this.setState(state=>({dis:state.dis==='block'?'hidden':'block'}))
    }
    toggle3() {
        this.setState(state=>({display: state.display==='block'?'none':'block'}))
    }
    toggleRow() {
        // return this.state.bol2 ? <div>第一行内容</div> : <div>第二行内容</div>
        let ele = null
        if (this.state.bol2) {
            ele = <div>第一行内容</div>
        } else {
            ele = <div>第二行内容</div>
        }
        return ele
    }
    toggle4() {
        this.setState(state=>({bol2: !state.bol2}))
    }
    createRow(type) {
        // let { type } = this.state
        let ele = null
        switch(type){
            case 1:
                ele = <div>11111</div>
                break
            case 2:
                ele = <div>22222</div>
                break
            case 3:
                ele = <div>33333</div>
                break
            case 4:
                ele = <div>44444</div>
                break
            default:
        }
        return ele
    }
    toggle5() {
        // this.setState({type: Math.ceil( Math.random()*4)})
        // this.setState(state=>{
        //     let type = 1
        //     if(state.type!==4) {
        //         type = state.type + 1
        //     }
        //     return { type }
        // })
        this.setState(state=>({type: state.type!==4 ? state.type+1 : 1}))
    }
    render() {
        let { bol, dis, sty, display, bol2, type } = this.state

        return (
            <div>
                <h1>测试条件渲染</h1>

                { bol && <h2>2005</h2> }
                <button onClick={this.toggle1.bind(this)}>显示/隐藏</button>
                <hr />

                <h2 className={dis}>2006</h2>
                <button onClick={this.toggle2.bind(this)}>显示/隐藏</button>
                <hr />

                {/*<h2 style={sty}>2007</h2>*/}
                <h2 style={{'display':display}}>2007</h2>
                <button onClick={this.toggle3.bind(this)}>显示/隐藏</button>
                <hr />       
                
                { bol2 ? <div>第一行内容</div> : <div>第二行内容</div> }
                { this.toggleRow() }
                { toggleRow2(bol2, [<div>第一行内容</div>, <div>第二行内容</div>])}
                <button onClick={this.toggle4.bind(this)}>显示/隐藏</button>
                <hr />

                { type===1 && <div>11111</div> }
                { type===2 && <div>22222</div> }
                { type===3 && <div>33333</div> }
                { type===4 && <div>44444</div> }
                { this.createRow(type) }
                <button onClick={this.toggle5.bind(this)}>显示/隐藏</button>

            </div>
        )
    }
}