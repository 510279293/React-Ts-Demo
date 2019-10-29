import * as React from 'react'
import {ComponentExt} from '@utils/reactExt';
import './interface';
class Interface extends ComponentExt{
  constructor(prop: any){
     super(prop)
  }
   render(){
     return(
       <div>
          <div>TS-test-interface: </div>
          <div>TS-test-func-interface:</div>
          <div>TS-test-class-interface:</div>
       </div>
     )
   }
}

export default Interface;