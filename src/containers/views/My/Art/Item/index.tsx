import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'

class ArtItem extends ComponentExt{
  constructor(props: any){
    super(props)
  }
  componentDidUpdate(){
    window.initHtml();
  }
  render(){
    return(<div>
      <div className="con-txt marked-box" dangerouslySetInnerHTML={{__html:''}}></div>
    </div>)
  }
}

export default ArtItem;
