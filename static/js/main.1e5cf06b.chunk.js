(this["webpackJsonpoauth-example-client"]=this["webpackJsonpoauth-example-client"]||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o);n(16);function s(e){var t=e.children,n=e.onClick;return r.a.createElement("button",{type:"button",onClick:n,className:"button"},t)}var c=n(2),u=n(4),h=n(10),l=n.n(h);function d(e){var t=encodeURIComponent;return Object.keys(e).map((function(n){return t(n)+"="+t(e[n])})).join("&")}var f=function(){function e(t,n){var a=this;Object(c.a)(this,e),this.handleTokenResponse=function(e,t,n){e.error?n(e):(a.authToken="Bearer ".concat(e.access_token),a.expiresIn=e.expires_in,a.refreshToken=e.refresh_token,a.idToken=e.id_token,a.lastRefresh=l()().toISOString(),a.handleCacheTokens(),t(e))},this.clientID=t.clientID,this.issuerURL=t.issuerURL,this.redirectURL=t.redirectURL,this.scopes=t.scopes,this.setCache=n.setCache,this.getCache=n.getCache,this.clearCache=n.clearCache,this.authToken=null,this.expiresIn=null,this.refreshToken=null,this.idToken=null,this.lastRefresh=null,this.exchangeCode=null,this.getAuthToken=this.getAuthToken.bind(this),this.refreshFromCache=this.refreshFromCache.bind(this),this.handleRefresh=this.handleRefresh.bind(this),this.getLoginURL=this.getLoginURL.bind(this),this.getLogoutURL=this.getLogoutURL.bind(this),this.handleTokenResponse=this.handleTokenResponse.bind(this),this.handleCacheTokens=this.handleCacheTokens.bind(this),this.initializeSession=this.initializeSession.bind(this)}return Object(u.a)(e,[{key:"getAuthToken",value:function(){return this.authToken}},{key:"refreshFromCache",value:function(e,t){var n=this.getCache();if(n){var a=JSON.parse(n);this.authToken=a.authToken,this.expiresIn=a.expiresIn,this.refreshToken=a.refreshToken,this.idToken=a.idToken,this.exchangeCode=a.exchangeCode,this.handleRefresh(e,t)}else t()}},{key:"handleRefresh",value:function(e,t){var n=this;this.exchangeCode&&this.refreshToken?(console.log("attempting to refresh tokens..."),fetch("".concat(this.issuerURL,"/token"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:d({code:this.exchangeCode,refresh_token:this.refreshToken,grant_type:"refresh_token",redirect_uri:this.redirectUrl,client_id:this.clientID})}).then((function(e){return e.json()})).then((function(a){n.handleTokenResponse(a,e,(function(e){n.clearCache(),t(e)}))})).catch((function(e){return t(e)}))):console.log("missing exchangeCode and refreshToken, aborting refresh")}},{key:"getLoginURL",value:function(){var e={client_id:this.clientID,redirect_uri:this.redirectURL,scopes:this.scopes,response_type:"code",response_mode:"form_post",state:crypto.getRandomValues(new Uint8Array(4)).join(""),nonce:crypto.getRandomValues(new Uint8Array(4)).join("")};return"".concat(this.issuerURL,"/auth?").concat(d(e))}},{key:"getLogoutURL",value:function(){this.clearCache();var e={post_logout_redirect_uri:this.redirectURL,state:crypto.getRandomValues(new Uint8Array(4)).join(""),id_token_hint:this.idToken};return"".concat(this.issuerURL,"/sessions/logout?").concat(d(e))}},{key:"initializeSession",value:function(e,t,n){var a=this,r=new URLSearchParams(window.location.search);this.authToken?t():(r.has("code")||t("url does not contain the code parameter"),this.exchangeCode=r.get("code"),fetch("".concat(this.issuerURL,"/token"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:d({code:this.exchangeCode,grant_type:"authorization_code",redirect_uri:this.redirectURL,client_id:this.clientID})}).then((function(e){return e.json()})).then((function(e){return a.handleTokenResponse(e,t,n)})).catch((function(e){return n(e)})))}},{key:"handleCacheTokens",value:function(){this.setCache(JSON.stringify({lastRefresh:this.lastRefresh,authToken:this.authToken,expiresIn:this.expiresIn,refreshToken:this.refreshToken,idToken:this.idToken,exchangeCode:this.exchangeCode}))}}]),e}(),m=function(){function e(t,n){Object(c.a)(this,e),this.getAuthToken=t,this.request=n,this.getMe=this.getMe.bind(this),this.hasBalance=this.hasBalance.bind(this),this.getThirdPartyProfiles=this.getThirdPartyProfiles.bind(this)}return Object(u.a)(e,[{key:"getMe",value:function(){return this.request.authenticated("/v2/users/session","GET")}},{key:"hasBalance",value:function(e,t,n){return this.request.authenticated("/v1/users/".concat(e,"/hasbalance/").concat(t,"/").concat(n),"GET")}},{key:"getThirdPartyProfiles",value:function(e){return this.request.authenticated("/v1/users/".concat(e,"/profile/thirdparties"),"GET")}}]),e}(),p=n(5),g=n.n(p),k=n(6),v=function(){function e(t,n){Object(c.a)(this,e),this.getAuthToken=t,this.authenticated=this.authenticated.bind(this),this.open=this.open.bind(this),this.apiURL=n}return Object(u.a)(e,[{key:"authenticated",value:function(e,t,n){var a={method:t,headers:{Authorization:this.getAuthToken(),"Content-Type":"application/json"}};return n&&(a.body=JSON.stringify(n)),this.executeRequest(e,a)}},{key:"open",value:function(e,t){return this.executeRequest(e,{method:t})}},{key:"executeRequest",value:function(e,t){var n="".concat(this.apiURL).concat(e);return console.log("exectuting request ".concat(t.method," ").concat(n,"...")),new Promise((function(e,a){fetch(n,t).then(function(){var t=Object(k.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:r=t.sent,n.ok?e(r):a(r);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return a(e)}))}))}}]),e}(),b=function(){function e(t,n){Object(c.a)(this,e),this.getAuthToken=t,this.request=n}return Object(u.a)(e,[{key:"internal",value:function(e,t,n,a,r,o){var i={amount:n,decimals:a,toUser:r,message:o,type:"transfer",token:t};return this.request.authenticated("/v1/transactions","POST",i)}}]),e}(),y={apiURL:"https://api.tryroll.com",clientID:"example",issuerURL:"https://oauth.tryroll.com/oauth2",redirectURL:window.location.origin,scopes:["offline","openid","base","read-tx","write-tx"]},C=new function e(t){var n=t.apiURL,a=t.oauthConfig,r=t.authCacheConfig;Object(c.a)(this,e),this.authentication=new f(a,r);var o=new v(this.authentication.getAuthToken,n);this.user=new m(this.authentication.getAuthToken,o),this.transaction=new b(this.authentication.getAuthToken,o)}({apiURL:y.apiURL,oauthConfig:{clientID:y.clientID,issuerURL:y.issuerURL,redirectURL:y.redirectURL,scopes:y.scopes},authCacheConfig:{setCache:function(e){localStorage.setItem("oauthTokens",e)},getCache:function(){return localStorage.getItem("oauthTokens")},clearCache:function(){localStorage.removeItem("oauthTokens")}}}),T=n(1),E=r.a.createContext({isLoggedIn:!1});function R(e){var t=e.children,n=r.a.useState({isLoggedIn:!1,user:{media:[{}]}}),a=Object(T.a)(n,2),o=a[0],i=a[1],s=function(){console.log("failed to authenticate"),i({isLoggedIn:!1})};return r.a.useEffect((function(){var e=function(){console.log("successfully authenticated"),C.user.getMe().then((function(e){console.log("got user data: ",e),i({isLoggedIn:!0,user:e})})).catch((function(e){return console.error(e)}))};o.isLoggedIn||C.authentication.refreshFromCache(e,(function(){new URLSearchParams(window.location.search).has("code")&&C.authentication.initializeSession(window.location.search,e,s)}))}),[o.isLoggedIn]),r.a.createElement(E.Provider,{value:o},r.a.cloneElement(t))}var L=function(){return r.a.createElement(s,{onClick:function(){var e=C.authentication.getLogoutURL();console.log(e),window.location.href=e}},"Log Out")},x=function(){return r.a.createElement(s,{onClick:function(){var e=C.authentication.getLoginURL();console.log(e),window.location.href=e}},"Log In")},w=function(){var e=r.a.useContext(E);return r.a.createElement("div",{className:"header-container"},r.a.createElement("p",null,"Roll OAUTH Example"),e.isLoggedIn?r.a.createElement(L,null):r.a.createElement(x,null))},U=n(3);function O(){var e=r.a.useContext(E),t=r.a.useState({amount:"",symbol:""}),n=Object(T.a)(t,2),a=n[0],o=n[1],i=r.a.useState(""),c=Object(T.a)(i,2),u=c[0],h=c[1],l=r.a.useState(""),d=Object(T.a)(l,2),f=d[0],m=d[1];return r.a.createElement("div",{className:"has-balance-container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Check user balance"),r.a.createElement("p",null,"Returns true or false"),r.a.createElement("input",{placeholder:"amount",value:a.amount,onChange:function(e){return o(Object(U.a)({},a,{amount:e.target.value}))}}),r.a.createElement("input",{placeholder:"symbol",value:a.symbol,onChange:function(e){return o(Object(U.a)({},a,{symbol:e.target.value.toUpperCase()}))}}),r.a.createElement(s,{onClick:function(t){var n=a.amount,r=a.symbol;h("");var o=Number(n);isNaN(o)?h("please provide a valid number"):C.user.hasBalance(e.user.userID,r,n).then((function(e){var t=e.hasbalance;return m("has balance: ".concat(t))})).catch((function(e){return h(e.message)}))}},"Submit")),r.a.createElement("p",null,u),r.a.createElement("p",null,f))}function j(){var e=r.a.useContext(E),t=e.user.media&&e.user.media[0]?e.user.media[0].link:"";return r.a.createElement("div",{className:"user-info-container"},r.a.createElement("img",{src:t,alt:"roll-user-profile-pic",className:"profile-pic"}),r.a.createElement("div",null,r.a.createElement("p",null,"username: ","".concat(e.user.username)),r.a.createElement("p",null,"name: ","".concat(e.user.name))))}function I(e){var t=e.serviceName,n=e.info;return r.a.createElement("div",null,r.a.createElement("h4",null,t),r.a.createElement("p",null,"name: ".concat(n.name)),r.a.createElement("p",null,"username: ".concat(n.username)))}var S=function(){var e=r.a.useContext(E),t=r.a.useState({third_parties:{}}),n=Object(T.a)(t,2),a=n[0],o=n[1];return r.a.useEffect((function(){C.user.getThirdPartyProfiles(e.user.userID).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))}),[e.user.userID]),r.a.createElement("div",{className:"third-party-container"},r.a.createElement("h3",null,"Third Party Profiles"),Object.keys(a.third_parties).map((function(e,t){return r.a.createElement(I,{key:"profile-".concat(t),serviceName:e,info:a.third_parties[e]})})))},_=n(7);function N(){var e=r.a.useContext(E),t=r.a.useState({symbol:"",amount:"",username:""}),n=Object(T.a)(t,2),a=n[0],o=n[1],i=r.a.useState({success:"",error:""}),c=Object(T.a)(i,2),u=c[0],h=c[1],l=function(e,t){o(Object(U.a)({},a,Object(_.a)({},t,e)))},d=function(){var t=Object(k.a)(g.a.mark((function t(){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Number(a.amount),!isNaN(n)){t.next=4;break}return h(Object(U.a)({},u,{error:"please provide a valid amount"})),t.abrupt("return");case 4:if(0!==n){t.next=7;break}return h(Object(U.a)({},u,{error:"amount must be greater than 0"})),t.abrupt("return");case 7:if(a.symbol){t.next=10;break}return h(Object(U.a)({},u,{error:"please provide a symbol"})),t.abrupt("return");case 10:if(a.username){t.next=13;break}return h(Object(U.a)({},u,{error:"please provide a username"})),t.abrupt("return");case 13:return n=Math.round(n*Math.pow(10,4)),t.prev=14,t.next=17,C.transaction.internal(e.user.userID,a.symbol,n,4,a.username,"this was a third party transfer");case 17:r=t.sent,console.log("transfer response: ",r),h({success:"Successfully transfered ".concat(r.floatAmount," ").concat(r.token.symbol),error:""}),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(14),h({success:"",error:t.t0.message});case 25:case"end":return t.stop()}}),t,null,[[14,22]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"transfer-container"},r.a.createElement("h3",null,"Transfers"),r.a.createElement("input",{placeholder:"amount",value:a.amount,onChange:function(e){return l(e.target.value,"amount")}}),r.a.createElement("input",{placeholder:"symbol",value:a.symbol,onChange:function(e){return l(e.target.value.toUpperCase(),"symbol")}}),r.a.createElement("input",{placeholder:"recipient username",value:a.username,onChange:function(e){return l(e.target.value,"username")}}),r.a.createElement(s,{onClick:d},"Send"),r.a.createElement("p",null,u.error||u.success))}n(19);var A=function(){var e=r.a.useContext(E);return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),e.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(S,null),r.a.createElement(N,null)):null)},P=function(){return r.a.createElement(R,null,r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.1e5cf06b.chunk.js.map