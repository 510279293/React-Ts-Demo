import {observable, action} from 'mobx';

class hotPartStore {
  @observable
  hotList: any = []

  @observable
  hotTags: any = []

  @action 
  setHotList = (hotList: any) => {
    this.hotList = hotList
  }

  @action
  setHotTag = (hotTags: any) => {
    this.hotTags = hotTags
  }
}

export default new hotPartStore();