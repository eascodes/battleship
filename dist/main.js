(()=>{"use strict";var t={d:(e,n)=>{for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function n(t){const l=e(0,99);return null===t.objList[l].attacked?l:n(t)}t.d({},{V:()=>d});const l=t=>({sendAttack:e=>{if(e)t.receiveAttack(e);else{const e=n(t);t.receiveAttack(e)}},activePlayer:!1});function i(t,e){for(let n=0;n<t.length;n+=1)if(t[n][0]===e[0]&&t[n][1]===e[1])return n}const o=()=>{const t=(()=>{const t=[];for(let e=0;e<10;e+=1)for(let n=0;n<10;n+=1)t.push([e,n]);return t})(),n=(t=>{const e=[];for(let n=0;n<t.length;n+=1)e[n]={ship:null,attacked:null};return e})(t),l=(e,l,o)=>{let c=!0;const s=[e[0],e[1]],a=i(t,s);function r(t){void 0!==n[t-1]&&null!==n[t-1].ship&&(c=!1)}function d(t){void 0!==n[t+1]&&null!==n[t+1].ship&&(c=!1)}function u(t){void 0!==n[t-10]&&null!==n[t-10].ship&&(c=!1)}function h(t){void 0!==n[t+10]&&null!==n[t+10].ship&&(c=!1)}if(null!=n[a].ship&&(c=!1),r(a),d(a),u(a),h(a),"x"===o)for(let t=1;t<l;t+=1)null!=n[a+t].ship&&(c=!1),d(a+t),u(a+t),h(a+t);else{let t=10;for(let e=1;e<l;e+=1)null!=n[a-t].ship&&(c=!1),r(a-t),d(a-t),u(a-t),t+=10}return c},o=(e,l,o)=>{const c=(t=>{const e=t;let n=0;return{shipLength:e,hitNum:n,hit:()=>{n+=1},getHitNum:()=>n,isSunk:()=>n>=e}})(l),s=[e[0],e[1]],a=i(t,s);if(n[a].ship=c,"x"===o)for(let t=1;t<l;t+=1)n[a+t].ship=c;else{let t=10;for(let e=1;e<l;e+=1)n[a-t].ship=c,t+=10}};return{board:t,objList:n,placeShip:o,placeRandomShips:()=>{function t(n){const i=0===e(0,1)?"x":"y",c=function(t,n){let l,i;return"x"===t?(l=e(0,9),i=e(0,9-(n-1))):(l=e(n-1+0,9),i=e(0,9)),[l,i]}(i,n);!0===l(c,n,i)?o(c,n,i):t(n)}t(5),t(4),t(3),t(3),t(2)},hasShip:e=>{const l=[e[0],e[1]],o=i(t,l);return null!=n[o].ship},receiveAttack:t=>{null!=n[t].ship?(n[t].ship.hit(),n[t].attacked=!0):n[t].attacked=!0},allShipsSunk:()=>{let t=!0;for(let e=0;e<n.length;e+=1)n[e].ship&&!0!==n[e].ship.isSunk()&&(t=!1);return t}}},c=(t,e,n)=>{const l=n.objList;return{displayGrid:()=>{for(let n=0;n<100;n+=1){const i=document.createElement("div");i.classList.add("square"),!0===e.activePlayer?null!=l[n].ship&&null===l[n].attacked?i.classList.add("ship"):null!=l[n].ship&&!0===l[n].attacked?i.classList.add("hit-ship"):null===l[n].ship&&!0===l[n].attacked&&i.classList.add("hit-miss"):(i.classList.add("active"),null!=l[n].ship&&!0===l[n].attacked?i.classList.add("hit-ship"):null===l[n].ship&&!0===l[n].attacked&&i.classList.add("hit-miss")),t.appendChild(i)}},removeGrid:()=>{for(;t.firstChild;)t.removeChild(t.firstChild)}}},s=document.querySelector("#start");s.addEventListener("click",(()=>{const t=document.querySelector(".grid-header1"),e=document.querySelector(".grid-header2"),n=document.querySelector(".header");n.removeChild(s);const l=document.createElement("h3");l.textContent="YOUR BOARD",t.appendChild(l);const i=document.createElement("h3");i.textContent="ENEMY BOARD",e.appendChild(i);const o=document.createElement("p");o.classList.add("instructions"),o.textContent="Click a square on the enemy's board to launch an attack!",n.appendChild(o),d()}));const a=document.querySelector(".p1-container"),r=document.querySelector(".p2-container"),d=()=>{const t=o();t.placeRandomShips();const e=o();e.placeRandomShips();const n=l(e),i=l(t),s=c(a,n,t),d=c(r,i,e);n.activePlayer=!0,s.displayGrid(),d.displayGrid(),((t,e,n,l,i)=>{const o=()=>{t.removeGrid(),e.removeGrid(),t.displayGrid(),e.displayGrid()};function c(){return!0===n.allShipsSunk()||!0===l.allShipsSunk()}const s=()=>{document.getElementById("myModal").style.display="block";const t=document.querySelector(".modal-content"),e=document.createElement("p");t.appendChild(e),!0===n.allShipsSunk()?e.textContent="You lost! Better luck next time.":e.textContent="You won! Play again?";const l=document.createElement("button");t.appendChild(l),l.textContent="NEW GAME",l.addEventListener("click",(()=>{location.reload()}))},a=()=>{const t=document.querySelectorAll(".active");for(let e=0;e<t.length;e+=1)t[e].addEventListener("click",(()=>null!==l.objList[e].attacked?a():(l.receiveAttack(e),o(),!0!==c()?r():void s())))},r=()=>{i.sendAttack(),o(),!0===c()?s():a()};return{humanPlay:a,computerPlay:r}})(s,d,t,e,n).humanPlay()}})();