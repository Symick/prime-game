!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:o,defineProperty:a,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:c,getPrototypeOf:d}=Object,u=globalThis,p=u.trustedTypes,m=p?p.emptyScript:"",g=u.reactiveElementPolyfillSupport,f=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,e)=>!o(t,e),_={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&a(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...l(t),...c(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??b)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[f("elementProperties")]=new Map,y[f("finalized")]=new Map,g?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const v=globalThis,A=v.trustedTypes,w=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,x="?"+S,P=`<${x}>`,C=document,R=()=>C.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,N="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,H=/>/g,M=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,q=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),z=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),I=new WeakMap,B=C.createTreeWalker(C,129);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const F=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=T;for(let a=0;a<s;a++){const e=t[a];let s,h,l=-1,c=0;for(;c<e.length&&(o.lastIndex=c,h=o.exec(e),null!==h);)c=o.lastIndex,o===T?"!--"===h[1]?o=k:void 0!==h[1]?o=H:void 0!==h[2]?(D.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=M):void 0!==h[3]&&(o=M):o===M?">"===h[0]?(o=r??T,l=-1):void 0===h[1]?l=-2:(l=o.lastIndex-h[2].length,s=h[1],o=void 0===h[3]?M:'"'===h[3]?L:j):o===L||o===j?o=M:o===k||o===H?o=T:(o=M,r=void 0);const d=o===M&&t[a+1].startsWith("/>")?" ":"";n+=o===T?e+P:l>=0?(i.push(s),e.slice(0,l)+E+e.slice(l)+S+d):e+S+(-2===l?a:d)}return[W(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class V{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[h,l]=F(t,e);if(this.el=V.createElement(h,s),B.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=B.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[n++],s=i.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?Q:"?"===o[1]?X:"@"===o[1]?tt:Z}),i.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(D.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],R()),B.nextNode(),a.push({type:2,index:++r});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===x)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){if(e===z)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=U(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=J(t,r._$AS(t,e.values),r,i)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??C).importNode(e,!0);B.currentNode=i;let r=B.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new et(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=B.nextNode(),n++)}return B.currentNode=C,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),U(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==G&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(W(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new K(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new V(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Y(this.S(R()),this.S(R()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=G}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=J(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=J(this,i[s+o],e,o),a===z&&(a=this._$AH[o]),n||=!U(a)||a!==this._$AH[o],a===G?t=G:t!==G&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class X extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class tt extends Z{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??G)===z)return;const s=this._$AH,i=t===G&&s!==G||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==G&&(s===G||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=v.litHtmlPolyfillSupport;st?.(V,Y),(v.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class it extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Y(e.insertBefore(R(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}it._$litElement$=!0,it.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:it});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:it}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b},at=(t=ot,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,s)=>"object"==typeof s?at(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function lt(t){return ht({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;class dt{constructor(t,e,s){this._correct=!0,this._number=t,this._isPrime=e,this._selected=s}get number(){return this._number}get isPrime(){return this._isPrime}set isPrime(t){this._isPrime=t}get selected(){return this._selected}set selected(t){this._selected=t}get correct(){return this._correct}set correct(t){this._correct=t}}class ut{static createList(t){const e=Array.from({length:t+1},((t,e)=>new dt(e,!0,!1)));e[0].isPrime=!1,e[1].isPrime=!1;for(let s=2;s*s<=t;s++)if(e[s].isPrime)for(let i=s*s;i<=t;i+=s)e[i].isPrime=!1;return e}}var pt=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,gt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?mt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&pt(e,s,n),n};let ft=class extends it{constructor(){super(...arguments),this.message="",this.toastTitle=""}createRenderRoot(){return this}render(){return q`<div
			class="fixed w-[50vw] sm:w-[25vw] transition-all top-5 right-5 bg-white 
            border-gray-700 border-2 border-solid border-opacity-75 z-[9999]
            rounded">
			<div
				class="border-b-2 font-bold border-gray-700 border-opacity-75 border-solid px-4 py-2">
				<span>${this.toastTitle}</span>
			</div>
			<p class="p-4">${this.message}</p>
		</div>`}static show(t,e,s=3e3){const i=document.querySelector("toast-element");i&&document.body.removeChild(i);const r=document.createElement("toast-element");r.message=e,r.toastTitle=t,document.body.appendChild(r),setTimeout((()=>{r.remove()}),s)}};gt([lt()],ft.prototype,"message",2),gt([lt()],ft.prototype,"toastTitle",2),ft=gt([nt("toast-element")],ft);var $t=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,_t=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?bt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&$t(e,s,n),n};let yt=class extends it{constructor(){super(...arguments),this.range=0,this.numberList=[],this.gameFinished=!1}createRenderRoot(){return this}willUpdate(t){t.has("range")&&(this.numberList=ut.createList(this.range))}render(){return q`
			<p class="max-w-[80vw] text-center">
				Click on the numbers you think are prime! Hit finish if you think you are done!
			</p>
			<div
				class="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 max-w-[80vw] max-h-[40vh] sm:max-h-[50vh] overflow-y-auto gap-4 place-items-center border-1 rounded-t border-solid bg-white p-3 mt-4">
				${this.numberList.map((t=>this.displayNumber(t)))}
			</div>
			<div class="flex justify-evenly bg-white rounded-b py-4">
				<button
					class="button ${this.gameFinished?"hidden":"block"}"
					@click="${()=>{this.gameFinished=this.checkWin(),this.requestUpdate()}}">
					Finish
				</button>
				<button class="button" @click="${this.resetGame}">Reset</button>
				<button class="button" @click="${this.quitGame}">Quit</button>
			</div>
		`}displayNumber(t){if(0!=t.number)return q`
			<label
				class="cursor-pointer border-2 border-solid border-gray-900  p-2 block min-w-10 text-center aspect-square rounded transition-all duration-300 
				${t.selected?"bg-blue-600 border-blue-900 text-white":""}
				${t.selected&&!t.correct?"bg-red-700 border-red-950 text-white":""}
				${this.gameFinished&&t.selected?"bg-green-700 border-green-950 text-white":""}
					"
				for="checkbox${t.number}"
				>${t.number}</label
			>
			<input
				class="hidden"
				type="checkbox"
				id="checkbox${t.number}"
				@change="${()=>this.onSelect(t)}" />
		`}onSelect(t){t.correct=!0,t.selected=!t.selected,this.requestUpdate()}checkWin(){let t=!0,e=0,s=0;for(const i of this.numberList)i.isPrime!==i.selected&&(i.correct=!1,t=!1,i.selected?s++:e++);return t?ft.show("Good Job!","Congratulations you have guess all the prime numbers!"):ft.show("Oops!",`To bad you made some mistakes. ${0!=s?`${s} numbers were selected incorrectly;`:""} ${0!=e?`${e} primes were not selected`:""} `),t}resetGame(){this.gameFinished=!1;for(const t of this.numberList)t.correct=!0,t.selected=!1;this.requestUpdate()}quitGame(){const t=new Event("quit",{bubbles:!0,composed:!0});this.dispatchEvent(t)}};_t([ht({type:Number})],yt.prototype,"range",2),_t([lt()],yt.prototype,"numberList",2),_t([lt()],yt.prototype,"gameFinished",2),yt=_t([nt("selection-board")],yt);var vt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,wt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?At(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&vt(e,s,n),n};let Et=class extends it{constructor(){super(...arguments),this.givenRange=Number.NaN}createRenderRoot(){return this}render(){return q`
			<div class="w-[75vw]">
				<p class="">
					Welcome to the prime number game. The workings of the game are simple. You
					enter the range of numbers you want to get and click start. You'll see a
					list of all numbers from 1 to your given range. Your task is to select all
					the prime numbers. Good luck!
				</p>
				<form class="mt-5 flex-col sm:flex-row gap-4 flex justify-around">
					<div>
						<label class="font-semibold mr-4">Range of numbers:</label>
						<input
							type="number"
							class="rounded w-full  sm:max-w-[10ch] border-black border-solid border-2 focus:outline-blue-600 py-1 px-4
							required ${this.givenRange<=0||this.givenRange>5e4?"border-red-600":""}"
							@blur="${()=>this.givenRange=this._input.valueAsNumber}" />
						<p class="text-red-600">
							${this.givenRange<=0||this.givenRange>5e4?q`Range must be between 1 and 50000 `:""}
						</p>
					</div>
					<div class="flex flex-col lg:flex-row gap-4">
						<button class="button sm:w-[20vw]" @click="${this._startGame}">
							Start
						</button>
						<button class="button" @click="${this._startRandomGame}">
							Start with random range
						</button>
					</div>
				</form>
			</div>
		`}_startGame(t){t.preventDefault();const e=Math.abs(this._input.valueAsNumber);if(isNaN(e))return void(this.givenRange=0);this.givenRange=e;const s={detail:{range:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("start",s))}_startRandomGame(t){t.preventDefault();const e=Math.floor(981*Math.random()+20);this.givenRange=e;const s={detail:{range:e},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("start",s))}};wt([function(t,e){return(s,i,r)=>{const n=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof i?s:r??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ct(s,i,{get(){let s=t.call(this);return void 0===s&&(s=n(this),(null!==s||this.hasUpdated)&&e.call(this,s)),s}})}return ct(s,i,{get(){return n(this)}})}}("input",!0)],Et.prototype,"_input",2),wt([lt()],Et.prototype,"givenRange",2),Et=wt([nt("starting-screen")],Et);var St=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Pt=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?xt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&St(e,s,n),n};let Ct=class extends it{constructor(){super(...arguments),this.range=0,this.isRunning=!1}createRenderRoot(){return this}render(){return q`
			<header>
				<h1 class="text-center my-6 font-bold  text-2xl sm:text-3xl md:text-5xl">
					The prime number game
				</h1>
			</header>
			<main class="flex items-center justify-center flex-col">${this.loadScreen()}</main>
			<footer class="text-center fixed bottom-0 w-svw bg-blue-700 p-4">
				<p class="text-white text-xs">
					&copy; 2024 Julian Kruithof. All rights reserved.
				</p>
			</footer>
		`}loadScreen(){return this.isRunning?q`<selection-board @quit="${this._quitGame}" range="${this.range}">
			  </selection-board>`:q`<starting-screen @start="${this._startGame}"></starting-screen>`}_startGame(t){this.isRunning=!0,this.range=t.detail.range}_quitGame(){this.isRunning=!1}};Pt([lt()],Ct.prototype,"range",2),Pt([lt()],Ct.prototype,"isRunning",2),Ct=Pt([nt("app-component")],Ct);
