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
  constructor(props: any) {
    super(props);
    this.name = 'mycomponent';
    this.state = {
      hasError: false,
    }
    console.log(props);
    // this.handleClick2 = this.handleClick1.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState){
    console.log(nextProps,prevState);
    return null;
  }
  handleClick1 = () => {
    console.log('this',this);
    // alert(this.name);
  }
  componentDidCatch(error,info){
    this.setState({hasError: true});
    logErrorToMyService(error, info);
  }
  handleClick3 = () => alert(this.name)
  increase = () => {
    this.props.testStore.increase(1)
  }
  decrease(){
    this.props.testStore.decrease(1)
  }
  render() {
    const {num} = this.props.testStore;
    return (
      <>
        <div>{num}</div>
        <button onClick={this.increase}>增加</button>
        <button onClick={this.decrease}>减少</button>
        <button onClick={this.handleClick1()}>click1</button>
        <button onClick={this.handleClick1}>click2</button>
        <button onClick={this.handleClick2}>click3</button>
        <button onClick={this.handleClick3}>click4</button>
      </>
    )
  }
}

export default Counter;
