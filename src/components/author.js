import React, { Component } from 'react';

import {Redirect,Route}from "react-router-dom";
import Login from "../login.js"
import {observer,inject} from "mobx-react";
@inject("store")
@observer class AuthorizedRoute extends Component{
    render(){
        //window.alert("isLogin");
        console.log("author里的store:",this.props.store)
        let { component: Component,...rest} =this.props; //获取顶层provider上所有的信息
        let {isLogin}=this.props.store;
        console.log("isLogin:",isLogin)
        console.log("this.props:",this.props)
        return(
            <Route {...rest} render={props=>{
                return isLogin?<Component {...this.props} />:<Redirect to="/Login" /> //这里的<Component {...this.props} />实际上指向的是Layout组件
            }}/>
        )
    }
}
export default AuthorizedRoute
