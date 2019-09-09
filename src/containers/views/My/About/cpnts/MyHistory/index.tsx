import * as React from 'react'
import * as styles from './index.scss'
import ImgList from './cpnts/ImgList'

class MyHistory extends React.Component{
  constructor(props: any){
    super(props)
  }
  preView(){
    console.log(888)
    this.props.ImgPreView()
  }
  render(){
    return(<div className={styles.history}>
      <h3 className={styles.new_t}>历史轨迹</h3>
      <div className={styles.warp}>
        <div className={styles.history_item}>
          <h4 className={styles.icon}><i className="iconfont iconjiaoyin"></i> 2019-06-10 11:04:33</h4>
          <div className={styles.con_txt}>端午一波浪，几张路照</div>
          <ImgList preView={() => this.preView()} />
          <ImgList preView={() => this.preView()} />
          <ImgList preView={() => this.preView()} />
          <ImgList preView={() => this.preView()} />
        </div>
        <div className={styles.history_item}>
          <h4 className={styles.icon}><i className="iconfont iconjiaoyin"></i> 2019-06-10 11:04:33</h4>
          <div className={styles.con_txt}>端午一波浪，几张路照</div>
        </div>
        <div className={styles.history_item}>
          <h4 className={styles.icon}><i className="iconfont iconjiaoyin"></i> 2019-06-10 11:04:33</h4>
          <div className={styles.con_txt}>端午一波浪，几张路照</div>
        </div>
      </div>
    </div>)
  }
}

export default MyHistory