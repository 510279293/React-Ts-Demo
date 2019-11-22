import * as React from 'react'
import * as styles from './index.scss'

class ArtList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props)
    const {comment_num, date,desc, like_num, name, read_num} = this.props;
    return(
      <div className={styles.list}>
  <h3 className={styles.list_tit}>{name}</h3>
    <p className={styles.list_desc}>{desc}</p>
    <p className={styles.list_info}>{date} <i className="iconfont icondian"></i> {read_num}次阅读 <i className="iconfont icondian"></i> {comment_num}条评论 <i className="iconfont icondian"></i> {like_num}人喜欢</p>
      </div>
    )
  }
}

export default ArtList