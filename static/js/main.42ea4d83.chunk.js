(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,n,t){e.exports={splash:"splash_splash__10sco",shown:"splash_shown__3Vamn",center:"splash_center__1s7zu",start:"splash_start__1cGPE",incButton:"splash_incButton__3Nbjg",display:"splash_display__16y8T",up:"splash_up__9BxYM",down:"splash_down__11Wxo"}},11:function(e,n,t){e.exports={board:"board_board__2PrUw"}},15:function(e,n,t){e.exports=t(28)},20:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(7),r=t.n(i),c=(t(20),t(2)),s=t(8),l=t(9),u=t(13),d=t(10),p=t(14),m=t(11),h=t.n(m),w=function(e){return o.a.createElement("div",{className:h.a.board}," ",e.children)},f=t(5),g=t.n(f),v=function(e){var n=Math.floor((e.index-1)/e.boardSize)+1,t=e.index%e.boardSize===0?e.boardSize:e.index%e.boardSize,a=e.size,i=a-a*e.imageRow,r=a-a*e.imageColumn,c=a*e.boardSize,s=e.lastMove.direction,l=e.lastMove.tileIndex;"up"===s?l-=e.boardSize:"down"===s?l+=e.boardSize:"left"===s?l--:l++;var u=l===e.index&&s,d={"grid-column":t.toString(),"grid-row":n.toString(),"background-image":'url("./img/'+e.image.toString()+'")',"background-size":c.toString()+"px "+c.toString()+"px","background-position":r.toString()+"px "+i.toString()+"px"},p={"grid-column":t.toString(),"grid-row":n.toString()};return o.a.createElement("div",{onClick:function(n){return e.clickHandler(e.index,n)},style:"X"===e.imageRow?p:d,className:"".concat(g.a.tile," ").concat(g.a[u])})},b=t(1),_=t.n(b),S=function(e){return o.a.createElement("div",{className:e.currGame?_.a.splash:"".concat(_.a.shown," ").concat(_.a.splash)},o.a.createElement("div",{className:_.a.center},o.a.createElement("h1",null,"Winnie Shuffle!"),e.win&&o.a.createElement("h2",null,"You Win!"),o.a.createElement("h3",null,"Select Level"),o.a.createElement("div",null,o.a.createElement("div",{className:"".concat(_.a.incButton," ").concat(_.a.up),onClick:function(){return e.setOptions(1,0)}},"\xa0"," "),o.a.createElement("div",{className:_.a.display},e.level),o.a.createElement("div",{className:"".concat(_.a.incButton," ").concat(_.a.down),onClick:function(){return e.setOptions(-1,0)}},"\xa0"," ")),o.a.createElement("h3",null,"Select Grid Size"),o.a.createElement("div",null,o.a.createElement("div",{className:"".concat(_.a.incButton," ").concat(_.a.up),onClick:function(){return e.setOptions(0,1)}},"\xa0"," "),o.a.createElement("div",{className:_.a.display},e.boardSize),o.a.createElement("div",{className:"".concat(_.a.incButton," ").concat(_.a.down),onClick:function(){return e.setOptions(0,-1)}},"\xa0")),o.a.createElement("div",{onClick:e.newGame,className:_.a.start},"Start Game \u2192")))},z=t(4),E=t.n(z),j=t(12);function k(e){var n=e.board.findIndex(function(e){return"X"===e.imageRow}),t=[];return(n+1)%e.boardSize!==0&&t.push(n+1),n%e.boardSize!==0&&t.push(n-1),n-e.boardSize>=0&&t.push(n-e.boardSize),n+e.boardSize<e.board.length&&t.push(n+e.boardSize),Object(c.a)({},e,{possibleMoves:t})}function x(e,n){var t=e.board.findIndex(function(e){return"X"===e.imageRow});if(-1===e.possibleMoves.indexOf(n-1))return e;var a=e.board,o=[a[t],a[n-1]];a[n-1]=o[0],a[t]=o[1];var i=Object(j.a)(e.moveHistory).concat([t]),r={tileIndex:n,direction:n===t?"right":n-2===t?"left":n>t?"up":"down"};return e=k(e=Object(c.a)({},e,{board:a,moveHistory:i,lastMove:r}))}function O(e){var n=!0,t=e.currGame;return e.board.forEach(function(t,a){(t.imageRow-1)*e.boardSize+(t.imageColumn-1)!==a&&"X"!==t.imageRow&&(n=!1)}),n&&(t=!1),Object(c.a)({},e,{win:n,currGame:t})}function y(e){for(var n=[],t=1;t<=e.boardSize;t++)for(var a=1;a<=e.boardSize;a++)a===e.boardSize&&t===e.boardSize?n.push({imageRow:"X",imageColumn:"X"}):n.push({imageRow:t,imageColumn:a});return Object(c.a)({},e,{board:n,openSpot:Math.pow(e.boardSize,2)-1,moveHistory:[]})}function M(e){var n=.98*Math.min(window.innerHeight,window.innerWidth)/e.boardSize;return Object(c.a)({},e,{tileSize:n})}var N=t(3),C=t.n(N),G=function(e){var n=e.currGame&&!0===e.showInstall?C.a.show:C.a.hide;return o.a.createElement("div",{onClick:e.closePopup,className:n+" "+C.a.popup},o.a.createElement("p",null," To install this app on your iPhone, tap  ",o.a.createElement("img",{align:"middle",src:"./nav/action.png"}),"  and then tap Add to Homescreen."),o.a.createElement("div",{className:C.a.close}," \xa0"))},B=["winnie1.jpg","winnie2.jpg","winnie3.jpg","winnie4.jpg","winnie5.jpg","winnie6.jpg","winnie7.jpg","winnie8.jpg","winnie9.jpg","winnie10.jpg","winnie11.jpg","winnie12.jpg"],W=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).state={level:1,boardSize:4,currGame:!1,win:!1},t.setOptions=function(e,n){t.setState(function(t){var a=Math.min(Math.max(t.level+e,1),10),o=Math.min(Math.max(t.boardSize+n,3),10);return Object(c.a)({},t,{level:a,boardSize:o})})},t.setTile=function(){t.setState(M)},t.setBoard=function(){t.setState(function(e){return e=k(e=y(e))})},t.moveTile=function(e,n){t.setState(function(n){return n=O(n=x(n,e))})},t.reset=function(){t.setState({level:1,boardSize:4,currGame:!1,win:!1})},t.checkBoard=function(){t.setState(O)},t.newGame=function(){t.setState(function(e){return e=M(e=function(e){for(var n=function(n){var t=e.possibleMoves,a=e.moveHistory[e.moveHistory.length-1];e=x(e,function e(){return t[Math.floor(Math.random()*t.length)]===a?e():t[Math.floor(Math.random()*t.length)]}()+1)},t=0;t<15*e.level;t++)n();return e}(e=k(e=y(e=function(e,n){var t=n[Math.floor(Math.random()*n.length)];return Object(c.a)({},e,{image:t,win:!1,currGame:!0})}(e,B)))))})},t.closePopup=function(){t.setState(function(e){return Object(c.a)({},e,{showInstall:!1})})},t}return Object(p.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setTile(),window.addEventListener("resize",this.setTile),this.setState(function(e){return Object(c.a)({},e,{showInstall:function(){console.log(window.navigator.userAgent.toLowerCase()),console.log(window.navigator);var e=/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase()),n=window.navigator.standalone;return e&&!n}()})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setTile)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:E.a.main},o.a.createElement("div",{onClick:this.reset,className:E.a.reset},"Reset"),o.a.createElement(S,{setOptions:this.setOptions,level:this.state.level,boardSize:this.state.boardSize,newGame:this.newGame,currGame:this.state.currGame,win:this.state.win}),o.a.createElement(w,{gridSize:this.state.boardSize},this.state.board&&this.state.board.map(function(n,t){return o.a.createElement(v,Object.assign({clickHandler:e.moveTile},n,{image:e.state.image,boardSize:e.state.boardSize,index:t+1,size:e.state.tileSize,lastMove:e.state.lastMove}))})),o.a.createElement("a",{className:E.a.source,href:"https://github.com/chrisczach/winniepuzzle",target:"blank"},"Source Code"),o.a.createElement(G,{currGame:this.state.currGame,closePopup:this.closePopup,showInstall:this.state.showInstall}))}}]),n}(a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/winniepuzzle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/winniepuzzle","/service-worker.js");R?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):I(n,e)})}}()},3:function(e,n,t){e.exports={popup:"popup_popup__2x1FF",show:"popup_show__UTnrB",hide:"popup_hide__5W4Oc",close:"popup_close__1U9mS"}},4:function(e,n,t){e.exports={main:"app_main__XBnI3",reset:"app_reset__9NNcu",source:"app_source__2jN2g"}},5:function(e,n,t){e.exports={tile:"tile_tile__CaZmw",up:"tile_up__2aLs7",down:"tile_down__3_Oo1",left:"tile_left__2d4EX",right:"tile_right__33szG"}}},[[15,2,1]]]);
//# sourceMappingURL=main.42ea4d83.chunk.js.map