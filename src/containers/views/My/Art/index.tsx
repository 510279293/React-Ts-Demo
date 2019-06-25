import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import ArtList from './cpnts/ArtList'
import HotArt from '@components/HotArt'
import HotTags from '@components/HotTags'
import * as styles from './index.scss'

class Art extends ComponentExt{
  render(){
    return(<div className={styles.art}>
      <div className={styles.artListWarp}>
        <ArtList />
        <ArtList />
      </div>
      <div className={styles.hotPart}>
        <HotArt />
        <HotTags />
      </div>
    </div>)
  }
}

export default Art