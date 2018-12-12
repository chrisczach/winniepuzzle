(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={splash:"splash_splash__10sco",shown:"splash_shown__3Vamn",center:"splash_center__1s7zu",start:"splash_start__1cGPE",incButton:"splash_incButton__3Nbjg",display:"splash_display__16y8T",up:"splash_up__9BxYM",down:"splash_down__11Wxo"}},11:function(e,t,n){e.exports={board:"board_board__2PrUw"}},15:function(e,t,n){e.exports=n(28)},20:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),r=n.n(o),s=(n(20),n(2)),c=n(8),l=n(9),u=n(13),d=n(10),p=n(14),m=n(11),h=n.n(m),w=function(e){return i.a.createElement("div",{className:h.a.board}," ",e.children)},v=n(5),g=n.n(v),f=function(e){var t=Math.floor((e.index-1)/e.boardSize)+1,n=e.index%e.boardSize===0?e.boardSize:e.index%e.boardSize,a=e.size,o=a-a*e.imageRow,r=a-a*e.imageColumn,s=a*e.boardSize,c=e.lastMove.direction,l=e.lastMove.tileIndex;"up"===c?l-=e.boardSize:"down"===c?l+=e.boardSize:"left"===c?l--:l++;var u=l===e.index&&c,d={"grid-column":n.toString(),"grid-row":t.toString(),"background-image":'url("./img/'+e.image.toString()+'")',"background-size":s.toString()+"px "+s.toString()+"px","background-position":r.toString()+"px "+o.toString()+"px"},p={"grid-column":n.toString(),"grid-row":t.toString()};return i.a.createElement("div",{onClick:function(t){return e.clickHandler(e.index,t)},style:"X"===e.imageRow?p:d,className:"".concat(g.a.tile," ").concat(g.a[u])})},b=n(1),_=n.n(b),S=function(e){return i.a.createElement("div",{className:e.currGame?_.a.splash:"".concat(_.a.shown," ").concat(_.a.splash)},i.a.createElement("div",{className:_.a.center},i.a.createElement("h1",null,"Winnie Shuffle!"),e.win&&i.a.createElement("h2",null,"You Win!"),i.a.createElement("h3",null,"Select Level"),i.a.createElement("div",null,i.a.createElement("div",{className:"".concat(_.a.incButton," ").concat(_.a.up),onClick:function(){return e.setOptions(1,0)}},"\xa0"," "),i.a.createElement("div",{className:_.a.display},e.level),i.a.createElement("div",{className:"".concat(_.a.incButton," ").concat(_.a.down),onClick:function(){return e.setOptions(-1,0)}},"\xa0"," ")),i.a.createElement("h3",null,"Select Grid Size"),i.a.createElement("div",null,i.a.createElement("div",{className:"".concat(_.a.incButton," ").concat(_.a.up),onClick:function(){return e.setOptions(0,1)}},"\xa0"," "),i.a.createElement("div",{className:_.a.display},e.boardSize),i.a.createElement("div",{className:"".concat(_.a.incButton," ").concat(_.a.down),onClick:function(){return e.setOptions(0,-1)}},"\xa0")),i.a.createElement("div",{onClick:e.newGame,className:_.a.start},"Start Game \u2192")))},z=n(3),E=n.n(z),j=n(12);function x(e){var t=e.board.findIndex(function(e){return"X"===e.imageRow}),n=[];return(t+1)%e.boardSize!==0&&n.push(t+1),t%e.boardSize!==0&&n.push(t-1),t-e.boardSize>=0&&n.push(t-e.boardSize),t+e.boardSize<e.board.length&&n.push(t+e.boardSize),Object(s.a)({},e,{possibleMoves:n})}function O(e,t){var n=e.board.findIndex(function(e){return"X"===e.imageRow});if(-1===e.possibleMoves.indexOf(t-1))return e;var a=e.board,i=[a[n],a[t-1]];a[t-1]=i[0],a[n]=i[1];var o=Object(j.a)(e.moveHistory).concat([n]),r={tileIndex:t,direction:t===n?"right":t-2===n?"left":t>n?"up":"down"};return e=x(e=Object(s.a)({},e,{board:a,moveHistory:o,lastMove:r}))}function M(e){var t=!0,n=e.currGame;return e.board.forEach(function(n,a){(n.imageRow-1)*e.boardSize+(n.imageColumn-1)!==a&&"X"!==n.imageRow&&(t=!1)}),t&&(n=!1),Object(s.a)({},e,{win:t,currGame:n})}function k(e){for(var t=[],n=1;n<=e.boardSize;n++)for(var a=1;a<=e.boardSize;a++)a===e.boardSize&&n===e.boardSize?t.push({imageRow:"X",imageColumn:"X"}):t.push({imageRow:n,imageColumn:a});return Object(s.a)({},e,{board:t,openSpot:Math.pow(e.boardSize,2)-1,moveHistory:[]})}function y(e){var t=.98*Math.min(window.innerHeight,window.innerWidth)/e.boardSize;return Object(s.a)({},e,{tileSize:t})}var G=n(4),N=n.n(G),C=function(e){var t=e.currGame&&!0===e.showInstall?N.a.show:N.a.hide;return i.a.createElement("div",{onClick:e.closePopup,className:t+" "+N.a.popup},"Install this app on your iPhone: tap  and then Add to homescreen.")},B=["winnie1.jpg","winnie2.jpg","winnie3.jpg","winnie4.jpg","winnie5.jpg","winnie6.jpg","winnie7.jpg","winnie8.jpg","winnie9.jpg","winnie10.jpg","winnie11.jpg","winnie12.jpg"],I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={level:1,boardSize:4,currGame:!1,win:!1},n.setOptions=function(e,t){n.setState(function(n){var a=Math.min(Math.max(n.level+e,1),10),i=Math.min(Math.max(n.boardSize+t,3),10);return Object(s.a)({},n,{level:a,boardSize:i})})},n.setTile=function(){n.setState(y)},n.setBoard=function(){n.setState(function(e){return e=x(e=k(e))})},n.moveTile=function(e,t){n.setState(function(t){return t=M(t=O(t,e))})},n.reset=function(){n.setState({level:1,boardSize:4,currGame:!1,win:!1})},n.checkBoard=function(){n.setState(M)},n.newGame=function(){n.setState(function(e){return e=y(e=function(e){for(var t=function(t){var n=e.possibleMoves,a=e.moveHistory[e.moveHistory.length-1];e=O(e,function e(){return n[Math.floor(Math.random()*n.length)]===a?e():n[Math.floor(Math.random()*n.length)]}()+1)},n=0;n<15*e.level;n++)t();return e}(e=x(e=k(e=function(e,t){var n=t[Math.floor(Math.random()*t.length)];return Object(s.a)({},e,{image:n,win:!1,currGame:!0})}(e,B)))))})},n.closePopup=function(){n.setState(function(e){return Object(s.a)({},e,{showInstall:!1})})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setTile(),window.addEventListener("resize",this.setTile),this.setState(function(e){return Object(s.a)({},e,{showInstall:function(){console.log(window.navigator.userAgent.toLowerCase()),console.log(window.navigator);var e=/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase()),t=window.navigator.standalone;return e&&!t}()})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setTile)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:E.a.main},i.a.createElement("div",{onClick:this.reset,className:E.a.reset},"Reset"),i.a.createElement(S,{setOptions:this.setOptions,level:this.state.level,boardSize:this.state.boardSize,newGame:this.newGame,currGame:this.state.currGame,win:this.state.win}),i.a.createElement(w,{gridSize:this.state.boardSize},this.state.board&&this.state.board.map(function(t,n){return i.a.createElement(f,Object.assign({clickHandler:e.moveTile},t,{image:e.state.image,boardSize:e.state.boardSize,index:n+1,size:e.state.tileSize,lastMove:e.state.lastMove}))})),i.a.createElement("a",{className:E.a.source,href:"https://github.com/chrisczach/winniepuzzle",target:"blank"},"Source Code"),i.a.createElement(C,{currGame:this.state.currGame,closePopup:this.closePopup,showInstall:this.state.showInstall}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,n){e.exports={main:"app_main__XBnI3",reset:"app_reset__9NNcu",source:"app_source__2jN2g"}},4:function(e,t,n){e.exports={popup:"popup_popup__2x1FF",show:"popup_show__UTnrB",hide:"popup_hide__5W4Oc"}},5:function(e,t,n){e.exports={tile:"tile_tile__CaZmw",up:"tile_up__2aLs7",down:"tile_down__3_Oo1",left:"tile_left__2d4EX",right:"tile_right__33szG"}}},[[15,2,1]]]);
//# sourceMappingURL=main.05b6a8e7.chunk.js.map