import * as React from 'react'
import * as styles from './index.scss'
import moment from 'moment';
class ArtList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props)
    const {comment_num, create_time, art_desc, like_num, title, read_num} = this.props;
    return(
      <div className={styles.list}>
  <h3 className={styles.list_tit}>{title}</h3>
    <p className={styles.list_desc}>{art_desc}</p>
    <p className={styles.list_info}>{moment(create_time*1).format('YYYY-MM-DD HH:mm:ss')} <i className="iconfont icondian"></i> {read_num||0}次阅读 <i className="iconfont icondian"></i> {comment_num||0}条评论 <i className="iconfont icondian"></i> {like_num||0}人喜欢</p>
      </div>
    )
  }
}

export default ArtList