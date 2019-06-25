import * as React from 'react'
import {message,notification} from 'antd'
// 这里用到泛型来灵活化state 和 props的interface
export class ComponentExt <P = {}, S = {}> extends React.Component<P, S> {
  $message = message
  $notification = notification
}
