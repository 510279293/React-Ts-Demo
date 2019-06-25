import * as React from 'react'
import { ComponentExt } from '@utils/reactExt'
import * as styles from './index.scss'
 class Footer extends ComponentExt{
   render(){
     return(<div className={styles.footer}>
      ©2019 - sevan的博客 - 湘ICP备19000585号-1
     </div>)
   }
 }

 export default Footer