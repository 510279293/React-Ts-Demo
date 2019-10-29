import {observable, action} from 'mobx';

export class Users{
   @observable
   userInfo: Object = {};

   @action 
   setUserInfo = (userInfo: Object) => {
     this.userInfo = userInfo
   } 
}

export default new Users();
