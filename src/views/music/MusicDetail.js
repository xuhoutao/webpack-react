import React from 'react'

export default class MusicDetail extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id
        // 根据音乐id调接口获取完整的音乐详情
    }
    render() {
        let id = this.props.match.params.id
        let name = this.props.match.params.name
        return(
            <div>
                音乐详情 <h1>{id}</h1>
                <h1>{name}</h1>
            </div>
        )
    }
}