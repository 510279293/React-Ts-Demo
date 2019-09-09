import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import MyInfo from './cpnts/MyInfo'
import MyHistory from './cpnts/MyHistory'
class About extends ComponentExt{
  ImgPreView(){
    console.log('previre')
  }
  render(){
    return(<div className={styles.about}>
      <MyInfo />
      <MyHistory ImgPreView={this.ImgPreView} />
    </div>)
  }
}

export default About