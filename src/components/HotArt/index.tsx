import * as React from 'react'
import * as styles from './index.scss'

class HotArt extends React.Component{
  render(){
    return(
      <div className={styles.hotArt}>
        <div className={styles.tit}>热门文章</div>
        <p className={styles.list}><a>GraphQL 搭配 Koa 最佳入门实践</a></p>
        <p className={styles.list}><a>GraphQL 搭配 Koa 最佳入门实践</a></p>
        <p className={styles.list}><a>GraphQL 搭配 Koa 最佳入门实践</a></p>
        <p className={styles.list}><a>GraphQL 搭配 Koa 最佳入门实践</a></p>
      </div>
    )
  }
}

export default HotArt