(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,s){e.exports=s(18)},15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),l=s(5),i=s.n(l),c=(s(15),s(1)),d=s.n(c),r=s(3),o=s(6),u=s(7),g=s(2),m=s(8),h=s(9),v=(s(17),function(e){Object(h.a)(s,e);var t=Object(m.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={loading:!1,suggested:[],selected:null,word:null},e.word=e.word.bind(Object(g.a)(e)),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementsByClassName("input")[0];t.addEventListener("keyup",(function(s){if("Enter"===s.key&&""!==t.value&&e.word(),0!==e.state.suggested.length&&("ArrowDown"===s.key&&(null===e.state.selected?(e.setState({selected:0}),t.value=document.getElementsByClassName("suggested-list")[0].childNodes[e.state.selected].textContent):e.state.selected<e.state.suggested.length-1?(e.setState((function(e){return{selected:e.selected+1}})),t.value=document.getElementsByClassName("suggested-list")[0].childNodes[e.state.selected].textContent):e.state.selected===e.state.suggested.length-1&&(e.setState({selected:0}),t.value=document.getElementsByClassName("suggested-list")[0].childNodes[e.state.selected].textContent)),"ArrowUp"===s.key&&(e.state.selected>0&&e.state.selected<e.state.suggested.length?(e.setState((function(e){return{selected:e.selected-1}})),t.value=document.getElementsByClassName("suggested-list")[0].childNodes[e.state.selected].textContent):e.state.suggested.length<=e.state.selected?e.setState({selected:e.state.suggested.length-2}):e.state.suggested.length>0&&(e.setState((function(t){return{selected:e.state.suggested.length-1}})),t.value=document.getElementsByClassName("suggested-list")[0].childNodes[e.state.selected].textContent)),null!==e.state.selected)){for(var n=0;n<e.state.suggested.length;n++)document.getElementsByClassName("suggested-list")[0].childNodes[n].classList.remove("selected");e.state.selected<e.state.suggested.length&&e.state.selected>=0?document.getElementsByClassName("suggested-list")[0].childNodes[e.state.selected].classList.add("selected"):document.getElementsByClassName("suggested-list")[0].childNodes[e.state.suggested.length-1].classList.add("selected")}}))}},{key:"word",value:function(){var e=Object(r.a)(d.a.mark((function e(){var t,s,n,a,l,i,c,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(t=document.getElementsByClassName("input")[0].value)){e.next=22;break}return this.setState({suggested:[],loading:!0,word:null,definition:null}),s="https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words?max=70&ml="+t,e.next=6,fetch(s);case 6:return n=e.sent,e.next=9,n.json();case 9:for(a=e.sent,l=[],i=0;i<a.length;i++)l.push(a[i].word);return e.next=14,fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+t+"?key=7e6d05cf-f2ff-4571-bcdc-c93c05e8a98b");case 14:return c=e.sent,e.next=17,c.json();case 17:r=e.sent,o="unavailable",void 0!==r[0]&&void 0!==r[0].shortdef&&(o=r[0].shortdef[0]),this.setState({words:l,suggested:[],loading:!1,selected:null,word:t,definition:o}),document.getElementsByClassName("input")[0].value="";case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"suggested",value:function(e){var t=e.target.textContent;document.getElementsByClassName("input")[0].value=t,this.word()}},{key:"inputChange",value:function(){var e=Object(r.a)(d.a.mark((function e(){var t,s,n,a,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=document.getElementsByClassName("input")[0].value)){e.next=5;break}this.setState({suggested:[],selected:null}),e.next=14;break;case 5:return e.next=7,fetch("https://api.datamuse.com/sug?max=8&s="+t);case 7:return s=e.sent,e.next=10,s.json();case 10:for(n=e.sent,a=[],l=0;l<n.length;l++)a.push(n[l].word);this.setState({suggested:a});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"reset",value:function(){this.setState({definition:null,words:null,word:null,suggested:[],selected:null})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"content-div"},a.a.createElement("div",{className:"title-div"},a.a.createElement("div",{onClick:function(){return e.reset()},className:"title"},"Similarnym"),a.a.createElement("div",{className:"subtitle"},"similar meanings with similar applications")),a.a.createElement("div",{className:"input-div"},a.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.word()}},"Find"),a.a.createElement("div",{className:"text-input"},a.a.createElement("input",{type:"text",className:"input form-control",placeholder:"Search something!",onInput:function(){return e.inputChange()}}),a.a.createElement("div",{className:"suggested-div"},a.a.createElement("ul",{className:"suggested-list"},this.state.suggested?this.state.suggested.map((function(t,s){return s===e.state.suggested.length-1?a.a.createElement("li",{style:{borderRadius:"0 0 7px 7px"},key:s,className:"suggested-li",onClick:function(t){return e.suggested(t)}},a.a.createElement("div",{className:"li-word"},t)):a.a.createElement("li",{key:s,className:"suggested-li",onClick:function(t){return e.suggested(t)}},a.a.createElement("div",{className:"li-word"},t))})):null)))),a.a.createElement("div",{className:"words-div"},this.state.word?a.a.createElement("div",{className:"definition-div"},a.a.createElement("div",{className:"definition-word"},this.state.word),a.a.createElement("div",{className:"definition"},this.state.definition)):null,this.state.words&&!this.state.loading?this.state.words.map((function(t,s){return a.a.createElement("div",{className:"word-syn",onClick:function(t){return e.suggested(t)},key:s},t)})):this.state.loading?a.a.createElement("div",null," Loading... "):null)),a.a.createElement("div",{className:"filler-div"}),a.a.createElement("div",{className:"footer-div"},"Developed by Daniel Yu"))}}]),s}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.8714cfb1.chunk.js.map