import * as React from 'react'
import * as styles from './index.scss'

class ArtList extends React.Component{
  render(){
    return(
      <div className={styles.list}>
        <h3 className={styles.list_tit}>canvas画1px线条的高清终极解决方案</h3>
        <p className={styles.list_desc}>1px线条的高清终极解决方案</p>
        <p className={styles.list_info}>2019.03.26  195次阅读  2条评论  17人喜欢</p>
      </div>
    )
  }
}

export default ArtList