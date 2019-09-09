import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import HotArt from '@components/HotArt'
import HotTags from '@components/HotTags'
import FileLogList from './cpnts/FilelogList'
import * as styles from './index.scss'
class Filelog extends ComponentExt{
  render(){
    return(<div className={styles.filelog}>
      <div className={styles.filelogListWarp}>
        <FileLogList />
        <FileLogList />
        <FileLogList />
      </div>
      <div className={styles.hotPart}>
        <HotArt />
        <HotTags />
      </div>
    </div>)
  }
}

export default Filelog