import React, {  Component} from 'react';
import ReactDOM from 'react-dom';
// import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// import { ConnectedRouter } from 'react-router-redux';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../../views/login/login';
import Main from '../../layouts/main/main';
import MainAntd from '../../layouts/main/mainAntd';
import Home from '../../layouts/main/home';
import NotFound from '../../views/404/notfound';
import TestMock from '../../views/test/TestMock';

import {antdRouter} from './antdRouter'

// import './css/index.css';
// import './assets/css/bootstrap.min.css';
// import '../node_modules/antd/dist/antd.min.css' 
const RouterConfig = [
  {
    path: '/',
    exact:true,
    strict:true,
    component: Home
  },{
    path: '/mainAntd',
    exact:true,
    strict:true,
    component: Home
  },
  {
    path: '/testMock',
    exact:true,
    strict:true,
    component: TestMock
  }, 
  ...antdRouter
] 

function configweb(){
  var islogin = sessionStorage.getItem("isLogin");
  console.log(islogin);
  if(islogin==1){
    return true;
  }else{
    return false;
  }
}
const RootRouter=({history})=>( 
<LocaleProvider locale={zhCN}>
	<Router history={history}>  
    <Switch> 
			{/* <Route exact strict path="/" component={Home}/> */}
			<Route exact strict path="/" render={() => (configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/login" render={()=>(<Login />)}/>
      <Route exact strict path="/Main" render={()=>(<Main />)}/>
      <Route exact strict path="/MainAntd" render={()=>(<MainAntd />)}/>
      <Route exact strict path="/mainAntd/carousel" render={()=>(<MainAntd />)}/>
      <Route exact strict path="/mainAntd/collapse" render={()=>(<MainAntd />)}/>
      {/* <Route exact strict path="/mainAntd/carousel1" render={()=>(<Carousel1 />)}/> */}
      <Route exact strict path="/mainAntd/list" render={()=>(<MainAntd />)}/>
      <Route exact strict path="/form"  render={() => (configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/formZ" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/formConfig" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table1" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table2" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table3" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table4" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table5" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table6" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table7" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table8" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table9" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table10" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table11" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table12" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table13" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/table14" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table15" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table16" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table17" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table18" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table19" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table20" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table21" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table22" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table23" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/table24" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/testMock" render={() =>(configweb() ? (<MainAntd />) : (<Login />))}/>
      <Route exact strict path="/404" component={NotFound}/>  
			<Route component={NotFound}/>
      <Redirect from='/*' to='/404' /> 
		</Switch>  
	</Router>
</LocaleProvider>
)

//export default RouterConfig;
export {RouterConfig,RootRouter};
// class RootRouter extends Component {
//   render() {
//     function configweb(){
//       var islogin = sessionStorage.getItem("isLogin");
//       console.log(islogin);
//       if(islogin==1){
//         return true;
//       }else{
//         return false;
//       }
//     }
//     return( 
//       <Router >
//         <Switch>
//         {/* <div style={{height:"100%"}}> */}
//             <Route exact strict path="/" render={() => (configweb() ? (<Main />) : (<Login />))}/>
//             <Route exact strict path="/login" render={()=>(<Login />)}/>
//             {/* <Route exact strict path="/form"  render={() => (configweb() ? (<Main />) : (<Login />))}/>
//             <Route exact strict path="/formZ" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
//             <Route exact strict path="/formConfig" render={() =>(configweb() ? (<Main />) : (<Login />))}/> */}
//             <Route exact strict path="/404"  component={NotFound}/>
//             <Route component={NotFound}/>

//             {/* <Route path="/" render={() => (configweb() ? (<Main />) : (<Login />))}/>
//             <Route path="/login" render={()=>(<Login />)}/>
//             <Route path="/form"  render={() => (configweb() ? (<Main />) : (<Login />))}/>
//             <Route path="/formZ" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
//             <Route path="/formConfig" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
//             <Route path="/404"  component={NotFound}/> */}

//             {/* <Route render={()=>(<NotFound />)} />  */}
//             {/* <Redirect from='' to='/404' /> */}
//         {/* </div> */}
//         </Switch> 
//       </Router> 
//     )
//   }
//   componentDidMount(){
    
//   }
// }