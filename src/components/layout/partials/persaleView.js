

//<ProgressComponent id="Invite_Lv3" data={{barClassName: "progress-bar progress-bar-striped progress-bar-animated bg-danger", label: "75/100", barStyle: { width: "75%" },}}/>

import React from 'react';

import ProgressComponent from '@bit/learningmatters.urs.progress-component';
import Card from "@bit/nexxtway.react-rainbow.card";
import Logo from "./Logo";
import AppBar from "../../../the_a-team.imperfect-components.app-bar";
import ButtonGroup from "../../elements/ButtonGroup";
import Button from "../../elements/Button";
import walletModal from "../../../walletModal";
import {makeRequest} from '@bit/dev10.ui-library.make-request';
import NoButton from '@bit/eden.badjokes-components.button';
import classNames from "classnames";
import DBFunc from "../../../Authdb";
import Axios from 'axios';
//0xf70c48a71274c41aBdc153D99fC417F2bBf4cAa6
function isInteger(obj) {
    return (obj | 0) === obj
}
function disp_prompt()
{
    var name=prompt("What is the quantity?","1")
    if(name&&name.length>6)return null;
    var intvalue=parseInt(name);//15
    if(!isInteger(intvalue))return null;
    return intvalue;
}


let updatatimeint = -1;
const updatatimeico = ["🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛"];
function displayTime() {


        var updatatimediv = document.getElementById("updatatimediv");
        updatatimediv.innerText = "🔥Booking HOT " + updatatimeico[updatatimeint] + ((12)-(updatatimeint)) +  "s"
    if (updatatimeint === 11) updatatimeint = 0;
        if (updatatimeint === 0) {

            DBFunc("selectGetPerSale")().then(
                retdata => {
                    if (retdata) {
                        retdata = JSON.parse(retdata);

                        let text_a1 = retdata[0]["seed0"].toString() + "/20000";
                        let text_a2 = "width:" + ((retdata[0]["seed0"] / 20000) * 100).toString() + "%";

                        let text_b1 = retdata[0]["seed1"].toString() + "/5000";
                        let text_b2 = "width:" + ((retdata[0]["seed1"] / 5000) * 100).toString() + "%";

                        let text_c1 = retdata[0]["seed2"].toString() + "/1000";
                        let text_c2 = "width:" + ((retdata[0]["seed2"] / 1000) * 100).toString() + "%";

                        let text_d1 = retdata[0]["seed3"].toString() + "/200";
                        let text_d2 = "width:" + ((retdata[0]["seed3"] / 200) * 100).toString() + "%";


                        var progress1 = document.getElementsByClassName('progress-bar progress-bar-striped progress-bar-animated bg-warning');
                        var progress2 = document.getElementsByClassName('progress-bar progress-bar-striped progress-bar-animated bg-success');
                        var progress3 = document.getElementsByClassName('progress-bar progress-bar-striped progress-bar-animated bg-info');
                        var progress4 = document.getElementsByClassName('progress-bar progress-bar-striped progress-bar-animated bg-danger');

                        progress1[0].setAttribute("style", text_a2);
                        progress1[0].innerHTML = text_a1;
                        progress2[0].setAttribute("style", text_b2);
                        progress2[0].innerHTML = text_b1;
                        progress3[0].setAttribute("style", text_c2);
                        progress3[0].innerHTML = text_c1;
                        progress4[0].setAttribute("style", text_d2);
                        progress4[0].innerHTML = text_d1;
                    }

                }
            );
        }
    updatatimeint++;
}
function PersaleView( ) {

    let ProgressComponent_A = () =>
        <ProgressComponent id="ProgressComponent_1" data={{
            barClassName: "progress-bar progress-bar-striped progress-bar-animated bg-warning",
            label: "0/20000",
            barStyle: {width: "0%"},
        }}/>

    const ProgressComponent_B = () =>
        <ProgressComponent id="ProgressComponent_2" data={{
            barClassName: "progress-bar progress-bar-striped progress-bar-animated bg-success",
            label: "0/5000",
            barStyle: {width: "0%"},
        }}/>

    const ProgressComponent_C = () =>
        <ProgressComponent id="ProgressComponent_3" data={{
            barClassName: "progress-bar progress-bar-striped progress-bar-animated bg-info",
            label: "0/1000",
            barStyle: {width: "0%"},
        }}/>

    const ProgressComponent_D = () =>
        <ProgressComponent id="ProgressComponent_4" data={{
            barClassName: "progress-bar progress-bar-striped progress-bar-animated bg-danger",
            label: "0/200",
            barStyle: {width: "0%"},
        }}/>
    if(updatatimeint===-1) {
        updatatimeint = 0
        setInterval(displayTime, 2000);
    }
    return (
        <Card style={{width: "auto", height: "auto"}} className="rainbow-align-content_center_card" data-reveal-delay="600">

            <div style={{width: "auto", padding: "1%"}}>
                <div style={{width: "auto", padding: "1%"}}>
                    <Logo style={{width: "50%", padding: "1%"}}/>
                </div>
                <div style={{padding: "1%"}}>
                    <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200"><a style={{color:"#ffd700"}}>GOLDFarm</a><br/>
                        <span style={{color:"#ffd700"}} className="text-color-primary">SEEDS PRESALE</span>
                    </h1>
                    <a id="updatatimediv" style={{fontStyle:"italic",color: "#FF9900"}}>🔥Booking HOT </a>
                </div>
                <div>🌹 Price:<a style={{color:"#ffd700"}}>Free</a>
                    <span className="testimonial-item-link"><a href="#InviteInfotext"> [🌟Click Me]</a></span>
                    <ProgressComponent_A/>

                </div>

                <div style={{padding: "1%"}}>
                    <div>🍏 Pre-sale:<a style={{textDecorationLine:'line-through' ,color:"#ffd700"}}>20U</a>=><a style={{color:"#ffd700"}}>15U</a><span className="testimonial-item-link"><a href="#AppleInfotext"> [Help]</a></span>
                        <ProgressComponent_B/>
                    </div>
                </div>
                <div style={{padding: "1%"}}>
                    <div>🍒 Pre-sale:<a style={{textDecorationLine:'line-through' ,color:"#ffd700"}}>150U</a>=><a style={{color:"#ffd700"}}>100U</a><span className="testimonial-item-link"><a
                        href="#CherryInfotext"> [Help]</a></span>
                        <ProgressComponent_C/>
                    </div>
                </div>
                <div style={{padding: "1%"}}>
                    <div>🍇 Pre-sale:<a style={{textDecorationLine:'line-through' ,color:"#ffd700"}}>1.5BNB</a>=><a style={{color:"#ffd700"}}>1 BNB</a><span className="testimonial-item-link"><a
                        href="#GrapeInfotext"> [Help]</a></span>
                        <ProgressComponent_D/>
                    </div>
                </div>
                <div className="rainbow-align-content_center" style={{width: "100%", padding: "5%"}}>
                    <NoButton style={{width: "33%", padding: "1%"}} onClick={() => {
                        walletModal("walletConnectInit")()
                        if (walletModal("stat")) {
                            let input_number = disp_prompt()
                            if (input_number)
                                walletModal("walletbuyToken")('busd', input_number * 15, 1, input_number)
                        }

                    }}>Buy<br/>🍏<br/></NoButton>
                    <Button style={{width: "35%",height: "53%", padding: "1%"}} onClick={() => {
                        walletModal("walletConnectInit")()
                        if (walletModal("stat")) {
                            let input_number = disp_prompt()
                            if (input_number)
                                walletModal("walletbuyToken")('busd', input_number * 100, 2, input_number)
                        }

                    }}>Buy<br/>🍒<br/></Button>
                    <NoButton style={{width: "33%", padding: "1%"}} onClick={() => {
                        walletModal("walletConnectInit")()
                        if (walletModal("stat")) {
                            let input_number = disp_prompt()
                            if (input_number)
                                walletModal("walletbuyToken")('bnb', input_number, 3, input_number)
                        }

                    }}>Buy<br/>🍇<br/></NoButton>
                </div>
            </div>
            <div style={{width: "auto", padding: "30px"}} data-reveal-delay="600">
                <div style={{padding: "1%"}}>
                    <Card data-reveal-delay="600" >
                        <div className="rainbow-align-content_center2" id="AppBarItemgroup">
                            <h1 className="mb-12 reveal-from-bottom" data-reveal-delay="200">Your Seed<span
                                className="text-color-warning">List</span>
                            </h1>
                            <AppBar>
                                <AppBar.Item>[Invitation🌹]</AppBar.Item>
                                <AppBar.Item>BSC NOT Connect.</AppBar.Item>
                            </AppBar>

                            <AppBar>
                                <AppBar.Item>[Seed-🍏]</AppBar.Item>
                                <AppBar.Item>BSC NOT Connect.</AppBar.Item>
                            </AppBar>
                            <AppBar>
                                <AppBar.Item>[Seed-🍒]</AppBar.Item>
                                <AppBar.Item>BSC NOT Connect.</AppBar.Item>
                            </AppBar>
                            <AppBar>
                                <AppBar.Item>[Seed-🍇]</AppBar.Item>
                                <AppBar.Item>BSC NOT Connect.</AppBar.Item>
                            </AppBar>
                        </div>

                    </Card>
                </div>

                <ButtonGroup>
                    <Button tag="a" color="primary" onClick={() => {
                       // window.alert()
                        //window.location.hash = '#framhelptext';
                        //componentDidMount()
                    }}>
                        🌍Farm Help
                    </Button>
                    <Button id="btn_lwallet" tag="a" color="primary" onClick={() => {
                        walletModal("walletConnectInit")()
                    }}>
                        💰MyWallet
                    </Button>
                    <Button href="#InviteInfotext" id="InviteCode_btn" tag="a" color="secondary">
                        💰Free USDT
                    </Button>

                </ButtonGroup>
            </div>
        </Card>
    );

}


export default PersaleView;
