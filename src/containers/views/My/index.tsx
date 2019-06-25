import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import Nav from './cpnts/nav'
import Footer from '@components/Footer/index'
import * as styles from './index.scss'

class My extends ComponentExt{
  constructor(props: any){
    super(props)
  }
  render(){
    return(
      <div className={styles.my}>
        <Nav {...this.props} />
        <div className={styles.my_container}>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default My