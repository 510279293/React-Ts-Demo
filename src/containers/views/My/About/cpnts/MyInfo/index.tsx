import * as React from 'react'
import * as styles from './index.scss'
import {Button} from 'antd'
import { inject, observer } from 'mobx-react';
@inject('userStore')
@observer
class MyInfo extends React.Component{
  render(){
    const {userInfo = {}} = this.props.userStore;
    return(<div className={styles.myinfo}>
      <dl>
        <dt><img src="src/assets/img/head.jpg" /></dt>
        <dd><Button type="dashed" size="small">friend me</Button></dd>
      </dl>
      <p><i className="iconfont iconzhiye"></i>{userInfo.job_desc}</p>
      <p><i className="iconfont iconlike-1"></i>{userInfo.hobby}</p>
      <p><i className="iconfont iconfenxiang"></i>{userInfo.share||'总有一个意外，给你带来精彩'}</p>
      <p><i className="iconfont iconqianming"></i>{userInfo.quotes}</p>
      <p><i className="iconfont iconiconfront-"></i>{userInfo.location}</p>
    </div>)
  }
}

export default MyInfo