import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import {Button} from 'antd'
class Feedme extends ComponentExt{
  render(){
    return(<div className={styles.feedme}>
      <div className={styles.backf}>
        <div className={styles.center}><Button>留个脚印</Button></div>
        <div className={styles.feedlist}>
          <div className={styles.item}>
            <div className={styles.feedtxt}>大家好，我是网站的设计者sevan，欢迎大家留言！</div>
            <p>————sevan</p>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Feedme