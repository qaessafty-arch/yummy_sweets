var Zp=Object.defineProperty;var em=(n,e,t)=>e in n?Zp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var H=(n,e,t)=>em(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=()=>{};var Tu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},nm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),s.push(t[h],t[f],t[p],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new sm;const p=i<<2|a>>4;if(s.push(p),u!==64){const g=a<<4&240|u>>2;if(s.push(g),f!==64){const v=u<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rm=function(n){const e=bh(n);return Ah.encodeByteArray(e,!0)},no=function(n){return rm(n).replace(/\./g,"")},Sh=function(n){try{return Ah.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=()=>im().__FIREBASE_DEFAULTS__,am=()=>{if(typeof process>"u"||typeof Tu>"u")return;const n=Tu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sh(n[1]);return e&&JSON.parse(e)},To=()=>{try{return tm()||om()||am()||lm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ph=n=>{var e,t;return(t=(e=To())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},cm=n=>{const e=Ph(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Rh=()=>{var n;return(n=To())==null?void 0:n.config},Oh=n=>{var e;return(e=To())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[no(JSON.stringify(t)),no(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function dm(){var e;const n=(e=To())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gm(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cm(){return!dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ym(){try{return typeof indexedDB=="object"}catch{return!1}}function Em(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="FirebaseError";class an extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=_m,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Dm(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new an(r,a,s)}}function Dm(n,e){try{let t=0,s="";for(;t<n.length;){const r=n.indexOf("{$",t);if(r===-1){s+=n.substring(t);break}const i=n.indexOf("}",r+2);if(i===-1){s+=n.substring(t);break}const o=n.substring(r+2,i),a=e[o];s+=n.substring(t,r)+(a!=null?String(a):`<${o}?>`),t=i+1}return s}catch{return n}}function vm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function us(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(bu(i)&&bu(o)){if(!us(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function bu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wm(n,e){const t=new Im(n,e);return t.subscribe.bind(t)}class Im{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Tm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ia),r.error===void 0&&(r.error=Ia),r.complete===void 0&&(r.complete=Ia);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ia(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nh(n){return(await fetch(n,{credentials:"include"})).ok}class Bs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new um;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sm(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Am(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Am(n){return n===Yn?void 0:n}function Sm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const Rm={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Om=he.INFO,Nm={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},km=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Nm[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=Om,this._logHandler=km,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const xm=(n,e)=>e.some(t=>n instanceof t);let Au,Su;function Lm(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fm(){return Su||(Su=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kh=new WeakMap,za=new WeakMap,xh=new WeakMap,Ta=new WeakMap,wl=new WeakMap;function Mm(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(wn(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&kh.set(t,n)}).catch(()=>{}),wl.set(e,n),e}function Vm(n){if(za.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});za.set(n,e)}let Qa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return za.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Um(n){Qa=n(Qa)}function Gm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ba(this),e,...t);return xh.set(s,e.sort?e.sort():[e]),wn(s)}:Fm().includes(n)?function(...e){return n.apply(ba(this),e),wn(kh.get(this))}:function(...e){return wn(n.apply(ba(this),e))}}function Hm(n){return typeof n=="function"?Gm(n):(n instanceof IDBTransaction&&Vm(n),xm(n,Lm())?new Proxy(n,Qa):n)}function wn(n){if(n instanceof IDBRequest)return Mm(n);if(Ta.has(n))return Ta.get(n);const e=Hm(n);return e!==n&&(Ta.set(n,e),wl.set(e,n)),e}const ba=n=>wl.get(n);function $m(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=wn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(wn(o.result),c.oldVersion,c.newVersion,wn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qm=["get","getKey","getAll","getAllKeys","count"],Jm=["put","add","delete","clear"],Aa=new Map;function Pu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Aa.get(e))return Aa.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Jm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qm.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return Aa.set(e,i),i}Um(n=>({...n,get:(e,t,s)=>Pu(e,t)||n.get(e,t,s),has:(e,t)=>!!Pu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Km(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Km(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wa="@firebase/app",Ru="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new vl("@firebase/app"),zm="@firebase/app-compat",Qm="@firebase/analytics-compat",Wm="@firebase/analytics",Ym="@firebase/app-check-compat",Xm="@firebase/app-check",Zm="@firebase/auth",eg="@firebase/auth-compat",tg="@firebase/database",ng="@firebase/data-connect",sg="@firebase/database-compat",rg="@firebase/functions",ig="@firebase/functions-compat",og="@firebase/installations",ag="@firebase/installations-compat",lg="@firebase/messaging",cg="@firebase/messaging-compat",ug="@firebase/performance",Bg="@firebase/performance-compat",hg="@firebase/remote-config",dg="@firebase/remote-config-compat",fg="@firebase/storage",pg="@firebase/storage-compat",mg="@firebase/firestore",gg="@firebase/ai",Cg="@firebase/firestore-compat",yg="firebase",Eg="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="[DEFAULT]",_g={[Wa]:"fire-core",[zm]:"fire-core-compat",[Wm]:"fire-analytics",[Qm]:"fire-analytics-compat",[Xm]:"fire-app-check",[Ym]:"fire-app-check-compat",[Zm]:"fire-auth",[eg]:"fire-auth-compat",[tg]:"fire-rtdb",[ng]:"fire-data-connect",[sg]:"fire-rtdb-compat",[rg]:"fire-fn",[ig]:"fire-fn-compat",[og]:"fire-iid",[ag]:"fire-iid-compat",[lg]:"fire-fcm",[cg]:"fire-fcm-compat",[ug]:"fire-perf",[Bg]:"fire-perf-compat",[hg]:"fire-rc",[dg]:"fire-rc-compat",[fg]:"fire-gcs",[pg]:"fire-gcs-compat",[mg]:"fire-fst",[Cg]:"fire-fst-compat",[gg]:"fire-vertex","fire-js":"fire-js",[yg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map,Dg=new Map,Xa=new Map;function Ou(n,e){try{n.container.addComponent(e)}catch(t){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ls(n){const e=n.name;if(Xa.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,n);for(const t of so.values())Ou(t,n);for(const t of Dg.values())Ou(t,n);return!0}function Il(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Zr("app","Firebase",vg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=Eg;function Lh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ya,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Yt.create("bad-app-name",{appName:String(r)});if(t||(t=Rh()),!t)throw Yt.create("no-options");const i=so.get(r);if(i)if(us(t,i.options)){if(us(s,i.config))return i;throw Yt.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw Yt.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Pm(r);for(const c of Xa.values())o.addComponent(c);const a=new wg(t,s,o);return so.set(r,a),a}function Fh(n=Ya){const e=so.get(n);if(!e&&n===Ya&&Rh())return Lh();if(!e)throw Yt.create("no-app",{appName:n});return e}function In(n,e,t){let s=_g[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(o.join(" "));return}Ls(new Bs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="firebase-heartbeat-database",Tg=1,kr="firebase-heartbeat-store";let Sa=null;function Mh(){return Sa||(Sa=$m(Ig,Tg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),Sa}async function bg(n){try{const t=(await Mh()).transaction(kr),s=await t.objectStore(kr).get(Vh(n));return await t.done,s}catch(e){if(e instanceof an)nn.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(t.message)}}}async function Nu(n,e){try{const s=(await Mh()).transaction(kr,"readwrite");await s.objectStore(kr).put(e,Vh(n)),await s.done}catch(t){if(t instanceof an)nn.warn(t.message);else{const s=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nn.warn(s.message)}}}function Vh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=1024,Sg=30;class Pg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Og(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ku();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Sg){const o=Ng(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){nn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ku(),{heartbeatsToSend:s,unsentEntries:r}=Rg(this._heartbeatsCache.heartbeats),i=no(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return nn.warn(t),""}}}function ku(){return new Date().toISOString().substring(0,10)}function Rg(n,e=Ag){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),xu(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),xu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Og{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ym()?Em().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Nu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Nu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xu(n){return no(JSON.stringify({version:2,heartbeats:n})).length}function Ng(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n){Ls(new Bs("platform-logger",e=>new jm(e),"PRIVATE")),Ls(new Bs("heartbeat",e=>new Pg(e),"PRIVATE")),In(Wa,Ru,n),In(Wa,Ru,"esm2020"),In("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kg("");var xg="firebase",Lg="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(xg,Lg,"app");function Uh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fg=Uh,Gh=new Zr("auth","Firebase",Uh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new vl("@firebase/auth");function Ji(n,...e){ro.logLevel<=he.WARN&&ro.warn(`Auth (${Js}): ${n}`,...e)}function ji(n,...e){ro.logLevel<=he.ERROR&&ro.error(`Auth (${Js}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n,...e){throw Tl(n,...e)}function Ot(n,...e){return Tl(n,...e)}function bo(n,e,t){const s={...Fg(),[e]:t};return new Zr("auth","Firebase",s).create(e,{appName:n.name})}function is(n){return bo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mg(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Jt(n,"argument-error"),bo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tl(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Gh.create(n,...e)}function re(n,e,...t){if(!n)throw Tl(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ji(e),new Error(e)}function sn(n,e){n||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Vg(){return Lu()==="http:"||Lu()==="https:"}function Lu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vg()||pm()||"connection"in navigator)?navigator.onLine:!0}function Gg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t){this.shortDelay=e,this.longDelay=t,sn(t>e,"Short delay should be less than long delay!"),this.isMobile=hm()||mm()}get(){return Ug()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n,e){sn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qg=new ni(3e4,6e4);function Al(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function js(n,e,t,s,r={}){return $h(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ei({...o,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...i};return fm()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&ti(n.emulatorConfig.host)&&(u.credentials="include"),Hh.fetch()(await qh(n,n.config.apiHost,t,a),u)})}async function $h(n,e,t){n._canInitEmulator=!1;const s={...Hg,...e};try{const r=new jg(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Oi(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bo(n,h,u);Jt(n,h)}}catch(r){if(r instanceof an)throw r;Jt(n,"network-request-failed",{message:String(r)})}}async function Jg(n,e,t,s,r={}){const i=await js(n,e,t,s,r);return"mfaPendingCredential"in i&&Jt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function qh(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?bl(n.config,r):`${n.config.apiScheme}://${r}`;return $g.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class jg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),qg.get())})}}function Oi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Ot(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(n,e){return js(n,"POST","/v1/accounts:delete",e)}async function io(n,e){return js(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zg(n,e=!1){const t=Je(n),s=await t.getIdToken(e),r=Sl(s);re(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ir(Pa(r.auth_time)),issuedAtTime:Ir(Pa(r.iat)),expirationTime:Ir(Pa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pa(n){return Number(n)*1e3}function Sl(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ji("JWT malformed, contained fewer than 3 sections"),null;try{const r=Sh(t);return r?JSON.parse(r):(ji("Failed to decode base64 JWT payload"),null)}catch(r){return ji("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Fu(n){const e=Sl(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof an&&Qg(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Qg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(n){var f;const e=n.auth,t=await n.getIdToken(),s=await xr(n,io(e,{idToken:t}));re(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(f=r.providerUserInfo)!=null&&f.length?Jh(r.providerUserInfo):[],o=Xg(n.providerData,i),a=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),u=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new el(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Yg(n){const e=Je(n);await oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xg(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Jh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(n,e){const t=await $h(n,{},async()=>{const s=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await qh(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&ti(n.emulatorConfig.host)&&(c.credentials="include"),Hh.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function eC(n,e){return js(n,"POST","/v2/accounts:revokeToken",Al(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=Fu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Zg(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Os;return s&&(re(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(re(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Rt{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Wg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new el(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await xr(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zg(this,e)}reload(){return Yg(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Rt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await oo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await xr(this,Kg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:p,isAnonymous:g,providerData:v,stsTokenManager:O}=t;re(f&&O,e,"internal-error");const F=Os.fromJSON(this.name,O);re(typeof f=="string",e,"internal-error"),fn(s,e.name),fn(r,e.name),re(typeof p=="boolean",e,"internal-error"),re(typeof g=="boolean",e,"internal-error"),fn(i,e.name),fn(o,e.name),fn(a,e.name),fn(c,e.name),fn(u,e.name),fn(h,e.name);const S=new Rt({uid:f,auth:e,email:r,emailVerified:p,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:F,createdAt:u,lastLoginAt:h});return v&&Array.isArray(v)&&(S.providerData=v.map(G=>({...G}))),c&&(S._redirectEventId=c),S}static async _fromIdTokenResponse(e,t,s=!1){const r=new Os;r.updateFromServerResponse(t);const i=new Rt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await oo(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];re(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Jh(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Os;a.updateFromIdToken(s);const c=new Rt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new el(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Map;function Zt(n){sn(n instanceof Function,"Expected a class definition");let e=Mu.get(n);return e?(sn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jh.type="NONE";const Vu=jh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(n,e,t){return`firebase:${n}:${e}:${t}`}class os{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ki("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await io(this.auth,{idToken:e}).catch(()=>{});return t?Rt._fromGetAccountInfoResponse(this.auth,t,e):null}return Rt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,s="authUser"){if(!t.length)return new os(Zt(Vu),e,s);const r=(await Promise.all(t.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let i=r[0]||Zt(Vu);const o=Ki(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const p=await io(e,{idToken:h}).catch(()=>{});if(!p)break;f=await Rt._fromGetAccountInfoResponse(e,p,h)}else f=Rt._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new os(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new os(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xh(e))return"Blackberry";if(Zh(e))return"Webos";if(zh(e))return"Safari";if((e.includes("chrome/")||Qh(e))&&!e.includes("edge/"))return"Chrome";if(Yh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Kh(n=nt()){return/firefox\//i.test(n)}function zh(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qh(n=nt()){return/crios\//i.test(n)}function Wh(n=nt()){return/iemobile/i.test(n)}function Yh(n=nt()){return/android/i.test(n)}function Xh(n=nt()){return/blackberry/i.test(n)}function Zh(n=nt()){return/webos/i.test(n)}function Pl(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tC(n=nt()){var e;return Pl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function nC(){return gm()&&document.documentMode===10}function ed(n=nt()){return Pl(n)||Yh(n)||Zh(n)||Xh(n)||/windows phone/i.test(n)||Wh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n,e=[]){let t;switch(n){case"Browser":t=Uu(nt());break;case"Worker":t=`${Uu(nt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Js}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(n,e={}){return js(n,"GET","/v2/passwordPolicy",Al(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=6;class oC{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??iC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gu(this),this.idTokenSubscription=new Gu(this),this.beforeStateQueue=new sC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted){try{this.persistenceManager=await os.create(this,e)}catch(o){Ji(`Failed to initialize persistence: ${o}`),this.persistenceManager=await os.create(this,[])}finally{(s=this._resolvePersistenceManagerAvailable)==null||s.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){Ji(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await io(this,{idToken:e}),s=await Rt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(is(this));const t=e?Je(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rC(this),t=new oC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await eC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zt(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}).catch(c=>{if(!o)if(typeof t!="function"&&t.error)t.error(c);else if(s)s(c);else throw c}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const s=(t==null?void 0:t.message)||String(t),r=bo(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Ji(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ao(n){return Je(n)}class Gu{constructor(e){this.auth=e,this.observer=null,this.addObserver=wm(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lC(n){Rl=n}function cC(n){return Rl.loadJS(n)}function uC(){return Rl.gapiScript}function BC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(n,e){const t=Il(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(us(i,e??{}))return r;Jt(r,"already-initialized")}return t.initialize({options:e})}function dC(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function fC(n,e,t){const s=Ao(n);re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=nd(e),{host:o,port:a}=pC(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){re(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),re(us(u,s.config.emulator)&&us(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,ti(o)?Nh(`${i}//${o}${c}`):mC()}function nd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pC(n){const e=nd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Hu(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Hu(o)}}}function Hu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function mC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(n,e){return Jg(n,"POST","/v1/accounts:signInWithIdp",Al(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="http://localhost";class hs extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new hs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ns(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ns(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ns(e,t)}buildRequest(){const e={requestUri:gC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ei(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Ol{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends si{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Qt.credential(t,s)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends si{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends si{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return _n.credential(t,s)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Rt._fromIdTokenResponse(e,s,r),o=$u(s);return new Fs({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=$u(s);return new Fs({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function $u(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends an{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ao.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ao(e,t,s,r)}}function rd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ao._fromErrorAndOperation(n,i,e,s):i})}async function CC(n,e,t=!1){const s=await xr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fs._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(n,e,t=!1){const{auth:s}=n;if(Pt(s.app))return Promise.reject(is(s));const r="reauthenticate";try{const i=await xr(n,rd(s,r,e,n),t);re(i.idToken,s,"internal-error");const o=Sl(i.idToken);re(o,s,"internal-error");const{sub:a}=o;return re(n.uid===a,s,"user-mismatch"),Fs._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(n,e,t=!1){if(Pt(n.app))return Promise.reject(is(n));const s="signIn",r=await rd(n,s,e),i=await Fs._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function _C(n,e,t,s){return Je(n).onIdTokenChanged(e,t,s)}function DC(n,e,t){return Je(n).beforeAuthStateChanged(e,t)}function vC(n,e,t,s){return Je(n).onAuthStateChanged(e,t,s)}function Ra(n){return Je(n).signOut()}const lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lo,"1"),this.storage.removeItem(lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=1e3,IC=10;class ad extends od{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);nC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,IC):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},wC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ad.type="LOCAL";const TC=ad;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends od{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ld.type="SESSION";const cd=ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new So(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await bC(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}So.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Nl("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function SC(n){Ut().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function PC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function OC(){return ud()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="firebaseLocalStorageDb",NC=1,co="firebaseLocalStorage",hd="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Po(n,e){return n.transaction([co],e?"readwrite":"readonly").objectStore(co)}function kC(){const n=indexedDB.deleteDatabase(Bd);return new ri(n).toPromise()}function dd(){const n=indexedDB.open(Bd,NC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(co,{keyPath:hd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(co)?e(s):(s.close(),await kC(),e(await dd()))})})}async function qu(n,e,t){const s=Po(n,!0).put({[hd]:e,value:t});return new ri(s).toPromise()}async function xC(n,e){const t=Po(n,!1).get(e),s=await new ri(t).toPromise();return s===void 0?null:s.value}function Ju(n,e){const t=Po(n,!0).delete(e);return new ri(t).toPromise()}const LC=800,FC=3;class fd{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=dd(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>FC)throw s;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return ud()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=So._getInstance(OC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await PC(),!this.activeServiceWorker)return;this.sender=new AC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await qu(e,lo,"1"),await Ju(e,lo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>qu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>xC(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ju(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=Po(r,!1).getAll();return new ri(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||Ji(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}fd.type="LOCAL";const MC=fd;new ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n,e){return e?Zt(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ns(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function VC(n){return EC(n.auth,new kl(n),n.bypassAuthState)}function UC(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),yC(t,new kl(n),n.bypassAuthState)}async function GC(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),CC(t,new kl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VC;case"linkViaPopup":case"linkViaRedirect":return GC;case"reauthViaPopup":case"reauthViaRedirect":return UC;default:Jt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new ni(2e3,1e4);async function $C(n,e,t){if(Pt(n.app))return Promise.reject(Ot(n,"operation-not-supported-in-this-environment"));const s=Ao(n);Mg(n,e,Ol);const r=pd(s,t);return new ts(s,"signInViaPopup",e,r).executeNotNull()}class ts extends md{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HC.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="pendingRedirect",zi=new Map;class JC extends md{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const s=await jC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jC(n,e){const t=QC(e),s=zC(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function KC(n,e){zi.set(n._key(),e)}function zC(n){return Zt(n._redirectPersistence)}function QC(n){return Ki(qC,n.config.apiKey,n.name)}async function WC(n,e,t=!1){if(Pt(n.app))return Promise.reject(is(n));const s=Ao(n),r=pd(s,e),o=await new JC(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=600*1e3;class XC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!gd(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ot(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YC&&this.cachedEventUids.clear(),this.cachedEventUids.has(ju(e))}saveEventToCache(e){this.cachedEventUids.add(ju(e)),this.lastProcessedEventTime=Date.now()}}function ju(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(n,e={}){return js(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ny=/^https?/;async function sy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ey(n);for(const t of e)try{if(ry(t))return}catch{}Jt(n,"unauthorized-domain")}function ry(n){const e=Za(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!ny.test(t))return!1;if(ty.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new ni(3e4,6e4);function Ku(){const n=Ut().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oy(n){return new Promise((e,t)=>{var r,i,o;function s(){Ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ku(),t(Ot(n,"network-request-failed"))},timeout:iy.get()})}if((i=(r=Ut().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ut().gapi)!=null&&o.load)s();else{const a=BC("iframefcb");return Ut()[a]=()=>{gapi.load?s():t(Ot(n,"network-request-failed"))},cC(`${uC()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function ay(n){return Qi=Qi||oy(n),Qi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new ni(5e3,15e3),cy="__/auth/iframe",uy="emulator/auth/iframe",By={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dy(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bl(e,uy):`https://${n.config.authDomain}/${cy}`,s={apiKey:e.apiKey,appName:n.name,v:Js},r=hy.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${ei(s).slice(1)}`}async function fy(n){const e=await ay(n),t=Ut().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:dy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:By,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(n,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},ly.get());function c(){Ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},my=500,gy=600,Cy="_blank",yy="http://localhost";class zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ey(n,e,t,s=my,r=gy){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...py,width:s.toString(),height:r.toString(),top:i,left:o},u=nt().toLowerCase();t&&(a=Qh(u)?Cy:t),Kh(u)&&(e=e||yy,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(tC(u)&&a!=="_self")return _y(e||"",a),new zu(null);const f=window.open(e||"",a,h);re(f,n,"popup-blocked");try{f.focus()}catch{}return new zu(f)}function _y(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="__/auth/handler",vy="emulator/auth/handler",wy=encodeURIComponent("fac");async function Qu(n,e,t,s,r,i){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Js,eventId:r};if(e instanceof Ol){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof si){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${wy}=${encodeURIComponent(c)}`:"";return`${Iy(n)}?${ei(a).slice(1)}${u}`}function Iy({config:n}){return n.emulator?bl(n,vy):`https://${n.authDomain}/${Dy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="webStorageSupport";class Ty{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cd,this._completeRedirectFn=WC,this._overrideRedirectResult=KC}async _openPopup(e,t,s,r){var o;sn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Qu(e,t,s,Za(),r);return Ey(e,i,Nl())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Qu(e,t,s,Za(),r);return SC(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(sn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await fy(e),s=new XC(e);return t.register("authEvent",r=>(re(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oa,{type:Oa},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[Oa];i!==void 0&&t(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ed()||zh()||Pl()}}const by=Ty;var Wu="@firebase/auth",Yu="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Py(n){Ls(new Bs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:td(n)},u=new aC(s,r,i,c);return dC(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ls(new Bs("auth-internal",e=>{const t=Ao(e.getProvider("auth").getImmediate());return(s=>new Ay(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Wu,Yu,Sy(n)),In(Wu,Yu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=300,Oy=Oh("authIdTokenMaxAge")||Ry;let Xu=null;const Ny=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Oy)return;const r=t==null?void 0:t.token;Xu!==r&&(Xu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ky(n=Fh()){const e=Il(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hC(n,{popupRedirectResolver:by,persistence:[MC,TC,cd]}),s=Oh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Ny(i.toString());DC(t,o,()=>o(t.currentUser)),_C(t,a=>o(a))}}const r=Ph("auth");return r&&fC(t,`http://${r}`),t}function xy(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}lC({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Ot("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",xy().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Py("Browser");var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,Cd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,C){function _(){}_.prototype=C.prototype,w.F=C.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(A,I,P){for(var D=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)D[ke-2]=arguments[ke];return C.prototype[I].apply(A,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(w,C,_){_||(_=0);const A=Array(16);if(typeof C=="string")for(var I=0;I<16;++I)A[I]=C.charCodeAt(_++)|C.charCodeAt(_++)<<8|C.charCodeAt(_++)<<16|C.charCodeAt(_++)<<24;else for(I=0;I<16;++I)A[I]=C[_++]|C[_++]<<8|C[_++]<<16|C[_++]<<24;C=w.g[0],_=w.g[1],I=w.g[2];let P=w.g[3],D;D=C+(P^_&(I^P))+A[0]+3614090360&4294967295,C=_+(D<<7&4294967295|D>>>25),D=P+(I^C&(_^I))+A[1]+3905402710&4294967295,P=C+(D<<12&4294967295|D>>>20),D=I+(_^P&(C^_))+A[2]+606105819&4294967295,I=P+(D<<17&4294967295|D>>>15),D=_+(C^I&(P^C))+A[3]+3250441966&4294967295,_=I+(D<<22&4294967295|D>>>10),D=C+(P^_&(I^P))+A[4]+4118548399&4294967295,C=_+(D<<7&4294967295|D>>>25),D=P+(I^C&(_^I))+A[5]+1200080426&4294967295,P=C+(D<<12&4294967295|D>>>20),D=I+(_^P&(C^_))+A[6]+2821735955&4294967295,I=P+(D<<17&4294967295|D>>>15),D=_+(C^I&(P^C))+A[7]+4249261313&4294967295,_=I+(D<<22&4294967295|D>>>10),D=C+(P^_&(I^P))+A[8]+1770035416&4294967295,C=_+(D<<7&4294967295|D>>>25),D=P+(I^C&(_^I))+A[9]+2336552879&4294967295,P=C+(D<<12&4294967295|D>>>20),D=I+(_^P&(C^_))+A[10]+4294925233&4294967295,I=P+(D<<17&4294967295|D>>>15),D=_+(C^I&(P^C))+A[11]+2304563134&4294967295,_=I+(D<<22&4294967295|D>>>10),D=C+(P^_&(I^P))+A[12]+1804603682&4294967295,C=_+(D<<7&4294967295|D>>>25),D=P+(I^C&(_^I))+A[13]+4254626195&4294967295,P=C+(D<<12&4294967295|D>>>20),D=I+(_^P&(C^_))+A[14]+2792965006&4294967295,I=P+(D<<17&4294967295|D>>>15),D=_+(C^I&(P^C))+A[15]+1236535329&4294967295,_=I+(D<<22&4294967295|D>>>10),D=C+(I^P&(_^I))+A[1]+4129170786&4294967295,C=_+(D<<5&4294967295|D>>>27),D=P+(_^I&(C^_))+A[6]+3225465664&4294967295,P=C+(D<<9&4294967295|D>>>23),D=I+(C^_&(P^C))+A[11]+643717713&4294967295,I=P+(D<<14&4294967295|D>>>18),D=_+(P^C&(I^P))+A[0]+3921069994&4294967295,_=I+(D<<20&4294967295|D>>>12),D=C+(I^P&(_^I))+A[5]+3593408605&4294967295,C=_+(D<<5&4294967295|D>>>27),D=P+(_^I&(C^_))+A[10]+38016083&4294967295,P=C+(D<<9&4294967295|D>>>23),D=I+(C^_&(P^C))+A[15]+3634488961&4294967295,I=P+(D<<14&4294967295|D>>>18),D=_+(P^C&(I^P))+A[4]+3889429448&4294967295,_=I+(D<<20&4294967295|D>>>12),D=C+(I^P&(_^I))+A[9]+568446438&4294967295,C=_+(D<<5&4294967295|D>>>27),D=P+(_^I&(C^_))+A[14]+3275163606&4294967295,P=C+(D<<9&4294967295|D>>>23),D=I+(C^_&(P^C))+A[3]+4107603335&4294967295,I=P+(D<<14&4294967295|D>>>18),D=_+(P^C&(I^P))+A[8]+1163531501&4294967295,_=I+(D<<20&4294967295|D>>>12),D=C+(I^P&(_^I))+A[13]+2850285829&4294967295,C=_+(D<<5&4294967295|D>>>27),D=P+(_^I&(C^_))+A[2]+4243563512&4294967295,P=C+(D<<9&4294967295|D>>>23),D=I+(C^_&(P^C))+A[7]+1735328473&4294967295,I=P+(D<<14&4294967295|D>>>18),D=_+(P^C&(I^P))+A[12]+2368359562&4294967295,_=I+(D<<20&4294967295|D>>>12),D=C+(_^I^P)+A[5]+4294588738&4294967295,C=_+(D<<4&4294967295|D>>>28),D=P+(C^_^I)+A[8]+2272392833&4294967295,P=C+(D<<11&4294967295|D>>>21),D=I+(P^C^_)+A[11]+1839030562&4294967295,I=P+(D<<16&4294967295|D>>>16),D=_+(I^P^C)+A[14]+4259657740&4294967295,_=I+(D<<23&4294967295|D>>>9),D=C+(_^I^P)+A[1]+2763975236&4294967295,C=_+(D<<4&4294967295|D>>>28),D=P+(C^_^I)+A[4]+1272893353&4294967295,P=C+(D<<11&4294967295|D>>>21),D=I+(P^C^_)+A[7]+4139469664&4294967295,I=P+(D<<16&4294967295|D>>>16),D=_+(I^P^C)+A[10]+3200236656&4294967295,_=I+(D<<23&4294967295|D>>>9),D=C+(_^I^P)+A[13]+681279174&4294967295,C=_+(D<<4&4294967295|D>>>28),D=P+(C^_^I)+A[0]+3936430074&4294967295,P=C+(D<<11&4294967295|D>>>21),D=I+(P^C^_)+A[3]+3572445317&4294967295,I=P+(D<<16&4294967295|D>>>16),D=_+(I^P^C)+A[6]+76029189&4294967295,_=I+(D<<23&4294967295|D>>>9),D=C+(_^I^P)+A[9]+3654602809&4294967295,C=_+(D<<4&4294967295|D>>>28),D=P+(C^_^I)+A[12]+3873151461&4294967295,P=C+(D<<11&4294967295|D>>>21),D=I+(P^C^_)+A[15]+530742520&4294967295,I=P+(D<<16&4294967295|D>>>16),D=_+(I^P^C)+A[2]+3299628645&4294967295,_=I+(D<<23&4294967295|D>>>9),D=C+(I^(_|~P))+A[0]+4096336452&4294967295,C=_+(D<<6&4294967295|D>>>26),D=P+(_^(C|~I))+A[7]+1126891415&4294967295,P=C+(D<<10&4294967295|D>>>22),D=I+(C^(P|~_))+A[14]+2878612391&4294967295,I=P+(D<<15&4294967295|D>>>17),D=_+(P^(I|~C))+A[5]+4237533241&4294967295,_=I+(D<<21&4294967295|D>>>11),D=C+(I^(_|~P))+A[12]+1700485571&4294967295,C=_+(D<<6&4294967295|D>>>26),D=P+(_^(C|~I))+A[3]+2399980690&4294967295,P=C+(D<<10&4294967295|D>>>22),D=I+(C^(P|~_))+A[10]+4293915773&4294967295,I=P+(D<<15&4294967295|D>>>17),D=_+(P^(I|~C))+A[1]+2240044497&4294967295,_=I+(D<<21&4294967295|D>>>11),D=C+(I^(_|~P))+A[8]+1873313359&4294967295,C=_+(D<<6&4294967295|D>>>26),D=P+(_^(C|~I))+A[15]+4264355552&4294967295,P=C+(D<<10&4294967295|D>>>22),D=I+(C^(P|~_))+A[6]+2734768916&4294967295,I=P+(D<<15&4294967295|D>>>17),D=_+(P^(I|~C))+A[13]+1309151649&4294967295,_=I+(D<<21&4294967295|D>>>11),D=C+(I^(_|~P))+A[4]+4149444226&4294967295,C=_+(D<<6&4294967295|D>>>26),D=P+(_^(C|~I))+A[11]+3174756917&4294967295,P=C+(D<<10&4294967295|D>>>22),D=I+(C^(P|~_))+A[2]+718787259&4294967295,I=P+(D<<15&4294967295|D>>>17),D=_+(P^(I|~C))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+C&4294967295,w.g[1]=w.g[1]+(I+(D<<21&4294967295|D>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+P&4294967295}s.prototype.v=function(w,C){C===void 0&&(C=w.length);const _=C-this.blockSize,A=this.C;let I=this.h,P=0;for(;P<C;){if(I==0)for(;P<=_;)r(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<C;)if(A[I++]=w.charCodeAt(P++),I==this.blockSize){r(this,A),I=0;break}}else for(;P<C;)if(A[I++]=w[P++],I==this.blockSize){r(this,A),I=0;break}}this.h=I,this.o+=C},s.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var C=1;C<w.length-8;++C)w[C]=0;C=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=C&255,C/=256;for(this.v(w),w=Array(16),C=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)w[C++]=this.g[_]>>>A&255;return w};function i(w,C){var _=a;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=C(w)}function o(w,C){this.h=C;const _=[];let A=!0;for(let I=w.length-1;I>=0;I--){const P=w[I]|0;A&&P==C||(_[I]=P,A=!1)}this.g=_}var a={};function c(w){return-128<=w&&w<128?i(w,function(C){return new o([C|0],C<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return f;if(w<0)return F(u(-w));const C=[];let _=1;for(let A=0;w>=_;A++)C[A]=w/_|0,_*=4294967296;return new o(C,0)}function h(w,C){if(w.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(w.charAt(0)=="-")return F(h(w.substring(1),C));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(C,8));let A=f;for(let P=0;P<w.length;P+=8){var I=Math.min(8,w.length-P);const D=parseInt(w.substring(P,P+I),C);I<8?(I=u(Math.pow(C,I)),A=A.j(I).add(u(D))):(A=A.j(_),A=A.add(u(D)))}return A}var f=c(0),p=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(O(this))return-F(this).m();let w=0,C=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);w+=(A>=0?A:4294967296+A)*C,C*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(v(this))return"0";if(O(this))return"-"+F(this).toString(w);const C=u(Math.pow(w,6));var _=this;let A="";for(;;){const I=le(_,C).g;_=S(_,I.j(C));let P=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=I,v(_))return P+A;for(;P.length<6;)P="0"+P;A=P+A}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function v(w){if(w.h!=0)return!1;for(let C=0;C<w.g.length;C++)if(w.g[C]!=0)return!1;return!0}function O(w){return w.h==-1}n.l=function(w){return w=S(this,w),O(w)?-1:v(w)?0:1};function F(w){const C=w.g.length,_=[];for(let A=0;A<C;A++)_[A]=~w.g[A];return new o(_,~w.h).add(p)}n.abs=function(){return O(this)?F(this):this},n.add=function(w){const C=Math.max(this.g.length,w.g.length),_=[];let A=0;for(let I=0;I<=C;I++){let P=A+(this.i(I)&65535)+(w.i(I)&65535),D=(P>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);A=D>>>16,P&=65535,D&=65535,_[I]=D<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function S(w,C){return w.add(F(C))}n.j=function(w){if(v(this)||v(w))return f;if(O(this))return O(w)?F(this).j(F(w)):F(F(this).j(w));if(O(w))return F(this.j(F(w)));if(this.l(g)<0&&w.l(g)<0)return u(this.m()*w.m());const C=this.g.length+w.g.length,_=[];for(var A=0;A<2*C;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let I=0;I<w.g.length;I++){const P=this.i(A)>>>16,D=this.i(A)&65535,ke=w.i(I)>>>16,lt=w.i(I)&65535;_[2*A+2*I]+=D*lt,G(_,2*A+2*I),_[2*A+2*I+1]+=P*lt,G(_,2*A+2*I+1),_[2*A+2*I+1]+=D*ke,G(_,2*A+2*I+1),_[2*A+2*I+2]+=P*ke,G(_,2*A+2*I+2)}for(w=0;w<C;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=C;w<2*C;w++)_[w]=0;return new o(_,0)};function G(w,C){for(;(w[C]&65535)!=w[C];)w[C+1]+=w[C]>>>16,w[C]&=65535,C++}function Z(w,C){this.g=w,this.h=C}function le(w,C){if(v(C))throw Error("division by zero");if(v(w))return new Z(f,f);if(O(w))return C=le(F(w),C),new Z(F(C.g),F(C.h));if(O(C))return C=le(w,F(C)),new Z(F(C.g),C.h);if(w.g.length>30){if(O(w)||O(C))throw Error("slowDivide_ only works with positive integers.");for(var _=p,A=C;A.l(w)<=0;)_=ae(_),A=ae(A);var I=ne(_,1),P=ne(A,1);for(A=ne(A,2),_=ne(_,2);!v(A);){var D=P.add(A);D.l(w)<=0&&(I=I.add(_),P=D),A=ne(A,1),_=ne(_,1)}return C=S(w,I.j(C)),new Z(I,C)}for(I=f;w.l(C)>=0;){for(_=Math.max(1,Math.floor(w.m()/C.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),P=u(_),D=P.j(C);O(D)||D.l(w)>0;)_-=A,P=u(_),D=P.j(C);v(P)&&(P=p),I=I.add(P),w=S(w,D)}return new Z(I,w)}n.B=function(w){return le(this,w).h},n.and=function(w){const C=Math.max(this.g.length,w.g.length),_=[];for(let A=0;A<C;A++)_[A]=this.i(A)&w.i(A);return new o(_,this.h&w.h)},n.or=function(w){const C=Math.max(this.g.length,w.g.length),_=[];for(let A=0;A<C;A++)_[A]=this.i(A)|w.i(A);return new o(_,this.h|w.h)},n.xor=function(w){const C=Math.max(this.g.length,w.g.length),_=[];for(let A=0;A<C;A++)_[A]=this.i(A)^w.i(A);return new o(_,this.h^w.h)};function ae(w){const C=w.g.length+1,_=[];for(let A=0;A<C;A++)_[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(_,w.h)}function ne(w,C){const _=C>>5;C%=32;const A=w.g.length-_,I=[];for(let P=0;P<A;P++)I[P]=C>0?w.i(P+_)>>>C|w.i(P+_+1)<<32-C:w.i(P+_);return new o(I,w.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Cd=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Tn=o}).apply(typeof Zu<"u"?Zu:typeof self<"u"?self:typeof window<"u"?window:{});var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yd,_r,Ed,Wi,tl,_d,Dd,vd;(function(){var n,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var B=0;B<l.length;++B){var d=l[B];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(l,B){if(B)e:{var d=s;l=l.split(".");for(var m=0;m<l.length-1;m++){var R=l[m];if(!(R in d))break e;d=d[R]}l=l[l.length-1],m=d[l],B=B(m),B!=m&&B!=null&&e(d,l,{configurable:!0,writable:!0,value:B})}}r("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(l){return l||function(B){var d=[],m;for(m in B)Object.prototype.hasOwnProperty.call(B,m)&&d.push([m,B[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var B=typeof l;return B=="object"&&l!=null||B=="function"}function c(l,B,d){return l.call.apply(l.bind,arguments)}function u(l,B,d){return u=c,u.apply(null,arguments)}function h(l,B){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),l.apply(this,m)}}function f(l,B){function d(){}d.prototype=B.prototype,l.Z=B.prototype,l.prototype=new d,l.prototype.constructor=l,l.Ob=function(m,R,N){for(var J=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)J[ce-2]=arguments[ce];return B.prototype[R].apply(m,J)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function g(l){const B=l.length;if(B>0){const d=Array(B);for(let m=0;m<B;m++)d[m]=l[m];return d}return[]}function v(l,B){for(let m=1;m<arguments.length;m++){const R=arguments[m];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=l.length||0;const N=R.length||0;l.length=d+N;for(let J=0;J<N;J++)l[d+J]=R[J]}else l.push(R)}}class O{constructor(B,d){this.i=B,this.j=d,this.h=0,this.g=null}get(){let B;return this.h>0?(this.h--,B=this.g,this.g=B.next,B.next=null):B=this.i(),B}}function F(l){o.setTimeout(()=>{throw l},0)}function S(){var l=w;let B=null;return l.g&&(B=l.g,l.g=l.g.next,l.g||(l.h=null),B.next=null),B}class G{constructor(){this.h=this.g=null}add(B,d){const m=Z.get();m.set(B,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Z=new O(()=>new le,l=>l.reset());class le{constructor(){this.next=this.g=this.h=null}set(B,d){this.h=B,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ne=!1,w=new G,C=()=>{const l=Promise.resolve(void 0);ae=()=>{l.then(_)}};function _(){for(var l;l=S();){try{l.h.call(l.g)}catch(d){F(d)}var B=Z;B.j(l),B.h<100&&(B.h++,l.next=B.g,B.g=l)}ne=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(l,B){this.type=l,this.g=this.target=B,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,B=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};o.addEventListener("test",d,B),o.removeEventListener("test",d,B)}catch{}return l})();function D(l){return/^[\s\xa0]*$/.test(l)}function ke(l,B){I.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,B)}f(ke,I),ke.prototype.init=function(l,B){const d=this.type=l.type,m=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=B,B=l.relatedTarget,B||(d=="mouseover"?B=l.fromElement:d=="mouseout"&&(B=l.toElement)),this.relatedTarget=B,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&ke.Z.h.call(this)},ke.prototype.h=function(){ke.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var lt="closure_listenable_"+(Math.random()*1e6|0),$n=0;function gi(l,B,d,m,R){this.listener=l,this.proxy=null,this.src=B,this.type=d,this.capture=!!m,this.ha=R,this.key=++$n,this.da=this.fa=!1}function qn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Jn(l,B,d){for(const m in l)B.call(d,l[m],m,l)}function Ci(l,B){for(const d in l)B.call(void 0,l[d],d,l)}function tr(l){const B={};for(const d in l)B[d]=l[d];return B}const nr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bc(l,B){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)l[d]=m[d];for(let N=0;N<nr.length;N++)d=nr[N],Object.prototype.hasOwnProperty.call(m,d)&&(l[d]=m[d])}}function yi(l){this.src=l,this.g={},this.h=0}yi.prototype.add=function(l,B,d,m,R){const N=l.toString();l=this.g[N],l||(l=this.g[N]=[],this.h++);const J=na(l,B,m,R);return J>-1?(B=l[J],d||(B.fa=!1)):(B=new gi(B,this.src,N,!!m,R),B.fa=d,l.push(B)),B};function ta(l,B){const d=B.type;if(d in l.g){var m=l.g[d],R=Array.prototype.indexOf.call(m,B,void 0),N;(N=R>=0)&&Array.prototype.splice.call(m,R,1),N&&(qn(B),l.g[d].length==0&&(delete l.g[d],l.h--))}}function na(l,B,d,m){for(let R=0;R<l.length;++R){const N=l[R];if(!N.da&&N.listener==B&&N.capture==!!d&&N.ha==m)return R}return-1}var sa="closure_lm_"+(Math.random()*1e6|0),ra={};function Ac(l,B,d,m,R){if(Array.isArray(B)){for(let N=0;N<B.length;N++)Ac(l,B[N],d,m,R);return null}return d=Rc(d),l&&l[lt]?l.J(B,d,a(m)?!!m.capture:!1,R):wp(l,B,d,!1,m,R)}function wp(l,B,d,m,R,N){if(!B)throw Error("Invalid event type");const J=a(R)?!!R.capture:!!R;let ce=oa(l);if(ce||(l[sa]=ce=new yi(l)),d=ce.add(B,d,m,J,N),d.proxy)return d;if(m=Ip(),d.proxy=m,m.src=l,m.listener=d,l.addEventListener)P||(R=J),R===void 0&&(R=!1),l.addEventListener(B.toString(),m,R);else if(l.attachEvent)l.attachEvent(Pc(B.toString()),m);else if(l.addListener&&l.removeListener)l.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ip(){function l(d){return B.call(l.src,l.listener,d)}const B=Tp;return l}function Sc(l,B,d,m,R){if(Array.isArray(B))for(var N=0;N<B.length;N++)Sc(l,B[N],d,m,R);else m=a(m)?!!m.capture:!!m,d=Rc(d),l&&l[lt]?(l=l.i,N=String(B).toString(),N in l.g&&(B=l.g[N],d=na(B,d,m,R),d>-1&&(qn(B[d]),Array.prototype.splice.call(B,d,1),B.length==0&&(delete l.g[N],l.h--)))):l&&(l=oa(l))&&(B=l.g[B.toString()],l=-1,B&&(l=na(B,d,m,R)),(d=l>-1?B[l]:null)&&ia(d))}function ia(l){if(typeof l!="number"&&l&&!l.da){var B=l.src;if(B&&B[lt])ta(B.i,l);else{var d=l.type,m=l.proxy;B.removeEventListener?B.removeEventListener(d,m,l.capture):B.detachEvent?B.detachEvent(Pc(d),m):B.addListener&&B.removeListener&&B.removeListener(m),(d=oa(B))?(ta(d,l),d.h==0&&(d.src=null,B[sa]=null)):qn(l)}}}function Pc(l){return l in ra?ra[l]:ra[l]="on"+l}function Tp(l,B){if(l.da)l=!0;else{B=new ke(B,this);const d=l.listener,m=l.ha||l.src;l.fa&&ia(l),l=d.call(m,B)}return l}function oa(l){return l=l[sa],l instanceof yi?l:null}var aa="__closure_events_fn_"+(Math.random()*1e9>>>0);function Rc(l){return typeof l=="function"?l:(l[aa]||(l[aa]=function(B){return l.handleEvent(B)}),l[aa])}function Xe(){A.call(this),this.i=new yi(this),this.M=this,this.G=null}f(Xe,A),Xe.prototype[lt]=!0,Xe.prototype.removeEventListener=function(l,B,d,m){Sc(this,l,B,d,m)};function rt(l,B){var d,m=l.G;if(m)for(d=[];m;m=m.G)d.push(m);if(l=l.M,m=B.type||B,typeof B=="string")B=new I(B,l);else if(B instanceof I)B.target=B.target||l;else{var R=B;B=new I(m,l),bc(B,R)}R=!0;let N,J;if(d)for(J=d.length-1;J>=0;J--)N=B.g=d[J],R=Ei(N,m,!0,B)&&R;if(N=B.g=l,R=Ei(N,m,!0,B)&&R,R=Ei(N,m,!1,B)&&R,d)for(J=0;J<d.length;J++)N=B.g=d[J],R=Ei(N,m,!1,B)&&R}Xe.prototype.N=function(){if(Xe.Z.N.call(this),this.i){var l=this.i;for(const B in l.g){const d=l.g[B];for(let m=0;m<d.length;m++)qn(d[m]);delete l.g[B],l.h--}}this.G=null},Xe.prototype.J=function(l,B,d,m){return this.i.add(String(l),B,!1,d,m)},Xe.prototype.K=function(l,B,d,m){return this.i.add(String(l),B,!0,d,m)};function Ei(l,B,d,m){if(B=l.i.g[String(B)],!B)return!0;B=B.concat();let R=!0;for(let N=0;N<B.length;++N){const J=B[N];if(J&&!J.da&&J.capture==d){const ce=J.listener,$e=J.ha||J.src;J.fa&&ta(l.i,J),R=ce.call($e,m)!==!1&&R}}return R&&!m.defaultPrevented}function bp(l,B){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=u(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(B)>2147483647?-1:o.setTimeout(l,B||0)}function Oc(l){l.g=bp(()=>{l.g=null,l.i&&(l.i=!1,Oc(l))},l.l);const B=l.h;l.h=null,l.m.apply(null,B)}class Ap extends A{constructor(B,d){super(),this.m=B,this.l=d,this.h=null,this.i=!1,this.g=null}j(B){this.h=arguments,this.g?this.i=!0:Oc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sr(l){A.call(this),this.h=l,this.g={}}f(sr,A);var Nc=[];function kc(l){Jn(l.g,function(B,d){this.g.hasOwnProperty(d)&&ia(B)},l),l.g={}}sr.prototype.N=function(){sr.Z.N.call(this),kc(this)},sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var la=o.JSON.stringify,Sp=o.JSON.parse,Pp=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function xc(){}function Lc(){}var rr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ca(){I.call(this,"d")}f(ca,I);function ua(){I.call(this,"c")}f(ua,I);var jn={},Fc=null;function _i(){return Fc=Fc||new Xe}jn.Ia="serverreachability";function Mc(l){I.call(this,jn.Ia,l)}f(Mc,I);function ir(l){const B=_i();rt(B,new Mc(B))}jn.STAT_EVENT="statevent";function Vc(l,B){I.call(this,jn.STAT_EVENT,l),this.stat=B}f(Vc,I);function it(l){const B=_i();rt(B,new Vc(B,l))}jn.Ja="timingevent";function Uc(l,B){I.call(this,jn.Ja,l),this.size=B}f(Uc,I);function or(l,B){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},B)}function ar(){this.g=!0}ar.prototype.ua=function(){this.g=!1};function Rp(l,B,d,m,R,N){l.info(function(){if(l.g)if(N){var J="",ce=N.split("&");for(let ye=0;ye<ce.length;ye++){var $e=ce[ye].split("=");if($e.length>1){const je=$e[0];$e=$e[1];const Lt=je.split("_");J=Lt.length>=2&&Lt[1]=="type"?J+(je+"="+$e+"&"):J+(je+"=redacted&")}}}else J=null;else J=N;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+B+`
`+d+`
`+J})}function Op(l,B,d,m,R,N,J){l.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+B+`
`+d+`
`+N+" "+J})}function Es(l,B,d,m){l.info(function(){return"XMLHTTP TEXT ("+B+"): "+kp(l,d)+(m?" "+m:"")})}function Np(l,B){l.info(function(){return"TIMEOUT: "+B})}ar.prototype.info=function(){};function kp(l,B){if(!l.g)return B;if(!B)return null;try{const N=JSON.parse(B);if(N){for(l=0;l<N.length;l++)if(Array.isArray(N[l])){var d=N[l];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let J=1;J<m.length;J++)m[J]=""}}}}return la(N)}catch{return B}}var Di={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hc;function Ba(){}f(Ba,xc),Ba.prototype.g=function(){return new XMLHttpRequest},Hc=new Ba;function lr(l){return encodeURIComponent(String(l))}function xp(l){var B=1;l=l.split(":");const d=[];for(;B>0&&l.length;)d.push(l.shift()),B--;return l.length&&d.push(l.join(":")),d}function ln(l,B,d,m){this.j=l,this.i=B,this.l=d,this.S=m||1,this.V=new sr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var qc={},ha={};function da(l,B,d){l.M=1,l.A=wi(xt(B)),l.u=d,l.R=!0,Jc(l,null)}function Jc(l,B){l.F=Date.now(),vi(l),l.B=xt(l.A);var d=l.B,m=l.S;Array.isArray(m)||(m=[String(m)]),ru(d.i,"t",m),l.C=0,d=l.j.L,l.h=new $c,l.g=Du(l.j,d?B:null,!l.u),l.P>0&&(l.O=new Ap(u(l.Y,l,l.g),l.P)),B=l.V,d=l.g,m=l.ba;var R="readystatechange";Array.isArray(R)||(R&&(Nc[0]=R.toString()),R=Nc);for(let N=0;N<R.length;N++){const J=Ac(d,R[N],m||B.handleEvent,!1,B.h||B);if(!J)break;B.g[J.key]=J}B=l.J?tr(l.J):{},l.u?(l.v||(l.v="POST"),B["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,B)):(l.v="GET",l.g.ea(l.B,l.v,null,B)),ir(),Rp(l.i,l.v,l.B,l.l,l.S,l.u)}ln.prototype.ba=function(l){l=l.target;const B=this.O;B&&Bn(l)==3?B.j():this.Y(l)},ln.prototype.Y=function(l){try{if(l==this.g)e:{const ce=Bn(this.g),$e=this.g.ya(),ye=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||Bu(this.g)))){this.K||ce!=4||$e==7||($e==8||ye<=0?ir(3):ir(2)),fa(this);var B=this.g.ca();this.X=B;var d=Lp(this);if(this.o=B==200,Op(this.i,this.v,this.B,this.l,this.S,ce,B),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(m)){var N=m;break t}}N=null}if(l=N)Es(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pa(this,l);else{this.o=!1,this.m=3,it(12),Kn(this),cr(this);break e}}if(this.R){l=!0;let je;for(;!this.K&&this.C<d.length;)if(je=Fp(this,d),je==ha){ce==4&&(this.m=4,it(14),l=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(je==qc){this.m=4,it(15),Es(this.i,this.l,d,"[Invalid Chunk]"),l=!1;break}else Es(this.i,this.l,je,null),pa(this,je);if(jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||d.length!=0||this.h.h||(this.m=1,it(16),l=!1),this.o=this.o&&l,!l)Es(this.i,this.l,d,"[Invalid Chunked Response]"),Kn(this),cr(this);else if(d.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),va(J),J.P=!0,it(11))}}else Es(this.i,this.l,d,null),pa(this,d);ce==4&&Kn(this),this.o&&!this.K&&(ce==4?Cu(this.j,this):(this.o=!1,vi(this)))}else Yp(this.g),B==400&&d.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Kn(this),cr(this)}}}catch{}finally{}};function Lp(l){if(!jc(l))return l.g.la();const B=Bu(l.g);if(B==="")return"";let d="";const m=B.length,R=Bn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return Kn(l),cr(l),"";l.h.i=new o.TextDecoder}for(let N=0;N<m;N++)l.h.h=!0,d+=l.h.i.decode(B[N],{stream:!(R&&N==m-1)});return B.length=0,l.h.g+=d,l.C=0,l.h.g}function jc(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Fp(l,B){var d=l.C,m=B.indexOf(`
`,d);return m==-1?ha:(d=Number(B.substring(d,m)),isNaN(d)?qc:(m+=1,m+d>B.length?ha:(B=B.slice(m,m+d),l.C=m+d,B)))}ln.prototype.cancel=function(){this.K=!0,Kn(this)};function vi(l){l.T=Date.now()+l.H,Kc(l,l.H)}function Kc(l,B){if(l.D!=null)throw Error("WatchDog timer not null");l.D=or(u(l.aa,l),B)}function fa(l){l.D&&(o.clearTimeout(l.D),l.D=null)}ln.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(Np(this.i,this.B),this.M!=2&&(ir(),it(17)),Kn(this),this.m=2,cr(this)):Kc(this,this.T-l)};function cr(l){l.j.I==0||l.K||Cu(l.j,l)}function Kn(l){fa(l);var B=l.O;B&&typeof B.dispose=="function"&&B.dispose(),l.O=null,kc(l.V),l.g&&(B=l.g,l.g=null,B.abort(),B.dispose())}function pa(l,B){try{var d=l.j;if(d.I!=0&&(d.g==l||ma(d.h,l))){if(!l.L&&ma(d.h,l)&&d.I==3){try{var m=d.Ba.g.parse(B)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<l.F)Si(d),bi(d);else break e;Da(d),it(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=or(u(d.Va,d),6e3));Wc(d.h)<=1&&d.ta&&(d.ta=void 0)}else Qn(d,11)}else if((l.L||d.g==l)&&Si(d),!D(B))for(R=d.Ba.g.parse(B),B=0;B<R.length;B++){let ye=R[B];const je=ye[0];if(!(je<=d.K))if(d.K=je,ye=ye[1],d.I==2)if(ye[0]=="c"){d.M=ye[1],d.ba=ye[2];const Lt=ye[3];Lt!=null&&(d.ka=Lt,d.j.info("VER="+d.ka));const Wn=ye[4];Wn!=null&&(d.za=Wn,d.j.info("SVER="+d.za));const hn=ye[5];hn!=null&&typeof hn=="number"&&hn>0&&(m=1.5*hn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const dn=l.g;if(dn){const Ri=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var N=m.h;N.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ga(N,N.h),N.h=null))}if(m.G){const wa=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;wa&&(m.wa=wa,we(m.J,m.G,wa))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-l.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var J=l;if(m.na=_u(m,m.L?m.ba:null,m.W),J.L){Yc(m.h,J);var ce=J,$e=m.O;$e&&(ce.H=$e),ce.D&&(fa(ce),vi(ce)),m.g=J}else mu(m);d.i.length>0&&Ai(d)}else ye[0]!="stop"&&ye[0]!="close"||Qn(d,7);else d.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Qn(d,7):_a(d):ye[0]!="noop"&&d.l&&d.l.qa(ye),d.A=0)}}ir(4)}catch{}}var Mp=class{constructor(l,B){this.g=l,this.map=B}};function zc(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qc(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Wc(l){return l.h?1:l.g?l.g.size:0}function ma(l,B){return l.h?l.h==B:l.g?l.g.has(B):!1}function ga(l,B){l.g?l.g.add(B):l.h=B}function Yc(l,B){l.h&&l.h==B?l.h=null:l.g&&l.g.has(B)&&l.g.delete(B)}zc.prototype.cancel=function(){if(this.i=Xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xc(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let B=l.i;for(const d of l.g.values())B=B.concat(d.G);return B}return g(l.i)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vp(l,B){if(l){l=l.split("&");for(let d=0;d<l.length;d++){const m=l[d].indexOf("=");let R,N=null;m>=0?(R=l[d].substring(0,m),N=l[d].substring(m+1)):R=l[d],B(R,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function cn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let B;l instanceof cn?(this.l=l.l,ur(this,l.j),this.o=l.o,this.g=l.g,Br(this,l.u),this.h=l.h,Ca(this,iu(l.i)),this.m=l.m):l&&(B=String(l).match(Zc))?(this.l=!1,ur(this,B[1]||"",!0),this.o=hr(B[2]||""),this.g=hr(B[3]||"",!0),Br(this,B[4]),this.h=hr(B[5]||"",!0),Ca(this,B[6]||"",!0),this.m=hr(B[7]||"")):(this.l=!1,this.i=new fr(null,this.l))}cn.prototype.toString=function(){const l=[];var B=this.j;B&&l.push(dr(B,eu,!0),":");var d=this.g;return(d||B=="file")&&(l.push("//"),(B=this.o)&&l.push(dr(B,eu,!0),"@"),l.push(lr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&l.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(dr(d,d.charAt(0)=="/"?Hp:Gp,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",dr(d,qp)),l.join("")},cn.prototype.resolve=function(l){const B=xt(this);let d=!!l.j;d?ur(B,l.j):d=!!l.o,d?B.o=l.o:d=!!l.g,d?B.g=l.g:d=l.u!=null;var m=l.h;if(d)Br(B,l.u);else if(d=!!l.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=B.h.lastIndexOf("/");R!=-1&&(m=B.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const N=[];for(let J=0;J<R.length;){const ce=R[J++];ce=="."?m&&J==R.length&&N.push(""):ce==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&J==R.length&&N.push("")):(N.push(ce),m=!0)}m=N.join("/")}else m=R}return d?B.h=m:d=l.i.toString()!=="",d?Ca(B,iu(l.i)):d=!!l.m,d&&(B.m=l.m),B};function xt(l){return new cn(l)}function ur(l,B,d){l.j=d?hr(B,!0):B,l.j&&(l.j=l.j.replace(/:$/,""))}function Br(l,B){if(B){if(B=Number(B),isNaN(B)||B<0)throw Error("Bad port number "+B);l.u=B}else l.u=null}function Ca(l,B,d){B instanceof fr?(l.i=B,Jp(l.i,l.l)):(d||(B=dr(B,$p)),l.i=new fr(B,l.l))}function we(l,B,d){l.i.set(B,d)}function wi(l){return we(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function hr(l,B){return l?B?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function dr(l,B,d){return typeof l=="string"?(l=encodeURI(l).replace(B,Up),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Up(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var eu=/[#\/\?@]/g,Gp=/[#\?:]/g,Hp=/[#\?]/g,$p=/[#\?@]/g,qp=/#/g;function fr(l,B){this.h=this.g=null,this.i=l||null,this.j=!!B}function zn(l){l.g||(l.g=new Map,l.h=0,l.i&&Vp(l.i,function(B,d){l.add(decodeURIComponent(B.replace(/\+/g," ")),d)}))}n=fr.prototype,n.add=function(l,B){zn(this),this.i=null,l=_s(this,l);let d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(B),this.h+=1,this};function tu(l,B){zn(l),B=_s(l,B),l.g.has(B)&&(l.i=null,l.h-=l.g.get(B).length,l.g.delete(B))}function nu(l,B){return zn(l),B=_s(l,B),l.g.has(B)}n.forEach=function(l,B){zn(this),this.g.forEach(function(d,m){d.forEach(function(R){l.call(B,R,m,this)},this)},this)};function su(l,B){zn(l);let d=[];if(typeof B=="string")nu(l,B)&&(d=d.concat(l.g.get(_s(l,B))));else for(l=Array.from(l.g.values()),B=0;B<l.length;B++)d=d.concat(l[B]);return d}n.set=function(l,B){return zn(this),this.i=null,l=_s(this,l),nu(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[B]),this.h+=1,this},n.get=function(l,B){return l?(l=su(this,l),l.length>0?String(l[0]):B):B};function ru(l,B,d){tu(l,B),d.length>0&&(l.i=null,l.g.set(_s(l,B),g(d)),l.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],B=Array.from(this.g.keys());for(let m=0;m<B.length;m++){var d=B[m];const R=lr(d);d=su(this,d);for(let N=0;N<d.length;N++){let J=R;d[N]!==""&&(J+="="+lr(d[N])),l.push(J)}}return this.i=l.join("&")};function iu(l){const B=new fr;return B.i=l.i,l.g&&(B.g=new Map(l.g),B.h=l.h),B}function _s(l,B){return B=String(B),l.j&&(B=B.toLowerCase()),B}function Jp(l,B){B&&!l.j&&(zn(l),l.i=null,l.g.forEach(function(d,m){const R=m.toLowerCase();m!=R&&(tu(this,m),ru(this,R,d))},l)),l.j=B}function jp(l,B){const d=new ar;if(o.Image){const m=new Image;m.onload=h(un,d,"TestLoadImage: loaded",!0,B,m),m.onerror=h(un,d,"TestLoadImage: error",!1,B,m),m.onabort=h(un,d,"TestLoadImage: abort",!1,B,m),m.ontimeout=h(un,d,"TestLoadImage: timeout",!1,B,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=l}else B(!1)}function Kp(l,B){const d=new ar,m=new AbortController,R=setTimeout(()=>{m.abort(),un(d,"TestPingServer: timeout",!1,B)},1e4);fetch(l,{signal:m.signal}).then(N=>{clearTimeout(R),N.ok?un(d,"TestPingServer: ok",!0,B):un(d,"TestPingServer: server error",!1,B)}).catch(()=>{clearTimeout(R),un(d,"TestPingServer: error",!1,B)})}function un(l,B,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function zp(){this.g=new Pp}function ya(l){this.i=l.Sb||null,this.h=l.ab||!1}f(ya,xc),ya.prototype.g=function(){return new Ii(this.i,this.h)};function Ii(l,B){Xe.call(this),this.H=l,this.o=B,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Ii,Xe),n=Ii.prototype,n.open=function(l,B){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=B,this.readyState=1,mr(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const B={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(B.body=l),(this.H||o).fetch(new Request(this.D,B)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pr(this)),this.readyState=0},n.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,mr(this)),this.g&&(this.readyState=3,mr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ou(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function ou(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}n.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var B=l.value?l.value:new Uint8Array(0);(B=this.B.decode(B,{stream:!l.done}))&&(this.response=this.responseText+=B)}l.done?pr(this):mr(this),this.readyState==3&&ou(this)}},n.Oa=function(l){this.g&&(this.response=this.responseText=l,pr(this))},n.Na=function(l){this.g&&(this.response=l,pr(this))},n.ga=function(){this.g&&pr(this)};function pr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,mr(l)}n.setRequestHeader=function(l,B){this.A.append(l,B)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],B=this.h.entries();for(var d=B.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=B.next();return l.join(`\r
`)};function mr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function au(l){let B="";return Jn(l,function(d,m){B+=m,B+=":",B+=d,B+=`\r
`}),B}function Ea(l,B,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=au(d),typeof l=="string"?d!=null&&lr(d):we(l,B,d))}function Re(l){Xe.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Re,Xe);var Qp=/^https?$/i,Wp=["POST","PUT"];n=Re.prototype,n.Fa=function(l){this.H=l},n.ea=function(l,B,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);B=B?B.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hc.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(B,String(l),!0),this.B=!1}catch(N){lu(this,N);return}if(l=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),R=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(Wp,B,void 0)>=0)||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,J]of d)this.g.setRequestHeader(N,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(N){lu(this,N)}};function lu(l,B){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=B,l.o=5,cu(l),Ti(l)}function cu(l){l.A||(l.A=!0,rt(l,"complete"),rt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,rt(this,"complete"),rt(this,"abort"),Ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),Re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?uu(this):this.Xa())},n.Xa=function(){uu(this)};function uu(l){if(l.h&&typeof i<"u"){if(l.v&&Bn(l)==4)setTimeout(l.Ca.bind(l),0);else if(rt(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const N=l.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var B=!0;break e;default:B=!1}var d;if(!(d=B)){var m;if(m=N===0){let J=String(l.D).match(Zc)[1]||null;!J&&o.self&&o.self.location&&(J=o.self.location.protocol.slice(0,-1)),m=!Qp.test(J?J.toLowerCase():"")}d=m}if(d)rt(l,"complete"),rt(l,"success");else{l.o=6;try{var R=Bn(l)>2?l.g.statusText:""}catch{R=""}l.l=R+" ["+l.ca()+"]",cu(l)}}finally{Ti(l)}}}}function Ti(l,B){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const d=l.g;l.g=null,B||rt(l,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}n.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(l){if(this.g){var B=this.g.responseText;return l&&B.indexOf(l)==0&&(B=B.substring(l.length)),Sp(B)}};function Bu(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Yp(l){const B={};l=(l.g&&Bn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<l.length;m++){if(D(l[m]))continue;var d=xp(l[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=B[R]||[];B[R]=N,N.push(d)}Ci(B,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gr(l,B,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||B}function hu(l){this.za=0,this.i=[],this.j=new ar,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gr("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gr("baseRetryDelayMs",5e3,l),this.Za=gr("retryDelaySeedMs",1e4,l),this.Ta=gr("forwardChannelMaxRetries",2,l),this.va=gr("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new zc(l&&l.concurrentRequestLimit),this.Ba=new zp,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=hu.prototype,n.ka=8,n.I=1,n.connect=function(l,B,d,m){it(0),this.W=l,this.H=B||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=_u(this,null,this.W),Ai(this)};function _a(l){if(du(l),l.I==3){var B=l.V++,d=xt(l.J);if(we(d,"SID",l.M),we(d,"RID",B),we(d,"TYPE","terminate"),Cr(l,d),B=new ln(l,l.j,B),B.M=2,B.A=wi(xt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(B.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=B.A,d=!0),d||(B.g=Du(B.j,null),B.g.ea(B.A)),B.F=Date.now(),vi(B)}Eu(l)}function bi(l){l.g&&(va(l),l.g.cancel(),l.g=null)}function du(l){bi(l),l.v&&(o.clearTimeout(l.v),l.v=null),Si(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Ai(l){if(!Qc(l.h)&&!l.m){l.m=!0;var B=l.Ea;ae||C(),ne||(ae(),ne=!0),w.add(B,l),l.D=0}}function Xp(l,B){return Wc(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=B.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=or(u(l.Ea,l,B),yu(l,l.D)),l.D++,!0)}n.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const R=new ln(this,this.j,l);let N=this.o;if(this.U&&(N?(N=tr(N),bc(N,this.U)):N=this.U),this.u!==null||this.R||(R.J=N,N=null),this.S)e:{for(var B=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(B+=m,B>4096){B=d;break e}if(B===4096||d===this.i.length-1){B=d+1;break e}}B=1e3}else B=1e3;B=pu(this,R,B),d=xt(this.J),we(d,"RID",l),we(d,"CVER",22),this.G&&we(d,"X-HTTP-Session-Id",this.G),Cr(this,d),N&&(this.R?B="headers="+lr(au(N))+"&"+B:this.u&&Ea(d,this.u,N)),ga(this.h,R),this.Ra&&we(d,"TYPE","init"),this.S?(we(d,"$req",B),we(d,"SID","null"),R.U=!0,da(R,d,null)):da(R,d,B),this.I=2}}else this.I==3&&(l?fu(this,l):this.i.length==0||Qc(this.h)||fu(this))};function fu(l,B){var d;B?d=B.l:d=l.V++;const m=xt(l.J);we(m,"SID",l.M),we(m,"RID",d),we(m,"AID",l.K),Cr(l,m),l.u&&l.o&&Ea(m,l.u,l.o),d=new ln(l,l.j,d,l.D+1),l.u===null&&(d.J=l.o),B&&(l.i=B.G.concat(l.i)),B=pu(l,d,1e3),d.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),ga(l.h,d),da(d,m,B)}function Cr(l,B){l.H&&Jn(l.H,function(d,m){we(B,m,d)}),l.l&&Jn({},function(d,m){we(B,m,d)})}function pu(l,B,d){d=Math.min(l.i.length,d);const m=l.l?u(l.l.Ka,l.l,l):null;e:{var R=l.i;let ce=-1;for(;;){const $e=["count="+d];ce==-1?d>0?(ce=R[0].g,$e.push("ofs="+ce)):ce=0:$e.push("ofs="+ce);let ye=!0;for(let je=0;je<d;je++){var N=R[je].g;const Lt=R[je].map;if(N-=ce,N<0)ce=Math.max(0,R[je].g-100),ye=!1;else try{N="req"+N+"_"||"";try{var J=Lt instanceof Map?Lt:Object.entries(Lt);for(const[Wn,hn]of J){let dn=hn;a(hn)&&(dn=la(hn)),$e.push(N+Wn+"="+encodeURIComponent(dn))}}catch(Wn){throw $e.push(N+"type="+encodeURIComponent("_badmap")),Wn}}catch{m&&m(Lt)}}if(ye){J=$e.join("&");break e}}J=void 0}return l=l.i.splice(0,d),B.G=l,J}function mu(l){if(!l.g&&!l.v){l.Y=1;var B=l.Da;ae||C(),ne||(ae(),ne=!0),w.add(B,l),l.A=0}}function Da(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=or(u(l.Da,l),yu(l,l.A)),l.A++,!0)}n.Da=function(){if(this.v=null,gu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=or(u(this.Wa,this),l)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),bi(this),gu(this))};function va(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function gu(l){l.g=new ln(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var B=xt(l.na);we(B,"RID","rpc"),we(B,"SID",l.M),we(B,"AID",l.K),we(B,"CI",l.F?"0":"1"),!l.F&&l.ia&&we(B,"TO",l.ia),we(B,"TYPE","xmlhttp"),Cr(l,B),l.u&&l.o&&Ea(B,l.u,l.o),l.O&&(l.g.H=l.O);var d=l.g;l=l.ba,d.M=1,d.A=wi(xt(B)),d.u=null,d.R=!0,Jc(d,l)}n.Va=function(){this.C!=null&&(this.C=null,bi(this),Da(this),it(19))};function Si(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Cu(l,B){var d=null;if(l.g==B){Si(l),va(l),l.g=null;var m=2}else if(ma(l.h,B))d=B.G,Yc(l.h,B),m=1;else return;if(l.I!=0){if(B.o)if(m==1){d=B.u?B.u.length:0,B=Date.now()-B.F;var R=l.D;m=_i(),rt(m,new Uc(m,d)),Ai(l)}else mu(l);else if(R=B.m,R==3||R==0&&B.X>0||!(m==1&&Xp(l,B)||m==2&&Da(l)))switch(d&&d.length>0&&(B=l.h,B.i=B.i.concat(d)),R){case 1:Qn(l,5);break;case 4:Qn(l,10);break;case 3:Qn(l,6);break;default:Qn(l,2)}}}function yu(l,B){let d=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(d*=2),d*B}function Qn(l,B){if(l.j.info("Error code "+B),B==2){var d=u(l.bb,l),m=l.Ua;const R=!m;m=new cn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ur(m,"https"),wi(m),R?jp(m.toString(),d):Kp(m.toString(),d)}else it(2);l.I=0,l.l&&l.l.pa(B),Eu(l),du(l)}n.bb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Eu(l){if(l.I=0,l.ja=[],l.l){const B=Xc(l.h);(B.length!=0||l.i.length!=0)&&(v(l.ja,B),v(l.ja,l.i),l.h.i.length=0,g(l.i),l.i.length=0),l.l.oa()}}function _u(l,B,d){var m=d instanceof cn?xt(d):new cn(d);if(m.g!="")B&&(m.g=B+"."+m.g),Br(m,m.u);else{var R=o.location;m=R.protocol,B=B?B+"."+R.hostname:R.hostname,R=+R.port;const N=new cn(null);m&&ur(N,m),B&&(N.g=B),R&&Br(N,R),d&&(N.h=d),m=N}return d=l.G,B=l.wa,d&&B&&we(m,d,B),we(m,"VER",l.ka),Cr(l,m),m}function Du(l,B,d){if(B&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return B=l.Aa&&!l.ma?new Re(new ya({ab:d})):new Re(l.ma),B.Fa(l.L),B}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function vu(){}n=vu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Pi(){}Pi.prototype.g=function(l,B){return new yt(l,B)};function yt(l,B){Xe.call(this),this.g=new hu(B),this.l=l,this.h=B&&B.messageUrlParams||null,l=B&&B.messageHeaders||null,B&&B.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=B&&B.initMessageHeaders||null,B&&B.messageContentType&&(l?l["X-WebChannel-Content-Type"]=B.messageContentType:l={"X-WebChannel-Content-Type":B.messageContentType}),B&&B.sa&&(l?l["X-WebChannel-Client-Profile"]=B.sa:l={"X-WebChannel-Client-Profile":B.sa}),this.g.U=l,(l=B&&B.Qb)&&!D(l)&&(this.g.u=l),this.A=B&&B.supportsCrossDomainXhr||!1,this.v=B&&B.sendRawJson||!1,(B=B&&B.httpSessionIdParam)&&!D(B)&&(this.g.G=B,l=this.h,l!==null&&B in l&&(l=this.h,B in l&&delete l[B])),this.j=new Ds(this)}f(yt,Xe),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){_a(this.g)},yt.prototype.o=function(l){var B=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.v&&(d={},d.__data__=la(l),l=d);B.i.push(new Mp(B.Ya++,l)),B.I==3&&Ai(B)},yt.prototype.N=function(){this.g.l=null,delete this.j,_a(this.g),delete this.g,yt.Z.N.call(this)};function wu(l){ca.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var B=l.__sm__;if(B){e:{for(const d in B){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,B=B!==null&&l in B?B[l]:void 0),this.data=B}else this.data=l}f(wu,ca);function Iu(){ua.call(this),this.status=1}f(Iu,ua);function Ds(l){this.g=l}f(Ds,vu),Ds.prototype.ra=function(){rt(this.g,"a")},Ds.prototype.qa=function(l){rt(this.g,new wu(l))},Ds.prototype.pa=function(l){rt(this.g,new Iu)},Ds.prototype.oa=function(){rt(this.g,"b")},Pi.prototype.createWebChannel=Pi.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,vd=function(){return new Pi},Dd=function(){return _i()},_d=jn,tl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Di.NO_ERROR=0,Di.TIMEOUT=8,Di.HTTP_ERROR=6,Wi=Di,Gc.COMPLETE="complete",Ed=Gc,Lc.EventType=rr,rr.OPEN="a",rr.CLOSE="b",rr.ERROR="c",rr.MESSAGE="d",Xe.prototype.listen=Xe.prototype.J,_r=Lc,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,yd=Re}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var Ee,U=(Ee=class{},H(Ee,"FOLD_CASE",1),H(Ee,"LITERAL",2),H(Ee,"CLASS_NL",4),H(Ee,"DOT_NL",8),H(Ee,"ONE_LINE",16),H(Ee,"NON_GREEDY",32),H(Ee,"PERL_X",64),H(Ee,"UNICODE_GROUPS",128),H(Ee,"WAS_DOLLAR",256),H(Ee,"LOOKBEHIND",512),H(Ee,"MATCH_NL",Ee.CLASS_NL|Ee.DOT_NL),H(Ee,"PERL",Ee.CLASS_NL|Ee.ONE_LINE|Ee.PERL_X|Ee.UNICODE_GROUPS),H(Ee,"POSIX",0),H(Ee,"UNANCHORED",0),H(Ee,"ANCHOR_START",1),H(Ee,"ANCHOR_BOTH",2),Ee);const vs={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Lr=128,nl=new Int32Array(Lr),sl=new Int32Array(Lr),ki=65535;for(let n=0;n<Lr;n++)n>=97&&n<=122?nl[n]=n-32:nl[n]=n,n>=65&&n<=90?sl[n]=n+32:sl[n]=n;var Ka,k=(Ka=class{static toUpperCase(n){if(n<Lr)return nl[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>ki?2:1;if(e.length>t)return n;const s=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=s.codePointAt(0)>ki?2:1;return s.length>r||s.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<Lr)return sl[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>ki?2:1;if(e.length>t)return n;const s=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=s.codePointAt(0)>ki?2:1;return s.length>r||s.codePointAt(0)!==n?n:e.codePointAt(0)}},H(Ka,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),Ka),y=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const wd=new Uint8Array(256);for(let n=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";n<64;n++)wd[e.charCodeAt(n)]=n;const Id=n=>{const e=[];let t=0,s=0;for(let r=0;r<n.length;r++){let i=wd[n.charCodeAt(r)];t|=(i&31)<<s,(i&32)===0?(e.push(t),t=0,s=0):s+=5}return e},E=(n,e)=>{const t=Id(n),s=e?t.length/2:t.length/3,r=new Uint32Array(s*3);let i=0,o=0;for(let a=0;a<s;a++)i+=t[o++],r[a*3]=i,i+=t[o++],r[a*3+1]=i,r[a*3+2]=e?1:t[o++];return r},Ly=n=>{const e=Id(n),t=new Map;let s=0;for(let r=0;r<e.length;r+=2){s+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(s,s+o)}return t};var xi=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return n in this.initializer}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.initializer[n],t=e?e():null;return this.cache.set(n,t),t}},gn,Bt=(gn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=Ly("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new y(E("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},H(gn,"_CASE_ORBIT",null),H(gn,"_Print",null),H(gn,"CATEGORIES",new xi({C:()=>new y(E("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new y(E("AfgDgB",!0)),Cf:()=>new y(E("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new y(E("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new y(E("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new y(E("gg2B--B",!0)),L:()=>new y(E("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new y(E("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new y(E("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new y(E("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new y(E("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new y(E("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new y(E("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new y(E("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new y(E("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new y(E("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new y(E("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new y(E("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new y(E("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new y(E("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new y(E("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new y(E("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new y(E("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new y(E("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new y(E("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new y(E("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new y(E("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new y(E("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new y(E("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new y(E("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new y(E("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new y(E("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new y(E("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new y(E("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new y(E("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new y(E("ohIA",!0)),Zp:()=>new y(E("phIA",!0)),Zs:()=>new y(E("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new y(E("wBJIFbF",!0)),Alphabetic:()=>new y(E("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new y(E("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new y(E("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new y(E("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new y(E("7-8DE",!0)),Emoji_Modifier_Base:()=>new y(E("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new y(E("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new y(E("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new y(E("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new y(E("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new y(E("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new y(E("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new y(E("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new y(E("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new y(E("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),H(gn,"SCRIPTS",new xi({Adlam:()=>new y(E("go6DrCFJFB",!0)),Ahom:()=>new y(E("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new y(E("ggxCmS",!0)),Arabic:()=>new y(E("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new y(E("xpBlBDxBDCks9BE",!0)),Avestan:()=>new y(E("g4iC1BEG",!0)),Balinese:()=>new y(E("g4GsCCxB",!0)),Bamum:()=>new y(E("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new y(E("w26CdDF",!0)),Batak:()=>new y(E("g+GzBJD",!0)),Bengali:()=>new y(E("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new y(E("g17CYDY",!0)),Bhaiksuki:()=>new y(E("ggnCICsBCNLc",!0)),Bopomofo:()=>new y(E("qXB6wLqBxDf",!0)),Brahmi:()=>new y(E("ggkCtCFjBKA",!0)),Braille:()=>new y(E("ggK-H",!0)),Buginese:()=>new y(E("gwGbDB",!0)),Buhid:()=>new y(E("g6FT",!0)),Canadian_Aboriginal:()=>new y(E("ggF-TxRlC7tgCP",!0)),Carian:()=>new y(E("g1gCwB",!0)),Caucasian_Albanian:()=>new y(E("wphCzBMA",!0)),Chakma:()=>new y(E("gokC0BCR",!0)),Cham:()=>new y(E("gwqB2BKNDJDD",!0)),Cherokee:()=>new y(E("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new y(E("w9jCb",!0)),Common:()=>new y(E("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new y(E("ifNxkKzDGG",!0)),Cuneiform:()=>new y(E("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new y(E("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new y(E("w8rCiD",!0)),Cyrillic:()=>new y(E("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new y(E("gghCvC",!0)),Devanagari:()=>new y(E("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new y(E("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new y(E("ggmC7B",!0)),Duployan:()=>new y(E("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new y(E("ggsC1iBL68D",!0)),Elbasan:()=>new y(E("gohCnB",!0)),Elymaic:()=>new y(E("g-jCW",!0)),Ethiopic:()=>new y(E("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new y(E("gqjClBEcJB",!0)),Georgian:()=>new y(E("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new y(E("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new y(E("w5gCa",!0)),Grantha:()=>new y(E("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new y(E("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new y(E("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new y(E("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new y(E("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new y(E("go4C5B",!0)),Han:()=>new y(E("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new y(E("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new y(E("gojCnBJJ",!0)),Hanunoo:()=>new y(E("g5FU",!0)),Hatran:()=>new y(E("gniCSCBGE",!0)),Hebrew:()=>new y(E("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new y(E("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new y(E("giiCVCI",!0)),Inherited:()=>new y(E("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new y(E("g7iCSGH",!0)),Inscriptional_Parthian:()=>new y(E("g6iCVDH",!0)),Javanese:()=>new y(E("gsqBtCDJFB",!0)),Kaithi:()=>new y(E("gkkCiCLA",!0)),Kannada:()=>new y(E("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new y(E("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new y(E("g4nCQCoBEc",!0)),Kayah_Li:()=>new y(E("goqBtBCA",!0)),Kharoshthi:()=>new y(E("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new y(E("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new y(E("g8F9CDJHJnPf",!0)),Khojki:()=>new y(E("gwkCRCuB",!0)),Khudawadi:()=>new y(E("w1kC6BGJ",!0)),Kirat_Rai:()=>new y(E("gq7C5B",!0)),Lao:()=>new y(E("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new y(E("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new y(E("ggH3BEOEC",!0)),Limbu:()=>new y(E("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new y(E("gwhC2JKVLH",!0)),Linear_B:()=>new y(E("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new y(E("wmpBvBx1eA",!0)),Lycian:()=>new y(E("g0gCc",!0)),Lydian:()=>new y(E("gpiCZGA",!0)),Mahajani:()=>new y(E("wqkCmB",!0)),Makasar:()=>new y(E("g3nCY",!0)),Malayalam:()=>new y(E("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new y(E("giCbDA",!0)),Manichaean:()=>new y(E("g2iCmBFL",!0)),Marchen:()=>new y(E("wjnCfDVCN",!0)),Masaram_Gondi:()=>new y(E("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new y(E("gy7C6C",!0)),Meetei_Mayek:()=>new y(E("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new y(E("gg6DkGDP",!0)),Meroitic_Cursive:()=>new y(E("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new y(E("gsiCf",!0)),Miao:()=>new y(E("g47CqCF4BIQ",!0)),Modi:()=>new y(E("gwlCkCMJ",!0)),Mongolian:()=>new y(E("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new y(E("gy6CeCJFB",!0)),Multani:()=>new y(E("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new y(E("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new y(E("gkiCeJI",!0)),Nag_Mundari:()=>new y(E("wm5DpB",!0)),Nandinagari:()=>new y(E("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new y(E("gsGrBFZHKEB",!0)),Newa:()=>new y(E("gglC7CCE",!0)),Nko:()=>new y(E("g+B6BDC",!0)),Nushu:()=>new y(E("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new y(E("go4DsBENDJFB",!0)),Ogham:()=>new y(E("g0Fc",!0)),Ol_Chiki:()=>new y(E("wiHvB",!0)),Ol_Onal:()=>new y(E("wu5DqBFA",!0)),Old_Hungarian:()=>new y(E("gkjCyBOyBIF",!0)),Old_Italic:()=>new y(E("g4gCjBKC",!0)),Old_North_Arabian:()=>new y(E("g0iCf",!0)),Old_Permic:()=>new y(E("w6gCqB",!0)),Old_Persian:()=>new y(E("g9gCjBFN",!0)),Old_Sogdian:()=>new y(E("g4jCnB",!0)),Old_South_Arabian:()=>new y(E("gziCf",!0)),Old_Turkic:()=>new y(E("ggjCoC",!0)),Old_Uyghur:()=>new y(E("w7jCZ",!0)),Oriya:()=>new y(E("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new y(E("wlhCjBFjB",!0)),Osmanya:()=>new y(E("gkhCdDJ",!0)),Pahawh_Hmong:()=>new y(E("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new y(E("gjiCf",!0)),Pau_Cin_Hau:()=>new y(E("g2mC4B",!0)),Phags_Pa:()=>new y(E("giqB3B",!0)),Phoenician:()=>new y(E("goiCbEA",!0)),Psalter_Pahlavi:()=>new y(E("g8iCRIDNG",!0)),Rejang:()=>new y(E("wpqBjBMA",!0)),Runic:()=>new y(E("g1FqCEK",!0)),Samaritan:()=>new y(E("ggCtBDO",!0)),Saurashtra:()=>new y(E("gkqBlCJL",!0)),Sharada:()=>new y(E("gskC-ChsCH",!0)),Shavian:()=>new y(E("wihCvB",!0)),Siddham:()=>new y(E("gslC1BDlB",!0)),Sidetic:()=>new y(E("gqiCZ",!0)),SignWriting:()=>new y(E("gg2DrUQECO",!0)),Sinhala:()=>new y(E("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new y(E("w5jCpB",!0)),Sora_Sompeng:()=>new y(E("wmkCYIJ",!0)),Soyombo:()=>new y(E("wymCyC",!0)),Sundanese:()=>new y(E("g8G-BhIH",!0)),Sunuwar:()=>new y(E("g+mChBPJ",!0)),Syloti_Nagri:()=>new y(E("ggqBsB",!0)),Syriac:()=>new y(E("g4BNC7BDCxIK",!0)),Tagalog:()=>new y(E("g4FVKA",!0)),Tagbanwa:()=>new y(E("g7FMCCCB",!0)),Tai_Le:()=>new y(E("wqGdDE",!0)),Tai_Tham:()=>new y(E("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new y(E("g0qBiCZE",!0)),Tai_Yo:()=>new y(E("g25DeCVJB",!0)),Takri:()=>new y(E("g0lC5BHJ",!0)),Tamil:()=>new y(E("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new y(E("wz6CuCCJ",!0)),Tangut:()=>new y(E("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new y(E("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new y(E("g8BxB",!0)),Thai:()=>new y(E("hwD5BGb",!0)),Tibetan:()=>new y(E("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new y(E("wpL3BIBPA",!0)),Tirhuta:()=>new y(E("gklCnCJJ",!0)),Todhri:()=>new y(E("guhCzB",!0)),Tolong_Siki:()=>new y(E("wtnCrBFJ",!0)),Toto:()=>new y(E("w04De",!0)),Tulu_Tigalari:()=>new y(E("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new y(E("g8gCdCA",!0)),Unknown:()=>new y(E("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new y(E("gopBrJ",!0)),Vithkuqi:()=>new y(E("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new y(E("g24D5BGA",!0)),Warang_Citi:()=>new y(E("glmCyCNA",!0)),Yezidi:()=>new y(E("g0jCpBCCDB",!0)),Yi:()=>new y(E("ggoBskBE2B",!0)),Zanabazar_Square:()=>new y(E("gwmCnC",!0))})),H(gn,"FOLD_CATEGORIES",new xi({L:()=>new y(E("laA",!0)),LC:()=>new y(E("laA",!0)),Ll:()=>new y(E("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new y(E("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new y(E("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new y(E("5cgBgBlgHAB",!1)),Mn:()=>new y(E("5cgBgBlgHAB",!1)),Emoji:()=>new y(E("8mJA",!0)),Extended_Pictographic:()=>new y(E("8mJA",!0)),Lowercase:()=>new y(E("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new y(E("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new y(E("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),H(gn,"FOLD_SCRIPT",new xi({Common:()=>new y(E("8cgBgB",!1)),Greek:()=>new y(E("1FwUwU",!1)),Inherited:()=>new y(E("5cgBgBlgHAB",!1))})),gn),_e,z=(_e=class{static is32(e,t){let s=0,r=e.length;for(;s<r;){const i=s+Math.floor((r-s)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const c=e.getStride(i);return(t-o)%c===0}t<o?r=i:s=i+1}return!1}static is(e,t){if(t<=_e.MAX_LATIN1){for(let s=0;s<e.length;s++){if(t>e.getHi(s))continue;const r=e.getLo(s);if(t<r)return!1;const i=e.getStride(s);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&_e.is32(e,t)}static isUpper(e){if(e<=_e.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return _e.is(Bt.Upper,e)}static isPrint(e){return e<=_e.MAX_LATIN1?e>=32&&e<_e.MAX_ASCII||e>=161&&e!==173:_e.is(Bt.Print,e)}static simpleFold(e){if(Bt.CASE_ORBIT.has(e))return Bt.CASE_ORBIT.get(e);const t=k.toLowerCase(e);return t!==e?t:k.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=_e.MAX_ASCII&&t<=_e.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let s=_e.simpleFold(e);s!==e;s=_e.simpleFold(s))if(s===t)return!0;return!1}},H(_e,"MAX_RUNE",1114111),H(_e,"MAX_ASCII",127),H(_e,"MAX_LATIN1",255),H(_e,"MAX_BMP",65535),H(_e,"MIN_FOLD",65),H(_e,"MAX_FOLD",125251),H(_e,"MIN_HIGH_SURROGATE",55296),H(_e,"MAX_HIGH_SURROGATE",56319),H(_e,"MIN_LOW_SURROGATE",56320),H(_e,"MAX_LOW_SURROGATE",57343),H(_e,"MIN_SUPPLEMENTARY_CODE_POINT",65536),_e);const xl=256,Td=new Uint8Array(xl);for(let n=0;n<xl;n++)Td[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let Na=null,ka=null;var Te,W=(Te=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")||k.CODES.get("a")<=e&&e<=k.CODES.get("z")||k.CODES.get("A")<=e&&e<=k.CODES.get("Z")}static unhex(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")?e-k.CODES.get("0"):k.CODES.get("a")<=e&&e<=k.CODES.get("f")?e-k.CODES.get("a")+10:k.CODES.get("A")<=e&&e<=k.CODES.get("F")?e-k.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(z.isPrint(e))Te.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case k.CODES.get('"'):t+='\\"';break;case k.CODES.get("\\"):t+="\\\\";break;case k.CODES.get("	"):t+="\\t";break;case k.CODES.get(`
`):t+="\\n";break;case k.CODES.get("\r"):t+="\\r";break;case k.CODES.get("\b"):t+="\\b";break;case k.CODES.get("\f"):t+="\\f";break;default:{let s=e.toString(16);e<256?(t+="\\x",s.length===1&&(t+="0"),t+=s):t+=`\\x{${s}}`;break}}return t}static stringToRunes(e){const t=String(e),s=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);s.push(i),r+=i>z.MAX_BMP?2:1}return s}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<xl?Td[e]===1:!1}static emptyOpContext(e,t){let s=0;return e<0&&(s|=Te.EMPTY_BEGIN_TEXT|Te.EMPTY_BEGIN_LINE),e===10&&(s|=Te.EMPTY_BEGIN_LINE),t<0&&(s|=Te.EMPTY_END_TEXT|Te.EMPTY_END_LINE),t===10&&(s|=Te.EMPTY_END_LINE),Te.isWordRune(e)!==Te.isWordRune(t)?s|=Te.EMPTY_WORD_BOUNDARY:s|=Te.EMPTY_NO_WORD_BOUNDARY,s}static quoteMeta(e){return e.split("").map(t=>Te.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>z.MAX_BMP?2:1}static toArray(e){const t=e.length,s=new Array(t);for(let r=0;r<t;r++)s[r]=e[r];return s}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Na||(Na=new TextEncoder),Na.encode(e);{let t=[],s=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[s++]=i:i<2048?(t[s++]=i>>6|192,t[s++]=i&63|128):(i&64512)===z.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===z.MIN_LOW_SURROGATE?(i=z.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[s++]=i>>18|240,t[s++]=i>>12&63|128,t[s++]=i>>6&63|128,t[s++]=i&63|128):(t[s++]=i>>12|224,t[s++]=i>>6&63|128,t[s++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){ka||(ka=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return ka.decode(t)}else{let t=[],s=0,r=0;for(;s<e.length;){let i=e[s++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[s++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[s++],a=e[s++],c=e[s++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-z.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(z.MIN_HIGH_SURROGATE+(u>>10)),t[r++]=String.fromCharCode(z.MIN_LOW_SURROGATE+(u&1023))}else{let o=e[s++],a=e[s++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}},H(Te,"METACHARACTERS","\\.+*?()|[]{}^$"),H(Te,"EMPTY_BEGIN_LINE",1),H(Te,"EMPTY_END_LINE",2),H(Te,"EMPTY_BEGIN_TEXT",4),H(Te,"EMPTY_END_TEXT",8),H(Te,"EMPTY_WORD_BOUNDARY",16),H(Te,"EMPTY_NO_WORD_BOUNDARY",32),H(Te,"EMPTY_ALL",-1),Te);const bd=(n=[],e=0)=>{const t=Object.create(null);for(let s=0;s<n.length;s++){const r=n[s],i=e+s;t[r]=i,t[i]=r}return Object.freeze(t)};var vn,ds=(vn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===vn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===vn.Encoding.UTF_16}},H(vn,"Encoding",bd(["UTF_16","UTF_8"])),vn),eB=class extends ds{constructor(n=null){super(),this.bytes=n}getEncoding(){return ds.Encoding.UTF_8}asCharSequence(){return W.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},Fy=class extends ds{constructor(n=null){super(),this.charSequence=n}getEncoding(){return ds.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return W.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},ns=class{static utf16(n){return new Fy(n)}static utf8(n){return W.isByteArray(n)?new eB(n):new eB(W.stringToUtf8ByteArray(n))}},at=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},My=class extends at{constructor(n,e=0,t=n.length){super(),this.bytes=n,this.start=e,this.end=t}hasString(n,e){const t=n.bytes;if(t.length===0)return!0;const s=this.indexOf(this.bytes,t,this.start+e);return s!==-1&&s<=this.end-t.length}hasAnyString(n,e){return n.ac8?n.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return at.EOF();const e=this.bytes[n]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&n+1<this.end){const t=this.bytes[n+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&n+2<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const s=this.bytes[n+2]&255;return(s&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|s&63)<<3|3}else if(e>=240&&e<=244&&n+3<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const s=this.bytes[n+2]&255;if((s&192)!==128)return e<<3|1;const r=this.bytes[n+3]&255;return(r&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(s&63)<<6|r&63)<<3|4}else return e<<3|1}index(n,e){e+=this.start;const t=this.indexOf(this.bytes,n.prefixUTF8,e);return t<0?t:t-e}context(n){n+=this.start;let e=-1;if(n>this.start&&n<=this.end){let s=n-1;if(e=this.bytes[s--],e>=128){let r=n-4;for(r<this.start&&(r=this.start);s>=r&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),e=this.step(s-this.start)>>3}}const t=n<this.end?this.step(n-this.start)>>3:-1;return W.emptyOpContext(e,t)}indexOf(n,e,t=0){let s=e.length;if(s===0)return t<=this.end?t:-1;const r=e[0];let i=this.end-s;const o=typeof n.indexOf=="function";let a=t;for(;a<=i;){if(o){if(a=n.indexOf(r,a),a===-1||a>i)return-1}else{for(;a<=i&&n[a]!==r;)a++;if(a>i)return-1}let c=!0;for(let u=1;u<s;u++)if(n[a+u]!==e[u]){c=!1;break}if(c)return a;a++}return-1}prefixLength(n){return n.prefixUTF8.length}},Vy=class extends at{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.ac16?n.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return at.EOF();const e=this.charSequence.charCodeAt(n);if(e<z.MIN_HIGH_SURROGATE||e>z.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=z.MIN_LOW_SURROGATE&&t<=z.MAX_LOW_SURROGATE?(e-z.MIN_HIGH_SURROGATE)*1024+(t-z.MIN_LOW_SURROGATE)+z.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return W.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},Ie=class{static fromUTF8(n,e=0,t=n.length){return new My(n,e,t)}static fromUTF16(n,e=0,t=n.length){return new Vy(n,e,t)}},ii=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},De=class extends ii{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},Uy=class extends ii{constructor(n){super(n),this.name="RE2JSCompileException"}},ct=class extends ii{constructor(n){super(n),this.name="RE2JSGroupException"}},Gy=class extends ii{constructor(n){super(n),this.name="RE2JSFlagsException"}},Tr=class extends ii{constructor(n){super(n),this.name="RE2JSInternalException"}},rs,tB=(rs=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(s=>{const r=s.codePointAt(0);return r===k.CODES.get("\\")||r===k.CODES.get("$")?`\\${s}`:s}).join(""):e.indexOf("$")<0?e:e.split("").map(s=>s.codePointAt(0)===k.CODES.get("$")?"$$":s).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const s=this.patternInput.re2();this.patternGroupCount=s.numberOfCapturingGroups(),this.groups=[],this.namedGroups=s.namedGroups,this.numberOfInstructions=s.numberOfInstructions(),t instanceof ds?this.resetMatcherInput(t):W.isByteArray(t)?this.resetMatcherInput(ns.utf8(t)):this.resetMatcherInput(ns.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof ds||(W.isByteArray(e)?e=ns.utf8(e):e=ns.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ct(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ct(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new ct(`group '${e}' not found`);e=r}const t=this.start(e),s=this.end(e);return t<0&&s<0?null:this.substring(t,s)}getNamedGroups(){if(!this.hasMatch)throw new ct("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new ct(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new ct("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,s=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!s[0])throw new ct("inconsistency in matching group data");this.groups=s[1],this.hasGroups=!0}matches(){return this.genMatch(0,U.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,U.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new ct(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Ie.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Ie.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,U.UNANCHORED)}genMatch(e,t){const s=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return s[0]?(this.groups=s[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?W.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let s="";const r=this.start(),i=this.end();return this.appendPos<r&&(s+=this.substring(this.appendPos,r)),this.appendPos=i,s+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),s}appendReplacementInternalJava(e){let t="",s=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===k.CODES.get("\\")){if(s<i&&(t+=e.substring(s,i)),i++,i>=r)throw new ct("character to be escaped is missing");s=i,i++;continue}if(o===k.CODES.get("$")){if(s<i&&(t+=e.substring(s,i)),i+1>=r)throw new ct("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(k.CODES.get("0")<=a&&a<=k.CODES.get("9")){let c=a-k.CODES.get("0"),u=i+2;for(;u<r;u++){const f=e.codePointAt(u);if(f<k.CODES.get("0")||f>k.CODES.get("9")||c*10+f-k.CODES.get("0")>this.patternGroupCount)break;c=c*10+f-k.CODES.get("0")}if(c>this.patternGroupCount)throw new ct(`n > number of groups: ${c}`);const h=this.group(c);h!==null&&(t+=h),i=u,s=i}else if(a===k.CODES.get("{")){let c=i+2;for(;c<r&&e.codePointAt(c)!==k.CODES.get("}");)c++;if(c>=r)throw new ct("named capture group is missing trailing '}'");const u=e.substring(i+2,c),h=this.group(u);h!==null&&(t+=h),i=c+1,s=i}else throw new ct("Illegal group reference");continue}i++}return s<r&&(t+=e.substring(s,r)),t}appendReplacementInternalJs(e){let t="",s=0;const r=e.length;for(let i=0;i<r-1;i++)if(e.codePointAt(i)===k.CODES.get("$")){let o=e.codePointAt(i+1);if(k.CODES.get("$")===o){s<i&&(t+=e.substring(s,i)),t+="$",i++,s=i+1;continue}else if(k.CODES.get("&")===o){s<i&&(t+=e.substring(s,i));const a=this.group(0);a!==null?t+=a:t+="$&",i++,s=i+1;continue}else if(k.CODES.get("`")===o){s<i&&(t+=e.substring(s,i)),t+=this.substring(0,this.start(0)),i++,s=i+1;continue}else if(k.CODES.get("'")===o){s<i&&(t+=e.substring(s,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,s=i+1;continue}else if(k.CODES.get("1")<=o&&o<=k.CODES.get("9")){let a=o-k.CODES.get("0");for(s<i&&(t+=e.substring(s,i)),i+=2;i<r&&(o=e.codePointAt(i),!(o<k.CODES.get("0")||o>k.CODES.get("9")||a*10+o-k.CODES.get("0")>this.patternGroupCount));i++)a=a*10+o-k.CODES.get("0");if(a>this.patternGroupCount){t+=`$${a}`,s=i,i--;continue}const c=this.group(a);c!==null&&(t+=c),s=i,i--;continue}else if(o===k.CODES.get("<")){s<i&&(t+=e.substring(s,i)),i++;let a=i+1;for(;a<e.length&&e.codePointAt(a)!==k.CODES.get(">")&&e.codePointAt(a)!==k.CODES.get(" ");)a++;if(a===e.length||e.codePointAt(a)!==k.CODES.get(">")){t+=e.substring(i-1,a+1),s=a+1,i=a;continue}const c=e.substring(i+1,a);if(Object.prototype.hasOwnProperty.call(this.namedGroups,c)){const u=this.group(c);u!==null&&(t+=u)}else t+=`$<${c}>`;s=a+1,i=a;continue}}return s<r&&(t+=e.substring(s,r)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,s=!1){let r="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let a=null;if(i){if(this.groupCount()>=rs.MAX_REPLACER_ARGS)throw new ct("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o,a):this.appendReplacement(e,s),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t,s){let r="";const i=this.start(),o=this.end();this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=o;const a=this.buildReplacerArgs(i,t,s);return r+=String(e(...a)),r}buildReplacerArgs(e,t,s){const r=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const a=this.start(o);a<0?r.push(void 0):r.push(this.substring(a,this.end(o)))}if(r.push(e),r.push(s),t){const o=this.getNamedGroups();for(const a in o)o[a]===null&&(o[a]=void 0);r.push(o)}return r}},H(rs,"MAX_REPLACER_ARGS",65535),rs),de,x=(de=class{static isRuneOp(e){return de.RUNE<=e&&e<=de.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let s of e)t+=W.escapeRune(s);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&U.FOLD_CASE)!==0?z.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let s=0,r=t>>1;for(;r>1;){const o=r>>1;s+=this.runes[s+o<<1]<=e?o:0,r-=o}s+=this.runes[s<<1]<=e?1:0;const i=s-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&U.FOLD_CASE)!==0?z.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let s=0,r=t>>1;for(;r>1;){const o=r>>1;s+=this.runes[s+o<<1]<=e?o:0,r-=o}s+=this.runes[s<<1]<=e?1:0;const i=s-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case de.ALT:return`alt -> ${this.out}, ${this.arg}`;case de.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case de.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case de.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case de.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case de.FAIL:return"fail";case de.NOP:return`nop -> ${this.out}`;case de.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case de.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case de.RUNE:return this.runes===null?"rune <null>":["rune ",de.escapeRunes(this.runes),(this.arg&U.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case de.RUNE1:return`rune1 ${de.escapeRunes(this.runes)} -> ${this.out}`;case de.RUNE_ANY:return`any -> ${this.out}`;case de.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},H(de,"ALT",1),H(de,"ALT_MATCH",2),H(de,"CAPTURE",3),H(de,"EMPTY_WIDTH",4),H(de,"FAIL",5),H(de,"MATCH",6),H(de,"NOP",7),H(de,"RUNE",8),H(de,"RUNE1",9),H(de,"RUNE_ANY",10),H(de,"RUNE_ANY_NOT_NL",11),H(de,"LB_WRITE",12),H(de,"LB_CHECK",13),de),nB=class{constructor(n){this.sparse=new Int32Array(n),this.densePcs=new Int32Array(n),this.denseCaps=null,this.size=0,this.ncap=0}init(n){this.ncap=n;const e=this.densePcs.length*n;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(n){const e=this.sparse[n];return e<this.size&&this.densePcs[e]===n}isEmpty(){return this.size===0}add(n){const e=this.size++;return this.sparse[n]=e,this.densePcs[e]=n,e}clear(){this.size=0}toString(){let n="{";for(let e=0;e<this.size;e++)e!==0&&(n+=", "),n+=this.densePcs[e];return n+="}",n}},Hy=class rl{static fromRE2(e){const t=new rl;return t.prog=e.prog,t.re2=e,t.q0=new nB(t.prog.numInst()),t.q1=new nB(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return rl.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?W.emptyInts():W.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,s){const r=this.re2.cond;if(r===W.EMPTY_ALL||(s===U.ANCHOR_START||s===U.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,a=this.q0,c=this.q1,u=e.step(i),h=u>>3,f=u&7,p=-1,g=0;u!==at.EOF()&&(u=e.step(i+f),p=u>>3,g=u&7);let v;for(i===0?v=W.emptyOpContext(-1,h):v=e.context(i);;){if(a.isEmpty()){if((r&W.EMPTY_BEGIN_TEXT)!==0&&i!==0||(s===U.ANCHOR_START||s===U.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const S=e.index(this.re2,i);if(S<0)break;i+=S,u=e.step(i),h=u>>3,f=u&7,u=e.step(i+f),p=u>>3,g=u&7,v=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let S=0;S<this.prog.lbStarts.length;S++)this.add(a,this.prog.lbStarts[S],i,this.matchcap,0,v);!this.matched&&(i===0||s===U.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(a,this.prog.start,i,this.matchcap,0,v));const O=i+f;if(v=e.context(O),this.step(a,c,i,O,h,v,s,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,h=p,f=g,h!==-1&&(u=e.step(i+f),p=u>>3,g=u&7);const F=a;a=c,c=F}return c.clear(),this.matched}matchSet(e,t,s){const r=this.re2.cond;if(r===W.EMPTY_ALL)return[];if((s===U.ANCHOR_START||s===U.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,c=this.q1,u=e.step(i),h=u>>3,f=u&7,p=-1,g=0;u!==at.EOF()&&(u=e.step(i+f),p=u>>3,g=u&7);let v=i===0?W.emptyOpContext(-1,h):e.context(i);const O=new Set;for(;!(a.isEmpty()&&((r&W.EMPTY_BEGIN_TEXT)!==0&&i!==0||(s===U.ANCHOR_START||s===U.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let G=0;G<this.prog.lbStarts.length;G++)this.add(a,this.prog.lbStarts[G],i,this.matchcap,0,v);(i===0||s===U.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,v);const F=i+f;v=e.context(F);for(let G=0;G<a.size;G++){const Z=a.densePcs[G],le=this.prog.inst[Z],ae=G*this.ncap;let ne=!1;switch(le.op){case x.MATCH:if(s===U.ANCHOR_BOTH&&i!==e.endPos())break;O.add(le.arg);break;case x.RUNE:ne=le.matchRune(h);break;case x.RUNE1:ne=h===le.runes[0];break;case x.RUNE_ANY:ne=!0;break;case x.RUNE_ANY_NOT_NL:ne=h!==10;break;default:continue}ne&&this.add(c,le.out,F,a.denseCaps,ae,v)}if(a.clear(),f===0)break;i+=f,h=p,f=g,h!==-1&&(u=e.step(i+f),p=u>>3,g=u&7);const S=a;a=c,c=S}return c.clear(),Array.from(O).sort((F,S)=>F-S)}step(e,t,s,r,i,o,a,c){const u=this.re2.longest;for(let h=0;h<e.size;h++){const f=e.densePcs[h],p=h*this.ncap;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const g=this.prog.inst[f];let v=!1;switch(g.op){case x.MATCH:if(a===U.ANCHOR_BOTH&&!c)break;if(this.ncap>0&&(!u||!this.matched||this.matchcap[1]<s)){e.denseCaps[p+1]=s;for(let O=0;O<this.ncap;O++)this.matchcap[O]=e.denseCaps[p+O]}u||(e.size=0),this.matched=!0;break;case x.RUNE:v=g.matchRune(i);break;case x.RUNE1:v=i===g.runes[0];break;case x.RUNE_ANY:v=!0;break;case x.RUNE_ANY_NOT_NL:v=i!==10;break;default:continue}v&&this.add(t,g.out,r,e.denseCaps,p,o)}e.clear()}add(e,t,s,r,i,o){for(;;){if(t===0||e.contains(t))return;const a=e.add(t),c=this.prog.inst[t];switch(c.op){case x.FAIL:return;case x.ALT:case x.ALT_MATCH:this.add(e,c.out,s,r,i,o),t=c.arg;continue;case x.EMPTY_WIDTH:if((c.arg&~o)===0){t=c.out;continue}return;case x.NOP:t=c.out;continue;case x.CAPTURE:if(c.arg<this.ncap){const u=r[i+c.arg];r[i+c.arg]=s,this.add(e,c.out,s,r,i,o),r[i+c.arg]=u;return}else{t=c.out;continue}case x.LB_WRITE:this.lbTable[Math.abs(c.arg)]=s,t=c.out;continue;case x.LB_CHECK:if(c.arg>0){if(this.lbTable[c.arg]===s){t=c.out;continue}}else if(this.lbTable[-c.arg]!==s){t=c.out;continue}return;case x.MATCH:case x.RUNE:case x.RUNE1:case x.RUNE_ANY:case x.RUNE_ANY_NOT_NL:if(this.ncap>0){const u=a*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[u+h]=r[i+h]}return;default:throw new Tr("unhandled")}}}};const sB=n=>{let e=-2128831035;for(let t=0;t<n.length;t++)e^=n[t],e=Math.imul(e,16777619);return e},$y=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0};var qy=class{constructor(n,e,t=[]){this.nfaStates=n,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(z.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(z.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},Wt,Jy=(Wt=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/Wt.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,s=[...e];let r=!1;const i=[];for(;s.length>0;){const a=s.pop();if(t.has(a))continue;t.add(a);const c=this.prog.getInst(a);switch(c.op){case x.MATCH:r=!0,i.includes(c.arg)||i.push(c.arg);break;case x.ALT:case x.ALT_MATCH:s.push(c.out),s.push(c.arg);break;case x.NOP:case x.CAPTURE:s.push(c.out);break;case x.EMPTY_WIDTH:case x.LB_WRITE:case x.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((a,c)=>a-c),{pcs:o,isMatch:r,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const s=t.pcs,r=sB(s);let i=this.stateCache.get(r);if(i)for(let a=0;a<i.length;a++){const c=i[a];if($y(c.nfaStates,s))return c.lastSeen=++this.clock,c}else i=[],this.stateCache.set(r,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=Wt.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(r),i||(i=[],this.stateCache.set(r,i))}const o=new qy(s,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let a=0;a<o.length;a++)e.push(o[a]);e.sort((o,a)=>o.lastSeen-a.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),s=e.length-t,r=e.slice(s),i=new Set(r);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<r.length;o++){const a=r[o];a.nextLatin1.fill(null),a.nextLatin1Anchored.fill(null),a.transKeys.length=0,a.transVals.length=0;const c=sB(a.nfaStates);let u=this.stateCache.get(c);u||(u=[],this.stateCache.set(c,u)),u.push(a),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,s){if(t<=z.MAX_LATIN1)if(s===U.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(s===U.UNANCHORED?0:z.MAX_RUNE+1),a=e.transKeys,c=a.length;for(let u=0;u<c;u++)if(a[u]===o)return e.transVals[u]}const r=[];for(let o=0;o<e.nfaStates.length;o++){const a=e.nfaStates[o],c=this.prog.getInst(a);x.isRuneOp(c.op)&&c.matchRune(t)&&r.push(c.out)}s===U.UNANCHORED&&r.push(this.prog.start);const i=this.getState(r);if(t<=z.MAX_LATIN1)s===U.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(s===U.UNANCHORED?0:z.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,s){if((s===U.ANCHOR_START||s===U.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;if(i.isMatch)if(s===U.ANCHOR_BOTH){if(t===r)return!0}else return!0;let o=t;for(;o<r;){const a=e.step(o),c=a>>3,u=a&7;if(u===0)break;if(i=s===U.UNANCHORED&&c<=z.MAX_LATIN1&&i.nextLatin1[c]||this.step(i,c,s),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(s===U.ANCHOR_BOTH){if(o+u===r)return!0}else return!0;if(i.nfaStates.length===0&&s!==U.UNANCHORED)return!1;o+=u}return!1}matchSet(e,t,s){if((s===U.ANCHOR_START||s===U.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;const o=new Set,a=(u,h)=>{u.isMatch&&(s===U.ANCHOR_BOTH?h===r&&u.matchIDs.forEach(f=>o.add(f)):u.matchIDs.forEach(f=>o.add(f)))};a(i,t);let c=t;for(;c<r;){const u=e.step(c),h=u>>3,f=u&7;if(f===0)break;if(i=s===U.UNANCHORED&&h<=z.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,s),i===null)return null;if(i.lastSeen=++this.clock,c+=f,a(i,c),i.nfaStates.length===0&&s!==U.UNANCHORED)break}return Array.from(o).sort((u,h)=>u-h)}},H(Wt,"MAX_CACHE_CLEARS",5),H(Wt,"STATE_MEMORY_ESTIMATE",838),Wt);const jy=32,Ky=500,xa=256,zy=256*1024;var Qy=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(xa),this.jobArg=new Uint8Array(xa),this.jobPos=new Int32Array(xa),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const s=n.numInst()*(e+1)+jy-1>>>5;this.visited.length<s?this.visited=new Uint32Array(s):this.visited.fill(0,0,s),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,s=t>>>5,r=1<<(t&31);return(this.visited[s]&r)!==0?!1:(this.visited[s]|=r,!0)}push(n,e,t,s){if(n.prog.getInst(e).op!==x.FAIL&&(s||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(r);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=s?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,s,r){const i=n.longest;for(this.push(n,t,s,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,c=this.jobPos[this.jobLen],u=!0;for(;!(!u&&!this.shouldVisit(o,c));){u=!1;const h=n.prog.getInst(o);switch(h.op){case x.FAIL:throw new Tr("unexpected InstFail");case x.ALT:if(a){a=!1,o=h.arg;continue}else{this.push(n,o,c,!0),o=h.out;continue}case x.ALT_MATCH:{const f=n.prog.getInst(h.out);if(x.isRuneOp(f.op)){this.push(n,h.arg,c,!1),o=h.arg,c=this.end;continue}this.push(n,h.out,this.end,!1),o=h.out;continue}case x.RUNE:{const f=e.step(c);if(f===at.EOF()||!h.matchRune(f>>3))break;c+=f&7,o=h.out;continue}case x.RUNE1:{const f=e.step(c);if(f===at.EOF()||f>>3!==h.runes[0])break;c+=f&7,o=h.out;continue}case x.RUNE_ANY_NOT_NL:{const f=e.step(c);if(f===at.EOF()||f>>3===10)break;c+=f&7,o=h.out;continue}case x.RUNE_ANY:{const f=e.step(c);if(f===at.EOF())break;c+=f&7,o=h.out;continue}case x.CAPTURE:if(a){this.cap[h.arg]=c;break}else{h.arg<this.ncap&&(this.push(n,o,this.cap[h.arg],!0),this.cap[h.arg]=c),o=h.out;continue}case x.EMPTY_WIDTH:{const f=e.context(c);if((h.arg&~f)!==0)break;o=h.out;continue}case x.NOP:o=h.out;continue;case x.MATCH:{if(r===U.ANCHOR_BOTH&&c!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=c);const f=this.matchcap[1];if((f===-1||i&&c>0&&c>f)&&this.matchcap.set(this.cap),!i||c===this.end)return!0;break}case x.LB_WRITE:case x.LB_CHECK:throw new Tr("Backtracker cannot evaluate Lookbehind instructions");default:throw new Tr("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Li=[];var Fi=class Ad{static shouldBacktrack(e){return e.numInst()<=Ky}static maxBitStateLen(e){return Ad.shouldBacktrack(e)?Math.floor(zy/e.numInst()):0}static execute(e,t,s,r,i){const o=e.cond;if(o===W.EMPTY_ALL||(r===U.ANCHOR_START||r===U.ANCHOR_BOTH)&&s!==0||(o&W.EMPTY_BEGIN_TEXT)!==0&&s!==0)return null;const a=Li.length>0?Li.pop():new Qy,c=t.endPos();a.reset(e.prog,c,i);let u=!1;if((o&W.EMPTY_BEGIN_TEXT)!==0||r===U.ANCHOR_START||r===U.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=s),a.tryBacktrack(e,t,e.prog.start,s,r)&&(u=!0);else{let f=-1;for(;s<=c&&f!==0;s+=f){if(e.prefix.length>0){const g=t.index(e,s);if(g<0)break;s+=g}if(a.ncap>0&&(a.cap[0]=s),a.tryBacktrack(e,t,e.prog.start,s,r)){u=!0;break}const p=t.step(s);f=p===at.EOF()?0:p&7}}if(!u)return Li.push(a),null;const h=i===0?[]:W.toArray(a.matchcap.subarray(0,i));return Li.push(a),h}},rB=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const Wy=(n,e,t,s)=>{const r=n.length,i=e.length;let o=0,a=0;const c=[],u=[];let h=!0,f=-1;const p=g=>{const v=g?n:e,O=g?o:a,F=g?t:s;return f>0&&v[O]<=c[f]?!1:(c.push(v[O],v[O+1]),g?o+=2:a+=2,f+=2,u.push(F),!0)};for(;o<r||a<i;)if(a>=i?h=p(!0):o>=r||e[a]<n[o]?h=p(!1):h=p(!0),!h)return null;return{merged:c,next:u}};var Yy=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],s=new x(t.op);s.out=t.out,s.arg=t.arg,s.runes=t.runes?t.runes.slice():[],s.next=null,this.inst[e]=s}}};const Xy=n=>{const e=new Yy(n);for(let t=0;t<e.inst.length;t++){const s=e.inst[t];if(s.op!==x.ALT&&s.op!==x.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[s[i]];if(o.op!==x.ALT&&o.op!==x.ALT_MATCH&&(r="arg",i="out",o=e.inst[s[i]],o.op!==x.ALT&&o.op!==x.ALT_MATCH))continue;const a=e.inst[s[r]];if(a.op===x.ALT||a.op===x.ALT_MATCH)continue;let c="out",u="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,c="arg",u="out"),h&&(o[c]=s[r]),s[r]===o[c]&&(s[i]=o[u])}return e},Zy=n=>{if(n.inst.length>=1e3)return null;const e=new rB(n.inst.length),t=new rB(n.inst.length),s=new Array(n.inst.length),r=new Array(n.inst.length).fill(!1),i=o=>{let a=!0;const c=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),c.op){case x.ALT:case x.ALT_MATCH:{a=i(c.out)&&i(c.arg);let u=r[c.out],h=r[c.arg];if(u&&h)return!1;if(h){const v=c.out;c.out=c.arg,c.arg=v;const O=u;u=h,h=O}u&&(r[o]=!0,c.op=x.ALT_MATCH);const f=s[c.out]||[],p=s[c.arg]||[],g=Wy(f,p,c.out,c.arg);if(!g)return!1;s[o]=g.merged,c.next=new Uint32Array(g.next);break}case x.CAPTURE:case x.EMPTY_WIDTH:case x.NOP:a=i(c.out),r[o]=r[c.out],s[o]=s[c.out]?s[c.out].slice():[],c.next=new Uint32Array(Math.floor(s[o].length/2)+1).fill(c.out);break;case x.MATCH:case x.FAIL:r[o]=c.op===x.MATCH;break;case x.RUNE:{if(r[o]=!1,c.next&&c.next.length>0)break;if(e.insert(c.out),!c.runes||c.runes.length===0){s[o]=[],c.next=new Uint32Array([c.out]);break}let u=[];if(c.runes.length===1&&(c.arg&U.FOLD_CASE)!==0){const h=c.runes[0];u.push(h,h);for(let f=z.simpleFold(h);f!==h;f=z.simpleFold(f))u.push(f,f);u.sort((f,p)=>f-p)}else for(let h=0;h<c.runes.length;h++)u.push(c.runes[h]);s[o]=u,c.next=new Uint32Array(Math.floor(u.length/2)+1).fill(c.out),c.op=x.RUNE;break}case x.RUNE1:{if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out);let u=[];if((c.arg&U.FOLD_CASE)!==0){const h=c.runes[0];u.push(h,h);for(let f=z.simpleFold(h);f!==h;f=z.simpleFold(f))u.push(f,f);u.sort((f,p)=>f-p)}else u.push(c.runes[0],c.runes[0]);s[o]=u,c.next=new Uint32Array(Math.floor(u.length/2)+1).fill(c.out),c.op=x.RUNE;break}case x.RUNE_ANY:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),s[o]=[0,z.MAX_RUNE],c.next=new Uint32Array([c.out]);break;case x.RUNE_ANY_NOT_NL:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),s[o]=[0,9,11,z.MAX_RUNE],c.next=new Uint32Array(Math.floor(s[o].length/2)+1).fill(c.out);break}return a};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)s[o]&&(n.inst[o].runes=s[o]);return n},eE=(n,e)=>{for(let t=0;t<e.inst.length;t++){const s=e.inst[t];switch(s.op){case x.ALT:case x.ALT_MATCH:case x.RUNE:break;case x.CAPTURE:case x.EMPTY_WIDTH:case x.NOP:case x.MATCH:case x.FAIL:n.inst[t].next=null;break;case x.RUNE1:case x.RUNE_ANY:case x.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=s.op,n.inst[t].runes=s.runes?s.runes.slice():[];break}}};var iB=class Sd{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==x.EMPTY_WIDTH||(t.arg&W.EMPTY_BEGIN_TEXT)===0)return null;let s=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===x.ALT||e.inst[i].op===x.ALT_MATCH){s=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case x.ALT:case x.ALT_MATCH:if(a===x.MATCH||e.inst[o.arg].op===x.MATCH)return null;break;case x.EMPTY_WIDTH:if(a===x.MATCH){if((o.arg&W.EMPTY_END_TEXT)===W.EMPTY_END_TEXT)continue;return null}break;default:if(a===x.MATCH&&s)return null;break}}let r=Xy(e);return r=Zy(r),r!==null&&eE(r,e),r}static next(e,t){const s=e.matchRunePos(t);return s>=0?e.next[s]:e.op===x.ALT_MATCH?e.out:0}static execute(e,t,s,r,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let c=!1,u=t.step(s),h=u>>3,f=u&7,p=at.EOF(),g=-1,v=0;u!==at.EOF()&&(p=t.step(s+f),p!==at.EOF()&&(g=p>>3,v=p&7));let O=s===0?W.emptyOpContext(-1,h):t.context(s),F=o.start,S;for(;;){switch(S=o.inst[F],F=S.out,S.op){case x.MATCH:return r===U.ANCHOR_BOTH&&s!==t.endPos()?null:(c=!0,a.length>0&&(a[0]=0,a[1]=s),i===0?[]:W.toArray(a));case x.RUNE:if(!S.matchRune(h))return null;break;case x.RUNE1:if(h!==S.runes[0])return null;break;case x.RUNE_ANY:break;case x.RUNE_ANY_NOT_NL:if(h===10)return null;break;case x.ALT:case x.ALT_MATCH:F=Sd.next(S,h);continue;case x.FAIL:return null;case x.NOP:continue;case x.EMPTY_WIDTH:if((S.arg&~O)!==0)return null;continue;case x.CAPTURE:S.arg<a.length&&(a[S.arg]=s);continue;default:throw new Tr("bad inst")}if(f===0)break;O=W.emptyOpContext(h,g),s+=f,h=g,f=v,h!==-1&&(p=t.step(s+f),p!==at.EOF()?(g=p>>3,v=p&7):(g=-1,v=0))}return c?i===0?[]:W.toArray(a):null}},X,b=(X=class{static isPseudoOp(e){return e>=X.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===k.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new X(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=X.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=X.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case X.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case X.Op.EMPTY_MATCH:e+="(?:)";break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:case X.Op.REPEAT:{const t=this.subs[0];switch(t.op>X.Op.CAPTURE||t.op===X.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case X.Op.STAR:e+="*";break;case X.Op.PLUS:e+="+";break;case X.Op.QUEST:e+="?";break;case X.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&U.NON_GREEDY)!==0&&(e+="?");break}case X.Op.CONCAT:for(let t of this.subs)t.op===X.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case X.Op.ALTERNATE:{let t="";for(let s of this.subs)e+=t,t="|",e+=s.appendTo();break}case X.Op.LITERAL:(this.flags&U.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=W.escapeRune(t);(this.flags&U.FOLD_CASE)!==0&&(e+=")");break;case X.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case X.Op.ANY_CHAR:e+="(?s:.)";break;case X.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case X.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case X.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==X.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case X.Op.BEGIN_TEXT:e+="\\A";break;case X.Op.END_TEXT:(this.flags&U.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case X.Op.BEGIN_LINE:e+="^";break;case X.Op.END_LINE:e+="$";break;case X.Op.WORD_BOUNDARY:e+="\\b";break;case X.Op.NO_WORD_BOUNDARY:e+="\\B";break;case X.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===z.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const s=this.runes[t]+1,r=this.runes[t+1]-1;e+=X.quoteIfHyphen(s),e+=W.escapeRune(s),s!==r&&(e+="-",e+=X.quoteIfHyphen(r),e+=W.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const s=this.runes[t],r=this.runes[t+1];e+=X.quoteIfHyphen(s),e+=W.escapeRune(s),s!==r&&(e+="-",e+=X.quoteIfHyphen(r),e+=W.escapeRune(r))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===X.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const s=t.maxCap();e<s&&(e=s)}return e}equals(e){if(!(e!==null&&e instanceof X)||this.op!==e.op)return!1;switch(this.op){case X.Op.END_TEXT:if((this.flags&U.WAS_DOLLAR)!==(e.flags&U.WAS_DOLLAR))return!1;break;case X.Op.LITERAL:case X.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case X.Op.ALTERNATE:case X.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:if((this.flags&U.NON_GREEDY)!==(e.flags&U.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.REPEAT:if((this.flags&U.NON_GREEDY)!==(e.flags&U.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.PLB:case X.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},H(X,"Op",bd(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),X),oB=class{constructor(n){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of n){let s=0;for(let r=0;r<t.length;r++){const i=t[r];i in this.next[s]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[s][i]=this.next.length-1),s=this.next[s][i]}this.match[s]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const s=this.next[0][t];this.fail[s]=0,e.push(s)}for(;e.length>0;){const t=e.shift();for(const s in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],s)){const r=this.next[t][s];let i=this.fail[t];for(;i!==0&&!(s in this.next[i]);)i=this.fail[i];s in this.next[i]?this.fail[r]=this.next[i][s]:this.fail[r]=0,this.match[r]=this.match[r]||this.match[this.fail[r]],e.push(r)}}}searchUTF16(n,e,t){let s=0;for(let r=e;r<t;r++){const i=n.charCodeAt(r);for(;s!==0&&!(i in this.next[s]);)s=this.fail[s];if(i in this.next[s]&&(s=this.next[s][i]),this.match[s])return!0}return!1}searchUTF8(n,e,t){let s=0;for(let r=e;r<t;r++){const i=n[r];for(;s!==0&&!(i in this.next[s]);)s=this.fail[s];if(i in this.next[s]&&(s=this.next[s][i]),this.match[s])return!0}return!1}},Vt,me=(Vt=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Vt.Type.NONE:return!0;case Vt.Type.EXACT:return e.hasString(this,t);case Vt.Type.AND:for(let s=0;s<this.subs.length;s++)if(!this.subs[s].eval(e,t))return!1;return!0;case Vt.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let s=0;s<this.subs.length;s++)if(this.subs[s].eval(e,t))return!0;return!1;default:return!0}}},H(Vt,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Vt),tE=class zt{static build(e){const t=zt.fromRegexp(e);return zt.simplify(t)}static fromRegexp(e){if(!e)return new me(me.Type.NONE);switch(e.op){case b.Op.PLB:case b.Op.NLB:case b.Op.NO_MATCH:case b.Op.EMPTY_MATCH:case b.Op.BEGIN_LINE:case b.Op.END_LINE:case b.Op.BEGIN_TEXT:case b.Op.END_TEXT:case b.Op.WORD_BOUNDARY:case b.Op.NO_WORD_BOUNDARY:case b.Op.CHAR_CLASS:case b.Op.ANY_CHAR_NOT_NL:case b.Op.ANY_CHAR:return new me(me.Type.NONE);case b.Op.LITERAL:{if(e.runes.length===0||(e.flags&U.FOLD_CASE)!==0)return new me(me.Type.NONE);const t=new me(me.Type.EXACT);let s="";for(let r=0;r<e.runes.length;r++)s+=String.fromCodePoint(e.runes[r]);return t.str=s,t.bytes=W.stringToUtf8ByteArray(t.str),t}case b.Op.CAPTURE:case b.Op.PLUS:return zt.fromRegexp(e.subs[0]);case b.Op.REPEAT:return e.min>=1?zt.fromRegexp(e.subs[0]):new me(me.Type.NONE);case b.Op.CONCAT:{const t=new me(me.Type.AND);for(const s of e.subs)t.subs.push(zt.fromRegexp(s));return t}case b.Op.ALTERNATE:{const t=new me(me.Type.OR);for(const s of e.subs)t.subs.push(zt.fromRegexp(s));return t}default:return new me(me.Type.NONE)}}static simplify(e){if(e.type===me.Type.EXACT||e.type===me.Type.NONE)return e;if(e.type===me.Type.AND){const t=[];for(const s of e.subs){const r=zt.simplify(s);if(r.type!==me.Type.NONE)if(r.type===me.Type.AND)for(let i=0;i<r.subs.length;i++)t.push(r.subs[i]);else t.push(r)}return t.length===0?new me(me.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===me.Type.OR){const t=[];for(const o of e.subs){const a=zt.simplify(o);if(a.type===me.Type.NONE)return new me(me.Type.NONE);if(a.type===me.Type.OR)for(let c=0;c<a.subs.length;c++)t.push(a.subs[c]);else t.push(a)}if(t.length===0)return new me(me.Type.NONE);if(t.length===1)return t[0];const s=new Set,r=[];for(const o of t)o.type===me.Type.EXACT?s.has(o.str)||(s.add(o.str),r.push(o)):r.push(o);e.subs=r;let i=!0;for(const o of r)if(o.type!==me.Type.EXACT){i=!1;break}return i&&r.length>1&&(e.ac16=new oB(r.map(o=>{const a=[];for(let c=0;c<o.str.length;c++)a.push(o.str.charCodeAt(c));return a})),e.ac8=new oB(r.map(o=>o.bytes))),e}return e}},bt=class{constructor(n=0,e=0){this.head=n,this.tail=e}},nE=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new x(n))}skipNop(n){let e=this.inst[n];for(;e.op===x.NOP||e.op===x.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!x.isRuneOp(e.op)||e.runes.length!==1)return[e.op===x.MATCH,n];for(;x.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&U.FOLD_CASE)===0;)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===x.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case x.EMPTY_WIDTH:n|=t.arg;break;case x.FAIL:return-1;case x.CAPTURE:case x.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const s=this.inst[t>>1];(t&1)===0?(t=s.out,s.out=e):(t=s.arg,s.arg=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return(n.tail&1)===0?t.out=e.head:t.arg=e.head,new bt(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}},Mi=class{constructor(n=0,e=new bt,t=!1){this.i=n,this.out=e,this.nullable=t}},sE=class Is{static ANY_RUNE_NOT_NL(){return[0,k.CODES.get(`
`)-1,k.CODES.get(`
`)+1,z.MAX_RUNE]}static ANY_RUNE(){return[0,z.MAX_RUNE]}static compileRegexp(e){const t=new Is,s=t.compile(e);return t.prog.patch(s.out,t.newInst(x.MATCH).i),t.prog.start=s.i,t.prog}static compileSet(e){const t=new Is;if(e.length===0)return t.prog.start=t.newInst(x.FAIL).i,t.prog;let s=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),a=t.newInst(x.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),s.push(o.i)}let r=s[0];for(let i=1;i<s.length;i++){const o=t.newInst(x.ALT),a=t.prog.getInst(o.i);a.out=r,a.arg=s[i],r=o.i}return t.prog.start=r,t.prog}constructor(){this.prog=new nE,this.newInst(x.FAIL)}newInst(e){return this.prog.addInst(e),new Mi(this.prog.numInst()-1,new bt,!0)}nop(){const e=this.newInst(x.NOP);return e.out=new bt(e.i<<1,e.i<<1),e}fail(){return new Mi}cap(e){const t=this.newInst(x.CAPTURE);return t.out=new bt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Mi(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const s=this.newInst(x.ALT),r=this.prog.getInst(s.i);return r.out=e.i,r.arg=t.i,s.out=this.prog.append(e.out,t.out),s.nullable=e.nullable||t.nullable,s}loop(e,t){const s=this.newInst(x.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=new bt(s.i<<1,s.i<<1)):(r.out=e.i,s.out=new bt(s.i<<1|1,s.i<<1|1)),this.prog.patch(e.out,s.i),s}quest(e,t){const s=this.newInst(x.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=new bt(s.i<<1,s.i<<1)):(r.out=e.i,s.out=new bt(s.i<<1|1,s.i<<1|1)),s.out=this.prog.append(s.out,e.out),s}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Mi(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(x.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new bt(t.i<<1,t.i<<1),t}rune(e,t){const s=this.newInst(x.RUNE);s.nullable=!1;const r=this.prog.getInst(s.i);return r.runes=e,t&=U.FOLD_CASE,(e.length!==1||z.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,s.out=new bt(s.i<<1,s.i<<1),(t&U.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=x.RUNE1:e.length===2&&e[0]===0&&e[1]===z.MAX_RUNE?r.op=x.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===k.CODES.get(`
`)-1&&e[2]===k.CODES.get(`
`)+1&&e[3]===z.MAX_RUNE&&(r.op=x.RUNE_ANY_NOT_NL),s}lookBehind(e,t){const s=this.newInst(x.LB_WRITE);this.prog.getInst(s.i).arg=t;const r=this.rune(Is.ANY_RUNE(),0),i=this.star(r,!0),o=this.cat(i,e);this.prog.patch(o.out,s.i);const a=this.newInst(x.LB_CHECK);return this.prog.getInst(a.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),a.out=new bt(a.i<<1,a.i<<1),a}compile(e){switch(e.op){case b.Op.NO_MATCH:return this.fail();case b.Op.EMPTY_MATCH:return this.nop();case b.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let s of e.runes){const r=this.rune([s],e.flags);t=t===null?r:this.cat(t,r)}return t}case b.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case b.Op.ANY_CHAR_NOT_NL:return this.rune(Is.ANY_RUNE_NOT_NL(),0);case b.Op.ANY_CHAR:return this.rune(Is.ANY_RUNE(),0);case b.Op.BEGIN_LINE:return this.empty(W.EMPTY_BEGIN_LINE);case b.Op.END_LINE:return this.empty(W.EMPTY_END_LINE);case b.Op.BEGIN_TEXT:return this.empty(W.EMPTY_BEGIN_TEXT);case b.Op.END_TEXT:return this.empty(W.EMPTY_END_TEXT);case b.Op.WORD_BOUNDARY:return this.empty(W.EMPTY_WORD_BOUNDARY);case b.Op.NO_WORD_BOUNDARY:return this.empty(W.EMPTY_NO_WORD_BOUNDARY);case b.Op.PLB:case b.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case b.Op.CAPTURE:{const t=this.cap(e.cap<<1),s=this.compile(e.subs[0]),r=this.cap(e.cap<<1|1);return this.cat(this.cat(t,s),r)}case b.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&U.NON_GREEDY)!==0);case b.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&U.NON_GREEDY)!==0);case b.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&U.NON_GREEDY)!==0);case b.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let s of e.subs){const r=this.compile(s);t=t===null?r:this.cat(t,r)}return t}case b.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let s of e.subs){const r=this.compile(s);t=t===null?r:this.alt(t,r)}return t}default:throw new Uy("regexp: unhandled case in compile")}}},rE=class Et{static simplify(e){if(e===null)return null;switch(e.op){case b.Op.PLB:case b.Op.NLB:case b.Op.CAPTURE:{const t=Et.simplify(e.subs[0]);if(t!==e.subs[0]){const s=b.fromRegexp(e);return s.runes=[],s.subs=[t],s}return e}case b.Op.CONCAT:case b.Op.ALTERNATE:{const t=[];let s=!1;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],o=Et.simplify(i);if(o!==i&&(s=!0),e.op===b.Op.CONCAT){if(o.op===b.Op.NO_MATCH)return new b(b.Op.NO_MATCH);if(o.op===b.Op.EMPTY_MATCH){s=!0;continue}if(o.op===b.Op.CONCAT){s=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}else if(e.op===b.Op.ALTERNATE){if(o.op===b.Op.NO_MATCH){s=!0;continue}if(o.op===b.Op.ALTERNATE){s=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}t.push(o)}if(s){if(t.length===0)return new b(e.op===b.Op.CONCAT?b.Op.EMPTY_MATCH:b.Op.NO_MATCH);if(t.length===1)return t[0];const r=b.fromRegexp(e);return r.runes=[],r.subs=t,r}return e}case b.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new b(b.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?new b(b.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES.get(`
`)-1&&e.runes[2]===k.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE?new b(b.Op.ANY_CHAR_NOT_NL):e;case b.Op.STAR:case b.Op.PLUS:case b.Op.QUEST:{const t=Et.simplify(e.subs[0]);return Et.simplify1(e.op,e.flags,t,e)}case b.Op.REPEAT:{if(e.min===0&&e.max===0)return new b(b.Op.EMPTY_MATCH);const t=Et.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Et.simplify1(b.Op.STAR,e.flags,t,null);if(e.min===1)return Et.simplify1(b.Op.PLUS,e.flags,t,null);const r=new b(b.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(Et.simplify1(b.Op.PLUS,e.flags,t,null)),r.subs=i.slice(0),Et.simplify(r)}if(e.min===1&&e.max===1)return t;let s=null;if(e.min>0){s=[];for(let r=0;r<e.min;r++)s.push(t)}if(e.max>e.min){let r=Et.simplify1(b.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new b(b.Op.CONCAT);o.subs=[t,r],r=Et.simplify1(b.Op.QUEST,e.flags,o,null)}if(s===null)return r;s.push(r)}if(s!==null){const r=new b(b.Op.CONCAT);return r.subs=s.slice(0),Et.simplify(r)}return new b(b.Op.NO_MATCH)}}return e}static simplify1(e,t,s,r){if(s.op===b.Op.EMPTY_MATCH)return s;if(s.op===b.Op.NO_MATCH)return e===b.Op.PLUS?s:new b(b.Op.EMPTY_MATCH);if(e===s.op&&(t&U.NON_GREEDY)===(s.flags&U.NON_GREEDY))return s;if(r!==null&&r.op===e&&(r.flags&U.NON_GREEDY)===(t&U.NON_GREEDY)&&s===r.subs[0])return r;const i=new b(e);return i.flags=t,i.subs=[s],i}},pe=class{constructor(n,e){this.sign=n,this.cls=e}};const aB=[48,57],lB=[9,10,12,13,32,32],cB=[48,57,65,90,95,95,97,122],uB=new Map([["\\d",new pe(1,aB)],["\\D",new pe(-1,aB)],["\\s",new pe(1,lB)],["\\S",new pe(-1,lB)],["\\w",new pe(1,cB)],["\\W",new pe(-1,cB)]]),BB=[48,57,65,90,97,122],hB=[65,90,97,122],dB=[0,127],fB=[9,9,32,32],pB=[0,31,127,127],mB=[48,57],gB=[33,126],CB=[97,122],yB=[32,126],EB=[33,47,58,64,91,96,123,126],_B=[9,13,32,32],DB=[65,90],vB=[48,57,65,90,95,95,97,122],wB=[48,57,65,70,97,102],IB=new Map([["[:alnum:]",new pe(1,BB)],["[:^alnum:]",new pe(-1,BB)],["[:alpha:]",new pe(1,hB)],["[:^alpha:]",new pe(-1,hB)],["[:ascii:]",new pe(1,dB)],["[:^ascii:]",new pe(-1,dB)],["[:blank:]",new pe(1,fB)],["[:^blank:]",new pe(-1,fB)],["[:cntrl:]",new pe(1,pB)],["[:^cntrl:]",new pe(-1,pB)],["[:digit:]",new pe(1,mB)],["[:^digit:]",new pe(-1,mB)],["[:graph:]",new pe(1,gB)],["[:^graph:]",new pe(-1,gB)],["[:lower:]",new pe(1,CB)],["[:^lower:]",new pe(-1,CB)],["[:print:]",new pe(1,yB)],["[:^print:]",new pe(-1,yB)],["[:punct:]",new pe(1,EB)],["[:^punct:]",new pe(-1,EB)],["[:space:]",new pe(1,_B)],["[:^space:]",new pe(-1,_B)],["[:upper:]",new pe(1,DB)],["[:^upper:]",new pe(-1,DB)],["[:word:]",new pe(1,vB)],["[:^word:]",new pe(-1,vB)],["[:xdigit:]",new pe(1,wB)],["[:^xdigit:]",new pe(-1,wB)]]);var pn=class Cn{static charClassToString(e,t){let s="[";for(let r=0;r<t;r+=2){r>0&&(s+=" ");const i=e[r],o=e[r+1];i===o?s+=`0x${i.toString(16)}`:s+=`0x${i.toString(16)}-0x${o.toString(16)}`}return s+="]",s}static cmp(e,t,s,r){const i=e[t]-s;return i!==0?i:r-e[t+1]}static qsortIntPair(e,t,s){const r=((t+s)/2|0)&-2,i=e[r],o=e[r+1];let a=t,c=s;for(;a<=c;){for(;a<s&&Cn.cmp(e,a,i,o)<0;)a+=2;for(;c>t&&Cn.cmp(e,c,i,o)>0;)c-=2;if(a<=c){if(a!==c){let u=e[a];e[a]=e[c],e[c]=u,u=e[a+1],e[a+1]=e[c+1],e[c+1]=u}a+=2,c-=2}}t<c&&Cn.qsortIntPair(e,t,c),a<s&&Cn.qsortIntPair(e,a,s)}constructor(e=W.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Cn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const s=this.r[t],r=this.r[t+1];if(s<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=s,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&U.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let s=2;s<=4;s+=2)if(this.len>=s){const r=this.r[this.len-s],i=this.r[this.len-s+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-s]=e),t>i&&(this.r[this.len-s+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=z.MIN_FOLD&&t>=z.MAX_FOLD)return this.appendRange(e,t);if(t<z.MIN_FOLD||e>z.MAX_FOLD)return this.appendRange(e,t);e<z.MIN_FOLD&&(this.appendRange(e,z.MIN_FOLD-1),e=z.MIN_FOLD),t>z.MAX_FOLD&&(this.appendRange(z.MAX_FOLD+1,t),t=z.MAX_FOLD);for(let s=e;s<=t;s++){this.appendRange(s,s);for(let r=z.simpleFold(s);r!==s;r=z.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let s=0;s<e.length;s+=2){const r=e[s],i=e[s+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const s=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(s,r);continue}for(let o=s;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let s=0;s<e.length;++s){const r=e.getLo(s),i=e.getHi(s),o=e.getStride(s);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let a=r;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let s=0;s<this.len;s+=2){const r=this.r[s],i=this.r[s+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=z.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=z.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let s=e.cls;return t&&(s=new Cn().appendFoldedClass(s).cleanClass().toArray()),this.appendClassWithSign(s,e.sign)}toString(){return Cn.charClassToString(this.r,this.len)}},iE=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=W.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},$,oE=($=class{static unicodeTable(e){return e==="Any"?{tab:$.ANY_TABLE,fold:$.ANY_TABLE,sign:1}:e==="Ascii"?{tab:$.ASCII_TABLE,fold:$.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Bt.CATEGORIES.get("Cn"),fold:Bt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Bt.CATEGORIES.get("LC"),fold:Bt.FOLD_CATEGORIES.get("LC"),sign:1}:Bt.CATEGORIES.has(e)?{tab:Bt.CATEGORIES.get(e),fold:Bt.FOLD_CATEGORIES.get(e),sign:1}:Bt.SCRIPTS.has(e)?{tab:Bt.SCRIPTS.get(e),fold:Bt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<z.MIN_FOLD||e>z.MAX_FOLD)return e;let t=e;const s=e;for(e=z.simpleFold(e);e!==s;e=z.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===b.Op.EMPTY_MATCH)return null;if(e.op===b.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===b.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const s=new b(b.Op.LITERAL);return s.flags=t,s.runes=W.stringToRunes(e),s}static parse(e,t){return new $(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const s=$.parseInt(e);if(s===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=s;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=$.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),s<0||s>1e3||r===-2||r>1e3||r>=0&&s>r)throw new De($.ERR_INVALID_REPEAT_SIZE,e.from(t));return s<<16|r&z.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const s=e.codePointAt(t);if(s!==k.CODES.get("_")&&!W.isalnum(s))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=k.CODES.get("0")&&e.peek()<=k.CODES.get("9");)e.skip(1);const s=e.from(t);return s.length===0||s.length>1&&s.codePointAt(0)===k.CODES.get("0")?-1:s.length>8?-2:parseInt(s,10)}static isCharClass(e){return e.op===b.Op.LITERAL&&e.runes.length===1||e.op===b.Op.CHAR_CLASS||e.op===b.Op.ANY_CHAR_NOT_NL||e.op===b.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case b.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case b.Op.CHAR_CLASS:for(let s=0;s<e.runes.length;s+=2)if(e.runes[s]<=t&&t<=e.runes[s+1])return!0;return!1;case b.Op.ANY_CHAR_NOT_NL:return t!==k.CODES.get(`
`);case b.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case b.Op.ANY_CHAR:break;case b.Op.ANY_CHAR_NOT_NL:$.matchRune(t,k.CODES.get(`
`))&&(e.op=b.Op.ANY_CHAR);break;case b.Op.CHAR_CLASS:t.op===b.Op.LITERAL?e.runes=new pn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new pn(e.runes).appendClass(t.runes).toArray();break;case b.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=b.Op.CHAR_CLASS,e.runes=new pn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new De($.ERR_TRAILING_BACKSLASH);let s=e.pop();e:switch(s){case k.CODES.get("1"):case k.CODES.get("2"):case k.CODES.get("3"):case k.CODES.get("4"):case k.CODES.get("5"):case k.CODES.get("6"):case k.CODES.get("7"):if(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"))break;case k.CODES.get("0"):{let r=s-k.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"));i++)r=r*8+e.peek()-k.CODES.get("0"),e.skip(1);return r}case k.CODES.get("x"):{if(!e.more())break;if(s=e.pop(),s===k.CODES.get("{")){let o=0,a=0;for(;;){if(!e.more())break e;if(s=e.pop(),s===k.CODES.get("}"))break;const c=W.unhex(s);if(c<0||(a=a*16+c,a>z.MAX_RUNE))break e;o++}if(o===0)break e;return a}const r=W.unhex(s);if(!e.more())break;s=e.pop();const i=W.unhex(s);if(r<0||i<0)break;return r*16+i}case k.CODES.get("a"):return k.CODES.get("\x07");case k.CODES.get("f"):return k.CODES.get("\f");case k.CODES.get("n"):return k.CODES.get(`
`);case k.CODES.get("r"):return k.CODES.get("\r");case k.CODES.get("t"):return k.CODES.get("	");case k.CODES.get("v"):return k.CODES.get("\v");default:if(s<=z.MAX_ASCII&&!W.isalnum(s))return s;break}throw new De($.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new De($.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?$.parseEscape(e):e.pop()}static concatRunes(e,t){for(let s=0;s<t.length;s++)e.push(t[s]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===b.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if($.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new b(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>$.MAX_RUNES)throw new De($.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===b.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor($.MAX_SIZE/this.repeats)?this.repeats=$.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor($.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>$.MAX_SIZE)throw new De($.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let s=0;switch(e.op){case b.Op.LITERAL:s=e.runes.length;break;case b.Op.PLB:case b.Op.NLB:case b.Op.CAPTURE:case b.Op.STAR:s=2+this.calcSize(e.subs[0]);break;case b.Op.PLUS:case b.Op.QUEST:s=1+this.calcSize(e.subs[0]);break;case b.Op.CONCAT:for(let r of e.subs)s=s+this.calcSize(r);break;case b.Op.ALTERNATE:for(let r of e.subs)s=s+this.calcSize(r);e.subs.length>1&&(s=s+e.subs.length-1);break;case b.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?s=2+r:s=1+e.min*r;break}s=e.max*r+(e.max-e.min);break}}return s=Math.max(1,s),this.size===null&&(this.size=new Map),this.size.set(e,s),s}checkHeight(e){if(!(this.numRegexp<$.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>$.MAX_HEIGHT)throw new De($.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let s=1;for(let r of e.subs){const i=this.calcHeight(r);s<1+i&&(s=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,s),s}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!b.isPseudoOp(this.stack[t-1].op);)t--;const s=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),s}push(e){if(this.numRunes+=e.runes.length,e.op===b.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=b.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===b.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&z.simpleFold(e.runes[0])===e.runes[2]&&z.simpleFold(e.runes[2])===e.runes[0]||e.op===b.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&z.simpleFold(e.runes[0])===e.runes[1]&&z.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|U.FOLD_CASE))return null;e.op=b.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|U.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const s=this.stack.length;if(s<2)return!1;const r=this.stack[s-1],i=this.stack[s-2];return r.op!==b.Op.LITERAL||i.op!==b.Op.LITERAL||(r.flags&U.FOLD_CASE)!==(i.flags&U.FOLD_CASE)?!1:(i.runes=$.concatRunes(i.runes,r.runes),e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1))}newLiteral(e,t){const s=this.newRegexp(b.Op.LITERAL);return s.flags=t,(t&U.FOLD_CASE)!==0&&(e=$.minFoldRune(e)),s.runes=[e],s}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,s,r,i,o){let a=this.flags;if((a&U.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=U.NON_GREEDY),o!==-1))throw new De($.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new De($.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const u=this.stack[c-1];if(b.isPseudoOp(u.op))throw new De($.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const h=this.newRegexp(e);if(h.min=t,h.max=s,h.flags=a,h.subs=[u],this.stack[c-1]=h,this.checkLimits(h),e===b.Op.REPEAT&&(t>=2||s>=2)&&!this.repeatIsValid(h,1e3))throw new De($.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===b.Op.REPEAT){let s=e.max;if(s===0)return!0;if(s<0&&(s=e.min),s>t)return!1;s>0&&(t=Math.trunc(t/s))}for(let s of e.subs)if(!this.repeatIsValid(s,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(b.Op.EMPTY_MATCH)):this.push(this.collapse(e,b.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(b.Op.NO_MATCH)):this.push(this.collapse(e,b.Op.ALTERNATE))}cleanAlt(e){e.op===b.Op.CHAR_CLASS&&(e.runes=new pn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?(e.runes=[],e.op=b.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES.get(`
`)-1&&e.runes[2]===k.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE&&(e.runes=[],e.op=b.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let s=0;for(let a of e)s+=a.op===t?a.subs.length:1;let r=new Array(s).fill(null),i=0;for(let a of e)if(a.op===t){for(let c=0;c<a.subs.length;c++)r[i++]=a.subs[c];this.reuse(a)}else r[i++]=a;let o=this.newRegexp(t);if(o.subs=r,t===b.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,s=e.length,r=0,i=null,o=0,a=0,c=0;for(let h=0;h<=s;h++){let f=null,p=0,g=0;if(h<s){let v=e[t+h];if(v.op===b.Op.CONCAT&&v.subs.length>0&&(v=v.subs[0]),v.op===b.Op.LITERAL&&(f=v.runes,p=v.runes.length,g=v.flags&U.FOLD_CASE),g===a){let O=0;for(;O<o&&O<p&&i[O]===f[O];)O++;if(O>0){o=O;continue}}}if(h!==c)if(h===c+1)e[r++]=e[t+c];else{const v=this.newRegexp(b.Op.LITERAL);v.flags=a,v.runes=i.slice(0,o);for(let S=c;S<h;S++)e[t+S]=this.removeLeadingString(e[t+S],o),this.checkLimits(e[t+S]);const O=this.collapse(e.slice(t+c,t+h),b.Op.ALTERNATE),F=this.newRegexp(b.Op.CONCAT);F.subs=[v,O],e[r++]=F}c=h,i=f,o=p,a=g}s=r,t=0,c=0,r=0;let u=null;for(let h=0;h<=s;h++){let f=null;if(!(h<s&&(f=$.leadingRegexp(e[t+h]),u!==null&&u.equals(f)&&($.isCharClass(u)||u.op===b.Op.REPEAT&&u.min===u.max&&$.isCharClass(u.subs[0]))))){if(h!==c)if(h===c+1)e[r++]=e[t+c];else{const p=u;for(let O=c;O<h;O++){const F=O!==c;e[t+O]=this.removeLeadingRegexp(e[t+O],F),this.checkLimits(e[t+O])}const g=this.collapse(e.slice(t+c,t+h),b.Op.ALTERNATE),v=this.newRegexp(b.Op.CONCAT);v.subs=[p,g],e[r++]=v}c=h,u=f}}s=r,t=0,c=0,r=0;for(let h=0;h<=s;h++)if(!(h<s&&$.isCharClass(e[t+h]))){if(h!==c)if(h===c+1)e[r++]=e[t+c];else{let f=c;for(let g=c+1;g<h;g++){const v=e[t+f],O=e[t+g];(v.op<O.op||v.op===O.op&&(v.runes!==null?v.runes.length:0)<(O.runes!==null?O.runes.length:0))&&(f=g)}const p=e[t+c];e[t+c]=e[t+f],e[t+f]=p;for(let g=c+1;g<h;g++)$.mergeCharClass(e[t+c],e[t+g]),this.reuse(e[t+g]);this.cleanAlt(e[t+c]),e[r++]=e[t+c]}h<s&&(e[r++]=e[t+h]),c=h+1}s=r,t=0,c=0,r=0;for(let h=0;h<s;++h)h+1<s&&e[t+h].op===b.Op.EMPTY_MATCH&&e[t+h+1].op===b.Op.EMPTY_MATCH||(e[r++]=e[t+h]);return s=r,t=0,e.slice(t,s)}removeLeadingString(e,t){if(e.op===b.Op.CONCAT&&e.subs.length>0){const s=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=s,s.op===b.Op.EMPTY_MATCH)switch(this.reuse(s),e.subs.length){case 0:case 1:e.op=b.Op.EMPTY_MATCH,e.subs=b.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===b.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=b.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===b.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=b.Op.EMPTY_MATCH,e.subs=b.emptySubs();break;case 1:{const s=e;e=e.subs[0],this.reuse(s);break}}return e}return t&&this.reuse(e),this.newRegexp(b.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&U.LITERAL)!==0)return $.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,s=-1;const r=new iE(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case k.CODES.get("("):if((this.flags&U.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&U.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(b.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case k.CODES.get("|"):this.parseVerticalBar(),r.skip(1);break;case k.CODES.get(")"):this.parseRightParen(),r.skip(1);break;case k.CODES.get("^"):(this.flags&U.ONE_LINE)!==0?this.op(b.Op.BEGIN_TEXT):this.op(b.Op.BEGIN_LINE),r.skip(1);break;case k.CODES.get("$"):(this.flags&U.ONE_LINE)!==0?this.op(b.Op.END_TEXT).flags|=U.WAS_DOLLAR:this.op(b.Op.END_LINE),r.skip(1);break;case k.CODES.get("."):(this.flags&U.DOT_NL)!==0?this.op(b.Op.ANY_CHAR):this.op(b.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case k.CODES.get("["):this.parseClass(r);break;case k.CODES.get("*"):case k.CODES.get("+"):case k.CODES.get("?"):{i=r.pos();let o=null;switch(r.pop()){case k.CODES.get("*"):o=b.Op.STAR;break;case k.CODES.get("+"):o=b.Op.PLUS;break;case k.CODES.get("?"):o=b.Op.QUEST;break}this.repeat(o,t,s,i,r,e);break}case k.CODES.get("{"):{i=r.pos();const o=$.parseRepeat(r);if(o<0){r.rewindTo(i),this.literal(r.pop());break}t=o>>16,s=(o&z.MAX_BMP)<<16>>16,this.repeat(b.Op.REPEAT,t,s,i,r,e);break}case k.CODES.get("\\"):{const o=r.pos();if(r.skip(1),(this.flags&U.PERL_X)!==0&&r.more())switch(r.pop()){case k.CODES.get("A"):this.op(b.Op.BEGIN_TEXT);break e;case k.CODES.get("b"):this.op(b.Op.WORD_BOUNDARY);break e;case k.CODES.get("B"):this.op(b.Op.NO_WORD_BOUNDARY);break e;case k.CODES.get("C"):throw new De($.ERR_INVALID_ESCAPE,"\\C");case k.CODES.get("Q"):{let u=r.rest();const h=u.indexOf("\\E");h>=0?(u=u.substring(0,h),r.skipString(u),r.skipString("\\E")):r.skipString(u);let f=0;for(;f<u.length;){const p=u.codePointAt(f);this.literal(p),f+=W.charCount(p)}break e}case k.CODES.get("z"):this.op(b.Op.END_TEXT);break e;default:r.rewindTo(o);break}else r.rewindTo(o);const a=this.newRegexp(b.Op.CHAR_CLASS);if(a.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const u=new pn;if(this.parseUnicodeClass(r,u)){a.runes=u.toArray(),this.push(a);break e}}const c=new pn;if(this.parsePerlClassEscape(r,c)){a.runes=c.toArray(),this.push(a);break e}r.rewindTo(o),this.reuse(a),this.literal($.parseEscape(r));break}default:this.literal(r.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new De($.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),s=e.rest();if(s.startsWith("(?P<")||s.startsWith("(?<")){const a=s.charAt(2)==="P"?4:3,c=s.indexOf(">");if(c<0)throw new De($.ERR_INVALID_NAMED_CAPTURE,s);const u=s.substring(a,c);if(e.skipString(u),e.skip(a+1),!$.isValidCaptureName(u))throw new De($.ERR_INVALID_NAMED_CAPTURE,s.substring(0,c+1));const h=this.op(b.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[u])throw new De($.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,h.name=u;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case k.CODES.get("i"):r|=U.FOLD_CASE,o=!0;break;case k.CODES.get("m"):r&=-17,o=!0;break;case k.CODES.get("s"):r|=U.DOT_NL,o=!0;break;case k.CODES.get("U"):r|=U.NON_GREEDY,o=!0;break;case k.CODES.get("-"):if(i<0)break e;i=-1,r=~r,o=!1;break;case k.CODES.get(":"):case k.CODES.get(")"):if(i<0){if(!o)break e;r=~r}a===k.CODES.get(":")&&this.op(b.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new De($.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(b.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(b.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(b.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===b.Op.VERTICAL_BAR&&$.isCharClass(this.stack[e-1])&&$.isCharClass(this.stack[e-3])){let t=this.stack[e-1],s=this.stack[e-3];if(t.op>s.op){const r=s;s=t,t=r,this.stack[e-3]=s}return $.mergeCharClass(s,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],s=this.stack[e-2];if(s.op===b.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=s,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new De($.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==b.Op.LEFT_PAREN)throw new De($.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if($.hasCapture(e))throw new De($.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=b.Op.PLB:t.op=b.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=b.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const s=e.pos();if((this.flags&U.PERL_X)===0||!e.more()||e.pop()!==k.CODES.get("\\")||!e.more())return!1;e.pop();const r=e.from(s),i=uB.has(r)?uB.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&U.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const s=e.rest(),r=s.indexOf(":]");if(r<0)return!1;const i=s.substring(0,r+2);e.skipString(i);const o=IB.has(i)?IB.get(i):null;if(o===null)throw new De($.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&U.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const s=e.pos();if((this.flags&U.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===k.CODES.get("P")&&(r=-1),!e.more())throw e.rewindTo(s),new De($.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==k.CODES.get("{"))o=W.runeToString(i);else{const h=e.rest(),f=h.indexOf("}");if(f<0)throw e.rewindTo(s),new De($.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===k.CODES.get("^")&&(r=0-r,o=o.substring(1));const a=$.unicodeTable(o);if(a===null)throw new De($.ERR_INVALID_CHAR_RANGE,e.from(s));a.sign<0&&(r=0-r);const c=a.tab,u=a.fold;if((this.flags&U.FOLD_CASE)===0||u===null)t.appendTableWithSign(c,r);else{const h=new pn().appendTable(c).appendTable(u).cleanClass().toArray();t.appendClassWithSign(h,r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const s=this.newRegexp(b.Op.CHAR_CLASS);s.flags=this.flags;const r=new pn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&U.CLASS_NL)===0&&r.appendRange(k.CODES.get(`
`),k.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==k.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&U.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new De($.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(a);const c=$.parseClassChar(e,t);let u=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=$.parseClassChar(e,t),u<c)throw new De($.ERR_INVALID_CHAR_RANGE,e.from(a))}(this.flags&U.FOLD_CASE)===0?r.appendRange(c,u):r.appendFoldedRange(c,u)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),s.runes=r.toArray(),this.push(s)}},H($,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),H($,"ERR_INVALID_CHAR_RANGE","invalid character class range"),H($,"ERR_INVALID_ESCAPE","invalid escape sequence"),H($,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),H($,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),H($,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),H($,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),H($,"ERR_MISSING_BRACKET","missing closing ]"),H($,"ERR_MISSING_PAREN","missing closing )"),H($,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),H($,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),H($,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),H($,"ERR_UNEXPECTED_PAREN","unexpected )"),H($,"ERR_NESTING_DEPTH","expression nests too deeply"),H($,"ERR_LARGE","expression too large"),H($,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),H($,"MAX_HEIGHT",1e3),H($,"MAX_SIZE",3355443),H($,"MAX_RUNES",33554432),H($,"ANY_TABLE",new y(new Uint32Array([0,z.MAX_RUNE,1]))),H($,"ASCII_TABLE",new y(new Uint32Array([0,127,1]))),H($,"ASCII_FOLD_TABLE",new y(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),$),aE=class Xn{static initTest(e){const t=Xn.compile(e),s=new Xn(t.expr,t.prog,t.numSubexp,t.longest);return s.cond=t.cond,s.prefix=t.prefix,s.prefixUTF8=t.prefixUTF8,s.prefixComplete=t.prefixComplete,s.prefixRune=t.prefixRune,s.prefilter=t.prefilter,s}static compile(e){return Xn.compileImpl(e,U.PERL,!1)}static compilePOSIX(e){return Xn.compileImpl(e,U.POSIX,!0)}static compileImpl(e,t,s){let r=oE.parse(e,t);const i=r.maxCap();r=rE.simplify(r);const o=tE.build(r),a=sE.compileRegexp(r),c=new Xn(e,a,i,s);c.prefilter=o.type===me.Type.NONE?null:o;const[u,h]=a.prefix();return c.prefixComplete=u,c.prefix=h,c.prefixUTF8=W.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=r.namedGroups,c}static match(e,t){return Xn.compile(e).match(t)}constructor(e,t,s=0,r=0){this.expr=e,this.prog=t,this.numSubexp=s,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new Jy(this.prog),this.onepass=iB.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,s,r){if((s===U.ANCHOR_START||s===U.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(s===U.UNANCHORED){const c=e.index(this,t);if(c<0)return null;i=t+c,o=i+a}else if(s===U.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(s===U.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(r>0){const c=new Int32Array(r).fill(-1);return c[0]=i,c[1]=o,Array.from(c)}return[]}executeEngine(e,t,s,r){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,s,r);if(this.prefilter!==null&&s===U.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return iB.execute(this,e,t,s,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=Fi.maxBitStateLen(this.prog)?Fi.execute(this,e,t,s,r):this.doExecuteNFA(e,t,s,r);if(this.prog.numLb===0){const i=this.dfa.match(e,t,s);if(i!==null)return i?[]:null;if(e.endPos()<=Fi.maxBitStateLen(this.prog))return Fi.execute(this,e,t,s,r)}return this.doExecuteNFA(e,t,s,r)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,s,r){let i=this.get();i||(i=Hy.fromRE2(this)),i.init(r);const o=i.match(e,t,s)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(Ie.fromUTF16(e),0,U.UNANCHORED,0)!==null}matchWithGroup(e,t,s,r,i){return e instanceof ds||(W.isByteArray(e)?e=ns.utf8(e):e=ns.utf16(e)),this.matchMachineInput(e,t,s,r,i)}matchMachineInput(e,t,s,r,i){if(t>s)return[!1,null];const o=e.isUTF16Encoding()?Ie.fromUTF16(e.asCharSequence(),0,s):Ie.fromUTF8(e.asBytes(),0,s),a=this.executeEngine(o,t,r,2*i);return a===null?[!1,null]:[!0,a]}matchUTF8(e){return this.executeEngine(Ie.fromUTF8(e),0,U.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,s){let r=0,i=0,o="";const a=Ie.fromUTF16(e);let c=0;for(;i<=e.length;){const u=this.executeEngine(a,i,U.UNANCHORED,2);if(u===null||u.length===0)break;o+=e.substring(r,u[0]),(u[1]>r||u[0]===0)&&(o+=t(e.substring(u[0],u[1])),c++),r=u[1];const h=a.step(i)&7;if(i+h>u[1]?i+=h:i+1>u[1]?i++:i=u[1],c>=s)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let s=new Array(t).fill(-1);for(let r=0;r<e.length;r++)s[r]=e[r];e=s}return e}allMatches(e,t,s=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,c=-1;for(;a<t&&o<=i;){const u=this.executeEngine(e,o,U.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let h=!0;if(u[1]===o){u[0]===c&&(h=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=u[1];c=u[1],h&&(r.push(s(this.pad(u))),a++)}return r}findUTF8(e){const t=this.executeEngine(Ie.fromUTF8(e),0,U.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Ie.fromUTF8(e),0,U.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Ie.fromUTF16(e),0,U.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Ie.fromUTF16(e),0,U.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Ie.fromUTF8(e),0,U.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.slice(t[2*r],t[2*r+1]));return s}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF8(e),0,U.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Ie.fromUTF16(e),0,U.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.substring(t[2*r],t[2*r+1]));return s}findSubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF16(e),0,U.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const s=this.allMatches(Ie.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return s.length===0?null:s}findAllUTF8Index(e,t){const s=this.allMatches(Ie.fromUTF8(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAll(e,t){const s=this.allMatches(Ie.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return s.length===0?null:s}findAllIndex(e,t){const s=this.allMatches(Ie.fromUTF16(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAllUTF8Submatch(e,t){const s=this.allMatches(Ie.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return s.length===0?null:s}findAllUTF8SubmatchIndex(e,t){const s=this.allMatches(Ie.fromUTF8(e),t);return s.length===0?null:s}findAllSubmatch(e,t){const s=this.allMatches(Ie.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return s.length===0?null:s}findAllSubmatchIndex(e,t){const s=this.allMatches(Ie.fromUTF16(e),t);return s.length===0?null:s}},lE=class Ts{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let s="",r=!1,i=e.length;i===0&&(s="(?:)",r=!0);let o=!1,a=0;for(;a<i;){let u=e[a];if(u==="\\"){if(a+1<i)switch(u=e[a+1],u){case"\\":s+="\\\\",a+=2;continue;case"c":if(a+2<i){let p=e[a+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let g=p%32;s+="\\x",s+=(g>>4).toString(16).toUpperCase(),s+=(g&15).toString(16).toUpperCase(),a+=3,r=!0;continue}}s+="c",a+=2,r=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let p=a+3,g=!1,v=!1;for(;p<i;){const O=e[p];if(O==="}"){v=!0;break}if(!Ts.isHexadecimal(O))break;g=!0,p++}if(v&&g){s+="\\x",a+=2,r=!0;continue}}else if(a+5<i){let p=!0;for(let g=0;g<4;g++)if(!Ts.isHexadecimal(e[a+2+g])){p=!1;break}if(p){s+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,r=!0;continue}}}s+="u",a+=2,r=!0;continue;case"x":{let p=!1;if(a+2<i&&e[a+2]==="{"){let g=a+3,v=!1,O=!1;for(;g<i;){const F=e[g];if(F==="}"){O=!0;break}if(!Ts.isHexadecimal(F))break;v=!0,g++}O&&v&&(p=!0)}else a+3<i&&Ts.isHexadecimal(e[a+2])&&Ts.isHexadecimal(e[a+3])&&(p=!0);p?(s+="\\x",a+=2):(s+="x",a+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":s+="\\"+u,a+=2;continue;default:{let p=e.codePointAt(a+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let g=W.charCount(p);s+=e.substring(a+1,a+1+g),a+=g+1,r=!0}else{s+="\\";let g=W.charCount(p);s+=e.substring(a+1,a+1+g),a+=g+1}continue}}}else if(u==="/"){s+="\\/",a+=1,r=!0;continue}else if(u==="[")o=!0;else if(u==="]")o=!1;else if(!o&&u==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){s+="(?P<",a+=3,r=!0;continue}let h=e.codePointAt(a),f=W.charCount(h);s+=e.substring(a,a+f),a+=f}const c=r?s:e;return t.length>0?`(?${t})${c}`:c}},Fe,Ll=(Fe=class{static quote(e){return W.quoteMeta(e)}static quoteReplacement(e,t=!1){return tB.quoteReplacement(e,t)}static translateRegExp(e){return lE.translate(e)}static compile(e,t=0){let s=e;if((t&Fe.CASE_INSENSITIVE)!==0&&(s=`(?i)${s}`),(t&Fe.DOTALL)!==0&&(s=`(?s)${s}`),(t&Fe.MULTILINE)!==0&&(s=`(?m)${s}`),(t&-544)!==0)throw new Gy("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let r=U.PERL;(t&Fe.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&Fe.LOOKBEHINDS)!==0&&(r|=U.LOOKBEHIND);const i=new Fe(e,t);return i.re2Input=aE.compileImpl(s,r,(t&Fe.LONGEST_MATCH)!==0),i}static matches(e,t){return Fe.compile(e).testExact(t)}static initTest(e,t,s){if(e==null)throw new Error("pattern is null");if(s==null)throw new Error("re2 is null");const r=new Fe(e,t);return r.re2Input=s,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return W.isByteArray(e)&&(e=ns.utf8(e)),new tB(this,e)}test(e){return W.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=W.isByteArray(e)?Ie.fromUTF8(e):Ie.fromUTF16(e);return this.re2Input.executeEngine(t,0,U.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const s=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);s.push(o===null?void 0:o)}s.index=t.start(0),s.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);s.groups=i}else s.groups=void 0;return s}split(e,t=0){const s=this.matcher(e),r=[];let i=0,o=0;for(;s.find();){if(o===0&&s.end()===0){o=s.end();continue}if(t>0&&r.length===t-1)break;if(o===s.start()){if(t===0){i+=1,o=s.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(s.substring(o,s.start())),o=s.end()}if(t===0&&o!==s.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(s.substring(o,s.inputLength()))}return(t!==0||r.length===0&&!(o===s.inputLength()&&o>0))&&r.push(s.substring(o,s.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();){const s=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);s.push(o===null?void 0:o)}s.index=t.start(0),s.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);s.groups=i}else s.groups=void 0;yield s}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},H(Fe,"CASE_INSENSITIVE",vs.CASE_INSENSITIVE),H(Fe,"DOTALL",vs.DOTALL),H(Fe,"MULTILINE",vs.MULTILINE),H(Fe,"DISABLE_UNICODE_GROUPS",vs.DISABLE_UNICODE_GROUPS),H(Fe,"LONGEST_MATCH",vs.LONGEST_MATCH),H(Fe,"LOOKBEHINDS",vs.LOOKBEHINDS),Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks="12.19.0";function cE(n){Ks=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new vl("@firebase/firestore");function bs(){return fs.logLevel}function K(n,...e){if(fs.logLevel<=he.DEBUG){const t=e.map(Fl);fs.debug(`Firestore (${Ks}): ${n}`,...t)}}function rn(n,...e){if(fs.logLevel<=he.ERROR){const t=e.map(Fl);fs.error(`Firestore (${Ks}): ${n}`,...t)}}function Nt(n,...e){if(fs.logLevel<=he.WARN){const t=e.map(Fl);fs.warn(`Firestore (${Ks}): ${n}`,...t)}}function Fl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Pd(n,s,t)}function Pd(n,e,t){let s=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw rn(s),new Error(s)}function Q(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Pd(e,r,s)}function oe(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=uE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Be(n,e){return n<e?-1:n>e?1:0}function il(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return La(r)===La(i)?Be(r,i):La(r)?1:-1}return Be(n.length,e.length)}const BE=55296,hE=57343;function La(n){const e=n.charCodeAt(0);return e>=BE&&e<=hE}function Ms(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??We.RED,this.left=r??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new We(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return We.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new TB(this.data.getIterator())}getIteratorFrom(e){return new TB(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ue(this.comparator);return t.data=e,t}}class TB{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends an{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="__name__";class Ft{constructor(e,t,s){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ft.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ft?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Ft.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Be(e.length,t.length)}static compareSegments(e,t){const s=Ft.isNumericId(e),r=Ft.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Ft.extractNumericId(e).compare(Ft.extractNumericId(t)):il(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class ge extends Ft{construct(e,t,s){return new ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(M.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new ge(t)}static emptyPath(){return new ge([])}}const dE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let wt=class As extends Ft{construct(e,t,s){return new As(e,t,s)}static isValidIdentifier(e){return dE.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),As.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vs}static keyField(){return new As([Vs])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new j(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new As(t)}static emptyPath(){return new As([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new Ue(wt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ms(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fE(n,e){const t=[];for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.push(e(n[s],s,n));return t}function Rd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(ge.fromString(e))}static fromName(e){return new Y(ge.fromString(e).popFirst(5))}static empty(){return new Y(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n,e,t){if(!t)throw new j(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pE(n,e,t,s){if(e===!0&&s===!0)throw new j(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bB(n){if(!Y.isDocumentKey(n))throw new j(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function AB(n){if(Y.isDocumentKey(n))throw new j(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ro(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function Gt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ro(n);throw new j(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function ai(n,e){if(!oi(n))throw new j(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new j(M.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SB=-62135596800,PB=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*PB);return new Ce(t,s)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new j(M.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return Ce._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,s;if(e>=0n)t=Number(e/1000000000n),s=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(t=Number(e/1000000000n),s=0):(t=Number(e/1000000000n-1n),s=Number(r+1000000000n))}return new Ce(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<SB)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/PB}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new j(M.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ai(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-SB;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Ve("string",Ce._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nd("Invalid base64 string: "+i):i}})(e);return new Ge(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const mE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=mE.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Pe(n.seconds),nanos:Pe(n.nanos)}}function Pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function On(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="server_timestamp",xd="__type__",Ld="__previous_value__",Fd="__local_write_time__";function Oo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[xd])==null?void 0:s.stringValue)===kd}function li(n){const e=n.mapValue.fields[Ld];return Oo(e)?li(e):e}function Us(n){const e=Rn(n.mapValue.fields[Fd].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e,t,s,r,i,o,a,c,u,h,f,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f,this._customHeaders=p,this.grpcFlowControlWindow=g}}const Bo="(default)";class Fr{constructor(e,t){this.projectId=e,this.database=t||Bo}static empty(){return new Fr("","")}get isDefaultDatabase(){return this.database===Bo}isEqual(e){return e instanceof Fr&&e.projectId===this.projectId&&e.database===this.database}}function CE(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fr(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=-1;function No(n){return n==null}function Mr(n){return n===0&&1/n==-1/0}function yE(n){return typeof n=="number"&&Number.isInteger(n)&&!Mr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function EE(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="__type__",_E="__max__",Ui={mapValue:{}},Vd="__vector__",Vr="value",Gs={nullValue:"NULL_VALUE"},mt={booleanValue:!0},Qe={booleanValue:!1};function He(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Oo(n)?4:DE(n)?9007199254740991:ho(n)?10:11:ee(28295,{value:n})}function St(n,e,t){if(n===e)return!0;const s=He(n);if(s!==He(e))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Us(n).isEqual(Us(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Rn(i.timestampValue),c=Rn(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return On(i.bytesValue).isEqual(On(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return Pe(i.geoPointValue.latitude)===Pe(o.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o,a){if("integerValue"in i&&"integerValue"in o)return Pe(i.integerValue)===Pe(o.integerValue);let c,u;if("doubleValue"in i&&"doubleValue"in o)c=Pe(i.doubleValue),u=Pe(o.doubleValue);else{if(!(a!=null&&a.i))return!1;c=Pe(i.integerValue??i.doubleValue),u=Pe(o.integerValue??o.doubleValue)}return c===u?!!(a!=null&&a.o)||Mr(c)===Mr(u):!!(a===void 0||a.u)&&isNaN(c)&&isNaN(u)})(n,e,t);case 9:return Ms(n.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>St(r,i,t)));case 10:case 11:return(function(i,o,a){const c=i.mapValue.fields||{},u=o.mapValue.fields||{};if(uo(c)!==uo(u))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(u[h]===void 0||!St(c[h],u[h],a)))return!1;return!0})(n,e,t);default:return ee(52216,{left:n})}}function Ur(n,e){return(n.values||[]).find((t=>St(t,e)))!==void 0}function gt(n,e){if(n===e)return 0;const t=He(n),s=He(e);if(t!==s)return Be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Pe(i.integerValue||i.doubleValue),c=Pe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(n,e);case 3:return RB(n.timestampValue,e.timestampValue);case 4:return RB(Us(n),Us(e));case 5:return il(n.stringValue,e.stringValue);case 6:return(function(i,o){const a=On(i),c=On(o);return a.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Be(a[u],c[u]);if(h!==0)return h}return Be(a.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=Be(Pe(i.latitude),Pe(o.latitude));return a!==0?a:Be(Pe(i.longitude),Pe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return OB(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var p,g,v,O;const a=i.fields||{},c=o.fields||{},u=(p=a[Vr])==null?void 0:p.arrayValue,h=(g=c[Vr])==null?void 0:g.arrayValue,f=Be(((v=u==null?void 0:u.values)==null?void 0:v.length)||0,((O=h==null?void 0:h.values)==null?void 0:O.length)||0);return f!==0?f:OB(u,h)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ui.mapValue&&o===Ui.mapValue)return 0;if(i===Ui.mapValue)return 1;if(o===Ui.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=il(c[f],h[f]);if(p!==0)return p;const g=gt(a[c[f]],u[h[f]]);if(g!==0)return g}return Be(c.length,h.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{l:t})}}function RB(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=Rn(n),s=Rn(e),r=Be(t.seconds,s.seconds);return r!==0?r:Be(t.nanos,s.nanos)}function OB(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=gt(t[r],s[r]);if(i!==void 0&&i!==0)return i}return Be(t.length,s.length)}function Hs(n){return ol(n)}function ol(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Rn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return On(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Y.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=ol(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${ol(t.fields[o])}`;return r+"}"})(n.mapValue):ee(61005,{value:n})}function Yi(n){switch(He(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=li(n);return e?16+Yi(e):16;case 5:return 2*n.stringValue.length;case 6:return On(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Yi(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Gn(s.fields,((i,o)=>{r+=i.length+Yi(o)})),r})(n.mapValue);default:throw ee(13486,{value:n})}}function NB(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Mt(n){return!!n&&"integerValue"in n}function ss(n){return!!n&&"doubleValue"in n}function Nn(n){return Mt(n)||ss(n)}function $s(n){return!!n&&"arrayValue"in n}function vt(n){return!!n&&"nullValue"in n}function Ct(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function as(n){return!!n&&"mapValue"in n}function ho(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Md])==null?void 0:s.stringValue)===Vd}function al(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Vr])==null?void 0:t.arrayValue}function br(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=br(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=br(n.arrayValue.values[t]);return e}return{...n}}function DE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_E}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!as(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=br(t)}setAll(e){let t=wt.emptyPath(),s={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=br(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());as(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];as(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Gn(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new ot(br(this.value))}}function Ud(n){const e=[];return Gn(n.fields,((t,s)=>{const r=new wt([t]);if(as(s)){const i=Ud(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(e)?"-0":e}}function Ul(n){return{integerValue:""+n}}function Gl(n,e,t){return yE(e)?Ul(e):ko(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this._=void 0}}function vE(n,e,t){return n instanceof fo?(function(r,i){const o={fields:{[xd]:{stringValue:kd},[Fd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Oo(i)&&(i=li(i)),i&&(o.fields[Ld]=i),{mapValue:o}})(t,e):n instanceof Gr?Hd(n,e):n instanceof Hr?$d(n,e):n instanceof $r?(function(r,i){const o=Gd(r,i),a=go(o)+go(r.h);return Mt(o)&&Mt(r.h)?Ul(a):ko(r.serializer,a)})(n,e):n instanceof po?(function(r,i){return kB(r,i,Math.min)})(n,e):n instanceof mo?(function(r,i){return kB(r,i,Math.max)})(n,e):void 0}function wE(n,e,t){return n instanceof Gr?Hd(n,e):n instanceof Hr?$d(n,e):t}function Gd(n,e){return n instanceof $r?Nn(e)?e:{integerValue:0}:null}class fo extends xo{}class Gr extends xo{constructor(e){super(),this.elements=e}}function Hd(n,e){const t=qd(e);for(const s of n.elements)t.some((r=>St(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Hr extends xo{constructor(e){super(),this.elements=e}}function $d(n,e){let t=qd(e);for(const s of n.elements)t=t.filter((r=>!St(r,s)));return{arrayValue:{values:t}}}class Hl extends xo{constructor(e,t){super(),this.serializer=e,this.h=t}}class $r extends Hl{}class po extends Hl{}class mo extends Hl{}function kB(n,e,t){if(!Nn(e))return n.h;const s=t(go(e),go(n.h));return Mt(e)&&Mt(n.h)?Ul(s):ko(n.serializer,s)}function go(n){return Pe(n.integerValue||n.doubleValue)}function qd(n){return $s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function IE(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Gr&&r instanceof Gr||s instanceof Hr&&r instanceof Hr?Ms(s.elements,r.elements,St):s instanceof $r&&r instanceof $r||s instanceof po&&r instanceof po||s instanceof mo&&r instanceof mo?St(s.h,r.h):s instanceof fo&&r instanceof fo})(n.transform,e.transform)}class TE{constructor(e,t){this.version=e,this.transformResults=t}}class It{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Lo{}function Jd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Fo(n.key,It.none()):new ci(n.key,n.data,It.none());{const t=n.data,s=ot.empty();let r=new Ue(wt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Hn(n.key,s,new Dt(r.toArray()),It.none())}}function bE(n,e,t){n instanceof ci?(function(r,i,o){const a=r.value.clone(),c=LB(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,e,t):n instanceof Hn?(function(r,i,o){if(!Xi(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=LB(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jd(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Ar(n,e,t,s){return n instanceof ci?(function(i,o,a,c){if(!Xi(i.precondition,o))return a;const u=i.value.clone(),h=FB(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,s):n instanceof Hn?(function(i,o,a,c){if(!Xi(i.precondition,o))return a;const u=FB(i.fieldTransforms,c,o),h=o.data;return h.setAll(jd(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(n,e,t,s):(function(i,o,a){return Xi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,e,t)}function AE(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Gd(s.transform,r||null);i!=null&&(t===null&&(t=ot.empty()),t.set(s.field,i))}return t||null}function xB(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ms(s,r,((i,o)=>IE(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ci extends Lo{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Hn extends Lo{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function LB(n,e,t){const s=new Map;Q(n.length===t.length,32656,{T:t.length,P:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,wE(o,a,t[r]))}return s}function FB(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,vE(i,o,e))}return s}class Fo extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SE extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.position=e,this.inclusive=t}}function MB(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=Y.comparator(Y.fromName(o.referenceValue),t.key):s=gt(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function VB(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{}class Me extends Kd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new RE(e,t,s):t==="array-contains"?new kE(e,s):t==="in"?new xE(e,s):t==="not-in"?new LE(e,s):t==="array-contains-any"?new FE(e,s):new Me(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new OE(e,s):new NE(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(gt(t,this.value)):t!==null&&He(this.value)===He(t)&&this.matchesComparison(gt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Kd{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new kt(e,t)}matches(e){return zd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function zd(n){return n.op==="and"}function Qd(n){return PE(n)&&zd(n)}function PE(n){for(const e of n.filters)if(e instanceof kt)return!1;return!0}function ll(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+Hs(n.value);if(Qd(n))return n.filters.map((e=>ll(e))).join(",");{const e=n.filters.map((t=>ll(t))).join(",");return`${n.op}(${e})`}}function Wd(n,e){return n instanceof Me?(function(s,r){return r instanceof Me&&s.op===r.op&&s.field.isEqual(r.field)&&St(s.value,r.value)})(n,e):n instanceof kt?(function(s,r){return r instanceof kt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,a)=>i&&Wd(o,r.filters[a])),!0):!1})(n,e):void ee(19439)}function Yd(n){return n instanceof Me?(function(t){return`${t.field.canonicalString()} ${t.op} ${Hs(t.value)}`})(n):n instanceof kt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Yd).join(" ,")+"}"})(n):"Filter"}class RE extends Me{constructor(e,t,s){super(e,t,s),this.key=Y.fromName(s.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class OE extends Me{constructor(e,t){super(e,"in",t),this.keys=Xd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class NE extends Me{constructor(e,t){super(e,"not-in",t),this.keys=Xd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>Y.fromName(s.referenceValue)))}class kE extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $s(t)&&Ur(t.arrayValue,this.value)}}class xE extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ur(this.value.arrayValue,t)}}class LE extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ur(this.value.arrayValue,t)}}class FE extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$s(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ur(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t="asc"){this.field=e,this.dir=t}}function ME(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ce(0,0))}static max(){return new ie(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,ie.min(),ie.min(),ie.min(),ot.empty(),0)}static newFoundDocument(e,t,s,r){return new tt(e,1,t,ie.min(),s,r,0)}static newNoDocument(e,t){return new tt(e,2,t,ie.min(),ie.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,ie.min(),ie.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=-1;function VE(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=ie.fromTimestamp(s===1e9?new Ce(t+1,0):new Ce(t,s));return new kn(r,Y.empty(),e)}function UE(n){return new kn(n.readTime,n.key,qr)}class kn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new kn(ie.min(),Y.empty(),qr)}static max(){return new kn(ie.max(),Y.empty(),qr)}}function GE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function UB(n,e=null,t=[],s=[],r=null,i=null,o=null){return new HE(n,e,t,s,r,i,o)}function Zd(n){const e=oe(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ll(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),No(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Hs(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Hs(s))).join(",")),e.R=t}return e.R}function ef(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ME(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Wd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!VB(n.startAt,e.startAt)&&VB(n.endAt,e.endAt)}function es(n){return!!n.isCorePipeline}function tf(n){return!!n.path&&Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function $E(n,e,t,s,r,i,o,a){return new ui(n,e,t,s,r,i,o,a)}function Mo(n){return new ui(n)}function GB(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qE(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function nf(n){return n.collectionGroup!==null}function Sr(n){const e=oe(n);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ue(wt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new yo(i,s))})),t.has(wt.keyField().canonicalString())||e.A.push(new yo(wt.keyField(),s))}return e.A}function Ht(n){const e=oe(n);return e.V||(e.V=JE(e,Sr(n))),e.V}function JE(n,e){if(n.limitType==="F")return UB(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new yo(r.field,i)}));const t=n.endAt?new Co(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Co(n.startAt.position,n.startAt.inclusive):null;return UB(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function cl(n,e){const t=n.filters.concat([e]);return new ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ul(n,e,t){return new ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jE(n,e){return ef(Ht(n),Ht(e))&&n.limitType===e.limitType}function Pr(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Yd(r))).join(", ")}]`),No(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Hs(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Hs(r))).join(",")),`Target(${s})`})(Ht(n))}; limitType=${n.limitType})`}function Vo(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Y.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Sr(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(o,a,c){const u=MB(o,a,c);return o.inclusive?u<=0:u<0})(s.startAt,Sr(s),r)||s.endAt&&!(function(o,a,c){const u=MB(o,a,c);return o.inclusive?u>=0:u>0})(s.endAt,Sr(s),r))})(n,e)}function $l(n){return(e,t)=>{let s=!1;for(const r of Sr(n)){const i=KE(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function KE(n,e,t){const s=n.field.isKeyField()?Y.comparator(e.key,t.key):(function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?gt(c,u):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,fe;function QE(n){switch(n){case M.OK:return ee(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function sf(n){if(n===void 0)return rn("GRPC error has no .code"),M.UNKNOWN;switch(n){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return ee(39323,{code:n})}}(fe=Le||(Le={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Rd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=new Se(Y.comparator);function ft(){return WE}const rf=new Se(Y.comparator);function Ss(...n){let e=rf;for(const t of n)e=e.insert(t.key,t);return e}function of(n){let e=rf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Dn(){return Rr()}function af(){return Rr()}function Rr(){return new gs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const YE=new Se(Y.comparator),XE=new Ue(Y.comparator);function ue(...n){let e=XE;for(const t of n)e=e.add(t);return e}const ZE=new Ue(Be);function e_(){return ZE}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Tn([4294967295,4294967295],0);function HB(n){const e=t_().encode(n),t=new Cd;return t.update(e),new Uint8Array(t.digest())}function $B(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tn([t,s],0),new Tn([r,i],0)]}class ql{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Dr(`Invalid padding: ${t}`);if(s<0)throw new Dr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Dr(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Dr(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=Tn.fromNumber(this.p)}v(e,t,s){let r=e.add(t.multiply(Tn.fromNumber(s)));return r.compare(n_)===1&&(r=new Tn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=HB(e),[s,r]=$B(t);for(let i=0;i<this.hashCount;i++){const o=this.v(s,r,i);if(!this.D(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ql(i,r,t);return s.forEach((a=>o.insert(a))),o}insert(e){if(this.p===0)return;const t=HB(e),[s,r]=$B(t);for(let i=0;i<this.hashCount;i++){const o=this.v(s,r,i);this.C(o)}}C(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,s,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,hi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Bi(ie.min(),r,new Se(Be),ft(),ft(),ue())}}class hi{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new hi(s,t,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t,s,r){this.F=e,this.removedTargetIds=t,this.key=s,this.O=r}}class lf{constructor(e,t){this.targetId=e,this.M=t}}class cf{constructor(e,t,s=Ge.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class qB{constructor(e){this.targetId=e,this.N=0,this.L=JB(),this.B=Ge.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=ue(),t=ue(),s=ue();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:ee(38017,{changeType:i})}})),new hi(this.B,this.U,e,t,s)}G(){this.k=!1,this.L=JB()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,Q(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const yr="WatchChangeAggregator";class s_{constructor(e){this.X=e,this.ee=new Map,this.te=ft(),this.ne=Gi(),this.re=ft(),this.ie=Gi(),this.se=new Se(Be)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,(t=>{const s=this.ee.get(t);if(s)switch(e.state){case 0:this.ce(t)&&s.K(e.resumeToken);break;case 1:s.Y(),s.q||s.G(),s.K(e.resumeToken);break;case 2:s.Y(),s.q||this.removeTarget(t);break;case 3:this.ce(t)&&(s.Z(),s.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),s.K(e.resumeToken));break;default:ee(56790,{state:e.state})}else K(yr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach(((s,r)=>{this.ce(r)&&t(r)}))}Ee(e){var t;return es(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:tf(e)}he(e){const t=e.targetId,s=e.M.count,r=this.Te(t);if(r){const i=r.target;if(this.Ee(i))if(s===0){const o=new Y(es(i)?ge.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,tt.newNoDocument(o,ie.min()))}else Q(s===1,20013,"Single document existence filter with count: "+s);else{const o=this.Pe(t);if(o!==s){const a=this.Ie(e),c=a?this.Re(a,e,o):1;if(c!==0){this.le(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,u)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=On(s).toUint8Array()}catch(c){if(c instanceof Nd)return Nt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ql(o,r,i)}catch(c){return Nt(c instanceof Dr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.p===0?null:a}Re(e,t,s){return t.M.count===s-this.de(e,t.targetId)?0:2}de(e,t){const s=this.X.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const o=this.X.Ve(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ae(t,i,null),r++)})),r}fe(e){const t=new Map;this.ee.forEach(((i,o)=>{const a=this.Te(o);if(a){if(i.current&&this.Ee(a.target)){const c=es(a.target)?ge.fromString(a.target.getPipelineDocuments()[0]):a.target.path,u=new Y(c);this.me(u).has(o)||this.pe(o,u)||this.ae(o,u,tt.newNoDocument(u,e))}i.$&&(t.set(o,i.W()),i.G())}}));let s=ue();this.ie.forEach(((i,o)=>{let a=!0;o.forEachWhile((c=>{const u=this.Te(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(s=s.add(i))})),this.te.forEach(((i,o)=>o.setReadTime(e))),this.re.forEach(((i,o)=>o.setReadTime(e)));const r=new Bi(e,t,this.se,this.te,this.re,s);return this.te=ft(),this.ne=Gi(),this.re=ft(),this.ie=Gi(),this.se=new Se(Be),r}oe(e,t){const s=this.ee.get(e);if(!s||!this.ce(e))return void K(yr,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.pe(e,t.key)?2:0;s.j(t.key,r),es(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,s){const r=this.ee.get(e);r&&this.ce(e)?(this.pe(e,t)?r.j(t,1):r.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),s&&(es(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,s):this.te=this.te.insert(t,s))):K(yr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const s=t.W();return this.X.getRemoteKeysForTarget(e).size+s.addedDocuments.size-s.removedDocuments.size}J(e){let t=this.ee.get(e);t||(K(yr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new qB(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new Ue(Be),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new Ue(Be),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||K(yr,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new qB(e)),this.X.getRemoteKeysForTarget(e).forEach((t=>{this.ae(e,t,null)}))}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function Gi(){return new Se(Y.comparator)}function JB(){return new Se(Y.comparator)}const r_={asc:"ASCENDING",desc:"DESCENDING"},i_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},o_={and:"AND",or:"OR"};class a_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bl(n,e){return n.useProto3Json||No(e)?e:{value:e}}function Or(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jl(n){const e=Rn(n);return new Ce(e.seconds,e.nanos)}function uf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function eo(n,e){return Or(n,e.toTimestamp())}function $t(n){return Q(!!n,49232),ie.fromTimestamp(Jl(n))}function jl(n,e){return hl(n,e).canonicalString()}function hl(n,e){const t=(function(r){return new ge(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Bf(n){const e=ge.fromString(n);return Q(mf(e),10190,{key:e.toString()}),e}function Eo(n,e){return jl(n.databaseId,e.path)}function Fa(n,e){const t=Bf(e);if(t.get(1)!==n.databaseId.projectId)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(df(t))}function hf(n,e){return jl(n.databaseId,e)}function l_(n){const e=Bf(n);return e.length===4?ge.emptyPath():df(e)}function dl(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function df(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function jB(n,e,t){return{name:Eo(n,e),fields:t.value.mapValue.fields}}function c_(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(Q(h===void 0||typeof h=="string",58123),Ge.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ge.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?M.UNKNOWN:sf(u.code);return new j(h,u.message||"")})(o);t=new cf(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Fa(n,s.document.name),i=$t(s.document.updateTime),o=s.document.createTime?$t(s.document.createTime):ie.min(),a=new ot({mapValue:{fields:s.document.fields}}),c=tt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new Zi(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Fa(n,s.document),i=s.readTime?$t(s.readTime):ie.min(),o=tt.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Zi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Fa(n,s.document),i=s.removedTargetIds||[];t=new Zi([],i,r,null)}else{if(!("filter"in e))return ee(11601,{we:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new zE(r,i),a=s.targetId;t=new lf(a,o)}}return t}function u_(n,e){let t;if(e instanceof ci)t={update:jB(n,e.key,e.value)};else if(e instanceof Fo)t={delete:Eo(n,e.key)};else if(e instanceof Hn)t={update:jB(n,e.key,e.data),updateMask:E_(e.fieldMask)};else{if(!(e instanceof SE))return ee(16599,{be:e.type});t={verify:Eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const a=o.transform;if(a instanceof fo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Hr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $r)return{fieldPath:o.field.canonicalString(),increment:a.h};if(a instanceof po)return{fieldPath:o.field.canonicalString(),minimum:a.h};if(a instanceof mo)return{fieldPath:o.field.canonicalString(),maximum:a.h};throw ee(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:eo(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(n,e.precondition)),t}function B_(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map((t=>(function(r,i){let o=r.updateTime?$t(r.updateTime):$t(i);return o.isEqual(ie.min())&&(o=$t(i)),new TE(o,r.transformResults||[])})(t,e)))):[]}function h_(n,e){return{documents:[hf(n,e.path)]}}function d_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=hf(n,r);const i=(function(u){if(u.length!==0)return pf(kt.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:Ps(p.field),direction:g_(p.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Bl(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Se:t,parent:r}}function f_(n){let e=l_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Q(s===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(f){const p=ff(f);return p instanceof kt&&Qd(p)?p.getFilters():[p]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((p=>(function(v){return new yo(Rs(v.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(v.direction))})(p)))})(t.orderBy));let a=null;t.limit&&(a=(function(f){let p;return p=typeof f=="object"?f.value:f,No(p)?null:p})(t.limit));let c=null;t.startAt&&(c=(function(f){const p=!!f.before,g=f.values||[];return new Co(g,p)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const p=!f.before,g=f.values||[];return new Co(g,p)})(t.endAt)),$E(e,r,o,i,a,"F",c,u)}function p_(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function m_(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function ff(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Rs(t.unaryFilter.field);return Me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Rs(t.unaryFilter.field);return Me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(t.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(t.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Me.create(Rs(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return kt.create(t.compositeFilter.filters.map((s=>ff(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function g_(n){return r_[n]}function C_(n){return i_[n]}function y_(n){return o_[n]}function Ps(n){return{fieldPath:n.canonicalString()}}function Rs(n){return wt.fromServerFormat(n.fieldPath)}function pf(n){return n instanceof Me?(function(t){if(t.op==="=="){if(Ct(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NAN"}};if(vt(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ct(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NOT_NAN"}};if(vt(t.value))return{unaryFilter:{field:Ps(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(t.field),op:C_(t.op),value:t.value}}})(n):n instanceof kt?(function(t){const s=t.getFilters().map((r=>pf(r)));return s.length===1?s[0]:{compositeFilter:{op:y_(t.op),filters:s}}})(n):ee(54877,{filter:n})}function E_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function gf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Jr(n,e){const t={fields:{}};return e.forEach(((s,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=s._toProto(n)})),{mapValue:t}}function Cf(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){return new a_(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(Ge.fromBase64String(e))}catch(t){throw new j(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ai(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Ve("string",At._jsonSchemaVersion),bytes:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function __(){return new Go(Vs)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:qt._jsonSchemaVersion}}static fromJSON(e){if(ai(e,qt._jsonSchema))return new qt(e.latitude,e.longitude)}}qt._jsonSchemaVersion="firestore/geoPoint/1.0",qt._jsonSchema={type:Ve("string",qt._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(et.UNAUTHENTICATED)))}shutdown(){}}class v_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class w_{constructor(e){this.De=e,this.currentUser=et.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.Ce===void 0,42304);let s=this.xe;const r=c=>this.xe!==s?(s=this.xe,t(c)):Promise.resolve();let i=new bn;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new bn,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},a=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.De.getImmediate({optional:!0});c?a(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}}),0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.xe!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Q(typeof s.accessToken=="string",31837,{Oe:s}),new yf(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{Me:e}),new et(e)}}class I_{constructor(e,t,s){this.Ne=e,this.Le=t,this.Be=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class T_{constructor(e,t,s){this.Ne=e,this.Le=t,this.Be=s}getToken(){return Promise.resolve(new I_(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(et.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class KB{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b_{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,Pt(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){Q(this.Ce===void 0,3512);const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new KB(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new KB(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function Ef(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zB="ConnectivityMonitor";class QB{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){K(zB,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){K(zB,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi=null;function fl(){return Hi===null?Hi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hi++,"0x"+Hi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="RestConnection",S_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class P_{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${s}/databases/${r}`,this.tt=this.databaseId.database===Bo?`project_id=${s}`:`project_id=${s}&database_id=${r}`}nt(e,t,s,r,i){const o=fl(),a=this.rt(e,t.toUriEncodedString());K(Ma,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(c,r,i);const{host:u}=new URL(a),h=ti(u);return this.st(e,a,c,s,h).then((f=>(K(Ma,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw Nt(Ma,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",s),f}))}_t(e,t,s,r,i,o){return this.nt(e,t,s,r,i)}it(e,t,s){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ks})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}rt(e,t){const s=S_[e];let r=`${this.Xe}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",Er=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class ks extends P_{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!ks.yt){const e=Dd();Er(e,_d.STAT_EVENT,(t=>{t.stat===tl.PROXY?K(Ze,"STAT_EVENT: detected buffering proxy"):t.stat===tl.NOPROXY&&K(Ze,"STAT_EVENT: detected no buffering proxy")})),ks.yt=!0}}st(e,t,s,r,i){const o=fl();return new Promise(((a,c)=>{const u=new yd;u.setWithCredentials(!0),u.listenOnce(Ed.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Wi.NO_ERROR:const f=u.getResponseJson();K(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Wi.TIMEOUT:K(Ze,`RPC '${e}' ${o} timed out`),c(new j(M.DEADLINE_EXCEEDED,"Request time out"));break;case Wi.HTTP_ERROR:const p=u.getStatus();if(K(Ze,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const O=(function(S){const G=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(G)>=0?G:M.UNKNOWN})(v.status);c(new j(O,v.message))}else c(new j(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new j(M.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{wt:e,streamId:o,bt:u.getLastErrorCode(),St:u.getLastError()})}}finally{K(Ze,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);K(Ze,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,s,15)}))}vt(e,t,s){const r=fl(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.it(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const u=i.join("");K(Ze,`Creating RPC '${e}' stream ${r}: ${u}`,a);const h=o.createWebChannel(u,a);this.Dt(h);let f=!1,p=!1;const g=new R_({ot:v=>{p?K(Ze,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(f||(K(Ze,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),K(Ze,`RPC '${e}' stream ${r} sending:`,v),h.send(v))},ut:()=>h.close()});return Er(h,_r.EventType.OPEN,(()=>{p||(K(Ze,`RPC '${e}' stream ${r} transport opened.`),g.Rt())})),Er(h,_r.EventType.CLOSE,(()=>{p||(p=!0,K(Ze,`RPC '${e}' stream ${r} transport closed`),g.Vt(),this.xt(h))})),Er(h,_r.EventType.ERROR,(v=>{p||(p=!0,Nt(Ze,`RPC '${e}' stream ${r} transport errored. Name:`,v.name,"Message:",v.message),g.Vt(new j(M.UNAVAILABLE,"The operation could not be completed")))})),Er(h,_r.EventType.MESSAGE,(v=>{var O;if(!p){const F=v.data[0];Q(!!F,16349);const S=F,G=(S==null?void 0:S.error)||((O=S[0])==null?void 0:O.error);if(G){K(Ze,`RPC '${e}' stream ${r} received error:`,G);const Z=G.status;let le=(function(w){const C=Le[w];if(C!==void 0)return sf(C)})(Z),ae=G.message;Z==="NOT_FOUND"&&ae.includes("database")&&ae.includes("does not exist")&&ae.includes(this.databaseId.database)&&Nt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),le===void 0&&(le=M.INTERNAL,ae="Unknown error status: "+Z+" with message "+G.message),p=!0,g.Vt(new j(le,ae)),h.close()}else K(Ze,`RPC '${e}' stream ${r} received:`,F),g.dt(F)}})),ks.gt(),setTimeout((()=>{g.At()}),0),g}terminate(){this.ft.forEach((e=>e.close())),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter((t=>t===e))}it(e,t,s){super.it(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return vd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(n){return new ks(n)}ks.yt=!1;class _f{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=s,this.Ot=r,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),s=Math.max(0,Date.now()-this.Bt),r=Math.max(0,t-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,r,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WB="PersistentStream";class Df{constructor(e,t,s,r,i,o,a,c){this.Ct=e,this.Kt=s,this.Qt=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new _f(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,(()=>this.tn())))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(rn(t.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.Wt===t&&this.un(s,r)}),(s=>{e((()=>{const r=new j(M.UNKNOWN,"Fetching auth token failed: "+s.message);return this.cn(r)}))}))}un(e,t){const s=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct((()=>{s((()=>this.listener.ct()))})),this.stream.Et((()=>{s((()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,(()=>(this.Yt()&&(this.state=3),Promise.resolve()))),this.listener.Et())))})),this.stream.Tt((r=>{s((()=>this.cn(r)))})),this.stream.onMessage((r=>{s((()=>++this.jt==1?this.hn(r):this.onNext(r)))}))}Zt(){this.state=5,this.Ht.kt((async()=>{this.state=0,this.start()}))}cn(e){return K(WB,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget((()=>this.Wt===e?t():(K(WB,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class N_ extends Df{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=c_(this.serializer,e),s=(function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?$t(o.readTime):ie.min()})(e);return this.listener.Tn(t,s)}Pn(e){const t={};t.database=dl(this.serializer),t.addTarget=(function(i,o){let a;const c=o.target;if(a=es(c)?{pipelineQuery:m_(i,c)}:tf(c)?{documents:h_(i,c)}:{query:d_(i,c).Se},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=uf(i,o.resumeToken);const u=Bl(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=Or(i,o.snapshotVersion.toTimestamp());const u=Bl(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,e);const s=p_(this.serializer,e);s&&(t.labels=s),this.nn(t)}In(e){const t={};t.database=dl(this.serializer),t.removeTarget=e,this.nn(t)}}class k_ extends Df{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=B_(e.writeResults,e.commitTime),s=$t(e.commitTime);return this.listener.dn(s,t)}fn(){const e={};e.database=dl(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>u_(this.serializer,s)))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{}class L_ extends x_{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.mn=!1}pn(){if(this.mn)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,s,r){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.nt(e,hl(t,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(M.UNKNOWN,i.toString())}))}_t(e,t,s,r,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection._t(e,hl(t,s),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(M.UNKNOWN,o.toString())}))}terminate(){this.mn=!0,this.connection.terminate()}}function F_(n,e,t,s){return new L_(n,e,t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="ComponentProvider",YB=new Map;function V_(n,e,t,s,r){return new gE(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ef(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s,r._customHeaders,r.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XB={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vf=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(vf,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.gn(s),this.yn=s=>t.writeSequenceNumber(s))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}Ho.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==U_)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):V.reject(t)}static resolve(e){return new V(((t,s)=>{t(e)}))}static reject(e){return new V(((t,s)=>{s(e)}))}static waitFor(e){return new V(((t,s)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(c=>s(c)))})),o=!0,i===r&&t()}))}static or(e){let t=V.resolve(!1);for(const s of e)t=t.next((r=>r?V.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new V(((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next((h=>{o[u]=h,++a,a===i&&s(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new V(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function H_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qs(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZB="LruGarbageCollector",$_=1048576;function eh([n,e],[t,s]){const r=Be(n,t);return r===0?Be(e,s):r}class q_{constructor(e){this.Yn=e,this.buffer=new Ue(eh),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();eh(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class J_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){K(ZB,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qs(t)?K(ZB,"Ignoring IndexedDB error during garbage collection: ",t):await zs(t)}await this.nr(3e5)}))}}class j_{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Ho.wn);const s=new q_(t);return this.rr.forEachTarget(e,(r=>s.er(r.sequenceNumber))).next((()=>this.rr.sr(e,(r=>s.er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.rr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(XB)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),XB):this._r(e,t)))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r)))).next((f=>(s=f,a=Date.now(),this.removeTargets(e,s,t)))).next((f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((f=>(u=Date.now(),bs()<=he.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f}))))}}function K_(n,e){return new j_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="firestore.googleapis.com",th=!0;class nh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wf,this.ssl=th}else this.host=e.host,this.ssl=e.ssl??th;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=vf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$_)throw new j(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(pE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ef(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new j(M.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(s,r){if(s===r)return!0;if(!s||!r)return!1;const i=Object.keys(s),o=Object.keys(r);if(i.length!==o.length)return!1;for(const a of i)if(s[a]!==r[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}let $o=class{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new D_;switch(s.type){case"firstParty":return new T_(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=YB.get(t);s&&(K(M_,"Removing Datastore"),YB.delete(t),s.terminate())})(this),Promise.resolve()}};function z_(n,e,t,s={}){var u;n=Gt(n,$o);const r=ti(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},a=`${e}:${t}`;r&&Nh(`https://${a}`),i.host!==wf&&i.host!==a&&Nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:r,emulatorOptions:s};if(!us(c,o)&&(n._setSettings(c),s.mockUserToken)){let h,f;if(typeof s.mockUserToken=="string")h=s.mockUserToken,f=et.MOCK_USER;else{h=Bm(s.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new j(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new et(p)}n._authCredentials=new v_(new yf(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ws(this.firestore,e,this._query)}}class Ne{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ai(t,Ne._jsonSchema))return new Ne(e,s||null,new Y(ge.fromString(t.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:Ve("string",Ne._jsonSchemaVersion),referencePath:Ve("string")};class An extends Ws{constructor(e,t,s){super(e,t,Mo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new Y(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function $i(n,e,...t){if(n=Je(n),Od("collection","path",e),n instanceof $o){const s=ge.fromString(e,...t);return AB(s),new An(n,null,s)}{if(!(n instanceof Ne||n instanceof An))throw new j(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return AB(s),new An(n.firestore,null,s)}}function xe(n,e,...t){if(n=Je(n),arguments.length===1&&(e=Ml.newId()),Od("doc","path",e),n instanceof $o){const s=ge.fromString(e,...t);return bB(s),new Ne(n,null,new Y(s))}{if(!(n instanceof Ne||n instanceof An))throw new j(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return bB(s),new Ne(n.firestore,n instanceof An?n.converter:null,new Y(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ai(e,pt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new pt(e.vectorValues);throw new j(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pt._jsonSchemaVersion="firestore/vectorValue/1.0",pt._jsonSchema={type:Ve("string",pt._jsonSchemaVersion),vectorValues:Ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=/^__.*__$/;class W_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ci(e,this.data,t,this.fieldTransforms)}}class If{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:n})}}class zl{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new zl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return _o(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Tf(this.dataSource)&&Q_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Y_{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Uo(e)}createContext(e,t,s,r=!1){return new zl({dataSource:e,methodName:t,targetDoc:s,path:wt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ql(n){const e=n._freezeSettings(),t=Uo(n._databaseId);return new Y_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bf(n,e,t,s,r,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);Wl("Data must be an object, but it was:",o,s);const a=Af(s,o);let c,u;if(i.merge)c=new Dt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=ps(e,f,t);if(!o.contains(p))throw new j(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Of(h,p)||h.push(p)}c=new Dt(h),u=o.fieldTransforms.filter((f=>c.covers(f.field)))}else c=null,u=o.fieldTransforms;return new W_(new ot(a),c,u)}class qo extends Kl{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qo}}function X_(n,e,t,s){const r=n.createContext(1,e,t);Wl("Data must be an object, but it was:",r,s);const i=[],o=ot.empty();Gn(s,((c,u)=>{const h=Rf(e,c,t);u=Je(u);const f=r.childContextForFieldPath(h);if(u instanceof qo)i.push(h);else{const p=xn(u,f);p!=null&&(i.push(h),o.set(h,p))}}));const a=new Dt(i);return new If(o,a,r.fieldTransforms)}function Z_(n,e,t,s,r,i){const o=n.createContext(1,e,t),a=[ps(e,s,t)],c=[r];if(i.length%2!=0)throw new j(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(ps(e,i[p])),c.push(i[p+1]);const u=[],h=ot.empty();for(let p=a.length-1;p>=0;--p)if(!Of(u,a[p])){const g=a[p];let v=c[p];v=Je(v);const O=o.childContextForFieldPath(g);if(v instanceof qo)u.push(g);else{const F=xn(v,O);F!=null&&(u.push(g),h.set(g,F))}}const f=new Dt(u);return new If(h,f,o.fieldTransforms)}function eD(n,e,t,s=!1){return xn(t,n.createContext(s?4:3,e))}function xn(n,e,t){if(Pf(n=Je(n)))return Wl("Unsupported field value:",e,n),Af(n,e);if(n instanceof Kl)return(function(r,i){if(!Tf(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const c of r){let u=xn(c,i.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,i,o){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Ce.fromDate(r);return{timestampValue:Or(i.serializer,a)}}if(r instanceof Ce){const a=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Or(i.serializer,a)}}if(Sf(r)){const a=Ce.fromInstant(r),c=new Ce(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Or(i.serializer,c)}}if(r instanceof qt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:uf(i.serializer,r._byteString)};if(r instanceof Ne){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:jl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pt)return(function(c,u){const h=c instanceof pt?c.toArray():c;return{mapValue:{fields:{[Md]:{stringValue:Vd},[Vr]:{arrayValue:{values:h.map((p=>{if(typeof p!="number")throw u.createError("VectorValues must only contain numeric values.");return ko(u.serializer,p)}))}}}}}})(r,i);if(gf(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Ro(r)}`)})(n,e)}function Af(n,e){const t={};return Rd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,((s,r)=>{const i=xn(r,e.childContextForField(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Sf(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function Pf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof qt||n instanceof At||n instanceof Ne||n instanceof Kl||n instanceof pt||Sf(n)||gf(n))}function Wl(n,e,t){if(!Pf(t)||!oi(t)){const s=Ro(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function ps(n,e,t){if((e=Je(e))instanceof Go)return e._internalPath;if(typeof e=="string")return Rf(n,e);throw _o("Field path arguments must be of type string or ",n,!1,void 0,t)}const tD=new RegExp("[~\\*/\\[\\]]");function Rf(n,e,t){if(e.search(tD)>=0)throw _o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Go(...e.split("."))._internalPath}catch{throw _o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _o(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new j(M.INVALID_ARGUMENT,a+n+c)}function Of(n,e){return n.some((t=>t.isEqual(e)))}function nD(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const s=ot.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let a;i.nestedOptions&&oi(o)?a={mapValue:{fields:new st(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=xn(o,t)??void 0),a&&s.set(wt.fromServerFormat(i.serverName),a)}}return s}getOptionsProto(e,t,s){const r=this._getKnownOptions(t,e);if(s){const i=new Map(fE(s,((o,a)=>[wt.fromServerFormat(a),o!==void 0?xn(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!oi(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function rD(n){return new pt(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n){let e;return n instanceof Cs?n:(e=oi(n)?uD(n):n instanceof Array?BD(n):Nf(n,void 0),e)}function Va(n){if(n instanceof Cs)return n;if(n instanceof pt)return jr(n);if(Array.isArray(n))return jr(rD(n));throw new Error("Unsupported value: "+typeof n)}function Yl(n){return EE(n)?aD(n):q(n)}class Cs{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,q(e)],"add")}asBoolean(){if(this instanceof Ln)return this;if(this instanceof Ys)return new xf(this);if(this instanceof di)return new cD(this);if(this instanceof L)return new kf(this);throw new j("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,q(e)],"subtract")}multiply(e){return new L("multiply",[this,q(e)],"multiply")}divide(e){return new L("divide",[this,q(e)],"divide")}mod(e){return new L("mod",[this,q(e)],"mod")}equal(e){return new L("equal",[this,q(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,q(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,q(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,q(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,q(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,q(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const s=[e,...t].map((r=>q(r)));return new L("array_concat",[this,...s],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,q(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new vr(e.map(q),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new vr(e.map(q),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new vr(e.map(q),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new vr(e.map(q),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,q(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,q(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,q(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,q(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,q(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,q(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,q(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,q(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(q(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(q(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(q(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,jr(e)],"isType").asBoolean()}stringConcat(e,...t){const s=[e,...t].map(q);return new L("string_concat",[this,...s],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,q(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,q(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,q(e),q(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,q(e),q(t)],"stringReplaceOne")}concat(e,...t){const s=[e,...t].map(q);return new L("concat",[this,...s],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,q(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,q(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,s){return new L("array_transform",[this,q(e),q(t),s],"arrayTransformWithIndex")}arraySlice(e,t){const s=[this,q(e)];return t!==void 0&&s.push(q(t)),new L("array_slice",s,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,q(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,q(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,q(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,q(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,q(e),q("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,q(e),q("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,q(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,jr(e)],"mapGet")}mapSet(e,t,...s){const r=[this,q(e),q(t),...s.map(q)];return new L("map_set",r,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,q(e)],"get_field")}count(){return _t._create("count",[this],"count")}sum(){return _t._create("sum",[this],"sum")}average(){return _t._create("average",[this],"average")}minimum(){return _t._create("minimum",[this],"minimum")}maximum(){return _t._create("maximum",[this],"maximum")}first(){return _t._create("first",[this],"first")}last(){return _t._create("last",[this],"last")}arrayAgg(){return _t._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return _t._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return _t._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const s=[e,...t];return new L("maximum",[this,...s.map(q)],"logicalMaximum")}logicalMinimum(e,...t){const s=[e,...t];return new L("minimum",[this,...s.map(q)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,Va(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,Va(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,Va(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,q(e),q(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,q(e),q(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,Yl(e),q(t)],"timestampDiff")}timestampExtract(e,t){const s=[this,q(e)];return t&&s.push(q(t)),new L("timestamp_extract",s,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const s=q(e);return new L("substring",t===void 0?[this,s]:[this,s,q(t)],"substring")}arrayGet(e){return new L("array_get",[this,q(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,q(e)],"ifError");return e instanceof Ln?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,q(e)],"mapRemove")}mapMerge(e,...t){const s=q(e),r=t.map(q);return new L("map_merge",[this,s,...r],"mapMerge")}pow(e){return new L("pow",[this,q(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,q(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,q(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,q(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,q(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,q(e),...t.map(q)],"coalesce")}join(e){return new L("join",[this,q(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,q(e)])}timestampTruncate(e,t){const s=[this,q(e)];return t&&s.push(q(t)),new L("timestamp_trunc",s)}ascending(){return hD(this)}descending(){return dD(this)}as(e){return new oD(this,e,"as")}}class _t{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,s){const r=new _t(e,t);return r._methodName=s,r}as(e){return new iD(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class iD{constructor(e,t,s){this.aggregate=e,this.alias=t,this._methodName=s}_readUserData(e){this.aggregate._readUserData(e)}}class oD{constructor(e,t,s){this.expr=e,this.alias=t,this._methodName=s,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class vr extends Cs{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class di extends Cs{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,q(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function aD(n){return lD(n,"field")}function lD(n,e){return new di(typeof n=="string"?Vs===n?__()._internalPath:ps("field",n):n._internalPath,e)}class Ys extends Cs{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Ys(e,void 0);return t._protoValue=e,t}_toProto(e){return Q(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,sD(this._protoValue)||(this._protoValue=xn(this.value,e))}}function jr(n,e){return Nf(n,"constant")}function Nf(n,e){const t=new Ys(n,e);return typeof n=="boolean"?new xf(t):t}class L extends Cs{constructor(e,t,s,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,s!==void 0&&(this._methodName=s),r!==void 0&&(this._options=r)}get _optionsUtil(){return new st({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((s=>s._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Ln extends Cs{get _methodName(){return this._expr._methodName}countIf(){return _t._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=q(e),s=new L("if_error",[this,t],"ifError");return t instanceof Ln?s.asBoolean():s}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class kf extends Ln{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class xf extends Ln{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class cD extends Ln{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function uD(n,e){const t=[];for(const s in n)if(Object.prototype.hasOwnProperty.call(n,s)){const r=n[s];t.push(jr(s)),t.push(q(r))}return new L("map",t,"map")}function BD(n){return(function(t,s){return new L("array",t.map((r=>q(r))),s)})(n,"array")}function hD(n){return new Lf(Yl(n),"ascending","ascending")}function dD(n){return new Lf(Yl(n),"descending","descending")}class Lf{constructor(e,t,s){this.expr=e,this.direction=t,this._methodName=s,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Cf(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Ff extends Tt{get _name(){return"add_fields"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Jr(e,this.fields)]}}_readUserData(e){super._readUserData(e),Fn(this.fields,e)}}class Mf extends Tt{get _name(){return"aggregate"}get _optionsUtil(){return new st({})}constructor(e,t,s){super(s),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Jr(e,this.accumulators),Jr(e,this.groups)]}}_readUserData(e){super._readUserData(e),Fn(this.groups,e),Fn(this.accumulators,e)}}class Vf extends Tt{get _name(){return"distinct"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Jr(e,this.groups)]}}_readUserData(e){super._readUserData(e),Fn(this.groups,e)}}class Jo extends Tt{get _name(){return"collection"}get _optionsUtil(){return new st({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class jo extends Tt{get _name(){return"collection_group"}get _optionsUtil(){return new st({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Xl extends Tt{get _name(){return"database"}get _optionsUtil(){return new st({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Zl extends Tt{get _name(){return"documents"}get _optionsUtil(){return new st({})}constructor(e,t){if(super(t),!e||e.length===0)throw new j(M.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const s=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(s);if(r.size!==s.length)throw new j(M.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=s,this.Pr=r}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class ec extends Tt{get _name(){return"where"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Fn(this.condition,e)}}class Kr extends Tt{get _name(){return"limit"}get _optionsUtil(){return new st({})}constructor(e,t){Q(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Gl(e,this.limit)]}}}class sh extends Tt{get _name(){return"offset"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Gl(e,this.offset)]}}}class fD extends Tt{get _name(){return"select"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Jr(e,this.selections)]}}_readUserData(e){super._readUserData(e),Fn(this.selections,e)}}class tc extends Tt{get _name(){return"sort"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Fn(this.orderings,e)}}class nc extends Tt{get _name(){return"replace_with"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Cf(nc.Ir)]}}_readUserData(e){super._readUserData(e),Fn(this.map,e)}}nc.Ir="full_replace";function Fn(n,e){return nD(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}// Copyright 2024 Google LLC* @license
class dt{constructor(e,t,s){this.serializer=e,this.stages=t,this.listenOptions=s,this.isCorePipeline=!0}getPipelineCollection(){return Ko(this)}getPipelineCollectionGroup(){return sc(this)}getPipelineCollectionId(){return pD(this)}getPipelineDocuments(){return pl(this)}getPipelineFlavor(){return(function(t){let s="exact";return t.stages.forEach(((r,i)=>{r._name!==Vf.name&&r._name!==Mf.name||(s="keyless"),r._name===fD.name&&s==="exact"&&(s="augmented"),r._name===Ff.name&&i<t.stages.length-1&&s==="exact"&&(s="augmented")})),s})(this)}getPipelineSourceType(){return Sn(this)}}function Sn(n){const e=n.stages[0];return e instanceof Jo||e instanceof jo||e instanceof Xl||e instanceof Zl?e._name:"unknown"}function Ko(n){if(Sn(n)==="collection")return n.stages[0].hr}function sc(n){if(Sn(n)==="collection_group")return n.stages[0].collectionId}function pD(n){switch(Sn(n)){case"collection":return ge.fromString(Ko(n)).lastSegment();case"collection_group":return sc(n);default:return}}function pl(n){if(Sn(n)==="documents")return n.stages[0].Tr}class T{constructor(e,t){this.type=e,this.value=t}static mr(){return new T("ERROR",void 0)}static pr(){return new T("UNSET",void 0)}static gr(){return new T("NULL",Gs)}static newValue(e){return vt(e)?new T("NULL",Gs):(function(s){return!!s&&"booleanValue"in s})(e)?new T("BOOLEAN",e):Mt(e)?new T("INT",e):ss(e)?new T("DOUBLE",e):(function(s){return!!s&&"timestampValue"in s&&!!s.timestampValue})(e)?new T("TIMESTAMP",e):(function(s){return!!s&&"stringValue"in s})(e)?new T("STRING",e):(function(s){return!!s&&"bytesValue"in s})(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):$s(e)?new T("ARRAY",e):ho(e)?new T("VECTOR",e):as(e)?new T("MAP",e):new T("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Nr(n){if(!n.yr())return n.value}function Uf(n){return n instanceof Ln?n._expr:n}function te(n){if((n=Uf(n))instanceof di)return new mD(n);if(n instanceof Ys)return new gD(n);if(n instanceof vr)return new CD(n);if(n instanceof L){if(n.name==="add")return new _D(n);if(n.name==="subtract")return new DD(n);if(n.name==="multiply")return new vD(n);if(n.name==="divide")return new wD(n);if(n.name==="mod")return new ID(n);if(n.name==="and")return new TD(n);if(n.name==="equal")return new MD(n);if(n.name==="not_equal")return new VD(n);if(n.name==="less_than")return new UD(n);if(n.name==="less_than_or_equal")return new GD(n);if(n.name==="greater_than")return new HD(n);if(n.name==="greater_than_or_equal")return new $D(n);if(n.name==="array_concat")return new qD(n);if(n.name==="array_reverse")return new JD(n);if(n.name==="array_contains")return new jD(n);if(n.name==="array_contains_all")return new KD(n);if(n.name==="array_contains_any")return new zD(n);if(n.name==="array_length")return new QD(n);if(n.name==="array_element")return new WD(n);if(n.name==="equal_any")return new Gf(n);if(n.name==="not_equal_any")return new AD(n);if(n.name==="is_nan")return new SD(n);if(n.name==="is_not_nan")return new PD(n);if(n.name==="is_null")return new RD(n);if(n.name==="is_not_null")return new OD(n);if(n.name==="is_error")return new ND(n);if(n.name==="exists")return new kD(n);if(n.name==="not")return new zo(n);if(n.name==="or")return new bD(n);if(n.name==="xor")return new rc(n);if(n.name==="conditional")return new xD(n);if(n.name==="maximum")return new LD(n);if(n.name==="minimum")return new FD(n);if(n.name==="reverse")return new YD(n);if(n.name==="replace_first")return new XD(n);if(n.name==="replace_all")return new ZD(n);if(n.name==="char_length")return new ev(n);if(n.name==="byte_length")return new tv(n);if(n.name==="like")return new nv(n);if(n.name==="regex_contains")return new sv(n);if(n.name==="regex_match")return new rv(n);if(n.name==="string_contains")return new iv(n);if(n.name==="starts_with")return new ov(n);if(n.name==="ends_with")return new av(n);if(n.name==="to_lower")return new lv(n);if(n.name==="to_upper")return new cv(n);if(n.name==="trim")return new uv(n);if(n.name==="string_concat")return new Bv(n);if(n.name==="map_get")return new hv(n);if(n.name==="cosine_distance")return new dv(n);if(n.name==="dot_product")return new fv(n);if(n.name==="euclidean_distance")return new pv(n);if(n.name==="vector_length")return new mv(n);if(n.name==="unix_micros_to_timestamp")return new _v(n);if(n.name==="timestamp_to_unix_micros")return new wv(n);if(n.name==="unix_millis_to_timestamp")return new Dv(n);if(n.name==="timestamp_to_unix_millis")return new Iv(n);if(n.name==="unix_seconds_to_timestamp")return new vv(n);if(n.name==="timestamp_to_unix_seconds")return new Tv(n);if(n.name==="timestamp_add")return new bv(n);if(n.name==="timestamp_subtract")return new Av(n)}throw new Error(`Unknown Expr : ${n}`)}class mD{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Vs)return T.newValue({referenceValue:Eo(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:eo(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:eo(e.serializer,t.createTime)});const s=t.data.field(this.expr._fieldPath);return s?Oo(s)?T.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:eo(i.serializer,ie.fromTimestamp(Us(o)))};if(i.serverTimestampBehavior==="previous"){const a=li(o);if(a)return a}return{nullValue:"NULL_VALUE"}})(e,s)):T.newValue(s):T.pr()}}class gD{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class CD{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.cr.map((r=>te(r).evaluate(e,t)));return s.some((r=>r.yr()))?T.mr():T.newValue({arrayValue:{values:s.map((r=>r.value))}})}}function Ye(n){return ss(n)?Number(n.doubleValue):Number(n.integerValue)}function jt(n){return BigInt(n.integerValue)}const yD=BigInt("0x7fffffffffffffff"),ED=-BigInt("0x8000000000000000");class fi{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length>=2,24778);const s=te(this.expr.params[0]).evaluate(e,t),r=te(this.expr.params[1]).evaluate(e,t);let i=this.br(s,r);for(const o of this.expr.params.slice(2)){const a=te(o).evaluate(e,t);i=this.br(i,a)}return i}br(e,t){if(e.yr()||t.yr())return T.mr();if(e.wr()||t.wr())return T.gr();const s=e.value,r=t.value;if(!ss(s)&&!Mt(s)||!ss(r)&&!Mt(r))return T.mr();if(ss(s)||ss(r)){const i=this.Sr(s,r);return i?T.newValue(i):T.mr()}if(Mt(s)&&Mt(r)){const i=this.vr(s,r);return i===void 0?T.mr():typeof i=="number"?T.newValue({doubleValue:i}):i<ED||i>yD?T.mr():T.newValue({integerValue:`${i}`})}return T.mr()}}function on(n,e){return He(n)!==He(e)?"TYPE_MISMATCH":Ct(n)||Ct(e)?"NOT_EQ":vt(n)&&vt(e)?"EQ":vt(n)||vt(e)?"NULL":$s(n)&&$s(e)?(function(s,r){var o,a,c;if(((o=s.values)==null?void 0:o.length)!==((a=r.values)==null?void 0:a.length))return"NOT_EQ";let i=!1;for(let u=0;u<(((c=s.values)==null?void 0:c.length)??0);u++){const h=s.values[u],f=r.values[u];switch(on(h,f)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:ee(44609,{Dr:h,Cr:f})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):ho(n)&&ho(e)||as(n)&&as(e)?(function(s,r){const i=s.fields||{},o=r.fields||{};if(uo(i)!==uo(o))return"NOT_EQ";let a=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(on(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(s,r){return St(s,r,{u:!1,i:!0,o:!0})})(n,e)?"EQ":"NOT_EQ"}class _D extends fi{vr(e,t){return jt(e)+jt(t)}Sr(e,t){return{doubleValue:Ye(e)+Ye(t)}}}class DD extends fi{constructor(e){super(e),this.expr=e}vr(e,t){return jt(e)-jt(t)}Sr(e,t){return{doubleValue:Ye(e)-Ye(t)}}}class vD extends fi{constructor(e){super(e),this.expr=e}vr(e,t){return jt(e)*jt(t)}Sr(e,t){return{doubleValue:Ye(e)*Ye(t)}}}class wD extends fi{constructor(e){super(e),this.expr=e}vr(e,t){const s=jt(t);if(s!==BigInt(0))return jt(e)/s}Sr(e,t){const s=Ye(t);return s===0?{doubleValue:Mr(s)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ye(e)/s}}}class ID extends fi{constructor(e){super(e),this.expr=e}vr(e,t){const s=jt(t);if(s!==BigInt(0))return jt(e)%s}Sr(e,t){const s=Ye(t);if(s!==0)return{doubleValue:Ye(e)%s}}}class TD{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const o of this.expr.params){const a=te(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!((i=a.value)!=null&&i.booleanValue))return T.newValue(Qe);break;case"NULL":r=!0;break;default:s=!0}}return s?T.mr():r?T.gr():T.newValue(mt)}}class zo{constructor(e){this.expr=e}evaluate(e,t){var r;Q(this.expr.params.length===1,9634);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return T.newValue({booleanValue:!((r=s.value)!=null&&r.booleanValue)});case"NULL":return T.gr();default:return T.mr()}}}class bD{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const o of this.expr.params){const a=te(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if((i=a.value)!=null&&i.booleanValue)return T.newValue(mt);break;case"NULL":r=!0;break;default:s=!0}}return s?T.mr():r?T.gr():T.newValue(Qe)}}class rc{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const o of this.expr.params){const a=te(o).evaluate(e,t);switch(a.type){case"BOOLEAN":s=rc.xor(s,!!((i=a.value)!=null&&i.booleanValue));break;case"NULL":r=!0;break;default:return T.mr()}}return r?T.gr():T.newValue({booleanValue:s})}static xor(e,t){return(e||t)&&!(e&&t)}}class Gf{constructor(e){this.expr=e}evaluate(e,t){var o,a;Q(this.expr.params.length===2,55094);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":s=!0;break;case"ERROR":case"UNSET":return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.mr()}if(s)return T.gr();for(const c of((a=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:a.values)??[])switch(vt(r.value)&&vt(c)?"EQ":on(r.value,c)){case"EQ":return T.newValue(mt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:ee(44608,{value:r.value,candidate:c})}return s?T.gr():T.newValue(Qe)}}class AD{constructor(e){this.expr=e}evaluate(e,t){return new zo(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class SD{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,23322);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return T.newValue(Qe);case"DOUBLE":return T.newValue({booleanValue:isNaN(Ye(s.value))});case"NULL":return T.gr();default:return T.mr()}}}class PD{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,50406),new zo(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class RD{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,23123),te(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(mt);case"UNSET":case"ERROR":return T.mr();default:return T.newValue(Qe)}}}class OD{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,23167),new zo(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class ND{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,5228),te(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(mt):T.newValue(Qe)}}class kD{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,6877),te(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.mr();case"UNSET":return T.newValue(Qe);default:return T.newValue(mt)}}}class xD{constructor(e){this.expr=e}evaluate(e,t){var r;Q(this.expr.params.length===3,11706);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return(r=s.value)!=null&&r.booleanValue?te(this.expr.params[1]).evaluate(e,t):te(this.expr.params[2]).evaluate(e,t);case"NULL":return te(this.expr.params[2]).evaluate(e,t);default:return T.mr()}}}class LD{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>te(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||gt(i.value,r.value)>0?i:r}return r===void 0?T.gr():r}}class FD{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>te(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||gt(i.value,r.value)<0?i:r}return r===void 0?T.gr():r}}class Xs{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return T.mr()}const r=te(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return T.mr()}return this.Fr(s,r)}}class MD extends Xs{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return T.newValue(mt);if(e.wr()||t.wr()||Ct(e.value)||Ct(t.value)||He(e.value)!==He(t.value))return T.newValue(Qe);switch(on(e.value,t.value)){case"EQ":return T.newValue(mt);case"NOT_EQ":return T.newValue(Qe);case"NULL":return T.gr();default:ee(44615,{left:e,right:t})}}}class VD extends Xs{constructor(e){super(e),this.expr=e}Fr(e,t){switch(on(e.value,t.value)){case"EQ":return T.newValue(Qe);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(mt);case"NULL":return T.gr();default:ee(44614,{left:e,right:t})}}}class UD extends Xs{constructor(e){super(e),this.expr=e}Fr(e,t){return He(e.value)!==He(t.value)||Ct(e.value)||Ct(t.value)?T.newValue(Qe):T.newValue({booleanValue:gt(e.value,t.value)<0})}}class GD extends Xs{constructor(e){super(e),this.expr=e}Fr(e,t){return He(e.value)!==He(t.value)||Ct(e.value)||Ct(t.value)?T.newValue(Qe):on(e.value,t.value)==="EQ"?T.newValue(mt):T.newValue({booleanValue:gt(e.value,t.value)<0})}}class HD extends Xs{constructor(e){super(e),this.expr=e}Fr(e,t){return He(e.value)!==He(t.value)||Ct(e.value)||Ct(t.value)?T.newValue(Qe):T.newValue({booleanValue:gt(e.value,t.value)>0})}}class $D extends Xs{constructor(e){super(e),this.expr=e}Fr(e,t){return He(e.value)!==He(t.value)||Ct(e.value)||Ct(t.value)?T.newValue(Qe):on(e.value,t.value)==="EQ"?T.newValue(mt):T.newValue({booleanValue:gt(e.value,t.value)>0})}}class qD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class JD{constructor(e){this.expr=e}evaluate(e,t){var r;Q(this.expr.params.length===1,216);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return T.gr();case"ARRAY":{const i=((r=s.value.arrayValue)==null?void 0:r.values)??[];return T.newValue({arrayValue:{values:[...i].reverse()}})}default:return T.mr()}}}class jD{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===2,52884),new Gf(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class KD{constructor(e){this.expr=e}evaluate(e,t){var c,u,h,f;Q(this.expr.params.length===2,1392);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.mr()}if(s)return T.gr();const o=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],a=((f=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const p of o){let g=!1;s=!1;for(const v of a){switch(vt(p)&&vt(v)?"EQ":on(p,v)){case"EQ":g=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:ee(44613,{value:v,search:p})}if(g)break}if(!g)return T.newValue(Qe)}return T.newValue(mt)}}class zD{constructor(e){this.expr=e}evaluate(e,t){var c,u,h,f;Q(this.expr.params.length===2,2680);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return T.mr()}if(s)return T.gr();const o=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],a=((f=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const p of a)for(const g of o)switch(vt(p)&&vt(g)?"EQ":on(p,g)){case"EQ":return T.newValue(mt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:ee(60403,{value:p,search:g})}return s?T.gr():T.newValue(Qe)}}class QD{constructor(e){this.expr=e}evaluate(e,t){var r,i,o;Q(this.expr.params.length===1,38605);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return T.gr();case"ARRAY":return T.newValue({integerValue:`${((o=(i=(r=s.value)==null?void 0:r.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return T.mr()}}}class WD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class YD{constructor(e){this.expr=e}evaluate(e,t){var r,i;Q(this.expr.params.length===1,1508);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return T.gr();case"BYTES":{const o=(r=s.value)==null?void 0:r.bytesValue;if(typeof o=="string"){const a=Ge.fromBase64String(o).toUint8Array();return a.reverse(),T.newValue({bytesValue:Ge.fromUint8Array(a).toBase64()})}return T.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=s.value)==null?void 0:i.stringValue,a=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),c=Array.from(a,(u=>u.segment)).reverse();return T.newValue({stringValue:c.join("")})}default:return T.mr()}}}class XD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class ZD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class ev{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,19400);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return T.gr();case"STRING":{const r=(function(o){let a=0;for(let c=0;c<o.length;c++){const u=o.codePointAt(c);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const h=o.codePointAt(c+1);h!==void 0&&h>=56320&&h<=57343?(a+=1,c++):a+=1}else a+=1;else a+=1;else{if(!(u<=1114111))return;a+=1,c++}}return a})(s.value.stringValue);return r===void 0?T.mr():T.newValue({integerValue:r})}default:return T.mr()}}}class tv{constructor(e){this.expr=e}evaluate(e,t){var r,i;Q(this.expr.params.length===1,8486);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BYTES":{const o=(r=s.value)==null?void 0:r.bytesValue;return typeof o=="string"?T.newValue({integerValue:Ge.fromBase64String(o).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(c){let u=0;for(let h=0;h<c.length;h++){const f=c.codePointAt(h);if(f===void 0)return;if(f>=55296&&f<=57343){if(!(f<=56319))return;{const p=c.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;u+=4,h++}}else if(f<=127)u+=1;else if(f<=2047)u+=2;else if(f<=65535)u+=3;else{if(!(f<=1114111))return;u+=4,h++}}return u})((i=s.value)==null?void 0:i.stringValue);return o===void 0?T.mr():T.newValue({integerValue:o})}case"NULL":return T.gr();default:return T.mr()}}}class Zs{constructor(e){this.expr=e}evaluate(e,t){var o,a;Q(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":s=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":s=!0;break;default:return T.mr()}return s?T.gr():this.Or((o=r.value)==null?void 0:o.stringValue,(a=i.value)==null?void 0:a.stringValue)}}class nv extends Zs{Or(e,t){try{const s=(function(o){let a="";for(let c=0;c<o.length;c++){const u=o.charAt(c);switch(u){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+u;break;default:a+=u}}return"^"+a+"$"})(t),r=Ll.compile(s);return T.newValue({booleanValue:r.matches(e)})}catch(s){return Nt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${s}`),T.mr()}}}class sv extends Zs{Or(e,t){try{const s=Ll.compile(t);return T.newValue({booleanValue:s.test(e)})}catch{return Nt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.mr()}}}class rv extends Zs{Or(e,t){try{return T.newValue({booleanValue:Ll.compile(t).matches(e)})}catch{return Nt(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.mr()}}}class iv extends Zs{Or(e,t){return T.newValue({booleanValue:e.includes(t)})}}class ov extends Zs{Or(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class av extends Zs{Or(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class lv{constructor(e){this.expr=e}evaluate(e,t){var r,i;Q(this.expr.params.length===1,29079);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return T.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return T.gr();default:return T.mr()}}}class cv{constructor(e){this.expr=e}evaluate(e,t){var r,i;Q(this.expr.params.length===1,60487);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return T.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return T.gr();default:return T.mr()}}}class uv{constructor(e){this.expr=e}evaluate(e,t){var r,i;Q(this.expr.params.length===1,28544);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return T.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.trim()});case"NULL":return T.gr();default:return T.mr()}}}class Bv{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((o=>te(o).evaluate(e,t)));let r="",i=!1;for(const o of s)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return T.mr()}return i?T.gr():T.newValue({stringValue:r})}}class hv{constructor(e){this.expr=e}evaluate(e,t){var o,a,c,u;Q(this.expr.params.length===2,4483);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"UNSET":return T.pr();case"MAP":break;default:return T.mr()}const r=te(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return T.mr();const i=(u=(a=(o=s.value)==null?void 0:o.mapValue)==null?void 0:a.fields)==null?void 0:u[(c=r.value)==null?void 0:c.stringValue];return i===void 0?T.pr():T.newValue(i)}}class ic{constructor(e){this.expr=e}evaluate(e,t){var u,h;Q(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":s=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":s=!0;break;default:return T.mr()}if(s)return T.gr();const o=al(r.value),a=al(i.value);if(o===void 0||a===void 0||((u=o.values)==null?void 0:u.length)!==((h=a.values)==null?void 0:h.length))return T.mr();const c=this.Mr(o,a);return c===void 0||isNaN(c)?T.mr():T.newValue({doubleValue:c})}}class dv extends ic{Mr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return;let i=0,o=0,a=0;for(let u=0;u<s.length;u++){if(!Nn(s[u])||!Nn(r[u]))return;const h=Ye(s[u]),f=Ye(r[u]);i+=h*f,o+=h*h,a+=f*f}const c=Math.sqrt(o)*Math.sqrt(a);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class fv extends ic{Mr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return 0;let i=0;for(let o=0;o<s.length;o++){if(!Nn(s[o])||!Nn(r[o]))return;i+=Ye(s[o])*Ye(r[o])}return i}}class pv extends ic{Mr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return 0;let i=0;for(let o=0;o<s.length;o++){if(!Nn(s[o])||!Nn(r[o]))return;const a=Ye(s[o]),c=Ye(r[o]);i+=Math.pow(a-c,2)}return Math.sqrt(i)}}class mv{constructor(e){this.expr=e}evaluate(e,t){var r;Q(this.expr.params.length===1,39044);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":{const i=al(s.value);return T.newValue({integerValue:((r=i==null?void 0:i.values)==null?void 0:r.length)??0})}case"NULL":return T.gr();default:return T.mr()}}}const zr=BigInt(-62135596800),Qr=BigInt(253402300799),Do=BigInt(1e3),Pn=BigInt(1e6),gv=zr*Do,Cv=Qr*Do+BigInt(999),yv=zr*Pn,Ev=Qr*Pn+BigInt(999999);function oc(n){return n>=yv&&n<=Ev}function Hf(n){return n>=zr&&n<=Qr}function Wr(n,e){const t=BigInt(n);return!(t<zr||t>Qr)&&!(e<0||e>=1e9)&&(t!==zr||e===0)&&!(t===Qr&&e>999999999)}function $f(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function ac(n){return BigInt(n.seconds)*Pn+BigInt(Math.trunc(n.nanoseconds/1e3))}class lc{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return this.toTimestamp(BigInt(s.value.integerValue));case"NULL":return T.gr();default:return T.mr()}}}class _v extends lc{toTimestamp(e){if(!oc(e))return T.mr();let t=Number(e/Pn),s=Number(e%Pn*BigInt(1e3));const r=$f(t,s);return t=r.seconds,s=r.nanos,Wr(t,s)?T.newValue({timestampValue:{seconds:t,nanos:s}}):T.mr()}}class Dv extends lc{toTimestamp(e){if(!(function(o){return o>=gv&&o<=Cv})(e))return T.mr();let t=Number(e/Do),s=Number(e%Do*BigInt(1e6));const r=$f(t,s);return t=r.seconds,s=r.nanos,Wr(t,s)?T.newValue({timestampValue:{seconds:t,nanos:s}}):T.mr()}}class vv extends lc{toTimestamp(e){if(!Hf(e))return T.mr();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class cc{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":return T.gr();default:return T.mr()}const r=Jl(s.value.timestampValue);return Wr(r.seconds,r.nanoseconds)?this.Nr(r):T.mr()}}class wv extends cc{Nr(e){const t=ac(e);return oc(t)?T.newValue({integerValue:`${t.toString()}`}):T.mr()}}class Iv extends cc{Nr(e){const t=ac(e),s=t/BigInt(1e3),r=t%BigInt(1e3);return s>BigInt(0)||r===BigInt(0)?T.newValue({integerValue:s.toString()}):T.newValue({integerValue:(s-BigInt(1)).toString()})}}class Tv extends cc{Nr(e){const t=BigInt(e.seconds);return Hf(t)?T.newValue({integerValue:t.toString()}):T.mr()}}class qf{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let s=!1;const r=te(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":s=!0;break;default:return T.mr()}const i=te(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(G){switch(G){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return T.mr();break;case"NULL":s=!0;break;default:return T.mr()}const a=te(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":s=!0;break;default:return T.mr()}if(s)return T.gr();const c=BigInt(a.value.integerValue);let u;try{switch(o){case"microsecond":u=c;break;case"millisecond":u=c*BigInt(1e3);break;case"second":u=c*BigInt(1e6);break;case"minute":u=c*BigInt(6e7);break;case"hour":u=c*BigInt(36e8);break;case"day":u=c*BigInt(864e8);break;default:return T.mr()}if(o!=="microsecond"&&c!==BigInt(0)&&u/c!==BigInt(this.Lr(o)))return T.mr()}catch(S){return Nt(`Error during timestamp arithmetic: ${S}`),T.mr()}const h=Jl(r.value.timestampValue);if(!Wr(h.seconds,h.nanoseconds))return T.mr();const f=ac(h),p=this.Br(f,u);if(!oc(p))return T.mr();const g=Number(p/Pn),v=p%Pn,O=Number((v<0?v+Pn:v)*BigInt(1e3)),F=v<0?g-1:g;return Wr(F,O)?T.newValue({timestampValue:{seconds:F,nanos:O}}):T.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class bv extends qf{Br(e,t){return e+t}}class Av extends qf{Br(e,t){return e-t}}function Yr(n){if((n=Uf(n))instanceof di)return`fld(${n.fieldName})`;if(n instanceof Ys)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ne?`ref(${t.path})`:t instanceof pt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof L)return`fn(${n.name},[${n.params.map(Yr).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.cr.map(Yr).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function Sv(n){if(n instanceof Ff)return`${n._name}(${qi(n.fields)})`;if(n instanceof Mf){let e=`${n._name}(${qi(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${qi(n.groups)})`),e}if(n instanceof Vf)return`${n._name}(${qi(n.groups)})`;if(n instanceof Jo)return`${n._name}(${n.hr})`;if(n instanceof jo)return`${n._name}(${n.collectionId})`;if(n instanceof Xl)return`${n._name}()`;if(n instanceof Zl)return`${n._name}(${n.Tr.sort()})`;if(n instanceof ec)return`${n._name}(${Yr(n.condition)})`;if(n instanceof Kr)return`${n._name}(${n.limit})`;if(n instanceof tc)return`${n._name}(${(function(t){return t.map((s=>`${Yr(s.expr)}${s.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function qi(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${Yr(t)}`)).join(",")}`}function tn(n){return n.stages.map((e=>Sv(e))).join("|")}function Jf(n,e){return tn(n)===tn(e)}function qe(n){return n instanceof dt}function rh(n){return qe(n)?tn(n):Pr(n)}function jf(n){return qe(n)?tn(n):(function(t){return`${Zd(Ht(t))}|lt:${t.limitType}`})(n)}function Qo(n,e){return n instanceof dt&&e instanceof dt?Jf(n,e):!(n instanceof dt&&!(e instanceof dt)||!(n instanceof dt)&&e instanceof dt)&&jE(n,e)}function Kf(n){return es(n)?tn(n):Zd(n)}function zf(n,e){return n instanceof dt&&e instanceof dt?Jf(n,e):!(n instanceof dt&&!(e instanceof dt)||!(n instanceof dt)&&e instanceof dt)&&ef(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&bE(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ar(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ar(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=af();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=Jd(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ie.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ue())}isEqual(e){return this.batchId===e.batchId&&Ms(this.mutations,e.mutations,((t,s)=>xB(t,s)))&&Ms(this.baseMutations,e.baseMutations,((t,s)=>xB(t,s)))}}class uc{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Q(e.mutations.length===s.length,58842,{Ur:e.mutations.length,kr:s.length});let r=(function(){return YE})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new uc(e,t,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="";function Rv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ih(e)),e=Ov(n.get(t),e);return ih(e)}function Ov(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Qf:t+="";break;default:t+=i}}return t}function ih(n){return n+Qf+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,s,r,i=ie.min(),o=ie.min(),a=Ge.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new en(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.$r=e}}function xv(n){const e=f_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ul(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.Zi=new Fv}addToCollectionParentIndex(e,t){return this.Zi.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(kn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(kn.min())}updateCollectionGroup(e,t,s){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Fv{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ue(ge.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ue(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new Mn(0)}static bs(){return new Mn(-1)}}// Copyright 2024 Google LLC* @license
function Wf(n,e){var s;let t=e;for(const r of n.stages)t=Vv({serializer:n.serializer,serverTimestampBehavior:(s=n.listenOptions)==null?void 0:s.serverTimestampBehavior},r,t);return t}function Wo(n,e){return Wf(n,[e]).length>0}function Mv(n,e){return qe(n)?Wo(n,e):Vo(n,e)}function Vv(n,e,t){if(e instanceof Jo)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.hr))})(0,e,t);if(e instanceof ec)return(function(r,i,o){return o.filter((a=>{const c=Nr(te(i.condition).evaluate(r,a));return c!==void 0&&St(c,mt)}))})(n,e,t);if(e instanceof jo)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof Xl)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()))})(0,0,t);if(e instanceof Zl)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&i.Pr.has(a.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Kr)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof tc)return(function(r,i,o){const a=i.orderings.map((c=>({Ms:te(c.expr),direction:c.direction})));return[...o].sort(((c,u)=>{for(const{Ms:h,direction:f}of a){const p=Nr(h.evaluate(r,c)),g=Nr(h.evaluate(r,u)),v=gt(p??Gs,g??Gs);if(v!==0)return f==="ascending"?v:-v}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function ml(n){const e=(function(s){for(let r=s.stages.length-1;r>=0;r--){const i=s.stages[r];if(i instanceof tc)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,s)=>{for(const r of e){const i=Nr(te(r.expr).evaluate({serializer:n.serializer},t)),o=Nr(te(r.expr).evaluate({serializer:n.serializer},s)),a=gt(i||Gs,o||Gs);if(a!==0)return r.direction==="ascending"?a:-a}return 0}}function Ua(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Kr)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.changes=new gs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?V.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Ar(s.mutation,r,Dt.empty(),Ce.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ue()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ue()){const r=Dn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let o=Ss();return i.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Dn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ue())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,s,r){let i=ft();const o=Rr(),a=(function(){return Rr()})();return t.forEach(((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Hn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ar(h.mutation,u,h.mutation.getFieldMask(),Ce.now())):o.set(u.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>a.set(u,new Gv(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(e,t){const s=Rr();let r=new Se(((o,a)=>o-a)),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||Dt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||ue()).add(c);r=r.insert(a.batchId,f)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=af();h.forEach((p=>{if(!i.has(p)){const g=Jd(t.get(p),s.get(p));g!==null&&f.set(p,g),i=i.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return V.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return qe(t)?this.getDocumentsMatchingPipeline(e,t,s,r):qE(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):V.resolve(Dn());let a=qr,c=i;return o.next((u=>V.forEach(u,((h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next((p=>{c=c.insert(h,p)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,ue()))).next((h=>({batchId:a,changes:of(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next((s=>{let r=Ss();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=Ss();return this.indexManager.getCollectionParents(e,i).next((a=>V.forEach(a,(c=>{const u=(function(f,p){return new ui(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((h=>{h.forEach(((f,p)=>{o=o.insert(f,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Vo(t,a)))))}getDocumentsMatchingPipeline(e,t,s,r){if(Sn(t)==="collection_group"){const i=sc(t);let o=Ss();return this.indexManager.getCollectionParents(e,i).next((a=>V.forEach(a,(c=>{const u=(function(f,p){const g=f.stages.map((v=>v instanceof jo?new Jo(p.canonicalString(),{}):v));return new dt(f.serializer,g)})(t,c.child(i));return this.getDocumentsMatchingPipeline(e,u,s,r).next((h=>{h.forEach(((f,p)=>{o=o.insert(f,p)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,s.largestBatchId).next((o=>{switch(i=o,Sn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r);case"documents":let a=ue();for(const c of pl(t))a=a.add(Y.fromPath(c));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new j("invalid-argument",`Invalid pipeline source to execute offline: ${tn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Wo(t,a)))))}}retrieveMatchingLocalDocuments(e,t,s){e.forEach(((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,tt.newInvalidDocument(a)))}));let r=Ss();return t.forEach(((i,o)=>{const a=e.get(i);a!==void 0&&Ar(a.mutation,o,Dt.empty(),Ce.now()),s(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,s){switch(Sn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ge.fromString(Ko(t)),s);case"collection_group":throw new j("invalid-argument",`Unexpected collection group pipeline: ${tn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,pl(t).map((r=>Y.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,s);default:throw new j("invalid-argument",`Failed to get overlays for pipeline: ${tn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return V.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:$t(r.createTime)}})(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(r){return{name:r.name,query:xv(r.bundledQuery),readTime:$t(r.readTime)}})(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.overlays=new Se(Y.comparator),this.Gs=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Dn();return V.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}getAllOverlays(e,t){const s=Dn();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&s.set(r,i)})),V.resolve(s)}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.Zr(e,t,i)})),V.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Gs.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Gs.delete(s)),V.resolve()}getOverlaysForCollection(e,t,s){const r=Dn(),i=t.length+1,o=new Y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return V.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Se(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Dn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Dn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=r)););return V.resolve(a)}Zr(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Gs.get(r.largestBatchId).delete(s.key);this.Gs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Nv(t,s));let i=this.Gs.get(t);i===void 0&&(i=ue(),this.Gs.set(t,i)),this.Gs.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.zs=new Ue(ze.js),this.Hs=new Ue(ze.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const s=new ze(e,t);this.zs=this.zs.add(s),this.Hs=this.Hs.add(s)}Ys(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Zs(new ze(e,t))}Xs(e,t){e.forEach((s=>this.removeReference(s,t)))}e_(e){const t=new Y(new ge([])),s=new ze(t,e),r=new ze(t,e+1),i=[];return this.Hs.forEachInRange([s,r],(o=>{this.Zs(o),i.push(o.key)})),i}t_(){this.zs.forEach((e=>this.Zs(e)))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new Y(new ge([])),s=new ze(t,e),r=new ze(t,e+1);let i=ue();return this.Hs.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ze(e,0),s=this.zs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ze{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return Y.comparator(e.key,t.key)||Be(e.r_,t.r_)}static Js(e,t){return Be(e.r_,t.r_)||Y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new Ue(ze.js)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pv(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.i_=this.i_.add(new ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,t){return V.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.__(s),i=r<0?0:r;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Vl:this.Gr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ze(t,0),r=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([s,r],(o=>{const a=this.s_(o.r_);i.push(a)})),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ue(Be);return t.forEach((r=>{const i=new ze(r,0),o=new ze(r,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],(a=>{s=s.add(a.r_)}))})),V.resolve(this.o_(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;Y.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Y(i),0);let a=new Ue(Be);return this.i_.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.r_)),!0)}),o),V.resolve(this.o_(a))}o_(e){const t=[];return e.forEach((s=>{const r=this.s_(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){Q(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.i_;return V.forEach(t.mutations,(r=>{const i=new ze(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.i_=s}))}Hr(e){}containsKey(e,t){const s=new ze(t,0),r=this.i_.firstAfterOrEqual(s);return V.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.u_=e,this.docs=(function(){return new Se(Y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.u_(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return V.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let s=ft();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))})),V.resolve(s)}getAllEntries(e){let t=ft();return this.docs.forEach(((s,r)=>{t=t.insert(s,r.document)})),V.resolve(t)}getDocumentsMatchingQuery(e,t,s,r){let i,o;qe(t)?(i=ge.fromString(Ko(t)),o=h=>Wo(t,h)):(i=t.path,o=h=>Vo(t,h));let a=ft();const c=new Y(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||GE(UE(f),s)<=0||(r.has(f.key)||o(f))&&(a=a.insert(f.key,f.mutableCopy()))}return V.resolve(a)}getAllFromCollectionGroup(e,t,s,r){ee(9500)}c_(e,t){return V.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new zv(this)}getSize(e){return V.resolve(this.size)}}class zv extends Uv{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.$s.addEntry(e,r)):this.$s.removeEntry(s)})),V.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.persistence=e,this.l_=new gs((t=>Kf(t)),zf),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.E_=0,this.h_=new Bc,this.targetCount=0,this.T_=Mn.ws()}forEachTarget(e,t){return this.l_.forEach(((s,r)=>t(r))),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.E_&&(this.E_=t),V.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new Mn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Ds(t),V.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.l_.forEach(((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),V.waitFor(i).next((()=>r))}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const s=this.l_.get(t)||null;return V.resolve(s)}addMatchingKeys(e,t,s){return this.h_.Ys(t,s),V.resolve()}removeMatchingKeys(e,t,s){this.h_.Xs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),V.resolve()}getMatchingKeysForTargetId(e,t){const s=this.h_.n_(t);return V.resolve(s)}containsKey(e,t){return V.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t){this.P_={},this.overlays={},this.I_=new Ho(0),this.R_=!1,this.R_=!0,this.A_=new Jv,this.referenceDelegate=e(this),this.V_=new Qv(this),this.indexManager=new Lv,this.remoteDocumentCache=(function(r){return new Kv(r)})((s=>this.referenceDelegate.d_(s))),this.serializer=new kv(t),this.f_=new $v(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.P_[e.toKey()];return s||(s=new jv(t,this.referenceDelegate),this.P_[e.toKey()]=s),s}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,s){K("MemoryPersistence","Starting transaction:",e);const r=new Wv(this.I_.next());return this.referenceDelegate.m_(),s(r).next((i=>this.referenceDelegate.p_(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}g_(e,t){return V.or(Object.values(this.P_).map((s=>()=>s.containsKey(e,t))))}}class Wv extends G_{constructor(e){super(),this.currentSequenceNumber=e}}class hc{constructor(e){this.persistence=e,this.y_=new Bc,this.w_=null}static b_(e){return new hc(e)}get S_(){if(this.w_)return this.w_;throw ee(60996)}addReference(e,t,s){return this.y_.addReference(s,t),this.S_.delete(s.toString()),V.resolve()}removeReference(e,t,s){return this.y_.removeReference(s,t),this.S_.add(s.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),V.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach((r=>this.S_.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.S_.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.S_,(s=>{const r=Y.fromPath(s);return this.v_(e,r).next((i=>{i||t.removeEntry(r,ie.min())}))})).next((()=>(this.w_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((s=>{s?this.S_.delete(t.toString()):this.S_.add(t.toString())}))}d_(e){return 0}v_(e,t){return V.or([()=>V.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class vo{constructor(e,t){this.persistence=e,this.D_=new gs((s=>Rv(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=K_(this,t)}static b_(e,t){return new vo(e,t)}m_(){}p_(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}Cs(e){let t=0;return this.sr(e,(s=>{t++})).next((()=>t))}sr(e,t){return V.forEach(this.D_,((s,r)=>this.Os(e,s,r).next((i=>i?V.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.c_(e,(o=>this.Os(e,o,t).next((a=>{a||(s++,i.removeEntry(o,ie.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.D_.set(s,e.currentSequenceNumber),V.resolve()}removeReference(e,t,s){return this.D_.set(s,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),V.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yi(e.data.value)),t}Os(e,t,s){return V.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.D_.get(t);return V.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Vo=s,this.fo=r}static mo(e,t){let s=ue(),r=ue();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new dc(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(n,e){return Y.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=(function(){return Cm()?8:H_(nt())>0?6:4})()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Do(e,t,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Xv;return this.xo(e,t,o).next((a=>{if(i.result=a,this.yo)return this.Co(e,t,o,a.size)}))})).next((()=>i.result))}Co(e,t,s,r){return qe(t)?V.resolve():s.documentReadCount<this.wo?(bs()<=he.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Pr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),V.resolve()):(bs()<=he.DEBUG&&K("QueryEngine","Query:",Pr(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.bo*r?(bs()<=he.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Pr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(t))):V.resolve())}vo(e,t){if(qe(t))return V.resolve(null);let s=t;if(GB(s))return V.resolve(null);let r=Ht(s);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(s.limit!==null&&i===1&&(s=ul(s,null,"F"),r=Ht(s)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=ue(...o);return this.So.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Fo(s,c);return this.Oo(s,h,a,u.readTime)?this.vo(e,ul(s,null,"F")):this.Mo(e,h,s,u)}))))})))))}Do(e,t,s,r){return(qe(t)?(function(o){for(const a of o.stages){if(a instanceof Kr||a instanceof sh)return!1;if(a instanceof ec){if(a.condition instanceof kf&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof di&&a.condition._expr.params[0].fieldName===Vs)continue;return!1}}return!0})(t):GB(t))||r.isEqual(ie.min())?V.resolve(null):this.So.getDocuments(e,s).next((i=>{const o=this.Fo(t,i);return this.Oo(t,o,s,r)?V.resolve(null):(bs()<=he.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),rh(t)),this.Mo(e,o,t,VE(r,qr)).next((a=>a)))}))}Fo(e,t){let s,r;return qe(e)?(s=new Ue(Yv),r=i=>Wo(e,i)):(s=new Ue($l(e)),r=i=>Vo(e,i)),t.forEach(((i,o)=>{r(o)&&(s=s.add(o))})),s}Oo(e,t,s,r){if(qe(e))return(function(a){return a.stages.some((c=>c instanceof Kr||c instanceof sh))})(e);if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}xo(e,t,s){return bs()<=he.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",rh(t)),this.So.getDocumentsMatchingQuery(e,t,kn.min(),s)}Mo(e,t,s,r){return this.So.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="LocalStore",ew=3e8;class tw{constructor(e,t,s,r){this.persistence=e,this.No=t,this.serializer=r,this.Lo=new Se(Be),this.Bo=new gs((i=>Kf(i)),zf),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(s)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hv(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Lo)))}}function nw(n,e,t,s){return new tw(n,e,t,s)}async function Xf(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.qo(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],a=[];let c=ue();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next((u=>({$o:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function sw(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return(function(a,c,u,h){const f=u.batch,p=f.keys();let g=V.resolve();return p.forEach((v=>{g=g.next((()=>h.getEntry(c,v))).next((O=>{const F=u.docVersions.get(v);Q(F!==null,48541),O.version.compareTo(F)<0&&(f.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),h.addEntry(O)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(c,f)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(a){let c=ue();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function Zf(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.V_.getLastRemoteSnapshotVersion(t)))}function rw(n,e){const t=oe(n),s=e.snapshotVersion;let r=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});r=t.Lo;const a=[];e.targetChanges.forEach(((h,f)=>{const p=r.get(f);if(!p)return;a.push(t.V_.removeMatchingKeys(i,h.removedDocuments,f).next((()=>t.V_.addMatchingKeys(i,h.addedDocuments,f))));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Ge.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(f,g),(function(O,F,S){return O.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=ew?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0})(p,g,h)&&a.push(t.V_.updateTargetData(i,g))}));let c=ft(),u=ue();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(iw(i,o,e.documentUpdates).next((h=>{c=h.Ko,u=h.Qo}))),!s.isEqual(ie.min())){const h=t.V_.getLastRemoteSnapshotVersion(i).next((f=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,s)));a.push(h)}return V.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(t.Lo=r,i)))}function iw(n,e,t){let s=ue(),r=ue();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let o=ft();return t.forEach(((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):K(fc,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)})),{Ko:o,Qo:r}}))}function ow(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Vl),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function aw(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.V_.getTargetData(s,e).next((i=>i?(r=i,V.resolve(r)):t.V_.allocateTargetId(s).next((o=>(r=new en(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.V_.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Lo.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(s.targetId,s),t.Bo.set(e,s.targetId)),s}))}async function gl(n,e,t){const s=oe(n),r=s.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Qs(o))throw o;K(fc,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Lo=s.Lo.remove(e),s.Bo.delete(r.target)}function oh(n,e,t){const s=oe(n);let r=ie.min(),i=ue();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const f=oe(c),p=f.Bo.get(h);return p!==void 0?V.resolve(f.Lo.get(p)):f.V_.getTargetData(u,h)})(s,o,qe(e)?e:Ht(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.V_.getMatchingKeysForTargetId(o,a.targetId).next((c=>{i=c}))})).next((()=>s.No.getDocumentsMatchingQuery(o,e,t?r:ie.min(),t?i:ue()))).next((a=>(lw(s,a),{documents:a,Wo:i})))))}function lw(n,e){e.forEach(((t,s)=>{const r=s.key.getCollectionGroup(),i=n.Uo.get(r)||ie.min();s.readTime.compareTo(i)>0&&n.Uo.set(r,s.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve()))))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(rn(t),this.Xo=!1):K("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="RemoteStore";class uw{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new Mn(1e3),this.ca=new Mn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe((o=>{s.enqueueAndForget((async()=>{ys(this)&&(K(Kt,"Restarting streams for network reachability change."),await(async function(c){const u=oe(c);u.la.add(4),await pi(u),u.Ta.set("Unknown"),u.la.delete(4),await Yo(u)})(this))}))})),this.Ta=new cw(s,r)}}async function Yo(n){if(ys(n))for(const e of n.Ea)await e(!0)}async function pi(n){for(const e of n.Ea)await e(!1)}function Cl(n,e){return n.oa.get(e)||void 0}function ep(n,e){const t=oe(n),s=Cl(t,e.targetId);if(s!==void 0&&t._a.has(s))return;const r=(function(a,c){const u=Cl(a,c);u!==void 0&&a.aa.delete(u);const h=(function(p,g){return g%2!=0?p.ca.next():p.ua.next()})(a,c);return a.oa.set(c,h),a.aa.set(h,c),h})(t,e.targetId);K(Kt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new en(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(r,i),Cc(t)?gc(t):er(t).Yt()&&mc(t,i)}function pc(n,e){const t=oe(n),s=er(t),r=Cl(t,e);K(Kt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t._a.delete(r),t.oa.delete(e),t.aa.delete(r),s.Yt()&&tp(t,r),t._a.size===0&&(s.Yt()?s.en():ys(t)&&t.Ta.set("Unknown"))}function mc(n,e){if(n.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.aa.get(e.targetId);if(t===void 0)return void K(Kt,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}er(n).Pn(e)}function tp(n,e){n.Pa.J(e),er(n).In(e)}function gc(n){n.Pa=new s_({getRemoteKeysForTarget:e=>{const t=n.aa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ue()},ye:e=>n._a.get(e)||null,Ve:()=>n.datastore.serializer.databaseId}),er(n).start(),n.Ta.ea()}function Cc(n){return ys(n)&&!er(n).Jt()&&n._a.size>0}function ys(n){return oe(n).la.size===0}function np(n){n.Pa=void 0}async function Bw(n){n.Ta.set("Online")}async function hw(n){n._a.forEach(((e,t)=>{mc(n,e)}))}async function dw(n,e){np(n),Cc(n)?(n.Ta.ra(e),gc(n)):n.Ta.set("Unknown")}async function fw(n,e,t){if(n.Ta.set("Online"),e instanceof cf&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds){if(r._a.has(a)){const c=r.aa.get(a);c!==void 0&&(await r.remoteSyncer.rejectListen(c,o),r.oa.delete(c),r.aa.delete(a)),r._a.delete(a)}r.Pa.removeTarget(a)}})(n,e)}catch(s){K(Kt,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wo(n,s)}else if(e instanceof Zi?n.Pa._e(e):e instanceof lf?n.Pa.he(e):n.Pa.ue(e),!t.isEqual(ie.min()))try{const s=await Zf(n.localStore);t.compareTo(s)>=0&&await(function(i,o){const a=i.Pa.fe(o);a.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,h)=>{const f=i._a.get(u);if(!f)return;i._a.set(u,f.withResumeToken(Ge.EMPTY_BYTE_STRING,f.snapshotVersion)),tp(i,u);const p=new en(f.target,u,h,f.sequenceNumber);mc(i,p)}));const c=(function(h,f){const p=new Map;f.targetChanges.forEach(((v,O)=>{const F=h.aa.get(O);F!==void 0&&p.set(F,v)}));let g=new Se(Be);return f.targetMismatches.forEach(((v,O)=>{const F=h.aa.get(v);F!==void 0&&(g=g.insert(F,O))})),new Bi(f.snapshotVersion,p,g,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)})(i,a);return i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){K(Kt,"Failed to raise snapshot:",s),await wo(n,s)}}async function wo(n,e,t){if(!Qs(e))throw e;n.la.add(1),await pi(n),n.Ta.set("Offline"),t||(t=()=>Zf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{K(Kt,"Retrying IndexedDB access"),await t(),n.la.delete(1),await Yo(n)}))}function sp(n,e){return e().catch((t=>wo(n,t,e)))}async function Xo(n){const e=oe(n),t=Vn(e);let s=e.sa.length>0?e.sa[e.sa.length-1].batchId:Vl;for(;pw(e);)try{const r=await ow(e.localStore,s);if(r===null){e.sa.length===0&&t.en();break}s=r.batchId,mw(e,r)}catch(r){await wo(e,r)}rp(e)&&ip(e)}function pw(n){return ys(n)&&n.sa.length<10}function mw(n,e){n.sa.push(e);const t=Vn(n);t.Yt()&&t.Rn&&t.An(e.mutations)}function rp(n){return ys(n)&&!Vn(n).Jt()&&n.sa.length>0}function ip(n){Vn(n).start()}async function gw(n){Vn(n).fn()}async function Cw(n){const e=Vn(n);for(const t of n.sa)e.An(t.mutations)}async function yw(n,e,t){const s=n.sa.shift(),r=uc.from(s,e,t);await sp(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await Xo(n)}async function Ew(n,e){e&&Vn(n).Rn&&await(async function(s,r){if((function(o){return QE(o)&&o!==M.ABORTED})(r.code)){const i=s.sa.shift();Vn(s).Xt(),await sp(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await Xo(s)}})(n,e),rp(n)&&ip(n)}async function ah(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),K(Kt,"RemoteStore received new credentials");const s=ys(t);t.la.add(3),await pi(t),s&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Yo(t)}async function _w(n,e){const t=oe(n);e?(t.la.delete(2),await Yo(t)):e||(t.la.add(2),await pi(t),t.Ta.set("Unknown"))}function er(n){return n.Ia||(n.Ia=(function(t,s,r){const i=oe(t);return i.pn(),new N_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{ct:Bw.bind(null,n),Et:hw.bind(null,n),Tt:dw.bind(null,n),Tn:fw.bind(null,n)}),n.Ea.push((async e=>{e?(n.Ia.Xt(),Cc(n)?gc(n):n.Ta.set("Unknown")):(await n.Ia.stop(),np(n))}))),n.Ia}function Vn(n){return n.Ra||(n.Ra=(function(t,s,r){const i=oe(t);return i.pn(),new k_(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{ct:()=>Promise.resolve(),Et:gw.bind(null,n),Tt:Ew.bind(null,n),Vn:Cw.bind(null,n),dn:yw.bind(null,n)}),n.Ea.push((async e=>{e?(n.Ra.Xt(),await Xo(n)):(await n.Ra.stop(),n.sa.length>0&&(K(Kt,`Stopping write stream with ${n.sa.length} pending writes`),n.sa=[]))}))),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new yc(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ec(n,e){if(rn("AsyncQueue",`${e}: ${n}`),Qs(n))return new j(M.UNAVAILABLE,`${e}: ${n}`);throw n}class lh{constructor(){this.activeTargetIds=e_()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dw{constructor(){this.fu=new lh,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,s){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new lh,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Ga(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static emptySet(e){return new ls(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Y.comparator(t.key,s.key):(t,s)=>Y.comparator(t.key,s.key),this.keyedMap=Ss(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ls;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this.pu=new Se(Y.comparator)}track(e){const t=e.doc.key,s=this.pu.get(t);s?e.type!==0&&s.type===3?this.pu=this.pu.insert(t,e):e.type===3&&s.type!==1?this.pu=this.pu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pu=this.pu.remove(t):e.type===1&&s.type===2?this.pu=this.pu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):ee(63341,{we:e,gu:s}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal(((t,s)=>{e.push(s)})),e}}class qs{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new qs(e,t,ls.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some((e=>e.vu()))}}class ww{constructor(){this.queries=uh(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,s){const r=oe(t),i=r.queries;r.queries=uh(),i.forEach(((o,a)=>{for(const c of a.bu)c.onError(s)}))})(this,new j(M.ABORTED,"Firestore shutting down"))}}function uh(){return new gs((n=>jf(n)),Qo)}async function ap(n,e){const t=oe(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Su()&&e.vu()&&(s=2):(i=new vw,s=e.vu()?0:1);try{switch(s){case 0:i.wu=await t.onListen(r,!0);break;case 1:i.wu=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=Ec(o,`Initialization of query '${qe(e.query)?tn(e.query):Pr(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&_c(t)}async function lp(n,e){const t=oe(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?r=e.vu()?0:1:!i.Su()&&e.vu()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Iw(n,e){const t=oe(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.bu)a.Cu(r)&&(s=!0);o.wu=r}}s&&_c(t)}function Tw(n,e,t){const s=oe(n),r=s.queries.get(e);if(r)for(const i of r.bu)i.onError(t);s.queries.delete(e)}function _c(n){n.Du.forEach((e=>{e.next()}))}var yl;(function(n){n.Default="default",n.Cache="cache"})(yl||(yl={}));class cp{constructor(e,t,s){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=s||{}}Cu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new qs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const s=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==yl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.key=e}}class Bp{constructor(e){this.key=e}}class bw{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=ue(),this.mutatedKeys=ue(),this.Ju=qe(e)?ml(e):$l(e),this.Yu=new ls(this.Ju)}get Zu(){return this.zu}Xu(e,t){const s=t?t.ec:new ch,r=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const[c,u]=this.tc(this.query,r);e.inorderTraversal(((f,p)=>{const g=r.get(f),v=Mv(this.query,p)?p:null,O=!!g&&this.mutatedKeys.has(g.key),F=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let S=!1;g&&v?g.data.isEqual(v.data)?O!==F&&(s.track({type:3,doc:v}),S=!0):this.nc(g,v)||(s.track({type:2,doc:v}),S=!0,(c&&this.Ju(v,c)>0||u&&this.Ju(v,u)<0)&&(a=!0)):!g&&v?(s.track({type:0,doc:v}),S=!0):g&&!v&&(s.track({type:1,doc:g}),S=!0,(c||u)&&(a=!0)),S&&(v?(o=o.add(v),i=F?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}));const h=this.rc(this.query);if(h)if(qe(this.query)){const f=[];o.forEach((v=>f.push(v)));const p=Wf(this.query,f);let g=new ls(ml(this.query));for(const v of p)g=g.add(v);o.forEach((v=>{g.has(v.key)||(i=i.delete(v.key),s.track({type:1,doc:v}))})),o=g}else{const f=this.sc(this.query);for(;o.size>h;){const p=f==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),s.track({type:1,doc:p})}}return{Yu:o,ec:s,Oo:a,mutatedKeys:i}}rc(e){var t;return qe(e)?(t=Ua(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(qe(e)){const t=Ua(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var s;if(qe(e)){const r=(s=Ua(e))==null?void 0:s.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort(((h,f)=>(function(g,v){const O=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{we:F})}};return O(g)-O(v)})(h.type,f.type)||this.Ju(h.doc,f.doc))),this._c(s),r=r??!1;const a=t&&!r?this.oc():[],c=this.Hu.size===0&&this.current&&!r?1:0,u=c!==this.ju;return this.ju=c,o.length!==0||u?{snapshot:new qs(this.query,e.Yu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ac:a}:{ac:a}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new ch,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach((t=>this.zu=this.zu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.zu=this.zu.delete(t))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=ue(),this.Yu.forEach((s=>{this.uc(s.key)&&(this.Hu=this.Hu.add(s.key))}));const t=[];return e.forEach((s=>{this.Hu.has(s)||t.push(new Bp(s))})),this.Hu.forEach((s=>{e.has(s)||t.push(new up(s))})),t}cc(e){this.zu=e.Wo,this.Hu=ue();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return qs.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Dc="SyncEngine";class Aw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Sw{constructor(e){this.key=e,this.Ec=!1}}class Pw{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new gs((a=>jf(a)),Qo),this.Pc=new Map,this.Ic=new Set,this.Rc=new Se(Y.comparator),this.Ac=new Map,this.Vc=new Bc,this.dc={},this.fc=new Map,this.mc=Mn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function Rw(n,e,t=!0){const s=gp(n);let r;const i=s.Tc.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lc()):r=await hp(s,e,t,!0),r}async function Ow(n,e){const t=gp(n);await hp(t,e,!0,!1)}async function hp(n,e,t,s){const r=await aw(n.localStore,qe(e)?e:Ht(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await Nw(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&ep(n.remoteStore,r),a}async function Nw(n,e,t,s,r){n.yc=(f,p,g)=>(async function(O,F,S,G){let Z=F.view.Xu(S);Z.Oo&&(Z=await oh(O.localStore,F.query,!1).then((({documents:w})=>F.view.Xu(w,Z))));const le=G&&G.targetChanges.get(F.targetId),ae=G&&G.targetMismatches.get(F.targetId)!=null,ne=F.view.applyChanges(Z,O.isPrimaryClient,le,ae);return hh(O,F.targetId,ne.ac),ne.snapshot})(n,f,p,g);const i=await oh(n.localStore,e,!0),o=new bw(e,i.Wo),a=o.Xu(i.documents),c=hi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);hh(n,t,u.ac);const h=new Aw(e,t,o);return n.Tc.set(e,h),n.Pc.has(t)?n.Pc.get(t).push(e):n.Pc.set(t,[e]),u.snapshot}async function kw(n,e,t){const s=oe(n),r=s.Tc.get(e),i=s.Pc.get(r.targetId);if(i.length>1)return s.Pc.set(r.targetId,i.filter((o=>!Qo(o,e)))),void s.Tc.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await gl(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&pc(s.remoteStore,r.targetId),El(s,r.targetId)})).catch(zs)):(El(s,r.targetId),await gl(s.localStore,r.targetId,!0))}async function xw(n,e){const t=oe(n),s=t.Tc.get(e),r=t.Pc.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pc(t.remoteStore,s.targetId))}async function Lw(n,e,t){const s=$w(n);try{const r=await(function(o,a){const c=oe(o),u=Ce.now(),h=a.reduce(((g,v)=>g.add(v.key)),ue());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let v=ft(),O=ue();return c.ko.getEntries(g,h).next((F=>{v=F,v.forEach(((S,G)=>{G.isValidDocument()||(O=O.add(S))}))})).next((()=>c.localDocuments.getOverlayedDocuments(g,v))).next((F=>{f=F;const S=[];for(const G of a){const Z=AE(G,f.get(G.key).overlayedDocument);Z!=null&&S.push(new Hn(G.key,Z,Ud(Z.value.mapValue),It.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,S,a)})).next((F=>{p=F;const S=F.applyToLocalDocumentSet(f,O);return c.documentOverlayCache.saveOverlays(g,F.batchId,S)}))})).then((()=>({batchId:p.batchId,changes:of(f)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,a,c){let u=o.dc[o.currentUser.toKey()];u||(u=new Se(Be)),u=u.insert(a,c),o.dc[o.currentUser.toKey()]=u})(s,r.batchId,t),await mi(s,r.changes),await Xo(s.remoteStore)}catch(r){const i=Ec(r,"Failed to persist write");t.reject(i)}}async function dp(n,e){const t=oe(n);try{const s=await rw(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Ac.get(i);o&&(Q(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.Ec=!0:r.modifiedDocuments.size>0?Q(o.Ec,14607):r.removedDocuments.size>0&&(Q(o.Ec,42227),o.Ec=!1))})),await mi(t,s,e)}catch(s){await zs(s)}}function Bh(n,e,t){const s=oe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tc.forEach(((i,o)=>{const a=o.view.xu(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const c=oe(o);c.onlineState=a;let u=!1;c.queries.forEach(((h,f)=>{for(const p of f.bu)p.xu(a)&&(u=!0)})),u&&_c(c)})(s.eventManager,e),r.length&&s.hc.Tn(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Fw(n,e,t){const s=oe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Ac.get(e),i=r&&r.key;if(i){let o=new Se(Y.comparator);o=o.insert(i,tt.newNoDocument(i,ie.min()));const a=ue().add(i),c=new Bi(ie.min(),new Map,new Se(Be),o,ft(),a);await dp(s,c),s.Rc=s.Rc.remove(i),s.Ac.delete(e),vc(s)}else await gl(s.localStore,e,!1).then((()=>El(s,e,t))).catch(zs)}async function Mw(n,e){const t=oe(n),s=e.batch.batchId;try{const r=await sw(t.localStore,e);pp(t,s,null),fp(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await mi(t,r)}catch(r){await zs(r)}}async function Vw(n,e,t){const s=oe(n);try{const r=await(function(o,a){const c=oe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next((f=>(Q(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>c.localDocuments.getDocuments(u,h)))}))})(s.localStore,e);pp(s,e,t),fp(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await mi(s,r)}catch(r){await zs(r)}}function fp(n,e){(n.fc.get(e)||[]).forEach((t=>{t.resolve()})),n.fc.delete(e)}function pp(n,e,t){const s=oe(n);let r=s.dc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.dc[s.currentUser.toKey()]=r}}function El(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Pc.get(e))n.Tc.delete(s),t&&n.hc.wc(s,t);n.Pc.delete(e),n.isPrimaryClient&&n.Vc.e_(e).forEach((s=>{n.Vc.containsKey(s)||mp(n,s)}))}function mp(n,e){n.Ic.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(pc(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ac.delete(t),vc(n))}function hh(n,e,t){for(const s of t)s instanceof up?(n.Vc.addReference(s.key,e),Uw(n,s)):s instanceof Bp?(K(Dc,"Document no longer in limbo: "+s.key),n.Vc.removeReference(s.key,e),n.Vc.containsKey(s.key)||mp(n,s.key)):ee(19791,{bc:s})}function Uw(n,e){const t=e.key,s=t.path.canonicalString();n.Rc.get(t)||n.Ic.has(s)||(K(Dc,"New document in limbo: "+t),n.Ic.add(s),vc(n))}function vc(n){for(;n.Ic.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Ic.values().next().value;n.Ic.delete(e);const t=new Y(ge.fromString(e)),s=n.mc.next();n.Ac.set(s,new Sw(t)),n.Rc=n.Rc.insert(t,s),ep(n.remoteStore,new en(Ht(Mo(t.path)),s,"TargetPurposeLimboResolution",Ho.wn))}}async function mi(n,e,t){const s=oe(n),r=[],i=[],o=[];s.Tc.isEmpty()||(s.Tc.forEach(((a,c)=>{o.push(s.yc(c,e,t).then((u=>{var h;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=dc.mo(c.targetId,u);i.push(f)}})))})),await Promise.all(o),s.hc.Tn(r),await(async function(c,u){const h=oe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>V.forEach(u,(p=>V.forEach(p.Vo,(g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g))).next((()=>V.forEach(p.fo,(g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))))))}catch(f){if(!Qs(f))throw f;K(fc,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=h.Lo.get(p),v=g.snapshotVersion,O=g.withLastLimboFreeSnapshotVersion(v);h.Lo=h.Lo.insert(p,O)}}})(s.localStore,i))}async function Gw(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){K(Dc,"User change. New user:",e.toKey());const s=await Xf(t.localStore,e);t.currentUser=e,(function(i,o){i.fc.forEach((a=>{a.forEach((c=>{c.reject(new j(M.CANCELLED,o))}))})),i.fc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await mi(t,s.$o)}}function Hw(n,e){const t=oe(n),s=t.Ac.get(e);if(s&&s.Ec)return ue().add(s.key);{let r=ue();const i=t.Pc.get(e);if(!i)return r;for(const o of i??[]){const a=t.Tc.get(o);r=r.unionWith(a.view.Zu)}return r}}function gp(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fw.bind(null,e),e.hc.Tn=Iw.bind(null,e.eventManager),e.hc.wc=Tw.bind(null,e.eventManager),e}function $w(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vw.bind(null,e),e}class Io{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uo(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return nw(this.persistence,new Zv,e.initialUser,this.serializer)}Dc(e){return new Yf(hc.b_,this.serializer)}vc(e){return new Dw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Io.provider={build:()=>new Io};class qw extends Io{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){Q(this.persistence.referenceDelegate instanceof vo,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new J_(s,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Yf((s=>vo.b_(s,t)),this.serializer)}}class _l{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Bh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gw.bind(null,this.syncEngine),await _w(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ww})()}createDatastore(e){const t=Uo(e.databaseInfo.databaseId),s=O_(e.databaseInfo);return F_(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,o,a){return new uw(s,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Bh(this.syncEngine,t,0)),(function(){return QB.Ye()?new QB:new A_})())}createSyncEngine(e,t){return(function(r,i,o,a,c,u,h){const f=new Pw(r,i,o,a,c,u);return h&&(f.gc=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=oe(r);K(Kt,"RemoteStore shutting down."),i.la.add(5),await pi(i),i.ha.shutdown(),i.Ta.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}_l.provider={build:()=>new _l};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="FirestoreClient";class Jw{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=Ml.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{K(Un,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(K(Un,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ec(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Ha(n,e){n.asyncQueue.verifyOperationInProgress(),K(Un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Xf(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function dh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await jw(n);K(Un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>ah(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>ah(e.remoteStore,r))),n._onlineComponents=e}async function jw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(Un,"Using user provided OfflineComponentProvider");try{await Ha(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===M.FAILED_PRECONDITION||r.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Nt("Error using user provided cache. Falling back to memory cache: "+t),await Ha(n,new Io)}}else K(Un,"Using default OfflineComponentProvider"),await Ha(n,new qw(void 0));return n._offlineComponents}async function Cp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(Un,"Using user provided OnlineComponentProvider"),await dh(n,n._uninitializedComponentsProvider._online)):(K(Un,"Using default OnlineComponentProvider"),await dh(n,new _l))),n._onlineComponents}function Kw(n){return Cp(n).then((e=>e.syncEngine))}async function Dl(n){const e=await Cp(n),t=e.eventManager;return t.onListen=Rw.bind(null,e.syncEngine),t.onUnlisten=kw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ow.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xw.bind(null,e.syncEngine),t}function zw(n,e,t,s){const r=new op(s),i=new cp(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>ap(await Dl(n),i))),()=>{r.Va(),n.asyncQueue.enqueueAndForget((async()=>lp(await Dl(n),i)))}}function Qw(n,e,t={}){const s=new bn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,c,u){const h=new op({next:p=>{h.Va(),o.enqueueAndForget((()=>lp(i,f)));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new j(M.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&c&&c.source==="server"?u.reject(new j(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new cp(Mo(a.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return ap(i,f)})(await Dl(n),n.asyncQueue,e,t,s))),s.promise}function Ww(n,e){const t=new bn;return n.asyncQueue.enqueueAndForget((async()=>Lw(await Kw(n),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yp=class{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Yw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(ps("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Yw=class extends yp{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{convertValue(e,t="none"){switch(He(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(On(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Gn(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[Vr].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>Pe(o.doubleValue)));return new pt(t)}convertGeoPoint(e){return new qt(Pe(e.latitude),Pe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=li(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Us(e));default:return null}}convertTimestamp(e){const t=Rn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ge.fromString(e);Q(mf(s),9688,{name:e});const r=new Fr(s.get(1),s.get(3)),i=new Y(s.popFirst(5));return r.isEqual(t)||rn(`A document reference to ${i} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="AsyncQueue";class ph{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new _f(this,"async_queue_retry"),this.Hc=()=>{const s=Ga();s&&K(fh,"Visibility state changed to "+s.visibilityState),this.Ht.$t()},this.Jc=e;const t=Ga();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new bn;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!Qs(e))throw e;K(fh,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((s=>{throw this.Wc=s,this.Gc=!1,rn("INTERNAL UNHANDLED ERROR: ",mh(s)),s})).then((s=>(this.Gc=!1,s))))));return this.Jc=t,t}enqueueAfterDelay(e,t,s){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const r=yc.createAndSchedule(this,e,t,s,(i=>this.el(i)));return this.Qc.push(r),r}Yc(){this.Wc&&ee(47125,{tl:mh(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function mh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ms extends $o{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new ph,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ph(e),this._firestoreClient=void 0,await e}}}function Zw(n,e){const t=typeof n=="object"?n:Fh(),s=typeof n=="string"?n:e||Bo,r=Il(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=cm("firestore");i&&z_(r,...i)}return r}function Zo(n){if(n._terminated)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eI(n),n._firestoreClient}function eI(n){var s,r,i,o;const e=n._freezeSettings(),t=V_(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Jw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p extends Xw{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}class wr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cs extends yp{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new to(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ps("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=cs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",cs._jsonSchema={type:Ve("string",cs._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class to extends cs{data(e={}){return super.data(e)}}class xs{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new wr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new to(this._firestore,this._userDataWriter,s.key,s,new wr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{qe(r._snapshot.query)?ml(r._snapshot.query):$l(r.query._query);const c=new to(r._firestore,r._userDataWriter,a.doc.key,a.doc,new wr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const c=new to(r._firestore,r._userDataWriter,a.doc.key,a.doc,new wr(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:tI(a.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ml.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:Ve("string",xs._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wc{}class sI extends wc{}function rI(n,e,...t){let s=[];e instanceof wc&&s.push(e),s=s.concat(t),(function(i){const o=i.filter((c=>c instanceof Ic)).length,a=i.filter((c=>c instanceof ea)).length;if(o>1||o>0&&a>0)throw new j(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class ea extends sI{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ea(e,t,s)}_apply(e){const t=this._parse(e);return Dp(e._query,t),new Ws(e.firestore,e.converter,cl(e._query,t))}_parse(e){const t=Ql(e.firestore);return(function(i,o,a,c,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new j(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Ch(f,h);const v=[];for(const O of f)v.push(gh(c,i,O));p={arrayValue:{values:v}}}else p=gh(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Ch(f,h),p=eD(a,o,f,h==="in"||h==="not-in");return Me.create(u,h,p)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function iI(n,e,t){const s=e,r=ps("where",n);return ea._create(r,s,t)}class Ic extends wc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ic(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:kt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)Dp(o,c),o=cl(o,c)})(e._query,t),new Ws(e.firestore,e.converter,cl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gh(n,e,t){if(typeof(t=Je(t))=="string"){if(t==="")throw new j(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nf(e)&&t.indexOf("/")!==-1)throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ge.fromString(t));if(!Y.isDocumentKey(s))throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return NB(n,new Y(s))}if(t instanceof Ne)return NB(n,t._key);throw new j(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ro(t)}.`)}function Ch(n,e){if(!Array.isArray(n)||n.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dp(n,e){const t=(function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ql(e)}set(e,t,s){this._verifyNotCommitted();const r=$a(e,this._firestore),i=Ep(r.converter,t,s),o=bf(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,It.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=$a(e,this._firestore);let o;return o=typeof(t=Je(t))=="string"||t instanceof Go?Z_(this._dataReader,"WriteBatch.update",i._key,t,s,r):X_(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,It.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=$a(e,this._firestore);return this._mutations=this._mutations.concat(new Fo(t._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $a(n,e){if((n=Je(n)).firestore!==e)throw new j(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function aI(n){n=Gt(n,Ne);const e=Gt(n.firestore,ms),t=Zo(e);return Qw(t,n._key,{source:"server"}).then((s=>vp(e,n,s)))}function lI(n,e,t){n=Gt(n,Ne);const s=Gt(n.firestore,ms),r=Ep(n.converter,e,t),i=Ql(s);return Tc(s,[bf(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,It.none())])}function ut(n){return Tc(Gt(n.firestore,ms),[new Fo(n._key,It.none())])}function ws(n,...e){var u,h,f;n=Je(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||yh(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yh(e[s])){const p=e[s];e[s]=(u=p.next)==null?void 0:u.bind(p),e[s+1]=(h=p.error)==null?void 0:h.bind(p),e[s+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,a;if(n instanceof Ne)o=Gt(n.firestore,ms),a=Mo(n._key.path),i={next:p=>{e[s]&&e[s](vp(o,n,p))},error:e[s+1],complete:e[s+2]};else{const p=Gt(n,Ws);o=Gt(p.firestore,ms),a=p._query;const g=new _p(o);i={next:v=>{e[s]&&e[s](new xs(o,g,p,v))},error:e[s+1],complete:e[s+2]},nI(n._query)}const c=Zo(o);return zw(c,a,r,i)}function Tc(n,e){const t=Zo(n);return Ww(t,e)}function vp(n,e,t){const s=t.docs.get(e._key),r=new _p(n);return new cs(n,r,e._key,s,new wr(t.hasPendingWrites,t.fromCache),e.converter)}function qa(n){return n=Gt(n,ms),Zo(n),new oI(n,(e=>Tc(n,e)))}const Eh="@firebase/firestore",_h="4.17.2";(function(e,t=!0){cE(Js),Ls(new Bs("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new ms(new w_(s.getProvider("auth-internal")),new b_(o,s.getProvider("app-check-internal")),CE(o,r),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),In(Eh,_h,e),In(Eh,_h,"esm2020")})();const cI="gen-lang-client-0728333167",uI="1:1090854519373:web:6c8d4f1bdcea3da034d204",BI="AIzaSyDpgrVyfqOxC5IhkdQ5YCqIXtGMPHHNsvc",hI="gen-lang-client-0728333167.firebaseapp.com",dI="ai-studio-yummysweets-1927dd13-1bc4-468e-92aa-cd849586f50a",fI="gen-lang-client-0728333167.firebasestorage.app",pI="1090854519373",mI="",gI="1090854519373-87pv7p4hqfl4895ft0je2a0218eeku7s.apps.googleusercontent.com",CI="",Dh={projectId:cI,appId:uI,apiKey:BI,authDomain:hI,firestoreDatabaseId:dI,storageBucket:fI,messagingSenderId:pI,measurementId:mI,oAuthClientId:gI,recaptchaSiteKey:CI};let se,Oe;const be={CREATE:"create",UPDATE:"update",DELETE:"delete",LIST:"list",GET:"get",WRITE:"write"};function Ae(n,e,t){var r,i,o,a;const s={error:n instanceof Error?n.message:String(n),authInfo:{userId:(r=Oe==null?void 0:Oe.currentUser)==null?void 0:r.uid,email:(i=Oe==null?void 0:Oe.currentUser)==null?void 0:i.email,emailVerified:(o=Oe==null?void 0:Oe.currentUser)==null?void 0:o.emailVerified,isAnonymous:(a=Oe==null?void 0:Oe.currentUser)==null?void 0:a.isAnonymous},operationType:e,path:t};throw console.error("Firestore Error: ",JSON.stringify(s)),new Error(JSON.stringify(s))}try{const n=Lh(Dh);se=Zw(n,Dh.firestoreDatabaseId),Oe=ky(n),(async()=>{try{await aI(xe(se,"test","connection"))}catch(e){e instanceof Error&&e.message.includes("the client is offline")&&console.error("Please check your Firebase configuration.")}})()}catch(n){console.error("Firebase init failed",n)}const vh="15551234567",yI=1310,ve={CONFIG:"sc_config_v2",USERS:"sc_users_v2",SESSION:"sc_session_v2",PRODUCTS:"sc_products_v2",PREF:"sc_pref_v2",ORDERS:"sc_orders_v2",CUSTOMER_NOTES:"sc_customer_notes_v2"},wh=[{value:"Vazirmatn",label:"Vazirmatn (modern, clean)"},{value:"Cairo",label:"Cairo (friendly, round)"},{value:"IBM Plex Sans Arabic",label:"IBM Plex Sans Arabic (corporate)"},{value:"Noto Naskh Arabic",label:"Noto Naskh Arabic (calligraphic)"},{value:"Noto Kufi Arabic",label:"Noto Kufi Arabic (geometric)"},{value:"Noto Sans Arabic",label:"Noto Sans Arabic (neutral)"},{value:"Amiri",label:"Amiri (calligraphic, premium)"},{value:"Tajawal",label:"Tajawal (modern, legible)"},{value:"Almarai",label:"Almarai (clean, contemporary)"},{value:"Rubik",label:"Rubik (multilingual, rounded)"}],Ih=[{value:"DM Sans",label:"DM Sans (geometric, clean modern)"},{value:"Cormorant Garamond",label:"Cormorant Garamond (artisanal luxury serif)"},{value:"Playfair Display",label:"Playfair Display (editorial serif)"},{value:"DM Serif Display",label:"DM Serif Display (warm display serif)"},{value:"Lora",label:"Lora (classic contemporary)"},{value:"Inter",label:"Inter (clean neutral)"},{value:"Outfit",label:"Outfit (boutique sans)"}],Zn={primaryCurrency:"USD",secondaryCurrency:"IQD",showSecondary:!0,currencySymbol:"د.ع",exchangeRate:1310,roundingRule:250,autoRefreshRate:!1,deliveryFee:8,freeDeliveryOver:60,minimumOrder:0,pickupOnly:!1,taxEnabled:!1,taxRate:0,taxLabel:"VAT",taxIncluded:!0,promoCode:"",promoType:"percent",promoValue:0,promoExpiry:"",lastUpdatedRate:null},Ke={berry:{label:{en:"Berry",ku:"بێری"},tokens:{cream:"#FFFBF7",shell:"#FDF3EC",blush:"#F6DFD8",linen:"#FAF1EA",berry:"#8E3B4A",berryDark:"#6E2C39",berryDeep:"#4E1E28",cocoa:"#3B2A26",cocoaSoft:"#5A423C",gold:"#C9A227",goldSoft:"#E8C766",ink:"#2E2422",muted:"#7C6A66",line:"#EFE1D9",lineStrong:"#E4D0C5"}},chocolate:{label:{en:"Chocolate",ku:"چاکۆلێت"},tokens:{cream:"#FFF9F2",shell:"#FBF0E2",blush:"#F2DFC7",linen:"#FDF5EA",berry:"#C89B6A",berryDark:"#A87A48",berryDeep:"#7A5230",cocoa:"#2A1710",cocoaSoft:"#4A2F22",gold:"#D4A24A",goldSoft:"#F0D196",ink:"#241410",muted:"#7A5C4A",line:"#EEDCC4",lineStrong:"#DEC5A4"}},sage:{label:{en:"Sage",ku:"سەیج"},tokens:{cream:"#FAF7F0",shell:"#F2EBDF",blush:"#E3E9DC",linen:"#F6F2E9",berry:"#8FA88A",berryDark:"#6E8A69",berryDeep:"#4E6649",cocoa:"#3E4F3A",cocoaSoft:"#5C6E58",gold:"#B5614D",goldSoft:"#D68A70",ink:"#2A3327",muted:"#6E7868",line:"#E2DCCC",lineStrong:"#CFC7B2"}},rose:{label:{en:"Rose",ku:"گۆڵ"},tokens:{cream:"#FFFBF8",shell:"#FBEFF0",blush:"#F5DCE0",linen:"#FDF3F4",berry:"#C97B84",berryDark:"#A85C67",berryDeep:"#7E3F4A",cocoa:"#5E2A3A",cocoaSoft:"#7C4756",gold:"#D4AF6A",goldSoft:"#EBCB91",ink:"#3A1F27",muted:"#8A6470",line:"#EFDCDE",lineStrong:"#DFC3C6"}},midnight:{label:{en:"Midnight Noir",ku:"نیوەشەو"},isDark:!0,tokens:{cream:"#15110E",shell:"#1E1814",blush:"#342820",linen:"#221B16",surface:"#241D18",surfaceHover:"#2D241E",surfaceInput:"#1B1512",berry:"#E07A5F",berryDark:"#C66247",berryDeep:"#F4A58E",cocoa:"#F7EFE8",cocoaSoft:"#D6C6B8",gold:"#E5B85C",goldSoft:"#F3D48E",ink:"#EDE3DA",muted:"#A89687",line:"#3A2E26",lineStrong:"#4F3F34"}}},mn={shopName:{en:"Yummy Sweets",ku:"یامی سویتس"},theme:{presetId:"berry",tokens:Ke.berry.tokens,mode:"light",autoDark:!1},tagline:{en:"Artisanal Boutique Bakery",ku:"شیرینەمەنی دەستکردی نایاب"},englishBodyFont:"DM Sans",englishDisplayFont:"Cormorant Garamond",kurdishBodyFont:"Vazirmatn",kurdishDisplayFont:"Vazirmatn",logoMode:"emoji",logoEmoji:"🎂",logoImage:"",logoUrl:"",logoImageUrl:"",announcement:{en:"Pre-order for weekend celebrations! <strong>Free local delivery</strong> on orders over $50.",ku:"پێشوەختە داوا بکە بۆ ئاهەنگەکانی کۆتایی هەفتە! <strong>گەیاندنی خۆڕایی</strong> بۆ داواکاری سەروو $50."},aboutUs:{en:"Yummy Sweets began as a dream in our home kitchen: to restore pure artisan craftsmanship to celebration cakes. We believe true indulgence comes from authentic, unadulterated ingredients. Every sponge is whipped by hand, every fruit compote simmered from scratch, and every ganache blended from fine single-origin cocoa.",ku:"یامی سویتس وەک خەونێک لە چێشتخانەی ماڵەکەمانەوە دەستی پێکرد: گەڕاندنەوەی هونەری ڕەسەنی دەستکرد بۆ کێکەکانی ئاهەنگگێڕان. ئێمە باوەڕمان وایە کە چێژی ڕاستەقینە لە پێکهاتەی سروشتی و بێ ساختە دەست دەکەوێت. هەموو کێکێک بە دەست ئامادە دەکرێت و بە باشترین کەرەستە دەڕازێنرێتەوە."},reviews:[{initials:"SK",name:{en:"Sara & Kareem",ku:"سارا و کەریم"},role:{en:"Verified Customer",ku:"کڕیاری دڵنیاکراو"},quote:{en:'"The Pistachio Rose cake was the centerpiece of our anniversary dinner. Truly moist, not overly sweet, and breathtakingly decorated."',ku:'"کێکی فستق و گوڵاو جوانترین دیاری بوو بۆ ساڵیادی هاوسەرگیریمان. زۆر ناسک بوو و شیرینییەکەی تەواو لەجێی خۆیدا بوو."'}},{initials:"DA",name:{en:"Danyar Azad",ku:"دانیار ئازاد"},role:{en:"Office Celebrations",ku:"ئاهەنگی فەرمانگە"},quote:{en:'"Ordering via WhatsApp was so fast! Sent the order at 10 AM, had freshly baked cupcakes at my office by 2 PM. Everyone raved about them."',ku:'"داواکردن بە واتسئاپ زۆر خێرا بوو! کاتژمێر ١٠ داوام کرد، کاتژمێر ٢ لە ئۆفیس پێم گەیشت."'}},{initials:"LR",name:{en:"Lina Rostam",ku:"لینا ڕۆستەم"},role:{en:"Weekend Regular",ku:"کڕیاری هەمیشەیی"},quote:{en:'"Their French macarons and salted caramel tart are pure perfection. You can taste the real butter and quality vanilla in every single bite."',ku:'"ماکارۆن و تارتی کارامێلەکەیان بێ وێنەیە. تامی کەرەی ڕاستەقینە و ڤانێلای چاک لە هەموو پارچەیەکدا دیارە."'}}],faq:[{q:{en:"How far in advance should I place my cake order?",ku:"چەند کاتژمێر پێشوەخت پێویستە کێک داوا بکەم؟"},a:{en:"For signature menu cakes, orders placed 24 hours in advance are guaranteed. Custom tiered celebration cakes require 48 to 72 hours notice.",ku:"بۆ کێکە ئاساییەکانی لیستەکە، داواکاری ٢٤ کاتژمێر پێشتر گەرەنتی کراوە. بۆ کێکی تایبەتی چەندین نهۆم پێویستمان بە ٤٨ بۆ ٧٢ کاتژمێرە."}},{q:{en:"How does the WhatsApp checkout process work?",ku:"شێوازی کڕین لەڕێگەی واتسئاپ چۆنە؟"},a:{en:"When you tap 'Send Order via WhatsApp', your selected items are automatically drafted into a clean message. You can add your delivery address before sending.",ku:'کاتێک دەست دەنێیت بە "ناردن لە واتسئاپ"، هەموو شیرینییە هەڵبژێردراوەکان لە پەیامێکی ڕێکخراودا ئامادە دەکرێن و ڕاستەوخۆ دەینێریت بۆمان!'}},{q:{en:"Do you offer gluten-free or eggless options?",ku:"ئایا کێکی بێ هێلکە یان بێ گلوتینتان هەیە؟"},a:{en:"Yes! We offer specialized eggless chocolate fudge cakes and almond-flour gluten-friendly tarts upon request. Please specify in your notes.",ku:"بەڵێ! کێکی شوکۆڵاتەی تایبەت بەبێ هێلکە و تارتی ئاردی بادەم بۆ کەسانی هەستیار ئامادە دەکرێت بە داواکاری پێشوەختە."}}],contact:{whatsapp:"15551234567",phone:"+964 750 123 4567",email:"hello@yummysweets.com",address:{en:"Dream City Avenue, Near English Village, Erbil, Kurdistan",ku:"شەقامی دریم سیتی، نزیک گوندی ئینگلیزی، هەولێر، کوردستان"},hours:{en:`Mon – Sun: 9:00 AM – 10:00 PM
Fresh bakes ready by 10 AM daily`,ku:`دووشەممە – یەکشەممە: ٩:٠٠ بەیانی – ١٠:٠٠ شەو
شیرینی تازە کاتژمێر ١٠ی بەیانی ئامادەیە`}},socials:{instagram:"https://instagram.com",facebook:"https://facebook.com",tiktok:"https://tiktok.com",snapchat:"https://snapchat.com"},iqdRate:yI,economy:{...Zn},showWatermark:!0};function EI(n){return new Promise((e,t)=>{if(!n)return t(new Error("NO_FILE"));if(!n.type||!n.type.startsWith("image/"))return t(new Error("INVALID_TYPE"));const s=5*1024*1024;if(n.size>s)return t(new Error("FILE_TOO_LARGE"));const r=new FileReader;r.onerror=()=>t(new Error("READ_ERROR")),r.onload=i=>{const o=new Image;o.onerror=()=>t(new Error("DECODE_ERROR")),o.onload=()=>{try{let c=o.naturalWidth||o.width,u=o.naturalHeight||o.height;if(c>800){const O=800/c;c=800,u=Math.round(u*O)}const h=document.createElement("canvas");h.width=c,h.height=u;const f=h.getContext("2d");if(!f)return t(new Error("CANVAS_ERROR"));f.drawImage(o,0,0,c,u);let p="";try{p=h.toDataURL("image/jpeg",.85)}catch{p=h.toDataURL("image/png")}const g=p.length-(p.indexOf(",")+1);let v=Math.round(g*.75);if(v>500*1024)try{const O=h.toDataURL("image/jpeg",.65),F=O.length-(O.indexOf(",")+1),S=Math.round(F*.75);p=O,v=S}catch{}if(v>800*1024)return t(new Error("OUTPUT_TOO_LARGE"));e(p)}catch(a){t(a)}},o.src=i.target.result},r.readAsDataURL(n)})}function _I(n){return new Promise((e,t)=>{if(!n)return t(new Error("NO_FILE"));const s=5*1024*1024;if(n.size>s)return t(new Error("FILE_TOO_LARGE"));if(n.type==="image/svg+xml"||n.name&&n.name.toLowerCase().endsWith(".svg")){if(n.size>100*1024)return t(new Error("OUTPUT_TOO_LARGE"));const i=new FileReader;i.onerror=()=>t(new Error("READ_ERROR")),i.onload=o=>{try{let a=String(o.target.result||"");const c=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,u=/\son\w+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi,h=/javascript\s*:[^"'>]+/gi;if(a=a.replace(c,""),a=a.replace(u,""),a=a.replace(h,""),!a.includes("<svg")||!a.includes("</svg>"))return t(new Error("INVALID_TYPE"));const f="data:image/svg+xml;utf8,"+encodeURIComponent(a),p=f.length-(f.indexOf(",")+1),g=Math.round(p*.75);e({dataUrl:f,approxBytes:g,isSvg:!0})}catch{t(new Error("SANITIZATION_FAILED"))}},i.readAsText(n);return}if(!n.type||!n.type.startsWith("image/"))return t(new Error("INVALID_TYPE"));const r=new FileReader;r.onerror=()=>t(new Error("READ_ERROR")),r.onload=i=>{const o=new Image;o.onerror=()=>t(new Error("DECODE_ERROR")),o.onload=()=>{try{const a=o.naturalWidth||o.width,c=o.naturalHeight||o.height;if(!a||!c)return t(new Error("INVALID_DIMENSIONS"));const u=256,h=a<c?u/a:u/c,f=Math.round(a*h),p=Math.round(c*h),g=Math.round((f-u)/2),v=Math.round((p-u)/2),O=document.createElement("canvas");O.width=u,O.height=u;const F=O.getContext("2d");if(!F)return t(new Error("CANVAS_ERROR"));F.drawImage(o,-g,-v,f,p);const S=n.type==="image/png"||n.type==="image/webp";let G="";S?G=O.toDataURL("image/png"):G=O.toDataURL("image/jpeg",.85);let Z=G.length-(G.indexOf(",")+1),le=Math.round(Z*.75);if(le>150*1024&&(G=O.toDataURL("image/jpeg",.8),Z=G.length-(G.indexOf(",")+1),le=Math.round(Z*.75),le>150*1024))return t(new Error("OUTPUT_TOO_LARGE"));e({dataUrl:G,approxBytes:le,isSvg:!1})}catch(a){t(a)}},o.src=i.target.result},r.readAsDataURL(n)})}const Th=[{id:"u_dev",username:"dev",password:"dev123",name:"Technical Operator",role:"dev"},{id:"u_admin",username:"admin",password:"admin123",name:"Head Baker Admin",role:"admin"}],Ja=[{id:"p1",category:"cakes",emoji:"🎂",img:"https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&auto=format&fit=crop&q=80",priceUSD:38,tag:"bestseller",name:{en:"Pistachio Rose Layer Cake",ku:"کێکی چین چینی فستق و گوڵاو"},desc:{en:"Delicate roasted pistachio sponge layered with fragrant Persian rosewater mascarpone and white chocolate.",ku:"کێکی ناسکی فستقی برژاو بە کرێمی گوڵاوی ئێرانی و شوکۆڵاتەی سپی."},unit:{en:'8" Cake (10-12 slices)',ku:"کێکی ٨ ئینچ (١٠-١٢ پارچە)"}},{id:"p2",category:"cakes",emoji:"🍫",img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",priceUSD:42,tag:"bestseller",name:{en:"Belgian Dark Truffle Cake",ku:"کێکی تڕەفڵی شوکۆڵاتەی بەلجیکی"},desc:{en:"Decadent 70% Callebaut dark chocolate layers drenched in whipped espresso ganache.",ku:"چەندین چینی شوکۆڵاتەی تۆخی بەلجیکی لەگەڵ گاناشی قاوەی ئێسپرێسۆ."},unit:{en:'8" Cake (10-12 slices)',ku:"کێکی ٨ ئینچ (١٠-١٢ پارچە)"}},{id:"p3",category:"cakes",emoji:"🍓",img:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&auto=format&fit=crop&q=80",priceUSD:40,tag:"new",name:{en:"Berry Chantilly Chiffon",ku:"کێکی شیفۆنی تووتڕکی شانتیلی"},desc:{en:"Feather-light vanilla chiffon crowned with fresh wild strawberries, blackberries, and sweet cream.",ku:"کێکی زۆر سووکی ڤانێلا بە کرێمی تازە و تووی کێوی و فرەولەی سروشتی."},unit:{en:'8" Cake (10-12 slices)',ku:"کێکی ٨ ئینچ (١٠-١٢ پارچە)"}},{id:"p4",category:"cakes",emoji:"🥜",img:"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop&q=80",priceUSD:36,tag:"none",name:{en:"Salted Caramel Pecan Cake",ku:"کێکی کارامێلی سوێر و گوێزی پێکەن"},desc:{en:"Brown butter sponge paired with toasted Georgia pecans and fleur de sel caramel drizzle.",ku:"کێکی کەرەی قاوەیی لەگەڵ گوێزی برژاو و سۆسی کارامێلی سوێری فەڕەنسی."},unit:{en:'8" Cake (10-12 slices)',ku:"کێکی ٨ ئینچ (١٠-١٢ پارچە)"}},{id:"p5",category:"cakes",emoji:"🍰",img:"https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800&auto=format&fit=crop&q=80",priceUSD:35,tag:"none",name:{en:"Signature Red Velvet",ku:"ڕێد ڤێلڤێتی تایبەت"},desc:{en:"Classic crimson buttermilk sponge layered with rich Madagascar vanilla cream cheese.",ku:"کێکی سووری نەریتی لەگەڵ کرێم چیسی دەوڵەمەندی ڤانێلای ماداگاسکەر."},unit:{en:'8" Cake (10-12 slices)',ku:"کێکی ٨ ئینچ (١٠-١٢ پارچە)"}},{id:"p6",category:"cakes",emoji:"🍋",img:"https://images.unsplash.com/photo-1534432182912-63863115e106?w=800&auto=format&fit=crop&q=80",priceUSD:34,tag:"none",name:{en:"Lemon Lavender Dream",ku:"کێکی لیمۆ و لاڤەندەر"},desc:{en:"Zesty Meyer lemon curd layered with organic Provence lavender-infused buttercream.",ku:"تامی ترش و شیری لیمۆی سروشتی بە کرێمی لاڤاندەری فەڕەنسی."},unit:{en:'8" Cake (10-12 slices)',ku:"کێکی ٨ ئینچ (١٠-١٢ پارچە)"}},{id:"p7",category:"cakes",emoji:"🌰",img:"https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&auto=format&fit=crop&q=80",priceUSD:45,tag:"new",name:{en:"Hazelnut Praline Royal",ku:"کێکی ڕۆیاڵی بوندوق و پڕالین"},desc:{en:"Roasted Piedmont hazelnut dacquoise with crispy wafer crunch and silky Gianduja mousse.",ku:"کێکی داگوایزی بوندوق لەگەڵ ویفەری کڕەنچی و مووسی شوکۆڵاتە."},unit:{en:'8" Cake (12 slices)',ku:"کێکی ٨ ئینچ (١٢ پارچە)"}},{id:"p8",category:"cupcakes",emoji:"🧁",img:"https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&auto=format&fit=crop&q=80",priceUSD:18,tag:"bestseller",name:{en:"Tahitian Vanilla Cupcakes",ku:"کەپکێکی ڤانێلای تاهیتی"},desc:{en:"Moist golden sponge crowned with swirls of aromatic Tahitian vanilla bean buttercream.",ku:"کەپکێکی نەرم و بەتام بە کرێمی تایبەتی دەنکۆڵەی ڤانێلا."},unit:{en:"Box of 6",ku:"پاکەتی ٦ دانەیی"}},{id:"p9",category:"cupcakes",emoji:"🍮",img:"https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&auto=format&fit=crop&q=80",priceUSD:20,tag:"new",name:{en:"Salted Dulce de Leche Cupcakes",ku:"کەپکێکی کارامێلی دۆلسێ دێ لێچێ"},desc:{en:"Cinnamon spiced cake with a molten caramelized milk center and toffee crunch.",ku:"کێکی دارچینی بە ناوەرۆکی کارامێلی گەرم و تۆفی کڕەنچی."},unit:{en:"Box of 6",ku:"پاکەتی ٦ دانەیی"}},{id:"p10",category:"cupcakes",emoji:"🫐",img:"https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&auto=format&fit=crop&q=80",priceUSD:19,tag:"none",name:{en:"Wild Blueberry Zest Cupcakes",ku:"کەپکێکی بلوبێری و توێکڵی لیمۆ"},desc:{en:"Bursting with fresh blueberries and topped with a bright lemon meringue swirl.",ku:"پڕ لە بلوبێری تازە لەگەڵ سۆسی سەرنجڕاکێشی لیمۆ و مێرێنگ."},unit:{en:"Box of 6",ku:"پاکەتی ٦ دانەیی"}},{id:"p11",category:"cupcakes",emoji:"🍫",img:"https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&auto=format&fit=crop&q=80",priceUSD:20,tag:"none",name:{en:"Triple Chocolate Fudge Cupcakes",ku:"کەپکێکی سێ قاتی شوکۆڵاتە"},desc:{en:"Dark chocolate cake filled with molten ganache and sprinkled with cocoa nibs.",ku:"کێکی شوکۆڵاتەی تۆخ بە ناوەرۆکی گاناش و کەرەستەی کاکاو."},unit:{en:"Box of 6",ku:"پاکەتی ٦ دانەیی"}},{id:"p12",category:"desserts",emoji:"🥮",img:"https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&auto=format&fit=crop&q=80",priceUSD:24,tag:"bestseller",name:{en:"Parisian Macaron Collection",ku:"کۆمەڵەی ماکارۆنی پاریسی"},desc:{en:"Delicate almond shells: Pistachio, Dark Chocolate, Rose Raspberry, and Salted Caramel.",ku:"ماکارۆنی ڕەسەنی فەڕەنسی: فستق، شوکۆڵاتە، گوڵ، و کارامێل."},unit:{en:"Box of 12",ku:"پاکەتی ١٢ دانەیی"}},{id:"p13",category:"desserts",emoji:"🧀",img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80",priceUSD:28,tag:"new",name:{en:"Basque Burnt Cheesecake",ku:"چیزکێکی باسکە سووتاوی ئیسپانی"},desc:{en:"Caramelized crust with an ultra-creamy, molten center baked at high heat.",ku:"تەختی کارامێلی سووتاو لەگەڵ ناوەرۆکی زۆر نەرم و پەنیری لەسەر شێوازی ئیسپانی."},unit:{en:'7" Whole Cake',ku:"کێکی تەواوی ٧ ئینچ"}},{id:"p14",category:"desserts",emoji:"🥧",img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",priceUSD:22,tag:"none",name:{en:"Salted Caramel Chocolate Tart",ku:"تارتی شوکۆڵاتە و کارامێلی سوێر"},desc:{en:"Crisp cocoa sablé pastry shell filled with gooey caramel and glossy chocolate glaze.",ku:"تارتی برژاوی کاکاو پڕ لە کارامێلی سوێر و گاناشی گەشاوی شوکۆڵاتە."},unit:{en:'8" Tart (8 slices)',ku:"تارتی ٨ ئینچ (٨ پارچە)"}}],ja={en:{btnCancel:"Cancel",btnSubmit:"Submit",btnSaveConfig:"Save Settings",economyTitle:"Pricing & Economy",economyDesc:"Manage currency conversion, delivery fees, and minimum order rules.",shopTagline:"Artisanal Boutique Bakery",announcementText:"Pre-order for weekend celebrations! <strong>Free local delivery</strong> on orders over $50.",navMenu:"Menu",navHowItWorks:"How It Works",navOurStory:"Our Story",navReviews:"Reviews",navContact:"Contact",navFaq:"FAQ",heroEyebrow:"Artisanal Bakery & Pâtisserie",heroTitle:"Handcrafted cakes made with <em>passion</em> & love",heroLead:"We craft bespoke celebratory cakes, delicate pastries, and decadent cupcakes daily using premium organic ingredients. Delivered straight to your celebration with seamless WhatsApp ordering.",heroCtaPrimary:"Explore Our Menu",heroCtaSecondary:"Chat with Baker",trust1:"100% Organic Flours",trust2:"Same-Day Fresh Bake",trust3:"Custom Messages",badgeFresh:"Fresh today from 6 AM",heroReviewSnippet:'"Best Red Velvet in town! Unmatched flavor."',feat1Title:"Real Ingredients",feat1Desc:"Pure butter, Belgian chocolate, fresh seasonal berries, and zero artificial preservatives.",feat2Title:"Careful Delivery",feat2Desc:"Handled with gentle temperature-controlled care so your cake arrives picture-perfect.",feat3Title:"Custom Creations",feat3Desc:"Bespoke tiers, customized chocolate writing, and tailored sweetness for every milestone.",menuEyebrow:"Our Daily Selection",menuTitle:"Baked Fresh For You",menuLead:"Browse our signature cakes, cupcakes, and desserts. Click 'Add to Order' to assemble your WhatsApp cart.",catAll:"All Sweets",catCakes:"Layer Cakes",catCupcakes:"Cupcakes",catDesserts:"Desserts",tagBestseller:"Bestseller",tagNew:"New",btnAdd:"Add to Order",stepsEyebrow:"Simple & Delightful",stepsTitle:"How Ordering Works",stepsLead:"Three effortless steps from our kitchen to your celebration table.",step1Title:"Choose Your Favorites",step1Desc:"Browse our menu and pick the cakes, cupcakes, or desserts you'd love to share with loved ones.",step2Title:"Send Via WhatsApp",step2Desc:"Click Send Order to open an instant pre-formatted WhatsApp message directly to our head baker.",step3Title:"Confirm & Celebrate",step3Desc:"We confirm your delivery slot or pickup time, bake fresh that morning, and deliver to your door.",storyEyebrow:"Our Heritage",storyTitle:"Crafted with patience, baked with devotion",bullet1:"Slow-fermented buttermilk and organic flours",bullet2:"Zero synthetic flavorings or artificial frostings",bullet3:"Dedicated pastry artisans with European techniques",reviewsEyebrow:"Testimonials",reviewsTitle:"Sweet Words from Customers",reviewsLead:"Real feedback from memorable birthdays, weddings, and weekend family teas.",btnLeaveReview:"Leave a Review",leaveReviewTitle:"Leave a Review",leaveReviewDesc:"We'd love to hear about your experience!",reviewFormName:"Your Name",reviewFormQuote:"Your Review",review1Quote:'"The Pistachio Rose cake was the centerpiece of our anniversary dinner. Truly moist, not overly sweet, and breathtakingly decorated."',review1Role:"Verified Customer",review2Quote:'"Ordering via WhatsApp was so fast! Sent the order at 10 AM, had freshly baked cupcakes at my office by 2 PM. Everyone raved about them."',review2Role:"Office Celebrations",review3Quote:'"Their French macarons and salted caramel tart are pure perfection. You can taste the real butter and quality vanilla in every single bite."',review3Role:"Weekend Regular",faqEyebrow:"Common Inquiries",faqTitle:"Frequently Asked Questions",faqLead:"Everything you need to know about our ordering process, dietary needs, and delivery times.",faq1Q:"How far in advance should I place my cake order?",faq1A:"For signature menu cakes, orders placed 24 hours in advance are guaranteed. Custom tiered celebration cakes require 48 to 72 hours notice so our chefs can prepare custom decorations and specialty fillings.",faq2Q:"How does the WhatsApp checkout process work?",faq2A:"When you tap 'Send Order via WhatsApp', your selected items, quantities, and totals are automatically drafted into a clean WhatsApp message. You can add your delivery address and date before sending it directly to our team!",faq3Q:"Do you offer gluten-free or eggless options?",faq3A:"Yes! We offer specialized eggless chocolate fudge cakes and almond-flour gluten-friendly tarts upon request. Please specify dietary preferences in your WhatsApp message notes.",faq4Q:"Can I customize the cake writing or message?",faq4A:"Every full-sized cake includes complimentary chocolate piped lettering on an artisan sugar plaque. Simply include your desired message in the order notes or chat.",faq5Q:"What payment methods do you accept?",faq5A:"We accept cash upon delivery, FastPay, FIB (First Iraqi Bank), and ZainCash transfers. Payment details are finalized during WhatsApp confirmation.",ctaTitle:"Ready to make your occasion sweeter?",ctaLead:"Have a custom design or special theme in mind? Our master bakers are ready to bring your vision to life.",ctaBtnWhatsApp:"Chat on WhatsApp",ctaBtnMenu:"View All Cakes",cardAddressTitle:"Bakery Kitchen",cardHoursTitle:"Opening Hours",cardContactTitle:"Direct Contact",footerBlurb:"A boutique bakery dedicated to handcrafted artisanal celebration cakes, gourmet cupcakes, and fine French pastries.",footerShopLinks:"Shop",footerHelpLinks:"Help & Info",footerHoursTitle:"Baking Hours",footerBestsellers:"Bestsellers",copyrightAllRights:"All rights reserved.",footerTagline:"Baked fresh daily with wholesome ingredients & pure love.",btnSignIn:"Sign In",btnPanel:"Control Panel",btnLogout:"Log Out",trayItemLabel:"items",trayItemLabelSingular:"item",trayClear:"Clear Order",traySendWhatsApp:"Send Order via WhatsApp",tabCustomer:"Customer",customerTitle:"Quick Customer Sign In",customerDesc:"Sign in with your phone and name. No password needed! Your name will pre-fill your WhatsApp orders.",labelPhone:"Mobile Number (min 6 digits)",labelDisplayName:"Your Name / Display Name",btnContinue:"Continue as Customer",labelUsername:"Username",labelPassword:"Password",tabAdmin:"Admin",tabDev:"Developer",staffFormDesc:"Please enter your management credentials to access the bakery control panel.",historyZero:"You've placed 0 orders.",trayEmptyPreview:"No items selected",storyImgTitle:"Sweet Artisan Heritage",storyImgDesc:"Fresh from our oven to your family celebration",review1Name:"Sara & Kareem",review2Name:"Danyar Azad",review3Name:"Lina Rostam",footerOrdersInfo:"Orders & inquiries:",invalidPromo:"Invalid promo code",promoRemoved:"Promo code removed",itemsNotAvailable:"These items are currently not available on the menu.",signedInAs:"Signed in as {name}",loggedInAs:"Logged in as {role}",loggedOut:"Logged out successfully.",orderStatusUpdated:"Order status updated to {status}",noteSaved:"Note saved",invalidUrl:"Invalid URL scheme. Only http:// and https:// links are supported.",staffAdded:"Staff user added successfully",usersTitle:"User & Staff Management",usersAddStaff:"Add Staff Account",usersSearch:"Search users…",usersHint:"Admins manage staff accounts and passwords. Developer and admin accounts are protected.",usersColRole:"Role",usersColName:"Name",usersColLogin:"Username / Phone",usersColPassword:"Password",usersColPerms:"Permissions",usersColActions:"Actions",usersNoPassword:"Customer — no login",usersYou:"(You)",usersEmpty:"No users match your search.",usersNoAccess:"You do not have access to user management.",usersEdit:"Edit",usersResetPw:"Reset password",usersDelete:"Delete",role_admin:"ADMIN",role_dev:"DEV",role_staff:"STAFF",role_customer:"CUSTOMER",perm_products:"Products",perm_customers:"Customers",perm_economy:"Economy",perm_brand:"Brand & Logo",perm_theme:"Theme",perm_fonts:"Fonts",perm_about:"About Us",perm_contact:"Contact",perm_socials:"Social Media",editUserTitle:"Edit User",usersNewPwPrompt:"New password for {name}:",staffPwTooShort:"Password must be at least 4 characters.",usersCannotDeleteSelf:"You cannot delete your own account.",usersCannotDeleteElevated:"Only the developer can delete admin or developer accounts.",usersConfirmDelete:'Delete user "{name}"? This cannot be undone.',phonePreviewLabel:"Preview width",phonePreviewDesktop:"Desktop",phonePreviewPhone:"Phone",backupImported:"Backup imported successfully!",copiedJson:"Copied JSON to clipboard!",factoryResetDone:"Reset to factory defaults complete.",btnLogin:"Login to Dashboard",panelTitle:"Bakery Control Panel",uploadPhoto:"Upload photo",replacePhoto:"Replace photo",removePhoto:"Remove photo",photoHint:"JPG, PNG or WebP — auto-resized to 800px wide. Max 5 MB.",noPhotoHint:"No photo yet — emoji will be shown",prodPhotoError:"Failed to process image. Please try another file.",prodPhotoTooLarge:"Processed image is too large. Please select a smaller file.",prodPhotoRemoved:"Photo removed.",storageQuotaError:"Storage full — try smaller images or remove some photos.",prodDeleteConfirm:"Are you sure you want to delete this product?",btnAddNewProduct:"+ Add New Product",btnSaveProduct:"Save Product",btnDeleteProduct:"Delete Product",tabFonts:"Fonts",fieldKurdishBody:"Kurdish body font",fieldKurdishDisplay:"Kurdish heading font",fieldEnglishBody:"English body font",fieldEnglishDisplay:"English heading font",saveFonts:"Save fonts",fontPreview:"Preview",customizeTitle:"Customize",customizeLeaveOut:"Leave out",customizeSkip:"Skip — add as is",customizeAdd:"Add to order",customizeNone:"Nothing to customize",orderNoteLabel:"Note for the baker (optional)",orderNotePlaceholder:'e.g. "Happy birthday Sara" or "leave at the door"',orderNoteTooLong:"Note is too long — max 300 characters.",waNote:"Note for the baker",waExclude:"No",toastPhotoReady:"Photo processed and ready to save.",toastAdded:"Added to your order tray!",toastOrderCleared:"Order tray cleared.",toastSaved:"Saved successfully",toastDeleted:"Deleted successfully",toastInvalidPhone:"Please enter a valid mobile number with at least 6 digits.",toastInvalidLogin:"Invalid username or password.",toastInvalidJson:"Invalid JSON format. Please check your input.",tabEconomy:"Economy",economyCurrencies:"Currencies",economyExchange:"Exchange rate",economyDelivery:"Delivery",economyTax:"Tax",economyDiscounts:"Discounts",fieldPrimaryCurrency:"Primary currency (locked)",fieldSecondaryCurrency:"Secondary currency",fieldShowSecondary:"Show secondary currency in storefront",fieldCurrencySymbol:"Currency symbol",fieldExchangeRate:"1 USD = ? IQD",fieldRoundingRule:"Round converted prices to",fieldAutoRefresh:"Auto-refresh rate (not yet active)",fieldDeliveryFee:"Flat delivery fee (USD)",fieldFreeDeliveryOver:"Free delivery over (USD)",fieldMinimumOrder:"Minimum order (USD)",fieldPickupOnly:"Pickup only — hide delivery",fieldTaxEnabled:"Charge tax",fieldTaxRate:"Tax rate (%)",fieldTaxLabel:"Tax label",fieldTaxIncluded:"Prices already include tax",fieldPromoCode:"Active promo code",fieldPromoType:"Discount type",fieldPromoValue:"Discount value",fieldPromoExpiry:"Expires on",saveEconomy:"Save economy settings",roundNearest1:"Nearest 1",roundNearest250:"Nearest 250",roundNearest500:"Nearest 500",roundNearest1000:"Nearest 1000",promoPercent:"Percentage (%)",promoFixed:"Fixed amount (USD)",subtotal:"Subtotal",deliveryFee:"Delivery",tax:"Tax",discount:"Discount",total:"Total",freeDelivery:"Free",minimumOrderWarning:"Minimum order is {amount}. Add {remaining} more to checkout.",promoApplied:"Promo code {code} applied",promoExpired:"Promo code expired",economyPreview:"Live preview",economyPreviewSample:"Sample order: $50 subtotal",trayDetails:"Details ▾",trayDetailsClose:"Close ▴",trayApplyPromo:"Apply",trayRemovePromo:"Remove",trayPromoPlaceholder:"Promo code",deliveryFreeForEveryone:"Free delivery for everyone",freeDeliveryWarning:"Free delivery threshold is lower than minimum order — customers below minimum cannot checkout anyway.",promoActive:"Active",promoTooShort:"Needs 3+ chars",taxAddedCheckout:"Added at checkout",taxIncludedLabel:"incl.",pickupAvailable:"Pickup available",justNow:"Just now",roundedFrom:"Rounded from {raw} to {rounded} (nearest {rule})",searchPlaceholder:"Search cakes, cupcakes, desserts…",searchShortcut:"Press ⌘K to search",searchResultsCount:"Showing {shown} of {total} cakes",searchNoResults:'No cakes match "{query}".',searchEmptyDesc:"Try clearing your search query or selecting a different price range or category.",searchClearAll:"Clear all filters",searchClearSearch:"Clear search",sortLabel:"Sort",sortPopular:"Popular",sortNewest:"Newest",sortPriceAsc:"Price: Low to High",sortPriceDesc:"Price: High to Low",sortNameAsc:"Name A–Z",priceRangeLabel:"Price",priceAny:"Any price",priceUnder20:"Under $20",price20to40:"$20 – $40",price40to60:"$40 – $60",priceOver60:"Over $60",myOrders:"My Orders",myOrdersTitle:"My Orders",myOrdersSubtitle:"You've placed {count} orders since {date}.",myOrdersEmpty:"No orders yet.",myOrdersEmptyHint:"Browse the menu and place your first order — it'll appear here.",myOrdersBrowse:"Browse the menu",myOrdersReorder:"Reorder",myOrdersDetails:"View details",myOrdersTotalSpent:"Total spent",myOrdersTotalOrders:"Orders",myOrdersFavourite:"Most ordered",orderStatusPending:"Pending",orderStatusBaking:"Baking",orderStatusDelivered:"Delivered",orderStatusCancelled:"Cancelled",orderSignInToSave:"Sign in to save this order to your history.",orderAddedToTray:"{count} items added to your order",tabCustomers:"Customers",customersSearch:"Search by name or mobile…",customersSortName:"Name",customersSortLastOrder:"Last order",customersSortTotalSpent:"Total spent",customersSortOrderCount:"Order count",customersEmpty:"No customers yet.",customerOrders:"Orders",customerTotalSpent:"Total spent",customerLastOrder:"Last order",customerNoOrders:"This customer has no orders.",customerPrivateNote:"Private note (staff only)",customerChangeStatus:"Change status",logoSection:"Logo",logoModeEmoji:"Emoji",logoModeUpload:"Upload",logoModeUrl:"URL",logoPreview:"Preview",logoUploadBtn:"Upload logo",logoReplaceBtn:"Replace logo",logoRemoveBtn:"Remove logo",logoRemoveConfirm:"Remove the current logo and use an emoji instead?",logoRemoved:"Logo removed — using emoji.",logoUrlLabel:"Remote image URL",logoUrlHint:"Paste a direct link to a PNG, JPG, WebP or SVG file.",logoUrlValid:"URL valid",logoUrlInvalid:"Couldn't load this URL",logoEmojiLabel:"Emoji",logoEmojiHint:"Pick one or paste your own.",logoEmojiEmpty:"Empty — using default 🎂",logoUploadHint:"Square images work best. Auto-resized to 256×256. Max 5 MB.",logoUploadReady:"Ready to save",logoUploadError:"Couldn't read that image. Try a different file.",logoUploadTooLarge:"Image too large after resizing. Try a simpler logo.",logoFaviconNote:"Also updates the browser tab icon.",logoFallbackWarning:"Image couldn't load. Falling back to emoji.",tabTheme:"Theme",themePresetTitle:"Preset palettes",themePreviewTitle:"Live preview",themeSave:"Save theme",themeApplied:"Theme saved",themeReverted:"Reverted to last saved theme",themePreviewHeading:"A sample heading",themePreviewBody:"Body text on the base background, exactly as it will appear on the site.",themePreviewPrimary:"Primary button",themePreviewGhost:"Ghost button",themePreviewGold:"Gold accent ★★★★★",themePreviewPrice:"$38 · 49,750 د.ع",themePresetBerry:"Berry",themePresetChocolate:"Chocolate",themePresetSage:"Sage",themePresetRose:"Rose",themePresetMidnight:"Midnight",themeAutoDark:"Enable auto-dark mode (system)"},ku:{btnCancel:"پاشگەزبوونەوە",btnSubmit:"ناردن",btnSaveConfig:"پاشەکەوتکردنی ڕێکخستنەکان",economyTitle:"نرخدانان و ئابووری",economyDesc:"بەڕێوەبردنی نرخی ئاڵوگۆڕ، کرێی گەیاندن و مەرجەکانی کەمترین داواکاری.",btnCancel:"پاشگەزبوونەوە",btnSubmit:"ناردن",btnSaveConfig:"پاشەکەوتکردنی ڕێکخستنەکان",economyTitle:"نرخدانان و ئابووری",economyDesc:"بەڕێوەبردنی نرخی ئاڵوگۆڕ، کرێی گەیاندن و مەرجەکانی کەمترین داواکاری.",shopTagline:"شیرینەمەنی دەستکردی نایاب",announcementText:"پێشوەختە داوا بکە بۆ ئاهەنگەکانی کۆتایی هەفتە! <strong>گەیاندنی خۆڕایی</strong> بۆ داواکاری سەروو $50.",navMenu:"لیستی شیرینی",navHowItWorks:"شێوازی داواکردن",navOurStory:"چیرۆکی ئێمە",navReviews:"ڕای کڕیاران",navContact:"پەیوەندی",navFaq:"پرسیارە باوەکان",heroEyebrow:"شیرینەمەنی و پاتیسێری دەستکرد",heroTitle:"کێکی تایبەت بە <em>شەیدایی</em> و خۆشەویستی",heroLead:"ئێمە هەموو ڕۆژێک کێکی ئاهەنگگێڕان، شیرینی ناسک، و کەپکێکی بێوێنە بە کەرەستەی ئۆرگانیک دروست دەکەین. گەیاندنی خێرا لەڕێگەی واتسئاپەوە بۆ ئاهەنگەکانتان.",heroCtaPrimary:"بینینی هەموو شیرینییەکان",heroCtaSecondary:"گفتوگۆ لەگەڵ وەستای کێک",trust1:"١٠٠٪ ئاردی ئۆرگانیک",trust2:"برژاوی ڕۆژ و تازە",trust3:"نووسینی ناوی دڵخواز",badgeFresh:"تازە لە کاتژمێر ٦ی بەیانییەوە",heroReviewSnippet:'"باشترین کێکی ڕێد ڤێلڤێت لە شاردا! تامی بێوێنەیە."',feat1Title:"پێکهاتەی سروشتی",feat1Desc:"کەرەی پاک، شوکۆڵاتەی بەلجیکی، میوەی تازە، و بەبێ هیچ ماددەیەکی پارێزەر.",feat2Title:"گەیاندنی پارێزراو",feat2Desc:"بە ئۆتۆمبێلی فێنککەرەوە دەگەیەنرێت بۆ ئەوەی کێکەکەت بە جوانی تەواو بگات.",feat3Title:"دیزاینی دڵخواز",feat3Desc:"کێکی چەندین نهۆم، نووسینی شوکۆڵاتەیی، و شیرینی تایبەت بۆ هەموو یادێک.",menuEyebrow:"هەڵبژاردەی ڕۆژانەمان",menuTitle:"بە تازەیی بۆ تۆ برژاوە",menuLead:'سەیری کێک و کەپکێک و شیرینییەکانمان بکە. کرتە لەسەر "زیادکردن" بکە بۆ داواکردن لە واتسئاپ.',catAll:"هەموو شیرینییەکان",catCakes:"کێکەکان",catCupcakes:"کەپکێک",catDesserts:"دیسێرت",tagBestseller:"پڕفرۆشترین",tagNew:"نوێ",btnAdd:"زیادکردن بۆ سەبەتە",stepsEyebrow:"ئاسان و خێرا",stepsTitle:"چۆنیەتی داواکردن",stepsLead:"سێ هەنگاوی زۆر سادە لە چێشتخانەکەمانەوە بۆ سەر مێزی ئاهەنگەکەت.",step1Title:"دڵخوازی خۆت هەڵبژێرە",step1Desc:"سەیری لیستەکەمان بکە و ئەو شیرینییە هەڵبژێرە کە دەتەوێت لەگەڵ خۆشەویستانت بەشی بکەیت.",step2Title:"لە واتسئاپەوە بینێرە",step2Desc:"کرتە لەسەر ناردن بکە تا ڕاستەوخۆ داواکارییە ڕێکخراوەکەت بگاتە دەست وەستای شیرینی.",step3Title:"وەریبگرە و ئاهەنگ بگێڕە",step3Desc:"کاتی گەیاندن یان وەرگرتن دادەنێین، بە تازەیی دەبرژێنین و دەگەیەنینە بەردەم دەرگاتان.",storyEyebrow:"مێژوو و ڕەسەنایەتی",storyTitle:"بە ئارامی دروستکراو، بە دڵسۆزی برژاو",bullet1:"کەرە و شیری سروشتی و ئاردی ئۆرگانیک",bullet2:"بەبێ هیچ ڕەنگ و تامی دەستکرد",bullet3:"وەستای ئەزمووندار بە شێوازی ئەوروپی",reviewsEyebrow:"ڕای کڕیاران",reviewsTitle:"وتەی شیرینی کڕیارە ئازیزەکانمان",reviewsLead:"بۆچوونی ڕاستەقینە لە یادی لەدایکبوون و ئاهەنگە دڵخۆشکەرەکان.",btnLeaveReview:"نووسینی بۆچوون",leaveReviewTitle:"نووسینی بۆچوون",leaveReviewDesc:"بە خۆشحاڵییەوە گوێبیستی ڕای ئێوە دەبین!",reviewFormName:"ناوت",reviewFormQuote:"بۆچوونەکەت",review1Quote:'"کێکی فستق و گوڵاو جوانترین دیاری بوو بۆ ساڵیادی هاوسەرگیریمان. زۆر ناسک بوو و شیرینییەکەی تەواو لەجێی خۆیدا بوو."',review1Role:"کڕیاری دڵنیاکراو",review2Quote:'"داواکردن بە واتسئاپ زۆر خێرا بوو! کاتژمێر ١٠ داوام کرد، کاتژمێر ٢ لە ئۆفیس پێم گەیشت."',review2Role:"ئاهەنگی فەرمانگە",review3Quote:'"ماکارۆن و تارتی کارامێلەکەیان بێ وێنەیە. تامی کەرەی ڕاستەقینە و ڤانێلای چاک لە هەموو پارچەیەکدا دیارە."',review3Role:"کڕیاری هەمیشەیی",faqEyebrow:"پرسیارە دووبارەکان",faqTitle:"پرسیارە باوەکان",faqLead:"هەموو زانیارییەک دەربارەی شێوازی داواکردن، جۆری کەرەستەکان و کاتی گەیاندن.",faq1Q:"چەند کاتژمێر پێشوەخت پێویستە کێک داوا بکەم؟",faq1A:"بۆ کێکە ئاساییەکانی لیستەکە، داواکاری ٢٤ کاتژمێر پێشتر گەرەنتی کراوە. بۆ کێکی تایبەتی چەندین نهۆم پێویستمان بە ٤٨ بۆ ٧٢ کاتژمێرە.",faq2Q:"شێوازی کڕین لەڕێگەی واتسئاپ چۆنە؟",faq2A:'کاتێک دەست دەنێیت بە "ناردن لە واتسئاپ"، هەموو شیرینییە هەڵبژێردراوەکان لە پەیامێکی ڕێکخراودا ئامادە دەکرێن و ڕاستەوخۆ دەینێریت بۆمان!',faq3Q:"ئایا کێکی بێ هێلکە یان بێ گلوتینتان هەیە؟",faq3A:"بەڵێ! کێکی شوکۆڵاتەی تایبەت بەبێ هێلکە و تارتی ئاردی بادەم بۆ کەسانی هەستیار ئامادە دەکرێت بە داواکاری پێشوەختە.",faq4Q:"ئایا دەتوانم نووسینی سەر کێک دیاری بکەم؟",faq4A:"بەڵێ، لەسەر هەموو کێکە گەورەکان نووسینی ناوی دڵخواز بە شوکۆڵاتە لەسەر پلێتی شەکری بە دیاری پێشکەش دەکرێت.",faq5Q:"شێوازی پارەدان چۆنە؟",faq5A:"پارەدان بە کاش لە کاتی وەرگرتن، هەروەها لەڕێگەی فاستپەی، بانکی یەکەمی عێراقی (FIB) و زەین کاش قبوڵ دەکرێت.",ctaTitle:"ئامادەیت بۆنەکەت شیرینتر بکەیت؟",ctaLead:"دیزاین یان بیرۆکەیەکی تایبەتت لە مێشکدایە؟ وەستاکانمان ئامادەن خەونەکەت بکەنە ڕاستی.",ctaBtnWhatsApp:"پەیوەندی لە واتسئاپ",ctaBtnMenu:"بینینی هەموو کێکەکان",cardAddressTitle:"چێشتخانەی شیرینی",cardHoursTitle:"کاتژمێرەکانی کارکردن",cardContactTitle:"پەیوەندی ڕاستەوخۆ",footerBlurb:"شیرینەمەنییەکی دەستکردی نایاب تایبەت بە کێکی بۆنەکان، کەپکێکی ناسک و شیرینی فەڕەنسی.",footerShopLinks:"بەشەکانی فرۆشگا",footerHelpLinks:"یارمەتی و زانیاری",footerHoursTitle:"کاتەکانی برژاندن",footerBestsellers:"پڕفرۆشترینەکان",copyrightAllRights:"هەموو مافەکانی پارێزراوە.",footerTagline:"ڕۆژانە بە کەرەستەی سروشتی و خۆشەویستی پاک دەبرژێنرێت.",btnSignIn:"چوونەژوورەوە",btnPanel:"پانێڵی کۆنتڕۆڵ",btnLogout:"دەرچوون",trayItemLabel:"بەند",trayItemLabelSingular:"بەند",trayClear:"سڕینەوەی سەبەتە",traySendWhatsApp:"ناردنی داواکاری لە واتسئاپ",tabCustomer:"کڕیار",customerTitle:"چوونەژوورەوەی خێرای کڕیار",customerDesc:"تەنها ژمارەی مۆبایل و ناوت بنووسە. بەبێ وشەی نهێنی! ناوت بۆ داواکاری واتسئاپ بەکاردێت.",labelPhone:"ژمارەی مۆبایل (کەمترین ٦ ژمارە)",labelDisplayName:"ناوی بەڕێزت",btnContinue:"بەردەوامبوون وەک کڕیار",labelUsername:"ناوی بەکارهێنەر",labelPassword:"وشەی نهێنی",tabAdmin:"بەڕێوەبەر",tabDev:"گەشەپێدەر",staffFormDesc:"تکایە زانیارییەکانی چوونەژوورەوەت بنووسە بۆ بینینی پەنێڵی کۆنترۆڵ.",historyZero:"هیچ داواکارییەکت نەکردووە.",trayEmptyPreview:"هیچ کاڵایەک هەڵنەبژێردراوە",storyImgTitle:"کەلەپووری شیرینی دەستکرد",storyImgDesc:"بە فرێشی لە فڕنەوە بۆ ئاهەنگی خێزانەکەت",review1Name:"سارا و کەریم",review2Name:"دانیار ئازاد",review3Name:"لینا ڕۆستەم",footerOrdersInfo:"داواکاری و پرسیار:",invalidPromo:"کۆدی داشکاندن هەڵەیە",promoRemoved:"کۆدی داشکاندن سڕایەوە",itemsNotAvailable:"ئەم کاڵایانە لە ئێستادا لە مێنیودا بەردەست نین.",signedInAs:"چوویتە ژوورەوە وەک {name}",loggedInAs:"چوویتە ژوورەوە وەک {role}",loggedOut:"بە سەرکەوتوویی چوویەدەرەوە.",orderStatusUpdated:"باری داواکاری گۆڕدرا بۆ {status}",noteSaved:"تێبینی پاشەکەوت کرا",invalidUrl:"شێوازی بەستەر هەڵەیە. تەنها بەستەرەکانی http:// و https:// پشتگیری دەکرێن.",staffAdded:"بەکارهێنەری ستاف بە سەرکەوتوویی زیادکرا",usersTitle:"بەڕێوەبردنی بەکارهێنەران و ستاف",usersAddStaff:"زیادکردنی ئەژمێری ستاف",usersSearch:"گەڕان بۆ بەکارهێنەران…",usersHint:"ئەدمینەکان ئەژمێرەکانی ستاف و تێپەڕەوشەکان بەڕێوە دەبەن. ئەژمێری گەشەپێدەر و ئەدمین پارێزراون.",usersColRole:"ڕۆڵ",usersColName:"ناو",usersColLogin:"ناوی بەکارهێنەر / مۆبایل",usersColPassword:"تێپەڕەوشە",usersColPerms:"مۆڵەتەکان",usersColActions:"کردارەکان",usersNoPassword:"کڕیار — چوونەژوورەوەی نییە",usersYou:"(تۆ)",usersEmpty:"هیچ بەکارهێنەرێک نەدۆزرایەوە.",usersNoAccess:"ڕێگەت نییە بە بەڕێوەبردنی بەکارهێنەران.",usersEdit:"دەستکاری",usersResetPw:"گۆڕینی تێپەڕەوشە",usersDelete:"سڕینەوە",role_admin:"ئەدمین",role_dev:"گەشەپێدەر",role_staff:"ستاف",role_customer:"کڕیار",perm_products:"بەرهەمەکان",perm_customers:"کڕیاران",perm_economy:"ئابووری",perm_brand:"براند و لۆگۆ",perm_theme:"ڕووکار",perm_fonts:"فۆنتەکان",perm_about:"دەربارەی ئێمە",perm_contact:"پەیوەندی",perm_socials:"سۆشیال میدیا",editUserTitle:"دەستکاریکردنی بەکارهێنەر",usersNewPwPrompt:"تێپەڕەوشەی نوێ بۆ {name}:",staffPwTooShort:"تێپەڕەوشە دەبێت لانیکەم ٤ پیت بێت.",usersCannotDeleteSelf:"ناتوانیت ئەژمێری خۆت بسڕیتەوە.",usersCannotDeleteElevated:"تەنها گەشەپێدەر دەتوانێت ئەژمێری ئەدمین و گەشەپێدەر بسڕێتەوە.",usersConfirmDelete:'دڵنیایی لە سڕینەوەی "{name}"؟ ئەمە ناگەڕێتەوە.',phonePreviewLabel:"پانی پیشاندان",phonePreviewDesktop:"کۆمپیوتەر",phonePreviewPhone:"مۆبایل",backupImported:"باکئەپ بە سەرکەوتوویی هێنرایە ناوەوە!",copiedJson:"JSON کۆپی کرا بۆ کلیپبۆرد!",factoryResetDone:"گەڕانەوە بۆ باری بنەڕەتی بە سەرکەوتوویی تەواو بوو.",btnLogin:"چوونەژوورەوە بۆ پانێڵ",panelTitle:"پانێڵی کۆنتڕۆڵی شیرینەمەنی",uploadPhoto:"وێنە باربکە",replacePhoto:"وێنە بگۆڕە",removePhoto:"سڕینەوەی وێنە",photoHint:"JPG، PNG یان WebP — خۆکارانە قەبارەکەی دەکرێتە ٨٠٠ پێکسڵ. زۆرترین ٥ مێگابایت.",noPhotoHint:"هێشتا وێنە نییە — ئیمۆجی پیشان دەدرێت",prodPhotoError:"کرداری وێنەکە سەرکەوتوو نەبوو. تکایە فایلێکی تر تاقی بکەرەوە.",prodPhotoTooLarge:"قەبارەی وێنەکە زۆر گەورەیە. تکایە وێنەیەکی بچووکتر هەڵبژێرە.",prodPhotoRemoved:"وێنەکە سڕایەوە.",storageQuotaError:"شوێنی پاشەکەوتکردن پڕبووە — وێنەی بچووکتر بەکاربێنە یان وێنەکان کەم بکەرەوە.",prodDeleteConfirm:"دڵنیایت لە سڕینەوەی ئەم بەرهەمە؟",btnAddNewProduct:"+ زیادکردنی بەرهەمی نوێ",btnSaveProduct:"پاشەکەوتکردنی بەرهەم",btnDeleteProduct:"سڕینەوەی بەرهەم",tabFonts:"فۆنتەکان",fieldKurdishBody:"فۆنتی ناوەوە (کوردی)",fieldKurdishDisplay:"فۆنتی سەرنوسراو (کوردی)",fieldEnglishBody:"فۆنتی ناوەوە (ئینگلیزی)",fieldEnglishDisplay:"فۆنتی سەرنوسراو (ئینگلیزی)",saveFonts:"پاشەکەوتکردنی فۆنت",fontPreview:"پێشبینین",customizeTitle:"دەستکاری کردن",customizeLeaveOut:"لایببە",customizeSkip:"تێپەڕاندن — وەک خۆی زیادی بکە",customizeAdd:"زیادکردن بۆ داواکاری",customizeNone:"هیچ شتێک نییە بۆ دەستکاریکردن",orderNoteLabel:"تێبینی بۆ نانەوا (ئارەزوومەندانە)",orderNotePlaceholder:'بۆ نموونە "جەژنی لەدایکبوون پیرۆز سارا"',orderNoteTooLong:"تێبینییەکە زۆر درێژە — زۆرترین ٣٠٠ پیت.",waNote:"تێبینی بۆ نانەوا",waExclude:"بێ",toastPhotoReady:"وێنەکە ئامادەکرا و دەتوانیت پاشەکەوتی بکەیت.",toastAdded:"زیادکرا بۆ سەبەتەکەت!",toastOrderCleared:"سەبەتەی داواکاری پاککرایەوە.",toastSaved:"بە سەرکەوتوویی پاشەکەوت کرا",toastDeleted:"بە سەرکەوتوویی سڕایەوە",toastInvalidPhone:"تکایە ژمارەی مۆبایلی دروست بە کەمترین ٦ ژمارە بنووسە.",toastInvalidLogin:"ناوی بەکارهێنەر یان وشەی نهێنی هەڵەیە.",toastInvalidJson:"فۆرماتی JSON هەڵەیە، تکایە دڵنیابەرەوە.",tabEconomy:"ئابووری",economyCurrencies:"دراوەکان",economyExchange:"نرخی ئاڵوگۆڕ",economyDelivery:"گەیاندن",economyTax:"باج",economyDiscounts:"داشکاندن",fieldPrimaryCurrency:"دراوی سەرەکی (داخراو)",fieldSecondaryCurrency:"دراوی دووەم",fieldShowSecondary:"پیشاندانی دراوی دووەم لە ماڵپەڕ",fieldCurrencySymbol:"هێمای دراو",fieldExchangeRate:"1 دۆلار = ؟ دینار",fieldRoundingRule:"خستنەوەی نرخی گۆڕدراو بۆ",fieldAutoRefresh:"نوێکردنەوەی خۆکار (هێشتا چالاک نییە)",fieldDeliveryFee:"کرێی گەیاندن (دۆلار)",fieldFreeDeliveryOver:"گەیاندنی خۆڕایی بۆ سەرووی (دۆلار)",fieldMinimumOrder:"کەمترین داواکاری (دۆلار)",fieldPickupOnly:"تەنها وەرگرتن — گەیاندن بشارەوە",fieldTaxEnabled:"وەرگرتنی باج",fieldTaxRate:"ڕێژەی باج (%)",fieldTaxLabel:"ناوی باج",fieldTaxIncluded:"نرخەکان باج لەخۆدەگرن",fieldPromoCode:"کۆدی داشکاندنی چالاک",fieldPromoType:"جۆری داشکاندن",fieldPromoValue:"بڕی داشکاندن",fieldPromoExpiry:"بەسەرچوون لە",saveEconomy:"پاشەکەوتکردنی ڕێکخستنی ئابووری",roundNearest1:"نزیکترین 1",roundNearest250:"نزیکترین 250",roundNearest500:"نزیکترین 500",roundNearest1000:"نزیکترین 1000",promoPercent:"ڕێژە (%)",promoFixed:"بڕی جێگیر (دۆلار)",subtotal:"کۆی لاوەکی",deliveryFee:"گەیاندن",tax:"باج",discount:"داشکاندن",total:"کۆی گشتی",freeDelivery:"خۆڕایی",minimumOrderWarning:"کەمترین داواکاری {amount}ە. {remaining} زیاتر زیاد بکە بۆ تەواوکردن.",promoApplied:"کۆدی داشکاندن {code} جێبەجێکرا",promoExpired:"کۆدی داشکاندن بەسەرچووە",economyPreview:"پێشبینینی ڕاستەوخۆ",economyPreviewSample:"داواکاری نموونە: 50 دۆلار کۆی لاوەکی",trayDetails:"وردەکاری ▾",trayDetailsClose:"داخستن ▴",trayApplyPromo:"جێبەجێکردن",trayRemovePromo:"سڕینەوە",trayPromoPlaceholder:"کۆدی داشکاندن",deliveryFreeForEveryone:"گەیاندنی خۆڕایی بۆ هەمووان",freeDeliveryWarning:"ئاستی گەیاندنی خۆڕایی کەمترە لە کەمترین داواکاری — کڕیارانی خوار کەمترین ناتوانن داوا بکەن.",promoActive:"چالاکە",promoTooShort:"کەمترین ٣ پیت",taxAddedCheckout:"لە کاتی کڕین زیاد دەکرێت",taxIncludedLabel:"بەشدارە",pickupAvailable:"وەرگرتن لە چێشتخانە بەردەستە",justNow:"ئێستا",roundedFrom:"خستنەوە لە {raw} بۆ {rounded} (نزیکترین {rule})",searchPlaceholder:"گەڕان بۆ کێک، کاپکێک، شیرینی…",searchShortcut:"⌘K دابگرە بۆ گەڕان",searchResultsCount:"{shown} لە {total} کێک پیشان دەدرێت",searchNoResults:'هیچ کێکێک نەدۆزرایەوە بۆ "{query}".',searchEmptyDesc:"هەوڵبدە گەڕانەکەت بسڕیتەوە یان مەودای نرخ یان هاوپۆلێکی تر هەڵبژێریت.",searchClearAll:"پاککردنەوەی هەموو فلتەرەکان",searchClearSearch:"پاککردنەوەی گەڕان",sortLabel:"ڕیزکردن",sortPopular:"بەناوبانگ",sortNewest:"نوێترین",sortPriceAsc:"نرخ: لە کەمەوە بۆ زۆر",sortPriceDesc:"نرخ: لە زۆرەوە بۆ کەم",sortNameAsc:"ناو A–Z",priceRangeLabel:"نرخ",priceAny:"هەر نرخێک",priceUnder20:"کەمتر لە 20 دۆلار",price20to40:"20 – 40 دۆلار",price40to60:"40 – 60 دۆلار",priceOver60:"زیاتر لە 60 دۆلار",myOrders:"داواکارییەکانم",myOrdersTitle:"داواکارییەکانم",myOrdersSubtitle:"{count} داواکاریت کردووە لە {date}ەوە.",myOrdersEmpty:"هێشتا هیچ داواکارییەک نییە.",myOrdersEmptyHint:"مێنیو ببینە و یەکەم داواکاریت بکە — لێرە دەردەکەوێت.",myOrdersBrowse:"مێنیو ببینە",myOrdersReorder:"دووبارە داواکردن",myOrdersDetails:"بینینی وردەکاری",myOrdersTotalSpent:"کۆی خەرجکراو",myOrdersTotalOrders:"داواکارییەکان",myOrdersFavourite:"زۆرترین داواکراو",orderStatusPending:"چاوەڕوان",orderStatusBaking:"دەژەنرێت",orderStatusDelivered:"گەیەندرا",orderStatusCancelled:"هەڵوەشێنراوە",orderSignInToSave:"بچۆ ژوورەوە بۆ پاشەکەوتکردنی ئەم داواکارییە.",orderAddedToTray:"{count} بەند زیادکرا بۆ داواکاریەکەت",tabCustomers:"کڕیارەکان",customersSearch:"گەڕان بە ناو یان مۆبایل…",customersSortName:"ناو",customersSortLastOrder:"دوایین داواکاری",customersSortTotalSpent:"کۆی خەرجکراو",customersSortOrderCount:"ژمارەی داواکاری",customersEmpty:"هێشتا هیچ کڕیارێک نییە.",customerOrders:"داواکارییەکان",customerTotalSpent:"کۆی خەرجکراو",customerLastOrder:"دوایین داواکاری",customerNoOrders:"ئەم کڕیارە هیچ داواکارییەکی نییە.",customerPrivateNote:"تێبینی تایبەت (تەنها کارمەندان)",customerChangeStatus:"گۆڕینی دۆخ",logoSection:"لۆگۆ",logoModeEmoji:"ئیمۆجی",logoModeUpload:"بارکردن",logoModeUrl:"بەستەر",logoPreview:"پێشبینین",logoUploadBtn:"بارکردنی لۆگۆ",logoReplaceBtn:"گۆڕینی لۆگۆ",logoRemoveBtn:"سڕینەوەی لۆگۆ",logoRemoveConfirm:"لۆگۆی ئێستا بسڕدرێتەوە و ئیمۆجی بەکاربهێنرێت؟",logoRemoved:"لۆگۆ سڕایەوە — ئیمۆجی بەکاردێت.",logoUrlLabel:"بەستەری وێنەی دوور",logoUrlHint:"بەستەرێکی ڕاستەوخۆ بۆ فایلی PNG، JPG، WebP یان SVG دابنێ.",logoUrlValid:"بەستەر دروستە",logoUrlInvalid:"نەتوانرا ئەم بەستەرە بار بکرێت",logoEmojiLabel:"ئیمۆجی",logoEmojiHint:"یەکێک هەڵبژێرە یان هی خۆت دابنێ.",logoEmojiEmpty:"بەتاڵ — 🎂 ی بنەڕەت بەکاردێت",logoUploadHint:"وێنەی چوارگۆشە باشترینە. خۆکارانە بۆ 256×256 دەگۆڕدرێت. زۆرترین 5 مێگابایت.",logoUploadReady:"ئامادەیە بۆ پاشەکەوتکردن",logoUploadError:"نەتوانرا ئەم وێنەیە بخوێنرێتەوە. فایلێکی تر تاقی بکەوە.",logoUploadTooLarge:"وێنە زۆر گەورەیە دوای گۆڕین. لۆگۆیەکی سادەتر تاقی بکەوە.",logoFaviconNote:"هەروەها ئایکۆنی تابەکەش نوێ دەکاتەوە.",logoFallbackWarning:"وێنە نەتوانرا بار بکرێت. ئیمۆجی بەکاردێت.",tabTheme:"ڕووکار",themePresetTitle:"پالێتە ئامادەکان",themePreviewTitle:"پێشبینینی ڕاستەوخۆ",themeSave:"پاشەکەوتکردنی ڕووکار",themeApplied:"ڕووکار پاشەکەوتکرا",themeReverted:"گەڕایەوە بۆ ڕووکاری پاشەکەوتکراو",themePreviewHeading:"سەرنوسراوێکی نموونە",themePreviewBody:"دەقی ناوەوە لەسەر ڕەنگی بنەڕەت، وەک چۆن لە ماڵپەڕ دەردەکەوێت.",themePreviewPrimary:"دوگمەی سەرەکی",themePreviewGhost:"دوگمەی شەفاف",themePreviewGold:"زێڕین ★★★★★",themePreviewPrice:"38$ · 49,750 د.ع",themePresetBerry:"بێری",themePresetChocolate:"چاکۆلێت",themePresetSage:"سەیج",themePresetRose:"گۆڵ",themePresetMidnight:"نیوەشەو",themeAutoDark:"چالاککردنی باری تاریکی خۆکار"}},Xr={lang:"en",currency:"USD",category:"all",config:null,users:null,products:null,selectedProductId:null,pendingImageData:"",session:null,order:[],orderNote:"",orders:[],customerNotes:{},appliedPromoCode:"",trayBreakdownOpen:!1,activePanelTab:"brand",authTargetRole:"admin",searchQuery:"",searchDebounceTimer:null,sortOption:"popular",priceRange:"any",historyDetailsOpen:{},selectedStaffCustomerId:null,customerSearchQuery:"",customerSortOption:"lastOrder",draftLogo:null,_logoUrlDebounce:null,generateId(){return"item_"+Date.now()+"_"+Math.floor(Math.random()*1e3)},init(){this.loadState(),this.initFirebaseSync(),this.parseUrlHash(),this.applyTheme(this.config.theme.tokens),this.applyFonts(),this.applyPreferences(),this.renderAll(),this.updateFavicon(),this.bindEvents(),this.setupIntersectionObserver()},initFirebaseSync(){if(!se)return;ws(xe(se,"config","main"),t=>{if(t.exists()){const s=t.data();JSON.stringify(this.config)!==JSON.stringify(s)&&(this.config=s,localStorage.setItem(ve.CONFIG,JSON.stringify(this.config)),this.applyTheme(this.config.theme.tokens),this.applyFonts(),this.renderAll())}},t=>Ae(t,be.GET,"config/main")),ws($i(se,"products"),t=>{t.empty||(this.products=t.docs.map(s=>s.data()),localStorage.setItem(ve.PRODUCTS,JSON.stringify(this.products)),this.renderAll())},t=>Ae(t,be.GET,"products"));let n,e;Oe&&vC(Oe,t=>{var s,r;n&&(n(),n=null),e&&(e(),e=null),t&&(t.email.toLowerCase()==="qaessafty@gmail.com"||["admin","dev","staff"].includes((r=(s=this.session)==null?void 0:s.user)==null?void 0:r.role)?(n=ws($i(se,"users"),o=>{o.empty||(this.users=o.docs.map(a=>a.data()),localStorage.setItem(ve.USERS,JSON.stringify(this.users)),this.renderAll())},o=>Ae(o,be.GET,"users")),e=ws($i(se,"orders"),o=>{o.empty||(this.orders=o.docs.map(a=>a.data()),localStorage.setItem(ve.ORDERS,JSON.stringify(this.orders)),this.renderAll())},o=>Ae(o,be.GET,"orders"))):(n=ws(xe(se,"users",t.uid),o=>{if(o.exists()){const a=o.data(),c=this.users.findIndex(u=>u.id===t.uid);c>-1?this.users[c]=a:this.users.push(a),localStorage.setItem(ve.USERS,JSON.stringify(this.users)),this.renderAll()}},o=>Ae(o,be.GET,"users")),e=ws(rI($i(se,"orders"),iI("customerId","==",t.uid)),o=>{o.empty||(this.orders=o.docs.map(a=>a.data()),localStorage.setItem(ve.ORDERS,JSON.stringify(this.orders)),this.renderAll())},o=>Ae(o,be.GET,"orders"))))})},loadState(){try{this.config=JSON.parse(localStorage.getItem(ve.CONFIG))||JSON.parse(JSON.stringify(mn))}catch{this.config=JSON.parse(JSON.stringify(mn))}this.config&&this.config.shopName&&(this.config.shopName.en==="Sweet Crumb"||!this.config.shopName.en)&&(this.config.shopName.en="Yummy Sweets",this.config.shopName.ku="یامی سویتس",this.config.aboutUs&&this.config.aboutUs.en&&this.config.aboutUs.en.includes("Sweet Crumb")&&(this.config.aboutUs.en=this.config.aboutUs.en.replace(/Sweet Crumb/g,"Yummy Sweets")),this.config.aboutUs&&this.config.aboutUs.ku&&this.config.aboutUs.ku.includes("سویت کرەمب")&&(this.config.aboutUs.ku=this.config.aboutUs.ku.replace(/سویت کرەمب/g,"یامی سویتس")),this.config.contact&&this.config.contact.email==="hello@sweetcrumb.com"&&(this.config.contact.email="hello@yummysweets.com"),this.saveConfig()),!this.config.socials||typeof this.config.socials!="object"?this.config.socials=JSON.parse(JSON.stringify(mn.socials)):this.config.socials={...JSON.parse(JSON.stringify(mn.socials)),...this.config.socials},this.config&&(this.config.kurdishBodyFont||(this.config.kurdishBodyFont="Vazirmatn"),this.config.kurdishDisplayFont||(this.config.kurdishDisplayFont="Vazirmatn"),this.config.theme||(this.config.theme={presetId:"berry",tokens:Ke.berry.tokens}),this.config.faq||(this.config.faq=[...mn.faq]),this.config.reviews||(this.config.reviews=[...mn.reviews]),this.config.logoMode||(this.config.logoMode=this.config.logoImage?"image":this.config.logoImageUrl?"url":"emoji"),this.config.logoEmoji||(this.config.logoEmoji="🎂"),typeof this.config.logoImage!="string"&&(this.config.logoImage=""),typeof this.config.logoUrl!="string"&&(this.config.logoUrl=this.config.logoImageUrl||""),!this.config.logoImageUrl&&this.config.logoUrl&&(this.config.logoImageUrl=this.config.logoUrl),!this.config.economy||typeof this.config.economy!="object"?this.config.economy=JSON.parse(JSON.stringify(Zn)):this.config.economy={...Zn,...this.config.economy},typeof this.config.iqdRate=="number"&&this.config.iqdRate>0&&(!this.config.economy.exchangeRate||this.config.economy.exchangeRate===1310)&&(this.config.economy.exchangeRate=this.config.iqdRate));try{this.users=JSON.parse(localStorage.getItem(ve.USERS))||JSON.parse(JSON.stringify(Th))}catch{this.users=JSON.parse(JSON.stringify(Th))}try{this.products=JSON.parse(localStorage.getItem(ve.PRODUCTS))||JSON.parse(JSON.stringify(Ja))}catch{this.products=JSON.parse(JSON.stringify(Ja))}if(Array.isArray(this.products)){const n=new Map(Ja.map(t=>[t.id,t]));let e=!1;this.products.forEach(t=>{typeof t.img!="string"&&(t.img=""),!t.img.trim()&&n.has(t.id)&&(t.img=n.get(t.id).img||"",e=!0)}),e&&(this.saveProducts(),se&&ut(xe(se,"products",id)).catch(t=>Ae(t,be.DELETE,"products"))),!this.selectedProductId&&this.products.length>0&&(this.selectedProductId=this.products[0].id,this.pendingImageData=this.products[0].img||"")}try{this.session=JSON.parse(localStorage.getItem(ve.SESSION))||null}catch{this.session=null}try{this.orders=JSON.parse(localStorage.getItem(ve.ORDERS))||[]}catch{this.orders=[]}try{this.customerNotes=JSON.parse(localStorage.getItem(ve.CUSTOMER_NOTES))||{}}catch{this.customerNotes={}}try{const n=JSON.parse(localStorage.getItem(ve.PREF));n&&(n.lang&&(this.lang=n.lang),n.currency&&(this.currency=n.currency))}catch{this.lang="en",this.currency="USD"}},saveConfig(){localStorage.setItem(ve.CONFIG,JSON.stringify(this.config)),se&&lI(xe(se,"config","main"),this.config).catch(n=>Ae(n,be.WRITE,"config/main"))},saveUsers(){if(localStorage.setItem(ve.USERS,JSON.stringify(this.users)),se){const n=qa(se);this.users.forEach(e=>n.set(xe(se,"users",e.id),e)),n.commit().catch(e=>Ae(e,be.WRITE,"users"))}},saveOrders(){if(localStorage.setItem(ve.ORDERS,JSON.stringify(this.orders)),se){const n=qa(se);this.orders.forEach(e=>n.set(xe(se,"orders",e.id),e)),n.commit().catch(e=>Ae(e,be.WRITE,"orders"))}},saveCustomerNotes(){localStorage.setItem(ve.CUSTOMER_NOTES,JSON.stringify(this.customerNotes))},saveProducts(){try{if(localStorage.setItem(ve.PRODUCTS,JSON.stringify(this.products)),se){const n=qa(se);this.products.forEach(e=>n.set(xe(se,"products",e.id),e)),n.commit().catch(e=>Ae(e,be.WRITE,"products"))}return!0}catch(n){return console.error("Storage quota error:",n),this.showToast(this.t("storageQuotaError"),"error"),!1}},saveSession(){this.session?localStorage.setItem(ve.SESSION,JSON.stringify(this.session)):localStorage.removeItem(ve.SESSION)},savePref(){localStorage.setItem(ve.PREF,JSON.stringify({lang:this.lang,currency:this.currency}))},t(n){return(ja[this.lang]||ja.en)[n]||ja.en[n]||n},esc(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},getEconomy(){return this._draftEconomy||this.config&&this.config.economy||Zn},formatPrice(n,e=null){const t=this.getEconomy(),s=e||this.currency,r=t.showSecondary!==!1&&t.secondaryCurrency&&t.secondaryCurrency!=="None";if(s!=="USD"&&r){const i=Number(t.exchangeRate)>0?Number(t.exchangeRate):this.config.iqdRate||1310,o=Number(n||0)*i,a=parseInt(t.roundingRule,10)||250;let c=o;a>1?c=Math.round(o/a)*a:c=Math.round(o*100)/100;const u=t.currencySymbol||(t.secondaryCurrency==="IQD"?"د.ع":t.secondaryCurrency);return a>1?new Intl.NumberFormat("en-US").format(c)+" "+u:u+" "+c.toFixed(2)}return"$"+Number(n||0).toFixed(2)},setLanguage(n){this.lang!==n&&(this.lang=n,this.savePref(),this.applyPreferences(),this.renderAll())},setCurrency(n){this.currency!==n&&(this.currency=n,this.savePref(),this.applyPreferences(),this.renderMenu(),this.renderTray())},applyPreferences(){const n=document.documentElement,e=this.lang==="ku";n.dir=e?"rtl":"ltr",n.lang=e?"ckb":"en",this.applyFonts();const t=this.getEconomy(),s=t.showSecondary!==!1&&t.secondaryCurrency&&t.secondaryCurrency!=="None";!s&&this.currency!=="USD"&&(this.currency="USD");const r=document.getElementById("headerCurrencySwitcher");r&&(r.style.display=s?"inline-flex":"none");const i=document.getElementById("mobileCurrencySwitcher");i&&(i.style.display=s?"inline-flex":"none"),this.currency!=="USD"&&s?document.body.classList.add("cur-secondary","cur-iqd"):document.body.classList.remove("cur-secondary","cur-iqd"),["btnLangEn","btnLangEnMobile"].forEach(c=>{const u=document.getElementById(c);u&&u.classList.toggle("is-active",!e)}),["btnLangKu","btnLangKuMobile"].forEach(c=>{const u=document.getElementById(c);u&&u.classList.toggle("is-active",e)});const o=t.currencySymbol||(t.secondaryCurrency==="IQD"?"د.ع":t.secondaryCurrency),a=`${t.secondaryCurrency} ${o}`;["btnCurIqd","btnCurIqdMobile"].forEach(c=>{const u=document.getElementById(c);u&&(u.textContent=a,u.classList.toggle("is-active",this.currency!=="USD"))}),["btnCurUsd","btnCurUsdMobile"].forEach(c=>{const u=document.getElementById(c);u&&u.classList.toggle("is-active",this.currency==="USD")}),this.updatePriceFilterLabels()},renderAll(){this.renderI18nStatic(),this.renderBranding(),this.renderMenu(),this.renderTray(),this.updateAuthUI(),this.renderWatermark(),this.renderFAQ(),this.renderReviews()},renderFAQ(){const n=document.getElementById("faqWrap");if(!n)return;const e=this.lang==="ku",t=this.config&&this.config.faq?this.config.faq:[];if(t.length===0){document.getElementById("faq").style.display="none";return}else document.getElementById("faq").style.display="block";n.innerHTML=t.map(s=>`
      <details class="faq-item">
        <summary class="faq-summary">${e&&s.q.ku||s.q.en}</summary>
        <div class="faq-content">
          ${e&&s.a.ku||s.a.en}
        </div>
      </details>
    `).join("")},renderReviews(){const n=document.getElementById("reviewsGrid");if(!n)return;const e=this.lang==="ku",t=this.config&&this.config.reviews?this.config.reviews:[];if(t.length===0){document.getElementById("reviews").style.display="none";return}else document.getElementById("reviews").style.display="block";n.innerHTML=t.map(s=>`
      <div class="review-card">
        <div class="stars">★★★★★</div>
        <p class="review__quote">${e&&s.quote.ku||s.quote.en}</p>
        <div class="review__author">
          <div class="review__avatar">${s.initials}</div>
          <div>
            <strong style="display:block;font-size:0.92rem;">${e&&s.name.ku||s.name.en}</strong>
            <span class="text-small" style="color:var(--muted);">${e&&s.role.ku||s.role.en}</span>
          </div>
        </div>
      </div>
    `).join("")},renderI18nStatic(){document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.getAttribute("data-i18n"),s=this.t(t);s&&(s.includes("<")&&s.includes(">")?e.innerHTML=s:e.textContent=s)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const t=e.getAttribute("data-i18n-placeholder"),s=this.t(t);s&&e.setAttribute("placeholder",s)})},updatePriceFilterLabels(){const n=document.getElementById("menuPriceSelect");if(n){const e=n.querySelector('option[value="under-20"]'),t=n.querySelector('option[value="20-40"]'),s=n.querySelector('option[value="40-60"]'),r=n.querySelector('option[value="over-60"]'),i=this.lang==="ku",o=a=>this.formatPrice(a).replace(/\.00$/,"");e&&(e.textContent=i?`کەمتر لە ${o(20)}`:`Under ${o(20)}`),t&&(t.textContent=`${o(20)} – ${o(40)}`),s&&(s.textContent=`${o(40)} – ${o(60)}`),r&&(r.textContent=i?`زیاتر لە ${o(60)}`:`Over ${o(60)}`)}},normalizeKurdish(n){return n?String(n).toLowerCase().replace(/[\u064B-\u065F\u0670]/g,"").replace(/[يى]/g,"ی").replace(/ك/g,"ک").replace(/ه/g,"ە").trim():""},highlightMatch(n,e){if(!e||!n)return n;const t=e.trim().split(/\s+/).filter(Boolean);if(t.length===0)return n;let s=String(n);return t.forEach(r=>{try{const i=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${i})`,"gi");s=s.replace(o,'<mark class="search-highlight">$1</mark>')}catch{}}),s},handleSearchInput(n){clearTimeout(this.searchDebounceTimer);const e=document.getElementById("menuSearchClear");e&&(e.style.display=n.trim()?"block":"none"),this.searchDebounceTimer=setTimeout(()=>{this.searchQuery=n,this.updateUrlHash(),this.renderMenu(!1)},150)},clearSearch(){this.searchQuery="";const n=document.getElementById("menuSearchInput");n&&(n.value="");const e=document.getElementById("menuSearchClear");e&&(e.style.display="none"),this.updateUrlHash(),this.renderMenu(!1)},clearAllFilters(){this.searchQuery="",this.category="all",this.sortOption="popular",this.priceRange="any";const n=document.getElementById("menuSearchInput");n&&(n.value="");const e=document.getElementById("menuSearchClear");e&&(e.style.display="none");const t=document.getElementById("menuSortSelect");t&&(t.value="popular");const s=document.getElementById("menuPriceSelect");s&&(s.value="any");const r=document.getElementById("mobileCategorySelect");r&&(r.value="all"),["all","cakes","cupcakes","desserts"].forEach(i=>{const o=document.getElementById(`filter-${i}`);o&&o.classList.toggle("is-active",i==="all")}),this.updateUrlHash(),this.renderMenu(!1)},setSort(n){this.sortOption=n;const e=document.getElementById("menuSortSelect");e&&(e.value=n),this.updateUrlHash(),this.renderMenu(!0)},setPriceRange(n){this.priceRange=n;const e=document.getElementById("menuPriceSelect");e&&(e.value=n),this.updateUrlHash(),this.renderMenu(!1)},setCategory(n){this.category=n,["all","cakes","cupcakes","desserts"].forEach(t=>{const s=document.getElementById(`filter-${t}`);s&&s.classList.toggle("is-active",t===n)});const e=document.getElementById("mobileCategorySelect");e&&(e.value=n),this.updateUrlHash(),this.renderMenu(!1)},parseUrlHash(){const n=window.location.hash||"";if(n.startsWith("#menu?")||n.startsWith("#menu")){const e=n.indexOf("?");if(e!==-1){const t=new URLSearchParams(n.substring(e+1));t.has("q")&&(this.searchQuery=t.get("q")||""),t.has("cat")&&(this.category=t.get("cat")||"all"),t.has("sort")&&(this.sortOption=t.get("sort")||"popular"),t.has("range")&&(this.priceRange=t.get("range")||"any");const s=document.getElementById("menuSearchInput");if(s){s.value=this.searchQuery;const a=document.getElementById("menuSearchClear");a&&(a.style.display=this.searchQuery?"block":"none")}const r=document.getElementById("menuSortSelect");r&&(r.value=this.sortOption);const i=document.getElementById("menuPriceSelect");i&&(i.value=this.priceRange);const o=document.getElementById("mobileCategorySelect");o&&(o.value=this.category),["all","cakes","cupcakes","desserts"].forEach(a=>{const c=document.getElementById(`filter-${a}`);c&&c.classList.toggle("is-active",a===this.category)})}}},updateUrlHash(){const n=new URLSearchParams;this.searchQuery&&this.searchQuery.trim()&&n.set("q",this.searchQuery.trim()),this.category&&this.category!=="all"&&n.set("cat",this.category),this.sortOption&&this.sortOption!=="popular"&&n.set("sort",this.sortOption),this.priceRange&&this.priceRange!=="any"&&n.set("range",this.priceRange);const e=n.toString(),t=e?`#menu?${e}`:"#menu";window.location.hash!==t&&history.replaceState(null,"",t)},renderMenu(n=!1){const e=document.getElementById("menuGrid");if(!e)return;const t=this.lang==="ku";let s=this.products.filter(o=>this.category==="all"||o.category===this.category);this.priceRange==="under-20"?s=s.filter(o=>o.priceUSD<20):this.priceRange==="20-40"?s=s.filter(o=>o.priceUSD>=20&&o.priceUSD<=40):this.priceRange==="40-60"?s=s.filter(o=>o.priceUSD>=40&&o.priceUSD<=60):this.priceRange==="over-60"&&(s=s.filter(o=>o.priceUSD>60));const r=(this.searchQuery||"").trim();if(r){const o=r.split(/\s+/).map(a=>this.normalizeKurdish(a)).filter(Boolean);s=s.filter(a=>{var u,h,f,p;const c=[(u=a.name)==null?void 0:u.en,(h=a.desc)==null?void 0:h.en,(f=a.name)==null?void 0:f.ku,(p=a.desc)==null?void 0:p.ku,a.category,a.tag].map(g=>this.normalizeKurdish(g)).join(" ");return o.every(g=>c.includes(g))})}this.sortOption==="popular"?s.sort((o,a)=>{const c=o.tag==="bestseller"?1:0;return(a.tag==="bestseller"?1:0)-c}):this.sortOption==="newest"?s.sort((o,a)=>{const c=o.tag==="new"?1:0;return(a.tag==="new"?1:0)-c}):this.sortOption==="price-asc"?s.sort((o,a)=>o.priceUSD-a.priceUSD):this.sortOption==="price-desc"?s.sort((o,a)=>a.priceUSD-o.priceUSD):this.sortOption==="name-asc"&&s.sort((o,a)=>{const c=t&&o.name.ku||o.name.en,u=t&&a.name.ku||a.name.en;return c.localeCompare(u)});const i=document.getElementById("menuResultsCount");if(i&&(i.textContent=this.t("searchResultsCount").replace("{shown}",s.length).replace("{total}",this.products.length)),s.length===0){const o=r?this.t("searchNoResults").replace("{query}",r):this.t("searchNoResults").replace('"{query}"',"");e.innerHTML=`
        <div class="menu-empty-state">
          <div class="menu-empty-icon">🍰</div>
          <h3 class="menu-empty-title">${o}</h3>
          <p class="menu-empty-desc">${this.t("searchEmptyDesc")}</p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            ${r?`<button type="button" class="btn btn--secondary btn--sm" onclick="app.clearSearch()">${this.t("searchClearSearch")}</button>`:""}
            <button type="button" class="btn btn--primary btn--sm" onclick="app.clearAllFilters()">${this.t("searchClearAll")}</button>
          </div>
        </div>
      `;return}e.innerHTML=s.map((o,a)=>{const c=t&&o.name.ku||o.name.en,u=t&&o.desc.ku||o.desc.en,h=r?this.highlightMatch(c,r):c,f=r?this.highlightMatch(u,r):u,p=t&&o.unit.ku||o.unit.en,g=this.formatPrice(o.priceUSD);let v="";o.tag==="bestseller"?v=`<span class="cake__tag cake__tag--bestseller">${this.t("tagBestseller")}</span>`:o.tag==="new"&&(v=`<span class="cake__tag cake__tag--new">${this.t("tagNew")}</span>`);const F=!!(o.img&&o.img.trim())?`<img src="${o.img}" alt="${c}" loading="lazy" referrerpolicy="no-referrer" class="cake-card__img" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" /><div class="cake-card__emoji" style="display:none;" aria-label="${c}">${o.emoji||"🎂"}</div>`:`<div class="cake-card__emoji" aria-label="${c}">${o.emoji||"🎂"}</div>`,S=n?"cake-card-animate":"",G=n?`style="--stagger:${a%12};"`:"";return`
        <article class="cake-card ${S}" id="product-${o.id}" ${G}>
          <div class="cake-card__media">
            ${F}
            ${v}
          </div>
          <div class="cake-card__body">
            <h3 class="cake-card__title">${h}</h3>
            <p class="cake-card__desc">${f}</p>
            <div class="cake-card__footer">
              <div class="price-wrap">
                <span class="price">${g}</span>
                <span class="price-unit">${p}</span>
              </div>
              <button class="btn btn--primary btn--sm" onclick="app.openCustomizeModal('${o.id}')" aria-label="${this.t("btnAdd")} ${c}">
                ${this.t("btnAdd")}
              </button>
            </div>
          </div>
        </article>
      `}).join("")},getShopName(){return!this.config||!this.config.shopName?"Yummy Sweets":this.lang==="ku"?this.config.shopName.ku||this.config.shopName.en:this.config.shopName.en},resolveLogoSrc(){const n=this.config;if(!n)return null;const e=n.logoMode||(n.logoImage?"image":n.logoImageUrl?"url":"emoji");return e==="image"&&n.logoImage&&n.logoImage.trim()!==""?n.logoImage:e==="url"&&(n.logoUrl||n.logoImageUrl)&&(n.logoUrl||n.logoImageUrl).trim()!==""?n.logoUrl||n.logoImageUrl:null},updateFavicon(){const n=this.resolveLogoSrc();let e=document.querySelector('link[rel="icon"]');if(e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),n)e.href=n;else{const s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#8E3B4A"/><text x="32" y="46" font-size="38" text-anchor="middle">${this.config&&this.config.logoEmoji||"🎂"}</text></svg>`;e.href="data:image/svg+xml;utf8,"+encodeURIComponent(s)}},renderLogoElements(){const n=this.resolveLogoSrc(),e=this.config&&this.config.logoEmoji||"🎂",t=this.getShopName();document.querySelectorAll("[data-logo]").forEach(r=>{r.style.opacity="0",setTimeout(()=>{n?r.innerHTML=`<img src="${n}" alt="${t}" class="logo__img" onerror="this.onerror=null;this.parentElement.textContent='${e}';" />`:r.textContent=e,r.style.opacity="1"},50)})},renderBranding(){const n=this.config,e=this.lang==="ku",t=this.getShopName(),s=e&&n.tagline.ku||n.tagline.en,r=e&&n.announcement.ku||n.announcement.en,i=e&&n.aboutUs.ku||n.aboutUs.en,o=e&&n.contact.address.ku||n.contact.address.en,a=e&&n.contact.hours.ku||n.contact.hours.en;document.title=`${t} — ${s}`;const c=document.getElementById("headerShopName");c&&(c.textContent=t);const u=document.getElementById("footerShopName");u&&(u.textContent=t);const h=document.getElementById("mobileShopName");h&&(h.textContent=t);const f=document.getElementById("copyrightName");f&&(f.textContent=t);const p=document.getElementById("copyrightYear");p&&(p.textContent=new Date().getFullYear());const g=document.getElementById("headerShopTagline");g&&(g.textContent=s),this.renderLogoElements(),this.updateFavicon();const v=document.getElementById("announcementText");v&&(v.innerHTML=r);const O=document.getElementById("storyText");O&&(O.textContent=i);const F=e?n.aboutUs.eyebrowKu||n.aboutUs.eyebrowEn||"کەلەپووری ئێمە":n.aboutUs.eyebrowEn||"Our Heritage",S=e?n.aboutUs.titleKu||n.aboutUs.titleEn||"بە ئارامگرتن ئامادە کراوە، بە خۆشەویستی برژاوە":n.aboutUs.titleEn||"Crafted with patience, baked with devotion",G=n.aboutUs.imageUrl||"https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&auto=format&fit=crop&q=80",Z=document.querySelector('[data-i18n="storyEyebrow"]');Z&&(Z.textContent=F);const le=document.querySelector('[data-i18n="storyTitle"]');le&&(le.textContent=S);const ae=document.querySelector(".story__img");ae&&(ae.src=G);const ne=document.getElementById("infoAddress");ne&&(ne.textContent=o);const w=document.getElementById("infoHours");w&&(w.innerHTML=a.replace(/\n/g,"<br/>"));const C=document.getElementById("infoContact");C&&(C.innerHTML=`WhatsApp: +${n.contact.whatsapp}<br/>${n.contact.email}<br/>${n.contact.phone}`);const _=document.getElementById("footerHours");_&&(_.innerHTML=a.replace(/\n/g,"<br/>"));const A=document.getElementById("footerPhone");A&&(A.textContent=n.contact.phone);const I=n.socials||{};[["socialInsta",I.instagram],["socialFb",I.facebook],["socialTiktok",I.tiktok],["socialSnap",I.snapchat]].forEach(([P,D])=>{const ke=document.getElementById(P);if(!ke)return;const lt=(D||"").trim(),$n=lt!==""&&lt!=="#";ke.href=$n?lt:"#",ke.style.display=$n?"":"none"})},addToOrder(n,e=[]){const t=this.order.find(s=>s.productId===n&&s.exclude.join("|")===e.join("|"));t?t.qty++:this.order.push({id:this.generateId(),productId:n,qty:1,exclude:[...e]}),this.renderTray(),this.showToast(this.t("toastAdded"),"success")},openCustomizeModal(n){const e=this.products.find(o=>o.id===n);if(!e)return;if(!e.exclusions||e.exclusions.length===0){this.addToOrder(n);return}const t=document.createElement("div");t.className="modal-overlay is-open",t.style.zIndex="1000";const s=this.lang==="ku",r=s&&e.name.ku||e.name.en;let i=`
      <div class="modal-window" style="max-width:400px; padding: 24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
          <h2 style="font-family:var(--font-serif); font-size: 1.2rem; color:var(--cocoa); margin:0;">${this.t("customizeTitle")||"Customize"}</h2>
          <button class="modal-close" style="background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--muted);" onclick="this.closest('.modal-overlay').remove()">×</button>
        </div>
        <h4 style="font-family:var(--font-serif);margin-top:0;margin-bottom:12px;color:var(--ink);">${r}</h4>
        <p style="font-weight:600;margin-bottom:12px;color:var(--cocoa-soft);">${this.t("customizeLeaveOut")||"Leave out"}:</p>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
    `;e.exclusions.forEach(o=>{const a=s&&o.ku||o.en;i+=`
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--ink);">
          <input type="checkbox" class="customize-exclude-cb" value="${o.id}" style="width:18px;height:18px;" />
          <span>${a}</span>
        </label>
      `}),i+=`
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <button type="button" class="btn btn--ghost btn--sm" style="flex:1;" onclick="app.addToOrder('${n}'); this.closest('.modal-overlay').remove()">${this.t("customizeSkip")||"Skip — add as is"}</button>
          <button type="button" class="btn btn--primary btn--sm" style="flex:1;" onclick="
            const cbs = Array.from(this.closest('.modal-window').querySelectorAll('.customize-exclude-cb'));
            const excludes = cbs.filter(cb => cb.checked).map(cb => cb.value);
            app.addToOrder('${n}', excludes);
            this.closest('.modal-overlay').remove();
          ">${this.t("customizeAdd")||"Add to order"}</button>
        </div>
      </div>
    `,t.innerHTML=i,document.body.appendChild(t)},clearOrder(){this.order=[],this.orderNote="";const n=document.getElementById("trayOrderNote");n&&(n.value=""),this.appliedPromoCode="",this.trayBreakdownOpen=!1,this.renderTray(),this.showToast(this.t("toastOrderCleared"))},computeCartBreakdown(n=0,e=null,t=null){const s=t||this.getEconomy(),r=Math.max(0,Number(n)||0);let i=0,o="",a=!1,c=!1;const u=(e!==null?e:this.appliedPromoCode||"").trim().toUpperCase(),h=(s.promoCode||"").trim().toUpperCase();if(h&&u&&u===h){if(s.promoExpiry){const C=new Date(s.promoExpiry+"T23:59:59");!isNaN(C.getTime())&&new Date>C&&(c=!0)}if(!c){a=!0,o=h;const C=Math.max(0,Number(s.promoValue)||0);s.promoType==="percent"?i=Math.min(r,r*C/100):i=Math.min(r,C)}}let f=0;const p=!!s.pickupOnly;let g=!1;const v=Math.max(0,Number(s.deliveryFee)||0),O=Math.max(0,Number(s.freeDeliveryOver)||0);p?f=0:O===0||r>=O?(f=0,g=!0):f=v;let F=0;const S=Math.min(30,Math.max(0,Number(s.taxRate)||0)),G=Math.max(0,r-i),Z=(s.taxLabel||"VAT").trim();s.taxEnabled&&!s.taxIncluded&&S>0&&(F=G*S/100);const le=Math.max(0,r-i+f+F),ae=Math.max(0,Number(s.minimumOrder)||0),ne=ae===0||r>=ae,w=ne?0:Math.max(0,ae-r);return{subtotal:r,discount:i,promoCodeName:o,promoValid:a,promoExpired:c,delivery:f,isPickupOnly:p,isFreeDelivery:g,deliveryFeeConfig:v,freeDeliveryOverConfig:O,tax:F,taxRate:S,taxLabel:Z,taxEnabled:!!s.taxEnabled,taxIncluded:!!s.taxIncluded,total:le,minOrder:ae,minOrderMet:ne,minOrderRemaining:w}},toggleTrayBreakdown(){this.trayBreakdownOpen=!this.trayBreakdownOpen;const n=document.getElementById("trayBreakdown"),e=document.getElementById("btnTrayToggle"),t=document.getElementById("trayToggleLabel");n&&(n.style.display=this.trayBreakdownOpen?"flex":"none"),e&&e.setAttribute("aria-expanded",this.trayBreakdownOpen?"true":"false"),t&&(t.textContent=this.trayBreakdownOpen?this.t("trayDetailsClose"):this.t("trayDetails"))},applyCartPromo(){const n=document.getElementById("trayPromoInput");if(!n)return;const e=n.value.trim().toUpperCase();if(!e)return;const t=this.getEconomy(),s=(t.promoCode||"").trim().toUpperCase();if(!s||e!==s){this.showToast(this.t("invalidPromo"),"error");const i=document.getElementById("trayPromoFeedback");i&&(i.textContent="✕ Invalid promo code",i.style.color="#fca5a5");return}if(t.promoExpiry){const i=new Date(t.promoExpiry+"T23:59:59");if(!isNaN(i.getTime())&&new Date>i){this.showToast(this.t("promoExpired"),"error");const o=document.getElementById("trayPromoFeedback");o&&(o.textContent=`⚠️ ${this.t("promoExpired")}`,o.style.color="#fca5a5");return}}this.appliedPromoCode=s;const r=this.t("promoApplied").replace("{code}",s);this.showToast(r,"success"),this.renderTray()},removeCartPromo(){this.appliedPromoCode="",this.renderTray(),this.showToast(this.t("promoRemoved"),"info")},renderTray(){const n=document.getElementById("orderTray");if(!n)return;const e=this.lang==="ku",t=new Map(this.products.map(S=>[S.id,S]));let s=0,r=0;const i=[];for(const S of this.order)if(S.qty>0&&t.has(S.productId)){const G=t.get(S.productId);s+=S.qty,r+=G.priceUSD*S.qty;const Z=e&&G.name.ku||G.name.en;i.push(`${S.qty}× ${Z}`)}if(s===0){n.classList.remove("is-visible"),this.trayBreakdownOpen=!1;const S=document.getElementById("trayBreakdown");S&&(S.style.display="none");return}n.classList.add("is-visible");const o=this.computeCartBreakdown(r),a=document.getElementById("trayOrderNote");a&&a.value!==this.orderNote&&(a.value=this.orderNote||"");const c=document.getElementById("trayItemCount");c&&(c.textContent=s);const u=document.getElementById("trayTotalPrice");u&&(u.textContent=this.formatPrice(o.total));const h=document.getElementById("trayPreviewText");h&&(h.textContent=i.join(", "));const f=document.getElementById("trayFreeDeliveryBadge");f&&(f.style.display=o.isFreeDelivery&&!o.isPickupOnly?"inline-block":"none");const p=document.getElementById("btnTrayWhatsApp"),g=document.getElementById("trayMinOrderNotice");if(o.minOrderMet)p&&(p.disabled=!1,p.classList.remove("is-disabled"),p.removeAttribute("title")),g&&(g.style.display="none",g.innerHTML="");else{const S=this.formatPrice(o.minOrder),G=this.formatPrice(o.minOrderRemaining),Z=this.t("minimumOrderWarning").replace("{amount}",S).replace("{remaining}",G);p&&(p.disabled=!0,p.classList.add("is-disabled"),p.title=Z),g&&(g.style.display="flex",g.innerHTML=`<span>⚠️</span> <span>${Z}</span>`)}const v=document.getElementById("trayBreakdownLines");if(v){let S="";S+=`<div class="tray-breakdown-row"><span>${this.t("subtotal")}</span><span>${this.formatPrice(o.subtotal)}</span></div>`,o.discount>0&&(S+=`<div class="tray-breakdown-row" style="color:#4ade80;"><span>${this.t("discount")} (${o.promoCodeName})</span><span>−${this.formatPrice(o.discount)}</span></div>`),o.isPickupOnly?S+=`<div class="tray-breakdown-row"><span>${this.t("economyDelivery")}</span><span>${e?"وەرگرتن لە چێشتخانە":"Pickup Only"}</span></div>`:o.isFreeDelivery?S+=`<div class="tray-breakdown-row"><span>${this.t("deliveryFee")}</span><span style="color:#4ade80;font-weight:700;">${this.t("freeDelivery")}</span></div>`:S+=`<div class="tray-breakdown-row"><span>${this.t("deliveryFee")}</span><span>${this.formatPrice(o.delivery)}</span></div>`,o.tax>0&&(S+=`<div class="tray-breakdown-row"><span>${this.t("tax")} (${o.taxLabel} ${o.taxRate}%)</span><span>+${this.formatPrice(o.tax)}</span></div>`),S+=`<div class="tray-breakdown-row tray-breakdown-row--total"><span>${this.t("total")}</span><span style="color:var(--berry);">${this.formatPrice(o.total)}</span></div>`,v.innerHTML=S}const O=document.getElementById("trayPromoArea");O&&(o.promoValid?O.innerHTML=`
          <div style="display:flex;align-items:center;justify-content:space-between;background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);padding:6px 12px;border-radius:8px;font-size:0.82rem;">
            <span style="color:#4ade80;font-weight:600;">✓ ${this.t("promoApplied").replace("{code}",o.promoCodeName)}</span>
            <button type="button" class="btn btn--xs btn--ghost" style="padding:2px 6px;color:#fca5a5;border:none;" onclick="app.removeCartPromo()">✕ ${this.t("trayRemovePromo")}</button>
          </div>
        `:O.innerHTML=`
          <div class="tray-promo-row">
            <input type="text" id="trayPromoInput" class="tray-promo-input" placeholder="${this.t("trayPromoPlaceholder")}..." maxlength="20" onkeydown="if(event.key==='Enter'){event.preventDefault();app.applyCartPromo();}" />
            <button type="button" class="btn btn--xs btn--primary" id="btnApplyPromo" onclick="app.applyCartPromo()">${this.t("trayApplyPromo")}</button>
          </div>
          <div id="trayPromoFeedback" class="tray-promo-feedback"></div>
        `);const F=document.getElementById("trayGuestNotice");F&&(F.style.display=this.session?"none":"block")},checkoutWhatsApp(){const n=new Map(this.products.map(S=>[S.id,S])),e=this.lang==="ku",t=this.config,s=this.getEconomy(),r=e&&t.shopName.ku||t.shopName.en,i=[],o=[];let a=0;for(const S of this.order)if(S.qty>0&&n.has(S.productId)){const G=n.get(S.productId),Z=G.priceUSD*S.qty;a+=Z;const le=e&&G.name.ku||G.name.en;let ae=`• ${S.qty} × ${le} — ${Z.toFixed(2)}`;if(S.exclude&&S.exclude.length>0){const ne=S.exclude.map(C=>{if(G.exclusions){const _=G.exclusions.find(A=>A.id===C);if(_)return e&&_.ku||_.en}return C}),w=this.t("waExclude")||"No";ae+=`
   ${w} ${ne.join(" · "+w+" ")}`}i.push(ae),o.push({productId:G.id,qty:S.qty,exclude:S.exclude||[],nameSnapshot:le,usdSnapshot:G.priceUSD})}if(i.length===0)return;const c=this.computeCartBreakdown(a),u=document.getElementById("trayFulfillmentDate"),h=u?u.value:"";if(u&&!h){this.showToast("Please select a requested delivery/pickup date.","warning"),u.focus();return}if(!c.minOrderMet){const S=this.formatPrice(c.minOrder),G=this.formatPrice(c.minOrderRemaining),Z=this.t("minimumOrderWarning").replace("{amount}",S).replace("{remaining}",G);this.showToast(Z,"warning");return}const f=[];if(f.push(`${this.t("subtotal")}: $${c.subtotal.toFixed(2)}`),c.discount>0){const S=c.promoCodeName?` (${c.promoCodeName})`:"";f.push(`${this.t("discount")}${S}: −$${c.discount.toFixed(2)}`)}c.isPickupOnly?f.push(`${this.t("fieldPickupOnly")}: ${e?"وەرگرتن لە چێشتخانە":"Pickup available"}`):c.isFreeDelivery?f.push(`${this.t("deliveryFee")}: ${this.t("freeDelivery")}`):c.delivery>0&&f.push(`${this.t("deliveryFee")}: $${c.delivery.toFixed(2)}`),c.tax>0&&f.push(`${this.t("tax")} (${c.taxLabel} ${c.taxRate}%): +$${c.tax.toFixed(2)}`),f.push("────────────────");let p=`${this.t("total")}: $${c.total.toFixed(2)}`;if(this.currency!=="USD"&&s.showSecondary!==!1&&s.secondaryCurrency&&s.secondaryCurrency!=="None"){const S=this.formatPrice(c.total);p=`${this.t("total")}: ${S} ($${c.total.toFixed(2)} USD)`}f.push(p);let g="";this.session&&this.session.user&&this.session.user.name&&(g=this.session.user.name);let v="";if(e?v=`سڵاو لە ${r}! دەمەوێت ئەم داواکارییە تۆمار بکەم:

${i.join(`
`)}

${f.join(`
`)}

ناوی کڕیار: ${g}
بەروار و کاتی گەیاندن: ${h}
ناونیشانی تەواو: `:v=`Hello ${r}! I'd like to place an order:

${i.join(`
`)}

${f.join(`
`)}

Customer Name: ${g}
Preferred Delivery Date/Time: ${h}
Delivery Address: `,this.orderNote&&(v+=`

${this.t("waNote")||"Note for the baker"}: ${this.orderNote}`),this.session&&this.session.user){const S=this.session.user,G={id:"ord_"+Date.now(),customerId:S.id||"u_"+Date.now(),customerName:S.name||S.username||"Customer",customerMobile:S.phone||S.mobile||"",createdAt:Date.now(),status:"pending",items:o,economy:{currency:this.currency,exchangeRate:Number(s.exchangeRate)||1310,subtotal:c.subtotal,discount:c.discount,deliveryFee:c.delivery,tax:c.tax,total:c.total,secondaryCurrency:s.secondaryCurrency||"IQD",roundingRule:s.roundingRule||250,currencySymbol:s.currencySymbol||"د.ع"},notes:"",deliveryDate:"",deliveryAddress:""};this.orders.unshift(G),this.saveOrders(),this.updateAuthUI()}const F=`https://wa.me/${(this.config.contact.whatsapp||vh).replace(/\D/g,"")}?text=${encodeURIComponent(v)}`;window.open(F,"_blank")},openWhatsAppDirect(){const n=(this.config.contact.whatsapp||vh).replace(/\D/g,""),e=this.lang==="ku",t=e?this.config.shopName.ku||this.config.shopName.en:this.config.shopName.en,s=e?`سڵاو ${t}! دەمەوێت پرسیار لەسەر کێکەکان بکەم.`:`Hello ${t}! I have an inquiry regarding your cakes.`;window.open(`https://wa.me/${n}?text=${encodeURIComponent(s)}`,"_blank")},updateAuthUI(){const n=document.getElementById("desktopAuthContainer"),e=document.getElementById("mobileAuthContainer");let t="";if(!this.session)t=`<button class="btn btn--primary btn--sm" onclick="app.openAuthModal()">${this.t("btnSignIn")}</button>`;else{const s=this.session.user,r=s.role==="admin"||s.role==="dev"||s.role==="staff",i=s.role==="customer",o=s.role==="dev"?"badge--dev":s.role==="admin"?"badge--admin":"badge--customer",a=this.getCustomerOrders(s.id,s.phone),c=i&&a.some(h=>Date.now()-h.createdAt<1440*60*1e3),u=i?`
        <button type="button" class="btn btn--ghost btn--sm my-orders-btn" onclick="app.openHistoryModal()">
          ${c?'<span class="order-badge-dot" title="Recent order active"></span>':""}
          <span>${this.t("myOrders")}</span>
        </button>
      `:"";t=`
        <div class="user-chip">
          <span class="badge ${o}">${s.role.toUpperCase()}</span>
          <span style="font-weight:600;">${s.name||s.username}</span>
          ${u}
          ${r?`<button class="btn btn--ghost btn--sm" style="padding:4px 8px;font-size:0.78rem;" onclick="app.openPanelModal()">${this.t("btnPanel")}</button>`:""}
          <button class="btn btn--ghost btn--sm" style="padding:4px 8px;font-size:0.78rem;" onclick="app.logout()" title="${this.t("btnLogout")}">✕</button>
        </div>
      `}n&&(n.innerHTML=t),e&&(e.innerHTML=t)},getCustomerOrders(n,e){return this.orders?this.orders.filter(t=>!!(n&&t.customerId===n||e&&t.customerMobile&&t.customerMobile.replace(/\D/g,"")===String(e).replace(/\D/g,""))):[]},openHistoryModal(){if(!this.session||!this.session.user){this.openAuthModal();return}const n=document.getElementById("historyModal");n&&n.classList.add("is-open"),this.renderCustomerHistory()},closeHistoryModal(){const n=document.getElementById("historyModal");n&&n.classList.remove("is-open")},toggleHistoryDetails(n){this.historyDetailsOpen[n]=!this.historyDetailsOpen[n],this.renderCustomerHistory()},reorderItems(n){const e=this.orders.find(r=>r.id===n);if(!e||!e.items||e.items.length===0)return;const t=new Map(this.products.map(r=>[r.id,r]));let s=0;if(e.items.forEach(r=>{if(t.has(r.productId)){const i=r.exclude||[],o=this.order.find(a=>a.productId===r.productId&&a.exclude.join("|")===i.join("|"));o?o.qty+=r.qty||1:this.order.push({id:this.generateId(),productId:r.productId,qty:r.qty||1,exclude:[...i]}),s+=r.qty||1}}),e.orderNote&&(this.orderNote=e.orderNote),s>0){this.closeHistoryModal(),this.renderTray();const r=this.t("orderAddedToTray").replace("{count}",s);this.showToast(r,"success")}else this.showToast(this.t("itemsNotAvailable"),"warning")},renderCustomerHistory(){if(!document.getElementById("historyModal"))return;const e=this.session?this.session.user:null;if(!e){this.closeHistoryModal();return}const t=this.lang==="ku",s=this.getCustomerOrders(e.id,e.phone),r=document.getElementById("historyModalTitle");r&&(r.textContent=this.t("myOrdersTitle"));const i=document.getElementById("historyModalSubtitle");if(i)if(s.length>0){const c=Math.min(...s.map(h=>h.createdAt||Date.now())),u=new Date(c).toLocaleDateString(t?"ku":"en-US",{month:"short",year:"numeric"});i.textContent=this.t("myOrdersSubtitle").replace("{count}",s.length).replace("{date}",u)}else i.textContent=this.t("myOrdersEmpty");const o=document.getElementById("historyCustomerStats");if(o)if(s.length>0){const c=s.length;let u=0;const h={};s.forEach(g=>{u+=g.economy&&typeof g.economy.total=="number"?g.economy.total:0,Array.isArray(g.items)&&g.items.forEach(v=>{const O=v.nameSnapshot||v.productId;h[O]=(h[O]||0)+(v.qty||1)})});let f="—",p=0;for(const[g,v]of Object.entries(h))v>p&&(p=v,f=g);o.style.display="grid",o.innerHTML=`
          <div class="history-stat-card">
            <span class="history-stat-label">${this.t("myOrdersTotalOrders")}</span>
            <span class="history-stat-val">${c}</span>
          </div>
          <div class="history-stat-card">
            <span class="history-stat-label">${this.t("myOrdersTotalSpent")}</span>
            <span class="history-stat-val">${this.formatPrice(u)}</span>
          </div>
          <div class="history-stat-card">
            <span class="history-stat-label">${this.t("myOrdersFavourite")}</span>
            <span class="history-stat-val" style="font-size:0.95rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${f}">${f}</span>
          </div>
        `}else o.style.display="none",o.innerHTML="";const a=document.getElementById("historyOrdersList");if(a){if(s.length===0){a.innerHTML=`
        <div class="history-empty-state">
          <div class="history-empty-icon">📦</div>
          <h4 class="history-empty-title">${this.t("myOrdersEmpty")}</h4>
          <p class="history-empty-hint">${this.t("myOrdersEmptyHint")}</p>
          <button type="button" class="btn btn--primary btn--sm" onclick="app.closeHistoryModal();document.getElementById('menu').scrollIntoView({behavior:'smooth'});">${this.t("myOrdersBrowse")}</button>
        </div>
      `;return}a.innerHTML=s.map(c=>{const u=new Date(c.createdAt).toLocaleDateString(t?"ku":"en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),h={pending:{label:this.t("orderStatusPending"),class:"history-badge--pending"},baking:{label:this.t("orderStatusBaking"),class:"history-badge--baking"},delivered:{label:this.t("orderStatusDelivered"),class:"history-badge--delivered"},cancelled:{label:this.t("orderStatusCancelled"),class:"history-badge--cancelled"}},f=h[c.status]||h.pending,p=c.economy||{},g=this.formatPrice(p.total||0),v=!!this.historyDetailsOpen[c.id],O=(c.items||[]).map(S=>`${S.qty}× ${S.nameSnapshot}`).join(", ");let F="";if(v){const S=(c.items||[]).map(Z=>`
          <div class="history-detail-row">
            <span>${Z.qty} × ${Z.nameSnapshot}</span>
            <span>$${((Z.usdSnapshot||0)*Z.qty).toFixed(2)}</span>
          </div>
        `).join("");let G="";p.subtotal!==void 0&&(G+=`<div class="history-detail-row" style="margin-top:6px;border-top:1px dashed var(--gold-border);padding-top:6px;"><span>${this.t("subtotal")}</span><span>${this.formatPrice(p.subtotal)}</span></div>`),p.discount>0&&(G+=`<div class="history-detail-row" style="color:#4ade80;"><span>${this.t("discount")}</span><span>−${this.formatPrice(p.discount)}</span></div>`),p.deliveryFee!==void 0&&(G+=`<div class="history-detail-row"><span>${this.t("deliveryFee")}</span><span>${p.deliveryFee===0?this.t("freeDelivery"):this.formatPrice(p.deliveryFee)}</span></div>`),p.tax>0&&(G+=`<div class="history-detail-row"><span>${this.t("tax")}</span><span>+${this.formatPrice(p.tax)}</span></div>`),G+=`<div class="history-detail-row history-detail-row--total"><span>${this.t("total")}</span><span>${g}</span></div>`,F=`
          <div class="history-order-details">
            <div class="history-items-breakdown">
              ${S}
              ${G}
            </div>
          </div>
        `}return`
        <article class="history-order-card">
          <div class="history-order-header">
            <div class="history-order-meta">
              <span class="history-order-id">#${c.id.slice(-6).toUpperCase()}</span>
              <span class="history-order-date">${u}</span>
            </div>
            <span class="history-badge ${f.class}">${f.label}</span>
          </div>
          <div class="history-order-summary">
            <p class="history-order-items-preview">${O}</p>
            <div class="history-order-price">${g}</div>
          </div>
          <div class="history-order-actions">
            <button type="button" class="btn btn--xs btn--ghost" onclick="app.toggleHistoryDetails('${c.id}')">
              ${v?"▲ Hide details":`▼ ${this.t("myOrdersDetails")}`}
            </button>
            <button type="button" class="btn btn--xs btn--primary" onclick="app.reorderItems('${c.id}')">
              🔄 ${this.t("myOrdersReorder")}
            </button>
          </div>
          ${F}
        </article>
      `}).join("")}},openAuthModal(){const n=document.getElementById("authModal");n&&n.classList.add("is-open")},closeAuthModal(){const n=document.getElementById("authModal");n&&n.classList.remove("is-open")},switchAuthTab(n){const e=document.getElementById("tabBtnCustomer"),t=document.getElementById("tabBtnAdmin"),s=document.getElementById("tabBtnDev"),r=document.getElementById("customerAuthForm"),i=document.getElementById("staffAuthForm");[e,t,s].forEach(o=>{o&&o.classList.remove("is-active")}),n==="customer"?(e&&e.classList.add("is-active"),r&&(r.style.display="block"),i&&(i.style.display="none"),this.authTargetRole="customer"):(n==="admin"&&t&&t.classList.add("is-active"),n==="dev"&&s&&s.classList.add("is-active"),r&&(r.style.display="none"),i&&(i.style.display="block"),this.authTargetRole=n)},async handleGoogleLogin(n){if(!Oe)return this.showToast("Google Auth not initialized","error");try{const t=(await $C(Oe,new Qt)).user;if(n==="customer"){let s=this.users.find(r=>r.id===t.uid);s||(s={id:t.uid,name:document.getElementById("custName").value.trim()||t.displayName||"Customer",phone:document.getElementById("custMobile").value.trim()||t.phoneNumber||"N/A",role:"customer",createdAt:Date.now()},this.users.push(s),this.saveUsers(),se&&ut(xe(se,"users",userId)).catch(r=>Ae(r,be.DELETE,"users"))),this.session={user:s,expires:Date.now()+864e5},localStorage.setItem("yummy_session",JSON.stringify(this.session)),this.closeAuthModal(),this.showToast(this.t("loginSuccess")||"Logged in successfully!","success"),this.renderMenu()}else{const s=t.email.toLowerCase()==="qaessafty@gmail.com";let r=this.users.find(i=>i.id===t.uid);if(r){if(!["admin","dev","staff"].includes(r.role))return await Ra(Oe),this.showToast("Access denied: You are registered as a customer.","error")}else if(s)r={id:t.uid,name:"Developer",role:"dev",createdAt:Date.now()},this.users.push(r),this.saveUsers(),se&&ut(xe(se,"users",userId)).catch(i=>Ae(i,be.DELETE,"users"));else return await Ra(Oe),this.showToast("Access denied: You must be registered as staff.","error");this.session={user:r,expires:Date.now()+864e5*7},localStorage.setItem("yummy_session",JSON.stringify(this.session)),this.closeAuthModal(),this.showToast("Control panel access granted.","success"),this.renderAll()}}catch(e){console.error(e),this.showToast(e.message,"error")}},async handleCustomerSubmit(n){n.preventDefault();const e=document.getElementById("custMobile").value.trim(),t=document.getElementById("custName").value.trim();if(!e||!t)return this.showToast(this.t("errFillFields")||"Please enter phone and name.","error");const s="local_"+e.replace(/\D/g,"");let r=this.users.find(i=>i.phone===e);r||(r={id:s,name:t,phone:e,role:"customer",createdAt:Date.now()},this.users.push(r),Oe&&this.saveUsers(),se?ut(xe(se,"users",userId)).catch(i=>Ae(i,be.DELETE,"users")):localStorage.setItem("yummy_users",JSON.stringify(this.users))),this.session={user:r,expires:Date.now()+864e5},localStorage.setItem("yummy_session",JSON.stringify(this.session)),this.closeAuthModal(),this.showToast(this.t("loginSuccess")||"Logged in successfully!","success"),this.renderMenu()},async handleStaffSubmit(n){n.preventDefault();const e=document.getElementById("staffUsername").value.trim(),t=document.getElementById("staffPassword").value.trim();if(!e||!t)return this.showToast(this.t("errFillFields")||"Please enter username and password.","error");const s=this.users.find(r=>(r.username===e||r.name===e)&&r.password===t&&(r.role==="admin"||r.role==="dev"||r.role==="staff"));if(!s){if(e==="admin"&&t==="admin"){const r={id:"local_admin",name:"Admin",role:"admin",createdAt:Date.now()};this.session={user:r,expires:Date.now()+864e5},localStorage.setItem("yummy_session",JSON.stringify(this.session)),this.closeAuthModal(),this.showToast("Logged in as Admin locally","success"),this.renderAll();return}return this.showToast(this.t("toastInvalidLogin")||"Invalid login.","error")}this.session={user:s,expires:Date.now()+864e5},localStorage.setItem("yummy_session",JSON.stringify(this.session)),this.closeAuthModal(),this.showToast(this.t("loginSuccess")||"Logged in successfully!","success"),this.renderAll()},async logout(){Oe&&await Ra(Oe).catch(console.error),this.session=null,this.saveSession(),this.updateAuthUI(),this.renderWatermark(),this.closePanelModal(),this.showToast(this.t("loggedOut"))},openPanelModal(){if(!this.session||!["admin","dev","staff"].includes(this.session.user.role)){this.openAuthModal();return}const n=document.getElementById("panelModal");n&&n.classList.add("is-open");const e=document.getElementById("panelUserBadge");e&&(e.textContent=this.session.user.role.toUpperCase(),e.className=`badge ${this.session.user.role==="dev"?"badge--dev":"badge--admin"}`),this.renderPanelSidebar(),this.renderPanelTab(this.activePanelTab)},openSubmitReviewModal(){document.getElementById("custReviewName").value="",document.getElementById("custReviewQuote").value="",document.getElementById("submitReviewModal").classList.add("is-open")},closeSubmitReviewModal(){document.getElementById("submitReviewModal").classList.remove("is-open")},submitCustomerReview(n){n.preventDefault();const e=document.getElementById("custReviewName").value.trim(),t=document.getElementById("custReviewQuote").value.trim();if(!e||!t)return;let s="AN";const r=e.split(" ").filter(Boolean);r.length>1?s=(r[0][0]+r[r.length-1][0]).toUpperCase():r.length===1&&(s=r[0].substring(0,2).toUpperCase()),this.config.reviews||(this.config.reviews=[]),this.config.reviews.push({initials:s,name:{en:e,ku:e},role:{en:"Customer",ku:"کڕیار"},quote:{en:t,ku:t}}),this.saveConfig(),this.renderReviews(),this.closeSubmitReviewModal(),this.showToast(this.t("toastSaved")||"Review submitted successfully","success")},closePanelModal(){this._draftEconomy&&(this._draftEconomy=null,this.applyEconomy()),this.activePanelTab==="theme"&&this.revertTheme();const n=document.getElementById("panelModal");n&&n.classList.remove("is-open")},renderPanelSidebar(){const n=document.getElementById("panelSidebar");if(!n)return;const e=this.session&&this.session.user&&this.session.user.role==="dev",t=this.session&&this.session.user&&this.session.user.role==="staff",s=t?this.session.user.permissions||[]:null,r=o=>`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${o}</svg>`,i=[{id:"brand",label:"Brand & Logo",icon:r('<circle cx="13.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" stroke="none"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" stroke="none"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" stroke="none"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>'),devOnly:!1},{id:"theme",label:this.t("tabTheme"),icon:r('<rect x="3" y="3" width="18" height="18" rx="4"/><rect x="7" y="7" width="5" height="5" rx="1"/><rect x="12" y="12" width="5" height="5" rx="1"/>'),devOnly:!1},{id:"about",label:"About Us",icon:r('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'),devOnly:!1},{id:"faq",label:"FAQ",icon:r('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>'),devOnly:!1},{id:"reviews",label:"Reviews",icon:r('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),devOnly:!1},{id:"contact",label:"Contact",icon:r('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),devOnly:!1},{id:"socials",label:"Social Media",icon:r('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>'),devOnly:!1},{id:"products",label:"Products",icon:r('<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/>'),devOnly:!1},{id:"customers",label:this.t("tabCustomers")||"Customers",icon:r('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),devOnly:!1},{id:"economy",label:this.t("tabEconomy")||"Economy",icon:r('<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>'),devOnly:!1},{id:"fonts",label:this.t("tabFonts"),icon:r('<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>'),devOnly:!1},{id:"users",label:"Users",icon:r('<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" stroke="none"/>'),devOnly:!1},{id:"data",label:"Data",icon:r('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>'),devOnly:!0}];n.innerHTML=i.filter(o=>!(o.devOnly&&!e||t&&!s.includes(o.id)||o.id==="users"&&t)).map(o=>`
        <button type="button" class="panel-tab-btn ${this.activePanelTab===o.id?"is-active":""}" onclick="app.switchPanelTab('${o.id}')">
          <span>${o.icon}</span>
          <span>${o.label}</span>
        </button>
      `).join("")},switchPanelTab(n){this.activePanelTab==="economy"&&n!=="economy"&&this._draftEconomy&&(this._draftEconomy=null,this.applyEconomy()),this.activePanelTab==="theme"&&n!=="theme"&&this.revertTheme(),this.activePanelTab=n,this.renderPanelSidebar(),this.renderPanelTab(n)},renderPanelTab(n){var r,i;const e=document.getElementById("panelContent");if(!e)return;const t=this.config,s=this.session&&this.session.user&&this.session.user.role==="dev";switch(n){case"theme":this.renderThemeTab(e);break;case"customers":this.renderCustomersTab(e);break;case"brand":this.draftLogo||this.initLogoDraft(),e.innerHTML=`
          <h4 style="font-family:var(--font-serif);margin-bottom:16px;">Brand & Announcement</h4>
          <form onsubmit="app.saveBrandSettings(event)">
            <div id="logoEditorContainer">
              ${this.getLogoEditorHtml()}
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Shop Name (English)</label>
                <input type="text" id="cfgShopNameEn" class="form-input" value="${t.shopName.en}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Shop Name (Kurdish)</label>
                <input type="text" id="cfgShopNameKu" class="form-input" value="${t.shopName.ku||""}" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Tagline (English)</label>
                <input type="text" id="cfgTaglineEn" class="form-input" value="${t.tagline.en}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Tagline (Kurdish)</label>
                <input type="text" id="cfgTaglineKu" class="form-input" value="${t.tagline.ku||""}" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Announcement Bar (English)</label>
              <input type="text" id="cfgAnnounceEn" class="form-input" value="${t.announcement.en.replace(/"/g,"&quot;")}" />
            </div>
            <div class="form-group">
              <label class="form-label">Announcement Bar (Kurdish)</label>
              <input type="text" id="cfgAnnounceKu" class="form-input" value="${(t.announcement.ku||"").replace(/"/g,"&quot;")}" />
            </div>
            <button type="submit" class="btn btn--primary">Save Changes</button>
          </form>
        `;break;case"about":e.innerHTML=`
          <h4 style="font-family:var(--font-serif);margin-bottom:16px;">Our Story & Heritage</h4>
          <form onsubmit="app.saveAboutSettings(event)">
            <div class="form-group">
              <label class="form-label">Image URL</label>
              <input type="text" id="cfgAboutImage" class="form-input" value="${t.aboutUs.imageUrl||"https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&auto=format&fit=crop&q=80"}" />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Eyebrow / Subtitle (EN)</label>
                <input type="text" id="cfgAboutEyebrowEn" class="form-input" value="${t.aboutUs.eyebrowEn||"Our Heritage"}" />
              </div>
              <div class="form-group">
                <label class="form-label">Eyebrow / Subtitle (KU)</label>
                <input type="text" id="cfgAboutEyebrowKu" class="form-input" value="${t.aboutUs.eyebrowKu||"کەلەپووری ئێمە"}" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Main Title (EN)</label>
                <input type="text" id="cfgAboutTitleEn" class="form-input" value="${t.aboutUs.titleEn||"Crafted with patience, baked with devotion"}" />
              </div>
              <div class="form-group">
                <label class="form-label">Main Title (KU)</label>
                <input type="text" id="cfgAboutTitleKu" class="form-input" value="${t.aboutUs.titleKu||"بە ئارامگرتن ئامادە کراوە، بە خۆشەویستی برژاوە"}" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Our Story Text (English)</label>
              <textarea id="cfgAboutEn" class="form-textarea" rows="5">${t.aboutUs.en}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Our Story Text (Kurdish)</label>
              <textarea id="cfgAboutKu" class="form-textarea" rows="5">${t.aboutUs.ku||""}</textarea>
            </div>
            <button type="submit" class="btn btn--primary">Save Changes</button>
          </form>
        `;break;case"faq":const o=t.faq||[];e.innerHTML=`
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
            <h4 style="font-family:var(--font-serif); margin:0;">FAQ Editor</h4>
            <button type="button" class="btn btn--primary btn--sm" onclick="app.addFaqItem()">+ Add Question</button>
          </div>
          <form onsubmit="app.saveFaqSettings(event)" id="faqForm">
            <div id="faqItemsContainer" style="display:flex; flex-direction:column; gap:16px;">
              ${o.map((p,g)=>Xr.getFaqItemHtml(p,g)).join("")}
            </div>
            <button type="submit" class="btn btn--primary" style="margin-top: 24px; width: 100%;">${this.t("btnSaveConfig")||"Save FAQ"}</button>
          </form>
        `;break;case"reviews":const a=t.reviews||[];e.innerHTML=`
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
            <h4 style="font-family:var(--font-serif); margin:0;">Reviews Editor</h4>
            <div>
              <button type="button" class="btn btn--ghost btn--sm" onclick="app.resetReviews()" style="margin-right:8px;">↺ Reset Reviews</button>
              <button type="button" class="btn btn--primary btn--sm" onclick="app.addReviewItem()">+ Add Review</button>
            </div>
          </div>
          <form onsubmit="app.saveReviewSettings(event)" id="reviewForm">
            <div id="reviewItemsContainer" style="display:flex; flex-direction:column; gap:16px;">
              ${a.map((p,g)=>Xr.getReviewItemHtml(p,g)).join("")}
            </div>
            <button type="submit" class="btn btn--primary" style="margin-top: 24px; width: 100%;">${this.t("btnSaveConfig")||"Save Reviews"}</button>
          </form>
        `;break;case"contact":e.innerHTML=`
          <h4 style="font-family:var(--font-serif);margin-bottom:16px;">Contact & Kitchen Information</h4>
          <form onsubmit="app.saveContactSettings(event)">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">WhatsApp Number (digits only, no +)</label>
                <input type="text" id="cfgWhatsapp" class="form-input" value="${t.contact.whatsapp}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Display Phone</label>
                <input type="text" id="cfgPhone" class="form-input" value="${t.contact.phone}" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" id="cfgEmail" class="form-input" value="${t.contact.email}" required />
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Kitchen Address (English)</label>
                <textarea id="cfgAddressEn" class="form-textarea">${t.contact.address.en}</textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Kitchen Address (Kurdish)</label>
                <textarea id="cfgAddressKu" class="form-textarea">${t.contact.address.ku||""}</textarea>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Opening Hours (English)</label>
                <textarea id="cfgHoursEn" class="form-textarea">${t.contact.hours.en}</textarea>
              </div>
              <div class="form-group">
                <label class="form-label">Opening Hours (Kurdish)</label>
                <textarea id="cfgHoursKu" class="form-textarea">${t.contact.hours.ku||""}</textarea>
              </div>
            </div>
            <button type="submit" class="btn btn--primary">Save Changes</button>
          </form>
        `;break;case"socials":e.innerHTML=`
          <h4 style="font-family:var(--font-serif);margin-bottom:6px;">Social Media URLs</h4>
          <p style="font-size:0.8rem;color:var(--muted);margin:0 0 16px 0;">Leave a field empty to hide its icon in the footer.</p>
          <form onsubmit="app.saveSocialSettings(event)">
            <div class="form-group">
              <label class="form-label">Instagram URL</label>
              <input type="url" id="cfgInsta" class="form-input" value="${t.socials.instagram}" />
            </div>
            <div class="form-group">
              <label class="form-label">Facebook URL</label>
              <input type="url" id="cfgFb" class="form-input" value="${t.socials.facebook}" />
            </div>
            <div class="form-group">
              <label class="form-label">TikTok URL</label>
              <input type="url" id="cfgTiktok" class="form-input" value="${t.socials.tiktok}" />
            </div>
            <div class="form-group">
              <label class="form-label">Snapchat URL</label>
              <input type="url" id="cfgSnap" class="form-input" dir="ltr" value="${this.esc(t.socials.snapchat||"")}" />
            </div>
            <button type="submit" class="btn btn--primary">Save Changes</button>
          </form>
        `;break;case"products":(!this.selectedProductId||!this.products.some(p=>p.id===this.selectedProductId))&&(this.selectedProductId=this.products.length>0?this.products[0].id:null);const c=this.products.find(p=>p.id===this.selectedProductId);this.pendingImageData=c&&c.img||"",e.innerHTML=`
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;gap:12px;flex-wrap:wrap;">
            <div>
              <h4 style="font-family:var(--font-serif);margin:0 0 4px 0;">Product Catalogue (${this.products.length})</h4>
              <p style="font-size:0.82rem;color:var(--muted);margin:0;">Manage pricing, bilingual names, descriptions, and photo gallery.</p>
            </div>
            <button type="button" class="btn btn--primary btn--sm" onclick="app.addNewProduct()">
              ${this.t("btnAddNewProduct")}
            </button>
          </div>
          <div class="form-group" style="margin-bottom:18px;">
            <label class="form-label" for="prodSelect">Select product to edit:</label>
            <select class="form-select" id="prodSelect" onchange="app.selectProductForEditing(this.value)">
              ${this.products.map(p=>`
                <option value="${p.id}" ${p.id===this.selectedProductId?"selected":""}>
                  ${p.emoji||"🎂"} ${p.name.en} ($${p.priceUSD}) ${p.img?"📷":""}
                </option>
              `).join("")}
            </select>
          </div>
          <div id="productEditorArea">
            <!-- Injected by renderProductEditor -->
          </div>
        `,this.renderProductEditor();break;case"fonts":{const p=this.session&&this.session.user?this.session.user:null;if(!p||p.role!=="admin"&&p.role!=="dev"){e.innerHTML=`<p style="color:var(--muted);">${this.t("usersNoAccess")}</p>`;break}const g=(G,Z)=>G.map(le=>`<option value="${le.value}" ${Z===le.value?"selected":""}>${le.label}</option>`).join(""),v=t.kurdishBodyFont||"Vazirmatn",O=t.kurdishDisplayFont||"Vazirmatn",F=t.englishBodyFont||"DM Sans",S=t.englishDisplayFont||"Cormorant Garamond";e.innerHTML=`
          <h4 style="font-family:var(--font-serif);margin-bottom:16px;">${this.t("tabFonts")}</h4>
          <form onsubmit="app.saveFontSettings(event)">
            <div style="font-size:0.9rem;font-weight:600;color:var(--berry);margin-bottom:8px;">Kurdish / Arabic Typography (RTL)</div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="cfgKuBody">${this.t("fieldKurdishBody")}</label>
                <select id="cfgKuBody" class="form-select" onchange="app.handleFontPreviewChange()">
                  ${g(wh,v)}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="cfgKuDisplay">${this.t("fieldKurdishDisplay")}</label>
                <select id="cfgKuDisplay" class="form-select" onchange="app.handleFontPreviewChange()">
                  ${g(wh,O)}
                </select>
              </div>
            </div>

            <div style="font-size:0.9rem;font-weight:600;color:var(--berry);margin-top:16px;margin-bottom:8px;">English / Latin Typography (LTR)</div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="cfgEnBody">${this.t("fieldEnglishBody")}</label>
                <select id="cfgEnBody" class="form-select" onchange="app.handleFontPreviewChange()">
                  ${g(Ih,F)}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="cfgEnDisplay">${this.t("fieldEnglishDisplay")}</label>
                <select id="cfgEnDisplay" class="form-select" onchange="app.handleFontPreviewChange()">
                  ${g(Ih,S)}
                </select>
              </div>
            </div>

            <div id="fontPreviewMount">
              <div id="fontPreviewFrame" class="font-preview-frame" style="margin-top:24px;padding:24px;background:var(--shell);border-radius:16px;border:1px solid var(--line);direction:rtl;text-align:right;">
                <div style="font-size:.72rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:14px">${this.t("fontPreview")} (کوردی)</div>
                <h4 id="fontPreviewHeading" style="font-size:1.6rem;margin-bottom:10px;font-family:'${O}',serif;">کێکی تایبەت بۆ ئاهەنگەکەت</h4>
                <p id="fontPreviewBody" style="font-size:.95rem;color:var(--muted);line-height:1.9;font-family:'${v}',sans-serif;">
                  کێک و کاپکێک و شیرینی بە بچووکی لە چێشتخانەکەی خۆمان بە دەست دروست دەکرێن — بە کەرەی ڕاستەقینە و ڤانیلای ڕاستەقینە.
                </p>
              </div>

              <div id="fontPreviewFrameEn" class="font-preview-frame" style="margin-top:16px;padding:24px;background:var(--shell);border-radius:16px;border:1px solid var(--line);direction:ltr;text-align:left;">
                <div style="font-size:.72rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:14px">${this.t("fontPreview")} (English)</div>
                <h4 id="fontPreviewHeadingEn" style="font-size:1.6rem;margin-bottom:10px;font-family:'${S}',serif;">Bespoke Celebration Cakes</h4>
                <p id="fontPreviewBodyEn" style="font-size:.95rem;color:var(--muted);line-height:1.6;font-family:'${F}',sans-serif;">
                  Handcrafted layered cakes, cupcakes, and French desserts baked fresh daily with organic butter, bourbon vanilla, and seasonal fruit.
                </p>
              </div>
            </div>

            <div style="margin-top:20px;display:flex;align-items:center;gap:12px;">
              <button class="btn btn--primary btn--sm" type="submit">${this.t("saveFonts")}</button>
            </div>
            <div style="font-size:0.8rem;color:var(--muted);margin-top:10px;">
              Font selections preview live immediately; click save to persist your preferences.
            </div>
          </form>
        `,this.addPhonePreviewToggle(document.getElementById("fontPreviewMount"),{frameId:"fontPreviewFrame",mountId:"fontPreviewMount"});break}case"economy":const u=this.config.economy||Zn,h=u.lastUpdatedRate?new Date(u.lastUpdatedRate).toLocaleDateString():"";e.innerHTML=`
          <div style="margin-bottom:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
              <div>
                <h4 style="font-family:var(--font-serif);margin:0 0 4px 0;">${this.t("economyTitle")}</h4>
                <p style="font-size:0.86rem;color:var(--muted);margin:0;">${this.t("economyDesc")}</p>
              </div>
              <div style="display:flex;align-items:center;gap:8px;">
                <span id="rateTimestampBadge" style="font-size:0.75rem;color:var(--muted);">
                  ${h?`Rate updated: <span id="lastUpdatedRateText">${h}</span>`:""}
                </span>
              </div>
            </div>
          </div>

          <div class="economy-panel-layout">
            <!-- Form Column -->
            <form id="economySettingsForm" onsubmit="app.saveEconomySettings(event)" oninput="app.handleEconomyInput(event)" onchange="app.handleEconomyInput(event)" style="display:flex;flex-direction:column;gap:14px;">
              
              <!-- 1. Currencies -->
              <details class="economy-accordion" id="ecoAccordionCurrencies" open>
                <summary class="economy-accordion__summary">
                  <div class="economy-accordion__header-row">
                    <h5 class="economy-accordion__title">
                      <span>🌐</span> <span>${this.t("economyCurrencies")}</span>
                      <span class="badge badge--admin economy-mobile-role-badge" style="display:none;font-size:0.68rem;padding:2px 6px;">${(((i=(r=this.session)==null?void 0:r.user)==null?void 0:i.role)||"admin").toUpperCase()}</span>
                    </h5>
                    <span class="economy-accordion__chevron">▼</span>
                  </div>
                  <span class="economy-accordion__subtext" id="ecoCurrenciesSummary">Loading...</span>
                </summary>
                <div class="economy-accordion__body">
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label" for="cfgPrimaryCurrency">${this.t("fieldPrimaryCurrency")}</label>
                      <input type="text" id="cfgPrimaryCurrency" class="form-input" value="USD ($)" disabled style="background:var(--shell);cursor:not-allowed;" />
                      <span style="font-size:0.75rem;color:var(--muted);margin-top:2px;">Base currency for all products</span>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="cfgSecondaryCurrency">${this.t("fieldSecondaryCurrency")}</label>
                      <select id="cfgSecondaryCurrency" class="form-select">
                        <option value="IQD" ${u.secondaryCurrency==="IQD"?"selected":""}>IQD — Iraqi Dinar</option>
                        <option value="EUR" ${u.secondaryCurrency==="EUR"?"selected":""}>EUR — Euro</option>
                        <option value="TRY" ${u.secondaryCurrency==="TRY"?"selected":""}>TRY — Turkish Lira</option>
                        <option value="AED" ${u.secondaryCurrency==="AED"?"selected":""}>AED — UAE Dirham</option>
                        <option value="None" ${u.secondaryCurrency==="None"?"selected":""}>None (USD Only)</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row" style="align-items:center;">
                    <div class="form-group">
                      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:600;font-size:0.88rem;">
                        <input type="checkbox" id="cfgShowSecondary" ${u.showSecondary!==!1?"checked":""} />
                        <span>${this.t("fieldShowSecondary")}</span>
                      </label>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="cfgCurrencySymbol">${this.t("fieldCurrencySymbol")}</label>
                      <input type="text" id="cfgCurrencySymbol" class="form-input" value="${(u.currencySymbol||"د.ع").replace(/"/g,"&quot;")}" maxlength="8" />
                    </div>
                  </div>
                </div>
              </details>

              <!-- 2. Exchange Rate -->
              <details class="economy-accordion" id="ecoAccordionExchange" open>
                <summary class="economy-accordion__summary">
                  <div class="economy-accordion__header-row">
                    <h5 class="economy-accordion__title">
                      <span>💱</span> <span>${this.t("economyExchange")}</span>
                    </h5>
                    <span class="economy-accordion__chevron">▼</span>
                  </div>
                  <span class="economy-accordion__subtext" id="ecoExchangeSummary">Loading...</span>
                </summary>
                <div class="economy-accordion__body">
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label" for="cfgExchangeRate">${this.t("fieldExchangeRate")}</label>
                      <input type="number" id="cfgExchangeRate" class="form-input" value="${u.exchangeRate||1310}" min="1" step="1" inputmode="numeric" required />
                      <span style="font-size:0.75rem;color:var(--muted);margin-top:2px;">1 USD = X in secondary currency</span>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="cfgRoundingRule">${this.t("fieldRoundingRule")}</label>
                      <select id="cfgRoundingRule" class="form-select">
                        <option value="250" ${parseInt(u.roundingRule,10)===250?"selected":""}>${this.t("roundNearest250")}</option>
                        <option value="500" ${parseInt(u.roundingRule,10)===500?"selected":""}>${this.t("roundNearest500")}</option>
                        <option value="1000" ${parseInt(u.roundingRule,10)===1e3?"selected":""}>${this.t("roundNearest1000")}</option>
                        <option value="1" ${parseInt(u.roundingRule,10)===1?"selected":""}>${this.t("roundNearest1")}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row" style="align-items:center;">
                    <div class="form-group">
                      <label style="display:flex;align-items:center;gap:10px;cursor:not-allowed;font-size:0.88rem;color:var(--muted);">
                        <input type="checkbox" id="cfgAutoRefresh" disabled />
                        <span>${this.t("fieldAutoRefresh")}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </details>

              <!-- 3. Delivery -->
              <details class="economy-accordion" id="ecoAccordionDelivery">
                <summary class="economy-accordion__summary">
                  <div class="economy-accordion__header-row">
                    <h5 class="economy-accordion__title">
                      <span>🚚</span> <span>${this.t("economyDelivery")}</span>
                    </h5>
                    <span class="economy-accordion__chevron">▼</span>
                  </div>
                  <span class="economy-accordion__subtext" id="ecoDeliverySummary">Loading...</span>
                </summary>
                <div class="economy-accordion__body">
                  <div class="form-row--3">
                    <div class="form-group">
                      <label class="form-label" for="cfgDeliveryFee">${this.t("fieldDeliveryFee")}</label>
                      <input type="number" id="cfgDeliveryFee" class="form-input" value="${u.deliveryFee??8}" min="0" step="0.5" inputmode="decimal" required />
                      <span id="deliveryZeroNote" style="display:none;font-size:0.76rem;color:#16a34a;font-weight:600;margin-top:3px;">${this.t("deliveryFreeForEveryone")}</span>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="cfgFreeDeliveryOver">${this.t("fieldFreeDeliveryOver")}</label>
                      <input type="number" id="cfgFreeDeliveryOver" class="form-input" value="${u.freeDeliveryOver??60}" min="0" step="1" inputmode="numeric" required />
                      <span style="font-size:0.75rem;color:var(--muted);margin-top:3px;">0 = all-order free delivery</span>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="cfgMinimumOrder">${this.t("fieldMinimumOrder")}</label>
                      <input type="number" id="cfgMinimumOrder" class="form-input" value="${u.minimumOrder??0}" min="0" step="1" inputmode="numeric" required />
                      <span style="font-size:0.75rem;color:var(--muted);margin-top:3px;">0 = no minimum order</span>
                    </div>
                  </div>

                  <!-- Inline Amber Warning if Free Delivery is lower than Min Order -->
                  <div id="freeDeliveryWarn" class="eco-warning-box" style="display:none;" role="alert" aria-live="polite">
                    <span>⚠️</span> <span>${this.t("freeDeliveryWarning")}</span>
                  </div>

                  <div style="padding-top:4px;">
                    <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:600;font-size:0.88rem;">
                      <input type="checkbox" id="cfgPickupOnly" ${u.pickupOnly?"checked":""} />
                      <span>${this.t("fieldPickupOnly")}</span>
                    </label>
                  </div>
                </div>
              </details>

              <!-- 4. Tax -->
              <details class="economy-accordion" id="ecoAccordionTax">
                <summary class="economy-accordion__summary">
                  <div class="economy-accordion__header-row">
                    <h5 class="economy-accordion__title">
                      <span>🧾</span> <span>${this.t("economyTax")}</span>
                    </h5>
                    <span class="economy-accordion__chevron">▼</span>
                  </div>
                  <span class="economy-accordion__subtext" id="ecoTaxSummary">Loading...</span>
                </summary>
                <div class="economy-accordion__body">
                  <div class="form-row">
                    <div class="form-group" style="display:flex;align-items:center;padding-top:20px;">
                      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:600;font-size:0.88rem;">
                        <input type="checkbox" id="cfgTaxEnabled" ${u.taxEnabled?"checked":""} />
                        <span>${this.t("fieldTaxEnabled")}</span>
                      </label>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="cfgTaxRate">${this.t("fieldTaxRate")}</label>
                      <input type="number" id="cfgTaxRate" class="form-input" value="${u.taxRate??0}" min="0" max="30" step="0.1" inputmode="decimal" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label" for="cfgTaxLabel">${this.t("fieldTaxLabel")}</label>
                      <input type="text" id="cfgTaxLabel" class="form-input" value="${(u.taxLabel||"VAT").replace(/"/g,"&quot;")}" maxlength="15" />
                    </div>
                    <div class="form-group" style="display:flex;align-items:center;padding-top:24px;">
                      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:0.88rem;">
                        <input type="checkbox" id="cfgTaxIncluded" ${u.taxIncluded!==!1?"checked":""} />
                        <span>${this.t("fieldTaxIncluded")}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </details>

              <!-- 5. Discounts -->
              <details class="economy-accordion" id="ecoAccordionDiscounts">
                <summary class="economy-accordion__summary">
                  <div class="economy-accordion__header-row">
                    <h5 class="economy-accordion__title">
                      <span>🎟️</span> <span>${this.t("economyDiscounts")}</span>
                    </h5>
                    <span class="economy-accordion__chevron">▼</span>
                  </div>
                  <span class="economy-accordion__subtext" id="ecoDiscountsSummary">Loading...</span>
                </summary>
                <div class="economy-accordion__body">
                  <div class="form-row">
                    <div class="form-group">
                      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                        <label class="form-label" for="cfgPromoCode" style="margin-bottom:0;">${this.t("fieldPromoCode")}</label>
                        <span id="promoValidityBadge" class="promo-pill" style="display:none;"></span>
                      </div>
                      <input type="text" id="cfgPromoCode" class="form-input" value="${(u.promoCode||"").replace(/"/g,"&quot;")}" placeholder="e.g. YUMMY10" maxlength="20" style="text-transform:uppercase;" />
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="cfgPromoType">${this.t("fieldPromoType")}</label>
                      <select id="cfgPromoType" class="form-select">
                        <option value="percent" ${u.promoType==="percent"?"selected":""}>${this.t("promoPercent")}</option>
                        <option value="fixed" ${u.promoType==="fixed"?"selected":""}>${this.t("promoFixed")}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label" for="cfgPromoValue">${this.t("fieldPromoValue")}</label>
                      <input type="number" id="cfgPromoValue" class="form-input" value="${u.promoValue??0}" min="0" step="1" inputmode="decimal" />
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="cfgPromoExpiry">${this.t("fieldPromoExpiry")}</label>
                      <input type="date" id="cfgPromoExpiry" class="form-input" value="${u.promoExpiry||""}" />
                    </div>
                  </div>
                </div>
              </details>

              <!-- Sticky Save Footer Bar -->
              <div class="economy-sticky-footer">
                <button type="submit" id="btnSaveEconomy" class="btn btn--primary btn-save-economy" disabled aria-label="Save economy settings">${this.t("saveEconomy")}</button>
              </div>
            </form>

            <!-- Live Preview Card Column -->
            <div class="economy-preview-container" id="economyLivePreviewContainer" role="region" aria-label="Live preview">
              <div class="economy-preview-sticky is-collapsed" id="economyPreviewStickyCard">
                <div class="economy-preview-heading" onclick="app.toggleMobilePreviewExpand()" role="button" tabindex="0" aria-label="Toggle preview breakdown">
                  <div style="display:flex;align-items:center;gap:8px;">
                    <span>⚡</span> <span>${this.t("economyPreview")}</span>
                  </div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <span id="mobilePreviewSummaryText" style="font-size:0.95rem;font-weight:700;color:var(--berry);"></span>
                    <span class="economy-preview-chevron" id="previewChevron">▲</span>
                  </div>
                </div>
                <p class="economy-preview-sample-note" style="font-size:0.8rem;color:var(--muted);margin:0 0 14px 0;">${this.t("economyPreviewSample")}</p>
                <div id="economyLivePreviewCard" class="economy-preview-box"></div>
              </div>
            </div>
          </div>
        `,this.updateEconomyPreview();break;case"users":this.renderUsersTab(e);break;case"data":if(!s)return;const f={config:this.config,products:this.products,users:this.users};e.innerHTML=`
          <h4 style="font-family:var(--font-serif);margin-bottom:16px;">Backup, Import & Factory Reset</h4>
          <div class="form-group">
            <label class="form-label">Export / Import Shop State (JSON)</label>
            <textarea id="dataJsonBox" class="form-textarea" style="font-family:monospace;font-size:0.8rem;min-height:160px;">${JSON.stringify(f,null,2)}</textarea>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px;">
            <button type="button" class="btn btn--primary" onclick="app.importJsonData()">Import JSON Backup</button>
            <button type="button" class="btn btn--ghost" onclick="app.copyJsonData()">Copy JSON to Clipboard</button>
          </div>
          <div style="border-top:1px solid var(--line);padding-top:20px;margin-bottom:20px;">
            <h5 style="font-family:var(--font-serif);font-size:1rem;margin-bottom:8px;">Developer Flags</h5>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-weight:600;font-size:0.88rem;">
              <input type="checkbox" id="cfgWatermark" ${this.config.showWatermark!==!1?"checked":""} onchange="app.toggleWatermarkSetting(this.checked)" />
              <span>Show watermark pill ("developed with respect and love by null-tech")</span>
            </label>
          </div>
          <div style="border-top:1px solid var(--line);padding-top:20px;">
            <h5 style="color:#b91c1c;font-weight:700;margin-bottom:6px;">Danger Zone: Factory Reset</h5>
            <p style="font-size:0.85rem;color:var(--muted);margin-bottom:12px;">Clears all custom products, configs, and user accounts. Restores default factory state.</p>
            <button type="button" class="btn btn--ghost" style="color:#b91c1c;border-color:#fca5a5;" onclick="app.factoryReset()">Reset All Data to Default</button>
          </div>
        `;break}},renderThemeTab(n){if(!n)return;const e=this.config.theme?this.config.theme.presetId:"berry",t=this.config.theme&&this.config.theme.mode||"light";let s="";Object.keys(Ke).forEach(r=>{const i=Ke[r],o=i.tokens;s+=`
        <div class="theme-preset-card ${r===e?"active":""}" onclick="app.previewTheme('${r}')">
          <div style="font-weight:600;font-size:0.95rem;color:var(--ink);">${i.label[this.lang]}</div>
          <div class="theme-swatches">
            <div class="theme-swatch" style="background:${o.cream}"></div>
            <div class="theme-swatch" style="background:${o.berry}"></div>
            <div class="theme-swatch" style="background:${o.ink}"></div>
            <div class="theme-swatch" style="background:${o.gold}"></div>
            <div class="theme-swatch" style="background:${o.blush}"></div>
          </div>
        </div>
      `}),n.innerHTML=`
      <div class="theme-panel-layout">
        <div>
          <div style="margin-bottom: 20px;">
            <div style="font-size:0.85rem;font-weight:600;color:var(--muted);margin-bottom:8px;">Appearance Mode</div>
            <div class="switch-group" style="display:inline-flex;">
              <button type="button" class="switch-btn ${t!=="dark"?"is-active":""}" onclick="app.setThemeMode('light')">☀️ Light</button>
              <button type="button" class="switch-btn ${t==="dark"?"is-active":""}" onclick="app.setThemeMode('dark')">🌙 Dark</button>
            </div>
          </div>

          <h4 style="font-family:var(--font-serif);margin-bottom:16px;">${this.t("themePresetTitle")}</h4>
          <div class="theme-presets" style="margin-bottom:24px;">
            ${s}
          </div>
          <div style="margin-bottom: 24px;">
            <label style="display:flex;align-items:center;gap:10px;font-size:0.9rem;font-weight:600;color:var(--cocoa);cursor:pointer;">
              <input type="checkbox" id="cfgAutoDark" onchange="app.toggleAutoDark(this.checked)" ${this.config.theme&&this.config.theme.autoDark?"checked":""} style="width:18px;height:18px;">
              ${this.t("themeAutoDark")}
            </label>
          </div>
          <button type="button" class="btn btn--primary" onclick="app.saveTheme()">
            ${this.t("themeSave")}
          </button>
        </div>
        <div>
          <h4 style="font-family:var(--font-serif);margin-bottom:16px;">${this.t("themePreviewTitle")}</h4>
          <div id="themePreviewMount">
          <div id="themePreviewCard" class="theme-preview-card" style="margin-bottom:16px;">
            <h3>${this.t("themePreviewHeading")}</h3>
            <p>${this.t("themePreviewBody")}</p>
            <div class="theme-preview-buttons">
              <div class="btn btn--primary" onclick="app.showToast(this.innerText, 'info')" style="font-size:0.85rem;padding:6px 12px;cursor:pointer;">${this.t("themePreviewPrimary")}</div>
              <div class="btn btn--ghost" onclick="app.showToast(this.innerText, 'info')" style="font-size:0.85rem;padding:6px 12px;cursor:pointer;">${this.t("themePreviewGhost")}</div>
            </div>
            <div class="theme-preview-gold">${this.t("themePreviewGold")}</div>
            <div class="theme-preview-price">${this.t("themePreviewPrice")}</div>
          </div>
          </div>
        </div>
      </div>
    `,this.addPhonePreviewToggle(document.getElementById("themePreviewMount"),{frameId:"themePreviewCard",mountId:"themePreviewMount"})},previewTheme(n){if(!Ke[n])return;this.applyTheme(Ke[n].tokens);const e=document.querySelectorAll(".theme-preset-card");e.forEach(s=>s.classList.remove("active"));const t=Ke[n].label[this.lang];e.forEach(s=>{s.querySelector("div").textContent===t&&s.classList.add("active")}),this._previewThemeId=n},saveTheme(){const n=this._previewThemeId||(this.config.theme?this.config.theme.presetId:"berry");if(!Ke[n])return;const e=document.getElementById("cfgAutoDark")?document.getElementById("cfgAutoDark").checked:this.config.theme?this.config.theme.autoDark:!1,t=this.config.theme&&this.config.theme.mode||"light";this.config.theme={presetId:n,tokens:Ke[n].tokens,mode:t,autoDark:e},this.saveConfig(),this.showToast(this.t("themeApplied"),"success"),this._previewThemeId=null,this.renderThemeTab(document.getElementById("panelContent"))},toggleAutoDark(n){this.config.theme&&(this.config.theme.autoDark=n,this.saveConfig(),this.applyTheme(this.config.theme.tokens),this.showToast(this.t("toastSaved"),"success"))},revertTheme(){if(this._previewThemeId){document.body.style.transition="background-color 0.3s ease, color 0.3s ease";const n=this.config.theme?this.config.theme.presetId:"berry";Ke[n]&&this.applyTheme(Ke[n].tokens),this._previewThemeId=null,setTimeout(()=>{document.body.style.transition=""},300),this.showToast(this.t("themeReverted"))}},renderUsersTab(n){if(!n)return;const e=this.session&&this.session.user?this.session.user:null;if(!e||e.role!=="admin"&&e.role!=="dev"){n.innerHTML=`<p style="color:var(--muted);">${this.t("usersNoAccess")}</p>`;return}const t=(this.userSearchQuery||"").toLowerCase().trim();let s=(this.users||[]).slice();t&&(s=s.filter(a=>a.name&&a.name.toLowerCase().includes(t)||a.username&&a.username.toLowerCase().includes(t)||a.phone&&a.phone.includes(t)));const r={dev:0,admin:1,staff:2,customer:3};s.sort((a,c)=>(r[a.role]??9)-(r[c.role]??9)||(a.name||"").localeCompare(c.name||""));const i=a=>!(e.id===a.id||e.username===a.username||a.role==="dev"&&e.role!=="dev"||a.role==="admin"&&e.role!=="dev"),o=s.length===0?`<tr><td colspan="5" style="text-align:center;padding:28px;color:var(--muted);">${this.t("usersEmpty")}</td></tr>`:s.map(a=>{const c=e.id===a.id||e.username===a.username,u=a.role==="dev"?"badge--dev":a.role==="admin"?"badge--admin":a.role==="staff"?"badge--staff":"badge--customer",h=Array.isArray(a.permissions)&&a.permissions.length?a.permissions.map(f=>this.t("perm_"+f)||f).join(", "):"—";return`
            <tr>
              <td><span class="badge ${u}">${this.t("role_"+a.role)||String(a.role).toUpperCase()}</span></td>
              <td><strong>${this.esc(a.name||"—")}</strong></td>
              <td dir="ltr">${this.esc(a.username||a.phone||"—")}</td>
              <td style="color:var(--muted);">${a.password?"••••••••":this.t("usersNoPassword")}</td>
              <td style="max-width:180px;">${a.role==="staff"?`<span class="user-perms">${this.esc(h)}</span>`:'<span class="user-perms">—</span>'}</td>
              <td style="text-align:right;white-space:nowrap;">
                ${a.role==="staff"||a.role!=="dev"&&i(a)?`
                  <button type="button" class="btn btn--secondary btn--xs" onclick="app.editUser('${a.id}')">${this.t("usersEdit")}</button>
                `:""}
                ${a.password&&i(a)?`
                  <button type="button" class="btn btn--secondary btn--xs" onclick="app.resetUserPassword('${a.id}')">${this.t("usersResetPw")}</button>
                `:""}
                ${i(a)?`
                  <button type="button" class="btn btn--ghost btn--xs user-delete-btn" onclick="app.deleteUser('${a.id}')">${this.t("usersDelete")}</button>
                `:c?`<span class="user-self-hint">${this.t("usersYou")}</span>`:""}
              </td>
            </tr>
          `}).join("");n.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
        <h4 style="font-family:var(--font-serif);margin:0;">${this.t("usersTitle")} (${s.length})</h4>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
          <input
            type="text"
            class="form-input"
            style="padding:6px 12px;font-size:0.85rem;width:190px;"
            placeholder="${this.t("usersSearch")}"
            value="${this.esc(this.userSearchQuery||"")}"
            oninput="app.handleUserSearch(this.value)"
          />
          <button type="button" class="btn btn--primary btn--sm" onclick="app.showAddStaffModal()">+ ${this.t("usersAddStaff")}</button>
        </div>
      </div>
      <p style="font-size:0.8rem;color:var(--muted);margin:0 0 12px 0;">${this.t("usersHint")}</p>
      <div class="panel-table-wrap">
        <table class="panel-table">
          <thead>
            <tr>
              <th>${this.t("usersColRole")}</th>
              <th>${this.t("usersColName")}</th>
              <th>${this.t("usersColLogin")}</th>
              <th>${this.t("usersColPassword")}</th>
              <th>${this.t("usersColPerms")}</th>
              <th style="text-align:right;">${this.t("usersColActions")}</th>
            </tr>
          </thead>
          <tbody>${o}</tbody>
        </table>
      </div>
    `},handleUserSearch(n){this.userSearchQuery=n;const e=document.getElementById("panelContent");if(e&&this.activePanelTab==="users"){this.renderUsersTab(e);const t=e.querySelector("input.form-input");if(t){t.focus();const s=t.value.length;t.setSelectionRange(s,s)}}},editUser(n){const e=(this.users||[]).find(i=>i.id===n);if(!e)return;const t=this.session&&this.session.user?this.session.user:null;if(t&&t.role==="admin"&&(e.role==="dev"||e.role==="admin"))return;const s=document.getElementById("editUserModal");if(!s)return;document.getElementById("editUserId").value=e.id,document.getElementById("editUserName").value=e.name||"",document.getElementById("editUserLogin").value=e.username||e.phone||"",document.getElementById("editUserPermsGroup").style.display=e.role==="staff"?"block":"none",s.querySelectorAll('input[name="editUserPerms"]').forEach(i=>{i.checked=Array.isArray(e.permissions)&&e.permissions.includes(i.value)}),s.classList.add("is-open")},submitEditUser(n){n.preventDefault();const e=document.getElementById("editUserId").value,t=(this.users||[]).find(o=>o.id===e);if(!t)return;const s=this.session&&this.session.user?this.session.user:null;if(s&&s.role==="admin"&&(t.role==="dev"||t.role==="admin"))return;t.name=document.getElementById("editUserName").value.trim()||t.name;const r=document.getElementById("editUserLogin").value.trim();if(r&&(t.role==="customer"?t.phone=r:t.username=r),t.role==="staff"){const o=[];document.querySelectorAll('#editUserModal input[name="editUserPerms"]:checked').forEach(a=>o.push(a.value)),t.permissions=o}this.saveUsers(),se&&ut(xe(se,"users",userId)).catch(o=>Ae(o,be.DELETE,"users")),document.getElementById("editUserModal").classList.remove("is-open");const i=document.getElementById("panelContent");i&&this.activePanelTab==="users"&&this.renderUsersTab(i),this.showToast(this.t("toastSaved"),"success")},resetUserPassword(n){const e=(this.users||[]).find(o=>o.id===n);if(!e||!e.password)return;const t=this.session&&this.session.user?this.session.user:null;if(t&&t.role==="admin"&&(e.role==="dev"||e.role==="admin"))return;const s=prompt(this.t("usersNewPwPrompt").replace("{name}",e.name||e.username||""),"");if(s===null)return;const r=s.trim();if(r.length<4){this.showToast(this.t("staffPwTooShort")||"Password must be at least 4 characters.","error");return}e.password=r,this.saveUsers(),se&&ut(xe(se,"users",n)).catch(o=>Ae(o,be.DELETE,"users"));const i=document.getElementById("panelContent");i&&this.activePanelTab==="users"&&this.renderUsersTab(i),this.showToast(this.t("toastSaved"),"success")},deleteUser(n){const e=this.session&&this.session.user?this.session.user:null,t=(this.users||[]).find(i=>i.id===n);if(!t)return;if(e&&(e.id===t.id||e.username===t.username)){this.showToast(this.t("usersCannotDeleteSelf"),"error");return}if(e&&e.role==="admin"&&(t.role==="dev"||t.role==="admin")){this.showToast(this.t("usersCannotDeleteElevated"),"error");return}const s=t.name||t.username||t.id;if(!confirm(this.t("usersConfirmDelete").replace("{name}",s)))return;this.users=this.users.filter(i=>i.id!==n),this.saveUsers(),se&&ut(xe(se,"users",n)).catch(i=>Ae(i,be.DELETE,"users"));const r=document.getElementById("panelContent");r&&this.activePanelTab==="users"&&this.renderUsersTab(r),this.showToast(this.t("toastDeleted"),"success")},addPhonePreviewToggle(n,e){if(!n)return;const t=document.createElement("div");t.className="phone-preview-bar",t.setAttribute("role","group"),t.setAttribute("aria-label",this.t("phonePreviewLabel")),t.innerHTML=`
      <button type="button" class="phone-preview-btn is-active" data-phone-mode="desktop"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg> ${this.t("phonePreviewDesktop")}</button>
      <button type="button" class="phone-preview-btn" data-phone-mode="phone"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg> ${this.t("phonePreviewPhone")}</button>
    `,n.parentNode.insertBefore(t,n),t.addEventListener("click",s=>{const r=s.target.closest(".phone-preview-btn");r&&this.setPhonePreviewMode(t,r.dataset.phoneMode,e)})},setPhonePreviewMode(n,e,t){if(!n)return;n.querySelectorAll(".phone-preview-btn").forEach(i=>i.classList.toggle("is-active",i.dataset.phoneMode===e));const s=document.getElementById(t.frameId),r=document.getElementById(t.mountId);if(!(!s||!r))if(e==="phone"){if(!s.classList.contains("phone-frame")){const i=document.createElement("div");i.className="phone-frame__notch",r.insertBefore(i,s),s.classList.add("phone-frame")}}else{const i=r.querySelector(":scope > .phone-frame__notch");i&&i.remove(),s.classList.remove("phone-frame")}},renderCustomersTab(n){if(!n)return;const e=new Map;(this.users||[]).filter(o=>o.role==="customer").forEach(o=>{e.set(o.id,{id:o.id,name:o.name||o.username||"Customer",phone:o.phone||o.mobile||"",createdAt:o.createdAt||Date.now(),orders:[]})}),(this.orders||[]).forEach(o=>{const a=o.customerId;e.has(a)?e.get(a).orders.push(o):e.set(a,{id:a,name:o.customerName||"Customer",phone:o.customerMobile||"",createdAt:o.createdAt||Date.now(),orders:[o]})});let t=Array.from(e.values());const s=(this.customerSearchQuery||"").toLowerCase().trim();s&&(t=t.filter(o=>o.name&&o.name.toLowerCase().includes(s)||o.phone&&o.phone.includes(s)));const r=this.customerSortOption||"lastOrder";r==="name"?t.sort((o,a)=>(o.name||"").localeCompare(a.name||"")):r==="lastOrder"?t.sort((o,a)=>{const c=o.orders.length>0?Math.max(...o.orders.map(h=>h.createdAt||0)):0;return(a.orders.length>0?Math.max(...a.orders.map(h=>h.createdAt||0)):0)-c}):r==="totalSpent"?t.sort((o,a)=>{const c=o.orders.reduce((h,f)=>h+(f.economy&&f.economy.total||0),0);return a.orders.reduce((h,f)=>h+(f.economy&&f.economy.total||0),0)-c}):r==="orderCount"&&t.sort((o,a)=>a.orders.length-o.orders.length);const i=t.length===0?`<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--text-muted);">${this.t("customersEmpty")}</td></tr>`:t.map(o=>{const a=o.orders.reduce((h,f)=>h+(f.economy&&f.economy.total||0),0),c=o.orders.length,u=o.orders.length>0?new Date(Math.max(...o.orders.map(h=>h.createdAt||0))).toLocaleDateString(this.lang==="ku"?"ku":"en-US",{month:"short",day:"numeric",year:"numeric"}):"—";return`
            <tr>
              <td><strong>${o.name}</strong></td>
              <td>${o.phone||"—"}</td>
              <td><span class="badge badge--customer">${c}</span></td>
              <td style="font-weight:600;color:var(--berry);">${this.formatPrice(a)}</td>
              <td>${u}</td>
              <td>
                <button type="button" class="btn btn--xs btn--secondary" onclick="app.openCustomerDrawer('${o.id}')">
                  ${this.t("myOrdersDetails")}
                </button>
              </td>
            </tr>
          `}).join("");n.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
        <h4 style="font-family:var(--font-serif);margin:0;">${this.t("tabCustomers")} (${t.length})</h4>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
          <input 
            type="text" 
            class="form-input" 
            style="padding:6px 12px;font-size:0.85rem;width:200px;" 
            placeholder="${this.t("customersSearch")}" 
            value="${this.customerSearchQuery||""}"
            oninput="app.handleCustomerSearch(this.value)"
          />
          <select 
            class="form-select" 
            style="padding:6px 12px;font-size:0.85rem;"
            onchange="app.handleCustomerSort(this.value)"
          >
            <option value="lastOrder" ${r==="lastOrder"?"selected":""}>${this.t("customersSortLastOrder")}</option>
            <option value="totalSpent" ${r==="totalSpent"?"selected":""}>${this.t("customersSortTotalSpent")}</option>
            <option value="orderCount" ${r==="orderCount"?"selected":""}>${this.t("customersSortOrderCount")}</option>
            <option value="name" ${r==="name"?"selected":""}>${this.t("customersSortName")}</option>
          </select>
        </div>
      </div>

      <div class="panel-table-wrap">
        <table class="panel-table">
          <thead>
            <tr>
              <th>${this.t("customersSortName")}</th>
              <th>Phone</th>
              <th>${this.t("customerOrders")}</th>
              <th>${this.t("customerTotalSpent")}</th>
              <th>${this.t("customerLastOrder")}</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${i}
          </tbody>
        </table>
      </div>
    `},handleCustomerSearch(n){this.customerSearchQuery=n;const e=document.getElementById("panelContent");e&&this.activePanelTab==="customers"&&this.renderCustomersTab(e)},handleCustomerSort(n){this.customerSortOption=n;const e=document.getElementById("panelContent");e&&this.activePanelTab==="customers"&&this.renderCustomersTab(e)},openCustomerDrawer(n){this.selectedStaffCustomerId=n;let e=document.getElementById("staffCustomerDrawer"),t=document.getElementById("staffCustomerBackdrop");e||(e=document.createElement("div"),e.id="staffCustomerDrawer",e.className="customer-drawer",document.body.appendChild(e)),t||(t=document.createElement("div"),t.id="staffCustomerBackdrop",t.className="customer-drawer-backdrop",t.onclick=()=>this.closeCustomerDrawer(),document.body.appendChild(t)),this.renderCustomerDrawerContent(),e.classList.add("is-open"),t.classList.add("is-open")},closeCustomerDrawer(){this.selectedStaffCustomerId=null;const n=document.getElementById("staffCustomerDrawer"),e=document.getElementById("staffCustomerBackdrop");n&&n.classList.remove("is-open"),e&&e.classList.remove("is-open")},updateOrderStatus(n,e){const t=this.orders.find(s=>s.id===n);if(t){t.status=e,this.saveOrders(),this.renderCustomerDrawerContent();const s=document.getElementById("panelContent");s&&this.activePanelTab==="customers"&&this.renderCustomersTab(s),this.showToast(this.t("orderStatusUpdated").replace("{status}",e),"success")}},saveCustomerPrivateNote(n,e){this.customerNotes[n]=e,this.saveCustomerNotes(),this.showToast(this.t("noteSaved"),"success")},renderCustomerDrawerContent(){const n=document.getElementById("staffCustomerDrawer");if(!n||!this.selectedStaffCustomerId)return;const e=this.selectedStaffCustomerId,t=(this.users||[]).find(u=>u.id===e),s=(this.orders||[]).filter(u=>u.customerId===e||t&&t.phone&&u.customerMobile===t.phone),r=t&&t.name||s.length>0&&s[0].customerName||"Customer",i=t&&t.phone||s.length>0&&s[0].customerMobile||"—",o=this.customerNotes[e]||"",a=s.reduce((u,h)=>u+(h.economy&&h.economy.total||0),0),c=s.length===0?`<div style="padding:20px;text-align:center;color:var(--text-muted);">${this.t("customerNoOrders")}</div>`:s.map(u=>{const h=new Date(u.createdAt).toLocaleDateString(this.lang==="ku"?"ku":"en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),f=(u.items||[]).map(g=>`${g.qty}× ${g.nameSnapshot} ($${((g.usdSnapshot||0)*g.qty).toFixed(2)})`).join("<br/>"),p=this.formatPrice(u.economy&&u.economy.total||0);return`
            <div style="background:var(--bg-glass);border:1px solid var(--gold-border);border-radius:10px;padding:12px;margin-bottom:12px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-weight:700;font-size:0.85rem;">#${u.id.slice(-6).toUpperCase()}</span>
                <span style="font-size:0.75rem;color:var(--text-muted);">${h}</span>
              </div>
              <div style="font-size:0.85rem;line-height:1.5;margin-bottom:8px;">${f}</div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding-top:8px;border-top:1px dashed var(--gold-border);">
                <div style="font-weight:700;color:var(--berry);">${p}</div>
                <div style="display:flex;align-items:center;gap:6px;">
                  <label style="font-size:0.75rem;color:var(--text-muted);">${this.t("customerChangeStatus")}:</label>
                  <select class="form-select" style="padding:2px 8px;font-size:0.75rem;width:auto;" onchange="app.updateOrderStatus('${u.id}', this.value)">
                    <option value="pending" ${u.status==="pending"?"selected":""}>Pending</option>
                    <option value="baking" ${u.status==="baking"?"selected":""}>Baking</option>
                    <option value="delivered" ${u.status==="delivered"?"selected":""}>Delivered</option>
                    <option value="cancelled" ${u.status==="cancelled"?"selected":""}>Cancelled</option>
                  </select>
                </div>
              </div>
            </div>
          `}).join("");n.innerHTML=`
      <div class="customer-drawer-header">
        <div>
          <h3 style="margin:0;font-family:var(--font-serif);">${r}</h3>
          <p style="margin:4px 0 0;font-size:0.82rem;color:var(--text-muted);">${i} • ${s.length} orders • ${this.formatPrice(a)}</p>
        </div>
        <button type="button" class="btn btn--ghost btn--sm" onclick="app.closeCustomerDrawer()">✕</button>
      </div>
      <div class="customer-drawer-body">
        <div style="margin-bottom:20px;">
          <label class="form-label" style="font-weight:600;margin-bottom:6px;display:block;">${this.t("customerPrivateNote")}</label>
          <textarea 
            class="form-textarea" 
            rows="3" 
            placeholder="E.g. Prefers less sugar, regular customer..." 
            onchange="app.saveCustomerPrivateNote('${e}', this.value)"
          >${o}</textarea>
        </div>

        <h4 style="font-family:var(--font-serif);margin:0 0 12px;">${this.t("customerOrders")} (${s.length})</h4>
        ${c}
      </div>
    `},initLogoDraft(){const n=this.config||mn;let e=0;if(n.logoImage){const t=n.logoImage.length-(n.logoImage.indexOf(",")+1);e=Math.round(t*.75)}this.draftLogo={mode:n.logoMode||(n.logoImage?"image":n.logoUrl?"url":"emoji"),emoji:n.logoEmoji||"🎂",image:n.logoImage||"",url:n.logoUrl||n.logoImageUrl||"",imageBytes:e,isSvg:n.logoImage?n.logoImage.includes("image/svg"):!1,urlStatus:null,isReadyToSave:!1,fallback:!1}},getLogoEditorHtml(){this.draftLogo||this.initLogoDraft();const n=this.draftLogo,e=n.mode;let t="";const s=e==="image"&&!!(n.image&&n.image.trim()),r=e==="url"&&!!(n.url&&n.url.trim());n.fallback||e==="emoji"||!s&&!r?t=`<span class="logo-preview-emoji">${n.emoji||"🎂"}</span>`:e==="image"&&s?t=`<img src="${n.image}" class="logo-preview-img" alt="Logo preview" onerror="app.handleLogoPreviewError()" onload="app.handleLogoPreviewSuccess()" />`:e==="url"&&r&&(t=`<img src="${n.url}" class="logo-preview-img" alt="Logo preview" crossorigin="anonymous" onerror="app.handleLogoPreviewError()" onload="app.handleLogoPreviewSuccess()" />`);let i="";if(e==="emoji")i=`${this.t("logoModeEmoji")} · ${n.emoji||"🎂"}`;else if(e==="image"){const c=n.imageBytes>0?n.imageBytes>1024?Math.round(n.imageBytes/1024)+" KB":n.imageBytes+" B":"Active";i=`${this.t("logoModeUpload")} · ${c}`}else e==="url"&&(i=this.t("logoUrlLabel"));let o="";n.isReadyToSave?o=`<span class="logo-chip logo-chip--ready">✓ ${this.t("logoUploadReady")}</span>`:e==="url"&&n.urlStatus==="valid"?o=`<span class="logo-chip logo-chip--valid">✓ ${this.t("logoUrlValid")}</span>`:e==="url"&&n.urlStatus==="invalid"&&(o=`<span class="logo-chip logo-chip--error">✗ ${this.t("logoUrlInvalid")}</span>`);const a=e==="image"&&!!n.image||e==="url"&&!!n.url;return`
      <div class="logo-card">
        <div class="logo-card__header">
          <h5 class="logo-card__title">
            <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><rect x="7" y="7" width="5" height="5" rx="1"/><rect x="12" y="12" width="5" height="5" rx="1"/></svg></span> <span>${this.t("logoSection")}</span>
          </h5>
          <span style="font-size:0.75rem;color:var(--muted);">${this.t("logoFaviconNote")}</span>
        </div>
        <div class="logo-card__body">
          <!-- Preview Column -->
          <div class="logo-preview-col">
            <div class="logo-preview-box ${n.fallback?"is-fallback":""}" id="logoPreviewBox">
              ${t}
            </div>
            <div class="logo-preview-meta" id="logoPreviewMeta">${i}</div>
            ${o?`<div id="logoStatusChipArea">${o}</div>`:'<div id="logoStatusChipArea"></div>'}
            ${n.fallback?`<div class="logo-warning-note">${this.t("logoFallbackWarning")}</div>`:""}
            ${a?`
              <button type="button" class="btn btn--ghost btn--sm" style="color:#b91c1c;border-color:#fca5a5;padding:4px 10px;font-size:0.78rem;margin-top:4px;" onclick="app.removeLogo()">
                ${this.t("logoRemoveBtn")}
              </button>
            `:""}
          </div>

          <!-- Controls Column -->
          <div class="logo-controls-col">
            <!-- Mode Switcher -->
            <div class="logo-mode-switcher" role="radiogroup" aria-label="Logo Mode">
              <button type="button" class="logo-mode-btn ${e==="emoji"?"is-active":""}" onclick="app.setLogoMode('emoji')">
                ${this.t("logoModeEmoji")}
              </button>
              <button type="button" class="logo-mode-btn ${e==="image"?"is-active":""}" onclick="app.setLogoMode('image')">
                ${this.t("logoModeUpload")}
              </button>
              <button type="button" class="logo-mode-btn ${e==="url"?"is-active":""}" onclick="app.setLogoMode('url')">
                ${this.t("logoModeUrl")}
              </button>
            </div>

            <!-- Mode 1: Emoji -->
            <div id="logoModeEmojiArea" style="display:${e==="emoji"?"block":"none"};">
              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label" for="logoEmojiInput">${this.t("logoEmojiLabel")}</label>
                <input type="text" id="logoEmojiInput" class="form-input" maxlength="4" value="${(n.emoji||"🎂").replace(/"/g,"&quot;")}" oninput="app.handleLogoEmojiInput(this.value)" style="max-width:140px;font-size:1.3rem;text-align:center;" />
                <p style="font-size:0.78rem;color:var(--muted);margin:4px 0 8px 0;">${this.t("logoEmojiHint")}</p>
                <div class="quick-pick-emojis">
                  ${["🎂","🍰","🧁","🍩","🍪","🥐","🍫","☕"].map(c=>`
                    <button type="button" class="quick-pick-btn" onclick="app.selectQuickEmoji('${c}')" title="${c}" aria-label="Select ${c}">${c}</button>
                  `).join("")}
                </div>
              </div>
            </div>

            <!-- Mode 2: Upload -->
            <div id="logoModeUploadArea" style="display:${e==="image"?"block":"none"};">
              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label">${this.t("logoModeUpload")}</label>
                <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
                  <label class="upload-btn" for="logoFileInput" style="cursor:pointer;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <span>${n.image?this.t("logoReplaceBtn"):this.t("logoUploadBtn")}</span>
                    <input type="file" id="logoFileInput" accept="image/png,image/jpeg,image/webp,image/svg+xml" onchange="app.handleLogoFileUpload(event)" style="display:none;" />
                  </label>
                </div>
                <p style="font-size:0.78rem;color:var(--muted);margin-top:8px;">${this.t("logoUploadHint")}</p>
              </div>
            </div>

            <!-- Mode 3: URL -->
            <div id="logoModeUrlArea" style="display:${e==="url"?"block":"none"};">
              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label" for="logoUrlInput">${this.t("logoUrlLabel")}</label>
                <input type="url" id="logoUrlInput" class="form-input" dir="ltr" placeholder="https://..." value="${(n.url||"").replace(/"/g,"&quot;")}" oninput="app.handleLogoUrlInput(this.value)" />
                <p style="font-size:0.78rem;color:var(--muted);margin-top:4px;">${this.t("logoUrlHint")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `},updateLogoCardUI(){const n=document.getElementById("logoEditorContainer");n&&(n.innerHTML=this.getLogoEditorHtml())},setLogoMode(n){this.draftLogo||this.initLogoDraft(),this.draftLogo.mode=n,this.draftLogo.fallback=!1,this.updateLogoCardUI()},handleLogoEmojiInput(n){this.draftLogo||this.initLogoDraft(),this.draftLogo.emoji=n.trim()||"🎂",this.draftLogo.fallback=!1,this.updateLogoPreviewBox()},selectQuickEmoji(n){this.draftLogo||this.initLogoDraft(),this.draftLogo.emoji=n,this.draftLogo.fallback=!1;const e=document.getElementById("logoEmojiInput");e&&(e.value=n),this.updateLogoPreviewBox()},updateLogoPreviewBox(){const n=document.getElementById("logoPreviewBox"),e=document.getElementById("logoPreviewMeta"),t=this.draftLogo;!n||!t||t.mode==="emoji"&&(n.className="logo-preview-box",n.innerHTML=`<span class="logo-preview-emoji">${t.emoji||"🎂"}</span>`,e&&(e.textContent=`${this.t("logoModeEmoji")} · ${t.emoji||"🎂"}`))},async handleLogoFileUpload(n){const e=n.target.files&&n.target.files[0];if(e)try{const t=await _I(e);this.draftLogo||this.initLogoDraft(),this.draftLogo.image=t.dataUrl,this.draftLogo.imageBytes=t.approxBytes,this.draftLogo.isSvg=t.isSvg,this.draftLogo.mode="image",this.draftLogo.isReadyToSave=!0,this.draftLogo.fallback=!1,this.updateLogoCardUI(),this.showToast(this.t("toastPhotoReady")||"Logo ready to save","info")}catch(t){console.error("Logo upload error:",t),t.message==="FILE_TOO_LARGE"||t.message==="OUTPUT_TOO_LARGE"?this.showToast(this.t("logoUploadTooLarge"),"error"):this.showToast(this.t("logoUploadError"),"error")}finally{n.target.value=""}},handleLogoUrlInput(n){this.draftLogo||this.initLogoDraft();const e=n.trim();if(e.toLowerCase().startsWith("javascript:")||e.toLowerCase().startsWith("data:")){this.showToast(this.t("invalidUrl"),"error"),this.draftLogo.urlStatus="invalid",this.draftLogo.fallback=!0,this.updateLogoCardUI();return}this.draftLogo.url=e,this.draftLogo.urlStatus=null,this.draftLogo.fallback=!1,this._logoUrlDebounce&&clearTimeout(this._logoUrlDebounce),this._logoUrlDebounce=setTimeout(()=>{if(!this.draftLogo.url){this.draftLogo.urlStatus=null,this.draftLogo.fallback=!1,this.updateLogoCardUI();return}const t=new Image;let s=!1;const r=setTimeout(()=>{s||(s=!0,this.draftLogo.urlStatus="invalid",this.draftLogo.fallback=!0,this.updateLogoCardUI())},1500);t.onload=()=>{s||(s=!0,clearTimeout(r),this.draftLogo.urlStatus="valid",this.draftLogo.fallback=!1,this.updateLogoCardUI())},t.onerror=()=>{s||(s=!0,clearTimeout(r),this.draftLogo.urlStatus="invalid",this.draftLogo.fallback=!0,this.updateLogoCardUI())},t.crossOrigin="anonymous",t.src=this.draftLogo.url},300)},handleLogoPreviewError(){this.draftLogo&&(this.draftLogo.fallback=!0,this.updateLogoCardUI())},handleLogoPreviewSuccess(){this.draftLogo&&this.draftLogo.fallback&&(this.draftLogo.fallback=!1,this.updateLogoCardUI())},removeLogo(){this.draftLogo||this.initLogoDraft(),this.draftLogo.image="",this.draftLogo.url="",this.draftLogo.imageBytes=0,this.draftLogo.mode="emoji",this.draftLogo.fallback=!1,this.draftLogo.urlStatus=null,this.draftLogo.isReadyToSave=!1,this.updateLogoCardUI(),this.showToast(this.t("logoRemoved"),"info")},saveBrandSettings(n){if(n&&n.preventDefault(),this.config.shopName.en=document.getElementById("cfgShopNameEn").value.trim(),this.config.shopName.ku=document.getElementById("cfgShopNameKu").value.trim(),this.config.tagline.en=document.getElementById("cfgTaglineEn").value.trim(),this.config.tagline.ku=document.getElementById("cfgTaglineKu").value.trim(),this.config.announcement.en=document.getElementById("cfgAnnounceEn").value.trim(),this.config.announcement.ku=document.getElementById("cfgAnnounceKu").value.trim(),this.draftLogo){const e=this.draftLogo.emoji&&this.draftLogo.emoji.trim()||"🎂";this.config.logoMode=this.draftLogo.mode||"emoji",this.config.logoEmoji=e,this.config.logoImage=this.draftLogo.image||"",this.config.logoUrl=this.draftLogo.url||"",this.config.logoImageUrl=this.draftLogo.mode==="url"?this.draftLogo.url:this.draftLogo.mode==="image"?this.draftLogo.image:"",this.draftLogo.isReadyToSave=!1}this.saveConfig(),this.renderBranding(),this.showToast(this.t("toastSaved"),"success"),this.updateLogoCardUI()},saveAboutSettings(n){n.preventDefault(),this.config.aboutUs.en=document.getElementById("cfgAboutEn").value.trim(),this.config.aboutUs.ku=document.getElementById("cfgAboutKu").value.trim(),this.config.aboutUs.imageUrl=document.getElementById("cfgAboutImage").value.trim(),this.config.aboutUs.eyebrowEn=document.getElementById("cfgAboutEyebrowEn").value.trim(),this.config.aboutUs.eyebrowKu=document.getElementById("cfgAboutEyebrowKu").value.trim(),this.config.aboutUs.titleEn=document.getElementById("cfgAboutTitleEn").value.trim(),this.config.aboutUs.titleKu=document.getElementById("cfgAboutTitleKu").value.trim(),this.saveConfig(),this.renderBranding(),this.showToast(this.t("toastSaved"),"success")},getFaqItemHtml(n,e){return`
      <div class="faq-editor-card" style="padding: 16px; border: 1px solid var(--line); border-radius: var(--radius-card); position: relative; background: var(--cream);">
        <button type="button" class="btn btn--xs btn--ghost" style="position:absolute; top:8px; right:8px; color:var(--berry);" onclick="app.removeFaqItem(${e})">✕ Remove</button>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Question (EN)</label>
            <input type="text" class="form-input faq-q-en" value="${n.q.en}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Question (KU)</label>
            <input type="text" class="form-input faq-q-ku" value="${n.q.ku}" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Answer (EN)</label>
            <textarea class="form-input faq-a-en" required style="resize:vertical;min-height:60px;">${n.a.en}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Answer (KU)</label>
            <textarea class="form-input faq-a-ku" style="resize:vertical;min-height:60px;">${n.a.ku}</textarea>
          </div>
        </div>
      </div>
    `},addFaqItem(){this.config.faq||(this.config.faq=[]),this.config.faq.push({q:{en:"",ku:""},a:{en:"",ku:""}}),this.renderPanelTab("faq")},removeFaqItem(n){this.config.faq&&(this.config.faq.splice(n,1),this.renderPanelTab("faq"))},getReviewItemHtml(n,e){return`
      <div class="faq-editor-card" style="padding: 16px; border: 1px solid var(--line); border-radius: var(--radius-card); position: relative; background: var(--cream);">
        <button type="button" class="btn btn--xs btn--ghost" style="position:absolute; top:8px; right:8px; color:var(--berry);" onclick="app.removeReviewItem(${e})">✕ Remove</button>
        <div class="form-row">
          <div class="form-group" style="flex:0.3">
            <label class="form-label">Initials</label>
            <input type="text" class="form-input review-initials" value="${n.initials}" required maxlength="2" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Name (EN)</label>
            <input type="text" class="form-input review-name-en" value="${n.name.en}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Name (KU)</label>
            <input type="text" class="form-input review-name-ku" value="${n.name.ku}" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Role/Subtitle (EN)</label>
            <input type="text" class="form-input review-role-en" value="${n.role.en}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Role/Subtitle (KU)</label>
            <input type="text" class="form-input review-role-ku" value="${n.role.ku}" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Quote (EN)</label>
            <textarea class="form-input review-quote-en" required style="resize:vertical;min-height:60px;">${n.quote.en}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Quote (KU)</label>
            <textarea class="form-input review-quote-ku" style="resize:vertical;min-height:60px;">${n.quote.ku}</textarea>
          </div>
        </div>
      </div>
    `},addReviewItem(){this.config.reviews||(this.config.reviews=[]),this.config.reviews.push({initials:"AN",name:{en:"Anonymous",ku:""},role:{en:"Customer",ku:""},quote:{en:"",ku:""}}),this.renderPanelTab("reviews")},removeReviewItem(n){this.config.reviews&&(this.config.reviews.splice(n,1),this.renderPanelTab("reviews"))},resetReviews(){confirm("Are you sure you want to reset all reviews to the default?")&&(this.config.reviews=JSON.parse(JSON.stringify(mn.reviews)),this.saveConfig(),this.renderReviews(),this.renderPanelTab("reviews"),this.showToast("Reviews reset successfully","success"))},saveReviewSettings(n){n.preventDefault(),this.config.reviews||(this.config.reviews=[]);const e=document.querySelectorAll(".review-initials"),t=document.querySelectorAll(".review-name-en"),s=document.querySelectorAll(".review-name-ku"),r=document.querySelectorAll(".review-role-en"),i=document.querySelectorAll(".review-role-ku"),o=document.querySelectorAll(".review-quote-en"),a=document.querySelectorAll(".review-quote-ku"),c=[];for(let u=0;u<e.length;u++)c.push({initials:e[u].value.trim(),name:{en:t[u].value.trim(),ku:s[u].value.trim()},role:{en:r[u].value.trim(),ku:i[u].value.trim()},quote:{en:o[u].value.trim(),ku:a[u].value.trim()}});this.config.reviews=c,this.saveConfig(),this.renderReviews(),this.showToast(this.t("toastSaved")||"Saved","success")},saveFaqSettings(n){n.preventDefault(),this.config.faq||(this.config.faq=[]);const e=document.querySelectorAll(".faq-q-en"),t=document.querySelectorAll(".faq-q-ku"),s=document.querySelectorAll(".faq-a-en"),r=document.querySelectorAll(".faq-a-ku"),i=[];for(let o=0;o<e.length;o++)i.push({q:{en:e[o].value.trim(),ku:t[o].value.trim()},a:{en:s[o].value.trim(),ku:r[o].value.trim()}});this.config.faq=i,this.saveConfig(),this.renderFAQ(),this.showToast(this.t("toastSaved")||"Saved","success")},saveContactSettings(n){n.preventDefault(),this.config.contact.whatsapp=document.getElementById("cfgWhatsapp").value.trim().replace(/\D/g,""),this.config.contact.phone=document.getElementById("cfgPhone").value.trim(),this.config.contact.email=document.getElementById("cfgEmail").value.trim(),this.config.contact.address.en=document.getElementById("cfgAddressEn").value.trim(),this.config.contact.address.ku=document.getElementById("cfgAddressKu").value.trim(),this.config.contact.hours.en=document.getElementById("cfgHoursEn").value.trim(),this.config.contact.hours.ku=document.getElementById("cfgHoursKu").value.trim(),this.saveConfig(),this.renderBranding(),this.showToast(this.t("toastSaved"),"success")},saveSocialSettings(n){n.preventDefault(),this.config.socials.instagram=document.getElementById("cfgInsta").value.trim(),this.config.socials.facebook=document.getElementById("cfgFb").value.trim(),this.config.socials.tiktok=document.getElementById("cfgTiktok").value.trim(),this.config.socials.snapchat=document.getElementById("cfgSnap").value.trim(),this.saveConfig(),this.renderBranding(),this.showToast(this.t("toastSaved"),"success")},handleFontPreviewChange(){const n=document.getElementById("cfgKuBody"),e=document.getElementById("cfgKuDisplay"),t=document.getElementById("cfgEnBody"),s=document.getElementById("cfgEnDisplay"),r=n?n.value:this.config&&this.config.kurdishBodyFont||"Vazirmatn",i=e?e.value:this.config&&this.config.kurdishDisplayFont||"Vazirmatn",o=t?t.value:this.config&&this.config.englishBodyFont||"DM Sans",a=s?s.value:this.config&&this.config.englishDisplayFont||"Cormorant Garamond",c=document.getElementById("fontPreviewHeading"),u=document.getElementById("fontPreviewBody");c&&(c.style.fontFamily=`'${i}', serif`),u&&(u.style.fontFamily=`'${r}', sans-serif`);const h=document.getElementById("fontPreviewHeadingEn"),f=document.getElementById("fontPreviewBodyEn");h&&(h.style.fontFamily=`'${a}', serif`),f&&(f.style.fontFamily=`'${o}', sans-serif`),document.documentElement.style.setProperty("--font-ku-body",`'${r}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-ku-display",`'${i}', serif`),this.lang==="ku"?(document.documentElement.style.setProperty("--font-body",`'${r}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-heading",`'${i}', serif`),document.documentElement.style.setProperty("--font-serif",`'${i}', serif`),document.documentElement.style.setProperty("--font-ui",`'${r}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-accent",`'${i}', serif`)):(document.documentElement.style.setProperty("--font-body",`'${o}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-heading",`'${a}', serif`),document.documentElement.style.setProperty("--font-serif",`'${a}', serif`),document.documentElement.style.setProperty("--font-ui",`'${o}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-accent",`'${a}', serif`))},saveFontSettings(n){n&&n.preventDefault();const e=document.getElementById("cfgKuBody"),t=document.getElementById("cfgKuDisplay"),s=document.getElementById("cfgEnBody"),r=document.getElementById("cfgEnDisplay");e&&(this.config.kurdishBodyFont=e.value),t&&(this.config.kurdishDisplayFont=t.value),s&&(this.config.englishBodyFont=s.value),r&&(this.config.englishDisplayFont=r.value),this.saveConfig(),this.applyFonts(),this.showToast(this.t("toastSaved"),"success")},applyFonts(){const n=this.lang==="ku",e=this.config&&this.config.kurdishBodyFont||"Vazirmatn",t=this.config&&this.config.kurdishDisplayFont||"Vazirmatn",s=this.config&&this.config.englishBodyFont||"DM Sans",r=this.config&&this.config.englishDisplayFont||"Cormorant Garamond";document.documentElement.style.setProperty("--font-ku-body",`'${e}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-ku-display",`'${t}', serif`),n?(document.documentElement.style.setProperty("--font-body",`'${e}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-heading",`'${t}', serif`),document.documentElement.style.setProperty("--font-serif",`'${t}', serif`),document.documentElement.style.setProperty("--font-ui",`'${e}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-accent",`'${t}', serif`)):(document.documentElement.style.setProperty("--font-body",`'${s}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-heading",`'${r}', serif`),document.documentElement.style.setProperty("--font-serif",`'${r}', serif`),document.documentElement.style.setProperty("--font-ui",`'${s}', system-ui, sans-serif`),document.documentElement.style.setProperty("--font-accent",`'${r}', serif`))},applyTheme(n){const e=document.documentElement.style;let s={...n||this.config.theme&&this.config.theme.tokens||Ke.berry.tokens};const r=this.config&&this.config.theme&&this.config.theme.mode,i=this.config&&this.config.theme&&this.config.theme.autoDark,o=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=this.config&&this.config.theme&&this.config.theme.presetId,c=r==="dark"||r!=="light"&&i&&o||a==="midnight"&&r!=="light";c?(document.documentElement.setAttribute("data-theme","dark"),document.documentElement.classList.add("is-dark"),document.body.classList.add("is-dark"),s={...s,cream:"#15110E",shell:"#1E1814",surface:"#241D18",surfaceHover:"#2E241E",surfaceInput:"#1A1411",blush:"#342820",linen:"#221B16",berry:s.berry&&s.berry!=="#8E3B4A"&&s.berry!=="#1F2E4A"?s.berry:"#E07A5F",berryDark:"#C66247",berryDeep:"#F4A58E",cocoa:"#F7EFE8",cocoaSoft:"#D6C6B8",gold:"#E5B85C",goldSoft:"#F3D48E",ink:"#EDE3DA",muted:"#A89687",line:"#3A2E26",lineStrong:"#4F3F34",headerBg:"rgba(21, 17, 14, 0.94)",headerBgStuck:"rgba(21, 17, 14, 0.98)",footerBg:"#100C0A",footerText:"#EDE3DA",footerMuted:"rgba(237, 227, 218, 0.7)"}):(document.documentElement.setAttribute("data-theme","light"),document.documentElement.classList.remove("is-dark"),document.body.classList.remove("is-dark"),s={surface:"#FFFFFF",surfaceHover:"#FFF7F0",surfaceInput:"#FFFFFF",headerBg:"rgba(247, 241, 232, 0.94)",headerBgStuck:"rgba(247, 241, 232, 0.98)",footerBg:"#2C211B",footerText:"#FFFBF7",footerMuted:"rgba(255, 251, 247, 0.75)",...s}),i?document.documentElement.setAttribute("data-auto-dark","true"):document.documentElement.removeAttribute("data-auto-dark"),Object.entries(s).forEach(([h,f])=>{e.setProperty("--"+h.replace(/([A-Z])/g,"-$1").toLowerCase(),f)}),document.body.style.background=s.cream,document.body.style.color=s.ink;let u=document.querySelector('meta[name="theme-color"]');u||(u=document.createElement("meta"),u.name="theme-color",document.head.appendChild(u)),u.content=c?"#15110E":s.berry,this.updateThemeToggleUI(c)},updateThemeToggleUI(n){const e=document.getElementById("themeModeToggle"),t=document.getElementById("themeModeIcon"),s=document.getElementById("mobileThemeModeToggle"),r=document.getElementById("mobileThemeModeIcon"),i=n?"☀️":"🌙";t&&(t.textContent=i),r&&(r.textContent=i),e&&(e.setAttribute("aria-label",n?"Switch to light mode":"Switch to dark mode"),e.title=n?this.lang==="ku"?"دۆخی ڕووناک":"Switch to Light Mode":this.lang==="ku"?"دۆخی تاریک":"Switch to Dark Mode",e.classList.toggle("is-active",n)),s&&(s.setAttribute("aria-label",n?"Switch to light mode":"Switch to dark mode"),s.title=n?this.lang==="ku"?"دۆخی ڕووناک":"Switch to Light Mode":this.lang==="ku"?"دۆخی تاریک":"Switch to Dark Mode",s.classList.toggle("is-active",n))},toggleDarkMode(){this.config.theme||(this.config.theme={presetId:"berry",autoDark:!1});const e=(this.config.theme.mode||(document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light"))==="dark"?"light":"dark";this.config.theme.mode=e,this.saveConfig();const t=this.config.theme.presetId||"berry",s=Ke[t]&&Ke[t].tokens?Ke[t].tokens:this.config.theme.tokens;this.applyTheme(s);const r=e==="dark"?this.lang==="ku"?"دۆخی تاریک چالاککرا":"Dark theme activated":this.lang==="ku"?"دۆخی ڕووناک چالاککرا":"Light theme activated";this.showToast(r,"info")},setThemeMode(n){var i;this.config.theme||(this.config.theme={presetId:"berry",autoDark:!1}),this.config.theme.mode=n,this.saveConfig();const e=this.config.theme.presetId||"berry",t=Ke[e]&&Ke[e].tokens?Ke[e].tokens:this.config.theme.tokens;this.applyTheme(t);const s=document.getElementById("panelContent");s&&((i=document.getElementById("panelTitle"))==null?void 0:i.textContent)===this.t("tabTheme")&&this.renderThemeTab(s);const r=n==="dark"?this.lang==="ku"?"دۆخی تاریک چالاککرا":"Dark theme activated":this.lang==="ku"?"دۆخی ڕووناک چالاککرا":"Light theme activated";this.showToast(r,"info")},toggleWatermarkSetting(n){this.config.showWatermark=!!n,this.saveConfig(),this.renderWatermark(),this.showToast(this.t("toastSaved"),"success")},getDraftEconomy(){var Z,le,ae,ne,w,C,_,A,I,P,D,ke,lt,$n,gi,qn,Jn,Ci,tr,nr;const n=this.config&&this.config.economy||Zn;if(!document.getElementById("economySettingsForm"))return n;const t=((Z=document.getElementById("cfgSecondaryCurrency"))==null?void 0:Z.value)||n.secondaryCurrency,s=((le=document.getElementById("cfgShowSecondary"))==null?void 0:le.checked)??n.showSecondary,r=((ne=(ae=document.getElementById("cfgCurrencySymbol"))==null?void 0:ae.value)==null?void 0:ne.trim())||(t==="IQD"?"د.ع":t),i=Math.max(1,parseFloat((w=document.getElementById("cfgExchangeRate"))==null?void 0:w.value)||1310),o=parseInt((C=document.getElementById("cfgRoundingRule"))==null?void 0:C.value,10)||250,a=Math.max(0,parseFloat((_=document.getElementById("cfgDeliveryFee"))==null?void 0:_.value)||0),c=Math.max(0,parseFloat((A=document.getElementById("cfgFreeDeliveryOver"))==null?void 0:A.value)||0),u=Math.max(0,parseFloat((I=document.getElementById("cfgMinimumOrder"))==null?void 0:I.value)||0),h=!!((P=document.getElementById("cfgPickupOnly"))!=null&&P.checked),f=!!((D=document.getElementById("cfgTaxEnabled"))!=null&&D.checked),p=Math.min(30,Math.max(0,parseFloat((ke=document.getElementById("cfgTaxRate"))==null?void 0:ke.value)||0)),g=(($n=(lt=document.getElementById("cfgTaxLabel"))==null?void 0:lt.value)==null?void 0:$n.trim())||"VAT",v=!!((gi=document.getElementById("cfgTaxIncluded"))!=null&&gi.checked),O=((Jn=(qn=document.getElementById("cfgPromoCode"))==null?void 0:qn.value)==null?void 0:Jn.trim().toUpperCase())||"",F=((Ci=document.getElementById("cfgPromoType"))==null?void 0:Ci.value)||"percent",S=Math.max(0,parseFloat((tr=document.getElementById("cfgPromoValue"))==null?void 0:tr.value)||0),G=((nr=document.getElementById("cfgPromoExpiry"))==null?void 0:nr.value)||"";return{primaryCurrency:"USD",secondaryCurrency:t,showSecondary:s,currencySymbol:r,exchangeRate:i,roundingRule:o,autoRefreshRate:!1,deliveryFee:a,freeDeliveryOver:c,minimumOrder:u,pickupOnly:h,taxEnabled:f,taxRate:p,taxLabel:g,taxIncluded:v,promoCode:O,promoType:F,promoValue:S,promoExpiry:G,lastUpdatedRate:n.lastUpdatedRate}},isEconomyDirty(n,e){return!n||!e?!1:n.secondaryCurrency!==e.secondaryCurrency||n.showSecondary!==e.showSecondary||n.currencySymbol!==e.currencySymbol||n.exchangeRate!==e.exchangeRate||n.roundingRule!==e.roundingRule||n.deliveryFee!==e.deliveryFee||n.freeDeliveryOver!==e.freeDeliveryOver||n.minimumOrder!==e.minimumOrder||n.pickupOnly!==e.pickupOnly||n.taxEnabled!==e.taxEnabled||n.taxRate!==e.taxRate||n.taxLabel!==e.taxLabel||n.taxIncluded!==e.taxIncluded||n.promoCode!==e.promoCode||n.promoType!==e.promoType||n.promoValue!==e.promoValue||n.promoExpiry!==e.promoExpiry},handleEconomyInput(n){if(n&&n.target)if(n.target.id==="cfgPromoCode"&&(n.target.value=n.target.value.toUpperCase().replace(/[^A-Z0-9_-]/g,"")),n.target.id==="cfgExchangeRate")this.onExchangeRateInput(n.target.value);else{const e=this.getDraftEconomy();this.applyEconomy(e)}this.updateEconomyPreview()},onExchangeRateInput(n){this._exchangeRateDebounceTimer&&clearTimeout(this._exchangeRateDebounceTimer),this._exchangeRateDebounceTimer=setTimeout(()=>{const e=this.getDraftEconomy();this.applyEconomy(e),this.updateEconomyPreview()},200)},applyEconomy(n=null){this._draftEconomy=n,this.applyPreferences(),this.renderMenu(),this.renderTray()},toggleMobilePreviewExpand(){const n=document.getElementById("economyPreviewStickyCard");if(!n)return;const e=n.classList.contains("is-collapsed");n.classList.toggle("is-collapsed",!e),n.classList.toggle("is-expanded",e);const t=document.getElementById("previewChevron");t&&(t.textContent=e?"▼":"▲")},showModalToast(n,e="success"){const t=document.getElementById("modalToastContainer");if(!t){this.showToast(n,e);return}const s=document.createElement("div");s.className=`modal-toast modal-toast--${e}`,s.innerHTML=`<span>✓</span> <span>${n}</span>`,t.appendChild(s),setTimeout(()=>{s.style.animation="modalToastOut 220ms cubic-bezier(.2,.8,.3,1) forwards",setTimeout(()=>s.remove(),220)},2800)},updateEconomyPreview(){const n=document.getElementById("economyLivePreviewCard");if(!n)return;const e=this.config&&this.config.economy||Zn,t=this.getDraftEconomy(),s=this.isEconomyDirty(t,e),r=document.getElementById("btnSaveEconomy");r&&(r.disabled=!s);const i=document.getElementById("ecoCurrenciesSummary");i&&(i.textContent=t.showSecondary&&t.secondaryCurrency&&t.secondaryCurrency!=="None"?`USD + ${t.secondaryCurrency} (${t.currencySymbol||"د.ع"})`:"USD only");const o=document.getElementById("ecoExchangeSummary");if(o){const ne=new Intl.NumberFormat("en-US").format(t.exchangeRate||1310),w=t.roundingRule>1?`Nearest ${t.roundingRule}`:"Exact (cents)";o.textContent=`1 USD = ${ne} ${t.secondaryCurrency} · ${w}`}const a=document.getElementById("ecoDeliverySummary");if(a)if(t.pickupOnly)a.textContent="Pickup only";else{const ne=t.freeDeliveryOver>0?`Free over $${t.freeDeliveryOver}`:"All-order free";a.textContent=`$${t.deliveryFee} flat · ${ne} · Min $${t.minimumOrder}`}const c=document.getElementById("ecoTaxSummary");c&&(t.taxEnabled?c.textContent=`${t.taxRate}% (${t.taxLabel||"VAT"}) ${t.taxIncluded?"included":"+checkout"}`:c.textContent="Off");const u=document.getElementById("ecoDiscountsSummary");if(u)if(!t.promoCode)u.textContent="No active code";else{const ne=t.promoType==="percent"?`${t.promoValue}%`:`$${t.promoValue}`;u.textContent=`${t.promoCode} (${ne} off)`}const h=document.getElementById("promoValidityBadge");if(h){const ne=t.promoCode;ne?ne.length<3?(h.style.display="inline-block",h.className="promo-pill promo-pill--short",h.textContent=this.t("promoTooShort")):t.promoExpiry&&new Date(t.promoExpiry+"T23:59:59")<new Date?(h.style.display="inline-block",h.className="promo-pill promo-pill--expired",h.textContent=this.t("promoExpired")):(h.style.display="inline-block",h.className="promo-pill promo-pill--active",h.textContent=this.t("promoActive")):h.style.display="none"}const f=document.getElementById("freeDeliveryWarn");if(f){const ne=!t.pickupOnly&&t.freeDeliveryOver>0&&t.minimumOrder>0&&t.freeDeliveryOver<t.minimumOrder;f.style.display=ne?"flex":"none"}const p=document.getElementById("deliveryZeroNote");p&&(p.style.display=!t.pickupOnly&&t.deliveryFee===0?"block":"none");const g=50,v=t.promoCode,O=this.computeCartBreakdown(g,v,t),F=t.showSecondary!==!1&&t.secondaryCurrency&&t.secondaryCurrency!=="None",S=O.total;let G="",Z="";if(F){const ne=S*t.exchangeRate,w=parseInt(t.roundingRule,10)||250;let C=ne;w>1?C=Math.round(ne/w)*w:C=Math.round(ne*100)/100;const _=t.currencySymbol||"د.ع";G=w>1?`${new Intl.NumberFormat("en-US").format(C)} ${_}`:`${_} ${C.toFixed(2)}`;const A=S*t.exchangeRate;w>1&&Math.abs(C-A)>.01&&(Z=`
          <div style="font-size:0.75rem;color:rgba(255,255,255,0.65);text-align:right;margin-top:2px;">
            Rounded from ${new Intl.NumberFormat("en-US").format(Math.round(A))} ${_} (nearest ${w})
          </div>
        `)}const le=document.getElementById("mobilePreviewSummaryText");le&&(le.textContent=`$${S.toFixed(2)}${F?` · ${G}`:""}`);let ae=`
      <div class="economy-preview-line">
        <span>${this.t("subtotal")}</span>
        <strong>$${g.toFixed(2)}</strong>
      </div>
    `;O.discount>0&&(ae+=`
        <div class="economy-preview-line" style="color:#4ade80;">
          <span>${this.t("discount")} (${O.promoCodeName})</span>
          <strong>−$${O.discount.toFixed(2)}</strong>
        </div>
      `),O.isPickupOnly?ae+=`
        <div class="economy-preview-line">
          <span>${this.t("economyDelivery")}</span>
          <span style="color:#93c5fd;font-weight:600;">Pickup Only</span>
        </div>
      `:O.isFreeDelivery?ae+=`
        <div class="economy-preview-line">
          <span>${this.t("deliveryFee")}</span>
          <span style="color:#4ade80;font-weight:700;">${this.t("freeDelivery")}</span>
        </div>
      `:ae+=`
        <div class="economy-preview-line">
          <span>${this.t("deliveryFee")}</span>
          <strong>$${O.delivery.toFixed(2)}</strong>
        </div>
      `,O.tax>0?ae+=`
        <div class="economy-preview-line">
          <span>${this.t("tax")} (${O.taxLabel} ${O.taxRate}%)</span>
          <strong>+$${O.tax.toFixed(2)}</strong>
        </div>
      `:t.taxEnabled&&t.taxIncluded&&t.taxRate>0&&(ae+=`
        <div class="economy-preview-line" style="color:rgba(255,255,255,0.65);font-size:0.78rem;">
          <span>${t.taxLabel} (${t.taxRate}% included)</span>
          <span>Included</span>
        </div>
      `),ae+=`
      <div class="economy-preview-total">
        <span>${this.t("total")}</span>
        <div style="text-align:right;">
          <div style="font-size:1.2rem;font-weight:700;color:var(--gold-soft,#eab308);">$${S.toFixed(2)}</div>
          ${F?`<div style="font-size:0.88rem;color:rgba(255,255,255,0.75);margin-top:2px;">${G}</div>${Z}`:""}
        </div>
      </div>
    `,O.minOrderMet||(ae+=`
        <div class="economy-preview-alert">
          ⚠️ Min order ($${t.minimumOrder.toFixed(2)}) not met. Sample is $${g.toFixed(2)}.
        </div>
      `),n.innerHTML=ae},saveEconomySettings(n){n&&n.preventDefault();const e=document.getElementById("btnSaveEconomy");e&&(e.disabled=!0,e.innerHTML=`<span class="btn-spinner"></span> ${this.t("saveEconomy")}`);const t=this.getDraftEconomy();t.lastUpdatedRate=Date.now(),this.config.economy=t,this.config.iqdRate!==void 0&&delete this.config.iqdRate,this.saveConfig(),this._draftEconomy=null,this.applyEconomy();const s=document.getElementById("lastUpdatedRateText");s&&(s.textContent=new Date(t.lastUpdatedRate).toLocaleDateString()),setTimeout(()=>{e&&(e.innerHTML=this.t("saveEconomy"),e.disabled=!0),this.showModalToast(this.t("toastSaved"),"success"),this.updateEconomyPreview()},250)},selectProductForEditing(n){if(n==="new"){this.addNewProduct();return}this.selectedProductId=n;const e=this.products.find(t=>t.id===n);this.pendingImageData=e&&e.img||"",this.renderProductEditor()},renderProductEditor(){var r,i,o,a;const n=document.getElementById("productEditorArea");if(!n)return;const e=this.products.find(c=>c.id===this.selectedProductId);if(!e){n.innerHTML=`
        <div style="text-align:center;padding:36px 20px;background:var(--shell);border-radius:var(--radius-card);border:1px dashed var(--line);">
          <p style="color:var(--muted);margin-bottom:12px;">No product selected.</p>
          <button type="button" class="btn btn--primary btn--sm" onclick="app.addNewProduct()">${this.t("btnAddNewProduct")}</button>
        </div>
      `;return}const t=this.pendingImageData||e.img||"",s=!!(t&&t.trim()!=="");n.innerHTML=`
      <div style="background:var(--cream);padding:22px;border-radius:var(--radius-card);border:1px solid var(--line);margin-top:14px;">
        <h5 style="font-family:var(--font-serif);font-size:1.15rem;margin:0 0 16px 0;display:flex;align-items:center;gap:8px;">
          <span>${e.emoji||"🎂"}</span>
          <span>${e.name.en||"Untitled Product"}</span>
          <span style="font-size:0.85rem;color:var(--muted);font-family:var(--font-sans);font-weight:normal;">($${e.priceUSD})</span>
        </h5>

        <!-- Photo Uploader -->
        <div class="photo-uploader">
          <div class="photo-uploader__preview" id="prodPreview">
            ${s?`
              <img src="${t}" alt="${(e.name.en||"Product Preview").replace(/"/g,"&quot;")}" referrerpolicy="no-referrer" />
            `:`
              <div class="preview-emoji">${e.emoji||"🎂"}</div>
              <div class="preview-hint">${this.t("noPhotoHint")}</div>
            `}
          </div>
          <div class="photo-uploader__controls">
            <label class="upload-btn" for="prodImageInput">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span id="uploadBtnText">${s?this.t("replacePhoto"):this.t("uploadPhoto")}</span>
              <input type="file" id="prodImageInput" accept="image/jpeg,image/png,image/webp" onchange="app.handlePhotoUpload(event)" />
            </label>
            <button type="button" class="btn btn--ghost btn--sm" id="btnRemovePhoto" style="${s?"display:inline-flex;":"display:none;"} color:#b91c1c; border-color:#fca5a5;" onclick="app.removeProductPhoto()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;" aria-hidden="true">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              ${this.t("removePhoto")}
            </button>
            <p class="photo-hint">${this.t("photoHint")}</p>
          </div>
        </div>

        <form onsubmit="app.saveProductData(event)">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pEditEmoji">Emoji Fallback Icon</label>
              <input type="text" id="pEditEmoji" class="form-input" value="${e.emoji||"🎂"}" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="pEditCat">Category</label>
              <select id="pEditCat" class="form-select">
                <option value="cakes" ${e.category==="cakes"?"selected":""}>Layer Cakes</option>
                <option value="cupcakes" ${e.category==="cupcakes"?"selected":""}>Cupcakes</option>
                <option value="desserts" ${e.category==="desserts"?"selected":""}>Desserts</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pEditNameEn">Name (English)</label>
              <input type="text" id="pEditNameEn" class="form-input" value="${(e.name.en||"").replace(/"/g,"&quot;")}" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="pEditNameKu">Name (Kurdish)</label>
              <input type="text" id="pEditNameKu" class="form-input" value="${(e.name.ku||"").replace(/"/g,"&quot;")}" required />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pEditPrice">Price (USD)</label>
              <input type="number" id="pEditPrice" class="form-input" value="${e.priceUSD}" step="0.5" min="1" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="pEditTag">Product Tag</label>
              <select id="pEditTag" class="form-select">
                <option value="none" ${e.tag==="none"?"selected":""}>None</option>
                <option value="bestseller" ${e.tag==="bestseller"?"selected":""}>Bestseller</option>
          <option value="popular" ${e.tag==="popular"?"selected":""}>Popular</option>
          <option value="limited" ${e.tag==="limited"?"selected":""}>Limited</option>
          <option value="sale" ${e.tag==="sale"?"selected":""}>Sale</option>
                <option value="new" ${e.tag==="new"?"selected":""}>New</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pEditUnitEn">Serving Unit (English)</label>
              <input type="text" id="pEditUnitEn" class="form-input" value="${(((r=e.unit)==null?void 0:r.en)||'8" Cake (10-12 slices)').replace(/"/g,"&quot;")}" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="pEditUnitKu">Serving Unit (Kurdish)</label>
              <input type="text" id="pEditUnitKu" class="form-input" value="${(((i=e.unit)==null?void 0:i.ku)||"کێکی ٨ ئینچ (١٠-١٢ پارچە)").replace(/"/g,"&quot;")}" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="pEditDescEn">Description (English)</label>
            <textarea id="pEditDescEn" class="form-textarea" rows="2">${((o=e.desc)==null?void 0:o.en)||""}</textarea>
          </div>

          <div class="form-group">
            <label class="form-label" for="pEditDescKu">Description (Kurdish)</label>
            <textarea id="pEditDescKu" class="form-textarea" rows="2">${((a=e.desc)==null?void 0:a.ku)||""}</textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pEditExEn">Exclusions (English, comma separated)</label>
              <input type="text" id="pEditExEn" class="form-input" value="${(e.exclusions||[]).map(c=>c.en).join(", ").replace(/"/g,"&quot;")}" placeholder="e.g. Nuts, Frosting" />
            </div>
            <div class="form-group">
              <label class="form-label" for="pEditExKu">Exclusions (Kurdish, comma separated)</label>
              <input type="text" id="pEditExKu" class="form-input" value="${(e.exclusions||[]).map(c=>c.ku).join(", ").replace(/"/g,"&quot;")}" placeholder="e.g. گوێز, کرێم" />
            </div>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:20px;flex-wrap:wrap;">
            <button type="submit" class="btn btn--primary">${this.t("btnSaveProduct")}</button>
            <button type="button" class="btn btn--ghost" style="color:#b91c1c;border-color:#fca5a5;" onclick="app.deleteProduct('${e.id}')">${this.t("btnDeleteProduct")}</button>
          </div>
        </form>
      </div>
    `},editProduct(n){this.selectProductForEditing(n)},async handlePhotoUpload(n){const e=n.target.files&&n.target.files[0];if(e)try{const t=await EI(e);this.pendingImageData=t;const s=document.getElementById("prodPreview");s&&(s.innerHTML=`<img src="${t}" alt="Product Preview" />`);const r=document.getElementById("uploadBtnText");r&&(r.textContent=this.t("replacePhoto"));const i=document.getElementById("btnRemovePhoto");i&&(i.style.display="inline-flex"),this.showToast(this.t("toastPhotoReady"),"info")}catch(t){console.error("Image processing error:",t),t.message==="OUTPUT_TOO_LARGE"||t.message==="FILE_TOO_LARGE"?this.showToast(this.t("prodPhotoTooLarge"),"error"):this.showToast(this.t("prodPhotoError"),"error")}finally{n.target.value=""}},removeProductPhoto(){this.pendingImageData="";const n=this.products.find(r=>r.id===this.selectedProductId);n&&(n.img="",this.saveProducts(),se&&ut(xe(se,"products",id)).catch(r=>Ae(r,be.DELETE,"products")),this.renderMenu());const e=document.getElementById("prodPreview");if(e){const r=n&&n.emoji||"🎂";e.innerHTML=`
        <div class="preview-emoji">${r}</div>
        <div class="preview-hint">${this.t("noPhotoHint")}</div>
      `}const t=document.getElementById("uploadBtnText");t&&(t.textContent=this.t("uploadPhoto"));const s=document.getElementById("btnRemovePhoto");s&&(s.style.display="none"),this.showToast(this.t("prodPhotoRemoved"),"info")},addNewProduct(){const n="p_"+Date.now(),e={id:n,category:"cakes",emoji:"🎂",img:"",priceUSD:35,tag:"none",name:{en:"New Artisanal Cake",ku:"کێکی دەستکردی نوێ"},desc:{en:"Handcrafted sponge layered with fresh cream and seasonal fruits.",ku:"کێکی دەستکرد بە کرێمی تازە و میوەی وەرزی."},unit:{en:'8" Cake (10-12 slices)',ku:"کێکی ٨ ئینچ (١٠-١٢ پارچە)"}};this.products.unshift(e),this.selectedProductId=n,this.pendingImageData="",this.saveProducts(),se&&ut(xe(se,"products",id)).catch(t=>Ae(t,be.DELETE,"products")),this.renderMenu(),this.renderPanelTab("products"),this.showToast(this.t("toastSaved"),"success")},saveProductData(n){n.preventDefault();const e=this.products.find(S=>S.id===this.selectedProductId);if(!e)return;const t=document.getElementById("pEditEmoji").value.trim()||"🎂",s=document.getElementById("pEditCat").value,r=document.getElementById("pEditNameEn").value.trim(),i=document.getElementById("pEditNameKu").value.trim(),o=parseFloat(document.getElementById("pEditPrice").value)||20,a=document.getElementById("pEditTag").value,c=document.getElementById("pEditUnitEn").value.trim(),u=document.getElementById("pEditUnitKu").value.trim(),h=document.getElementById("pEditDescEn").value.trim(),f=document.getElementById("pEditDescKu").value.trim(),p=document.getElementById("pEditExEn").value.split(",").map(S=>S.trim()).filter(Boolean),g=document.getElementById("pEditExKu").value.split(",").map(S=>S.trim()).filter(Boolean),v=[],O=Math.max(p.length,g.length);for(let S=0;S<O;S++)(p[S]||g[S])&&v.push({id:(p[S]||g[S]||`ex${S}`).replace(/\s+/g,"_").toLowerCase(),en:p[S]||"",ku:g[S]||""});e.exclusions=v.length>0?v:null,e.emoji=t,e.category=s,e.name={en:r,ku:i},e.priceUSD=o,e.tag=a,e.unit={en:c,ku:u},e.desc={en:h,ku:f},e.img=this.pendingImageData||"";const F=this.saveProducts();se&&ut(xe(se,"products",id)).catch(S=>Ae(S,be.DELETE,"products")),F&&(this.renderMenu(),this.renderPanelTab("products"),this.showToast(this.t("toastSaved"),"success"))},deleteProduct(n){const e=document.getElementById("customConfirmModal"),t=document.getElementById("confirmMessage"),s=document.getElementById("confirmCancelBtn"),r=document.getElementById("confirmOkBtn");t.textContent=this.t("prodDeleteConfirm")||"Are you sure you want to delete this product?";const i=()=>{e.classList.remove("is-open"),s.onclick=null,r.onclick=null};s.onclick=i,r.onclick=()=>{i(),this.products.length,this.products=this.products.filter(o=>o.id!==n),this.order=this.order.filter(o=>o.productId!==n),this.selectedProductId=this.products.length>0?this.products[0].id:null,this.pendingImageData=this.selectedProductId&&this.products.length>0&&this.products[0].img?this.products[0].img:"",this.saveProducts(),se&&ut(xe(se,"products",n)).catch(o=>Ae(o,be.DELETE,"products")),this.renderMenu(),this.renderTray(),this.renderPanelTab("products"),this.showToast(this.t("toastDeleted")||"Deleted","success")},e.classList.add("is-open")},showAddStaffModal(){document.getElementById("promptUsername").value="",document.getElementById("promptPassword").value="",document.getElementById("promptName").value="",document.getElementById("promptRole").value="staff",document.querySelectorAll('input[name="staffPerms"]').forEach(e=>e.checked=!1),document.getElementById("customPromptModal").classList.add("is-open")},submitAddStaff(n){n.preventDefault();const e=document.getElementById("promptUsername").value.trim(),t=document.getElementById("promptPassword").value.trim(),s=document.getElementById("promptName").value.trim()||e,r=document.getElementById("promptRole").value,i=[];if(document.querySelectorAll('input[name="staffPerms"]:checked').forEach(o=>{i.push(o.value)}),t.length<4){this.showToast("Password must be at least 4 characters.","error");return}this.users.push({id:"s_"+Date.now(),username:e,password:t,name:s,role:r,permissions:i}),this.saveUsers(),se&&ut(xe(se,"users",userId)).catch(o=>Ae(o,be.DELETE,"users")),this.renderPanelTab("users"),this.showToast(this.t("staffAdded")||"Staff added","success"),document.getElementById("customPromptModal").classList.remove("is-open")},importJsonData(){try{const n=document.getElementById("dataJsonBox"),e=JSON.parse(n.value);if(!e.config||!e.products||!e.users)throw new Error("Missing top-level keys");this.config=e.config,this.products=e.products,this.users=e.users,this.saveConfig(),this.saveProducts(),se&&ut(xe(se,"products",id)).catch(t=>Ae(t,be.DELETE,"products")),this.saveUsers(),se&&ut(xe(se,"users",userId)).catch(t=>Ae(t,be.DELETE,"users")),this.renderAll(),this.showToast(this.t("backupImported"),"success")}catch{this.showToast(this.t("toastInvalidJson"),"error")}},copyJsonData(){const n=document.getElementById("dataJsonBox");n&&navigator.clipboard.writeText(n.value).then(()=>{this.showToast(this.t("copiedJson"),"success")}).catch(()=>{n.select(),document.execCommand("copy"),this.showToast(this.t("copiedJson"),"success")})},factoryReset(){confirm("Are you sure? This will wipe all changes, restore factory defaults, and log you out.")&&(localStorage.removeItem(ve.CONFIG),localStorage.removeItem(ve.PRODUCTS),localStorage.removeItem(ve.USERS),localStorage.removeItem(ve.SESSION),localStorage.removeItem(ve.PREF),this.loadState(),this.renderAll(),this.closePanelModal(),this.showToast(this.t("factoryResetDone"),"success"))},renderWatermark(){const n=document.getElementById("watermarkPill");if(!n)return;const e=this.config&&this.config.showWatermark!==!1;n.style.display=e?"inline-flex":"none"},showToast(n,e="info"){const t=document.getElementById("toastContainer");if(!t)return;const s=document.createElement("div");s.className=`toast ${e==="success"?"toast--success":e==="error"?"toast--error":""}`,s.textContent=n,t.appendChild(s),setTimeout(()=>{s.classList.add("is-show")},10),setTimeout(()=>{s.classList.remove("is-show"),setTimeout(()=>{s.parentNode&&s.parentNode.removeChild(s)},300)},2200)},toggleMobileMenu(){const n=document.getElementById("mobileNav"),e=document.getElementById("burgerBtn");if(!n||!e)return;const t=n.classList.toggle("is-open");e.setAttribute("aria-expanded",t?"true":"false")},closeMobileMenu(){const n=document.getElementById("mobileNav"),e=document.getElementById("burgerBtn");n&&n.classList.remove("is-open"),e&&e.setAttribute("aria-expanded","false")},bindEvents(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{this.config&&this.config.theme&&this.config.theme.autoDark&&this.applyTheme(this.config.theme.tokens)});const n=document.getElementById("mainHeader");window.addEventListener("scroll",()=>{n&&(window.scrollY>15?n.classList.add("is-stuck"):n.classList.remove("is-stuck"))},{passive:!0}),["authModal","panelModal","historyModal"].forEach(e=>{const t=document.getElementById(e);t&&t.addEventListener("click",s=>{s.target===t&&t.classList.remove("is-open")})}),window.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();const t=document.getElementById("menuSearchInput");t&&(t.focus(),t.select())}e.key==="Escape"&&(document.activeElement&&document.activeElement.id==="menuSearchInput"&&document.activeElement.blur(),this.closeAuthModal(),this.closePanelModal(),this.closeHistoryModal(),this.closeCustomerDrawer(),this.closeMobileMenu())})},setupIntersectionObserver(){if(!("IntersectionObserver"in window))return;const n=new IntersectionObserver(t=>{t.forEach((s,r)=>{s.isIntersecting&&(setTimeout(()=>{s.target.style.opacity="1",s.target.style.transform="translateY(0)"},r%4*70),n.unobserve(s.target))})},{threshold:.12});document.querySelectorAll(".feature-card, .cake-card, .step-card, .review-card, .faq-item, .info-card").forEach(t=>{t.style.opacity="0",t.style.transform="translateY(24px)",t.style.transition="opacity 0.4s ease, transform 0.4s ease",n.observe(t)})}};window.app=Xr;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Xr.init()):Xr.init();
