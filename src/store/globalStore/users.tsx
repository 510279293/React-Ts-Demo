import {observable, action} from 'mobx';

export class userStore{
   @observable
   userInfo: Object = {};

   @action 
   setUserInfo = (userInfo: Object) => {
     this.userInfo = userInfo
   } 
}

export default new userStore();
