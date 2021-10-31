import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Card from "@bit/nexxtway.react-rainbow.card";
import walletModal from "../../walletModal";
import Input from '@bit/reactstrap.reactstrap.input';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'About ElonZILLA',
    paragraph: 'ElonZILLA project team is formed by experienced dev and marketing experts. Huge marketing plans involved many different regional marketing partners. Our goal is to build more interesting and novel stake games.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <Card data-reveal-delay="600" >
              <div className="tiles-item-inner">
                <a name="AppleInfotext"/>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <h1>💎Token</h1>
                    <p style={{fontStyle:"italic",color: "#FF9900"}}>---Basic information about tokens.</p>
                    <br/>🏦Total : <a style={{color: "#CC6600"}}>5,800,000,000,000,000</a>
                    <br/>🌀Destroy : <a style={{color: "#B40404"}}>50%</a>
                    <br/>💰Pre-IPO : <a style={{color: "#CC6600"}}>15%(10 $BNB)</a>
                    <br/>🥞Initial Liquidity : <a style={{color: "#CC6600"}}>35%</a>
                    <p style={{fontSize:14}}>[Initial LP all into the Black hole]</p>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Join Telegram</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://t.me/Elonzilla_EN">[Click me!]</a>
                  </span>
                </div>
              </div>
              </Card>
            </div>


            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <Card data-reveal-delay="600" >
              <div className="tiles-item-inner">
                <a name="CherryInfotext"/>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">

                    <h1>🍒Game</h1>
                    <p style={{fontStyle:"italic",color: "#FF9900"}}> ---Stake is very sweet.</p>
                    The one with the largest number of [Cumulative Net Buying] $ELONZILLA in every 100 transactions will receive all $BNB in the Rewards pool. <br/>
                    <br/>🔥Round: <a style={{color: "#B40404"}}>100</a> transactions
                    <br/>💵Winning goal : <a style={{color: "#CC6600"}}>Cumulative net buying maximum</a>
                    <br/>💰Rewards  : <a style={{color: "#CC6600"}}>The whole Rewards pool</a>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Viewing Bscscan</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://t.me/Elonzilla_EN">[Click me!]</a>
                  </span>
                </div>
              </div>
              </Card>
            </div>

            <a name="GrapeInfotext"/>
            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <Card data-reveal-delay="600" >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <h1 >📈Road</h1>
                    Gaming is one of the sectors where NFTs seem to have found their ideal ecosystem. NFTs allow players to earn money through gamification by receiving digital tokens.<br/><br/>
                    We will devote ourselves to the development of NFT games!
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Price Chat</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://t.me/Elonzilla_EN">[Click me!]</a>
                  </span>
                </div>
              </div>
              </Card>
            </div>

            <div data-reveal-delay="200">
              <Card data-reveal-delay="600" >
                <div className="tiles-item-inner">
                  <a name="InviteInfotext"/>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      <h1>🌹Why join $ELONZILLA</h1>
                      💠Experienced dev, fully tested and audited contract.<br/><br/>

                      💠Strong Marketing experts<br/><br/>

                      💠Transparent developer and marketing wallets.<br/><br/>

                      💠Advanced reflection feature, Auto Game rewards, no manual claim is required.<br/><br/>

                      Open communication, fully work with the community for feedbacks, critique, suggestions, aim to build a largest Godzilla fans community on BSC.
                      This is long term project, we will open for all suggestions and feedbacks, build a trusted community with our investors together.<br/><br/>
                      We pledge to be completely transparent about developer & Rewards wallets, and every steps of the implementation & development,
                      as we believe that honest is the bedrock of trust between developers and investors. We understand not all crypto projects will success,
                      but we will be there with the community till the end.
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                     <Input

                         id='usericodeurl'
                         placeholder='Your MateID...'
                         autoComplete='off'
                         autoCorrect='off'
                         autoCapitalize='off'
                         spellCheck='false'
                     />

                    <br/>
                    <a onClick={() => {
                      walletModal("walletConnectInit")()
                  }}>[Click LINK Your BSC WALLET]--Dapp soon...</a>
                  </span>
                  </div>
                </div>
              </Card>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
