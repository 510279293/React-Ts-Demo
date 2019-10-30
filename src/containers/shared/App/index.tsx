import * as React from 'react'
import {hot} from 'react-hot-loader'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import Load from '@components/Load'

const Home = Loadable({loader: () => import('@views/Home'), loading: Load})
const Page = Loadable({loader: () => import('@views/Page'), loading: Load})
const My = Loadable({loader: () => import('@views/My'), loading: Load})
const Art = Loadable({loader: () => import('@views/My/Art'), loading: Load})
const Filelog = Loadable({loader: () => import('@views/My/Filelog'), loading: Load})
const About = Loadable({loader: () => import('@views/My/About'), loading: Load})
const Feedme = Loadable({loader: () => import('@views/My/Feedme'), loading: Load})
const Others = Loadable({loader: () => import('@views/My/Others'), loading: Load})

const Counter = Loadable({loader: () => import('@views/Counter'), loading: Load})
 @hot(module)
 class App extends React.Component{
   render(){
     return(
       <Router>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/page" component={Page} />
           <Route path="/test" component={Counter} />
           <My path="/my" component={My}>
              <Route  path="/my/art" component={Art} />
              <Route  path="/my/filelog" component={Filelog} />
              <Route  path="/my/about" component={About} />
              <Route  path="/my/feedme" component={Feedme} />
              <Route  path="/my/other" component={Others} />
           </My>
         </Switch>
       </Router>
     )
   }
 }

 export default App