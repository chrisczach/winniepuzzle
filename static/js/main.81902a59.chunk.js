(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,i,n){e.exports={board:"board_board__16f6O"}},function(e,i,n){e.exports={tile:"tile_tile__rCIb0",load:"tile_load__2STJf"}},,,,function(e,i,n){e.exports=n(24)},,,,,function(e,i,n){},,function(e,i,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,i,n){},,,,function(e,i,n){"use strict";n.r(i);var t=n(0),o=n.n(t),r=n(3),a=n.n(r),d=(n(17),n(4)),c=n(5),u=n(10),s=n(6),m=n(11),l=n(9),g=n(1),b=(n(19),n(20),n(7)),f=n.n(b),p=function(e){var i={"grid-template-columns":"repeat("+e.gridSize+", 1fr)","grid-template-rows":"repeat("+e.gridSize+", 1fr)"};return o.a.createElement("div",{style:i,className:f.a.board},e.children)},w=n(8),S=n.n(w),h=function(e){var i=Math.floor((e.index-1)/e.boardSize)+1,n=e.index%e.boardSize===0?e.boardSize:e.index%e.boardSize,t=e.size,r=t-t*e.imageRow,a=t-t*e.imageColumn,d=t*e.boardSize,c={"grid-column":n.toString(),"grid-row":i.toString(),"background-image":'url("./img/'+e.image.toString()+'")',"background-size":d.toString()+"px "+d.toString()+"px","background-position":a.toString()+"px "+r.toString()+"px"},u={"grid-column":n.toString(),"grid-row":i.toString()};return o.a.createElement("div",{onClick:function(i){return e.clickHandler(e.index,i)},style:"X"===e.imageRow?u:c,className:S.a.tile})},v=[{id:1,item:"winnie1.jpg"},{id:2,item:"winnie2.jpg"},{id:3,item:"winnie3.jpg"},{id:4,item:"winnie4.jpg"},{id:5,item:"winnie5.jpg"},{id:6,item:"winnie6.jpg"},{id:7,item:"winnie7.jpg"},{id:8,item:"winnie8.jpg"},{id:9,item:"winnie9.jpg"},{id:10,item:"winnie10.jpg"},{id:11,item:"winnie11.jpg"},{id:12,item:"winnie12.jpg"}],z=function(e){var i=e.board.findIndex(function(e){return"X"===e.imageRow}),n=[];return(i+1)%e.boardSize!==0&&n.push(i+1),i%e.boardSize!==0&&n.push(i-1),i-e.boardSize>=0&&n.push(i-e.boardSize),i+e.boardSize<e.board.length&&n.push(i+e.boardSize),Object(g.a)({},e,{possibleMoves:n})},j=function(e,i){var n=e.board.findIndex(function(e){return"X"===e.imageRow});if(-1!==e.possibleMoves.indexOf(i-1)){var t=e.board,o=[t[n],t[i-1]];t[i-1]=o[0],t[n]=o[1];var r=Object(l.a)(e.moveHistory).concat([n]);return Object(g.a)({},e,{board:t,moveHistory:r})}},x=function(e){var i=!0;return e.board.forEach(function(n,t){(n.imageRow-1)*e.boardSize+(n.imageColumn-1)!==t&&"X"!==n.imageRow&&(i=!1)}),Object(g.a)({},e,{win:i})},M=function(e){for(var i=[],n=1;n<=e.boardSize;n++)for(var t=1;t<=e.boardSize;t++)t===e.boardSize&&n===e.boardSize?i.push({imageRow:"X",imageColumn:"X"}):i.push({imageRow:n,imageColumn:t});return Object(g.a)({},e,{board:i,openSpot:Math.pow(e.boardSize,2)-1})},k=function(e,i,n){var t=v[Math.floor(Math.random()*v.length)].item,o=n,r=i;return Object(g.a)({},e,{image:t,win:!1,moves:o,boardSize:r,currGame:!0})},y=function(e,i){for(var n=function(i){var n=e.possibleMoves,t=e.moveHistory[e.moveHistory.length-1];e=j(e,function e(){return n[Math.floor(Math.random()*n.length)]===t?e():n[Math.floor(Math.random()*n.length)]}()+1),e=x(e),e=z(e)},t=0;t<5*i;t++)n();return e},O=function(e){function i(){var e,n;Object(d.a)(this,i);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(i)).call.apply(e,[this].concat(o)))).state={image:"winnie1.jpg",tileSize:"",possibleMoves:[],moveHistory:[],boardSize:4,board:[],openSpot:0,win:!1},n.setTile=function(){n.setState(function(e){return{tileSize:.98*Math.min(window.innerHeight,window.innerWidth)/e.boardSize}})},n.setBoard=function(){n.setState(function(e){return e=M(e),e=z(e)})},n.updateAvailableMoves=function(){n.setState(function(e){return z(e)})},n.moveTile=function(e,i){n.setState(function(i){return i=j(i,e),i=x(i),i=z(i)})},n.checkBoard=function(){n.setState(function(e){return x(e)})},n.newGame=function(e,i){n.setState(function(n){return n=k(n,e,i),n=M(n),n=z(n),n=y(n,i)})},n}return Object(m.a)(i,e),Object(c.a)(i,[{key:"componentDidMount",value:function(){this.newGame(4,4),this.setTile(),window.addEventListener("resize",this.setTile)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setTile)}},{key:"render",value:function(){var e=this;return o.a.createElement(p,{gridSize:this.state.boardSize},this.state.board.map(function(i,n){return o.a.createElement(h,Object.assign({clickHandler:e.moveTile},i,{image:e.state.image,boardSize:e.state.boardSize,index:n+1,size:e.state.tileSize}))}))}}]),i}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.81902a59.chunk.js.map