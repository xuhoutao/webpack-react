import React from 'react'

// React表单
// 表单是单向绑定的

// 非受控表单：表单的值与state没有关系，它不受state控制。
// 注意：在react开发中，除了文件上传表单以外，不建议使用其它任何方式的非受控表单

// 受控表单：表单的值严格受state的控制，当state发生变化时，表单视图自动更新


let mobile = ''

export default class TestForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pass: '',
            desc: '',
            gender: '1',
            agree: false,
            level: 1,
            levelArr: [
                {id: 1, label: '高中'},
                {id: 2, label: '大专'},
                {id: 3, label: '本科'},
                {id: 4, label: '硕士'},
                {id: 5, label: '博士'}
            ]
        }
    }
    mobileInput(e) {
        console.log(e.target.value)
        mobile = e.target.value
    }
    // 非受表单提交
    submit() {        
        let name = document.getElementById('name').value
        let pass = this.refs.pass.value
        console.log('提交', {name,pass,mobile})
    }



    change(k, e) {
        // 受控表单取值，必须手动取值，原因是React表单默认是单向绑定的
        if (k === 'agree') {
            this.setState({[k]: e.target.checked})
        } else {
            this.setState({[k]: e.target.value})
        }  
    }
    // 受控表单提交
    submit2() {
        console.log('提交', this.state)
    }
    render() {
        let { name, pass, desc, gender, agree, levelArr, level } = this.state
        return (
            <div>
                <h1>使用表单</h1>

                {/*非受控表单*/}
                <span>用户名：</span>
                <input type='text' id='name' />
                <br />
                <span>密 码：</span>
                <input type='password' ref='pass' />
                <br />
                <span>手机号：</span>
                <input type='text' onInput={this.mobileInput.bind(this)} />
                <br />
                <span>头像上传：</span>
                <input type='file' />
                <br />
                <button onClick={this.submit.bind(this)}>提交</button>
                <hr />


                {/*受控表单*/}
                <span>用户名：</span>
                <input type='text' value={name} onChange={this.change.bind(this, 'name')} />
                <br/>
                <span>密 码：</span>
                <input type='password' value={pass} onChange={this.change.bind(this, 'pass')} />
                <br/>
                <span>个人简介：</span>
                <textarea value={desc} onChange={this.change.bind(this, 'desc')}></textarea>
                <br/>
                <span>性别：</span>
                <input 
                    type='radio' 
                    name='gender'
                    value='1'
                    checked={gender==1} 
                    onChange={this.change.bind(this, 'gender')}
                /><span>男</span>
                <input 
                    type='radio' 
                    name='gender'
                    value='2'
                    checked={gender==2} 
                    onChange={this.change.bind(this, 'gender')} 
                /><span>女</span>
                <br/>
                <input type='checkbox' checked={agree} onChange={this.change.bind(this, 'agree')} />
                <span>是否同意该协议</span>
                <br/>
                <span>选择学历：</span>
                <select value={level} onChange={this.change.bind(this, 'level')}>
                    {
                        levelArr.map(ele=>(
                            <option value={ele.id} key={ele.id}>{ele.label}</option>
                        ))
                    }
                </select>
                <br/>
                <button onClick={this.submit2.bind(this)} >提交</button>


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


            </div>
        )
    }
}