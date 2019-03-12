import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
// import {toastIt} from '../../assets/toastIt/toastit';
import { Menu, Dropdown, Icon } from 'antd';
import { Modal, Button } from 'antd';

import './css/userBar.css';



class UserBar extends Component{
    state = { 
        visibleMp: false,
        visiblePd: false 
    }
    //修改密码 S
    handleOkMp = (e) => {
        console.log(e);
        if($("#newPsd").val()==""){
            const modal = Modal.error({
                title: '操作失败',
                content: '请输入新密码',
                okText: "确定", 
              });
              setTimeout(() => modal.destroy(), 2000); 
              $("#newPsd").focus();
              return false;
        }else if($("#surePsd").val()==""){
            const modal = Modal.error({
                title: '操作失败',
                content: '请输入确认密码',
                okText: "确定", 
              });
              setTimeout(() => modal.destroy(), 2000); 
              $("#surePsd").focus();
              return false;
        }else if($("#newPsd").val()!=$("#surePsd").val()){
            const modal = Modal.error({
                title: '操作失败',
                content: '两次密码不一致',
                okText: "确定", 
              });
              setTimeout(() => modal.destroy(), 2000); 
              $("#surePsd").focus();
              return false;
        }else{
            this.setState({
                 visibleMp: false,
            });
            let data={
                password:$("#newPsd").val()
            }
            console.log(data);
            const modal = Modal.success({
                title: '操作成功',
                content: '密码修改成功，请保管好您的新密码~',
                okText: "确定", 
            });
        }
        
      }
    handleCancelMp = (e) => {
        console.log(e);
        this.setState({
            visibleMp: false,
        });
    }
    //修改密码 E
    //个人资料 S
    handleCancelPd = (e) => { 
        this.setState({
            visiblePd: false,
        });
    }
    handleOkPd = (e) => {
        this.setState({
            visiblePd: false,
        });
        let perData = {
            userName : $("#userName").val(),
            userNo : $("#userNo").val(),
            userTel : $("#userTel").val(),
            userPhone : $("#userPhone").val(),
            userOrg : $("#userOrg").val(),
        }
        console.log(perData);
        $.ajax({
            type:"POST",
            // dataType: 'jsonp',
            data:perData,
            url:"http://localhost:8080/zspm/pm/search",
            success:function(data){
                console.log(data);
                const modal = Modal.success({
                    title: '操作成功',
                    content: '个人资料更新成功~',
                    okText: "确定", 
                });
            },
            error:function (data){
                console.log(data);
                console.log("_eoor");
            }
        })
       
    }
    //个人资料 E
    handleMenuClick = (e) => {
        console.log(e)
        switch(e.key){
            case 'logOut':this.logOut(); ;break;
            case 'success':this.success(); ;break;
            case 'resPass':this.resPass(); ;break;
            case 'modPass':this.modPass(); ;break;
            case 'perData':this.perData(); ;break;
            
        }
    }
    logOut(){ 
        const confirm = Modal.confirm({
            title: '确认注销',
            content: '是否注销用户登录信息，并返回登录页面？',
            okText: '确定',
            cancelText: '取消',
            okType: 'danger',
            onOk() { 
                sessionStorage.setItem("isLogin",0);
                window.location.href = "/login";
            },
            onCancel() {
              console.log('取消');
            },
        });
    }
    success() {
        const modal = Modal.success({
          title: '操作成功',
          content: '请等待2分钟自动关闭，或手动确定关闭',
          okText: "确定", 
        });
        setTimeout(() => modal.destroy(), 60000);
    } 
    resPass() {
        const confirm = Modal.confirm({
            title: '重置密码',
            content: '确认将密码重置为“111111”？',
            okText: '确定',
            cancelText: '取消',
            okType: 'danger',
            onOk() { 
              const modal =  Modal.success({
                title: '重置成功',
                content: '密码已重置成功，请及时修改密码',
                okText: "确定"
              })
            },
            onCancel() {
              console.log('取消');
            },
        });
    }//resPass
    modPass() { 
        this.setState({
            visibleMp: true,
        });
    } //perData
    perData() { 
        this.setState({
            visiblePd: true,
        });
    } //perData
    telValidate(e) {//手机号验证 
        e.target.value=e.target.value.replace(/[^\d]/,'');
        //e.target.value=e.target.value.replace(eval(/[^0-9]/),'');
    }//telValidate
    phoneValidate(e) {//电话号验证 
        e.target.value=e.target.value.replace( /[^\d|^-]/ ,''); 
    }//phoneValidate
    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key="success">
                <a rel="noopener noreferrer" href="javascript:void(0);">Success OK</a>
              </Menu.Item>
              <Menu.Item key="resPass">
                <a rel="noopener noreferrer" href="javascript:void(0);">Reset Password</a>
              </Menu.Item>
              <Menu.Item key="modPass">
                <a rel="noopener noreferrer" href="javascript:void(0);">Modify Password</a>
              </Menu.Item>
              <Menu.Item key="perData">
                <a rel="noopener noreferrer" href="javascript:void(0);">Personal Data</a>
              </Menu.Item>
              <Menu.Item key="logOut">
                <a rel="noopener noreferrer" href="javascript:void(0);">Login Out</a>
              </Menu.Item>
            </Menu>
        );
        return (
            <div id="userBar">
                <Dropdown overlay={menu} placement="bottomRight">
                    <a className="ant-dropdown-link" href="#">
                    UserName <Icon type="down" />
                    </a>
                </Dropdown>
                <Modal
                    title="修改密码"
                    visible={this.state.visibleMp}
                    onOk={this.handleOkMp}
                    onCancel={this.handleCancelMp}
                    width="310px"
                    okText="确定"
                    cancelText="取消"
                    destroyOnClose={true}
                    >
                    <div className="text-right">
                        <div className="form-group form-inline">
                            <label htmlFor="newPsd">新密码：</label>
                            <input id="newPsd" className="form-control" type="password" name="tel" title="密码"/>
                        </div>
                        <div className="form-inline">
                            <label htmlFor="surePsd">确认密码：</label>
                            <input id="surePsd" className="form-control" type="password" name="tel" title="确认密码"/>
                        </div>
                    </div> 
                </Modal>
                <Modal
                    title="个人资料"
                    visible={this.state.visiblePd}
                    onOk={this.handleOkPd}
                    onCancel={this.handleCancelPd}
                    width="600px"
                    okText="确定"
                    cancelText="取消"
                    destroyOnClose={true}
                    >
                    <div>
                        <table className="table table-condensed text-right" style={{margin:'0'}}>
                            <tbody>
                                <tr>
                                    <td className="form-inline">
                                        <label htmlFor="userName"><font color="red">*</font>姓名：</label>
                                        <input id="userName" className="form-control" type="text"/>
                                    </td>
                                    <td className="form-inline">
                                        <label htmlFor="userNo"><font color="red">*</font>操作工号：</label>
                                        <input id="userNo" className="form-control" type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="form-inline">
                                        <label htmlFor="surePsd"><font color="red">*</font>移动电话：</label>
                                        <input id="userTel" className="form-control" onInput={this.telValidate.bind(this)} type="text" maxLength="11"/>
                                    </td>
                                    <td className="form-inline">
                                        <label htmlFor="userPhone">办公电话：</label>
                                        <input id="userPhone" className="form-control" onInput={this.phoneValidate.bind(this)}  type="text" maxLength="20" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="form-inline">
                                        <label htmlFor="userOrg">所属组织：</label> 
                                        <input id="userOrg" className="form-control" type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                    </div> 
                </Modal>
            </div>
        )
    }
}

export default UserBar;