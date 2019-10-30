import * as React from 'react'
import { inject, observer } from 'mobx-react';
import {ComponentExt} from '@utils/reactExt'
import Footer from '@components/Footer/index'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import * as styles from './index.scss'
import {userInfo } from '@service/homeApi'

interface IProps {
  userStore?: IGlobalStore.userStore
}
interface Res {
  nickName?: String;
  quotes?: String;
  avatar?: String;
}
@inject('userStore')
@observer
class Home extends ComponentExt<IProps>{
  async userInfoApi() {
    const res: Res = await userInfo();
    this.props.userStore.setUserInfo(res.data);
  }
  componentDidMount(){
    this.userInfoApi();
  }
  render() {
    const {userInfo = {}} = this.props.userStore;
    return(<div className={styles.home}>
      <div className={styles.mask}>
        <div className={styles.my_index}>
          <img src="src/assets/img/head.jpg" />
          <h3 className={styles.my_tit}>{userInfo.nickName}</h3>
          <h3 className={styles.my_desc}>{userInfo.quotes}</h3>
          <div className={styles.my_guide}>
            <Link to="/my/art"><Button ghost size="small">文章</Button></Link>
            <Link to="/my/about"><Button ghost size="small">关于</Button></Link>
            <Link to="/my/filelog"><Button ghost size="small">归档</Button></Link>
            <Link to="/my/feedme"><Button ghost size="small">留言</Button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>)
  }
}

export default Home