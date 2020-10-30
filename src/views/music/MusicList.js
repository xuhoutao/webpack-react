import React from 'react'

import { fetchQQ } from '@/utils/api'
import { TestRouter, Child1 } from '@/components'

export default class MusicList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        const str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=54877046290945921&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

        function handleParams(str) {
            const obj = {}
            str.split('&').map(ele=>{
                const arr = ele.split('=')
                obj[arr[0]] = arr[1]
            })
            return obj
        }

        const params = handleParams(str)
        // 把 w 字段改成中文，否则调回来的音乐列表的title是乱码
        params.w = '周杰伦'

        // 调接口
        fetchQQ(params).then(res=>{
            console.log('成功', res)
            this.setState({list: res.song.list})
        }).catch(err=>{
            console.log('失败', err)
        })
    }

    // 跳转至详情
    skipToDetail(ele) {
        // 编程式编程路由跳转
        // 动态路由、路由传参
        console.log(ele)
        this.props.history.push('/music/detail/'+ele.id+'/'+ele.title)
    }

    render() {
        let { list } = this.state   
        return (
            <div>
                <h1>首页</h1>

                {/* 音乐列表 */}
                {
                    list.map(ele=>(
                        <div 
                            key={ele.id} 
                            onClick={this.skipToDetail.bind(this, ele)}
                        >
                            {ele.title}
                        </div>
                    ))
                }
                <hr/>

                <TestRouter />
                <Child1 />
            </div>
        )
    }
}
