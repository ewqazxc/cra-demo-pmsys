import React, {  Component} from 'react';
import ReactDOM from 'react-dom';
// import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Sidebar from '../../component/side/Sidebar';
//import Header from '../../component/header/Header';
import Login from '../../component/login/login';
import Main from '../../component/main/main';
import Home from '../../component/main/home';
import Form from '../../component/form/form/Form';
import FormZ from '../../component/form/form/FormZ';
import FormConfig from '../../component/form/formConfig';
import NotFound from '../../component/404/notfound'
// import FormSubmit from './components/form/FormSubmit';

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
      path: '/form',
			exact:true,
			strict:true,
			component: Form
  },{
      path: '/formZ',
			exact:true,
			strict:true,
			component: FormZ
  },{ 
      path: '/formConfig',
			exact:true,
			strict:true,
			component: FormConfig
  }
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
	<Router history={history}>  
    <Switch> 
			{/* <Route exact strict path="/" component={Home}/> */}
			<Route exact strict path="/" render={() => (configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/login" render={()=>(<Login />)}/>
      <Route exact strict path="/Main" render={()=>(<Main />)}/>
      <Route exact strict path="/form"  render={() => (configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/formZ" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/formConfig" render={() =>(configweb() ? (<Main />) : (<Login />))}/>
      <Route exact strict path="/404" component={NotFound}/>  
			<Route component={NotFound}/>
      <Redirect from='/*' to='/404' /> 
		</Switch>  
	</Router>
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