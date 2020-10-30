import React from 'react'
import { ThemeContext, themes } from '@/utils/ctx/theme'

// 全局样式
import 'antd/dist/antd.css'  // antd的样式文件
import '@/assets/css/style.scss'

import {
    BrowserRouter,
    HashRouter,
    NavLink,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import routes from '@/views'

// 使用mobx状态管理数据
import { Provider } from 'mobx-react'
import store from '@/store'

export default class App extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            theme: themes.light
        }
    }

    changeTheme() {
        this.setState({
            theme: themes.dark
        })
    }

    // 生成导航菜单(只做一层循环)
    createNavs() {
        return routes.map(ele=>(
            <NavLink 
                key={ele.id} 
                to={ele.path}
                activeClassName='on'
                exact
            >
                {ele.text}
            </NavLink>
        ))
    }
    // 生成视图容器
    createRoutes() {
        let res = []
        routes.map(ele=>{
            res.push(
                <Route 
                key={ele.id} 
                exact 
                path={ele.path} 
                component={ele.component} 
            />
            )
            if(ele.children) {
                ele.children.map(ele=>{
                    res.push(
                        <Route 
                        key={ele.id} 
                        exact 
                        path={ele.path} 
                        component={ele.component} 
                    />
                    )
                })
            }
        })
        return res
    }

    render() {
        let { theme } = this.state
        return (
            <HashRouter>
                <Provider store={store}>
                    <ThemeContext.Provider value={theme}>
                        {/*<button onClick={this.changeTheme.bind(this)}>改变主题色</button>*/}
                        <div className='box1'>
                            { this.createNavs() }
                        </div>
                        <div className='box2'>
                            <Switch>
                                { this.createRoutes() }
                                <Redirect from='/*' to='/' />
                            </Switch>                        
                        </div>
                    </ThemeContext.Provider>
                </Provider>                
            </HashRouter>
        )
    }
    
}