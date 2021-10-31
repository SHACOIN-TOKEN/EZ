
import { supabase } from './supabaseClient'
import walletModal from "../src/walletModal";
import MD5 from 'crypto-js/md5'

async function selectBSCYQM(bsctext) {
    // window.alert(" selectBSCYQM BSC： " + bsctext)
    bsctext = bsctext.toLowerCase();
    let baseText = MD5(bsctext)
    let yqmtext = baseText.toString().substring(baseText.toString().length - 8);
    let {data, error} = await supabase
        .from('userif')
        .select()
        .match({'bsc': bsctext.toString()})

    if (data.length>0) {
        // window.alert("查询结果：" + error + "   data:" + data.length)
        //window.alert("查询结果：   data:" + data.length)
        await walletModal("seednumberUpadata")(1, data[0]['seed0']);
        await walletModal("seednumberUpadata")(2, data[0]['seed1']);
        await walletModal("seednumberUpadata")(3, data[0]['seed2']);
        await walletModal("seednumberUpadata")(4, data[0]['seed3']);

        return data.toString();
    } else {
       await supabase
            .from('userif')
            .insert([
                {bsc: bsctext.toString(), icode: yqmtext.toString()}
            ])

        await walletModal("seednumberUpadata")(1, "0");
        await walletModal("seednumberUpadata")(2, "0");
        await walletModal("seednumberUpadata")(3, "0");
        await walletModal("seednumberUpadata")(4, "0");
        return yqmtext.toString();
    }

}
async function AddBSCGALLinfo2(currdata,i_number,seedtype,seednumber) {


        if (parseInt(seedtype) === 1) {
            let seed0number = parseInt(currdata[0]['seed0'].toString()) + parseInt(seednumber) ;
            seednumber = parseInt(currdata[0]['seed1'].toString()) + parseInt(seednumber) ;
            const {data, error} = await supabase
                .from('userif')
                .update({ seed1: parseInt(seednumber),seed0:seed0number})
                .match({bsc: "0x0"})
            //window.alert("上传seed1完成  " + seednumber.toString())
        } else if (seedtype === 2) {
            let seed0number = parseInt(currdata[0]['seed0'].toString()) + (parseInt(seednumber)*10) ;
            seednumber = parseInt(currdata[0]['seed2']) + parseInt(seednumber) ;
            const {data, error} = await supabase
                .from('userif')
                .update({ seed2: parseInt(seednumber),seed0:seed0number})
                .match({bsc: "0x0"})
            //window.alert("上传seed2完成  " + seednumber.toString())
        } else if (seedtype === 3) {
            let seed0number = parseInt(currdata[0]['seed0'].toString()) + (parseInt(seednumber)*30) ;
            seednumber = parseInt(currdata[0]['seed3']) + parseInt(seednumber) ;
            const {data, error} = await supabase
                .from('userif')
                .update({ seed3: parseInt(seednumber),seed0:seed0number})
                .match({bsc: "0x0"})
            //window.alert("上传seed2完成  " + seednumber.toString())
        }
}
async function AddBSCGALLinfo(i_number,seedtype,seednumber)
{
    const {data, error} = await supabase
        .from('userif')
        .select()
        .match({'bsc': '0x0'})
    if (error) {
        throw error
    }

    AddBSCGALLinfo2(data,i_number,seedtype,seednumber)
}


async function AddBSCIcodeUSERseed2(currdata,payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber) {
    if (currdata.length > 0) {
        let iuser = parseInt(currdata[0]['i']) + 1;
        let iuser_seed0 = parseInt(currdata[0]['seed0']) + i_number;
        //window.alert("查询邀请码用户信息：  " + currdata[0]['bsc'].toString() + "  " + iuser + "  " + iuser_seed0)

        const {data, error} = await supabase
            .from('userif')
            .update({i: iuser, seed0: parseInt(iuser_seed0)})
            .match({'bsc': currdata[0]['bsc'].toString()})
        if (error) {
            throw error
        }
        AddBSCGALLinfo(i_number,seedtype,seednumber)
    }
}
async function AddBSCIcodeUSERseed(payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber) {
    //window.alert("邀请码  " + payuser_fromicode.toString())


        let {data, error} = await supabase
            .from('userif')
            .select()
            .match({'icode': payuser_fromicode.toString()})

        if (error) {
            throw error
        }

    AddBSCIcodeUSERseed2(data,payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber)


}

async function AddBSCUSERseed(currdata,payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber) {


    try {
        if (parseInt(seedtype) === 1) {
           let m_seednumber = parseInt(currdata[0]['seed1'].toString()) + parseInt(seednumber) ;
            const {data, error} = await supabase
                .from('userif')
                .update({ seed1: parseInt(m_seednumber)})
                .match({bsc: payaccounts.toString()})
            //window.alert("上传seed1完成  " + seednumber.toString())
        } else if (seedtype === 2) {
            let   m_seednumber = parseInt(currdata[0]['seed2']) + parseInt(seednumber) ;
            const {data, error} = await supabase
                .from('userif')
                .update({ seed2: parseInt(m_seednumber)})
                .match({bsc: payaccounts.toString()})
            //window.alert("上传seed2完成  " + seednumber.toString())
        } else if (seedtype === 3) {
            let  m_seednumber = parseInt(currdata[0]['seed3']) + parseInt(seednumber) ;
            const {data, error} = await supabase
                .from('userif')
                .update({ seed3: parseInt(m_seednumber)})
                .match({bsc: payaccounts.toString()})

        }
        //用户信息上传完成，然后开始修正邀请信息

        window.alert("Buy seeds Success! Good Lucky!")


    } catch (error) {
        //window.alert("errrrrrr " + error)
        //console.log('Error downloading image: ', error.message)
    }
    finally {
        if(!payuser_fromicode)
        {
            //window.alert("邀请码为空  " + payuser_fromicode.toString())
        }else
       AddBSCIcodeUSERseed(payaccounts, token, token_num, payuser_fromicode, i_number, seedtype, seednumber)
    }
}
async function selectBSCUSERseed(payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber) {

    try {
        const {data, error} = await supabase
            .from('userif')
            .select()
            .match({'bsc': payaccounts.toString()})
        if (error) {
            throw error
        }

        AddBSCUSERseed(data,payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber)


    } catch (error) {
        //window.alert(error.message + "  chaxun错误 ")
        throw error
    } finally {

    }

}

async function AddBSCTx(payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber,tx) {
    //首先查询

    try {
    const {txdata, error} =await supabase
        .from('bsctx')
        .insert([
            {tx: tx.toString(), token: token.toString(), count: token_num, bsc: payaccounts.toString(), form_icode: payuser_fromicode.toString()}
        ])
    } catch (error) {
            //window.alert(error.message + "  上传TX错误 tx:" + tx.toString() + "   token:" + token.toString()+ "   count :" +parseInt(token_num)+"   bsc:" + payaccounts.toString() + ", icode:" +  payuser_fromicode.toString())
            throw error
    } finally {
        selectBSCUSERseed(payaccounts,token,token_num,payuser_fromicode,i_number,seedtype,seednumber,tx)
        //window.alert("  上传TX完成 tx:" + tx.toString() + "   token:" + token.toString()+ "   count :" +parseInt(token_num)+"   bsc:" + payaccounts.toString() + ", icode:" +  payuser_fromicode.toString())
        //setLoading(false)
    }
        //return JSON.stringify(data);
}
async function selectGetPerSale() {
    //window.alert("查询预售")
    try {
        const {data, error} = await supabase
            .from('userif')
            .select()
            .match({'bsc': '0x0'})
        if (error) {
            throw error
        }

        return JSON.stringify(data);
    } catch (error) {
        console.log('Error downloading image: ', error.message)
    }
    return null;
}

function DBFunc(funcname)
{
    if(funcname==='GetGData')
    {
       walletModal("GetPerSaleData")
        return
    }

    if(funcname==='AddBSCTx')
        return AddBSCTx;
    if(funcname==='selectGetPerSale')
        return selectGetPerSale;
    if(funcname==='selectBSCYQM')
        return selectBSCYQM;
}

export default DBFunc;

