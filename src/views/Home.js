import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';

import Testimonial from '../components/sections/Testimonial';


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

const Home = () => {
    localStorage.removeItem("walletconnect");
    const urlparm = getUrlToken('i')
    //window.alert(urlparm)
    if(urlparm!==null) localStorage.setItem("iic",urlparm.toString());


  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />

      <Testimonial topDivider />
    </>
  );
}
//<FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
export default Home;
