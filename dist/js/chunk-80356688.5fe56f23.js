(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80356688"],{"060e":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAA6klEQVRIS82Vsa5BQRCGv/8Z1KJS6bWiFLX+egShUhFvoCAa8QhurobEO0jEqTyBiEKJZGQFOZEc5xTcs1PuzM7/7c7srEjBzCwPFCRN4+QVF/ANv5lVgRmwBBqS1lE6aQM6rgswAjqS9q+gPgA+mA5AFxhKOj8WZWZl4OcbpXyTMweUIvwboClp7vwOsA6M/xkwidwf0PIZ0B0i8BXQPZyB60kHWAQqSe78gzEFoBaRb3EfPcGtBz8omjhVaA6G92zvYG4+Ps0HwCPQA/qSTj7NwV9gArQl7Xz7SbJARtIqri9SKXEcVNh/BYI7SxOME2UPAAAAAElFTkSuQmCC"},"1ed2":function(t,a,e){t.exports=e.p+"img/wechat.9868cb5c.png"},"226f":function(t,a,e){"use strict";var i=e("4835"),s=e.n(i);s.a},"430c":function(t,a,e){t.exports=e.p+"img/date.34ee7370.png"},4835:function(t,a,e){},"5d9e":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"page-container quota"},[i("div",{ref:"content",staticClass:"content-container"},[i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"company common-wrap"},[i("div",{staticClass:"item"},[i("van-uploader",{staticClass:"logo",attrs:{"after-read":t.handleLogo}},[[i("img",{attrs:{src:t.company_logo,alt:"logo"}})]],2),i("div",{staticClass:"value"},[i("div",{staticClass:"name zh"},[i("van-field",{attrs:{type:"text",placeholder:"请输入公司名称"},model:{value:t.info.company_name_zh,callback:function(a){t.$set(t.info,"company_name_zh",a)},expression:"info.company_name_zh"}})],1),i("div",{staticClass:"name cn"},[i("van-field",{attrs:{type:"text",placeholder:"请输入公司英文名称"},model:{value:t.info.company_name_cn,callback:function(a){t.$set(t.info,"company_name_cn",a)},expression:"info.company_name_cn"}})],1)])],1),i("div",{staticClass:"item"},[t._m(0),i("div",{staticClass:"value"},[i("van-field",{attrs:{type:"text",placeholder:"请输入公司地址/Address"},model:{value:t.info.company_address,callback:function(a){t.$set(t.info,"company_address",a)},expression:"info.company_address"}})],1)]),i("div",{staticClass:"item"},[t._m(1),i("div",{staticClass:"value"},[i("van-field",{attrs:{type:"text",placeholder:"请输入致/TO"},model:{value:t.info.to,callback:function(a){t.$set(t.info,"to",a)},expression:"info.to"}})],1)]),i("div",{staticClass:"item"},[t._m(2),i("div",{staticClass:"value"},[i("span",{on:{click:function(a){t.showToDate=!0}}},[t._v(t._s(t.formatDate(t.info.to_date)))]),i("van-calendar",{attrs:{"show-confirm":!1,color:"#007BFF"},on:{select:t.handleToDate},model:{value:t.showToDate,callback:function(a){t.showToDate=a},expression:"showToDate"}})],1)]),i("div",{staticClass:"item"},[t._m(3),i("div",{staticClass:"value"},[i("van-field",{attrs:{type:"text",placeholder:"请输入自/From"},model:{value:t.info.from,callback:function(a){t.$set(t.info,"from",a)},expression:"info.from"}})],1)]),i("div",{staticClass:"item"},[t._m(4),i("div",{staticClass:"value"},[i("van-field",{attrs:{type:"text",placeholder:"请输入电话/微信"},model:{value:t.info.phone,callback:function(a){t.$set(t.info,"phone",a)},expression:"info.phone"}})],1)])]),t._l(t.list,(function(a,s){return i("div",{key:s,staticClass:"price list-item common-wrap"},[i("div",{staticClass:"title"},[t._v(t._s(a.startPort)),i("img",{staticClass:"arrow",attrs:{src:e("060e"),mode:"widthFix"}}),t._v(t._s(a.endPort))]),i("div",{staticClass:"name"},[i("img",{staticClass:"logo",attrs:{src:a.company.logo,mode:"widthFix"}}),i("span",[t._v(t._s(a.company.english_name))])]),i("div",{staticClass:"content"},[i("table",[t._m(5,!0),i("tr",[i("td",[t._v("20GP")]),i("td",[i("van-field",{attrs:{type:"number"},on:{input:function(a){return t.calcTransPrice(a,s)}},model:{value:a.gp20,callback:function(e){t.$set(a,"gp20",e)},expression:"item.gp20"}})],1),i("td",[i("van-field",{attrs:{type:"number"},on:{input:function(a){return t.calcTransPrice(a,s)}},model:{value:a.gp20_count,callback:function(e){t.$set(a,"gp20_count",e)},expression:"item.gp20_count"}})],1),i("td",[i("van-field",{attrs:{type:"number"},model:{value:a.gp20_weight,callback:function(e){t.$set(a,"gp20_weight",e)},expression:"item.gp20_weight"}})],1),i("td",[i("van-switch",{attrs:{"active-value":"1","inactive-value":"0",size:"24px"},model:{value:a.gp20_is_w,callback:function(e){t.$set(a,"gp20_is_w",e)},expression:"item.gp20_is_w"}})],1)]),i("tr",[i("td",[t._v("40GP")]),i("td",[i("van-field",{attrs:{type:"number"},on:{input:function(a){return t.calcTransPrice(a,s)}},model:{value:a.gp40,callback:function(e){t.$set(a,"gp40",e)},expression:"item.gp40"}})],1),i("td",[i("van-field",{attrs:{type:"number"},on:{input:function(a){return t.calcTransPrice(a,s)}},model:{value:a.gp40_count,callback:function(e){t.$set(a,"gp40_count",e)},expression:"item.gp40_count"}})],1),i("td",[i("van-field",{attrs:{type:"number"},model:{value:a.gp40_weight,callback:function(e){t.$set(a,"gp40_weight",e)},expression:"item.gp40_weight"}})],1),i("td",[i("van-switch",{attrs:{"active-value":"1","inactive-value":"0",size:"24px"},model:{value:a.gp40_is_w,callback:function(e){t.$set(a,"gp40_is_w",e)},expression:"item.gp40_is_w"}})],1)]),i("tr",[i("td",[t._v("40HQ")]),i("td",[i("van-field",{attrs:{type:"number"},on:{input:function(a){return t.calcTransPrice(a,s)}},model:{value:a.hq40,callback:function(e){t.$set(a,"hq40",e)},expression:"item.hq40"}})],1),i("td",[i("van-field",{attrs:{type:"number"},on:{input:function(a){return t.calcTransPrice(a,s)}},model:{value:a.hq40_count,callback:function(e){t.$set(a,"hq40_count",e)},expression:"item.hq40_count"}})],1),i("td",[i("van-field",{attrs:{type:"number"},model:{value:a.hq40_weight,callback:function(e){t.$set(a,"hq40_weight",e)},expression:"item.hq40_weight"}})],1),i("td",[i("van-switch",{attrs:{"active-value":"1","inactive-value":"0",size:"24px"},model:{value:a.hq40_is_w,callback:function(e){t.$set(a,"hq40_is_w",e)},expression:"item.hq40_is_w"}})],1)]),i("tr",[i("td",[t._v("合计")]),i("td",[t._v("USD")]),i("td",{staticClass:"total",attrs:{colspan:"3"}},[t._v(t._s(a.usd))])])])])])}))],2),t._m(6)]),i("div",{staticClass:"operate-wrap"},[i("div",{staticClass:"operate"},[i("div",{staticClass:"btn update"}),i("button",{directives:[{name:"preventReClick",rawName:"v-preventReClick",value:3e3,expression:"3000"}],staticClass:"btn capture",on:{click:t.handleCapture}},[t._v("生成报价单")])])])])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"title"},[i("img",{staticClass:"icon",attrs:{src:e("d6f7"),alt:"address"}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"title"},[i("img",{staticClass:"icon",attrs:{src:e("9b35"),alt:"mail"}}),i("span",{staticClass:"tit"},[t._v("致/TO：")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"title"},[i("img",{staticClass:"icon",attrs:{src:e("430c"),alt:"date"}}),i("span",{staticClass:"tit"},[t._v("时间/Date：")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"title"},[i("img",{staticClass:"icon",attrs:{src:e("cdf9"),alt:"from"}}),i("span",{staticClass:"tit"},[t._v("自/From：")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"title"},[i("img",{staticClass:"icon",attrs:{src:e("1ed2"),alt:"phone"}}),i("span",{staticClass:"tit"},[t._v("电话/微信：")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("箱型")]),e("th",[t._v("单价")]),e("th",[t._v("数量")]),e("th",[t._v("货重(KGS)")]),e("th",[t._v("重柜")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"remark common-wrap"},[e("div",{staticClass:"title"},[t._v("备注/Remarks:")]),e("div",{staticClass:"content"},[e("div",[t._v("1、以上报价只适用于普通货物(非危险品或其他特殊货物)")]),e("div",[t._v("2、付款方式: 票结、月结")]),e("div",[t._v("3、如阁下所计划装载货物为20'GP, 则须知以下关于货物重量条款: ")]),e("div",[t._v("货物毛重(不包含集装箱重量) ≧ 18 tons: USD 150")]),e("div",[t._v("货物毛重(不包含集装箱重量) ≧ 21 tons: USD 250")]),e("div",{staticClass:"tit"},[t._v("温馨提示：")]),e("div",[t._v("由于运价和舱位变动频繁，敬请关注运价的有效期限，以及在订舱前致电我司确认运价及舱位事宜，")]),e("div",[t._v("订舱时，请将运价及相关船公司和船期等资料在订舱单上注明，以便阁下货物如期出运。多谢支持。")])])])}],n=e("18a0"),o=e.n(n),c=e("c0e9"),l=e.n(c),r=e("f262"),p=e("b775"),d=e("ed08"),m={name:"Quotation",data(){return{ids:"",token:"",configData:{},showToDate:!1,company_logo:e("a1d8"),info:{company_name_zh:"",company_name_cn:"",company_logo:"",company_address:"",to:"",to_date:""},list:[]}},created(){this.ids=this.$route.query.ids||"",this.token=this.$route.query.token||"",this.$store.commit("user/SET_TOKEN",this.token)},async mounted(){document.addEventListener("WeixinJSBridgeReady",(function(){o.a.miniProgram.getEnv((function(t){console.log("当前环境："+JSON.stringify(t))}))})),this.initData()},methods:{async getWxConfig(){let t=await p["a"].wxConfig();this.configData=t.data},initWxConfig(){const t=this.configData;return new Promise((a,e)=>{o.a.config({debug:!0,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["chooseImage"]}),o.a.ready(t=>{a(o.a,t)}),o.a.error(t=>{e(o.a,t)})})},initData(){p["a"].getBatchInfo({complete_price_ids:this.ids}).then(t=>{let a=t.data||[];a.forEach(t=>{t.gp20_count="",t.gp20_weight="",t.gp20_is_w=0,t.gp40_count="",t.gp40_weight="",t.gp40_is_w=0,t.hq40_count="",t.hq40_weight="",t.hq40_is_w=0,t.usd=0,t.company.logo?Object(d["a"])(r["a"].staticUrl+t.company.logo).then(a=>{t.company.logo=a}):t.company.logo=e("a1d8")}),this.list=a,this.info.to_date=parseInt((new Date).getTime())})},formatDate(t){return t?Object(d["b"])(t):""},handleToDate(t){this.info.to_date=parseInt(new Date(t).getTime()/1e3),this.showToDate=!1},handleLogo(t){const a=new FormData;a.append("image",t.file),p["a"].uploadFile(a).then(t=>{let a=t.data;a&&(this.info.company_logo=a,Object(d["a"])(r["a"].staticUrl+a).then(t=>{this.company_logo=t,this.$toast("上传成功")}))})},handleLog(){o.a.miniProgram.navigateTo({url:"/pages/chuancang/baojia/log"})},calcTransPrice(t,a){let e=this.list[a],i=parseFloat(e.gp20)||0,s=parseFloat(e.gp40)||0,n=parseFloat(e.hq40)||0,o=0;(i||s||n)&&(o=(parseFloat(e.gp20)||0)*(Number(e.gp20_count)||0)+(parseFloat(e.gp40)||0)*(Number(e.gp40_count)||0)+(parseFloat(e.hq40)||0)*(Number(e.hq40_count)||0)),this.list[a].usd=parseFloat(o).toFixed(2)},handleCapture(){const t=this.$refs.content;l()(t,{backgroundColor:"#f1f1f1",useCORS:!0}).then(t=>{const a=t.toDataURL("image/png");o.a.miniProgram.postMessage({data:{imageData:a}}),o.a.miniProgram.navigateBack({delta:1})})}}},u=m,v=(e("226f"),e("2877")),_=Object(v["a"])(u,i,s,!1,null,"3f25a123",null);a["default"]=_.exports},"9b35":function(t,a,e){t.exports=e.p+"img/mail.8afe4167.png"},a1d8:function(t,a,e){t.exports=e.p+"img/logo.404d84d9.png"},cdf9:function(t,a,e){t.exports=e.p+"img/from.e202330f.png"},d6f7:function(t,a,e){t.exports=e.p+"img/address.90c10bba.png"}}]);