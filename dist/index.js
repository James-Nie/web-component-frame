(()=>{"use strict";function t(t,e){customElements.define(t,e)}const e=["class","style"],n=/^@[A-Za-z]/,s=/^[A-Za-z]/;class o extends HTMLElement{templateContent;styleContent;shadowRoot;state;constructor(){super()}render(){return""}styles(){return""}initCore(){this.templateContent=this.render(),this.styleContent=this.styles(),this.shadowRoot=this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.hasChildNodes()&&(this.shadowRoot.innerHTML="");const t=function(t){const{document:e}=window,n=e.createElement("template");return n.innerHTML=t,n.content.cloneNode(!0)}(this.templateContent);this.shadowRoot.appendChild(t);const e=document.createElement("style");e.innerHTML=this.styleContent,this.shadowRoot.appendChild(e),this.eventHandle(this.shadowRoot)}connected(){}connectedCallback(){this.initCore(),this.connected()}disconnected(){}disconnectedCallback(){this.disconnected()}adopted(){}adoptedCallback(){console.log("adoptedCallback"),this.adopted()}attributeChanged(t,e,n){}attributeChangedCallback(t,e,n){console.log("attributeChangedCallback",t,e,n),this.attributeChanged(t,e,n),this.initCore()}get props(){return a(this,s)}set props(t){Object.keys(t).forEach((e=>{this.setAttribute(e,t[e])}))}setState(t){Object.keys(t).forEach((e=>{this.state[e]=t[e]})),this.initCore()}eventHandle=function(t){const e=this;let o=t.firstElementChild;for(;o;){o.firstElementChild&&this.eventHandle(o);const t=a(o,n);Object.keys(t).forEach((n=>{const i=t[n],r=n.replace(/^@/g,"");i&&o.addEventListener(r,(t=>{const n=a(t.currentTarget,s);e[i]&&e[i].apply(e,[t,n])}))})),o=o.nextElementSibling}};$emit=function(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,cancelable:!0}))}}function a(t,n){const s=t.getAttributeNames(),o={};return s.forEach((s=>{const a=n.test(s);!e.includes(s)&&a&&(o[s]=t.getAttribute(s))})),o}t("es-route",class extends o{state={activePath:location.hash};connected(){window.addEventListener("hashchange",(()=>{this.setState({activePath:location.hash})}))}render(){const{path:t}=this.props;return t===this.state.activePath.replace("#/","/")?"<slot></slot>":""}}),t("es-route-link",class extends o{handleClick(){const{href:t}=this.props;location.hash=`#${t}`}render(){return'<a href="javascript:void(0)" @click="handleClick">\n            <slot></slot>\n        </a>'}});[class extends o{static Name="Button";connected(){}render(){const{text:t,type:e="primary"}=this.props;return`\n            <div class="es-button-${e} es-button">\n                ${t?`<span>${t}</span>`:""}\n                <slot></slot>\n            </div>\n        `}styles(){return".es-button { display: inline-block; text-align: center; border-radius: 3px; padding: 5px 15px; color: #ffffff; cursor: pointer; } .es-button:hover { background-color: var(--es-color-primary-hover); } .es-button-primary { background-color: var(--es-color-primary); } .es-button-warning { background-color: var(--es-color-warning); } .es-button-warning:hover { background-color: var(--es-color-warning-hover); } .es-button-danger { background-color: var(--es-color-danger); } .es-button-danger:hover { background-color: var(--es-color-danger-hover); }"}},class extends o{static Name="Input";inputDom;connected(){this.inputDom=this.shadowRoot.querySelector("#input")}change(){this.$emit("change",this.inputDom.value)}render(){const{value:t,placeholder:e}=this.props;return'\n            <span class="es-input-wrapper">\n                <input id="input" class="es-input" @input="input" @change="change"></input>\n            </span>\n        '}styles(){return".es-input-wrapper { display: inline-block; border: 1px solid; border-radius: 1px; } .es-input, .es-input:focus { border: none; outline: none; } .es-input-wrapper:hover { }"}},class extends o{static Name="Image";render(){const{src:t}=this.props;return`<img class="es-image" src="${t}" style="${this.getInnerStyle()}">\n            </img>`}getInnerStyle(){let{width:t="100%",height:e="100%"}=this.props;return t.includes("%")||(t+="px"),e.includes("%")||(e+="px"),`width: ${t}; height: ${e};`}styles(){return" .es-image { cursor: pointer; } .es-image:hover { transform: scale(1.3); }"}},class extends o{static Name="Card";render(){const{title:t,content:e}=this.props;return console.log("-===",t,e),`\n            <div class="es-card">\n                <h2>${t}</h2>\n                <div class="content">${e}</div>\n\n                <slot></slot>\n            </div>\n        `}},class extends o{static Name="List-data";constructor(){super()}render(){return'<div class="es--list-data">\n                <slot></slot>\n            </div>'}}].forEach((e=>{e.Name&&!customElements.get(e.Name)&&t(`es-${e.Name.toLowerCase()}`,e)})),t("my-app",class extends o{state={};connected(){}render(){const{}=this.state;return'<div>\n                <h1 style="text-align: center;">标题</h1>\n                <my-menu></my-menu>\n                <div class="container">\n                    <es-route path="/home">\n                        <container-home></container-home>\n                    </es-route>\n                    <es-route path="/page">\n                        <container-page></container-page>\n                    </es-route>\n                    <es-route path="/page1">\n                        <container-page1></container-page1>\n                    </es-route>\n                </div>\n                \n            </div>'}}),t("my-menu",class extends o{state={menus:[{path:"/home",name:"首页"},{path:"/page",name:"页面"},{path:"/page1",name:"页面1"}]};connected(){console.log("home page connected===")}render(){const{menus:t}=this.state;return`<div class="my-menus">\n                ${t.map((t=>`<es-route-link href="${t.path}">${t.name}</es-route-link>`)).join("")}\n            </div>`}}),t("container-home",class extends o{static Name="Home";state={images:["https://portal.zjzwfw.gov.cn/media/oss/image/BOPS/B9DC663BF45A4BD99EA6141F1E2134C1.jpg","https://portal.zjzwfw.gov.cn/media/oss/image/BOPS/42185E03F796C12E7FDD824C5645E5C5.png"],buttons:[{text:"按钮",type:"primary"}]};connected(){console.log("home page connected===")}handleClick(t){console.log("args===",t)}addClick(){this.setState({buttons:this.state.buttons.concat([{text:"按钮",type:"danger"}])})}render(){const{images:t,buttons:e}=this.state;return console.log("images===",t),`<div>\n                <es-card\n                    title="This is Title"\n                    content="国庆临近，祖国各地国旗飘扬、花团锦簇，节日氛围越加浓厚。25日，天安门广场上的主题大花果篮一经亮相，就吸引了众多游客拍照留念。"\n                ></es-card>\n\n                ${t.map((t=>`<es-image src="${t}" width="200" height="200"></es-image>`)).join("")}\n\n                <br />\n                ${e.map(((t,e)=>{const{text:n,type:s}=t;return`<es-button text="${n}" type="${s}" index=${e} @click="handleClick"></es-button>`})).join("")}\n                <br />\n                <es-button @click="addClick" style="display: block;margin-top: 10px;">添加</es-button>\n                \n            </div>`}}),t("container-page",class extends o{state={commonts:[{time:(new Date).toLocaleDateString(),content:"好啊哈好啊哈好啊哈好啊哈好啊哈"}],comment:""};connected(){console.log("home page connected===")}handleClick(){this.state.comment&&this.setState({commonts:this.state.commonts.concat([{time:(new Date).toLocaleDateString(),content:this.state.comment}]),comment:""})}input(t,e){const{data:n}=t;console.log("input===",t,e),this.setState({comment:n})}change(t,e){const{detail:n}=t;console.log("change===",t,e),this.setState({comment:n})}render(){const{commonts:t}=this.state;return`<div>\n                评论列表: \n                ${t.map((t=>`<div style="margin: 10px;border-bottom: 1px solid;">\n                            <div>时间: ${t.time}</div>\n                            <div>评论内容: ${t.content}</div>\n                        </div>`)).join("")}\n                <br />\n                <es-input @change="change"></es-input> <es-button @click="handleClick">提交</es-button>\n            </div>`}}),t("container-page1",class extends o{static Name="Page1";state={time:Date.now()};connected(){setInterval((()=>{this.setState({time:Date.now()})}),1e3)}handleClick(t){console.log("args===",t)}render(){const{time:t}=this.state,e=new Date(t),n=e.getFullYear(),s=e.getMonth()+1,o=e.getDate(),a=e.getHours(),i=e.getMinutes();let r=e.getSeconds();return r=r<10?`0${r}`:r,`<div>\n                当前时间：${n}年${s}月${o}日 ${a}:${i}:${r}\n            </div>`}})})();