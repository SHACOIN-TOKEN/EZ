import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import DBFunc from "../src/Authdb";
import MD5 from "crypto-js/md5";

let connector;
let accounts, chainId;
let stat = false;
let persaledata="" ;
const walletConnectInit_func = walletConnectInit;
const walletbuyToken_func = walletbuyToken;
function seednumberChange(item,text){
    //找到table标签
    //[Invitation🌹]
    var tab_main = document.getElementById('AppBarItemgroup');
    let tab_1 = tab_main.childNodes[item].childNodes[0].childNodes[1].childNodes[0].childNodes[0]
    tab_1.textContent = parseInt(tab_1.textContent) + parseInt(text);
}

function seednumberUpadata(item,text){
    //找到table标签
    var tab_main = document.getElementById('AppBarItemgroup');
    let tab_1 = tab_main.childNodes[item].childNodes[0].childNodes[1].childNodes[0].childNodes[0]
    tab_1.textContent = parseInt(text);
}

function BtnUpadataInfo(){
    //找到table标签
    var tab_1 = document.getElementById("btn_lwallet");
   // var tab_2 = document.getElementById("walletConnectInit_btn");

    if(!tab_1)return;
    if(stat)
    {
        DBFunc("selectBSCYQM")(accounts.toString());
        tab_1.textContent = accounts.toString().substr(0,4)+ ".." + accounts.toString().substr(accounts.length-5,4);
    }
    else
    {
        tab_1.textContent ="💰MyWallet"
    }

}

function dec2hex(str){
    var dec = str.toString().split(''), sum = [], hex = [], i, s
    while(dec.length){
        s = 1 * dec.shift()
        for(i = 0; s || i < sum.length; i++){
            s += (sum[i] || 0) * 10
            sum[i] = s % 16
            s = (s - sum[i]) / 16
        }
    }
    while(sum.length){
        hex.push(sum.pop().toString(16))
    }
    return hex.join('')
}

function copyUrl()
{ let val = "Pleace Connect wallet";
    if(stat===false)
    {
        //window.alert(accounts.toString())
        return val
    }

    var r = accounts.toString().toLowerCase();
    let baseText = MD5(r.toString())
    let yqmtext = baseText.toString().substring(baseText.toString().length - 8);
    val = yqmtext;

    return val;
}

async function walletbuyToken(type,number,seedtype,seednumber)
{
    if(!connector.connected) {
       // puttab3("钱包未连接，无法交易");
        return null;
    }
    let tx ;
    if(type==='busd')
    {
        /*
async function signTransaction({
  from: string, // Required
  to: string, // Required
  gas: string, // Required
  gasPrice: string, // Required
  value: string, // Required
  data: string, // Required
  nonce: string, // Required
}): Promise<string>;
 */
        let txend = "0000000000000000000000000000000000000000000000000000000000000000";
        let big10str = number.toString() + "000000000000000000";
        let big16 = dec2hex(big10str);
        let txdata ="0xa9059cbb000000000000000000000000f70c48a71274c41aBdc153D99fC417F2bBf4cAa6";
        let txdatavalue = txend.substr(0,txend.length-big16.length) + big16;
//0xa9059cbb000000000000000000000000fab3cd8efe694c369b48b425c62a7a0e7ce94cf70000000000000000000000000000000000000000000000000de0b6b3a7640000
//0xa9059cbb000000000000000000000000fab3cd8efe694c369b48b425c62a7a0e7ce94cf70000000000000000000000000000000000000000000000000de0b6b3a7640000
//0xa9059cbb000000000000000000000000fAb3cD8eFE694c369b48b425C62a7A0E7cE94cF70000000000000000000000000000000000000000000000000de0b6b3a7640000
        txdata = txdata +txdatavalue;
        txdata =  txdata.toLowerCase()
       // window.alert(accounts)
        tx = {
            from: accounts.toString(), // Required
            to: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // Required (for non contract deployments)f70c48a71274c41aBdc153D99fC417F2bBf4cAa6
            gas:"0xcc50",
            data: txdata.toString(), // Required
            value: "0x00", // Optional
        };
    }
    if(type==='bnb') {
        let big10str = number.toString() + "000000000000000000";
        let big16 = '0x' + dec2hex(big10str);
        tx = {
            from: accounts.toString(), // Required
            to: "0xf70c48a71274c41aBdc153D99fC417F2bBf4cAa6", // Required (for non contract deployments)
            data: "0x0", // Required
            gas:"0xcc50",
            value: big16.toString(), // Optional
        };
    }

// Send transaction
    connector
        .sendTransaction(tx)
        .then((result) => {
            // Returns transaction id (hash)
           // puttab3(result);
            //window.alert(result);

            let payaccounts = accounts.toString();
            let payuser_fromicode =localStorage.getItem("iic");
            payaccounts = payaccounts.toLowerCase();
            let i_number = 0;
            if(seedtype===1)i_number = seednumber;
            else if(seedtype===2)i_number = seednumber*10;
            else if(seedtype===3)i_number = seednumber*30;
//async function AddBSCTx(payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber,tx)
            seednumberChange(seedtype+1,seednumber)
            DBFunc("AddBSCTx")(payaccounts,type,number,payuser_fromicode,i_number,seedtype,seednumber,result)

            return true;


        })
        .catch((error) => {
            // Error returned when rejected
            //puttab3(error);
           // window.alert(error);
            return false;
        });
}

async function walletConnectInit() {
    // Create a connector
    if(stat===true&&connector!==undefined) {
        var r = accounts.toString().toLowerCase()
        let baseText = MD5(r.toString())
        let yqmtext = baseText.toString().substring(baseText.toString().length - 8);
        var tab_main = document.getElementById('usericodeurl');
       //window.alert(tab_main)
        tab_main.value = copyUrl(yqmtext.toString());
        return true;
    }
    connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
    });

// Check if connection is already established
    if (!connector.connected) {
        // create new session
        stat=false;
        accounts = "";
        BtnUpadataInfo()
        await connector.createSession();
    }
    else
    {
        stat =true;
        accounts = connector.accounts;

        var r = accounts.toLowerCase();
        let baseText = MD5(r.toString())
        let yqmtext = baseText.toString().substring(baseText.toString().length - 8);

        var tab_main = document.getElementById('usericodeurl');
        //window.alert(tab_main)
        tab_main.value = copyUrl(yqmtext.toString());
        BtnUpadataInfo();
       // alert("connect=>" + connector.accounts)
    }
// Subscribe to connection events
    connector.on("connect", (error, payload) => {
        if (error) {
            throw error;
        }
        stat = true;
        // Get provided accounts and chainId

        ({accounts, chainId} = payload.params[0]);
        if(chainId!==56)
        {
            window.alert("Please use BSC Wallet Connect.")
            connector.killSession();
            return;
        }


        var r = accounts.toString().toLowerCase()

        let baseText = MD5(r.toString())
        let yqmtext = baseText.toString().substring(baseText.toString().length - 8);

        var tab_main = document.getElementById('usericodeurl');
       // window.alert(tab_main)
        tab_main.value = copyUrl(yqmtext.toString());
        BtnUpadataInfo()
        //return DBFunc("selectBSCYQM")(r);

        //window.alert("connect" + accounts);
    });

    connector.on("session_update", (error, payload) => {
        if (error) {
            throw error;
        }
        // Get updated accounts and chainId
        ({accounts, chainId} = payload.params[0]);
       // alert("令牌更新")
       // puttab2("update=>" + accounts)
    });

    connector.on("disconnect", (error, payload) => {
        stat = false;
        accounts = "";
        if (error) {
            throw error;
        }
       // alert("断开")
        //const { accounts, chainId } = payload.params[0];
        //puttab2("disconnect")
        // Delete connector
    });


}

function walletModal(modl) {
    if(modl==="stat")
    {
        if (!connector.connected) {
            stat = false;
            accounts = "";
        }
        return stat;
    }
    if(modl==="bsc"&&accounts)
    {
        return accounts;
    }
    if(modl==="seednumberUpadata")
        return seednumberUpadata;
    if(modl==="seednumberChange")
        return seednumberChange;
    if(modl==="GetPerSaleData")
        return persaledata;
    if(stat===false||modl==="walletConnectInit")
        return walletConnectInit_func;
    if(modl==="walletbuyToken")
        return walletbuyToken_func;
    else
        return connector;
}

export default walletModal;

