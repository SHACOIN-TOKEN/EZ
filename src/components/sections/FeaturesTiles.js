import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'WHAT\'S $ELONZILLA?',
    paragraph: 'Cryptocurrencies are an unstable crap without Elon Musk.ElonZilla Token is a stake game contract that Pay a lot of BNB to winners. Just Buy or sell $ELONZILLA , you will auto earn $BNB.'
  };

  const [videoModalActive, setVideomodalactive] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}><br/><br/>
          <div className="hero-figure reveal-from-bottom illustration-element-01" style={{width: "auto", height: "auto"}} data-reveal-value="20px" data-reveal-delay="800">
            <a
                //data-video="https://xbeibeix.com/api/bilibili/biliplayer/?url=www.bilibili.com/video/BV1F54y1S73s"
                //href="#0"
               // aria-controls="video-modal"
                //onClick={openModal}
            >
              <Image
                  className="has-shadow"
                  src={require('./../../assets/images/video-placeholder.jpg')}
                  alt="Hero"
                  />
            </a>
          </div>
        </div>
        <a name="framhelptext"/>
        <div className={innerClasses}><br />
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/logo.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    ALL Fee 12%
                    </h4>
                  <p className="m-0 text-sm">
                    The transaction sliding is 12%. <br/>And the transfer tax is zero.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/logo.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Reward pool 7%
                    </h4>
                  <p className="m-0 text-sm">
                    In every 100 transactions, the person who net buys the most $ELONZILLA gets all $BNB in the reward pool!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/logo.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Buyback 5%
                    </h4>
                  <p className="m-0 text-sm">
                    Buybacks to burn tokens to regulate and pump $ELONZILLA price.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
