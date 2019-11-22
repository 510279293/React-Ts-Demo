import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import HotArt from '@components/HotArt'
import HotTags from '@components/HotTags'
import FileLogList from './cpnts/FilelogList'
import * as styles from './index.scss'
import {filelogList} from '@service/filelogApi';
class Filelog extends ComponentExt{
  constructor(props:any){
    super(props);
    this.state = {
      list: [],
    }
  }
  async componentDidMount(){
    const {data} = await filelogList();
    this.setState({
      list: data.list
    })
  }
  render(){
    return(<div className={styles.filelog}>
      <div className={styles.filelogListWarp}>
        {
          this.state.list.map((v:any,i:any) => (
            <FileLogList key={i} {...v} />
          ))
        }
      </div>
      <div className={styles.hotPart}>
        <HotArt />
        <HotTags />
      </div>
    </div>)
  }
}

export default Filelog