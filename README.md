# 环境

window7 / 10
node.js v10+
webpack + react + react-router + mobx + sass + antd

# 淘宝镜像

npm install -g cnpm --registry=https://registry.npm.taobao.org

# webpack

用于打包上线  npm run build

用于本地开发  npm run serve


1、安装webpack

cnpm install webpack -g
cnpm install webpack-cli -g

cnpm install webpack -D
cnpm install webpack-cli -D

2、启动热更新

```
var webpack = require('webpack')

config.devServer.hot = true
config.plugins.push(new webpack.NamedModulesPlugin())
config.plugins.push(new webpack.HotModuleReplacementPlugin())
```

3、如何区分生产和开发环境？

cnpm install cross-env -D
cross-env的作用：向node.js运行时环境中添加自定义的全局变量，语法如下：
```
cross-env abc=123  // 添加一个叫abc的全局变量到node.js环境中

如何访问呢？
在node.js代码中，使用 process.env.abc 来访问这个自定义的全局变量
```

4、如何把代码中ES6+转化成ES5？

// babel-loader的作用是加载当前应用程序中的.js文件
cnpm install babel-loader -D

// 这两个库，是真正用于把ES6编译成ES5
cnpm install @babel/core -D
cnpm install @babel/preset-env -D

要想让Babel起作用？必须在项目根目录添加Babel的配置文件（babel.config.json），配置如下：
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ]
  ]
}
```
```
config.module.rules.push({ test:/\.js$/, use: ['babel-loader'], exclude:/node_modules/ })
```



# react-router-dom

cnpm install react-router-dom -S

<BrowserRouter>
<HashRouter>
<NavLink>
<Route>
<Switch>
<Redirect>



# 状态管理 mobx + mobx-react


### 1、定义mobx（建议使用装饰器语法来写）

cnpm install mobx -S

```
# store/index.js

import { observable } from 'mobx'

class Store {
  @observable msg = 'hello msg'
}

export default new Store()
```


### 2、如何使用mobx状态数据呢？

cnpm install mobx-react -S

```
# App.js

import { Provider } from 'mobx-react'
import store from '@/store'

<Provider store={store}>

</Provider>
```
```
# Home.js

import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Home extends React.Component {

}
export default Home
```

### 3、如何支持装饰器语法？

cnpm i @babel/plugin-proposal-class-properties -D
cnpm i @babel/plugin-proposal-decorators -D

```
# babel.config.json
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    ["@babel/plugin-proposal-class-properties", {"loose": true}]
  ]
}
```


