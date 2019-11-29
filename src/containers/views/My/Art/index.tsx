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
    // this.titltClick = this.titltClick.bind(this)
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
  titltClick(artId) {
    // console.log(artId, this.props);
    this.props.history.push(`/my/article/${artId}`)
  }
  render(){
    return(<div className={styles.art}>
      <div className={styles.artListWarp}>
        {
          this.state.artList.map((v: any, i: any) => <ArtList key={i} {...v} titltClick={() => this.titltClick(v.id)} />)
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