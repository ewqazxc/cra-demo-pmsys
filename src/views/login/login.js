import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import $ from 'jquery';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {toastIt} from '../../assets/toastIt/toastit';

// ReactDOM.render(
//     <div>
//       <Alert message="Success Text" type="success" />
//       <Alert message="Info Text" type="info" />
//       <Alert message="Warning Text" type="warning" />
//       <Alert message="Error Text" type="error" />
//     </div>
//   , mountNode);
import './login.css';
const FormItem = Form.Item;
 



class Login extends Component {
    componentWillMount(){
 
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log($("#passWord").val());
        sessionStorage.setItem("isLogin",1);
        window.location.href = "/"; 
        if($("#userName").val()===""){
            //alert("请输入用户名");
            toastIt("请输入用户名");
            $("#userName").focus();
            return false;
        }else if($("#passWord").val()===""){
            toastIt("请输入密码");
            $("#passWord").focus();
            return false;
        }
        // else if($("#userName").val()!=="xc"||$("#passWord").val()!=="1"){
        //     toastIt("登录失败，请检查用户名或密码是否正确！");
        // }
        else{ 
            let loginData = {
                method:"login",
                userNo:$("#userName").val().trim(),
                userPwd:$("#passWord").val()
            }
            console.log(loginData);
            // fetch('http://localhost:8088/newpm/loginP?userNo=123&userPwd321', 
            //     {mode: 'no-cors'},
            //     { method: 'GET'}
            // )
            //     .then((res)=>{
            //         console.log(res)
            //         return res.text() // res.text()是一个Promise对象
            //     })
            //     .then((res)=>{
            //         console.log(res) // res是最终的结果
            //     })//fetch

            // fetch(
            //     // 'http://www.runoob.com/try/ajax/jsonp.php',
            //     'https://www.baidu.com/rec?platform=wise&ms=1&rset=rcmd&word=123&qid=11327900426705455986&rq=123&from=844b&baiduid=A1D0B88941B30028C375C79CE5AC2E5E%3AFG%3D1&tn=&clientWidth=375&t=1506826017369&r=8255',
            //     // 'https://news-at.zhihu.com/api/4/news/9661690',
            //     // 'https://www.baidu.com/search/error.html', 
            //         {mode: 'no-cors'}
            //     ) // 返回一个Promise对象
            //     .then((res)=>{
            //         console.log(res)
            //         return res.text() // res.text()是一个Promise对象
            //     })
            //     .then((res)=>{
            //         console.log(res) // res是最终的结果
            //     })//fetch

            // fetch('http://localhost:8899/',
            //      {mode: 'no-cors'},
            //     // {mode: 'cors'},  
            // )
            //     .then(function(response) {
            //         console.log(response)
            //         return response.json();
            //     })
            //     .then(function(myJson) {
            //         console.log(myJson);
            //     });

            $.ajax({
                type:"GET",
                // dataType: 'jsonp', 
                data:loginData,
                //dataType: 'jsonp',
                //jsonp:"callback",
                // jsonp:"jsoncallback",
                // jsonpCallback:"login",
                url:"http://localhost:8899/",
                // url:"http://www.runoob.com/try/ajax/jsonp.php",
                success:function(data){
                    var data = JSON.parse(data);
                    toastIt(data.msg);
                    if(data.flag==0){
                        $("#userName").focus();
                    }else if(data.flag==1){
                        $("#passWord").focus();
                    }
                    else if(data.flag==2){
                        sessionStorage.setItem("isLogin",1);
                        window.location.href = "/"; 
                    }else{
                        toastIt("服务器异常");
                    }
                    console.log(data);  
                },
                error:function (data){
                    console.log(data);
                    console.log("_eoor");
                }
            })//AJAX

            // $.ajax({
            //     type:"GET",
            //     //dataType: 'jsonp',
            //     data:loginData,
            //     dataType: 'jsonp',
            //     //jsonp:"callback",
            //     jsonp:"jsoncallback",
            //     url:"http://localhost:8088/newpm/loginP",
            //     // url:"http://www.runoob.com/try/ajax/jsonp.php",
            //     success:function(data){
            //         toastIt(data);
            //         console.log(data);
            //         console.log("_success");
            //     },
            //     error:function (data){
            //         console.log(data);
            //         console.log("_eoor");
            //     }
            // })//AJAX

            // window.location.href = "/"; 
        } 
      }
      subCheck(e){
        e.preventDefault();
        
        if($("#userName").val()===""){
            alert("请输入用户名");
            
            return false;
        }else if($("#passWord").val()===""){
            alert("请输入密码");
            return false;
        }
      }
    render() {
        return(
            <div className="fullBlock">
                <div id="loginBox" className="animated fadeInDown">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                    {/* //onSubmit={this.handleSubmit} */}
                        <FormItem> 
                            <Input id="userName" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        </FormItem> 
                        <FormItem>
                            <Input id="passWord" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        </FormItem>
                        <FormItem>
                        {/* onClick={this.subCheck.bind(this)} */} 
                        <Button  type="primary" htmlType="submit" className="login-form-button">
                           登录
                        </Button>
                        </FormItem>
                    </Form>
                </div>   
            </div>
        )
    }
    componentDidMount(){
       
        
    }
}

export default Login;