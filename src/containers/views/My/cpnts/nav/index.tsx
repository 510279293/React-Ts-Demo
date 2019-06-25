import * as React from 'react'
import {Link} from 'react-router-dom'
import * as styles from './index.scss'
class Nav extends React.Component{
  constructor(props: any){
    super(props)
    this.state = {
      tabs: [
        {
          txt: '首页',
          routeTo: '/'
        },
        {
          txt: '文章',
          routeTo: '/my/art'
        },
        {
          txt: '归档',
          routeTo: '/my/filelog'
        },
        {
          txt: '关于',
          routeTo: '/my/about'
        },
        {
          txt: '留言',
          routeTo: '/my/feedme'
        },
     ]
    }
  }
  render(){
    let path = this.props.location.pathname
    console.log(path)
    return(
      <ul className={styles.nav}>
        {
          this.state.tabs.map((item: any, index: any) => {
            return (<li key={index} className={item.routeTo.includes(path) ? styles.active : ''}>
            <Link to={item.routeTo}>{item.txt}</Link></li>)
          })
        }
      </ul>
    )
  }
}

export default Nav