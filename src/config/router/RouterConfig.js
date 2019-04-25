import React, {  Component} from 'react';
import ReactDOM from 'react-dom';
// import {browserHistory} from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// import { ConnectedRouter } from 'react-router-redux';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Sidebar from '../../layouts/side/Sidebar';
//import Header from '../../layouts/header/Header';
import Login from '../../views/login/login';
import Main from '../../layouts/main/main';
import MainAntd from '../../layouts/main/mainAntd';
import MyCarousel from '../../views/antd/carousel/carousel';
import Carousel1 from '../../views/antd/carousel/carousel1';
import MyCollapse from '../../views/antd/collapse/collapse';
import MyList from '../../views/antd/list/list';
 
import Home from '../../layouts/main/home';
import Form from '../../views/antd/form/form/Form';
import FormZ from '../../views/antd/form/form/FormZ';
import FormConfig from '../../views/antd/form/formConfig';
import Table1 from '../../views/antd/table/table1';
import Table2 from '../../views/antd/table/table2';
import Table3 from '../../views/antd/table/table3';
import Table4 from '../../views/antd/table/table4';
import Table5 from '../../views/antd/table/table5';
import Table6 from '../../views/antd/table/table6';
import Table7 from '../../views/antd/table/table7';
import Table8 from '../../views/antd/table/table8';
import Table9 from '../../views/antd/table/table9';
import Table10 from '../../views/antd/table/table10';
import Table11 from '../../views/antd/table/table11';
import Table12 from '../../views/antd/table/table12';
import Table13 from '../../views/antd/table/table13';
import Table14 from '../../views/antd/table/table14';
import Table15 from '../../views/antd/table/table15';
import Table16 from '../../views/antd/table/table16';
import Table17 from '../../views/antd/table/table17';
import Table18 from '../../views/antd/table/table18';
import Table19 from '../../views/antd/table/table19';
import Table20 from '../../views/antd/table/table20';
import Table21 from '../../views/antd/table/table21';
import Table22 from '../../views/antd/table/table22';
import Table23 from '../../views/antd/table/table23';
import Table24 from '../../views/antd/table/table24';
import NotFound from '../../views/404/notfound';
// import FormSubmit from './components/form/FormSubmit';
import TestMock from '../../views/test/TestMock';

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
  },{
    path: '/mainAntd/carousel',
    exact:true,
    strict:true,
    component: MyCarousel
  },{
    path: '/mainAntd/carousel1',
    exact:true,
    strict:true,
    component: Carousel1
  },{
    path: '/mainAntd/collapse',
    exact:true,
    strict:true,
    component: MyCollapse
  },{
    path: '/mainAntd/list',
    exact:true,
    strict:true,
    component: MyList
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
  },{ 
    path: '/table1',
    exact:true,
    strict:true,
    component: Table1
  },{ 
    path: '/table2',
    exact:true,
    strict:true,
    component: Table2
  },{ 
    path: '/table3',
    exact:true,
    strict:true,
    component: Table3
  },{ 
    path: '/table4',
    exact:true,
    strict:true,
    component: Table4
  },{ 
    path: '/table5',
    exact:true,
    strict:true,
    component: Table5
  },{ 
    path: '/table6',
    exact:true,
    strict:true,
    component: Table6
  },{ 
    path: '/table7',
    exact:true,
    strict:true,
    component: Table7
  },{ 
    path: '/table8',
    exact:true,
    strict:true,
    component: Table8
  },{ 
    path: '/table9',
    exact:true,
    strict:true,
    component: Table9
  },{ 
    path: '/table10',
    exact:true,
    strict:true,
    component: Table10
  },{ 
    path: '/table11',
    exact:true,
    strict:true,
    component: Table11
  },{ 
    path: '/table12',
    exact:true,
    strict:true,
    component: Table12
  },{ 
    path: '/table13',
    exact:true,
    strict:true,
    component: Table13
  },{ 
    path: '/table14',
    exact:true,
    strict:true,
    component: Table14
  },{ 
    path: '/table15',
    exact:true,
    strict:true,
    component: Table15
  },{ 
    path: '/table16',
    exact:true,
    strict:true,
    component: Table16
  },{ 
    path: '/table17',
    exact:true,
    strict:true,
    component: Table17
  },{ 
    path: '/table18',
    exact:true,
    strict:true,
    component: Table18
  },{ 
    path: '/table19',
    exact:true,
    strict:true,
    component: Table19
  },{ 
    path: '/table20',
    exact:true,
    strict:true,
    component: Table20
  },{ 
    path: '/table21',
    exact:true,
    strict:true,
    component: Table21
  },{ 
    path: '/table22',
    exact:true,
    strict:true,
    component: Table22
  },{ 
    path: '/table23',
    exact:true,
    strict:true,
    component: Table23
  },{ 
    path: '/table24',
    exact:true,
    strict:true,
    component: Table24
  }, 

  {
    path: '/testMock',
    exact:true,
    strict:true,
    component: TestMock
  }, 
  
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
      <Route exact strict path="/mainAntd/carousel1" render={()=>(<Carousel1 />)}/>
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