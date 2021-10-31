import React, { Component } from 'react';

import DBFunc from "./Authdb";
import Hero from "./components/sections/Hero";
import FeaturesTiles from "./components/sections/FeaturesTiles";

import Testimonial from "./components/sections/Testimonial";

let dbjson
let waitrun = false;
let createClock;

function getUrlToken(name) {
    const v = name+'=';
    const url=window.location.href;//获取地址栏 url
    const index2=url.indexOf(v);//获取?的位置

    if(index2===-1)return null;
    const index3=url.indexOf('&',index2);//获取?的位置
    const index4=url.indexOf('#',index2);//获取?的位置
    if(index3>-1)return url.substr(index2+2,index3-index2-2);
    if(index4>-1)return url.substr(index2+2,index4-index2-2);
    else return url.substr(index2+2);
}

function displayTime() {
    if(!waitrun)
    {
        waitrun = true;
        DBFunc("selectGetPerSale")().then(
            ret =>dbjson = ret
        )

    }
   if(dbjson)
   {
       //DBFunc("SetGData")(dbjson);
       let key2 = dbjson
       localStorage.setItem("psdb",key2.toString());

       localStorage.removeItem("walletconnect");
       //
       // 获取 success
       const urlparm = getUrlToken('i')
       if(urlparm!==null)
           localStorage.setItem("iic",urlparm.toString());

       window.location.href="/";
   }
}

class Login extends Component{
    createClock = setInterval(displayTime, 2000);

    render(){
        if(!dbjson) {
            return (
                <div className="rainbow-align-content_center">
                </div>
            );
        }
        else
        {
           // window.alert(dbjson[0]['bsc'].toString());
            clearInterval(createClock);
            return (
                <>
                    <Hero className="illustration-section-01" />
                    <FeaturesTiles />
                    <Testimonial topDivider />

                </>
            );
        }

    }
}
//<FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
export default Login
