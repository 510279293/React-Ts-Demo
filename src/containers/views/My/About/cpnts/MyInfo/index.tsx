import * as React from 'react'
import * as styles from './index.scss'
import {Button} from 'antd'

class MyInfo extends React.Component{
  render(){
    return(<div className={styles.myinfo}>
      <dl>
        <dt><img src="src/assets/img/head.jpg" /></dt>
        <dd><Button type="dashed" size="small">friend me</Button></dd>
      </dl>
      <p><i className="iconfont iconzhiye"></i>我是sevan, 一名web前端开发工程师</p>
      <p><i className="iconfont iconlike-1"></i>书法，电影，音乐，旅行</p>
      <p><i className="iconfont iconfenxiang"></i>总有一个意外，给你带来精彩</p>
      <p><i className="iconfont iconqianming"></i>总有一个意外，给你带来精彩</p>
      <p><i className="iconfont iconiconfront-"></i>Shenzhen • Vanke</p>
    </div>)
  }
}

export default MyInfo