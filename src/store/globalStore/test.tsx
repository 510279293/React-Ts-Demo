import {observable, action} from 'mobx'

export class testStore {
  // 测试用数字
  @observable
  num: number = 0

  //增加数字
  @action
  increase = (num: number) => {
    this.num += num
  }

  //减少数字
  @action
  decrease = (num: number) => {
    this.num -= num
  }

}

export default new testStore();