import * as React from 'react'
import * as styles from './index.scss'
import { inject, observer } from 'mobx-react';
@inject('hotPartStore')
@observer
class HotArt extends React.Component{
  render(){
    const {hotList } = this.props.hotPartStore;
    return(
      <div className={styles.hotArt}>
        <div className={styles.tit}>热门文章</div>
        {
          hotList.map((v: any,i:any) => (
          <p className={styles.list} key={i}><a>{v.art_name}</a></p>
          ))
        }
      </div>
    )
  }
}

export default HotArt