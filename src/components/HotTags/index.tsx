import * as React from 'react'
import * as styles from './index.scss'

class HotTags extends React.Component{
  render(){
    return(
      <div className={styles.hotTags}>
        <div className={styles.tit}>标签</div>
        <div className={styles.tags_warps}>
          <a className={styles.tags}>Vue</a>
          <a className={styles.tags}>Vue</a>
          <a className={styles.tags}>Vue</a>
        </div>
      </div>
    )
  }
}

export default HotTags