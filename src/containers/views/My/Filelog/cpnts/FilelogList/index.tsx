import * as React from 'react'
import * as styles from './index.scss'
 
class FileLogList extends React.Component{
  render(){
    return(<div className={styles.filelogList}>
      <div className={styles.tit}>2019/06(1)</div>
      <p><i className="iconfont icondian"></i><a className={styles.item}>关于Node.js你需要知道的几点</a></p>
      <p><i className="iconfont icondian"></i><a className={styles.item}>关于Node.js你需要知道的几点</a></p>
      <p><i className="iconfont icondian"></i><a className={styles.item}>关于Node.js你需要知道的几点</a></p>
    </div>)
  }
}

export default FileLogList