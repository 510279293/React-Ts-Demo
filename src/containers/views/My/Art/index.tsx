import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import ArtList from './cpnts/ArtList'
import HotArt from '@components/HotArt'
import HotTags from '@components/HotTags'
import * as styles from './index.scss'
import {articleList } from '@service/articleApi'

class Art extends ComponentExt{
  constructor(props){
    super(props);
    this.state = {
      artList: [],
    }
  }
  async articleListApi(){
    const { data } = await articleList();
    this.setState({
      artList: data,
    })
  }
  componentDidMount() {
    this.articleListApi();
  }
  render(){
    return(<div className={styles.art}>
      <div className={styles.artListWarp}>
        {
          this.state.artList.map((v: any, i: any) => <ArtList key={i} {...v} />)
        }
      </div>
      <div className={styles.hotPart}>
        <HotArt />
        <HotTags />
      </div>
    </div>)
  }
}

export default Art