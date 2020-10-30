import React from 'react'

import { withRouter } from 'react-router-dom'

function Child1(props) {
    // console.log('child1 props', props)
    return(
    <div>{props.msg}</div>
    )
}

export default withRouter(Child1)
