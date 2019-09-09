import * as React from 'react'
import * as styles from './index.scss'

class ImgList extends React.Component{
  constructor(props: any){
    super(props)
  }
  handleClick(){
    this.props.preView()
  }
  render(){
    return(<div className={styles.imgwarp} onClick={() => this.handleClick()}>
      <img className={styles.img} src="http://sevanblog.gz.bcebos.com/1560135827daunwu01.jpg" />
    </div>)
  }
}

export default ImgList