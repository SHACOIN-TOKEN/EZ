import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';



import '../../App.css';


import PersaleView from "../layout/partials/persaleView";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
  );
 // let ppppppppp = PersaleView();

//此时应该获取当前预售数据

  //DBFunc("GetGData");
  /*
         <div className="hero-content">
         <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
           Landing for <span className="text-color-light"><br/><a style={{color:"#ffd700"}}>GOLDFarm</a></span>
         </h1>
         <progressbarhtml5/>
       </div>
         */
  return (

    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm" >

        <div  className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" align="center" color="primary" className="container-xs">

          <a name="ElonZillaDapp"/>


        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
