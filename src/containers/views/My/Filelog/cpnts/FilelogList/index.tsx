import * as React from 'react'
import * as styles from './index.scss'
 
class FileLogList extends React.Component{
  constructor(props:any){
    super(props)
  }
  render(){
    const {date, articles} = this.props;
    return(<div className={styles.filelogList}>
  <div className={styles.tit}>{date}({articles.length})</div>
      {
        articles.map((v:any,i:any) => (
        <p key={i}><i className="iconfont icondian"></i><a className={styles.item}>{v.art_name}</a></p>
        ))
      }
    </div>)
  }
}

export default FileLogList