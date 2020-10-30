// CommonJS模块化语法

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const ENV = process.env.NODE_ENV

const config = {
    // 入口配置
    // entry: './src/main.js'
    // entry: path.resolve(__dirname, './src/main.js')
    entry: {
        app: path.resolve(__dirname, './src/main.js')
    },
    output: {
        // filename: 'bundle.js',  // 一束  一捆
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            title: 'react'
        })
    ],
    // 在webpack眼中，一切都是模块
    module: {
        rules: [
            // 打包或编译时，如果是.js文件，就使用babel-loader进行加载，再使用Babel进行编译
            // @babel/core  @babel/preset-env    babel.config.json
            { test:/\.(js|jsx)$/, use: ['babel-loader'], exclude:/node_modules/ },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            // style-loader 作用是，把css插入到DOM节点中去
            // css-loader 作用是，把css代码 import进来
            // sass-loader 作用是加载scss文件，交给node-sass来编译，变成css代码
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    resolve: {
        // 路径别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json']
    }
}

if (ENV === 'production') {
    config.mode = 'production'
    // 自动清理dist目录中重复的文件
    config.plugins.push(new CleanWebpackPlugin())
}

if (ENV === 'development') {
    config.mode = 'development'
    config.devtool = 'source-map'
    // 配置本地服务
    config.devServer = {
        port: 8090,
        open: true,
        // 用于指定本地开发的静态资源目录
        contentBase: path.resolve(__dirname, './public'),
        // 开启热更新
        hot: true,
        // 当程序报错时，把错误覆盖在视图上
        overlay: {
            errors: true
        },
        proxy: {
            '/soso': {
                target: 'https://c.y.qq.com',
                changeOrigin: true
            }
        }
    }
    // 用于热更新的两个插件
    // 给每一个模块添加一个名字
    config.plugins.push(new webpack.NamedModulesPlugin())
    // 启用热更新，启动本地服务器中的websocket长连接
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
    // 配置开发环境特有的ESLint代码检测
    config.module.rules.push(
        { 
            test:/\.(js|jsx)$/, 
            use: ['eslint-loader'], 
            exclude:/node_modules/, 
            // 运行项目时，先进行eslint检测，只有当代码完全符合规范时，才执行其它loader的编译
            enforce:'pre'
        }
    )
}

module.exports = config