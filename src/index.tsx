import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {configure} from 'mobx'
import {Provider} from 'mobx-react'
import 'normalize.css' // normalize.css 样式格式化
import '@assets/styles/index.scss' // 重置样式库
import 'antd/dist/antd.css' // antd 样式库
import App from '@shared/App'
import * as store from './store'

configure({enforceActions: 'observed'});

const render = () => {
  ReactDOM.render(
    <Provider {...store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  )
}

render()
