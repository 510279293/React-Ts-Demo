import * as React from 'react'
import { ComponentExt } from '@utils/reactExt'
import { inject, observer } from 'mobx-react';
import {hot} from 'react-hot-loader'

interface IProps {
  testStore?: IGlobalStore.testStore
}

@hot(module)
@inject('testStore')
@observer
class Counter extends ComponentExt<IProps> {
  increase = () => {
    this.props.testStore.increase(1)
  }
  decrease = () => {
    this.props.testStore.decrease(1)
  }
  render() {
    const {num} = this.props.testStore
    return (
      <div>
        <div>{num}</div>
        <button onClick={this.increase}>增加</button>
        <button onClick={this.decrease}>减少</button>
      </div>
    )
  }
}

export default Counter;
