
import {testStore as testStoreModel} from './test'
import {userStore as userStoreModel} from './users'
// import {hotPartStore as hotPartStoreModel} from './hotPart'

// 同时导出这个命名空间的接口， 该接口以类作为数据类型校验
export interface testStore extends testStoreModel{}
export interface userStore extends userStoreModel{}
// export interface hotPartStore extends hotPartStoreModel{}
// 将这个命名空间作为全局变量的形势来进行访问
export as namespace IGlobalStore