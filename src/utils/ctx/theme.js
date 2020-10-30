import React from 'react'

// 创建React Context上下文
const ThemeContext = React.createContext()

const themes = {
    light: {
      color: '#000000',
      background: '#eeeeee',
    },
    dark: {
      color: '#ffffff',
      background: '#222222',
    },
  }

export {
    ThemeContext,
    themes
}