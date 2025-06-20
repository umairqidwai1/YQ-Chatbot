import{s as Vr,z as Lr,B as Wr,p as qr,j as or,l as lr,i as de,d as C,e as M,t as Te,k as ce,c as P,a as G,b as Ie,o as fe,G as wr,f as N,g as A,u as pt,h as Be,H as Hr,n as ct,S as ip,q as np,C as lo,y as qa,W as rg,r as ag,v as ig,w as ng,x as sg}from"./Bk--KVgx.js";import{S as Gr,i as Fr,f as jr,b as Ce,d as ze,m as Ae,t as te,a as ae,e as Oe,g as Ze,c as Ye}from"./CoU9NT7-.js";import{g as uo}from"./D_XIBSCa.js";import{p as og}from"./D-0X3nPa.js";import{g as lg}from"./D0QH3NT1.js";import{e as ur,u as sp,d as ug,o as dg}from"./DOi8FfRu.js";import{_ as pg,a as cg,b as fg}from"./mwDbUFdv.js";import{m as hg}from"./Cx1AvSPh.js";import{M as op}from"./DuEzRzUF.js";import{S as mg}from"./R3jnHhLu.js";import{T as Kr}from"./CSMXUTi0.js";import{M as gg}from"./B7dFjf2L.js";import{C as bt}from"./DRvjGJhi.js";import{C as Jt}from"./hEaeE0lN.js";import{t as hi}from"./DXxu2l8m.js";import{f as _g}from"./CyTOOynw.js";import{d as cn,r as yg}from"./I1CDPYOB.js";import{d as bg,e as $g,g as vg}from"./BdmwXn5G.js";import{A as wg}from"./C6y4dPUu.js";import{B as Tn}from"./CZ7f6vLC.js";import{C as xg}from"./CcTI3QYX.js";import{P as kg}from"./Ct4psEm1.js";import"./C7mVdHWX.js";import{M as Sg}from"./Clho6vVM.js";import{b as Eg}from"./D0VtmBkg.js";import{f as Tg}from"./CBc5jlPY.js";import{D as Ig}from"./Cuw40vro.js";import{G as Cg}from"./BPVeZcJ6.js";import{E as zg}from"./BIJPbqz7.js";/*!
 * ONNX Runtime Web v1.21.0-dev.20250206-d981b153d3
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var In=Object.defineProperty,Ag=Object.getOwnPropertyDescriptor,Og=Object.getOwnPropertyNames,Dg=Object.prototype.hasOwnProperty,Rg=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),le=(e,t)=>()=>(e&&(t=e(e=0)),t),fa=(e,t)=>{for(var r in t)In(e,r,{get:t[r],enumerable:!0})},Ng=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Og(t))!Dg.call(e,i)&&i!==r&&In(e,i,{get:()=>t[i],enumerable:!(a=Ag(t,i))||a.enumerable});return e},Ha=e=>Ng(In({},"__esModule",{value:!0}),e),Yr,ir,Nr,po,lp,up=le(()=>{Yr=new Map,ir=[],Nr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Yr.get(e);if(a===void 0)Yr.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=ir.indexOf(e);i!==-1&&ir.splice(i,1);for(let s=0;s<ir.length;s++)if(Yr.get(ir[s]).priority<=r){ir.splice(s,0,e);return}ir.push(e)}return}throw new TypeError("not a valid backend")},po=async e=>{let t=Yr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},lp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),a=r.length===0?ir:r,i,s=[],n=new Set;for(let l of a){let p=await po(l);typeof p=="string"?s.push({name:l,err:p}):(i||(i=p),i===p&&n.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:p}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${p}`);let o=t.filter(l=>n.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,p)=>p==="executionProviders"?o:Reflect.get(l,p)})]}}),Bg=le(()=>{up()}),dp,Mg=le(()=>{dp="1.21.0-dev.20250206-d981b153d3"}),mi,Dt,pp=le(()=>{Mg(),mi="warning",Dt={wasm:{},webgl:{},webgpu:{},versions:{common:dp},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);mi=e}},get logLevel(){return mi}},Object.defineProperty(Dt,"logLevel",{enumerable:!0})}),at,Pg=le(()=>{pp(),at=Dt}),cp,fp,Ug=le(()=>{cp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let i,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[3]):(i=e.dims[3],s=e.dims[2]);let n=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,p;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?p=[0,0,0,0]:typeof o.bias=="number"?p=[o.bias,o.bias,o.bias,o.bias]:(p=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(p[3]=o.bias[3]));let c=s*i,f=0,u=c,m=c*2,_=-1;n==="RGBA"?(f=0,u=c,m=c*2,_=c*3):n==="RGB"?(f=0,u=c,m=c*2):n==="RBG"&&(f=0,m=c,u=c*2);for(let b=0;b<s;b++)for(let w=0;w<i;w++){let v=(e.data[f++]-p[0])*l[0],y=(e.data[u++]-p[1])*l[1],k=(e.data[m++]-p[2])*l[2],S=_===-1?255:(e.data[_++]-p[3])*l[3];a.fillStyle="rgba("+v+","+y+","+k+","+S+")",a.fillRect(w,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},fp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let i,s,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],s=e.dims[1],n=e.dims[3]):(i=e.dims[3],s=e.dims[2],n=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,p,c;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=s*i;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let u=4,m=0,_=1,b=2,w=3,v=0,y=f,k=f*2,S=-1;o==="RGBA"?(v=0,y=f,k=f*2,S=f*3):o==="RGB"?(v=0,y=f,k=f*2):o==="RBG"&&(v=0,k=f,y=f*2),a=r.createImageData(i,s);for(let E=0;E<s*i;m+=u,_+=u,b+=u,w+=u,E++)a.data[m]=(e.data[v++]-c[0])*p[0],a.data[_]=(e.data[y++]-c[1])*p[1],a.data[b]=(e.data[k++]-c[2])*p[2],a.data[w]=S===-1?255:(e.data[S++]-c[3])*p[3]}else throw new Error("Can not access image data");return a}}),Ia,hp,mp,gp,_p,yp,Vg=le(()=>{Cn(),Ia=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,i=t.norm??{mean:255,bias:0},s,n;typeof i.mean=="number"?s=[i.mean,i.mean,i.mean,i.mean]:s=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?n=[i.bias,i.bias,i.bias,i.bias]:n=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*a,c=l==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),f=4,u=0,m=1,_=2,b=3,w=0,v=p,y=p*2,k=-1;o==="RGB"&&(f=3,u=0,m=1,_=2,b=-1),l==="RGBA"?k=p*3:l==="RBG"?(w=0,y=p,v=p*2):l==="BGR"&&(y=0,v=p,w=p*2);for(let S=0;S<p;S++,u+=f,_+=f,m+=f,b+=f)c[w++]=(e[u]+n[0])/s[0],c[v++]=(e[m]+n[1])/s[1],c[y++]=(e[_]+n[2])/s[2],k!==-1&&b!==-1&&(c[k++]=(e[b]+n[3])/s[3]);return l==="RGBA"?new zt("float32",c,[1,4,r,a]):new zt("float32",c,[1,3,r,a])},hp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=p(c);if(f!=null){let u=e.height,m=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(u=t.resizedHeight,m=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=u,o.width=m}else o.tensorFormat="RGBA",o.height=u,o.width=m;f.drawImage(e,0,0),n=f.getImageData(0,0,m,u).data}else throw new Error("Can not access image data")}else if(a){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=f,t!==void 0){let u=l();u.width=f,u.height=c;let m=p(u);if(m!=null)m.putImageData(e,0,0),n=m.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else n=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=p(c);if(f!=null){let u=e.height,m=e.width;return f.drawImage(e,0,0,m,u),n=f.getImageData(0,0,m,u).data,o.height=u,o.width=m,Ia(n,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,f)=>{let u=l(),m=p(u);if(!e||!m)return f();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{u.width=_.width,u.height=_.height,m.drawImage(_,0,0,u.width,u.height);let b=m.getImageData(0,0,u.width,u.height);o.height=u.height,o.width=u.width,c(Ia(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return Ia(n,o);throw new Error("Input data provided is not supported - aborted tensor creation")},mp=(e,t)=>{let{width:r,height:a,download:i,dispose:s}=t,n=[1,a,r,4];return new zt({location:"texture",type:"float32",texture:e,dims:n,download:i,dispose:s})},gp=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:s}=t;return new zt({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:i,dispose:s})},_p=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:s}=t;return new zt({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:i,dispose:s})},yp=(e,t,r)=>new zt({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),$r,sa,gi,bp,Lg=le(()=>{$r=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),sa=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),gi=!1,bp=()=>{if(!gi){gi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&($r.set("int64",BigInt64Array),sa.set(BigInt64Array,"int64")),t&&($r.set("uint64",BigUint64Array),sa.set(BigUint64Array,"uint64")),r?($r.set("float16",Float16Array),sa.set(Float16Array,"float16")):$r.set("float16",Uint16Array)}}}),$p,vp,Wg=le(()=>{Cn(),$p=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},vp=(e,t)=>{switch(e.location){case"cpu":return new zt(e.type,e.data,t);case"cpu-pinned":return new zt({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new zt({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new zt({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new zt({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),zt,Cn=le(()=>{Ug(),Vg(),Lg(),Wg(),zt=class{constructor(e,t,r){bp();let a,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,i=e.dims,e.location){case"cpu-pinned":{let n=$r.get(a);if(!n)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,o;if(typeof e=="string")if(a=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let l=$r.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?n=l.from(t,BigInt):n=l.from(t)}else if(t instanceof l)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${a} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")a="string",n=e;else if(l==="boolean")a="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",n=Uint8Array.from(e);else{let l=sa.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=l,n=e}if(o===void 0)o=[n.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=n,this.dataLocation="cpu"}let s=$p(i);if(this.cpuData&&s!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=i,this.size=s}static async fromImage(e,t){return hp(e,t)}static fromTexture(e,t){return mp(e,t)}static fromGpuBuffer(e,t){return gp(e,t)}static fromMLTensor(e,t){return _p(e,t)}static fromPinnedBuffer(e,t,r){return yp(e,t,r)}toDataURL(e){return cp(this,e)}toImageData(e){return fp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return vp(this,e)}}}),Ft,wp=le(()=>{Cn(),Ft=zt}),Ga,_i,jt,Vt,xp=le(()=>{pp(),Ga=(e,t)=>{(typeof Dt.trace>"u"?!Dt.wasm.trace:!Dt.trace)||console.timeStamp(`${e}::ORT::${t}`)},_i=(e,t)=>{var i;let r=((i=new Error().stack)==null?void 0:i.split(/\r\n|\r|\n/g))||[],a=!1;for(let s=0;s<r.length;s++){if(a&&!r[s].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Ga("CPU",n);return}r[s].includes("TRACE_FUNC")&&(a=!0)}},jt=e=>{(typeof Dt.trace>"u"?!Dt.wasm.trace:!Dt.trace)||_i("BEGIN",e)},Vt=e=>{(typeof Dt.trace>"u"?!Dt.wasm.trace:!Dt.trace)||_i("END",e)}}),kp,qg=le(()=>{up(),wp(),xp(),kp=class Sp{constructor(t){this.handler=t}async run(t,r,a){jt();let i={},s={};if(typeof t!="object"||t===null||t instanceof Ft||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ft)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);i[p]=null}if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let u=r[f];(u===null||u instanceof Ft)&&(p=!0,n=!1,i[f]=u)}if(p){if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(n)for(let p of this.outputNames)i[p]=null;let o=await this.handler.run(t,i,s),l={};for(let p in o)if(Object.hasOwnProperty.call(o,p)){let c=o[p];c instanceof Ft?l[p]=c:l[p]=new Ft(c.type,c.data,c.dims)}return Vt(),l}async release(){return this.handler.dispose()}static async create(t,r,a,i){jt();let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,u=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(u=t.byteLength-f,typeof a=="number"){if(u=a,!Number.isSafeInteger(u))throw new RangeError("'byteLength' must be an integer.");if(u<=0||f+u>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,f,u)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await lp(n),p=await o.createInferenceSessionHandler(s,l);return Vt(),new Sp(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Ep,Hg=le(()=>{qg(),Ep=kp}),Gg=le(()=>{}),Fg=le(()=>{}),jg=le(()=>{}),Kg=le(()=>{}),Qg={};fa(Qg,{InferenceSession:()=>Ep,TRACE:()=>Ga,TRACE_FUNC_BEGIN:()=>jt,TRACE_FUNC_END:()=>Vt,Tensor:()=>Ft,env:()=>at,registerBackend:()=>Nr});var Lt=le(()=>{Bg(),Pg(),Hg(),wp(),Gg(),Fg(),xp(),jg(),Kg()}),zn=le(()=>{}),Tp={};fa(Tp,{default:()=>Ip});var yi,bi,Ip,Zg=le(()=>{var e;Oh(),Er(),An(),yi="ort-wasm-proxy-worker",bi=((e=globalThis.self)==null?void 0:e.name)===yi,bi&&(self.onmessage=t=>{let{type:r,in:a}=t.data;try{switch(r){case"init-wasm":On(a.wasm).then(()=>{Zn(a).then(()=>{postMessage({type:r})},i=>{postMessage({type:r,err:i})})},i=>{postMessage({type:r,err:i})});break;case"init-ep":{let{epName:i,env:s}=a;Yn(s,i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})});break}case"copy-from":{let{buffer:i}=a,s=Ya(i);postMessage({type:r,out:s});break}case"create":{let{model:i,options:s}=a;Xn(i,s).then(n=>{postMessage({type:r,out:n})},n=>{postMessage({type:r,err:n})});break}case"release":Jn(a),postMessage({type:r});break;case"run":{let{sessionId:i,inputIndices:s,inputs:n,outputIndices:o,options:l}=a;es(i,s,n,o,new Array(o.length).fill(null),l).then(p=>{p.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},rs([...n,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":ts(a),postMessage({type:r});break;default:}}catch(i){postMessage({type:r,err:i})}}),Ip=bi?null:t=>new Worker(t??Ct,{type:"module",name:yi})}),Cp={};fa(Cp,{default:()=>zp});var $i,vi,zp,Yg=le(()=>{var e;vi=($i=import.meta.url,async function(t={}){function r(){return O.buffer!=J.buffer&&_e(),J}function a(){return O.buffer!=J.buffer&&_e(),oe}function i(){return O.buffer!=J.buffer&&_e(),se}function s(){return O.buffer!=J.buffer&&_e(),F}function n(){return O.buffer!=J.buffer&&_e(),ie}function o(){return O.buffer!=J.buffer&&_e(),ee}function l(){return O.buffer!=J.buffer&&_e(),L}function p(){return O.buffer!=J.buffer&&_e(),$e}var c,f,u=Object.assign({},t),m=new Promise((d,h)=>{c=d,f=h}),_=typeof window=="object",b=typeof importScripts=="function",w=b&&self.name=="em-pthread";u.mountExternalData=(d,h)=>{d.startsWith("./")&&(d=d.substring(2)),(u.Fb||(u.Fb=new Map)).set(d,h)},u.unmountExternalData=()=>{delete u.Fb};var v=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let y=()=>{let d=(g,$,x)=>(...z)=>{let Q=qt,re=$==null?void 0:$();z=g(...z);let ue=$==null?void 0:$();return re!==ue&&(g=ue,x(re),$=x=null),qt!=Q?new Promise((pe,Ee)=>{si={resolve:pe,reject:Ee}}):z},h=g=>async(...$)=>{var x;try{if(u.Gb)throw Error("Session already started");let z=u.Gb={hc:$[0],errors:[]},Q=await g(...$);if(u.Gb!==z)throw Error("Session mismatch");(x=u.Hb)==null||x.flush();let re=z.errors;if(0<re.length){let ue=await Promise.all(re);if(ue=ue.filter(pe=>pe),0<ue.length)throw Error(ue.join(`
`))}return Q}finally{u.Gb=null}};u._OrtCreateSession=d(u._OrtCreateSession,()=>u._OrtCreateSession,g=>u._OrtCreateSession=g),u._OrtRun=h(d(u._OrtRun,()=>u._OrtRun,g=>u._OrtRun=g)),u._OrtRunWithBinding=h(d(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,g=>u._OrtRunWithBinding=g)),u._OrtBindInput=d(u._OrtBindInput,()=>u._OrtBindInput,g=>u._OrtBindInput=g),y=void 0};u.jsepInit=(d,h)=>{if(y==null||y(),d==="webgpu"){[u.Hb,u.Vb,u.Zb,u.Ob,u.Yb,u.kb,u.$b,u.cc,u.Wb,u.Xb,u.ac]=h;let g=u.Hb;u.jsepRegisterBuffer=($,x,z,Q)=>g.registerBuffer($,x,z,Q),u.jsepGetBuffer=$=>g.getBuffer($),u.jsepCreateDownloader=($,x,z)=>g.createDownloader($,x,z),u.jsepOnCreateSession=$=>{g.onCreateSession($)},u.jsepOnReleaseSession=$=>{g.onReleaseSession($)},u.jsepOnRunStart=$=>g.onRunStart($),u.dc=($,x)=>{g.upload($,x)}}else if(d==="webnn"){[u.Hb,u.bc,u.Pb,u.jsepEnsureTensor,u.ec,u.jsepDownloadTensor]=h,u.jsepReleaseTensorId=u.Pb;let g=u.Hb;u.jsepOnRunStart=$=>g.onRunStart($),u.jsepRegisterMLContext=($,x)=>{g.registerMLContext($,x)},u.jsepOnReleaseSession=$=>{g.onReleaseSession($)},u.jsepCreateMLTensorDownloader=($,x)=>g.createMLTensorDownloader($,x),u.jsepRegisterMLTensor=($,x,z)=>g.registerMLTensor($,x,z),u.jsepCreateMLContext=$=>g.createMLContext($),u.jsepRegisterMLConstant=($,x,z,Q,re)=>g.registerMLConstant($,x,z,Q,re,u.Fb)}};var k,S,E=Object.assign({},u),T=(d,h)=>{throw h},I="";(_||b)&&(b?I=self.location.href:typeof document<"u"&&document.currentScript&&(I=document.currentScript.src),$i&&(I=$i),I=I.startsWith("blob:")?"":I.substr(0,I.replace(/[?#].*/,"").lastIndexOf("/")+1),b&&(S=d=>{var h=new XMLHttpRequest;return h.open("GET",d,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),k=(d,h,g)=>{var $=new XMLHttpRequest;$.open("GET",d,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?h($.response):g()},$.onerror=g,$.send(null)});var D,R=console.log.bind(console),W=console.error.bind(console),ne=R,X=W;if(Object.assign(u,E),E=null,w){let d=function(h){try{var g=h.data,$=g.cmd;if($==="load"){let x=[];self.onmessage=z=>x.push(z),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let z of x)d(z);self.onmessage=d};for(let z of g.handlers)u[z]&&!u[z].proxy||(u[z]=(...Q)=>{postMessage({Nb:"callHandler",pc:z,args:Q})},z=="print"&&(ne=u[z]),z=="printErr"&&(X=u[z]));O=g.wasmMemory,_e(),K(g.wasmModule)}else if($==="run"){di(g.pthread_ptr,0,0,1,0,0),ii(g.pthread_ptr),Ir(),cr(),U||(Zs(),U=!0);try{ha(g.start_routine,g.arg)}catch(x){if(x!="unwind")throw x}}else $==="cancel"?Dr()&&Ea(-1):g.target!=="setimmediate"&&($==="checkMailbox"?U&&ga():$&&(X(`worker: received unknown command ${$}`),X(g)))}catch(x){throw Ys(),x}};var K,U=!1;X=function(...h){h=h.join(" "),console.error(h)},self.alert=function(...h){postMessage({Nb:"alert",text:h.join(" "),rc:Dr()})},u.instantiateWasm=(h,g)=>new Promise($=>{K=x=>{x=new WebAssembly.Instance(x,ft()),g(x),$()}}),self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=d}u.wasmBinary&&(D=u.wasmBinary);var O,V,Y,J,oe,se,F,ie,ee,L,B,H,$e,ve=!1;function _e(){var d=O.buffer;u.HEAP8=J=new Int8Array(d),u.HEAP16=se=new Int16Array(d),u.HEAPU8=oe=new Uint8Array(d),u.HEAPU16=F=new Uint16Array(d),u.HEAP32=ie=new Int32Array(d),u.HEAPU32=ee=new Uint32Array(d),u.HEAPF32=L=new Float32Array(d),u.HEAPF64=$e=new Float64Array(d),u.HEAP64=B=new BigInt64Array(d),u.HEAPU64=H=new BigUint64Array(d)}if(!w){if(!((O=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof v))throw X("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");_e()}var be=[],Ue=[],ke=[],we=0,Ge=null;function it(){if(--we==0&&Ge){var d=Ge;Ge=null,d()}}function Ve(d){throw X(d="Aborted("+d+")"),ve=!0,Y=1,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),f(d),d}var et,_t=d=>d.startsWith("data:application/octet-stream;base64,"),tt=d=>d.startsWith("file://");function Rt(d){if(d==et&&D)return new Uint8Array(D);if(S)return S(d);throw"both async and sync fetching of the wasm failed"}function kt(d,h,g){return function($){if(!D&&(_||b)){if(typeof fetch=="function"&&!tt($))return fetch($,{credentials:"same-origin"}).then(x=>{if(!x.ok)throw`failed to load wasm binary file at '${$}'`;return x.arrayBuffer()}).catch(()=>Rt($));if(k)return new Promise((x,z)=>{k($,Q=>x(new Uint8Array(Q)),z)})}return Promise.resolve().then(()=>Rt($))}(d).then($=>WebAssembly.instantiate($,h)).then(g,$=>{X(`failed to asynchronously prepare wasm: ${$}`),Ve($)})}function ft(){return{a:{O:Xe,Aa:Re,b:ma,aa:as,B:ss,qa:os,Y:us,_:ds,ra:ps,oa:cs,ha:fs,na:hs,L:ms,Z:gs,W:_s,pa:ys,X:bs,va:Hh,F:Gh,Q:Fh,P:Kh,E:Zh,u:Yh,q:Xh,G:Jh,A:sm,R:om,ua:lm,ka:um,U:dm,ba:pm,H:cm,ja:ii,ta:fm,t:hm,Ba:mm,x:ym,o:bm,m:vm,c:ri,n:wm,k:Sm,w:Em,p:Tm,f:Im,s:Cm,l:zm,e:Am,j:Om,i:Dm,g:Rm,d:Nm,ea:Bm,fa:Mm,ga:Pm,ca:Ds,da:Rs,T:Um,h:Vm,D:Lm,I:Wm,M:qm,y:Hm,sa:Gm,V:Fm,v:Bs,z:jm,N:Km,S:Qm,za:Zm,ya:Ym,la:Us,ma:Vs,$:Pe,C:Ls,K:Ws,ia:qs,J:Hs,a:O,xa:Kt,wa:js,r:eg}}}var xe={916868:(d,h,g,$,x)=>{if(u===void 0||!u.Fb)return 1;if((d=dt(Number(d>>>0))).startsWith("./")&&(d=d.substring(2)),!(d=u.Fb.get(d)))return 2;if(h=Number(h>>>0),g=Number(g>>>0),$=Number($>>>0),h+g>d.byteLength)return 3;try{let z=d.subarray(h,h+g);switch(x){case 0:a().set(z,$>>>0);break;case 1:u.dc($,z);break;default:return 4}return 0}catch{return 4}},917583:(d,h,g)=>{u.ec(d,a().subarray(h>>>0,h+g>>>0))},917646:()=>u.bc(),917687:d=>{u.Pb(d)},917723:()=>{u.Wb()},917754:()=>{u.Xb()},917783:()=>{u.ac()},917808:d=>u.Vb(d),917841:d=>u.Zb(d),917873:(d,h,g)=>{u.Ob(Number(d),Number(h),Number(g),!0)},917936:(d,h,g)=>{u.Ob(Number(d),Number(h),Number(g))},917993:()=>typeof wasmOffsetConverter<"u",918050:d=>{u.kb("Abs",d,void 0)},918101:d=>{u.kb("Neg",d,void 0)},918152:d=>{u.kb("Floor",d,void 0)},918205:d=>{u.kb("Ceil",d,void 0)},918257:d=>{u.kb("Reciprocal",d,void 0)},918315:d=>{u.kb("Sqrt",d,void 0)},918367:d=>{u.kb("Exp",d,void 0)},918418:d=>{u.kb("Erf",d,void 0)},918469:d=>{u.kb("Sigmoid",d,void 0)},918524:(d,h,g)=>{u.kb("HardSigmoid",d,{alpha:h,beta:g})},918603:d=>{u.kb("Log",d,void 0)},918654:d=>{u.kb("Sin",d,void 0)},918705:d=>{u.kb("Cos",d,void 0)},918756:d=>{u.kb("Tan",d,void 0)},918807:d=>{u.kb("Asin",d,void 0)},918859:d=>{u.kb("Acos",d,void 0)},918911:d=>{u.kb("Atan",d,void 0)},918963:d=>{u.kb("Sinh",d,void 0)},919015:d=>{u.kb("Cosh",d,void 0)},919067:d=>{u.kb("Asinh",d,void 0)},919120:d=>{u.kb("Acosh",d,void 0)},919173:d=>{u.kb("Atanh",d,void 0)},919226:d=>{u.kb("Tanh",d,void 0)},919278:d=>{u.kb("Not",d,void 0)},919329:(d,h,g)=>{u.kb("Clip",d,{min:h,max:g})},919398:d=>{u.kb("Clip",d,void 0)},919450:(d,h)=>{u.kb("Elu",d,{alpha:h})},919508:d=>{u.kb("Gelu",d,void 0)},919560:d=>{u.kb("Relu",d,void 0)},919612:(d,h)=>{u.kb("LeakyRelu",d,{alpha:h})},919676:(d,h)=>{u.kb("ThresholdedRelu",d,{alpha:h})},919746:(d,h)=>{u.kb("Cast",d,{to:h})},919804:d=>{u.kb("Add",d,void 0)},919855:d=>{u.kb("Sub",d,void 0)},919906:d=>{u.kb("Mul",d,void 0)},919957:d=>{u.kb("Div",d,void 0)},920008:d=>{u.kb("Pow",d,void 0)},920059:d=>{u.kb("Equal",d,void 0)},920112:d=>{u.kb("Greater",d,void 0)},920167:d=>{u.kb("GreaterOrEqual",d,void 0)},920229:d=>{u.kb("Less",d,void 0)},920281:d=>{u.kb("LessOrEqual",d,void 0)},920340:(d,h,g,$,x)=>{u.kb("ReduceMean",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},920515:(d,h,g,$,x)=>{u.kb("ReduceMax",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},920689:(d,h,g,$,x)=>{u.kb("ReduceMin",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},920863:(d,h,g,$,x)=>{u.kb("ReduceProd",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921038:(d,h,g,$,x)=>{u.kb("ReduceSum",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921212:(d,h,g,$,x)=>{u.kb("ReduceL1",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921385:(d,h,g,$,x)=>{u.kb("ReduceL2",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921558:(d,h,g,$,x)=>{u.kb("ReduceLogSum",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921735:(d,h,g,$,x)=>{u.kb("ReduceSumSquare",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},921915:(d,h,g,$,x)=>{u.kb("ReduceLogSumExp",d,{keepDims:!!h,noopWithEmptyAxes:!!g,axes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},922095:d=>{u.kb("Where",d,void 0)},922148:(d,h,g)=>{u.kb("Transpose",d,{perm:h?Array.from(n().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},922272:(d,h,g,$)=>{u.kb("DepthToSpace",d,{blocksize:h,mode:dt(g),format:$?"NHWC":"NCHW"})},922405:(d,h,g,$)=>{u.kb("DepthToSpace",d,{blocksize:h,mode:dt(g),format:$?"NHWC":"NCHW"})},922538:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j,Le)=>{u.kb("ConvTranspose",d,{format:ue?"NHWC":"NCHW",autoPad:h,dilations:[g],group:$,kernelShape:[x],pads:[z,Q],strides:[re],wIsConst:()=>!!r()[pe>>>0],outputPadding:Ee?Array.from(n().subarray(Number(Ee)>>>0,Number(We)>>>0)):[],outputShape:je?Array.from(n().subarray(Number(je)>>>0,Number(j)>>>0)):[],activation:dt(Le)})},922971:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j)=>{u.kb("ConvTranspose",d,{format:re?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:$,kernelShape:Array.from(n().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(n().subarray(Number(z)>>>0,4+(Number(z)>>>0)>>>0)),strides:Array.from(n().subarray(Number(Q)>>>0,2+(Number(Q)>>>0)>>>0)),wIsConst:()=>!!r()[ue>>>0],outputPadding:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],outputShape:We?Array.from(n().subarray(Number(We)>>>0,Number(je)>>>0)):[],activation:dt(j)})},923632:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j,Le)=>{u.kb("ConvTranspose",d,{format:ue?"NHWC":"NCHW",autoPad:h,dilations:[g],group:$,kernelShape:[x],pads:[z,Q],strides:[re],wIsConst:()=>!!r()[pe>>>0],outputPadding:Ee?Array.from(n().subarray(Number(Ee)>>>0,Number(We)>>>0)):[],outputShape:je?Array.from(n().subarray(Number(je)>>>0,Number(j)>>>0)):[],activation:dt(Le)})},924065:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j)=>{u.kb("ConvTranspose",d,{format:re?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:$,kernelShape:Array.from(n().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(n().subarray(Number(z)>>>0,4+(Number(z)>>>0)>>>0)),strides:Array.from(n().subarray(Number(Q)>>>0,2+(Number(Q)>>>0)>>>0)),wIsConst:()=>!!r()[ue>>>0],outputPadding:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],outputShape:We?Array.from(n().subarray(Number(We)>>>0,Number(je)>>>0)):[],activation:dt(j)})},924726:(d,h)=>{u.kb("GlobalAveragePool",d,{format:h?"NHWC":"NCHW"})},924817:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j)=>{u.kb("AveragePool",d,{format:j?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:z?Array.from(n().subarray(Number(z)>>>0,Number(Q)>>>0)):[],kernel_shape:re?Array.from(n().subarray(Number(re)>>>0,Number(ue)>>>0)):[],pads:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],strides:We?Array.from(n().subarray(Number(We)>>>0,Number(je)>>>0)):[]})},925296:(d,h)=>{u.kb("GlobalAveragePool",d,{format:h?"NHWC":"NCHW"})},925387:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j)=>{u.kb("AveragePool",d,{format:j?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:z?Array.from(n().subarray(Number(z)>>>0,Number(Q)>>>0)):[],kernel_shape:re?Array.from(n().subarray(Number(re)>>>0,Number(ue)>>>0)):[],pads:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],strides:We?Array.from(n().subarray(Number(We)>>>0,Number(je)>>>0)):[]})},925866:(d,h)=>{u.kb("GlobalMaxPool",d,{format:h?"NHWC":"NCHW"})},925953:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j)=>{u.kb("MaxPool",d,{format:j?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:z?Array.from(n().subarray(Number(z)>>>0,Number(Q)>>>0)):[],kernel_shape:re?Array.from(n().subarray(Number(re)>>>0,Number(ue)>>>0)):[],pads:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],strides:We?Array.from(n().subarray(Number(We)>>>0,Number(je)>>>0)):[]})},926428:(d,h)=>{u.kb("GlobalMaxPool",d,{format:h?"NHWC":"NCHW"})},926515:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j)=>{u.kb("MaxPool",d,{format:j?"NHWC":"NCHW",auto_pad:h,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:z?Array.from(n().subarray(Number(z)>>>0,Number(Q)>>>0)):[],kernel_shape:re?Array.from(n().subarray(Number(re)>>>0,Number(ue)>>>0)):[],pads:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],strides:We?Array.from(n().subarray(Number(We)>>>0,Number(je)>>>0)):[]})},926990:(d,h,g,$,x)=>{u.kb("Gemm",d,{alpha:h,beta:g,transA:$,transB:x})},927094:d=>{u.kb("MatMul",d,void 0)},927148:(d,h,g,$)=>{u.kb("ArgMax",d,{keepDims:!!h,selectLastIndex:!!g,axis:$})},927256:(d,h,g,$)=>{u.kb("ArgMin",d,{keepDims:!!h,selectLastIndex:!!g,axis:$})},927364:(d,h)=>{u.kb("Softmax",d,{axis:h})},927427:(d,h)=>{u.kb("Concat",d,{axis:h})},927487:(d,h,g,$,x)=>{u.kb("Split",d,{axis:h,numOutputs:g,splitSizes:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},927643:d=>{u.kb("Expand",d,void 0)},927697:(d,h)=>{u.kb("Gather",d,{axis:Number(h)})},927768:(d,h)=>{u.kb("GatherElements",d,{axis:Number(h)})},927847:(d,h)=>{u.kb("GatherND",d,{batch_dims:Number(h)})},927926:(d,h,g,$,x,z,Q,re,ue,pe,Ee)=>{u.kb("Resize",d,{antialias:h,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[],coordinateTransformMode:dt(x),cubicCoeffA:z,excludeOutside:Q,extrapolationValue:re,keepAspectRatioPolicy:dt(ue),mode:dt(pe),nearestMode:dt(Ee)})},928288:(d,h,g,$,x,z,Q)=>{u.kb("Slice",d,{starts:h?Array.from(n().subarray(Number(h)>>>0,Number(g)>>>0)):[],ends:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[],axes:z?Array.from(n().subarray(Number(z)>>>0,Number(Q)>>>0)):[]})},928552:d=>{u.kb("Tile",d,void 0)},928604:(d,h,g)=>{u.kb("InstanceNormalization",d,{epsilon:h,format:g?"NHWC":"NCHW"})},928718:(d,h,g)=>{u.kb("InstanceNormalization",d,{epsilon:h,format:g?"NHWC":"NCHW"})},928832:d=>{u.kb("Range",d,void 0)},928885:(d,h)=>{u.kb("Einsum",d,{equation:dt(h)})},928966:(d,h,g,$,x)=>{u.kb("Pad",d,{mode:h,value:g,pads:$?Array.from(n().subarray(Number($)>>>0,Number(x)>>>0)):[]})},929109:(d,h,g,$,x,z)=>{u.kb("BatchNormalization",d,{epsilon:h,momentum:g,spatial:!!x,trainingMode:!!$,format:z?"NHWC":"NCHW"})},929278:(d,h,g,$,x,z)=>{u.kb("BatchNormalization",d,{epsilon:h,momentum:g,spatial:!!x,trainingMode:!!$,format:z?"NHWC":"NCHW"})},929447:(d,h,g)=>{u.kb("CumSum",d,{exclusive:Number(h),reverse:Number(g)})},929544:(d,h,g)=>{u.kb("DequantizeLinear",d,{axis:h,blockSize:g})},929634:(d,h,g,$,x)=>{u.kb("GridSample",d,{align_corners:h,mode:dt(g),padding_mode:dt($),format:x?"NHWC":"NCHW"})},929804:(d,h,g,$,x)=>{u.kb("GridSample",d,{align_corners:h,mode:dt(g),padding_mode:dt($),format:x?"NHWC":"NCHW"})},929974:(d,h,g,$,x,z,Q,re,ue)=>{u.kb("Attention",d,{numHeads:h,isUnidirectional:g,maskFilterValue:$,scale:x,doRotary:z,qkvHiddenSizes:Q?Array.from(n().subarray(Number(re)>>>0,Number(re)+Q>>>0)):[],pastPresentShareBuffer:!!ue})},930246:d=>{u.kb("BiasAdd",d,void 0)},930301:d=>{u.kb("BiasSplitGelu",d,void 0)},930362:d=>{u.kb("FastGelu",d,void 0)},930418:(d,h,g,$,x,z,Q,re,ue,pe,Ee,We,je,j,Le,lt)=>{u.kb("Conv",d,{format:We?"NHWC":"NCHW",auto_pad:h,dilations:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[],group:x,kernel_shape:z?Array.from(n().subarray(Number(z)>>>0,Number(Q)>>>0)):[],pads:re?Array.from(n().subarray(Number(re)>>>0,Number(ue)>>>0)):[],strides:pe?Array.from(n().subarray(Number(pe)>>>0,Number(Ee)>>>0)):[],w_is_const:()=>!!r()[Number(je)>>>0],activation:dt(j),activation_params:Le?Array.from(l().subarray(Number(Le)>>>0,Number(lt)>>>0)):[]})},931002:d=>{u.kb("Gelu",d,void 0)},931054:(d,h,g,$,x,z,Q,re,ue)=>{u.kb("GroupQueryAttention",d,{numHeads:h,kvNumHeads:g,scale:$,softcap:x,doRotary:z,rotaryInterleaved:Q,smoothSoftmax:re,localWindowSize:ue})},931271:(d,h,g,$)=>{u.kb("LayerNormalization",d,{axis:h,epsilon:g,simplified:!!$})},931382:(d,h,g,$)=>{u.kb("LayerNormalization",d,{axis:h,epsilon:g,simplified:!!$})},931493:(d,h,g,$,x,z)=>{u.kb("MatMulNBits",d,{k:h,n:g,accuracyLevel:$,bits:x,blockSize:z})},931620:(d,h,g,$,x,z)=>{u.kb("MultiHeadAttention",d,{numHeads:h,isUnidirectional:g,maskFilterValue:$,scale:x,doRotary:z})},931779:(d,h)=>{u.kb("QuickGelu",d,{alpha:h})},931843:(d,h,g,$,x)=>{u.kb("RotaryEmbedding",d,{interleaved:!!h,numHeads:g,rotaryEmbeddingDim:$,scale:x})},931982:(d,h,g)=>{u.kb("SkipLayerNormalization",d,{epsilon:h,simplified:!!g})},932084:(d,h,g)=>{u.kb("SkipLayerNormalization",d,{epsilon:h,simplified:!!g})},932186:(d,h,g,$)=>{u.kb("GatherBlockQuantized",d,{gatherAxis:h,quantizeAxis:g,blockSize:$})},932307:d=>{u.$b(d)},932341:(d,h)=>u.cc(Number(d),Number(h),u.Gb.hc,u.Gb.errors)};function Re(d,h,g){return Is(async()=>{await u.Yb(Number(d),Number(h),Number(g))})}function Xe(){return typeof wasmOffsetConverter<"u"}function nt(d){this.name="ExitStatus",this.message=`Program terminated with exit(${d})`,this.status=d}var vt=d=>{d.terminate(),d.onmessage=()=>{}},ot=d=>{Je.length==0&&(fr(),Qr(Je[0]));var h=Je.pop();if(!h)return 6;rt.push(h),ht[d.Bb]=h,h.Bb=d.Bb;var g={cmd:"run",start_routine:d.ic,arg:d.Rb,pthread_ptr:d.Bb};return h.postMessage(g,d.nc),0},Et=0,qe=(d,h,...g)=>{for(var $=2*g.length,x=fi(),z=ci(8*$),Q=z>>>3,re=0;re<g.length;re++){var ue=g[re];typeof ue=="bigint"?(B[Q+2*re]=1n,B[Q+2*re+1]=ue):(B[Q+2*re]=0n,p()[Q+2*re+1>>>0]=ue)}return d=Xs(d,0,$,z,h),Ta(x),d};function Kt(d){if(w)return qe(0,1,d);if(Y=d,!(0<Et)){for(var h of rt)vt(h);for(h of Je)vt(h);Je=[],rt=[],ht=[],ve=!0}T(0,new nt(d))}function me(d){if(w)return qe(1,0,d);Pe(d)}var Pe=d=>{if(Y=d,w)throw me(d),"unwind";Kt(d)},Je=[],rt=[],Tt=[],ht={},Qt=d=>{var h=d.Bb;delete ht[h],Je.push(d),rt.splice(rt.indexOf(d),1),d.Bb=0,pi(h)};function cr(){Tt.forEach(d=>d())}var Qr=d=>new Promise(h=>{d.onmessage=x=>{var z=(x=x.data).cmd;if(x.targetThread&&x.targetThread!=Dr()){var Q=ht[x.targetThread];Q?Q.postMessage(x,x.transferList):X(`Internal error! Worker sent a message "${z}" to target pthread ${x.targetThread}, but that thread no longer exists!`)}else z==="checkMailbox"?ga():z==="spawnThread"?ot(x):z==="cleanupThread"?Qt(ht[x.thread]):z==="killThread"?(x=x.thread,z=ht[x],delete ht[x],vt(z),pi(x),rt.splice(rt.indexOf(z),1),z.Bb=0):z==="cancelThread"?ht[x.thread].postMessage({cmd:"cancel"}):z==="loaded"?(d.loaded=!0,h(d)):z==="alert"?alert(`Thread ${x.threadId}: ${x.text}`):x.target==="setimmediate"?d.postMessage(x):z==="callHandler"?u[x.handler](...x.args):z&&X(`worker sent an unknown command ${z}`)},d.onerror=x=>{throw X(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,$=[];for(g of[])u.hasOwnProperty(g)&&$.push(g);d.postMessage({cmd:"load",handlers:$,wasmMemory:O,wasmModule:V})});function fr(){var d=new Worker(import.meta.url.startsWith("file:")?new URL(""+new URL("../assets/ort.bundle.min.D2-GKZ-g.mjs",import.meta.url).href,import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});Je.push(d)}var hr=d=>{for(;0<d.length;)d.shift()(u)},Ir=()=>{var d=Dr(),h=o()[d+52>>>2>>>0];d=o()[d+56>>>2>>>0],eo(h,h-d),Ta(h)},ha=(d,h)=>{Et=0,d=to(d,h),0<Et?Y=d:Ea(d)};class Cr{constructor(h){this.Kb=h-24}}function ma(d,h,g){var $=new Cr(d>>>=0);throw h>>>=0,g>>>=0,o()[$.Kb+16>>>2>>>0]=0,o()[$.Kb+4>>>2>>>0]=h,o()[$.Kb+8>>>2>>>0]=g,d}function zr(d,h,g,$){return w?qe(2,1,d,h,g,$):as(d,h,g,$)}function as(d,h,g,$){if(d>>>=0,h>>>=0,g>>>=0,$>>>=0,v===void 0)return X("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var x=[];return w&&x.length===0?zr(d,h,g,$):(d={ic:g,Bb:d,Rb:$,nc:x},w?(d.Nb="spawnThread",postMessage(d,x),0):ot(d))}var is=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,ns=(d,h,g)=>{var $=(h>>>=0)+g;for(g=h;d[g]&&!(g>=$);)++g;if(16<g-h&&d.buffer&&is)return is.decode(d.buffer instanceof v?d.slice(h,g):d.subarray(h,g));for($="";h<g;){var x=d[h++];if(128&x){var z=63&d[h++];if((224&x)==192)$+=String.fromCharCode((31&x)<<6|z);else{var Q=63&d[h++];65536>(x=(240&x)==224?(15&x)<<12|z<<6|Q:(7&x)<<18|z<<12|Q<<6|63&d[h++])?$+=String.fromCharCode(x):(x-=65536,$+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else $+=String.fromCharCode(x)}return $},dt=(d,h)=>(d>>>=0)?ns(a(),d,h):"";function ss(d,h,g){return w?qe(3,1,d,h,g):0}function os(d,h){if(w)return qe(4,1,d,h)}var Xa=d=>{for(var h=0,g=0;g<d.length;++g){var $=d.charCodeAt(g);127>=$?h++:2047>=$?h+=2:55296<=$&&57343>=$?(h+=4,++g):h+=3}return h},ls=(d,h,g,$)=>{if(!(0<$))return 0;var x=g>>>=0;$=g+$-1;for(var z=0;z<d.length;++z){var Q=d.charCodeAt(z);if(55296<=Q&&57343>=Q&&(Q=65536+((1023&Q)<<10)|1023&d.charCodeAt(++z)),127>=Q){if(g>=$)break;h[g++>>>0]=Q}else{if(2047>=Q){if(g+1>=$)break;h[g++>>>0]=192|Q>>6}else{if(65535>=Q){if(g+2>=$)break;h[g++>>>0]=224|Q>>12}else{if(g+3>=$)break;h[g++>>>0]=240|Q>>18,h[g++>>>0]=128|Q>>12&63}h[g++>>>0]=128|Q>>6&63}h[g++>>>0]=128|63&Q}}return h[g>>>0]=0,g-x},Ar=(d,h,g)=>ls(d,a(),h,g);function us(d,h){if(w)return qe(5,1,d,h)}function ds(d,h,g){if(w)return qe(6,1,d,h,g)}function ps(d,h,g){return w?qe(7,1,d,h,g):0}function cs(d,h){if(w)return qe(8,1,d,h)}function fs(d,h,g){if(w)return qe(9,1,d,h,g)}function hs(d,h,g,$){if(w)return qe(10,1,d,h,g,$)}function ms(d,h,g,$){if(w)return qe(11,1,d,h,g,$)}function gs(d,h,g,$){if(w)return qe(12,1,d,h,g,$)}function _s(d){if(w)return qe(13,1,d)}function ys(d,h){if(w)return qe(14,1,d,h)}function bs(d,h,g){if(w)return qe(15,1,d,h,g)}var $s,tr,Hh=()=>{Ve("")},Wt=d=>{for(var h="";a()[d>>>0];)h+=$s[a()[d++>>>0]];return h},Ja={},ei={};function Zt(d,h,g={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function($,x,z={}){var Q=x.name;if(!$)throw new tr(`type "${Q}" must have a positive integer typeid pointer`);if(ei.hasOwnProperty($)){if(z.Tb)return;throw new tr(`Cannot register type '${Q}' twice`)}ei[$]=x,Ja.hasOwnProperty($)&&(x=Ja[$],delete Ja[$],x.forEach(re=>re()))}(d,h,g)}var vs=(d,h,g)=>{switch(h){case 1:return g?$=>r()[$>>>0]:$=>a()[$>>>0];case 2:return g?$=>i()[$>>>1>>>0]:$=>s()[$>>>1>>>0];case 4:return g?$=>n()[$>>>2>>>0]:$=>o()[$>>>2>>>0];case 8:return g?$=>B[$>>>3]:$=>H[$>>>3];default:throw new TypeError(`invalid integer width (${h}): ${d}`)}};function Gh(d,h,g){g>>>=0,Zt(d>>>=0,{name:h=Wt(h>>>0),fromWireType:$=>$,toWireType:function($,x){if(typeof x!="bigint"&&typeof x!="number")throw x=x===null?"null":($=typeof x)=="object"||$==="array"||$==="function"?x.toString():""+x,new TypeError(`Cannot convert "${x}" to ${this.name}`);return typeof x=="number"&&(x=BigInt(x)),x},argPackAdvance:rr,readValueFromPointer:vs(h,g,h.indexOf("u")==-1),Eb:null})}var rr=8;function Fh(d,h,g,$){Zt(d>>>=0,{name:h=Wt(h>>>0),fromWireType:function(x){return!!x},toWireType:function(x,z){return z?g:$},argPackAdvance:rr,readValueFromPointer:function(x){return this.fromWireType(a()[x>>>0])},Eb:null})}var ti=[],Yt=[];function ri(d){9<(d>>>=0)&&--Yt[d+1]==0&&(Yt[d]=void 0,ti.push(d))}var It=d=>{if(!d)throw new tr("Cannot use deleted val. handle = "+d);return Yt[d]},Ot=d=>{switch(d){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=ti.pop()||Yt.length;return Yt[h]=d,Yt[h+1]=1,h}};function ai(d){return this.fromWireType(o()[d>>>2>>>0])}var jh={name:"emscripten::val",fromWireType:d=>{var h=It(d);return ri(d),h},toWireType:(d,h)=>Ot(h),argPackAdvance:rr,readValueFromPointer:ai,Eb:null};function Kh(d){return Zt(d>>>0,jh)}var Qh=(d,h)=>{switch(h){case 4:return function(g){return this.fromWireType(l()[g>>>2>>>0])};case 8:return function(g){return this.fromWireType(p()[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${d}`)}};function Zh(d,h,g){g>>>=0,Zt(d>>>=0,{name:h=Wt(h>>>0),fromWireType:$=>$,toWireType:($,x)=>x,argPackAdvance:rr,readValueFromPointer:Qh(h,g),Eb:null})}function Yh(d,h,g,$,x){if(d>>>=0,g>>>=0,h=Wt(h>>>0),x===-1&&(x=4294967295),x=re=>re,$===0){var z=32-8*g;x=re=>re<<z>>>z}var Q=h.includes("unsigned")?function(re,ue){return ue>>>0}:function(re,ue){return ue};Zt(d,{name:h,fromWireType:x,toWireType:Q,argPackAdvance:rr,readValueFromPointer:vs(h,g,$!==0),Eb:null})}function Xh(d,h,g){function $(z){var Q=o()[z>>>2>>>0];return z=o()[z+4>>>2>>>0],new x(r().buffer,z,Q)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];Zt(d>>>=0,{name:g=Wt(g>>>0),fromWireType:$,argPackAdvance:rr,readValueFromPointer:$},{Tb:!0})}function Jh(d,h){d>>>=0;var g=(h=Wt(h>>>0))==="std::string";Zt(d,{name:h,fromWireType:function($){var x=o()[$>>>2>>>0],z=$+4;if(g)for(var Q=z,re=0;re<=x;++re){var ue=z+re;if(re==x||a()[ue>>>0]==0){if(Q=dt(Q,ue-Q),pe===void 0)var pe=Q;else pe+="\0",pe+=Q;Q=ue+1}}else{for(pe=Array(x),re=0;re<x;++re)pe[re]=String.fromCharCode(a()[z+re>>>0]);pe=pe.join("")}return Ht($),pe},toWireType:function($,x){x instanceof ArrayBuffer&&(x=new Uint8Array(x));var z=typeof x=="string";if(!(z||x instanceof Uint8Array||x instanceof Uint8ClampedArray||x instanceof Int8Array))throw new tr("Cannot pass non-string to std::string");var Q=g&&z?Xa(x):x.length,re=Sa(4+Q+1),ue=re+4;if(o()[re>>>2>>>0]=Q,g&&z)Ar(x,ue,Q+1);else if(z)for(z=0;z<Q;++z){var pe=x.charCodeAt(z);if(255<pe)throw Ht(ue),new tr("String has UTF-16 code units that do not fit in 8 bits");a()[ue+z>>>0]=pe}else for(z=0;z<Q;++z)a()[ue+z>>>0]=x[z];return $!==null&&$.push(Ht,re),re},argPackAdvance:rr,readValueFromPointer:ai,Eb($){Ht($)}})}var ws=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,em=(d,h)=>{for(var g=d>>1,$=g+h/2;!(g>=$)&&s()[g>>>0];)++g;if(32<(g<<=1)-d&&ws)return ws.decode(a().slice(d,g));for(g="",$=0;!($>=h/2);++$){var x=i()[d+2*$>>>1>>>0];if(x==0)break;g+=String.fromCharCode(x)}return g},tm=(d,h,g)=>{if(g??(g=2147483647),2>g)return 0;var $=h;g=(g-=2)<2*d.length?g/2:d.length;for(var x=0;x<g;++x){var z=d.charCodeAt(x);i()[h>>>1>>>0]=z,h+=2}return i()[h>>>1>>>0]=0,h-$},rm=d=>2*d.length,am=(d,h)=>{for(var g=0,$="";!(g>=h/4);){var x=n()[d+4*g>>>2>>>0];if(x==0)break;++g,65536<=x?(x-=65536,$+=String.fromCharCode(55296|x>>10,56320|1023&x)):$+=String.fromCharCode(x)}return $},im=(d,h,g)=>{if(h>>>=0,g??(g=2147483647),4>g)return 0;var $=h;g=$+g-4;for(var x=0;x<d.length;++x){var z=d.charCodeAt(x);if(55296<=z&&57343>=z&&(z=65536+((1023&z)<<10)|1023&d.charCodeAt(++x)),n()[h>>>2>>>0]=z,(h+=4)+4>g)break}return n()[h>>>2>>>0]=0,h-$},nm=d=>{for(var h=0,g=0;g<d.length;++g){var $=d.charCodeAt(g);55296<=$&&57343>=$&&++g,h+=4}return h};function sm(d,h,g){if(d>>>=0,h>>>=0,g=Wt(g>>>=0),h===2)var $=em,x=tm,z=rm,Q=re=>s()[re>>>1>>>0];else h===4&&($=am,x=im,z=nm,Q=re=>o()[re>>>2>>>0]);Zt(d,{name:g,fromWireType:re=>{for(var ue,pe=o()[re>>>2>>>0],Ee=re+4,We=0;We<=pe;++We){var je=re+4+We*h;We!=pe&&Q(je)!=0||(Ee=$(Ee,je-Ee),ue===void 0?ue=Ee:(ue+="\0",ue+=Ee),Ee=je+h)}return Ht(re),ue},toWireType:(re,ue)=>{if(typeof ue!="string")throw new tr(`Cannot pass non-string to C++ string type ${g}`);var pe=z(ue),Ee=Sa(4+pe+h);return o()[Ee>>>2>>>0]=pe/h,x(ue,Ee+4,pe+h),re!==null&&re.push(Ht,Ee),Ee},argPackAdvance:rr,readValueFromPointer:ai,Eb(re){Ht(re)}})}function om(d,h){Zt(d>>>=0,{Ub:!0,name:h=Wt(h>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var lm=()=>1;function um(d){di(d>>>0,!b,1,!_,131072,!1),cr()}var xs=d=>{if(!ve)try{if(d(),!(0<Et))try{w?Ea(Y):Pe(Y)}catch(h){h instanceof nt||h=="unwind"||T(0,h)}}catch(h){h instanceof nt||h=="unwind"||T(0,h)}};function ii(d){d>>>=0,typeof Atomics.oc=="function"&&(Atomics.oc(n(),d>>>2,d).value.then(ga),d+=128,Atomics.store(n(),d>>>2,1))}var ga=()=>{var d=Dr();d&&(ii(d),xs(Js))};function dm(d,h){(d>>>=0)==h>>>0?setTimeout(ga):w?postMessage({targetThread:d,cmd:"checkMailbox"}):(d=ht[d])&&d.postMessage({cmd:"checkMailbox"})}var ni=[];function pm(d,h,g,$,x){for(h>>>=0,$/=2,ni.length=$,g=x>>>0>>>3,x=0;x<$;x++)ni[x]=B[g+2*x]?B[g+2*x+1]:p()[g+2*x+1>>>0];return(h?xe[h]:tg[d])(...ni)}function cm(d){d>>>=0,w?postMessage({cmd:"cleanupThread",thread:d}):Qt(ht[d])}function fm(d){}var _a=(d,h)=>{var g=ei[d];if(g===void 0)throw d=Qs(d),g=Wt(d),Ht(d),new tr(`${h} has unknown type ${g}`);return g},ks=(d,h,g)=>{var $=[];return d=d.toWireType($,g),$.length&&(o()[h>>>2>>>0]=Ot($)),d};function hm(d,h,g){return h>>>=0,g>>>=0,d=It(d>>>0),h=_a(h,"emval::as"),ks(h,g,d)}function mm(d,h){return h>>>=0,d=It(d>>>0),(h=_a(h,"emval::as")).toWireType(null,d)}var ya=d=>{try{d()}catch(h){Ve(h)}},ar=0,qt=null,Ss=0,ba=[],Es={},Ts={},gm=0,si=null,_m=[];function Is(d){return function(h){if(!ve){if(ar===0){var g=!1,$=!1;h((x=0)=>{if(!ve&&(Ss=x,g=!0,$)){ar=2,ya(()=>io(qt)),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.resume(),x=!1;try{var z=function(){var ue=n()[qt+8>>>2>>>0];return ue=Se[Ts[ue]],--Et,ue()}()}catch(ue){z=ue,x=!0}var Q=!1;if(!qt){var re=si;re&&(si=null,(x?re.reject:re.resolve)(z),Q=!0)}if(x&&!Q)throw z}}),$=!0,g||(ar=1,qt=function(){var x=Sa(65548),z=x+12;o()[x>>>2>>>0]=z,o()[x+4>>>2>>>0]=z+65536,z=ba[0];var Q=Es[z];return Q===void 0&&(Q=gm++,Es[z]=Q,Ts[Q]=z),z=Q,n()[x+8>>>2>>>0]=z,x}(),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.pause(),ya(()=>ro(qt)))}else ar===2?(ar=0,ya(no),Ht(qt),qt=null,_m.forEach(xs)):Ve(`invalid state: ${ar}`);return Ss}}(h=>{d().then(h)})}function ym(d){return d>>>=0,Is(()=>(d=It(d)).then(Ot))}var $a=[];function bm(d,h,g,$){return g>>>=0,$>>>=0,(d=$a[d>>>0])(null,h=It(h>>>0),g,$)}var $m={},va=d=>{var h=$m[d];return h===void 0?Wt(d):h};function vm(d,h,g,$,x){return g>>>=0,$>>>=0,x>>>=0,(d=$a[d>>>0])(h=It(h>>>0),h[g=va(g)],$,x)}var Cs=()=>typeof globalThis=="object"?globalThis:Function("return this")();function wm(d){return(d>>>=0)==0?Ot(Cs()):(d=va(d),Ot(Cs()[d]))}var xm=d=>{var h=$a.length;return $a.push(d),h},km=(d,h)=>{for(var g=Array(d),$=0;$<d;++$)g[$]=_a(o()[h+4*$>>>2>>>0],"parameter "+$);return g},zs=(d,h)=>Object.defineProperty(h,"name",{value:d});function Sm(d,h,g){var $=(h=km(d,h>>>0)).shift();d--;var x=`return function (obj, func, destructorsRef, args) {
`,z=0,Q=[];g===0&&Q.push("obj");for(var re=["retType"],ue=[$],pe=0;pe<d;++pe)Q.push("arg"+pe),re.push("argType"+pe),ue.push(h[pe]),x+=`  var arg${pe} = argType${pe}.readValueFromPointer(args${z?"+"+z:""});
`,z+=h[pe].argPackAdvance;return x+=`  var rv = ${g===1?"new func":"func.call"}(${Q.join(", ")});
`,$.Ub||(re.push("emval_returnValue"),ue.push(ks),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),re.push(x+`};
`),d=function(Ee){var We=Function;if(!(We instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof We} which is not a function`);var je=zs(We.name||"unknownFunctionName",function(){});return je.prototype=We.prototype,je=new je,(Ee=We.apply(je,Ee))instanceof Object?Ee:je}(re)(...ue),g=`methodCaller<(${h.map(Ee=>Ee.name).join(", ")}) => ${$.name}>`,xm(zs(g,d))}function Em(d){return d=va(d>>>0),Ot(u[d])}function Tm(d,h){return h>>>=0,d=It(d>>>0),h=It(h),Ot(d[h])}function Im(d){9<(d>>>=0)&&(Yt[d+1]+=1)}function Cm(){return Ot([])}function zm(d){d=It(d>>>0);for(var h=Array(d.length),g=0;g<d.length;g++)h[g]=d[g];return Ot(h)}function Am(d){return Ot(va(d>>>0))}function Om(){return Ot({})}function Dm(d){for(var h=It(d>>>=0);h.length;){var g=h.pop();h.pop()(g)}ri(d)}function Rm(d,h,g){h>>>=0,g>>>=0,d=It(d>>>0),h=It(h),g=It(g),d[h]=g}function Nm(d,h){return h>>>=0,d=(d=_a(d>>>0,"_emval_take_value")).readValueFromPointer(h),Ot(d)}function Bm(d,h){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),h>>>=0,d=new Date(1e3*d),n()[h>>>2>>>0]=d.getUTCSeconds(),n()[h+4>>>2>>>0]=d.getUTCMinutes(),n()[h+8>>>2>>>0]=d.getUTCHours(),n()[h+12>>>2>>>0]=d.getUTCDate(),n()[h+16>>>2>>>0]=d.getUTCMonth(),n()[h+20>>>2>>>0]=d.getUTCFullYear()-1900,n()[h+24>>>2>>>0]=d.getUTCDay(),d=(d.getTime()-Date.UTC(d.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[h+28>>>2>>>0]=d}var Or=d=>d%4==0&&(d%100!=0||d%400==0),As=[0,31,60,91,121,152,182,213,244,274,305,335],Os=[0,31,59,90,120,151,181,212,243,273,304,334];function Mm(d,h){d=-9007199254740992>d||9007199254740992<d?NaN:Number(d),h>>>=0,d=new Date(1e3*d),n()[h>>>2>>>0]=d.getSeconds(),n()[h+4>>>2>>>0]=d.getMinutes(),n()[h+8>>>2>>>0]=d.getHours(),n()[h+12>>>2>>>0]=d.getDate(),n()[h+16>>>2>>>0]=d.getMonth(),n()[h+20>>>2>>>0]=d.getFullYear()-1900,n()[h+24>>>2>>>0]=d.getDay();var g=(Or(d.getFullYear())?As:Os)[d.getMonth()]+d.getDate()-1|0;n()[h+28>>>2>>>0]=g,n()[h+36>>>2>>>0]=-60*d.getTimezoneOffset(),g=new Date(d.getFullYear(),6,1).getTimezoneOffset();var $=new Date(d.getFullYear(),0,1).getTimezoneOffset();d=0|(g!=$&&d.getTimezoneOffset()==Math.min($,g)),n()[h+32>>>2>>>0]=d}function Pm(d){d>>>=0;var h=new Date(n()[d+20>>>2>>>0]+1900,n()[d+16>>>2>>>0],n()[d+12>>>2>>>0],n()[d+8>>>2>>>0],n()[d+4>>>2>>>0],n()[d>>>2>>>0],0),g=n()[d+32>>>2>>>0],$=h.getTimezoneOffset(),x=new Date(h.getFullYear(),6,1).getTimezoneOffset(),z=new Date(h.getFullYear(),0,1).getTimezoneOffset(),Q=Math.min(z,x);return 0>g?n()[d+32>>>2>>>0]=+(x!=z&&Q==$):0<g!=(Q==$)&&(x=Math.max(z,x),h.setTime(h.getTime()+6e4*((0<g?Q:x)-$))),n()[d+24>>>2>>>0]=h.getDay(),g=(Or(h.getFullYear())?As:Os)[h.getMonth()]+h.getDate()-1|0,n()[d+28>>>2>>>0]=g,n()[d>>>2>>>0]=h.getSeconds(),n()[d+4>>>2>>>0]=h.getMinutes(),n()[d+8>>>2>>>0]=h.getHours(),n()[d+12>>>2>>>0]=h.getDate(),n()[d+16>>>2>>>0]=h.getMonth(),n()[d+20>>>2>>>0]=h.getYear(),d=h.getTime(),BigInt(isNaN(d)?-1:d/1e3)}function Ds(d,h,g,$,x,z,Q){return w?qe(16,1,d,h,g,$,x,z,Q):-52}function Rs(d,h,g,$,x,z){if(w)return qe(17,1,d,h,g,$,x,z)}function Um(d,h,g,$){d>>>=0,h>>>=0,g>>>=0,$>>>=0;var x=new Date().getFullYear(),z=new Date(x,0,1),Q=new Date(x,6,1);x=z.getTimezoneOffset();var re=Q.getTimezoneOffset(),ue=Math.max(x,re);o()[d>>>2>>>0]=60*ue,n()[h>>>2>>>0]=+(x!=re),z=(d=pe=>pe.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(z),Q=d(Q),re<x?(Ar(z,g,17),Ar(Q,$,17)):(Ar(z,$,17),Ar(Q,g,17))}var oi=[],Ns=(d,h)=>{oi.length=0;for(var g;g=a()[d++>>>0];){var $=g!=105;h+=($&=g!=112)&&h%8?4:0,oi.push(g==112?o()[h>>>2>>>0]:g==106?B[h>>>3]:g==105?n()[h>>>2>>>0]:p()[h>>>3>>>0]),h+=$?8:4}return oi};function Vm(d,h,g){return d>>>=0,h=Ns(h>>>0,g>>>0),xe[d](...h)}function Lm(d,h,g){return d>>>=0,h=Ns(h>>>0,g>>>0),xe[d](...h)}var Wm=()=>{},qm=()=>Date.now();function Hm(d,h){return X(dt(d>>>0,h>>>0))}var Bs,Gm=()=>{throw Et+=1,"unwind"};function Fm(){return 4294901760}Bs=()=>performance.timeOrigin+performance.now();var jm=()=>navigator.hardwareConcurrency;function Km(){return Ve("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Qm(d){d>>>=0;var h=a().length;if(d<=h||4294901760<d)return!1;for(var g=1;4>=g;g*=2){var $=h*(1+.2/g);$=Math.min($,d+100663296);var x=Math;$=Math.max(d,$);e:{x=(x.min.call(x,4294901760,$+(65536-$%65536)%65536)-O.buffer.byteLength+65535)/65536;try{O.grow(x),_e();var z=1;break e}catch{}z=void 0}if(z)return!0}return!1}var wa=()=>(Ve("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Zr={},Ms=d=>{d.forEach(h=>{wa()})};function Zm(){var d=Error().stack.toString().split(`
`);return d[0]=="Error"&&d.shift(),Ms(d),Zr.Qb=wa(),Zr.fc=d,Zr.Qb}function Ym(d,h,g){if(d>>>=0,h>>>=0,Zr.Qb==d)var $=Zr.fc;else($=Error().stack.toString().split(`
`))[0]=="Error"&&$.shift(),Ms($);for(var x=3;$[x]&&wa()!=d;)++x;for(d=0;d<g&&$[d+x];++d)n()[h+4*d>>>2>>>0]=wa();return d}var li,ui={},Ps=()=>{if(!li){var d,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(d in ui)ui[d]===void 0?delete h[d]:h[d]=ui[d];var g=[];for(d in h)g.push(`${d}=${h[d]}`);li=g}return li};function Us(d,h){if(w)return qe(18,1,d,h);d>>>=0,h>>>=0;var g=0;return Ps().forEach(($,x)=>{var z=h+g;for(x=o()[d+4*x>>>2>>>0]=z,z=0;z<$.length;++z)r()[x++>>>0]=$.charCodeAt(z);r()[x>>>0]=0,g+=$.length+1}),0}function Vs(d,h){if(w)return qe(19,1,d,h);d>>>=0,h>>>=0;var g=Ps();o()[d>>>2>>>0]=g.length;var $=0;return g.forEach(x=>$+=x.length+1),o()[h>>>2>>>0]=$,0}function Ls(d){return w?qe(20,1,d):52}function Ws(d,h,g,$){return w?qe(21,1,d,h,g,$):52}function qs(d,h,g,$){return w?qe(22,1,d,h,g,$):70}var Xm=[null,[],[]];function Hs(d,h,g,$){if(w)return qe(23,1,d,h,g,$);h>>>=0,g>>>=0,$>>>=0;for(var x=0,z=0;z<g;z++){var Q=o()[h>>>2>>>0],re=o()[h+4>>>2>>>0];h+=8;for(var ue=0;ue<re;ue++){var pe=a()[Q+ue>>>0],Ee=Xm[d];pe===0||pe===10?((d===1?ne:X)(ns(Ee,0)),Ee.length=0):Ee.push(pe)}x+=re}return o()[$>>>2>>>0]=x,0}var Gs=[31,29,31,30,31,30,31,31,30,31,30,31],Fs=[31,28,31,30,31,30,31,31,30,31,30,31],Jm=(d,h)=>{r().set(d,h>>>0)};function js(d,h,g,$){function x(j,Le,lt){for(j=typeof j=="number"?j.toString():j||"";j.length<Le;)j=lt[0]+j;return j}function z(j,Le){return x(j,Le,"0")}function Q(j,Le){function lt(oo){return 0>oo?-1:0<oo?1:0}var mr;return(mr=lt(j.getFullYear()-Le.getFullYear()))===0&&(mr=lt(j.getMonth()-Le.getMonth()))===0&&(mr=lt(j.getDate()-Le.getDate())),mr}function re(j){switch(j.getDay()){case 0:return new Date(j.getFullYear()-1,11,29);case 1:return j;case 2:return new Date(j.getFullYear(),0,3);case 3:return new Date(j.getFullYear(),0,2);case 4:return new Date(j.getFullYear(),0,1);case 5:return new Date(j.getFullYear()-1,11,31);case 6:return new Date(j.getFullYear()-1,11,30)}}function ue(j){var Le=j.Cb;for(j=new Date(new Date(j.Db+1900,0,1).getTime());0<Le;){var lt=j.getMonth(),mr=(Or(j.getFullYear())?Gs:Fs)[lt];if(!(Le>mr-j.getDate())){j.setDate(j.getDate()+Le);break}Le-=mr-j.getDate()+1,j.setDate(1),11>lt?j.setMonth(lt+1):(j.setMonth(0),j.setFullYear(j.getFullYear()+1))}return lt=new Date(j.getFullYear()+1,0,4),Le=re(new Date(j.getFullYear(),0,4)),lt=re(lt),0>=Q(Le,j)?0>=Q(lt,j)?j.getFullYear()+1:j.getFullYear():j.getFullYear()-1}d>>>=0,h>>>=0,g>>>=0,$>>>=0;var pe=o()[$+40>>>2>>>0];for(var Ee in $={lc:n()[$>>>2>>>0],kc:n()[$+4>>>2>>>0],Ib:n()[$+8>>>2>>>0],Mb:n()[$+12>>>2>>>0],Jb:n()[$+16>>>2>>>0],Db:n()[$+20>>>2>>>0],vb:n()[$+24>>>2>>>0],Cb:n()[$+28>>>2>>>0],sc:n()[$+32>>>2>>>0],jc:n()[$+36>>>2>>>0],mc:pe?dt(pe):""},g=dt(g),pe={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})g=g.replace(new RegExp(Ee,"g"),pe[Ee]);var We="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),je="January February March April May June July August September October November December".split(" ");for(Ee in pe={"%a":j=>We[j.vb].substring(0,3),"%A":j=>We[j.vb],"%b":j=>je[j.Jb].substring(0,3),"%B":j=>je[j.Jb],"%C":j=>z((j.Db+1900)/100|0,2),"%d":j=>z(j.Mb,2),"%e":j=>x(j.Mb,2," "),"%g":j=>ue(j).toString().substring(2),"%G":ue,"%H":j=>z(j.Ib,2),"%I":j=>((j=j.Ib)==0?j=12:12<j&&(j-=12),z(j,2)),"%j":j=>{for(var Le=0,lt=0;lt<=j.Jb-1;Le+=(Or(j.Db+1900)?Gs:Fs)[lt++]);return z(j.Mb+Le,3)},"%m":j=>z(j.Jb+1,2),"%M":j=>z(j.kc,2),"%n":()=>`
`,"%p":j=>0<=j.Ib&&12>j.Ib?"AM":"PM","%S":j=>z(j.lc,2),"%t":()=>"	","%u":j=>j.vb||7,"%U":j=>z(Math.floor((j.Cb+7-j.vb)/7),2),"%V":j=>{var Le=Math.floor((j.Cb+7-(j.vb+6)%7)/7);if(2>=(j.vb+371-j.Cb-2)%7&&Le++,Le)Le==53&&((lt=(j.vb+371-j.Cb)%7)==4||lt==3&&Or(j.Db)||(Le=1));else{Le=52;var lt=(j.vb+7-j.Cb-1)%7;(lt==4||lt==5&&Or(j.Db%400-1))&&Le++}return z(Le,2)},"%w":j=>j.vb,"%W":j=>z(Math.floor((j.Cb+7-(j.vb+6)%7)/7),2),"%y":j=>(j.Db+1900).toString().substring(2),"%Y":j=>j.Db+1900,"%z":j=>{var Le=0<=(j=j.jc);return j=Math.abs(j)/60,(Le?"+":"-")+("0000"+(j/60*100+j%60)).slice(-4)},"%Z":j=>j.mc,"%%":()=>"%"},g=g.replace(/%%/g,"\0\0"),pe)g.includes(Ee)&&(g=g.replace(new RegExp(Ee,"g"),pe[Ee]($)));return Ee=function(j){var Le=Array(Xa(j)+1);return ls(j,Le,0,Le.length),Le}(g=g.replace(/\0\0/g,"%")),Ee.length>h?0:(Jm(Ee,d),Ee.length-1)}function eg(d,h,g,$){return js(d>>>0,h>>>0,g>>>0,$>>>0)}w||function(){for(var d=u.numThreads-1;d--;)fr();be.unshift(()=>{we++,function(h){w?h():Promise.all(Je.map(Qr)).then(h)}(()=>it())})}();for(var Ks=Array(256),xa=0;256>xa;++xa)Ks[xa]=String.fromCharCode(xa);$s=Ks,tr=u.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},u.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},Yt.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>Yt.length/2-5-ti.length;var tg=[Kt,me,zr,ss,os,us,ds,ps,cs,fs,hs,ms,gs,_s,ys,bs,Ds,Rs,Us,Vs,Ls,Ws,qs,Hs],Se=function(){function d(g,$){return Se=g.exports,Se=function(){var x=Se,z={};for(let[Q,re]of Object.entries(x))z[Q]=typeof re=="function"?(...ue)=>{ba.push(Q);try{return re(...ue)}finally{ve||(ba.pop(),qt&&ar===1&&ba.length===0&&(ar=0,Et+=1,ya(ao),typeof Fibers<"u"&&Fibers.tc()))}}:re;return z}(),Se=function(){var x=Se,z=re=>ue=>re(ue)>>>0,Q=re=>()=>re()>>>0;return(x=Object.assign({},x)).Da=z(x.Da),x.gb=Q(x.gb),x.ib=z(x.ib),x.emscripten_main_runtime_thread_id=Q(x.emscripten_main_runtime_thread_id),x.tb=z(x.tb),x.ub=Q(x.ub),x}(),Tt.push(Se.jb),Ue.unshift(Se.Ca),V=$,it(),Se}var h=ft();if(we++,u.instantiateWasm)try{return u.instantiateWasm(h,d)}catch(g){X(`Module.instantiateWasm callback failed with error: ${g}`),f(g)}return et||(et=u.locateFile?_t("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",I):I+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.Y7jqkEt_.wasm",import.meta.url).href,import.meta.url).href),function(g,$){var x=et;return D||typeof WebAssembly.instantiateStreaming!="function"||_t(x)||tt(x)||typeof fetch!="function"?kt(x,g,$):fetch(x,{credentials:"same-origin"}).then(z=>WebAssembly.instantiateStreaming(z,g).then($,function(Q){return X(`wasm streaming compile failed: ${Q}`),X("falling back to ArrayBuffer instantiation"),kt(x,g,$)}))}(h,function(g){d(g.instance,g.module)}).catch(f),{}}(),Qs=d=>(Qs=Se.Da)(d),Zs=()=>(Zs=Se.Ea)();u._OrtInit=(d,h)=>(u._OrtInit=Se.Fa)(d,h),u._OrtGetLastError=(d,h)=>(u._OrtGetLastError=Se.Ga)(d,h),u._OrtCreateSessionOptions=(d,h,g,$,x,z,Q,re,ue,pe)=>(u._OrtCreateSessionOptions=Se.Ha)(d,h,g,$,x,z,Q,re,ue,pe),u._OrtAppendExecutionProvider=(d,h)=>(u._OrtAppendExecutionProvider=Se.Ia)(d,h),u._OrtAddFreeDimensionOverride=(d,h,g)=>(u._OrtAddFreeDimensionOverride=Se.Ja)(d,h,g),u._OrtAddSessionConfigEntry=(d,h,g)=>(u._OrtAddSessionConfigEntry=Se.Ka)(d,h,g),u._OrtReleaseSessionOptions=d=>(u._OrtReleaseSessionOptions=Se.La)(d),u._OrtCreateSession=(d,h,g)=>(u._OrtCreateSession=Se.Ma)(d,h,g),u._OrtReleaseSession=d=>(u._OrtReleaseSession=Se.Na)(d),u._OrtGetInputOutputCount=(d,h,g)=>(u._OrtGetInputOutputCount=Se.Oa)(d,h,g),u._OrtGetInputName=(d,h)=>(u._OrtGetInputName=Se.Pa)(d,h),u._OrtGetOutputName=(d,h)=>(u._OrtGetOutputName=Se.Qa)(d,h),u._OrtFree=d=>(u._OrtFree=Se.Ra)(d),u._OrtCreateTensor=(d,h,g,$,x,z)=>(u._OrtCreateTensor=Se.Sa)(d,h,g,$,x,z),u._OrtGetTensorData=(d,h,g,$,x)=>(u._OrtGetTensorData=Se.Ta)(d,h,g,$,x),u._OrtReleaseTensor=d=>(u._OrtReleaseTensor=Se.Ua)(d),u._OrtCreateRunOptions=(d,h,g,$)=>(u._OrtCreateRunOptions=Se.Va)(d,h,g,$),u._OrtAddRunConfigEntry=(d,h,g)=>(u._OrtAddRunConfigEntry=Se.Wa)(d,h,g),u._OrtReleaseRunOptions=d=>(u._OrtReleaseRunOptions=Se.Xa)(d),u._OrtCreateBinding=d=>(u._OrtCreateBinding=Se.Ya)(d),u._OrtBindInput=(d,h,g)=>(u._OrtBindInput=Se.Za)(d,h,g),u._OrtBindOutput=(d,h,g,$)=>(u._OrtBindOutput=Se._a)(d,h,g,$),u._OrtClearBoundOutputs=d=>(u._OrtClearBoundOutputs=Se.$a)(d),u._OrtReleaseBinding=d=>(u._OrtReleaseBinding=Se.ab)(d),u._OrtRunWithBinding=(d,h,g,$,x)=>(u._OrtRunWithBinding=Se.bb)(d,h,g,$,x),u._OrtRun=(d,h,g,$,x,z,Q,re)=>(u._OrtRun=Se.cb)(d,h,g,$,x,z,Q,re),u._OrtEndProfiling=d=>(u._OrtEndProfiling=Se.db)(d),u._JsepOutput=(d,h,g)=>(u._JsepOutput=Se.eb)(d,h,g),u._JsepGetNodeName=d=>(u._JsepGetNodeName=Se.fb)(d);var ka,Dr=()=>(Dr=Se.gb)(),Ht=u._free=d=>(Ht=u._free=Se.hb)(d),Sa=u._malloc=d=>(Sa=u._malloc=Se.ib)(d),di=(d,h,g,$,x,z)=>(di=Se.lb)(d,h,g,$,x,z),Ys=()=>(Ys=Se.mb)(),Xs=(d,h,g,$,x)=>(Xs=Se.nb)(d,h,g,$,x),pi=d=>(pi=Se.ob)(d),Ea=d=>(Ea=Se.pb)(d),Js=()=>(Js=Se.qb)(),eo=(d,h)=>(eo=Se.rb)(d,h),Ta=d=>(Ta=Se.sb)(d),ci=d=>(ci=Se.tb)(d),fi=()=>(fi=Se.ub)(),to=u.dynCall_ii=(d,h)=>(to=u.dynCall_ii=Se.wb)(d,h),ro=d=>(ro=Se.xb)(d),ao=()=>(ao=Se.yb)(),io=d=>(io=Se.zb)(d),no=()=>(no=Se.Ab)();function so(){0<we||(w?(c(u),w||hr(Ue),startWorker(u)):(hr(be),0<we||ka||(ka=!0,u.calledRun=!0,ve||(w||hr(Ue),c(u),w||hr(ke)))))}return u.___start_em_js=932469,u.___stop_em_js=932715,u.stackSave=()=>fi(),u.stackRestore=d=>Ta(d),u.stackAlloc=d=>ci(d),u.setValue=function(d,h,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":r()[d>>>0]=h;break;case"i16":i()[d>>>1>>>0]=h;break;case"i32":n()[d>>>2>>>0]=h;break;case"i64":B[d>>>3]=BigInt(h);break;case"float":l()[d>>>2>>>0]=h;break;case"double":p()[d>>>3>>>0]=h;break;case"*":o()[d>>>2>>>0]=h;break;default:Ve(`invalid type for setValue: ${g}`)}},u.getValue=function(d,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return r()[d>>>0];case"i16":return i()[d>>>1>>>0];case"i32":return n()[d>>>2>>>0];case"i64":return B[d>>>3];case"float":return l()[d>>>2>>>0];case"double":return p()[d>>>3>>>0];case"*":return o()[d>>>2>>>0];default:Ve(`invalid type for getValue: ${h}`)}},u.UTF8ToString=dt,u.stringToUTF8=Ar,u.lengthBytesUTF8=Xa,Ge=function d(){ka||so(),ka||(Ge=d)},so(),u.PTR_SIZE=4,m}),zp=vi,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&vi()}),wi,co,Ct,Ap,Ca,fo,ho,xi,mo,ki,Op,Si,Dp,An=le(()=>{zn(),wi=typeof location>"u"?void 0:location.origin,co=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL(""+new URL("../assets/ort.bundle.min.D2-GKZ-g.mjs",import.meta.url).href,import.meta.url).href,wi).href:import.meta.url},Ct=co(),Ap=()=>{if(Ct&&!Ct.startsWith("blob:"))return Ct.substring(0,Ct.lastIndexOf("/")+1)},Ca=(e,t)=>{try{let r=t??Ct;return(r?new URL(e,r):new URL(e)).origin===wi}catch{return!1}},fo=(e,t)=>{let r=t??Ct;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},ho=(e,t)=>`${t??"./"}${e}`,xi=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},mo=async e=>(await import(e)).default,ki=(Zg(),Ha(Tp)).default,Op=async()=>{if(!Ct)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ca(Ct))return[void 0,ki()];let e=await xi(Ct);return[e,ki(e)]},Si=(Yg(),Ha(Cp)).default,Dp=async(e,t,r)=>{if(!e&&!t&&Si&&Ct&&Ca(Ct))return[void 0,Si];{let a="ort-wasm-simd-threaded.jsep.mjs",i=e??fo(a,t),s=r&&i&&!Ca(i,t),n=s?await xi(i):i??ho(a,t);return[s?n:void 0,await mo(n)]}}}),Ei,za,Xr,Ti,go,_o,On,mt,Er=le(()=>{An(),za=!1,Xr=!1,Ti=!1,go=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},_o=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},On=async e=>{if(za)return Promise.resolve();if(Xr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ti)throw new Error("previous call to 'initializeWebAssembly()' failed.");Xr=!0;let t=e.initTimeout,r=e.numThreads;if(!_o())throw new Error("WebAssembly SIMD is not supported in the current environment.");let a=go();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,s=typeof i=="string"?i:void 0,n=i==null?void 0:i.mjs,o=(n==null?void 0:n.href)??n,l=i==null?void 0:i.wasm,p=(l==null?void 0:l.href)??l,c=e.wasmBinary,[f,u]=await Dp(o,s,r>1),m=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{m=!0,b()},t)})),_.push(new Promise((b,w)=>{let v={numThreads:r};if(c)v.wasmBinary=c;else if(p||s)v.locateFile=y=>p??s+y;else if(o&&o.indexOf("blob:")!==0)v.locateFile=y=>new URL(y,o).href;else if(f){let y=Ap();y&&(v.locateFile=k=>y+k)}u(v).then(y=>{Xr=!1,za=!0,Ei=y,b(),f&&URL.revokeObjectURL(f)},y=>{Xr=!1,Ti=!0,w(y)})})),await Promise.race(_),m)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},mt=()=>{if(za&&Ei)return Ei;throw new Error("WebAssembly is not initialized yet.")}}),$t,Fa,Fe,Dn=le(()=>{Er(),$t=(e,t)=>{let r=mt(),a=r.lengthBytesUTF8(e)+1,i=r._malloc(a);return r.stringToUTF8(e,i,a),t.push(i),i},Fa=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,s])=>{let n=t?t+i:i;if(typeof s=="object")Fa(s,n+".",r,a);else if(typeof s=="string"||typeof s=="number")a(n,s.toString());else if(typeof s=="boolean")a(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Fe=e=>{let t=mt(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetLastError(i,i+a);let s=Number(t.getValue(i,a===4?"i32":"i64")),n=t.getValue(i+a,"*"),o=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Rp,Xg=le(()=>{Er(),Dn(),Rp=e=>{let t=mt(),r=0,a=[],i=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(i.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=$t(e.tag,a)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,s),r===0&&Fe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Fa(e.extra,"",new WeakSet,(n,o)=>{let l=$t(n,a),p=$t(o,a);t._OrtAddRunConfigEntry(r,l,p)!==0&&Fe(`Can't set a run config entry: ${n} - ${o}.`)}),[r,a]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(n=>t._free(n)),s}}}),yo,bo,$o,vo,Np,Jg=le(()=>{Er(),Dn(),yo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},bo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},$o=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},vo=(e,t,r)=>{for(let a of t){let i=typeof a=="string"?a:a.name;switch(i){case"webnn":if(i="WEBNN",typeof a!="string"){let n=a==null?void 0:a.deviceType;if(n){let o=$t("deviceType",r),l=$t(n,r);mt()._OrtAddSessionConfigEntry(e,o,l)!==0&&Fe(`Can't set a session config entry: 'deviceType' - ${n}.`)}}break;case"webgpu":if(i="JS",typeof a!="string"){let n=a;if(n!=null&&n.preferredLayout){if(n.preferredLayout!=="NCHW"&&n.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${n.preferredLayout}`);let o=$t("preferredLayout",r),l=$t(n.preferredLayout,r);mt()._OrtAddSessionConfigEntry(e,o,l)!==0&&Fe(`Can't set a session config entry: 'preferredLayout' - ${n.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let s=$t(i,r);mt()._OrtAppendExecutionProvider(e,s)!==0&&Fe(`Can't append execution provider: ${i}.`)}},Np=e=>{let t=mt(),r=0,a=[],i=e||{};$o(i);try{let s=yo(i.graphOptimizationLevel??"all"),n=bo(i.executionMode??"sequential"),o=typeof i.logId=="string"?$t(i.logId,a):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let p=i.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let c=typeof i.optimizedModelFilePath=="string"?$t(i.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(s,!!i.enableCpuMemArena,!!i.enableMemPattern,n,!!i.enableProfiling,0,o,l,p,c),r===0&&Fe("Can't create session options."),i.executionProviders&&vo(r,i.executionProviders,a),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let f=$t("enableGraphCapture",a),u=$t(i.enableGraphCapture.toString(),a);t._OrtAddSessionConfigEntry(r,f,u)!==0&&Fe(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[f,u]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof u!="number"||!Number.isInteger(u)||u<0)throw new Error(`free dimension override value must be a non-negative integer: ${u}`);let m=$t(f,a);t._OrtAddFreeDimensionOverride(r,m,u)!==0&&Fe(`Can't set a free dimension override: ${f} - ${u}.`)}return i.extra!==void 0&&Fa(i.extra,"",new WeakSet,(f,u)=>{let m=$t(f,a),_=$t(u,a);t._OrtAddSessionConfigEntry(r,m,_)!==0&&Fe(`Can't set a session config entry: ${f} - ${u}.`)}),[r,a]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Fe("Can't release session options."),a.forEach(n=>t._free(n)),s}}}),oa,vr,Br,Rn,ja,Nn,Bn,fn,De=le(()=>{oa=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},vr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Br=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((i,s)=>i*s,1);return r>0?Math.ceil(a*r):void 0},Rn=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},ja=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Nn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Bn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",fn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Mn,Bp=le(()=>{zn(),Mn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),s;try{s=new ArrayBuffer(a)}catch(o){if(o instanceof RangeError){let l=Math.ceil(a/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let n=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let p=l.byteLength;new Uint8Array(s,n,p).set(l),n+=p}return new Uint8Array(s,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),wo,xo,ko,So,Pn,Eo,Ke,er=le(()=>{De(),wo=["V","I","W","E","F"],xo=(e,t)=>{`${wo[e]}${new Date().toISOString()}${t}`},Pn=(e,t)=>{ko=e,So=t},Eo=(e,t)=>{let r=ja(e),a=ja(ko);r>=a&&xo(r,typeof t=="function"?t():t)},Ke=(...e)=>{So&&Eo(...e)}}),Un,Mp=le(()=>{De(),Un=(e,t)=>new(Rn(t))(e)}),Vn=le(()=>{}),Ii,Aa,Oa,To,Io,Ci,hn,Co,Pp,e_=le(()=>{er(),Vn(),Ii=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Aa=[],Oa=e=>Math.ceil(Number(e)/16)*16,To=e=>{for(let t=0;t<Aa.length;t++){let r=Aa[t];if(e<=r)return r}return Math.ceil(e/16)*16},Io=1,Ci=()=>Io++,hn=async(e,t,r,a)=>{let i=Oa(r),s=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,i),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(a){let l=a();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Co=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Ii)Aa.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,i=t.byteLength,s=Oa(i),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,a,i)),o.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(o,0,n.gpuData.buffer,0,s),this.backend.device.queue.submit([p.finish()]),o.destroy(),Ke("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Oa(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return Ke("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Ci();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),Ke("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ke("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=To(e),a,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||s){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?a=o.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let n={id:Ci(),type:0,buffer:a};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),Ke("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ke("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await hn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Ii.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ke("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Pp=(...e)=>new Co(...e)}),zo,Qe,ut=le(()=>{zo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Qe=e=>new zo(e)}),Ao,Pr,q,Ka,Up,Vp,Lp,Ne=le(()=>{Ao=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Pr=class{static calcShape(e,t,r=!1){let a=e.length,i=t.length;if(a===0)return t;if(i===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(a<2||i<2)return;let o=Ao.calcMatMulShape([e[a-2],e[a-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[n[s-2],n[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=a-o<0?1:e[a-o],p=i-o<0?1:t[i-o];if(l!==p&&l>1&&p>1)return;let c=Math.max(l,p);if(l&&p)n[s-o]=Math.max(l,p);else{if(c>1)return;n[s-o]=0}}return n}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[a-i])return!1;return!0}},q=class La{static size(t){return La.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let i=new Array(a),s=a-1;for(;s>=0;){if(t[s]%r===0){i[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");i[s]=1,r/=t[s],s--}for(s--;s>=0;s--)i[s]=t[s];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return La.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return La.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let i=1;for(let s=r;s<a;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[s])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let i=r-3;i>=0;--i)a[i]=a[i+1]*t[i+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((i,s)=>i+r[s]+r[s+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,i)=>a===r[i])}},Ka=class la{static adjustPoolAttributes(t,r,a,i,s,n){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=a.length?a.push(r[o+2]):a[o]=r[o+2];for(let o=0;o<a.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<a.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<a.length*2;o++)if(o<n.length){if(n[o]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let o=0;o<a.length;o++){if(a[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[o]>=a[o]||n[o+a.length]>=a[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,i,s,n,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)la.adjustPadAndReturnShape(t[l+(n?1:2)],r[l],a[l],i[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,a,i,s,n,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return la.computeShapeHelper(t,r,l,a,i,s,n,o),l}static computeConvOutputShape(t,r,a,i,s,n,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return la.computeShapeHelper(!1,t,l,a,i,s,n,o),l}static computeShapeHelper(t,r,a,i,s,n,o,l){if(t)for(let p=0;p<r.length-2;p++)a.push(1);else for(let p=0;p<r.length-2;p++)a.push(la.adjustPadAndReturnShape(r[p+2],i[p],s[p],n[p],o,p,p+r.length-2,l))}static adjustPadAndReturnShape(t,r,a,i,s,n,o,l){let p=a*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[n]=0,s[o]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+i-t;return s[n]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[n],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[n]+s[o]-p)/r+1)}},Up=class{static getShapeOfGemmResult(e,t,r,a,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,o;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let l=-1;if(a?(o=r[0],l=1):(o=r[1],l=0),r[l]!==n)throw new Error("dimension mismatch");if(s<=0||o<=0||n<=0)throw new Error("invalid shape specified");if(i&&!Pr.isValidBroadcast(i,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,n]}},Vp=-34028234663852886e22,Lp=34028234663852886e22}),Ur,Da,gt,wt,ye,st,mn,Mr,dr,ge,Jr,Z,he,Wp,Ln,Oo,qp,Me=le(()=>{De(),Ne(),Ur=64,Da=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},gt=(e,t=1)=>{let r=Da(e,t);return typeof r=="string"?r:r[0]},wt=(e,t=1)=>{let r=Da(e,t);return typeof r=="string"?r:r[1]},ye=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:q.computeStrides(r)})}),t},st=e=>e%4===0?4:e%2===0?2:1,mn=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Mr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,dr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ge=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Jr=(e,t,r,a,i)=>{let s=typeof r=="number",n=s?r:r.length,o=[...new Array(n).keys()],l=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,p=Da(t,i),c=typeof p=="string"?p:p[1],f=typeof p=="string"?p:p[0],u={indices:l,value:c,storage:f,tensor:t},m=F=>typeof F=="string"?F:`${F}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=s?"uniforms.":"",w=`${b}${e}_shape`,v=`${b}${e}_strides`,y="";for(let F=0;F<n-1;F++)y+=`
    let dim${F} = current / ${ge(v,F,n)};
    let rest${F} = current % ${ge(v,F,n)};
    indices[${F}] = dim${F};
    current = rest${F};
    `;y+=`indices[${n-1}] = current;`;let k=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${u.indices} {
    var indices: ${u.indices};
    var current = offset;
    ${y}
    return indices;
  }`,S=F=>(_.offsetToIndices=!0,n<2?F:`o2i_${e}(${F})`),E=[];if(n>=2)for(let F=n-1;F>=0;F--)E.push(`${ge(v,F,n)} * (indices[${F}])`);let T=n<2?"":`
  fn i2o_${e}(indices: ${u.indices}) -> u32 {
    return ${E.join("+")};
  }`,I=F=>(_.indicesToOffset=!0,n<2?F:`i2o_${e}(${F})`),D=(...F)=>n===0?"0u":`${u.indices}(${F.map(m).join(",")})`,R=(F,ie)=>n<2?`${F}`:`${ge(F,ie,n)}`,W=(F,ie,ee)=>n<2?`${F}=${ee};`:`${ge(F,ie,n)}=${ee};`,ne={},X=(F,ie)=>{_.broadcastedIndicesToOffset=!0;let ee=`${ie.name}broadcastedIndicesTo${e}Offset`;if(ee in ne)return`${ee}(${F})`;let L=[];for(let B=n-1;B>=0;B--){let H=ie.indicesGet("outputIndices",B+ie.rank-n);L.push(`${R(v,B)} * (${H} % ${R(w,B)})`)}return ne[ee]=`fn ${ee}(outputIndices: ${ie.type.indices}) -> u32 {
             return ${L.length>0?L.join("+"):"0u"};
           }`,`${ee}(${F})`},K=(F,ie)=>(()=>{if(u.storage===u.value)return`${e}[${F}]=${ie};`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`${e}[${F}]=vec2<u32>(u32(${ie}), select(0u, 0xFFFFFFFFu, ${ie} < 0));`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`${e}[${F}]=vec2<u32>(u32(${ie}), 0u);`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`${e}[${F}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${ie}));`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),U=F=>(()=>{if(u.storage===u.value)return`${e}[${F}]`;if(u.storage==="vec2<u32>"&&u.value==="i32")return`i32(${e}[${F}].x)`;if(u.storage==="vec2<u32>"&&u.value==="u32")return`u32(${e}[${F}].x)`;if(u.storage==="u32"&&u.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${F}] & 0xFFu), bool(${e}[${F}] & 0xFF00u), bool(${e}[${F}] & 0xFF0000u), bool(${e}[${F}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${u.storage} and value type ${u.value} yet`)})(),O=n<2?"":`
  fn get_${e}ByIndices(indices: ${u.indices}) -> ${c} {
    return ${U(`i2o_${e}(indices)`)};
  }`,V=n<2?"":(()=>{let F=o.map(ee=>`d${ee}: u32`).join(", "),ie=o.map(ee=>`d${ee}`).join(", ");return`
  fn get_${e}(${F}) -> ${c} {
    return get_${e}ByIndices(${D(ie)});
  }`})(),Y=(...F)=>{if(F.length!==n)throw new Error(`indices length must be ${n}`);let ie=F.map(m).join(",");return n===0?U("0u"):n===1?U(ie[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${ie})`)},J=F=>n<2?U(F):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${F})`),oe=n<2?"":`
  fn set_${e}ByIndices(indices: ${u.indices}, value: ${c}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,se=n<2?"":(()=>{let F=o.map(ee=>`d${ee}: u32`).join(", "),ie=o.map(ee=>`d${ee}`).join(", ");return`
  fn set_${e}(${F}, value: ${c}) {
    set_${e}ByIndices(${D(ie)}, value);
  }`})();return{impl:()=>{let F=[],ie=!1;return _.offsetToIndices&&(F.push(k),ie=!0),_.indicesToOffset&&(F.push(T),ie=!0),_.broadcastedIndicesToOffset&&(Object.values(ne).forEach(ee=>F.push(ee)),ie=!0),_.set&&(F.push(se),ie=!0),_.setByIndices&&(F.push(oe),ie=!0),_.get&&(F.push(V),ie=!0),_.getByIndices&&(F.push(O),ie=!0),!s&&ie&&F.unshift(`const ${w} = ${u.indices}(${r.join(",")});`,`const ${v} = ${u.indices}(${q.computeStrides(r).join(",")});`),F.join(`
`)},type:u,offsetToIndices:S,indicesToOffset:I,broadcastedIndicesToOffset:X,indices:D,indicesGet:R,indicesSet:W,set:(...F)=>{if(F.length!==n+1)throw new Error(`indices length must be ${n}`);let ie=F[n];if(typeof ie!="string")throw new Error("value must be string");let ee=F.slice(0,n).map(m).join(",");return n===0?K("0u",ie):n===1?K(ee[0],ie):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${ee}, ${ie})`)},setByOffset:K,setByIndices:(F,ie)=>n<2?K(F,ie):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${F}, ${ie});`),get:Y,getByOffset:U,getByIndices:J,usage:a,name:e,strides:v,shape:w,rank:n}},Z=(e,t,r,a=1)=>Jr(e,t,r,"input",a),he=(e,t,r,a=1)=>Jr(e,t,r,"output",a),Wp=(e,t,r)=>Jr(e,t,r,"atomicOutput",1),Ln=(e,t,r,a=1)=>Jr(e,t,r,"internal",a),Oo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ur){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let i=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},qp=(e,t)=>new Oo(e,t)}),Do,zi,Ro,No,Bo,Mo,At,Hp,Gp,pr=le(()=>{De(),Ne(),ut(),Me(),Do=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},zi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ro=(e,t)=>q.sortBasedOnPerm(e,zi(e.length,t)),No=(e,t,r,a)=>{let i=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)i+=`a[${e[s]}]=i[${s}];`;return i+="return a;}"},Bo=(e,t)=>{let r=[],a=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&a.push(t[i]);return{newShape:r,newPerm:a}},Mo=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},At=(e,t)=>{let r=e.dataType,a=e.dims.length,i=zi(a,t),s=Ro(e.dims,i),n=e.dims,o=s,l=a<2||Mo(i,e.dims),p;if(l)return p=_=>{let b=Z("input",r,n,4),w=he("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:p};let{newShape:c,newPerm:f}=Bo(e.dims,i),u=q.areEqual(f,[2,3,1]),m=q.areEqual(f,[3,1,2]);if(c.length===2||u||m){n=u?[c[0],c[1]*c[2]]:m?[c[0]*c[1],c[2]]:c,o=[n[1],n[0]];let _=16;return p=b=>{let w=Z("a",r,n.length),v=he("output",r,o.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(w,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${w.getByIndices(`${w.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:b},...ye(n,o)]}},getShaderSource:p}}return p=_=>{let b=Z("a",r,n.length),w=he("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,w)}

  ${No(i,a,b,w)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=q.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ye(n,o)]}},getShaderSource:p}},Hp=(e,t)=>{Do(e.inputs,t.perm),e.compute(At(e.inputs[0],t.perm))},Gp=e=>Qe({perm:e.perm})}),Po,Uo,Vo,Lo,Wo,qo,Ho,Go,Fo,jo,Nt,Fp,jp,Kp,Qp,Zp,Yp,Xp,Jp,ec,tc,t_=le(()=>{De(),Ne(),Me(),Wn(),pr(),Po={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Uo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Vo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Lo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Wo=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},qo=(e,t)=>{let r=[],a=e.length;for(let s=0;s<a;s++)t.indexOf(s)===-1&&r.push(e[s]);let i=t.map(s=>e[s]);return[r,i]},Ho=(e,t)=>{let r=e.length+t.length,a=[],i=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?a.push(e[i++]):a.push(1);return a},Go=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Fo=(e,t)=>{let r=[];if(!Go(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},jo=(e,t,r,a,i,s,n)=>{let o=r[0].dims,l=q.size(s),p=q.size(n),c=Z("_A",r[0].dataType,o),f=he("output",i,s),u=64;l===1&&(u=256);let m=`
          var<workgroup> aBestValues : array<f32, ${u}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${m}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(u)}

          let outputIndex = global_idx / ${u};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Vo[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${u}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Po[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${u}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Uo[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${a==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Lo[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${u}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:p}]})}},Nt=(e,t,r,a)=>{let i=e.inputs.length===1?r:gn(e.inputs,r),s=i.axes;s.length===0&&!i.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((m,_)=>_));let n=q.normalizeAxes(s,e.inputs[0].dims.length),o=n,l=e.inputs[0],p=Fo(o,e.inputs[0].dims.length);p.length>0&&(l=e.compute(At(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],o=Wo(o.length,l.dims.length));let[c,f]=qo(l.dims,o),u=c;i.keepDims&&(u=Ho(c,n)),e.compute(jo(t,i.cacheKey,[l],a,e.inputs[0].dataType,u,f),{inputs:[l]})},Fp=(e,t)=>{Nt(e,"ReduceMeanShared",t,"mean")},jp=(e,t)=>{Nt(e,"ReduceL1Shared",t,"l1")},Kp=(e,t)=>{Nt(e,"ReduceL2Shared",t,"l2")},Qp=(e,t)=>{Nt(e,"ReduceLogSumExpShared",t,"logSumExp")},Zp=(e,t)=>{Nt(e,"ReduceMaxShared",t,"max")},Yp=(e,t)=>{Nt(e,"ReduceMinShared",t,"min")},Xp=(e,t)=>{Nt(e,"ReduceProdShared",t,"prod")},Jp=(e,t)=>{Nt(e,"ReduceSumShared",t,"sum")},ec=(e,t)=>{Nt(e,"ReduceSumSquareShared",t,"sumSquare")},tc=(e,t)=>{Nt(e,"ReduceLogSumShared",t,"logSum")}}),Bt,Ko,Qa,gn,Mt,Qo,Zo,Yo,Xo,Jo,el,tl,rl,al,il,Pt,rc,ac,ic,nc,sc,oc,lc,uc,dc,pc,Wn=le(()=>{De(),Ne(),ut(),Me(),t_(),Bt=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ko=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Qa=(e,t,r,a,i,s,n=!1,o=!1)=>{let l=[],p=r[0].dims,c=p.length,f=q.normalizeAxes(i,c),u=!o&&f.length===0;p.forEach((b,w)=>{u||f.indexOf(w)>=0?n&&l.push(1):l.push(b)});let m=l.length,_=q.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let w=[],v=Z("_A",r[0].dataType,c),y=he("output",s,m),k=a(v,y,f),S=k[2];for(let E=0,T=0;E<c;E++)u||f.indexOf(E)>=0?(n&&T++,S=`for(var j${E}: u32 = 0; j${E} < ${p[E]}; j${E}++) {
                  ${k[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(w.push(`${v.indicesSet("input_indices",E,y.indicesGet("output_indices",T))};`),T++);return`

        ${b.registerUniform("output_size","u32").declareVariables(v,y)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${y.offsetToIndices("global_idx")};

          ${w.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${S}
          ${k[3]}
          ${k.length===4?y.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ye(p,l)]})}},gn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),Qe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Mt=(e,t,r,a)=>{let i=e.inputs,s=i.length===1?r:gn(i,r);e.compute(Qa(t,{hint:s.cacheKey,inputDependencies:["rank"]},[i[0]],s.noopWithEmptyAxes&&s.axes.length===0?Ko:a,s.axes,i[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Qo=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Zo=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Yo=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Xo=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Jo=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceMax",t,(r,a,i)=>{let s=[];for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},el=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceMean",t,(r,a,i)=>{let s=1;for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${s});`]})},tl=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceMin",t,(r,a,i)=>{let s=[];for(let n=0;n<r.rank;n++)(i.indexOf(n)>=0||i.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},rl=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},al=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},il=(e,t)=>{Bt(e.inputs),Mt(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Pt=(e,t,r)=>{if(t.length===0)return r;let a=1,i=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?a*=e[s]:i*=e[s];return i<32&&a>1024},rc=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?el(e,t):Fp(e,t)},ac=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Zo(e,t):jp(e,t)},ic=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Yo(e,t):Kp(e,t)},nc=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xo(e,t):Qp(e,t)},sc=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jo(e,t):Zp(e,t)},oc=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tl(e,t):Yp(e,t)},lc=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rl(e,t):Xp(e,t)},uc=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?al(e,t):Jp(e,t)},dc=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?il(e,t):ec(e,t)},pc=(e,t)=>{Pt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qo(e,t):tc(e,t)}}),Ai,cc,fc,_n,r_=le(()=>{De(),ut(),Wn(),Ai=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},cc=(e,t)=>{Ai(e.inputs);let r=(a,i,s)=>{let n=[];for(let o=0;o<a.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Qa("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},fc=(e,t)=>{Ai(e.inputs);let r=(a,i,s)=>{let n=[];for(let o=0;o<a.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Qa("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},_n=e=>Qe(e)}),nl,Ra,sl,ol,ll,ca,ul,hc,qn=le(()=>{De(),Ne(),Vn(),Me(),nl=(e,t)=>{let r=e[0],a=e[1],i=e[2],s=e[3],n=e[4],o=e[5];if(n&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],p=r.dims[1],c=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,u=f,m=u;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],u=t.qkvHiddenSizes[1],m=t.qkvHiddenSizes[2]}let _=p;if(f!==u)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+u+m)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(n){if(u!==m)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==u/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=n.dims[3])}let w=_+b,v=-1,y=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:p,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:w,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:f,vHiddenSize:m,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(m/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ra=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,sl=(e,t,r,a,i,s,n,o)=>{let l=st(n?1:s),p=64,c=s/l;c<p&&(p=32);let f=Math.ceil(s/l/p),u=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:c},{type:12,data:f}],m=gt(e.dataType,l),_=wt(1,l),b=["type"];n&&b.push("type"),o&&b.push("type");let w=v=>{let y=he("x",e.dataType,e.dims,l),k=[y],S=n?Z("seq_lens",n.dataType,n.dims):void 0;S&&k.push(S);let E=o?Z("total_sequence_length_input",o.dataType,o.dims):void 0;E&&k.push(E);let T=wt(e.dataType),I=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${v.registerUniforms(I).declareVariables(...k)}
  ${v.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ra(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${y.type.value}(${T}(1.0) / ${T}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${y.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${y.type.value}(${T}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${m};${l}`,inputDependencies:b},getShaderSource:w,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(s/p),y:i,z:t*r},programUniforms:u})}},ol=(e,t,r,a,i,s,n,o,l)=>{let p=n+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,p],f=e>1&&a,u=s.kvNumHeads?s.kvNumHeads:s.numHeads,m=f?[s.batchSize,u,p,s.headSize]:void 0,_=s.nReps?s.nReps:1,b=s.scale===0?1/Math.sqrt(s.headSize):s.scale,w=st(s.headSize),v=s.headSize/w,y=12,k={x:Math.ceil(p/y),y:Math.ceil(s.sequenceLength/y),z:s.batchSize*s.numHeads},S=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:p},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:b},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:_}],E=f&&a&&q.size(a.dims)>0,T=["type","type"];E&&T.push("type"),i&&T.push("type"),o&&T.push("type"),l&&T.push("type");let I=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&I.push({dims:m,dataType:t.dataType,gpuDataType:0});let D=R=>{let W=Z("q",t.dataType,t.dims,w),ne=Z("key",r.dataType,r.dims,w),X=[W,ne];if(E){let oe=Z("past_key",a.dataType,a.dims,w);X.push(oe)}i&&X.push(Z("attention_bias",i.dataType,i.dims));let K=o?Z("seq_lens",o.dataType,o.dims):void 0;K&&X.push(K);let U=l?Z("total_sequence_length_input",l.dataType,l.dims):void 0;U&&X.push(U);let O=he("output",t.dataType,c),V=[O];f&&V.push(he("present_key",t.dataType,m,w));let Y=wt(1,w),J=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;

  var<workgroup> tileQ: array<${W.type.storage}, ${y*y}>;
  var<workgroup> tileK: array<${W.type.storage}, ${y*y}>;
  ${R.registerUniforms(J).declareVariables(...X,...V)}
  ${R.mainStart([y,y,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ra(K,U,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(w){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${w}`)}})()};
        output[outputIdx] = ${O.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${w};${i!==void 0};${a!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:I,dispatchGroup:k,programUniforms:S}),getShaderSource:D}},ll=(e,t,r,a,i,s,n=void 0,o=void 0)=>{let l=s+i.kvSequenceLength,p=i.nReps?i.nReps:1,c=i.vHiddenSize*p,f=e>1&&a,u=i.kvNumHeads?i.kvNumHeads:i.numHeads,m=f?[i.batchSize,u,l,i.headSize]:void 0,_=[i.batchSize,i.sequenceLength,c],b=12,w={x:Math.ceil(i.vHeadSize/b),y:Math.ceil(i.sequenceLength/b),z:i.batchSize*i.numHeads},v=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:p}],y=f&&a&&q.size(a.dims)>0,k=["type","type"];y&&k.push("type"),n&&k.push("type"),o&&k.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:m,dataType:t.dataType,gpuDataType:0});let E=T=>{let I=Z("probs",t.dataType,t.dims),D=Z("v",r.dataType,r.dims),R=[I,D];y&&R.push(Z("past_value",a.dataType,a.dims));let W=n?Z("seq_lens",n.dataType,n.dims):void 0;n&&R.push(W);let ne=o?Z("total_sequence_length_input",o.dataType,o.dims):void 0;o&&R.push(ne);let X=[he("output",t.dataType,_)];f&&X.push(he("present_value",t.dataType,m));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${I.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${I.type.value}, ${b*b}>;
  ${T.registerUniforms(K).declareVariables(...R,...X)}
  ${T.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ra(W,ne,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${y&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${I.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${y&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:S,dispatchGroup:w,programUniforms:v}),getShaderSource:E}},ca=(e,t,r,a,i,s,n,o,l,p,c=void 0,f=void 0)=>{let u=Math.min(e.outputCount,1+(n?1:0)+(o?1:0)),m=u>1?p.pastSequenceLength:0,_=m+p.kvSequenceLength,b=l&&q.size(l.dims)>0?l:void 0,w=[t,r];u>1&&n&&q.size(n.dims)>0&&w.push(n),b&&w.push(b),c&&w.push(c),f&&w.push(f);let v=e.compute(ol(u,t,r,n,b,p,m,c,f),{inputs:w,outputs:u>1?[-1,1]:[-1]})[0];e.compute(sl(v,p.batchSize,p.numHeads,m,p.sequenceLength,_,c,f),{inputs:c&&f?[v,c,f]:[v],outputs:[]});let y=[v,a];u>1&&o&&q.size(o.dims)>0&&y.push(o),c&&y.push(c),f&&y.push(f),e.compute(ll(u,v,a,o,p,m,c,f),{inputs:y,outputs:u>1?[0,2]:[0]})},ul=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,i=t.inputHiddenSize,s=t.headSize,n=12,o={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:a},{type:12,data:i},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let u=he("output_q",l[0].dataType,r),m=he("output_k",l[0].dataType,r),_=he("output_v",l[0].dataType,r),b=Z("input",l[0].dataType,l[0].dims),w=Z("weight",l[1].dataType,l[1].dims),v=Z("bias",l[2].dataType,l[2].dims),y=b.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${y}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${y}, ${n*n}>;
  var<workgroup> tileWeightK: array<${y}, ${n*n}>;
  var<workgroup> tileWeightV: array<${y}, ${n*n}>;
  ${f.registerUniforms(k).declareVariables(b,w,v,u,m,_)}
  ${f.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${y}(0);
    var valueK = ${y}(0);
    var valueV = ${y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:p}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},hc=(e,t)=>{let r=nl(e.inputs,t),[a,i,s]=ul(e,r);return ca(e,a,i,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),dl,pl,cl,mc,a_=le(()=>{Lt(),De(),Ne(),ut(),Me(),dl=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,i,s)=>{let n=i.length;if(n!==a.length)throw new Error(`${s}: num dimensions != ${n}`);i.forEach((o,l)=>{if(o!==a[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},pl=(e,t)=>{let{epsilon:r,spatial:a,format:i}=t,s=e[0].dims,n=a?st(s[s.length-1]):1,o=i==="NHWC"&&s.length>1?n:1,l=q.size(s)/n,p=a,c=p?s.length:s,f=Z("x",e[0].dataType,e[0].dims,n),u=Z("scale",e[1].dataType,e[1].dims,o),m=Z("bias",e[2].dataType,e[2].dims,o),_=Z("inputMean",e[3].dataType,e[3].dims,o),b=Z("inputVar",e[4].dataType,e[4].dims,o),w=he("y",e[0].dataType,c,n),v=()=>{let k="";if(a)k=`let cOffset = ${s.length===1?"0u":i==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(i==="NCHW")k=`
            ${w.indicesSet("outputIndices","0","0")}
            let cOffset = ${w.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${u.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let S=1;S<u.rank;S++)k+=`cIndices[${S}] = outputIndices[${S}];`;k+=`let cOffset = ${u.indicesToOffset("cIndices")};`}return k},y=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(f,u,m,_,b,w)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${w.offsetToIndices(`global_idx * ${n}`)};
    ${v()}
    let scale = ${u.getByOffset("cOffset")};
    let bias = ${m.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${w.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${n}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p?[{type:12,data:l},...ye(s)]:[{type:12,data:l}]})}},cl=e=>Qe(e),mc=(e,t)=>{let{inputs:r,outputCount:a}=e,i=cl({...t,outputCount:a});if(at.webgpu.validateInputContent&&dl(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(pl(r,i))}}),fl,hl,gc,i_=le(()=>{Ne(),Me(),fl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},hl=e=>{let t=e[0].dims,r=e[0].dims[2],a=q.size(t)/4,i=e[0].dataType,s=Z("input",i,t,4),n=Z("bias",i,[r],4),o=Z("residual",i,t,4),l=he("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(s,n,o,l)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},gc=e=>{fl(e.inputs),e.compute(hl(e.inputs))}}),ml,He,_c,yc,bc,$c,vc,wc,xc,kc,Sc,gl,Ec,Tc,Ic,Cc,ua,zc,Wa,Ac,Oc,Dc,Rc,Nc,Bc,Mc,Pc,Uc,Vc,Lc,Wc,qc,Hc,Gc,Fc,Oi,jc,yn,bn,Kc,Qc,Zc,_l,yl,Yc,Hn=le(()=>{De(),Ne(),ut(),Me(),ml=(e,t,r,a,i,s,n)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let p=Z("inputData",r,[o],4),c=he("outputData",a,[o],4),f=[{name:"vec_size",type:"u32"}];return n&&f.push(...n),`
      ${e.registerUniforms(f).declareVariables(p,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},He=(e,t,r,a,i,s=e.dataType,n,o)=>{let l=[{type:12,data:Math.ceil(q.size(e.dims)/4)}];return n&&l.push(...n),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:p=>ml(p,q.size(e.dims),e.dataType,s,r,a,o),getRunData:p=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(q.size(p[0].dims)/64/4)},programUniforms:l})}},_c=e=>{e.compute(He(e.inputs[0],"Abs","abs"))},yc=e=>{e.compute(He(e.inputs[0],"Acos","acos"))},bc=e=>{e.compute(He(e.inputs[0],"Acosh","acosh"))},$c=e=>{e.compute(He(e.inputs[0],"Asin","asin"))},vc=e=>{e.compute(He(e.inputs[0],"Asinh","asinh"))},wc=e=>{e.compute(He(e.inputs[0],"Atan","atan"))},xc=e=>{e.compute(He(e.inputs[0],"Atanh","atanh"))},kc=e=>Qe(e),Sc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(He(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},gl=e=>{let t,r,a=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Qe({min:t,max:r})},Ec=(e,t)=>{let r=t||gl(e.inputs),a=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},Tc=e=>{e.compute(He(e.inputs[0],"Ceil","ceil"))},Ic=e=>{e.compute(He(e.inputs[0],"Cos","cos"))},Cc=e=>{e.compute(He(e.inputs[0],"Cosh","cosh"))},ua=e=>Qe(e),zc=(e,t)=>{let r=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Wa=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Ac=e=>{let t=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Wa(t)))},Oc=e=>{e.compute(He(e.inputs[0],"Exp","exp"))},Dc=e=>{e.compute(He(e.inputs[0],"Floor","floor"))},Rc=e=>{let t=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Wa(t)))},Nc=(e,t)=>{let r=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Bc=e=>{e.compute(He(e.inputs[0],"Not",t=>`!${t}`))},Mc=e=>{e.compute(He(e.inputs[0],"Neg",t=>`-${t}`))},Pc=e=>{e.compute(He(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Uc=e=>{let t=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Vc=e=>{e.compute(He(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Lc=e=>Qe(e),Wc=(e,t)=>{let r=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},qc=e=>{e.compute(He(e.inputs[0],"Sin","sin"))},Hc=e=>{e.compute(He(e.inputs[0],"Sinh","sinh"))},Gc=e=>{e.compute(He(e.inputs[0],"Sqrt","sqrt"))},Fc=e=>{e.compute(He(e.inputs[0],"Tan","tan"))},Oi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,jc=e=>{e.compute(He(e.inputs[0],"Tanh",Oi))},yn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Oi("v")};
}
`,bn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Kc=e=>{let t=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"FastGelu",bn,yn(t),void 0,e.inputs[0].dataType))},Qc=(e,t)=>{let r=wt(e.inputs[0].dataType);return e.compute(He(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Zc=e=>{e.compute(He(e.inputs[0],"Log","log"))},_l=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,yl=e=>`quick_gelu_impl(${e})`,Yc=(e,t)=>{let r=wt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"QuickGelu",yl,_l(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),bl,$l,Xc,n_=le(()=>{Ne(),Me(),Hn(),bl=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},$l=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=Z("input",e[0].dataType,e[0].dims,4),a=Z("bias",e[0].dataType,[e[0].dims[2]],4),i=he("output",e[0].dataType,t,4),s=q.size(t)/4,n=gt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,a,i)}

  ${Wa(n)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Xc=e=>{bl(e.inputs),e.compute($l(e.inputs))}}),vl,wl,Ut,Jc,ef,tf,rf,af,nf,sf,of,lf,uf,s_=le(()=>{De(),Ne(),Me(),vl=(e,t,r,a,i,s,n,o,l,p,c,f)=>{let u,m;typeof o=="string"?u=m=(y,k)=>`${o}((${y}),(${k}))`:typeof o=="function"?u=m=o:(u=o.scalar,m=o.vector);let _=he("outputData",c,a.length,4),b=Z("aData",l,t.length,4),w=Z("bData",p,r.length,4),v;if(i)if(s){let y=q.size(t)===1,k=q.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;y||k?v=_.setByOffset("global_idx",m(y?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),k?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",m(n||S?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||E?w.getByOffset("offsetB / 4u"):`${w.type.value}(${w.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",m(b.getByOffset("global_idx"),w.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let y=(k,S,E="")=>{let T=`aData[indexA${S}][componentA${S}]`,I=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${k}[${S}] = ${E}(${u(T,I)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${y("data",0,"u32")}
            ${y("data",1,"u32")}
            ${y("data",2,"u32")}
            ${y("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${y("outputData[global_idx]",0)}
            ${y("outputData[global_idx]",1)}
            ${y("outputData[global_idx]",2)}
            ${y("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,w,_)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},wl=(e,t,r,a,i,s,n=r.dataType)=>{let o=r.dims.map(b=>Number(b)??1),l=a.dims.map(b=>Number(b)??1),p=!q.areEqual(o,l),c=o,f=q.size(o),u=!1,m=!1,_=[p];if(p){let b=Pr.calcShape(o,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");c=b.slice(),f=q.size(c);let w=q.size(o)===1,v=q.size(l)===1,y=o.length>0&&o[o.length-1]%4===0,k=l.length>0&&l[l.length-1]%4===0;_.push(w),_.push(v),_.push(y),_.push(k);let S=1;for(let E=1;E<c.length;E++){let T=o[o.length-E],I=l[l.length-E];if(T===I)S*=T;else break}S%4===0?(m=!0,u=!0):(w||v||y||k)&&(u=!0)}else u=!0;return _.push(u),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>vl(b,o,l,c,u,p,m,i,r.dataType,a.dataType,n,s),getRunData:()=>({outputs:[{dims:c,dataType:n}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(c)/4)},...ye(o,l,c)]})}},Ut=(e,t,r,a,i,s)=>{e.compute(wl(t,i??"",e.inputs[0],e.inputs[1],r,a,s))},Jc=e=>{Ut(e,"Add",(t,r)=>`${t}+${r}`)},ef=e=>{Ut(e,"Div",(t,r)=>`${t}/${r}`)},tf=e=>{Ut(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},rf=e=>{Ut(e,"Mul",(t,r)=>`${t}*${r}`)},af=e=>{let t=Z("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ut(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},nf=e=>{Ut(e,"Sub",(t,r)=>`${t}-${r}`)},sf=e=>{Ut(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},of=e=>{Ut(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},lf=e=>{Ut(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},uf=e=>{Ut(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),xl,kl,Sl,El,df,pf,o_=le(()=>{De(),Ne(),ut(),Me(),xl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],i=a.dataType,s=a.dims.length;e.forEach((n,o)=>{if(o!==r){if(n.dataType!==i)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((l,p)=>{if(p!==t&&l!==a.dims[p])throw new Error("non concat dimensions must match")})}})},kl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Sl=(e,t)=>{let r=e.length,a=[];for(let i=0;i<r;++i){let s=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?a.push(s):i===0?a.push(`if (inputIndex == ${i}u) { ${s} }`):i===r-1?a.push(`else { ${s} }`):a.push(`else if (inputIndex == ${i}) { ${s} }`)}return a.join(`
`)},El=(e,t,r,a)=>{let i=q.size(r),s=new Array(e.length),n=new Array(e.length),o=0,l=[],p=[],c=[{type:12,data:i}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],s[b]=o,p.push(e[b].dims.length),n[b]=Z(`input${b}`,a,p[b]),l.push("rank"),c.push({type:12,data:s[b]});for(let b=0;b<e.length;++b)c.push(...ye(e[b].dims));c.push(...ye(r));let f=he("output",a,r.length),u=f.indicesGet("indices",t),m=Array.from(Array(s.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let w=0;w<e.length;w++)b.registerUniform(`sizeInConcatAxis${w}`,"u32");return b.declareVariables(...n,f)})()}

  ${kl(s.length,m)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${u});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${m});
      ${u} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Sl(n,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:_}},df=(e,t)=>{let r=e.inputs,a=r[0].dims,i=q.normalizeAxis(t.axis,a.length);xl(r,i);let s=a.slice();s[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let n=r.filter(o=>q.size(o.dims)>0);e.compute(El(n,i,s,r[0].dataType),{inputs:n})},pf=e=>Qe({axis:e.axis})}),xr,kr,Sr,Gn,Tr=le(()=>{De(),Ne(),xr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},kr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Sr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Gn=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,a]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=(e==null?void 0:e.activation_params)||[Vp,Lp];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),yt,cf,Fn=le(()=>{yt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},cf=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),ff,l_=le(()=>{ff=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),pa,jn,Kn=le(()=>{De(),Ne(),Me(),Tr(),pa=(e,t,r,a,i)=>{let s=a-r;return`
      ${Array.from({length:r}).map((n,o)=>`
      if (${ge(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,ge(i,o+s,a))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},jn=(e,t,r,a,i=!1,s)=>{let n=e[0].dims,o=e[1].dims,l=n[n.length-2],p=o[o.length-1],c=n[n.length-1],f=st(p),u=st(c),m=st(l),_=q.size(r)/f/m,b=e.length>2,w=a?a.slice(0,-2):r.slice(0,-2),v=[q.size(w),l,p],y=[{type:12,data:_},{type:12,data:l},{type:12,data:p},{type:12,data:c}];kr(t,y),y.push(...ye(w,n,o)),b&&y.push(...ye(e[2].dims)),y.push(...ye(v));let k=S=>{let E=Ln("batch_dims",e[0].dataType,w.length),T=Z("a",e[0].dataType,n.length,u),I=Z("b",e[1].dataType,o.length,f),D=he("output",e[0].dataType,v.length,f),R=gt(D.type.tensor),W=xr(t,D.type.value,R),ne=[T,I],X="";if(b){let O=i?f:1;ne.push(Z("bias",e[2].dataType,e[2].dims.length,O)),X=`${i?`value += bias[col / ${O}];`:`value += ${D.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Sr(t,K);let U=()=>{let O=`var a_data: ${T.type.value};`;for(let V=0;V<u;V++)O+=`
              let b_data${V} = b[(b_offset + (k + ${V}) * uniforms.N + col) / ${f}];`;for(let V=0;V<m;V++){O+=`a_data = a[(a_offset + (row + ${V}) * uniforms.K + k) / ${u}];`;for(let Y=0;Y<u;Y++)O+=`
            values[${V}] = fma(${I.type.value}(a_data${u===1?"":`[${Y}]`}), b_data${Y}, values[${V}]);
`}return O};return`
  ${S.registerUniforms(K).registerInternalVariables(E).declareVariables(...ne,D)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${m};
    let row = (index1 % stride1) * ${m};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${T.type.indices};
    ${pa("a_indices",T,T.rank-2,E.rank,"batch_indices")}
    ${T.indicesSet("a_indices",T.rank-2,0)}
    ${T.indicesSet("a_indices",T.rank-1,0)}
    let a_offset = ${T.indicesToOffset("a_indices")};

    var b_indices: ${I.type.indices};
    ${pa("b_indices",I,I.rank-2,E.rank,"batch_indices")}
    ${I.indicesSet("b_indices",I.rank-2,0)}
    ${I.indicesSet("b_indices",I.rank-1,0)}
    let b_offset = ${I.indicesToOffset("b_indices")};
    var values: array<${D.type.value}, ${m}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${u}) {
      ${U()}
    }
    for (var i = 0u; i < ${m}u; i++) {
      var value = values[i];
      ${X}
      ${W}
      let cur_indices = ${D.type.indices}(batch, row + i, col);
      let offset = ${D.indicesToOffset("cur_indices")};
      ${D.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${u};${m};${i}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:y}),getShaderSource:k}}}),Tl,Il,$n,Di,Cl,vn,zl,Za,Qn=le(()=>{De(),Ne(),Me(),Tr(),Kn(),Fn(),Tl=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Il=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,$n=(e,t,r="f32",a,i=!1,s=32,n=!1,o=32)=>{let l=t[1]*e[1],p=t[0]*e[0],c=i?l:s,f=i?s:l,u=c/t[0],m=s/t[1];if(!((i&&u===4&&e[1]===4||!i&&(u===3||u===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${u} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${u} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${u}<${r}>, ${c/u}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${u};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${m};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Tl(i,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${u===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Il(i,u)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Di=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Cl=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",vn=(e,t,r="f32",a,i=!1,s=32,n=!1,o=32,l=!1)=>{let p=e[1]*t[1],c=e[0]*t[0],f=i?p:s,u=i?s:p;if(!(u%t[1]===0&&f%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${u} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let m=u/t[1],_=f/t[0],b=s/t[1],w=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Di(i,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${m};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Di(i,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Cl(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${u}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${w}
  }
`},zl=(e,t,r,a,i=!1)=>{let[s,n,o,l]=a,p=gt(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${yt(e,p)} {
      var value = ${yt(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${pa("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${yt(e,p)} {
      var value = ${yt(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${pa("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${yt(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${yt(e,p)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Za=(e,t,r,a,i=!1,s)=>{let n=e[0].dims,o=e[1].dims,l=n.slice(0,-2),p=o.slice(0,-2),c=a?a.slice(0,-2):r.slice(0,-2),f=q.size(c),u=n[n.length-2],m=n[n.length-1],_=o[o.length-1],b=m%4===0&&_%4===0,w=u<=8?[4,1,1]:[4,4,1],v=[8,8,1],y=[Math.ceil(_/v[0]/w[0]),Math.ceil(u/v[1]/w[1]),Math.ceil(f/v[2]/w[2])],k=b?4:1,S=[...l,u,m/k],E=S.length,T=[...p,m,_/k],I=T.length,D=[f,u,_/k],R=[{type:6,data:u},{type:6,data:_},{type:6,data:m}];kr(t,R),R.push(...ye(c,S,T));let W=["rank","rank"],ne=e.length>2;ne&&(R.push(...ye(e[2].dims)),W.push("rank")),R.push(...ye(D));let X=K=>{let U=c.length,O=Ln("batchDims",e[0].dataType,U,1),V=gt(e[0].dataType),Y=Z("a",e[0].dataType,E,k),J=Z("b",e[1].dataType,I,k),oe=he("result",e[0].dataType,D.length,k),se=[Y,J];if(ne){let B=i?k:1;se.push(Z("bias",e[2].dataType,e[2].dims.length,B))}let F=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Sr(t,F);let ie=gt(oe.type.tensor),ee=xr(t,oe.type.value,ie),L=zl(k,ne,ee,[O,Y,J,oe],i);return`
  ${K.registerUniforms(F).registerInternalVariables(O).declareVariables(...se,oe)}
  ${L}
  ${b?$n(w,v,V,O):vn(w,v,V,O)}
                   `};return{name:"MatMul",shaderCache:{hint:`${w};${t.activation};${b};${i}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:y[0],y:y[1],z:y[2]},programUniforms:R}),getShaderSource:X}}}),Al,hf,u_=le(()=>{De(),er(),Me(),Tr(),Fn(),l_(),Qn(),Al=(e,t,r,a,i=!1,s,n=4,o=4,l=4,p="f32")=>{let c=R=>{switch(R){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},f=R=>{switch(R){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${R} is not supported.`)}},u=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,m=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",w=e?"row":"col",v=e?"col":"row",y=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${w} / outWidth;
    let outCol = ${w} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${yt(n,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${u}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(n)}
    }
    return resData;`,k=e?t&&a?`
    let col = colIn * ${n};
    ${y}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${y}
    }
    return ${yt(n,p)}(0.0);`:a&&r?`
    let col = colIn * ${n};
    ${y}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${y}
    }
    return ${yt(n,p)}(0.0);`,S=e?a&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${yt(o,p)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${yt(o,p)}(0.0);`,E=yt(l,p),T=yt(e?n:o,p),I=yt(e?o:n,p),D=xr(s,E,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?k:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?S:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${m}
      ${cf(i)}
      ${D}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},hf=(e,t,r,a,i,s,n,o,l)=>{let p=t.format==="NHWC",c=p?e[0].dims[3]:e[0].dims[1],f=r[0],u=p?r[2]:r[3],m=p?r[1]:r[2],_=p?r[3]:r[1],b=p&&(c%4===0||c%3===0)&&_%4===0,w=p?_:u*m,v=p?u*m:_,y=[8,8,1],k=a<=8?[4,1,1]:[4,4,1],S=[Math.ceil(w/y[0]/k[0]),Math.ceil(v/y[1]/k[1]),Math.ceil(f/y[2]/k[2])];Ke("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=b?p&&c%4!==0?3:4:1,T=y[1]*k[1],I=y[0]*k[0],D=Math.max(y[0]*E,y[1]),R=a%T===0,W=i%I===0,ne=s%D===0,X=b?[E,4,4]:[1,1,1],K=[{type:6,data:a},{type:6,data:i},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];kr(t,K),K.push(...ye(e[0].dims,e[1].dims));let U=["rank","rank"];n&&(K.push(...ye(e[2].dims)),U.push("rank")),K.push(...ye(r));let O=V=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Sr(t,Y);let J=b?4:1,oe=gt(e[0].dataType),se=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${oe}>`:oe}) {
        result[flatIndex] = ${b?`vec4<${oe}>`:oe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${oe}>`:oe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,F=Z("x",e[0].dataType,e[0].dims.length,E===3?1:E),ie=Z("w",e[1].dataType,e[1].dims.length,J),ee=[F,ie],L=he("result",e[0].dataType,r.length,J);if(n){let B=Z("bias",e[2].dataType,e[2].dims.length,J);ee.push(B),se+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${oe}>`:oe} {
          return bias[coords.${p?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${ff("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${V.registerUniforms(Y).declareVariables(...ee,L)}
        ${se}
        ${Al(p,R,W,ne,n,t,X[0],X[1],X[2],oe)}
        ${b?$n(k,y,oe,void 0,!p,D):vn(k,y,oe,void 0,!p,D,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${R};${W};${ne};${T};${I};${D}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:K}),getShaderSource:O}}}),Ol,Ri,ea,Dl,Ni,Rl,mf,gf,d_=le(()=>{De(),er(),Ne(),Me(),Tr(),Fn(),Ol=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ri=e=>typeof e=="number"?[e,e,e]:e,ea=(e,t)=>t<=1?e:e+(e-1)*(t-1),Dl=(e,t,r,a=1)=>{let i=ea(t,a);return Math.floor((e[0]*(r-1)-r+i)/2)},Ni=(e,t,r,a,i)=>{i==null&&(i=Dl(e,t[0],a[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*i)/a[n]+1));return s},Rl=(e,t,r,a,i,s,n,o,l,p)=>{let c,f,u,m;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Ni([t,r,a,1],[o,l,p],1,[i,s,n],e);f=_[0],u=_[1],m=_[2]}else if(Array.isArray(e)){if(!e.every((b,w,v)=>b===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Ni([t,r,a,1],[o,l,p],1,[i,s,n],e[0]);f=_[0],u=_[1],m=_[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),u=Math.ceil(r/s),m=Math.ceil(a/n);let _=(f-1)*i+o-t,b=(u-1)*s+l-r,w=(m-1)*n+p-a,v=Math.floor(_/2),y=_-v,k=Math.floor(b/2),S=b-k,E=Math.floor(w/2),T=w-E;c={top:k,bottom:S,left:E,right:T,front:v,back:y}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:u,outWidth:m}},mf=(e,t,r,a,i,s=!1,n="channelsLast")=>{let o,l,p,c,f;if(n==="channelsLast")[o,l,p,c,f]=e;else if(n==="channelsFirst")[o,f,l,p,c]=e;else throw new Error(`Unknown dataFormat ${n}`);let[u,,m,_,b]=t,[w,v,y]=Ri(r),[k,S,E]=Ri(a),T=ea(m,k),I=ea(_,S),D=ea(b,E),{padInfo:R,outDepth:W,outHeight:ne,outWidth:X}=Rl(i,l,p,c,w,v,y,T,I,D),K=s?u*f:u,U=[0,0,0,0,0];return n==="channelsFirst"?U=[o,K,W,ne,X]:n==="channelsLast"&&(U=[o,W,ne,X,K]),{batchSize:o,dataFormat:n,inDepth:l,inHeight:p,inWidth:c,inChannels:f,outDepth:W,outHeight:ne,outWidth:X,outChannels:K,padInfo:R,strideDepth:w,strideHeight:v,strideWidth:y,filterDepth:m,filterHeight:_,filterWidth:b,effectiveFilterDepth:T,effectiveFilterHeight:I,effectiveFilterWidth:D,dilationDepth:k,dilationHeight:S,dilationWidth:E,inShape:e,outShape:U,filterShape:t}},gf=(e,t,r,a,i,s)=>{let n=s==="channelsLast";n?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((w,v)=>v)},p=[Math.ceil(Ol(l.x.map(w=>r[w]))/o[0]),1,1];Ke("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let c=1,f=q.size(r),u=[{type:12,data:f},{type:12,data:a},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];kr(t,u),u.push(...ye(e[0].dims,e[1].dims));let m=["rank","rank"],_=e.length===3;_&&(u.push(...ye(e[2].dims)),m.push("rank")),u.push(...ye(r));let b=w=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Sr(t,v);let y=1,k=gt(e[0].dataType),S=Z("x",e[0].dataType,e[0].dims.length,c),E=Z("W",e[1].dataType,e[1].dims.length,y),T=[S,E],I=he("result",e[0].dataType,r.length,y),D="";if(_){let ne=Z("bias",e[2].dataType,e[2].dims.length,y);T.push(ne),D+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${n?ge("coords",4,5):ge("coords",1,5)}];
        }`}let R=yt(c,k),W=xr(t,R,k);return`
            ${D}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${w.registerUniforms(v).declareVariables(...T,I)}
          ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${I.offsetToIndices("global_idx")};
              let batch = ${ge("coords",0,S.rank)};
              let d2 = ${n?ge("coords",S.rank-1,S.rank):ge("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${n?ge("coords",1,S.rank):ge("coords",2,S.rank)},
              ${n?ge("coords",2,S.rank):ge("coords",3,S.rank)},
              ${n?ge("coords",3,S.rank):ge("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?ge("uniforms.x_shape",1,S.rank):ge("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${n?ge("uniforms.x_shape",2,S.rank):ge("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${n?ge("uniforms.x_shape",3,S.rank):ge("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${n?ge("uniforms.x_shape",4,S.rank):ge("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${W}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${c};${_}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:u}),getShaderSource:b}}}),_f,yf,p_=le(()=>{De(),Ne(),Me(),Tr(),_f=(e,t,r,a)=>{let i=e.length>2,s=i?"value += b[output_channel];":"",n=e[0].dims,o=e[1].dims,l=t.format==="NHWC",p=l?r[3]:r[1],c=p/t.group,f=l&&c>=4?st(p):1,u=q.size(r)/f,m=[{type:12,data:u},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];kr(t,m),m.push(...ye(n,[o[0],o[1],o[2],o[3]/f]));let _=i?["rank","rank","rank"]:["rank","rank"];m.push(...ye([r[0],r[1],r[2],r[3]/f]));let b=w=>{let v=he("output",e[0].dataType,r.length,f),y=gt(v.type.tensor),k=xr(t,v.type.value,y),S=Z("x",e[0].dataType,n.length),E=Z("w",e[1].dataType,o.length,f),T=[S,E];i&&T.push(Z("b",e[2].dataType,e[2].dims,f));let I=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Sr(t,I);let D=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${w.registerUniforms(I).declareVariables(...T,v)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${D}
    ${s}
    ${k}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:b}},yf=(e,t,r,a)=>{let i=e.length>2,s=st(r[3]),n=st(r[2]),o=q.size(r)/s/n,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];kr(t,f),f.push(...ye(l,p,c));let u=(n-1)*t.strides[1]+p[1],m=_=>{let b=he("output",e[0].dataType,c.length,s),w=gt(b.type.tensor),v=xr(t,b.type.value,w),y=Z("x",e[0].dataType,l.length,s),k=Z("w",e[1].dataType,p.length,s),S=[y,k];i&&S.push(Z("b",e[2].dataType,e[2].dims,s));let E=i?"value += b[output_channel];":"",T=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Sr(t,T),`
  ${_.registerUniforms(T).declareVariables(...S,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${y.type.value}, ${u}>;
    var values: array<${b.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${u}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${y.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${y.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${E}
      ${v}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${u};${p[0]};${p[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:m}}}),Nl,Na,Bl,Ba,wn,Bi,Ml,Pl,xn,c_=le(()=>{Ne(),u_(),d_(),Qn(),p_(),Tr(),Kn(),pr(),Nl=(e,t,r,a,i,s)=>{let n=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,p=t[0],c=t.slice(2).map((u,m)=>u+(u-1)*(r[m]-1)),f=o.map((u,m)=>u+a[m]+a[m+l]).map((u,m)=>Math.floor((u-c[m]+i[m])/i[m]));return f.splice(0,0,n),f.splice(s?3:1,0,p),f},Na=[2,3,1,0],Bl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ba=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let a=e.pads.slice();Ka.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:a}),i},wn=e=>{let t=Gn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,s=e.group,n=e.kernel_shape,o=e.pads,l=e.strides,p=e.w_is_const();return{autoPad:a,format:r,dilations:i,group:s,kernelShape:n,pads:o,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Bi=(e,t,r,a)=>{let i=r.format==="NHWC",s=Nl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let T=[t[0]];if(i){let I=e.kernelCustomData.wT??e.compute(At(t[1],Na),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I),T.push(I)}else T.push(t[1]);t.length===3&&T.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(yf(T,r,s,a),{inputs:T}):e.compute(_f(T,r,s,a),{inputs:T});return}let n=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],p=t[0].dims[i?3:1],c=t[1].dims[2],f=t[1].dims[3],u=s[i?1:2],m=s[i?2:3],_=s[i?3:1],b=i&&c===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(b||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let T=s[0],I,D,R,W=[];if(i){let K=e.kernelCustomData.wT??e.compute(At(t[1],Na),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),b){let U=o*l*p;I=t[0].reshape([1,T,U]),D=K.reshape([1,U,_]),R=[1,T,_]}else I=t[0].reshape([T,o*l,p]),D=K.reshape([1,p,_]),R=[T,u*m,_];W.push(I),W.push(D)}else I=t[0].reshape([T,p,o*l]),D=t[1].reshape([1,_,p]),R=[T,_,u*m],W.push(D),W.push(I);n&&W.push(t[2]);let ne=R[2],X=W[0].dims[W[0].dims.length-1];ne<8&&X<8?e.compute(jn(W,r,s,R,i,a),{inputs:W}):e.compute(Za(W,r,s,R,i,a),{inputs:W});return}let w=!0,v=e.kernelCustomData.wT??e.compute(At(t[1],Na),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let y=[t[0],v];n&&y.push(t[2]);let k=i?u*m:_,S=i?_:u*m,E=c*f*p;e.compute(hf(y,r,s,k,S,E,n,w,a),{inputs:y})},Ml=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Ba({...t,pads:i,strides:s,dilations:n,kernelShape:o},a);Bi(e,a,l,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Pl=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Ba(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=mf(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,a);e.compute(gf(t,i,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],a))},xn=(e,t)=>{if(Bl(e.inputs,t),e.inputs[0].dims.length===3)Ml(e,t);else if(e.inputs[0].dims.length===5)Pl(e,e.inputs,t);else{let r=Ba(t,e.inputs);Bi(e,e.inputs,r)}}}),bf,f_=le(()=>{De(),er(),Ne(),Me(),bf=(e,t,r)=>{let a=e.length>2,i=t.outputShape,s=t.format==="NHWC",n=t.group,o=e[1].dims,l=o[2]/n,p=o[3],c=s?st(l):1,f=s?st(p):1,u=s?p===1?c:f:1,m=q.size(i)/f,_=[Math.ceil(m/64),1,1];Ke("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let b=["rank","rank"],w=[t.strides[0],t.strides[1]],v=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],y=[t.dilations[0],t.dilations[1]],k=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],S=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],E=[{type:12,data:m},{type:12,data:w},{type:12,data:v},{type:12,data:y},{type:12,data:k},{type:6,data:S},{type:12,data:l},{type:12,data:p},...ye(e[0].dims,e[1].dims)];a&&(E.push(...ye(e[2].dims)),b.push("rank")),E.push(...ye(i));let T=I=>{let D=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:w.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:S.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],R=gt(e[0].dataType),W=s?1:2,ne=s?2:3,X=s?3:1,K=Z("W",e[1].dataType,e[1].dims.length,u),U=Z("Dy",e[0].dataType,e[0].dims.length,c),O=[U,K];a&&O.push(Z("bias",e[2].dataType,[i[X]].length,f));let V=he("result",e[0].dataType,i.length,f),Y=()=>{let oe="";if(c===1)oe+=`
        let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${K.getByOffset(`w_offset / ${u}`)};
        dotProd = dotProd + xValue * wValue;`;else if(p===1)oe+=`
          let wValue = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${u}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let se=0;se<c;se++)oe+=`
            let wValue${se} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${se}, wOutChannel)`)} / ${u}`)};
            dotProd = dotProd + xValue[${se}] * wValue${se};`;return oe},J=`
            let outputIndices = ${V.offsetToIndices(`global_idx * ${f}`)};
            let batch = ${V.indicesGet("outputIndices",0)};
            let d1 = ${V.indicesGet("outputIndices",X)};
            let r = ${V.indicesGet("outputIndices",W)};
            let c = ${V.indicesGet("outputIndices",ne)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${V.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${R}(dyRCorner) + ${R}(wR)) / ${R}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${R}(uniforms.Dy_shape[${W}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${R}(dyCCorner) + ${R}(wC)) / ${R}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${R}(uniforms.Dy_shape[${ne}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${c}) {
                  let xValue = ${s?U.getByOffset(`${U.indicesToOffset(`${U.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):U.get("batch","inputChannel","idyR","idyC")};
                  ${Y()}
                  inputChannel = inputChannel + ${c};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${f}]`:""};
            ${V.setByOffset("global_idx","value")};
          `;return`
    ${I.registerUniforms(D).declareVariables(...O,V)}
      ${I.mainStart()}
      ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${J}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${u}${f}${p===1}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:E}),getShaderSource:T}}}),Ul,Vl,Ll,Mi,$f,Wl,Pi,ql,vf,h_=le(()=>{f_(),Tr(),pr(),Ul=(e,t,r,a,i,s)=>(e-1)*t+r+(a-1)*i+1-s,Vl=(e,t,r,a,i)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=s,r[i]=e-s):t==="SAME_LOWER"&&(r[a]=e-s,r[i]=s)},Ll=(e,t,r,a,i,s,n,o,l,p)=>{let c=e.length-2,f=p.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let u=e[0],m=t[o?3:1]*i;for(let _=0,b=e.length-c-(o?1:0);_<c;++_,++b){let w=e[b],v=f?w*n[_]:p[_],y=Ul(w,n[_],s[_],t[b],r[_],v);Vl(y,a,s,_,_+c),f&&p.push(n[_]*(w-1)+l[_]+(t[b]-1)*r[_]+1-s[_]-s[_+c])}p.splice(0,0,u),p.splice(o?3:1,0,m)},Mi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,u)=>f*u,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let i=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,u)=>f+u,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let p=e.strides.slice();if(p.reduce((f,u)=>f+u,0)===0){let f=t[0].dims.length-2;p=new Array(f).fill(1)}Ll(o,r,l,e.autoPad,e.group,i,p,a,n,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:i,outputPadding:n,outputShape:s,dilations:l,strides:p}),c},$f=e=>{let t=Gn(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,s=e.group,n=e.kernelShape,o=e.pads,l=e.strides,p=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:a,format:r,dilations:i,group:s,kernelShape:n,outputPadding:c,outputShape:f,pads:o,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Wl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,o)=>n+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,o)=>n+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,o)=>n+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,o)=>n+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Pi=(e,t,r,a)=>{let i=e.kernelCustomData.wT??e.compute(At(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let s=[t[0],i];t.length===3&&s.push(t[2]),e.compute(bf(s,r,a),{inputs:s})},ql=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],n=[1].concat(n),s=[1].concat(s),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let p=Mi({...t,pads:o,strides:n,dilations:s,kernelShape:i,outputPadding:l},a);Pi(e,a,p,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},vf=(e,t)=>{if(Wl(e.inputs,t),e.inputs[0].dims.length===3)ql(e,t);else{let r=Mi(t,e.inputs);Pi(e,e.inputs,r)}}}),Hl,wf,xf,m_=le(()=>{De(),Ne(),ut(),Me(),Hl=(e,t,r,a)=>{let i=q.size(t),s=t.length,n=Z("input",e,s),o=he("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=q.normalizeAxis(l,s),c=f=>{let u=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,m=ge("uniforms.input_shape","uniforms.axis",s),_=a.reverse?u+(a.exclusive?" + 1":""):"0",b=a.reverse?m:u+(a.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:p},...ye(t,t)]}),getShaderSource:c}},wf=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,i=e.inputs[1];e.compute(Hl(a,r,i,t),{inputs:[0]})},xf=e=>{let t=e.exclusive===1,r=e.reverse===1;return Qe({exclusive:t,reverse:r})}}),Gl,Fl,jl,kf,Sf,g_=le(()=>{De(),Ne(),ut(),Me(),Gl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Fl=(e,t,r,a)=>{let i=[];i.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)i.push(r.indicesSet("a",e[s],`i[${s}]`));return i.push("return a;}"),i.join(`
`)},jl=(e,t)=>{let r,a,i,s,n,o,l=t.format==="NHWC",p=t.blocksize,c=t.mode==="DCR";l?([r,a,i,s]=e.dims,n=c?[r,a,i,p,p,s/p**2]:[r,a,i,s/p**2,p,p],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,i,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=c?[r,p,p,s/p**2,a,i]:[r,s/p**2,p,p,a,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(n),u=f.dims.length,m=e.dataType,_=Z("a",m,u),b=he("output",m,u),w=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Fl(o,u,_,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let y=l?[r,a*p,i*p,s/p**2]:[r,s/p**2,a*p,i*p],k=q.size(y),S=f.dims,E=q.sortBasedOnPerm(S,o);return{outputs:[{dims:y,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...ye(S,E)]}},getShaderSource:w}},kf=(e,t)=>{Gl(e.inputs),e.compute(jl(e.inputs[0],t))},Sf=e=>Qe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ma,ta,Ui,Kl,Ql,Zl,Yl,Vi,Xl,Ef,Tf,__=le(()=>{De(),Ne(),ut(),Me(),Ma="[a-zA-Z]|\\.\\.\\.",ta="("+Ma+")+",Ui="^"+ta+"$",Kl="("+ta+",)*"+ta,Ql="^"+Kl+"$",Zl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Yl=class{constructor(e,t){var i;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Ql)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,n)=>{let o=e[n].dims.slice();if(!s.match(RegExp(Ui)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,o,n);this.lhs.push(l)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([s,n])=>n.count===1||s==="...").map(([s])=>s).join("");else if(!a.match(RegExp(ta)))throw new Error("Invalid RHS");(i=a.match(RegExp(Ma,"g")))==null||i.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(s);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let i=r.length,s=!1,n=[],o=0;if(!e.match(RegExp(Ui))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Ma,"g")),p=new Zl(a);return l==null||l.forEach((c,f)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let u=i-l.length+1;if(u<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(o,o+u),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let m=0;m<n.length;m++){let _=String.fromCharCode(48+m);p.addSymbol(_,f+m),this.addSymbol(_,r[o++],a)}}else p.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],a)}),p}},Vi=e=>e+"_max",Xl=(e,t,r,a)=>{let i=e.map(p=>p.length).map((p,c)=>Z(`input${c}`,t,p)),s=q.size(a),n=he("output",t,a.length),o=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),l=p=>{let c=[],f="var prod = 1.0;",u="var sum = 0.0;",m="sum += prod;",_=[],b=[],w=[],v=[],y=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,E)=>{var T;if(r.rhs.symbolToIndices.has(E)){let I=(T=r.rhs.symbolToIndices.get(E))==null?void 0:T[0];I!==void 0&&r.lhs.forEach((D,R)=>{if(S.inputIndices.includes(R)){let W=D.symbolToIndices.get(E);if(W===void 0)throw new Error("Invalid symbol error");W.forEach(ne=>{c.push(`${i[R].indicesSet(`input${R}Indices`,ne,n.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,D)=>{if(S.inputIndices.includes(D)){let R=I.symbolToIndices.get(E);if(R===void 0)throw new Error("Invalid symbol error");R.forEach(W=>{_.push(`${i[D].indicesSet(`input${D}Indices`,W,`${E}`)}`)}),v.push(`prod *= ${i[D].getByIndices(`input${D}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Vi(E)}; ${E}++) {`),w.push("}")});let k=y?[...c,`let sum = ${i.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,u,...b,..._,f,...v,m,...w];return`
            ${p.registerUniforms(o.map(S=>({name:`${Vi(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,n)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${i.map((S,E)=>`var input${E}Indices: ${i[E].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var u;return{type:12,data:((u=r.symbolToInfo.get(f))==null?void 0:u.dimValue)||0}});p.push({type:12,data:s});let c=e.map((f,u)=>[...ye(f)]).reduce((f,u)=>f.concat(u),p);return c.push(...ye(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},Ef=(e,t)=>{let r=new Yl(e.inputs,t.equation),a=r.outputDims,i=e.inputs.map((s,n)=>s.dims);e.compute(Xl(i,e.inputs[0].dataType,r,a))},Tf=e=>{let t=e.equation.replace(/\s+/g,"");return Qe({equation:t})}}),Jl,Li,eu,tu,If,y_=le(()=>{De(),Ne(),Me(),Jl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;a<r.length&&i<t.length;++a,++i)if(r[a]!==t[i]&&r[a]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Li=(e,t)=>{let r=e.length-t.length,a=[];for(let i=0;i<r;++i)a.push(e[i]);for(let i=0;i<t.length;++i)a.push(t[i]===1?e[i+r]:t[i]);return a},eu=(e,t)=>e.length>t.length?Li(e,t):Li(t,e),tu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=eu(t,r),i=e[0].dataType,s=i===9||q.size(t)===1,n=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||a.length>0&&a[a.length-1]%4===0?4:1,l=Math.ceil(q.size(a)/o),p=f=>{let u=Z("input",i,t.length,n),m=he("output",i,a.length,o),_;if(i===9){let b=(w,v,y="")=>`
          let outputIndices${v} = ${m.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${u.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${w}[${v}] = ${y}(${u.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${m.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${m.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${u.broadcastedIndicesToOffset("outputIndices",m)};
        let data = ${m.type.value}(${u.getByOffset(`inputOffset / ${n}`)});
        ${m.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(u,m)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...ye(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${n}${o}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},If=e=>{Jl(e.inputs),e.compute(tu(e.inputs),{inputs:[0]})}}),ru,Cf,b_=le(()=>{De(),Ne(),Me(),Hn(),ru=e=>{let t=e[0].dataType,r=q.size(e[0].dims),a=q.size(e[1].dims),i=a%4===0,s=n=>{let o=Z("x",t,[1],4),l=Z("bias",t,[1],4),p=he("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=m=>`
      let bias${m}_offset: u32 = (global_idx * 4 + ${m}) % uniforms.bias_size;
      let bias${m} = ${l.getByOffset(`bias${m}_offset / 4`)}[bias${m}_offset % 4];`,u=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(c).declareVariables(o,l,p)}

    ${yn(wt(t))}

    ${n.mainStart(Ur)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${u}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",bn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Ur/4)}})}},Cf=e=>{e.inputs.length<2||q.size(e.inputs[1].dims)===0?Kc(e):e.compute(ru(e.inputs))}}),au,iu,zf,Af,$_=le(()=>{De(),Ne(),ut(),Me(),au=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},iu=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,s=q.normalizeAxis(t.axis,i),n=r.slice(0);n.splice(s,1,...a);let o=r[s],l=e[0].dataType===9?4:1,p=Math.ceil(q.size(n)/l),c=[{type:12,data:p},{type:6,data:o},{type:12,data:s},...ye(e[0].dims,e[1].dims,n)],f=u=>{let m=Z("data",e[0].dataType,e[0].dims.length,l),_=Z("inputIndices",e[1].dataType,e[1].dims.length),b=he("output",e[0].dataType,n.length,l),w=y=>{let k=a.length,S=`var indicesIndices${y}  = ${_.type.indices}(0);`;for(let E=0;E<k;E++)S+=`${k>1?`indicesIndices${y}[${E}]`:`indicesIndices${y}`} = ${n.length>1?`outputIndices${y}[uniforms.axis + ${E}]`:`outputIndices${y}`};`;S+=`
          var idx${y} = ${_.getByIndices(`indicesIndices${y}`)};
          if (idx${y} < 0) {
            idx${y} = idx${y} + uniforms.axisDimLimit;
          }
          var dataIndices${y} : ${m.type.indices};
        `;for(let E=0,T=0;E<i;E++)E===s?(S+=`${i>1?`dataIndices${y}[${E}]`:`dataIndices${y}`} = u32(idx${y});`,T+=k):(S+=`${i>1?`dataIndices${y}[${E}]`:`dataIndices${y}`} = ${n.length>1?`outputIndices${y}[${T}]`:`outputIndices${y}`};`,T++);return S},v;if(e[0].dataType===9){let y=(k,S,E="")=>`
          let outputIndices${S} = ${b.offsetToIndices(`outputOffset + ${S}u`)};
          ${w(S)};
          let offset${S} = ${m.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${k}[${S}] = ${E}(${m.getByOffset(`index${S}`)}[component${S}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${y("value",0,"u32")}
        ${y("value",1,"u32")}
        ${y("value",2,"u32")}
        ${y("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${w("")};
      let value = ${m.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${u.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,_,b)}
      ${u.mainStart()}
        ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c}),getShaderSource:f}},zf=e=>Qe({axis:e.axis}),Af=(e,t)=>{let r=e.inputs;au(r),e.compute(iu(e.inputs,t))}}),nu,Of,Df,v_=le(()=>{De(),Ne(),Me(),nu=(e,t,r,a,i,s,n,o,l)=>{let p=[{type:12,data:s},{type:12,data:a},{type:12,data:i},{type:12,data:r},{type:12,data:n},{type:12,data:o},{type:12,data:l}],c=[s];p.push(...ye(t.dims,c));let f=u=>{let m=Z("indices_data",t.dataType,t.dims.length),_=he("input_slice_offsets_data",12,1,1),b=[m,_],w=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${u.registerUniforms(w).declareVariables(...b)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Of=(e,t)=>{let r=e.inputs,a=r[0].dims,i=r[0].dataType,s=r[1].dims,n=s[s.length-1],o=q.sizeToDimension(s,s.length-1),l=q.sizeFromDimension(a,t.batchDims+n),p=q.sizeToDimension(a,t.batchDims),c=q.sizeFromDimension(a,t.batchDims),f=o/p,u=new Array(n),m=l;for(let S=0;S<n;++S)u[n-1-S]=m,m*=a[t.batchDims+n-1-S];let _=nu(e,r[1],u,t.batchDims,a,o,f,c,n),b=t.batchDims+n;if(b>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let w=s.slice(0,-1).concat(a.slice(b)),v=q.size(w),y=[{type:12,data:v},{type:12,data:l},...ye(r[0].dims,_.dims,w)],k=S=>{let E=Z("data",r[0].dataType,r[0].dims.length),T=Z("slice_offsets",12,_.dims.length),I=he("output",r[0].dataType,w.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,T,I)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:w,dataType:i}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:y}),getShaderSource:k},{inputs:[r[0],_]})},Df=e=>({batchDims:e.batch_dims,cacheKey:""})}),su,ou,Rf,Nf,w_=le(()=>{De(),Ne(),ut(),Me(),su=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=q.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,i=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/a)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ou=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,s=q.normalizeAxis(t.gatherAxis,i),n=q.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(s,1,...a);let l=q.size(o),p=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...ye(...e.map((m,_)=>m.dims),o)],u=m=>{let _=Z("data",e[0].dataType,e[0].dims.length),b=Z("inputIndices",e[1].dataType,e[1].dims.length),w=Z("scales",e[2].dataType,e[2].dims.length),v=e.length>3?Z("zeroPoint",e[3].dataType,e[3].dims.length):void 0,y=he("output",p,o.length),k=[_,b,w];v&&k.push(v);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${m.registerUniforms(S).declareVariables(...k,y)}
        ${m.mainStart()}
        let output_indices = ${y.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${y.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${y.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${y.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${y.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${w.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${w.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${w.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${wt(p)}(quantized_data - zero_point) * scale;
        ${y.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((m,_)=>_!==1).map(m=>m.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(m,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:p}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:u}},Rf=(e,t)=>{let r=e.inputs;su(r,t),e.compute(ou(e.inputs,t))},Nf=e=>Qe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),lu,uu,Bf,Mf,x_=le(()=>{De(),Ne(),ut(),Me(),lu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},uu=(e,t)=>{let r=e[0].dims,a=e[0].dataType,i=r.length,s=e[1].dims,n=e[1].dataType,o=q.normalizeAxis(t.axis,i),l=r[o],p=s.slice(0),c=q.size(p),f=Z("input",a,i),u=Z("indicesInput",n,s.length),m=he("output",a,p.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return _.push(...ye(r,s,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,u,m)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${m.offsetToIndices("global_idx")};

      var idx = ${u.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${m.setByOffset("global_idx","value")};
  }`}},Bf=e=>Qe({axis:e.axis}),Mf=(e,t)=>{let r=e.inputs;lu(r),e.compute(uu(e.inputs,t))}}),du,pu,Pf,Uf,k_=le(()=>{De(),Ne(),Me(),du=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},pu=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[i,s,n]=Up.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),o=[i,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,p=Math.ceil(s/l),c=Math.ceil(i/l),f=!0,u=q.size(o),m=[{type:12,data:f?p:u},{type:12,data:i},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(m.push(...ye(e[2].dims)),_.push("rank")),m.push(...ye(o));let b=v=>{let y="";t.transA&&t.transB?y="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?y="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?y="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(y="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",S=Z("a",e[0].dataType,e[0].dims),E=Z("b",e[1].dataType,e[1].dims),T=S.type.value,I=null,D=[S,E];e.length===3&&(I=Z("c",e[2].dataType,e[2].dims.length),D.push(I));let R=he("output",e[0].dataType,o.length);D.push(R);let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(W).declareVariables(...D)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${T}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${y}
    }

    ${k}
    ${I!=null?`let cOffset = ${I.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${T}(uniforms.beta) * ${I.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},w=v=>{let y=Z("a",e[0].dataType,e[0].dims),k=Z("b",e[1].dataType,e[1].dims),S=null,E=[y,k];e.length===3&&(S=Z("c",e[2].dataType,e[2].dims.length),E.push(S));let T=he("output",e[0].dataType,o.length);E.push(T);let I=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],D="",R="";t.transA&&t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(R=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(R=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let W=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(I).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${y.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${R}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${D}
      }
      workgroupBarrier();
    }

    ${W}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:p*c},programUniforms:m}),getShaderSource:w}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:b}},Pf=e=>{let t=e.transA,r=e.transB,a=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:a,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Uf=(e,t)=>{du(e.inputs),e.compute(pu(e.inputs,t))}}),Gt,Xt,gr,_r,cu,fu,hu,mu,gu,_u,yu,bu,Vf,Lf,S_=le(()=>{De(),Ne(),ut(),Me(),[Gt,Xt,gr,_r]=[0,1,2,3],cu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},fu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,hu=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,mu=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,gu=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,_u=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Gt}] = batch;
     indices[${Xt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${gr}] = u32(r);
            indices[${_r}] = u32(c);
          }
        `;case"border":return`
          indices[${gr}] = u32(clamp(r, 0, H - 1));
          indices[${_r}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${gr}] = gs_reflect(r, border[1], border[3]);
          indices[${_r}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,yu=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Gt}], indices[${Xt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Gt}], indices[${Xt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Gt}], indices[${Xt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Gt}], indices[${Xt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Gt}], indices[${Xt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Gt}], indices[${Xt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,bu=(e,t)=>{let r=Z("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=Z("grid",e[1].dataType,a.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Gt,Xt,gr,_r]=[0,3,1,2]);let n=he("output",e[0].dataType,s.length),o=r.type.value,l=q.size(s),p=[{type:12,data:l},...ye(e[0].dims,a,s)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,n)}
  ${fu}
  ${hu(o)}
  ${mu(t)}
  ${gu(t)}
  ${_u(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${gr}]);
      let W_in = i32(uniforms.x_shape[${_r}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Gt}], indices[${gr}], indices[${_r}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${yu(n,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let u=q.size(s);return{outputs:[{dims:s,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}},getShaderSource:c}},Vf=(e,t)=>{cu(e.inputs),e.compute(bu(e.inputs,t))},Lf=e=>Qe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),xt,$u,Wf,Wi,vu,da,qf,Hf=le(()=>{De(),Ne(),ut(),Vn(),qn(),Me(),pr(),xt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,$u=(e,t)=>{let r=e[0],a=xt(e,1),i=xt(e,2),s=xt(e,3),n=xt(e,4),o=xt(e,5),l=xt(e,6),p=xt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],u=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],m=f,_=0,b=0,w=Math.floor(u/t.numHeads);if(l&&p&&q.size(l.dims)&&q.size(p.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==w)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==c||p.dims[1]!==t.numHeads||p.dims[3]!==w)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],b=l.dims[2]}else if(l&&q.size(l.dims)||p&&q.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(a&&q.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,m=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==w)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,m=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==w)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,m=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&q.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let y=_+m,k=0;if(n&&q.size(n.dims)>0){k=8;let I=n.dims;throw I.length===1?I[0]===c?k=1:I[0]===3*c+2&&(k=3):I.length===2&&I[0]===c&&I[1]===y&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=u;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(m!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=i.dims[2]}else{if(m!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=i.dims[1]*i.dims[3],S=!0}}let T=!1;if(n&&q.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(o&&q.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==y)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:m,totalSequenceLength:y,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:u,vHiddenSize:E,headSize:w,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:T,passPastInKv:S,qkvFormat:v}},Wf=e=>Qe({...e}),Wi=Qe({perm:[0,2,1,3]}),vu=(e,t,r,a,i,s,n)=>{let o=[a,i,s],l=q.size(o),p=[{type:12,data:l},{type:12,data:n},{type:12,data:s}],c=f=>{let u=he("qkv_with_bias",t.dataType,o),m=Z("qkv",t.dataType,o),_=Z("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(m,_,u)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},da=(e,t,r,a,i,s,n,o)=>{let l=s;if(n&&q.size(n.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=vu(e,s,n,t,a,r*i,o),l=l.reshape([t,a,r,i]),r===1||a===1?l:e.compute(At(l,Wi.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,a,r,i])),r===1||a===1?l:e.compute(At(l,Wi.perm),{inputs:[l],outputs:[-1]})[0]},qf=(e,t)=>{let r=$u(e.inputs,t),a=e.inputs[0],i=xt(e.inputs,1),s=xt(e.inputs,2),n=xt(e.inputs,3),o=xt(e.inputs,4),l=xt(e.inputs,5),p=xt(e.inputs,6),c=xt(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if((i==null?void 0:i.dims.length)===5)throw new Error("Packed KV is not implemented");let f=i&&s&&i.dims.length===4&&s.dims.length===4,u=da(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,n,0);if(f)return ca(e,u,i,s,o,void 0,p,c,l,r);if(!i||!s)throw new Error("key and value must be provided");let m=da(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,n,r.hiddenSize),_=da(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);ca(e,u,m,_,o,void 0,p,c,l,r)}}),wu,xu,ku,Su,kn,Gf,Ff,jf=le(()=>{De(),Ne(),ut(),Me(),wu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},xu=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),a=r.length),Qe({numOutputs:a,axis:t.axis,splitSizes:r})},ku=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ge("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Su=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let i=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(i):a===0?r.push(`if (output_number == ${a}u) { ${i} }`):a===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${a}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},kn=(e,t)=>{let r=e[0].dims,a=q.size(r),i=e[0].dataType,s=q.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),o=Z("input",i,r.length),l=new Array(t.numOutputs),p=[],c=[],f=0,u=[{type:12,data:a}];for(let _=0;_<t.numOutputs;_++){f+=t.splitSizes[_],l[_]=f;let b=r.slice();b[s]=t.splitSizes[_],c.push(b),n[_]=he(`output${_}`,i,b.length),p.push({dims:c[_],dataType:e[0].dataType})}u.push({type:12,data:l},...ye(r,...c));let m=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...n)}
  ${ku(l.length)}
  ${Su(n)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ge("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},Gf=(e,t)=>{wu(e.inputs);let r=e.inputs.length===1?t:xu(e.inputs,t);e.compute(kn(e.inputs,r),{inputs:[0]})},Ff=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Qe({axis:t,numOutputs:a,splitSizes:r})}}),Eu,Tu,qi,Kf,E_=le(()=>{ut(),qn(),Hf(),jf(),pr(),Eu=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],i=e[2],s=e[3],n=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],p=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=p,u=0,m=!a||a.dims.length===0,_=Math.floor(m?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);m&&(c=_*t.numHeads);let b=s&&s.dims.length!==0,w=n&&n.dims.length!==0;if(b&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&w){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');u=s.dims[2]}else if(b||w)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let y=0,k=!1,S=t.kvNumHeads?_*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=i.dims[1]*i.dims[3],k=!0}}let E=e.length>4?e[5]:void 0;if(E&&E.dims.length!==1&&E.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:p,pastSequenceLength:u,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:v}},Tu=Qe({perm:[0,2,1,3]}),qi=(e,t,r)=>{let a=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),a=e.compute(At(a,Tu.perm),{inputs:[a],outputs:[-1]})[0]),a},Kf=(e,t)=>{var w;let r=Eu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((w=e.inputs[1])==null?void 0:w.dims.length)===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=Qe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[u,m,_]=!i&&!s?e.compute(kn([a],f),{inputs:[a],outputs:[-1,-1,-1]}):[a,i,s],b=da(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,u,void 0,0);ca(e,b,qi(e,m,r),qi(e,_,r),void 0,void 0,n,o,void 0,r,l,p)}}),Hi,Iu,Cu,Qf,T_=le(()=>{De(),Ne(),pr(),Me(),Hi=(e,t,r,a,i,s,n,o)=>{let l=st(s),p=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=i*n,u=64;f===1&&(u=256);let m=[i,n,s/l],_=[i,n,2],b=["rank","type","type"],w=[];w.push(...ye(m,_));let v=y=>{let k=Z("x",t.dataType,3,l),S=Z("scale",r.dataType,r.dims),E=Z("bias",a.dataType,a.dims),T=he("output",1,3,2),I=[k,S,E,T];return`
  var<workgroup> workgroup_shared : array<${c}, ${u}>;
  const workgroup_size = ${u}u;
  ${y.declareVariables(...I)}
  ${y.mainStart(u)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${dr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${dr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${u}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:f},programUniforms:w}),getShaderSource:v},{inputs:[t,r,a],outputs:[-1]})[0]},Iu=(e,t,r)=>{let a=t[0].dims,i=a,s=2,n=a[0],o=a[1],l=q.sizeFromDimension(a,s),p=st(l),c=q.size(i)/p,f=Hi(e,t[0],t[1],t[2],n,l,o,r.epsilon),u=[n,o,l/p],m=[n,o],_=["type","none"],b=w=>{let v=Z("x",t[0].dataType,u.length,p),y=Z("scale_shift",1,m.length,2),k=he("output",t[0].dataType,u.length,p),S=[v,y,k];return`
  ${w.registerUniform("output_size","u32").declareVariables(...S)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${y.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...ye(u,m,u)]}),getShaderSource:b},{inputs:[t[0],f]})},Cu=(e,t,r)=>{let a=t[0].dims,i=a,s=a[0],n=a[a.length-1],o=q.sizeFromDimension(a,1)/n,l=st(n),p=q.size(i)/l,c=[{type:12,data:o},{type:12,data:Math.floor(n/l)}],f=["type","type"],u=!1,m=[0,a.length-1];for(let v=0;v<a.length-2;v++)u=u||a[v+1]!==1,m.push(v+1);u=u&&a[a.length-1]!==1;let _=u?e.compute(At(e.inputs[0],m),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(v,y)=>a[m[y]])),b=Hi(e,_,t[1],t[2],s,o,n,r.epsilon),w=v=>{let y=gt(t[0].dataType),k=l===1?"vec2f":`mat${l}x2f`,S=I=>{let D=I===0?"x":"y",R=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${y}(${R}(scale.${D}))`;case 2:return`vec2<${y}>(${R}(scale[0].${D}, scale[1].${D}))`;case 4:return`vec4<${y}>(${R}(scale[0].${D}, scale[1].${D}, scale[2].${D}, scale[3].${D}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=Z("input",t[0].dataType,t[0].dims,l),T=he("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${T.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c}),getShaderSource:w},{inputs:[t[0],b]})},Qf=(e,t)=>{t.format==="NHWC"?Cu(e,e.inputs,t):Iu(e,e.inputs,t)}}),zu,Au,Zf,I_=le(()=>{De(),Ne(),Me(),zu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Au=(e,t,r)=>{let a=t.simplified,i=e[0].dims,s=e[1],n=!a&&e[2],o=i,l=q.normalizeAxis(t.axis,i.length),p=q.sizeToDimension(i,l),c=q.sizeFromDimension(i,l),f=q.size(s.dims),u=n?q.size(n.dims):0;if(f!==c||n&&u!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${u}`);let m=[];for(let E=0;E<i.length;++E)E<l?m.push(i[E]):m.push(1);let _=st(c),b=["type","type"],w=[{type:12,data:p},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];n&&b.push("type");let v=r>1,y=r>2,k=E=>{let T=gt(e[0].dataType),I=[Z("x",e[0].dataType,e[0].dims,_),Z("scale",s.dataType,s.dims,_)];n&&I.push(Z("bias",n.dataType,n.dims,_)),I.push(he("output",e[0].dataType,o,_)),v&&I.push(he("mean_data_output",1,m)),y&&I.push(he("inv_std_output",1,m));let D=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(D).declareVariables(...I)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${mn("f32",_)};
    var mean_square_vector = ${mn("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Mr(T,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${dr("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${dr("mean_square_vector",_)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Mr(T,_,"x[j + offset]")};
      let f32scale = ${Mr(T,_,"scale[j]")};
      output[j + offset] = ${I[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${Mr(T,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${y?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return v&&S.push({dims:m,dataType:1}),y&&S.push({dims:m,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${a}`,inputDependencies:b},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:w}),getShaderSource:k}},Zf=(e,t)=>{zu(e.inputs),e.compute(Au(e.inputs,t,e.outputCount))}}),Ou,Yf,C_=le(()=>{Ne(),Kn(),Qn(),Ou=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Yf=e=>{Ou(e.inputs);let t=Pr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(jn(e.inputs,{activation:""},t));else{let i=t[t.length-2],s=q.size(e.inputs[0].dims.slice(0,-2)),n=q.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&i===1&&n===1){let o=e.inputs[0].reshape([1,s,a]),l=e.inputs[1].reshape([1,a,r]),p=[1,s,r],c=[o,l];e.compute(Za(c,{activation:""},t,p),{inputs:c})}else e.compute(Za(e.inputs,{activation:""},t))}}}),Du,Ru,Nu,Xf,Jf,z_=le(()=>{De(),Ne(),ut(),Me(),Du=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!q.areEqual(n.dims,[t.n,i,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(q.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,p=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(q.size(l)!==p)throw new Error("zeroPoints input size error.")}},Ru=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],s=t.k,n=t.n,o=r.slice(0,a-2),l=q.size(o),p=e[1].dims[2]/4,c=e[0].dataType,f=st(t.k),u=st(p),m=st(n),_=o.concat([i,n]),b=i>1&&n/m%2===0?2:1,w=q.size(_)/m/b,v=64,y=[],k=[l,i,s/f],S=q.convertShape(e[1].dims).slice();S.splice(-1,1,p/u),y.push(...ye(k)),y.push(...ye(S)),y.push(...ye(e[2].dims)),e.length===4&&y.push(...ye(q.convertShape(e[3].dims)));let E=[l,i,n/m];y.push(...ye(E));let T=I=>{let D=k.length,R=Z("a",e[0].dataType,D,f),W=Z("b",12,S.length,u),ne=Z("scales",e[2].dataType,e[2].dims.length),X=[R,W,ne],K=e.length===4?Z("zero_points",12,e[3].dims.length):void 0;K&&X.push(K);let U=E.length,O=he("output",e[0].dataType,U,m),V=gt(e[0].dataType),Y=(()=>{switch(f){case 1:return`array<${V}, 8>`;case 2:return`mat4x2<${V}>`;case 4:return`mat2x4<${V}>`;default:throw new Error(`${f}-component is not supported.`)}})(),J=()=>{let F=`
          // reuse a data
            var input_offset = ${R.indicesToOffset(`${R.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Y};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${R.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let ie=0;ie<m*b;ie++)F+=`
            b_value = ${u===1?`b${ie}_data`:`b${ie}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Y}(${Array.from({length:4},(ee,L)=>`${V}(b_value_lower[${L}]), ${V}(b_value_upper[${L}])`).join(", ")});
            b_dequantized_values = ${f===1?`${Y}(${Array.from({length:8},(ee,L)=>`(b_quantized_values[${L}] - ${K?`zero_point${ie}`:"zero_point"}) * scale${ie}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${K?`zero_point${ie}`:"zero_point"}`).join(",")})) * scale${ie};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(ie/m)}]${m>1?`[${ie%m}]`:""} += ${Array.from({length:8/f},(ee,L)=>`${f===1?`a_data[${L}] * b_dequantized_values[${L}]`:`dot(a_data[${L}], b_dequantized_values[${L}])`}`).join(" + ")};
          `;return F},oe=()=>{let F=`
            var col_index = col * ${m};
            ${K?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${V}(8);`}
            `;for(let ie=0;ie<m*b;ie++)F+=`
            let scale${ie} = ${ne.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ie} = ${V}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return F},se=()=>{let F=`col_index = col * ${m};`;for(let ie=0;ie<m*b;ie++)F+=`
            let b${ie}_data = ${W.getByIndices(`${W.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return F+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,F};return`
        var<workgroup> workgroup_shared: array<${O.type.value}, ${b*v}>;
        ${I.declareVariables(...X,O)}
        ${I.mainStart([v,1,1])}
          let output_indices = ${O.offsetToIndices(`(global_idx / ${v}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${oe()}
            for (var word: u32 = 0; word < ${p}; word += ${u}) {
              ${se()}
              for (var i: u32 = 0; i < ${u}; i++) {
                ${J()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${O.type.value} = ${O.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${O.setByIndices(`${O.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${u};${m};${b};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:w},programUniforms:y}),getShaderSource:T}},Nu=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],s=t.k,n=t.n,o=r.slice(0,a-2),l=q.size(o),p=e[1].dims[2]/4,c=e[0].dataType,f=st(t.k),u=st(p),m=o.concat([i,n]),_=128,b=n%8===0?8:n%4===0?4:1,w=_/b,v=w*u*8,y=v/f,k=v/t.blockSize,S=q.size(m)/b,E=[],T=[l,i,s/f],I=q.convertShape(e[1].dims).slice();I.splice(-1,1,p/u),E.push(...ye(T)),E.push(...ye(I)),E.push(...ye(e[2].dims)),e.length===4&&E.push(...ye(q.convertShape(e[3].dims)));let D=[l,i,n];E.push(...ye(D));let R=W=>{let ne=T.length,X=Z("a",e[0].dataType,ne,f),K=Z("b",12,I.length,u),U=Z("scales",e[2].dataType,e[2].dims.length),O=[X,K,U],V=e.length===4?Z("zero_points",12,e[3].dims.length):void 0;V&&O.push(V);let Y=D.length,J=he("output",e[0].dataType,Y),oe=gt(e[0].dataType),se=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${oe}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${oe}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${oe}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${oe}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${X.type.value}, ${y}>;
        var<workgroup> inter_results: array<array<${J.type.value}, ${w}>, ${b}>;
        ${W.declareVariables(...O,J)}
        ${W.mainStart([w,b,1])}
          let output_indices = ${J.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${y};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${y}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${X.getByIndices(`${X.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${X.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${V?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${V.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${oe}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${oe}(8);`}
            let scale = ${U.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${K.getByIndices(`${K.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${u}; i++) {
              ${se()}
              let b_value = ${u===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${oe}>(${Array.from({length:4},(F,ie)=>`${oe}(b_value_lower[${ie}]), ${oe}(b_value_upper[${ie}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${oe}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(F,ie)=>`${`dot(a_data${ie}, b_dequantized_values[${ie}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${J.type.value} = ${J.type.value}(0);
            for (var b = 0u; b < ${w}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${J.setByIndices(`${J.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${u};${w};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:S},programUniforms:E}),getShaderSource:R}},Xf=(e,t)=>{Du(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Nu(e.inputs,t)):e.compute(Ru(e.inputs,t))},Jf=e=>Qe(e)}),Bu,Mu,Pu,Uu,Vu,Lu,Wu,qu,eh,A_=le(()=>{De(),Ne(),Me(),Bu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Mu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
            k = i32(${e.indicesGet("indices",i)}) - ${ge("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ge("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${ge("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},Pu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ge("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ge("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ge("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ge("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Uu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ge("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ge("uniforms.x_shape",i,t)})) {
                  k = i32(${ge("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${ge("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Vu=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${ge("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${ge("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${ge("uniforms.x_shape",i,t)})) {
                  k -= i32(${ge("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${ge("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},Lu=(e,t,r)=>{switch(r.mode){case 0:return Mu(e,t,r.pads.length);case 1:return Pu(e,t,r.pads.length);case 2:return Uu(e,t,r.pads.length);case 3:return Vu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Wu=(e,t)=>{let r=q.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,i=q.size(r),s=[{type:12,data:i},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...ye(e[0].dims,r));let o=["rank"],l=p=>{let c=he("output",e[0].dataType,r.length),f=Z("x",e[0].dataType,a.length),u=f.type.value,m=Lu(c,a.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:n?u:"f32"}),`
            ${p.registerUniforms(_).declareVariables(f,c)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${u}(0);
            ${m}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(r)/64)},programUniforms:s}),getShaderSource:l}},qu=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,s=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let n=[];return s.forEach(o=>n.push(o)),{mode:t.mode,value:a,pads:n}}else return t},eh=(e,t)=>{Bu(e.inputs);let r=qu(e.inputs,t);e.compute(Wu(e.inputs,r),{inputs:[0]})}}),ra,Gi,Fi,ji,Ki,Hu,Gu,Qi,Zi,th,rh,Yi,ah,ih,Xi,nh,sh,oh,lh,O_=le(()=>{Lt(),De(),Ne(),Me(),ra=e=>{if(at.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Gi=(e,t,r)=>{let a=t.format==="NHWC",i=e.dims.slice();a&&i.splice(1,0,i.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],p=t.pads.slice();Ka.adjustPoolAttributes(r,i,n,o,l,p);let c=Ka.computePoolOutputShape(r,i,o,l,n,p,t.autoPad),f=Object.assign({},t);s?Object.assign(f,{kernelShape:n,strides:o,pads:p,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:n,strides:o,pads:p,cacheKey:t.cacheKey});let u=c.slice();return u.push(u.splice(1,1)[0]),[f,a?u:c]},Fi=(e,t)=>{let r=t.format==="NHWC",a=q.size(e),i=q.size(t.kernelShape),s=[{type:12,data:a},{type:12,data:i}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(p+c);s.push({type:12,data:o},{type:12,data:l},{type:12,data:p},{type:12,data:c}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let u=!1;if(t.kernelShape.length===2){let m=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],w=t.pads[t.pads.length-2];u=!!(b+w),s.push({type:12,data:m},{type:12,data:_},{type:12,data:b},{type:12,data:w}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,f,u]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=q.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((p,c)=>p+c);return[s,n,!!l,!1,!1]}},ji=(e,t,r,a,i,s,n,o,l,p,c,f)=>{let u=i.format==="NHWC",m=t.type.value,_=he("output",t.type.tensor,a);if(i.kernelShape.length<=2){let b="",w="",v="",y=r-(u?2:1);if(c?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${y}] < 0 || xIndices[${y}]
                      >= uniforms.x_shape[${y}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${y}] = indices[${y}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,i.kernelShape.length===2){let k=r-(u?3:2);f?w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:w=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${m}(${o});
              var pad = 0;
              ${w}
              ${b}
              ${v}
              ${n}

              output[global_idx] = value;
            }`}else{if(u)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=i.kernelShape.length,w=i.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${m}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${ge("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${ge("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ge("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${ge("uniforms.pads","j - 2u",w)};
                  ${v}
              }
              ${n}

              output[global_idx] = value;
            }`}},Ki=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Hu=e=>`${Ki(e)};${e.countIncludePad}`,Gu=e=>`${Ki(e)};${e.storageOrder};${e.dilations}`,Qi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Zi=(e,t,r,a)=>{let[i,s]=Gi(t,a,r),n=Z("x",t.dataType,t.dims.length),o=n.type.value,l="value += x_val;",p="";i.countIncludePad?p+=`value /= ${o}(uniforms.kernelSize);`:p+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,f,u,m,_]=Fi(s,i);c.push(...ye(t.dims,s));let b=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${u};${m};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(s)/64)},programUniforms:c}),getShaderSource:w=>ji(w,n,t.dims.length,s.length,i,l,p,0,f,u,m,_)}},th=e=>{let t=e.count_include_pad!==0,r=Qi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:Hu(a)}},rh=(e,t)=>{ra(e.inputs),e.compute(Zi("AveragePool",e.inputs[0],!1,t))},Yi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},ah=e=>{let t=e.format;return{format:t,...Yi,cacheKey:t}},ih=(e,t)=>{ra(e.inputs),e.compute(Zi("GlobalAveragePool",e.inputs[0],!0,t))},Xi=(e,t,r,a)=>{let[i,s]=Gi(t,a,r),n=`
      value = max(x_val, value);
    `,o="",l=Z("x",t.dataType,t.dims.length),p=["rank"],[c,f,u,m,_]=Fi(s,i);return c.push(...ye(t.dims,s)),{name:e,shaderCache:{hint:`${a.cacheKey};${u};${m};${_}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(q.size(s)/64)},programUniforms:c}),getShaderSource:b=>ji(b,l,t.dims.length,s.length,i,n,o,t.dataType===10?-65504:-1e5,f,u,m,_)}},nh=(e,t)=>{ra(e.inputs),e.compute(Xi("MaxPool",e.inputs[0],!1,t))},sh=e=>{let t=e.storage_order,r=e.dilations,a=Qi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...a,cacheKey:""};return{...i,cacheKey:Gu(i)}},oh=e=>{let t=e.format;return{format:t,...Yi,cacheKey:t}},lh=(e,t)=>{ra(e.inputs),e.compute(Xi("GlobalMaxPool",e.inputs[0],!0,t))}}),Fu,ju,uh,dh,D_=le(()=>{De(),Ne(),ut(),Me(),Fu=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,s)=>s===t.axis||i===e[0].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},ju=(e,t)=>{let r=q.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,i=a===3,s=e[0].dims,n=e[1].dataType,o=q.size(s),l=a===3||a===2,p=l?[Math.ceil(q.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,u=f?l?[Math.ceil(q.size(f.dims)/4)]:f.dims:void 0,m=c.length===0||c.length===1&&c[0]===1,_=m===!1&&c.length===1,b=st(o),w=m&&(!l||b===4),v=w?b:1,y=w&&!l?b:1,k=Z("input",l?12:a,p.length,y),S=Z("scale",n,c.length),E=f?Z("zero_point",l?12:a,u.length):void 0,T=he("output",n,s.length,v),I=[k,S];E&&I.push(E);let D=[p,c];f&&D.push(u);let R=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...ye(...D,s)],W=ne=>{let X=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ne.registerUniforms(X).declareVariables(...I,T)}
      ${ne.mainStart()}
          ${ne.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${T.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${m?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${T.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?m?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${T.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${T.setByOffset("global_idx",`${T.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:W,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:R})}},uh=(e,t)=>{Fu(e.inputs,t),e.compute(ju(e.inputs,t))},dh=e=>Qe({axis:e.axis,blockSize:e.blockSize})}),Ku,Qu,ph,R_=le(()=>{Lt(),De(),Me(),Ku=(e,t,r)=>{let a=e===t,i=e<t&&r<0,s=e>t&&r>0;if(a||i||s)throw new Error("Range these inputs' contents are invalid.")},Qu=(e,t,r,a)=>{let i=Math.abs(Math.ceil((t-e)/r)),s=[i],n=i,o=[{type:12,data:n},{type:a,data:e},{type:a,data:r},...ye(s)],l=p=>{let c=he("output",a,s.length),f=c.type.value,u=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${p.registerUniforms(u).declareVariables(c)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}},ph=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),at.webgpu.validateInputContent&&Ku(t,r,a),e.compute(Qu(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),Zu,Yu,ch,fh,N_=le(()=>{De(),Ne(),ut(),Me(),Zu=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${i}bitcast<${a}>(oldValue) + (${r})${s}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${i}min(bitcast<${a}>(oldValue), (${r}))${s}`;case"mul":return`${i}(bitcast<${a}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Yu=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r,s=1,n=Math.ceil(q.size(a)/s),o=a[a.length-1],l=q.sizeFromDimension(r,o),p=[{type:12,data:n},{type:12,data:o},{type:12,data:l},...ye(e[1].dims,e[2].dims,i)],c=f=>{let u=Z("indices",e[1].dataType,e[1].dims.length),m=Z("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?Wp("output",e[0].dataType,i.length):he("output",e[0].dataType,i.length,s);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(u,m,_)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Zu(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:c}},ch=e=>Qe({reduction:e.reduction}),fh=(e,t)=>{e.compute(Yu(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Xu,Ju,ed,Ji,td,rd,ad,id,nd,sd,od,ld,en,ud,dd,pd,cd,fd,hh,mh,B_=le(()=>{De(),Ne(),ut(),Me(),Xu=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ju=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((i,s)=>a[i]=e[s]),a},ed=(e,t,r,a,i,s)=>{let[n,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>a.push(c)),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Xu(a,t),t.axes.length>0&&Ju(a,t.axes,p).forEach((c,f)=>a[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof i<"u"&&a.length>0&&i.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Ji=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,td=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ji("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ji("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",rd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ad=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?a:e.slice();return t.length>0?(t.forEach((s,n)=>{a[s]=i[n],a[n+r]=i[t.length+n]}),a):i},id=(e,t,r,a)=>{let i=[];if(r.length>0)if(a.length>0){if(e.forEach(s=>i.push(s)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((s,n)=>i[s]=r[n])}else r.forEach(s=>i.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((s,n)=>Math.round(s*t[n]))}return i},nd=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=a),r.axes.forEach(s=>i[s]=Math.round(e[s]*t[s]))):(t.fill(a,0,t.length),i.forEach((s,n)=>i[n]=Math.round(s*t[n]))),i},sd=(e,t,r,a,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ge("uniforms.scales","i",a)};
        var roi_low = ${ge("uniforms.roi","i",i)};
        var roi_hi = ${ge("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ge("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ge("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,od=(e,t,r,a,i,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ge("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ge("uniforms.roi","i",s)};
          var roi_hi = ${ge("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${ge("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ge("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,ld=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ge("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,en=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",ud=(e,t,r,a,i)=>{let[s,n,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${en(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${n}];
      var col:${p} = originalIndices[${o}];
      ${a?`if (row < 0 || row > (${r[n]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[n]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},dd=(e,t,r,a,i,s,n,o,l,p)=>{let c=r.length===2,[f,u]=c?[0,1]:[2,3],m=e.type.value,_=b=>{let w=b===f?"row":"col";return`
      fn ${w}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[b]},
        ${a[b]}, ${r[b]}, ${s[b]}, ${s[b]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${w}: ${m} = originalIdx + ${m}(i);
          if (${w} < 0 || ${w} >= ${r[b]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${w} = max(0, min(${w}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${w})`)};
          data[i + 1] = ${b===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(f)};
    ${_(u)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},pd=(e,t,r,a,i)=>{let[s,n,o,l,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${en(e,p,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${n}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[n]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[n]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},cd=(e,t,r,a,i,s)=>{let n=e.dims,o=ad(s,t.axes,n.length),l=id(n,a,i,t.axes),p=a.slice();a.length===0&&(p=n.map((y,k)=>y===0?1:l[k]/y),t.keepAspectRatioPolicy!=="stretch"&&(l=nd(n,p,t)));let c=he("output",e.dataType,l.length),f=Z("input",e.dataType,n.length),u=q.size(l),m=n.length===l.length&&n.every((y,k)=>y===l[k]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,w=f.type.value,v=y=>`
      ${m?"":`
      ${td(t.coordinateTransformMode,w)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${ld(f,n)};
              ${rd(t.nearestMode,r,w)};
              ${od(f,c,n,l,p.length,o.length,_)};
              `;case"linear":return`
              ${sd(c,n,l,p.length,o.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${ud(f,c,n,_,b)}`;if(n.length===3||n.length===5)return`${pd(f,c,n,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${dd(f,c,n,l,p,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${y.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",o.length).declareVariables(f,c)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${m?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${m}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:1,data:p},{type:1,data:o},...ye(n,l)]})}},fd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},hh=(e,t)=>{let r=[],a=[],i=[],s=fd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ed(e.inputs,t,s,r,a,i),e.compute(cd(e.inputs[0],t,s,r,a,i),{inputs:[0]})},mh=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,i=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return Qe({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:i,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:o,mode:l,nearestMode:p})}}),hd,md,gh,M_=le(()=>{De(),Ne(),ut(),Me(),hd=(e,t)=>{let[r,a,i,s]=e,{numHeads:n,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!q.areEqual(a.dims,[])&&!q.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!q.areEqual(i.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],p=r.dims[r.dims.length-2],c=i.dims[0],f=q.sizeFromDimension(r.dims,1)/p,u=o===0?i.dims[1]*2:f/n;if(o>u)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(l!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(p!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(u/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(p>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},md=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:i,scale:s}=t,n=e[0].dims[0],o=q.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],p=o/l,c=e[2].dims[1],f=i===0?c*2:p/a,u=new Array(n,l,p/f,f-c),m=q.computeStrides(u),_=[{type:1,data:s},{type:12,data:u},{type:12,data:m},...e[0].dims.length===3?new Array({type:12,data:[o,p,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...ye(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=w=>{let v=Z("input",e[0].dataType,e[0].dims.length),y=Z("position_ids",e[1].dataType,e[1].dims.length),k=Z("cos_cache",e[2].dataType,e[2].dims.length),S=Z("sin_cache",e[3].dataType,e[3].dims.length),E=he("output",e[0].dataType,e[0].dims.length);return w.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:u.length},{name:"global_strides",type:"u32",length:m.length},{name:"input_output_strides",type:"u32",length:m.length}]),`
        ${w.declareVariables(v,y,k,S,E)}

        ${w.mainStart(Ur)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${y.broadcastedIndicesToOffset("bsnh.xy",he("",y.type.tensor,2))};
            let position_id =
                u32(${y.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Qe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(u)/Ur)},programUniforms:_})}},gh=(e,t)=>{hd(e.inputs,t),e.compute(md(e.inputs,t))}}),gd,_d,_h,P_=le(()=>{De(),Ne(),Me(),gd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},_d=(e,t,r,a)=>{let i=t.simplified,s=e[0].dims,n=q.size(s),o=s,l=n,p=s.slice(-1)[0],c=a?s.slice(0,-1).concat(1):[],f=!i&&e.length>3,u=e.length>4,m=a&&r>1,_=a&&r>2,b=r>3,w=64,v=st(p),y=[{type:12,data:l},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],k=E=>{let T=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],I=[Z("x",e[0].dataType,e[0].dims,v),Z("skip",e[1].dataType,e[1].dims,v),Z("gamma",e[2].dataType,e[2].dims,v)];f&&I.push(Z("beta",e[3].dataType,e[3].dims,v)),u&&I.push(Z("bias",e[4].dataType,e[4].dims,v)),I.push(he("output",e[0].dataType,o,v)),m&&I.push(he("mean_output",1,c)),_&&I.push(he("inv_std_output",1,c)),b&&I.push(he("input_skip_bias_sum",e[0].dataType,o,v));let D=gt(e[0].dataType),R=gt(1,v);return`

      ${E.registerUniforms(T).declareVariables(...I)}
      var<workgroup> sum_shared : array<${R}, ${w}>;
      var<workgroup> sum_squared_shared : array<${R}, ${w}>;

      ${E.mainStart([w,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${w};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${w};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${w-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${u?"bias[offset1d + i]":D+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Mr(D,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${w};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${dr("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${dr("square_sum",v)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${m?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${D}(mean)`}) *
            ${D}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:c,dataType:1}),r>2&&S.push({dims:c,dataType:1}),r>3&&S.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${m};${_};${b}`,inputDependencies:e.map((E,T)=>"type")},getShaderSource:k,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/p)},programUniforms:y})}},_h=(e,t)=>{gd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(_d(e.inputs,t,e.outputCount,!1),{outputs:r})}}),yd,aa,bd,tn,$d,vd,yh,bh,U_=le(()=>{De(),Ne(),ut(),Me(),yd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},aa=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},bd=(e,t)=>{if(e.length>1){let r=aa(e,1),a=aa(e,2),i=aa(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),Qe({starts:r,ends:a,axes:i})}else return t},tn=(e,t,r,a,i)=>{let s=e;return e<0&&(s+=r[a[t]]),i[t]<0?Math.max(0,Math.min(s,r[a[t]]-1)):Math.max(0,Math.min(s,r[a[t]]))},$d=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${ge("uniforms.input_shape","i",r.length)};
            let steps_i = ${ge("uniforms.steps","i",r.length)};
            let signs_i = ${ge("uniforms.signs","i",r.length)};
            let starts_i = ${ge("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,vd=(e,t)=>{let r=e[0].dims,a=q.size(r),i=t.axes.length>0?q.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=aa(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(i.length).fill(1));let n=t.starts.map((v,y)=>tn(v,y,r,i,s)),o=t.ends.map((v,y)=>tn(v,y,r,i,s));if(i.length!==n.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let v=0;v<r.length;++v)i.includes(v)||(n.splice(v,0,0),o.splice(v,0,r[v]),s.splice(v,0,1));let l=s.map(v=>Math.sign(v));s.forEach((v,y,k)=>{if(v<0){let S=(o[y]-n[y])/v,E=n[y],T=E+S*s[y];n[y]=T,o[y]=E,k[y]=-v}});let p=r.slice(0);i.forEach((v,y)=>{p[v]=Math.ceil((o[v]-n[v])/s[v])});let c={dims:p,dataType:e[0].dataType},f=he("output",e[0].dataType,p.length),u=Z("input",e[0].dataType,e[0].dims.length),m=q.size(p),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],b=[{type:12,data:m},{type:12,data:n},{type:6,data:l},{type:12,data:s},...ye(e[0].dims,p)],w=v=>`
      ${v.registerUniforms(_).declareVariables(u,f)}
        ${$d(u,f,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",u.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b})}},yh=(e,t)=>{yd(e.inputs,t);let r=bd(e.inputs,t);e.compute(vd(e.inputs,r),{inputs:[0]})},bh=e=>{let t=e.starts,r=e.ends,a=e.axes;return Qe({starts:t,ends:r,axes:a})}}),wd,xd,$h,vh,V_=le(()=>{De(),Ne(),ut(),pr(),Me(),wd=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},xd=(e,t)=>{let r=e.inputs[0],a=r.dims,i=q.size(a),s=a.length,n=q.normalizeAxis(t.axis,s),o=n<a.length-1,l,p=[];o?(p=Array.from({length:s},(I,D)=>D),p[n]=s-1,p[s-1]=n,l=e.compute(At(r,p),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[s-1],u=i/f,m=st(f),_=f/m,b=64;u===1&&(b=256);let w=(I,D)=>D===4?`max(max(${I}.x, ${I}.y), max(${I}.z, ${I}.w))`:D===2?`max(${I}.x, ${I}.y)`:D===3?`max(max(${I}.x, ${I}.y), ${I}.z)`:I,v=Z("x",l.dataType,l.dims,m),y=he("result",l.dataType,l.dims,m),k=v.type.value,S=gt(l.dataType)==="f32"?`var threadMax = ${k}(-3.402823e+38f);`:`var threadMax = ${k}(-65504.0h);`,E=I=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${I.registerUniform("packedCols","i32").declareVariables(v,y)}
      ${I.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${w("threadShared[0]",m)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${dr("threadShared[0]",m)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,T=e.compute({name:"Softmax",shaderCache:{hint:`${m};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:u},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(At(T,p),{inputs:[T]})},$h=(e,t)=>{wd(e.inputs),xd(e,t)},vh=e=>Qe({axis:e.axis})}),rn,kd,Sd,Ed,wh,L_=le(()=>{De(),Ne(),Me(),rn=e=>Array.from(e.getBigInt64Array(),Number),kd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(rn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Sd=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Ed=(e,t)=>{let r=e[0].dims,a=t??rn(e[1]),i=Sd(r,a),s=q.size(i),n=e[0].dataType,o=Z("input",n,r.length),l=he("output",n,i.length),p=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...ye(e[0].dims,i)]}),getShaderSource:p}},wh=e=>{kd(e.inputs),e.compute(Ed(e.inputs),{inputs:[0]})}}),Td,Id,xh,W_=le(()=>{De(),Ne(),Me(),Td=(e,t,r,a,i)=>{let s=he("output_data",i,r.length,4),n=Z("a_data",t[1].dataType,t[1].dims.length,4),o=Z("b_data",t[2].dataType,t[2].dims.length,4),l=Z("c_data",t[0].dataType,t[0].dims.length,4),p,c=(f,u,m)=>`select(${u}, ${f}, ${m})`;if(!a)p=s.setByOffset("global_idx",c(n.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(u,m,_="")=>{let b=`a_data[index_a${m}][component_a${m}]`,w=`b_data[index_b${m}][component_b${m}]`,v=`bool(c_data[index_c${m}] & (0xffu << (component_c${m} * 8)))`;return`
            let output_indices${m} = ${s.offsetToIndices(`global_idx * 4u + ${m}u`)};
            let offset_a${m} = ${n.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_b${m} = ${o.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let offset_c${m} = ${l.broadcastedIndicesToOffset(`output_indices${m}`,s)};
            let index_a${m} = offset_a${m} / 4u;
            let index_b${m} = offset_b${m} / 4u;
            let index_c${m} = offset_c${m} / 4u;
            let component_a${m} = offset_a${m} % 4u;
            let component_b${m} = offset_b${m} % 4u;
            let component_c${m} = offset_c${m} % 4u;
            ${u}[${m}] = ${_}(${c(b,w,v)});
          `};i===9?p=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,n,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},Id=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,i=e[1].dataType,s=!(q.areEqual(t,r)&&q.areEqual(r,a)),n=t,o=q.size(t);if(s){let p=Pr.calcShape(Pr.calcShape(t,r,!1),a,!1);if(!p)throw new Error("Can't perform where op on the given tensors");n=p,o=q.size(n)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Td(p,e,n,s,i),getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ye(a,t,r,n)]})}},xh=e=>{e.compute(Id(e.inputs))}}),kh,q_=le(()=>{r_(),qn(),a_(),i_(),n_(),s_(),o_(),c_(),h_(),m_(),g_(),__(),y_(),b_(),$_(),v_(),w_(),x_(),k_(),S_(),E_(),T_(),I_(),C_(),z_(),Hf(),A_(),O_(),D_(),R_(),N_(),Wn(),B_(),M_(),P_(),U_(),V_(),jf(),L_(),pr(),Hn(),W_(),kh=new Map([["Abs",[_c]],["Acos",[yc]],["Acosh",[bc]],["Add",[Jc]],["ArgMax",[fc,_n]],["ArgMin",[cc,_n]],["Asin",[$c]],["Asinh",[vc]],["Atan",[wc]],["Atanh",[xc]],["Attention",[hc]],["AveragePool",[rh,th]],["BatchNormalization",[mc]],["BiasAdd",[gc]],["BiasSplitGelu",[Xc]],["Cast",[Sc,kc]],["Ceil",[Tc]],["Clip",[Ec]],["Concat",[df,pf]],["Conv",[xn,wn]],["ConvTranspose",[vf,$f]],["Cos",[Ic]],["Cosh",[Cc]],["CumSum",[wf,xf]],["DepthToSpace",[kf,Sf]],["DequantizeLinear",[uh,dh]],["Div",[ef]],["Einsum",[Ef,Tf]],["Elu",[zc,ua]],["Equal",[tf]],["Erf",[Ac]],["Exp",[Oc]],["Expand",[If]],["FastGelu",[Cf]],["Floor",[Dc]],["FusedConv",[xn,wn]],["Gather",[Af,zf]],["GatherElements",[Mf,Bf]],["GatherBlockQuantized",[Rf,Nf]],["GatherND",[Of,Df]],["Gelu",[Rc]],["Gemm",[Uf,Pf]],["GlobalAveragePool",[ih,ah]],["GlobalMaxPool",[lh,oh]],["Greater",[sf]],["GreaterOrEqual",[lf]],["GridSample",[Vf,Lf]],["GroupQueryAttention",[Kf]],["HardSigmoid",[Wc,Lc]],["InstanceNormalization",[Qf]],["LayerNormalization",[Zf]],["LeakyRelu",[Nc,ua]],["Less",[of]],["LessOrEqual",[uf]],["Log",[Zc]],["MatMul",[Yf]],["MatMulNBits",[Xf,Jf]],["MaxPool",[nh,sh]],["Mul",[rf]],["MultiHeadAttention",[qf,Wf]],["Neg",[Mc]],["Not",[Bc]],["Pad",[eh]],["Pow",[af]],["QuickGelu",[Yc,ua]],["Range",[ph]],["Reciprocal",[Pc]],["ReduceMin",[oc]],["ReduceMean",[rc]],["ReduceMax",[sc]],["ReduceSum",[uc]],["ReduceProd",[lc]],["ReduceL1",[ac]],["ReduceL2",[ic]],["ReduceLogSum",[pc]],["ReduceLogSumExp",[nc]],["ReduceSumSquare",[dc]],["Relu",[Uc]],["Resize",[hh,mh]],["RotaryEmbedding",[gh]],["ScatterND",[fh,ch]],["Sigmoid",[Vc]],["Sin",[qc]],["Sinh",[Hc]],["Slice",[yh,bh]],["SkipLayerNormalization",[_h]],["Split",[Gf,Ff]],["Sqrt",[Gc]],["Softmax",[$h,vh]],["Sub",[nf]],["Tan",[Fc]],["Tanh",[jc]],["ThresholdedRelu",[Qc,ua]],["Tile",[wh]],["Transpose",[Hp,Gp]],["Where",[xh]]])}),Sh,H_=le(()=>{Lt(),er(),Me(),Sh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,i){jt(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let p of t)o.push({binding:o.length,resource:{buffer:p.buffer}});for(let p of r)o.push({binding:o.length,resource:{buffer:p.buffer}});i&&o.push({binding:o.length,resource:i});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}n.setPipeline(e.computePipeline),n.setBindGroup(0,l),n.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Vt(e.programInfo.name)}dispose(){}build(e,t){jt(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(p=>{r.features.has(p.feature)&&a.push(`enable ${p.extension};`)});let i=qp(t,this.backend.device.limits),s=e.getShaderSource(i),n=`${a.join(`
`)}
${i.additionalImplementations}
${s}`,o=r.createShaderModule({code:n,label:e.name});Ke("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Vt(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&a<=i)return[t,r,a];let s=t*r*a,n=Math.ceil(Math.sqrt(s));if(n>i){if(n=Math.ceil(Math.cbrt(s)),n>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),Cd,zd,Ad,Od,Eh,G_=le(()=>{Lt(),De(),er(),Mp(),e_(),q_(),H_(),Cd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let i=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let s=e[a].dims.length;r.push(`${i};${s}`);break}case"dims":{let s=e[a].dims.join(",");r.push(`${i};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},zd=(e,t,r)=>{var i,s;let a=e.name;return(i=e.shaderCache)!=null&&i.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Cd(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,a},Ad=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Od=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},Eh=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=s=>t.features.has(s)&&r.push(s)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups")&&i("subgroups-f16"),this.device=await t.requestDevice(a),this.deviceInfo=new Od(this.device),this.adapterInfo=new Ad(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Pp(this),this.programManager=new Sh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Pn(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;jt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var a;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let s=r[i],n=s.kernelId,o=this.kernels.get(n),l=o.kernelType,p=o.kernelName,c=s.programName,f=s.inputTensorViews,u=s.outputTensorViews,m=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let b=Number(m-this.queryTimeBase),w=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if((a=this.env.webgpu.profiling)!=null&&a.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(v=>({dims:v.dims,dataType:vr(v.dataType)})),outputsMetadata:u.map(v=>({dims:v.dims,dataType:vr(v.dataType)})),kernelId:n,kernelType:l,kernelName:p,programName:c,startTime:b,endTime:w});else{let v="";f.forEach((k,S)=>{v+=`input[${S}]: [${k.dims}] | ${vr(k.dataType)}, `});let y="";u.forEach((k,S)=>{y+=`output[${S}]: [${k.dims}] | ${vr(k.dataType)}, `}),`${n}${l}${p}${c}${v}${y}`,w-b}Ga("GPU",`${c}::${m}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Vt()}run(e,t,r,a,i,s){jt(e.name);let n=[];for(let y=0;y<t.length;++y){let k=t[y].data;if(k===0)continue;let S=this.gpuDataManager.get(k);if(!S)throw new Error(`no GPU data for input: ${k}`);n.push(S)}let{outputs:o,dispatchGroup:l,programUniforms:p}=e.getRunData(t),c=r.length===0?o.map((y,k)=>k):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let f=[],u=[];for(let y=0;y<o.length;++y){if(!Number.isInteger(c[y])||c[y]<-3||c[y]>=s)throw new Error(`Invalid output index: ${c[y]}`);if(c[y]===-3)continue;let k=c[y]===-1,S=c[y]===-2,E=k||S?i(o[y].dataType,o[y].dims):a(c[y],o[y].dataType,o[y].dims);if(f.push(E),E.data===0)continue;let T=this.gpuDataManager.get(E.data);if(!T)throw new Error(`no GPU data for output: ${E.data}`);if(k&&this.temporaryData.push(T),S){let I=this.kernelPersistentData.get(this.currentKernelId);I||(I=[],this.kernelPersistentData.set(this.currentKernelId,I)),I.push(T)}u.push(T)}if(n.length!==t.length||u.length!==f.length){if(u.length===0)return Vt(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let m;if(p){let y=0,k=[];p.forEach(I=>{let D=typeof I.data=="number"?[I.data]:I.data;if(D.length===0)return;let R=I.type===10?2:4,W,ne;I.type===10?(ne=D.length>4?16:D.length>2?8:D.length*R,W=D.length>4?16:R*D.length):(ne=D.length<=2?D.length*R:16,W=16),y=Math.ceil(y/ne)*ne,k.push(y);let X=I.type===10?8:4;y+=D.length>4?Math.ceil(D.length/X)*W:D.length*R});let S=16;y=Math.ceil(y/S)*S;let E=new ArrayBuffer(y);p.forEach((I,D)=>{let R=k[D],W=typeof I.data=="number"?[I.data]:I.data;if(I.type===6)new Int32Array(E,R,W.length).set(W);else if(I.type===12)new Uint32Array(E,R,W.length).set(W);else if(I.type===10)new Uint16Array(E,R,W.length).set(W);else if(I.type===1)new Float32Array(E,R,W.length).set(W);else throw new Error(`Unsupported uniform type: ${vr(I.type)}`)});let T=this.gpuDataManager.create(y,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(T.buffer,0,E,0,y),this.gpuDataManager.release(T.id),m={offset:0,size:y,buffer:T.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),b=_[1]===1&&_[2]===1,w=zd(e,t,b),v=this.programManager.getArtifact(w);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(w,v),Ke("info",()=>`[artifact] key: ${w}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let y=0;y<p.length;y++){let k=p[y],S=k.type,E=typeof k.data=="number"?1:k.data.length,[T,I]=v.uniformVariablesInfo[y];if(S!==T||E!==I)throw new Error(`Uniform variable ${y} mismatch: expect type ${T} with size ${I}, got type ${S} with size ${E} in program "${v.programInfo.name}".`)}}if(Ke("info",()=>`[ProgramManager] run "${e.name}" (key=${w}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let y={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(y),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(y)}return this.programManager.run(v,n,u,_,m),Vt(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let i=kh.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:a,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let i=a.kernelType,s=a.kernelName,n=a.kernelEntry,o=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Ke("info",()=>`[WebGPU] Start to run kernel "[${i}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),n(t,o[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${s}" failed. ${p}`)),1}finally{l&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${i}] ${s}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let s=i.get(t),n=this.gpuDataManager.registerExternalBuffer(r,a,s);return i.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await hn(this,e,t);return Un(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ke("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ke("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ke("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let i=this.getComputePassEncoder(),s=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(s.computePipeline),i.setBindGroup(0,s.bindGroup),i.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Dd,an,Rd,nn,sn,on,Nd,Th,F_=le(()=>{er(),Dd=1,an=()=>Dd++,Rd=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),nn=(e,t)=>{let r=Rd.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,i)=>a*i)*r/8):0},sn=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return nn(this.dataType,this.tensorShape)}destroy(){Ke("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,i)=>a===r[i])}},on=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){if(this.wrapper){if(this.wrapper.canReuseTensor(e,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==nn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let i=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,r,i,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Ke("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Nd=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}reserveTensorId(){let e=an();return this.tensorTrackersById.set(e,new on(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a){Ke("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${a}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(this.backend.currentContext,t,r,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Ke("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let i=an(),s=new sn({sessionId:this.backend.currentSessionId,context:e,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new on(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,a,i){let s=this.backend.currentSessionId,n=this.backend.currentContext;for(let[l,p]of this.freeTensors.entries())if(p.canReuseTensor(n,e,t)){Ke("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, shape: ${t}}`);let c=this.freeTensors.splice(l,1)[0];return c.sessionId=s,c}Ke("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let o=await n.createTensor({dataType:e,shape:t,dimensions:t,usage:r,writable:a,readable:i});return new sn({sessionId:s,context:n,tensor:o,dataType:e,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Th=(...e)=>new Nd(...e)}),ln,Bd,Ih,j_=le(()=>{De(),Er(),Mp(),F_(),er(),ln=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Bd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((i,s)=>i===a[s]&&e[i]===t[i])},Ih=class{constructor(e){this.tensorManager=Th(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],Pn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Bd(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(i=>i.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ke("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a){let i=ln.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,i,r,a)}uploadTensor(e,t){if(!mt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ke("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Un(r,t)}}registerMLTensor(e,t,r){let a=ln.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.registerTensor(this.currentContext,e,a,r);return Ke("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${a}, dimensions: ${r}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,i,s){if(!s)throw new Error("External mounted files are not available.");let n=e;e.startsWith("./")&&(n=e.substring(2));let o=s.get(n);if(!o)throw new Error(`File with name ${n} not found in preloaded files.`);if(t+r>o.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=o.slice(t,t+r).buffer,p;switch(i.dataType){case"float32":p=new Float32Array(l);break;case"float16":p=new Uint16Array(l);break;case"int32":p=new Int32Array(l);break;case"uint32":p=new Uint32Array(l);break;case"int64":p=new BigInt64Array(l);break;case"uint64":p=new BigUint64Array(l);break;case"int8":p=new Int8Array(l);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ke("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),a.constant(i,p)}flush(){}}}),Ch={};fa(Ch,{init:()=>zh});var Pa,Md,zh,K_=le(()=>{De(),G_(),er(),Ne(),j_(),Pa=class Ah{constructor(t,r,a,i){this.module=t,this.dataType=r,this.data=a,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=q.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(q.size(t)!==q.size(this.dims))throw new Error("Invalid new shape");return new Ah(this.module,this.dataType,this.data,t)}},Md=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let a=e.PTR_SIZE,i=r/e.PTR_SIZE,s=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*i++,s));let n=Number(e.getValue(a*i++,s));this.outputCount=Number(e.getValue(a*i++,s)),this.customDataOffset=Number(e.getValue(a*i++,"*")),this.customDataSize=Number(e.getValue(a*i++,s));let o=[];for(let l=0;l<n;l++){let p=Number(e.getValue(a*i++,s)),c=Number(e.getValue(a*i++,"*")),f=Number(e.getValue(a*i++,s)),u=[];for(let m=0;m<f;m++)u.push(Number(e.getValue(a*i++,s)));o.push(new Pa(e,p,c,u))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var n;let r=((n=t==null?void 0:t.inputs)==null?void 0:n.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,a=(t==null?void 0:t.outputs)??[],i=(o,l,p)=>new Pa(this.module,l,this.output(o,p),p),s=(o,l)=>{let p=Br(o,l);if(!p)throw new Error(`Unsupported data type: ${o}`);let c=p>0?this.backend.gpuDataManager.create(p).id:0;return new Pa(this.module,o,c,l)};return this.backend.run(e,r,a,i,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,i=a===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*a);this.module.setValue(s,t.length,i);for(let n=0;n<t.length;n++)this.module.setValue(s+a*(n+1),t[n],i);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},zh=async(e,t,r,a)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=new Eh;await s.initialize(r,a),i("webgpu",[s,n=>s.alloc(Number(n)),n=>s.free(n),(n,o,l,p=!1)=>{if(p)Ke("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(o)}, size=${Number(l)}`),s.memcpy(Number(n),Number(o));else{Ke("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(o)}, size=${Number(l)}`);let c=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(l));s.upload(Number(o),c)}},async(n,o,l)=>{Ke("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${o}, size=${l}`),await s.download(Number(n),()=>t.HEAPU8.subarray(Number(o)>>>0,Number(o+l)>>>0))},(n,o,l)=>s.createKernel(n,Number(o),l,t.UTF8ToString(t._JsepGetNodeName(Number(o)))),n=>s.releaseKernel(n),(n,o,l,p)=>{Ke("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${n}, contextDataOffset=${o}`);let c=new Md(t,s,Number(o));return s.computeKernel(Number(n),c,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let s=new Ih(r);i("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,o,l,p)=>s.ensureTensor(n,o,l,p),(n,o)=>{s.uploadTensor(n,o)},async(n,o)=>s.downloadTensor(n,o)])}}}),Pd,Zn,Yn,nr,Ud,Ya,Xn,Jn,un,es,ts,rs,Oh=le(()=>{Xg(),Jg(),De(),Er(),Dn(),Bp(),Pd=(e,t)=>{mt()._OrtInit(e,t)!==0&&Fe("Can't initialize onnxruntime.")},Zn=async e=>{Pd(e.wasm.numThreads,ja(e.logLevel))},Yn=async(e,t)=>{{let r=(K_(),Ha(Ch)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:s}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",mt(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",mt(),e)}}},nr=new Map,Ud=e=>{let t=mt(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,i,i+a)!==0&&Fe("Can't get session input/output count.");let s=a===4?"i32":"i64";return[Number(t.getValue(i,s)),Number(t.getValue(i+a,s))]}finally{t.stackRestore(r)}},Ya=e=>{let t=mt(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Xn=async(e,t)=>{var f,u,m;let r,a,i=mt();Array.isArray(e)?[r,a]=e:e.buffer===i.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=Ya(e);let s=0,n=0,o=0,l=[],p=[],c=[];try{if([n,l]=Np(t),(t==null?void 0:t.externalData)&&i.mountExternalData){let E=[];for(let T of t.externalData){let I=typeof T=="string"?T:T.path;E.push(Mn(typeof T=="string"?T:T.data).then(D=>{i.mountExternalData(I,D)}))}await Promise.all(E)}for(let E of(t==null?void 0:t.executionProviders)??[])if((typeof E=="string"?E:E.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof E!="string"){let T=E,I=T==null?void 0:T.context,D=T==null?void 0:T.gpuDevice,R=T==null?void 0:T.deviceType,W=T==null?void 0:T.powerPreference;I?i.currentContext=I:D?i.currentContext=await i.jsepCreateMLContext(D):i.currentContext=await i.jsepCreateMLContext({deviceType:R,powerPreference:W})}else i.currentContext=await i.jsepCreateMLContext();break}s=await i._OrtCreateSession(r,a,n),s===0&&Fe("Can't create a session."),(f=i.jsepOnCreateSession)==null||f.call(i),i.currentContext&&(i.jsepRegisterMLContext(s,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[_,b]=Ud(s),w=!!(t!=null&&t.enableGraphCapture),v=[],y=[],k=[];for(let E=0;E<_;E++){let T=i._OrtGetInputName(s,E);T===0&&Fe("Can't get an input name."),p.push(T),v.push(i.UTF8ToString(T))}for(let E=0;E<b;E++){let T=i._OrtGetOutputName(s,E);T===0&&Fe("Can't get an output name."),c.push(T);let I=i.UTF8ToString(T);y.push(I);{if(w&&(t==null?void 0:t.preferredOutputLocation)===void 0){k.push("gpu-buffer");continue}let D=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((u=t==null?void 0:t.preferredOutputLocation)==null?void 0:u[I])??"cpu";if(D!=="cpu"&&D!=="cpu-pinned"&&D!=="gpu-buffer"&&D!=="ml-tensor")throw new Error(`Not supported preferred output location: ${D}.`);if(w&&D!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${D}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(D)}}let S=null;return k.some(E=>E==="gpu-buffer"||E==="ml-tensor")&&(o=i._OrtCreateBinding(s),o===0&&Fe("Can't create IO binding."),S={handle:o,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(E=>fn(E))}),nr.set(s,[s,p,c,S,w,!1]),[s,v,y]}catch(_){throw p.forEach(b=>i._OrtFree(b)),c.forEach(b=>i._OrtFree(b)),o!==0&&i._OrtReleaseBinding(o)!==0&&Fe("Can't release IO binding."),s!==0&&i._OrtReleaseSession(s)!==0&&Fe("Can't release session."),_}finally{i._free(r),n!==0&&i._OrtReleaseSessionOptions(n)!==0&&Fe("Can't release session options."),l.forEach(_=>i._free(_)),(m=i.unmountExternalData)==null||m.call(i)}},Jn=e=>{var l;let t=mt(),r=nr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,i,s,n,o]=r;n&&(o&&t._OrtClearBoundOutputs(n.handle)!==0&&Fe("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&Fe("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),i.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(a)!==0&&Fe("Can't release session."),nr.delete(e)},un=(e,t,r,a,i,s=!1)=>{if(!e){t.push(0);return}let n=mt(),o=n.PTR_SIZE,l=e[0],p=e[1],c=e[3],f,u;if(l==="string"&&(c==="gpu-buffer"||c==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&c!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(c==="gpu-buffer"){let b=e[2].gpuBuffer;u=Br(oa(l),p);let w=n.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=w(a,i,b,u)}else if(c==="ml-tensor"){let b=e[2].mlTensor;u=Br(oa(l),p);let w=n.jsepRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=w(b,oa(l),p)}else{let b=e[2];if(Array.isArray(b)){u=o*b.length,f=n._malloc(u),r.push(f);for(let w=0;w<b.length;w++){if(typeof b[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);n.setValue(f+w*o,$t(b[w],r),"*")}}else u=b.byteLength,f=n._malloc(u),r.push(f),n.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,u),f)}let m=n.stackSave(),_=n.stackAlloc(4*p.length);try{p.forEach((w,v)=>n.setValue(_+v*o,w,o===4?"i32":"i64"));let b=n._OrtCreateTensor(oa(l),f,u,_,p.length,fn(c));b===0&&Fe(`Can't create tensor for input/output. session=${a}, index=${i}.`),t.push(b)}finally{n.stackRestore(m)}},es=async(e,t,r,a,i,s)=>{var ne,X;let n=mt(),o=n.PTR_SIZE,l=nr.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=l[0],c=l[1],f=l[2],u=l[3],m=l[4],_=l[5],b=t.length,w=a.length,v=0,y=[],k=[],S=[],E=[],T=n.stackSave(),I=n.stackAlloc(b*o),D=n.stackAlloc(b*o),R=n.stackAlloc(w*o),W=n.stackAlloc(w*o);try{(ne=n.jsepOnRunStart)==null||ne.call(n,p),[v,y]=Rp(s);for(let O=0;O<b;O++)un(r[O],k,E,e,t[O],m);for(let O=0;O<w;O++)un(i[O],S,E,e,b+a[O],m);for(let O=0;O<b;O++)n.setValue(I+O*o,k[O],"*"),n.setValue(D+O*o,c[t[O]],"*");for(let O=0;O<w;O++)n.setValue(R+O*o,S[O],"*"),n.setValue(W+O*o,f[a[O]],"*");if(u&&!_){let{handle:O,outputPreferredLocations:V,outputPreferredLocationsEncoded:Y}=u;if(c.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${c.length}).`);for(let J=0;J<b;J++){let oe=t[J];await n._OrtBindInput(O,c[oe],k[J])!==0&&Fe(`Can't bind input[${J}] for session=${e}.`)}for(let J=0;J<w;J++){let oe=a[J];(X=i[J])!=null&&X[3]?n._OrtBindOutput(O,f[oe],S[J],0)!==0&&Fe(`Can't bind pre-allocated output[${J}] for session=${e}.`):n._OrtBindOutput(O,f[oe],0,Y[oe])!==0&&Fe(`Can't bind output[${J}] to ${V[J]} for session=${e}.`)}nr.set(e,[p,c,f,u,m,!0])}let K;u?K=await n._OrtRunWithBinding(p,u.handle,w,R,v):K=await n._OrtRun(p,D,I,b,W,w,R,v),K!==0&&Fe("failed to call OrtRun().");let U=[];for(let O=0;O<w;O++){let V=Number(n.getValue(R+O*o,"*"));if(V===S[O]){U.push(i[O]);continue}let Y=n.stackSave(),J=n.stackAlloc(4*o),oe=!1,se,F=0;try{n._OrtGetTensorData(V,J,J+o,J+2*o,J+3*o)!==0&&Fe(`Can't access output tensor data on index ${O}.`);let ie=o===4?"i32":"i64",ee=Number(n.getValue(J,ie));F=n.getValue(J+o,"*");let L=n.getValue(J+o*2,"*"),B=Number(n.getValue(J+o*3,ie)),H=[];for(let _e=0;_e<B;_e++)H.push(Number(n.getValue(L+_e*o,ie)));n._OrtFree(L)!==0&&Fe("Can't free memory for tensor dims.");let $e=H.reduce((_e,be)=>_e*be,1);se=vr(ee);let ve=u==null?void 0:u.outputPreferredLocations[a[O]];if(se==="string"){if(ve==="gpu-buffer"||ve==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let _e=[];for(let be=0;be<$e;be++){let Ue=n.getValue(F+be*o,"*"),ke=n.getValue(F+(be+1)*o,"*"),we=be===$e-1?void 0:ke-Ue;_e.push(n.UTF8ToString(Ue,we))}U.push([se,H,_e,"cpu"])}else if(ve==="gpu-buffer"&&$e>0){let _e=n.jsepGetBuffer;if(!_e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let be=_e(F),Ue=Br(ee,$e);if(Ue===void 0||!Nn(se))throw new Error(`Unsupported data type: ${se}`);oe=!0,U.push([se,H,{gpuBuffer:be,download:n.jsepCreateDownloader(be,Ue,se),dispose:()=>{n._OrtReleaseTensor(V)!==0&&Fe("Can't release tensor.")}},"gpu-buffer"])}else if(ve==="ml-tensor"&&$e>0){let _e=n.jsepEnsureTensor;if(!_e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Br(ee,$e)===void 0||!Bn(se))throw new Error(`Unsupported data type: ${se}`);let be=await _e(F,ee,H,!1);oe=!0,U.push([se,H,{mlTensor:be,download:n.jsepCreateMLTensorDownloader(F,se),dispose:()=>{n.jsepReleaseTensorId(F),n._OrtReleaseTensor(V)}},"ml-tensor"])}else{let _e=Rn(se),be=new _e($e);new Uint8Array(be.buffer,be.byteOffset,be.byteLength).set(n.HEAPU8.subarray(F,F+be.byteLength)),U.push([se,H,be,"cpu"])}}finally{n.stackRestore(Y),se==="string"&&F&&n._free(F),oe||n._OrtReleaseTensor(V)}}return u&&!m&&(n._OrtClearBoundOutputs(u.handle)!==0&&Fe("Can't clear bound outputs."),nr.set(e,[p,c,f,u,m,!1])),U}finally{n.stackRestore(T),k.forEach(K=>n._OrtReleaseTensor(K)),S.forEach(K=>n._OrtReleaseTensor(K)),E.forEach(K=>n._free(K)),v!==0&&n._OrtReleaseRunOptions(v),y.forEach(K=>n._free(K))}},ts=e=>{let t=mt(),r=nr.get(e);if(!r)throw new Error("invalid session id");let a=r[0],i=t._OrtEndProfiling(a);i===0&&Fe("Can't get an profile file name."),t._OrtFree(i)},rs=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),sr,St,Rr,ia,na,Ua,dn,Va,yr,br,Vd,Dh,Rh,Nh,Bh,Mh,Ph,Uh,Vh=le(()=>{Lt(),Oh(),Er(),An(),sr=()=>!!at.wasm.proxy&&typeof document<"u",Rr=!1,ia=!1,na=!1,Va=new Map,yr=(e,t)=>{let r=Va.get(e);r?r.push(t):Va.set(e,[t])},br=()=>{if(Rr||!ia||na||!St)throw new Error("worker not ready")},Vd=e=>{switch(e.data.type){case"init-wasm":Rr=!1,e.data.err?(na=!0,dn[1](e.data.err)):(ia=!0,dn[0]()),Ua&&(URL.revokeObjectURL(Ua),Ua=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Va.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Dh=async()=>{if(!ia){if(Rr)throw new Error("multiple calls to 'initWasm()' detected.");if(na)throw new Error("previous call to 'initWasm()' failed.");if(Rr=!0,sr())return new Promise((e,t)=>{St==null||St.terminate(),Op().then(([r,a])=>{var i;try{St=a,St.onerror=n=>t(n),St.onmessage=Vd,dn=[e,t];let s={type:"init-wasm",in:at};!s.in.wasm.wasmPaths&&(r||(i=import.meta.url)!=null&&i.startsWith("file:"))&&(s.in.wasm.wasmPaths={wasm:new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.Y7jqkEt_.wasm",import.meta.url).href,import.meta.url).href}),St.postMessage(s),Ua=r}catch(s){t(s)}},t)});try{await On(at.wasm),await Zn(at),ia=!0}catch(e){throw na=!0,e}finally{Rr=!1}}},Rh=async e=>{if(sr())return br(),new Promise((t,r)=>{yr("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:at}};St.postMessage(a)});await Yn(at,e)},Nh=async e=>sr()?(br(),new Promise((t,r)=>{yr("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};St.postMessage(a,[e.buffer])})):Ya(e),Bh=async(e,t)=>{if(sr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return br(),new Promise((r,a)=>{yr("create",[r,a]);let i={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),St.postMessage(i,s)})}else return Xn(e,t)},Mh=async e=>{if(sr())return br(),new Promise((t,r)=>{yr("release",[t,r]);let a={type:"release",in:e};St.postMessage(a)});Jn(e)},Ph=async(e,t,r,a,i,s)=>{if(sr()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return br(),new Promise((n,o)=>{yr("run",[n,o]);let l=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:a,options:s}};St.postMessage(p,rs(l))})}else return es(e,t,r,a,i,s)},Uh=async e=>{if(sr())return br(),new Promise((t,r)=>{yr("end-profiling",[t,r]);let a={type:"end-profiling",in:e};St.postMessage(a)});ts(e)}}),pn,Ld,Lh,Q_=le(()=>{Lt(),Vh(),De(),zn(),Bp(),pn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ld=e=>{switch(e[3]){case"cpu":return new Ft(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Nn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:i}=e[2];return Ft.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:i})}case"ml-tensor":{let t=e[0];if(!Bn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:i}=e[2];return Ft.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Lh=class{async fetchModelAndCopyToWasmMemory(e){return Nh(await Mn(e))}async loadModel(e,t){jt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Bh(r,t),Vt()}async dispose(){return Mh(this.sessionId)}async run(e,t,r){jt();let a=[],i=[];Object.entries(e).forEach(f=>{let u=f[0],m=f[1],_=this.inputNames.indexOf(u);if(_===-1)throw new Error(`invalid input '${u}'`);a.push(m),i.push(_)});let s=[],n=[];Object.entries(t).forEach(f=>{let u=f[0],m=f[1],_=this.outputNames.indexOf(u);if(_===-1)throw new Error(`invalid output '${u}'`);s.push(m),n.push(_)});let o=a.map((f,u)=>pn(f,()=>`input "${this.inputNames[i[u]]}"`)),l=s.map((f,u)=>f?pn(f,()=>`output "${this.outputNames[n[u]]}"`):null),p=await Ph(this.sessionId,i,o,n,l,r),c={};for(let f=0;f<p.length;f++)c[this.outputNames[n[f]]]=s[f]??Ld(p[f]);return Vt(),c}startProfiling(){}endProfiling(){Uh(this.sessionId)}}}),Wh={};fa(Wh,{OnnxruntimeWebAssemblyBackend:()=>En,initializeFlags:()=>Sn,wasmBackend:()=>qh});var Sn,En,qh,Z_=le(()=>{Lt(),Vh(),Q_(),Sn=()=>{if((typeof at.wasm.initTimeout!="number"||at.wasm.initTimeout<0)&&(at.wasm.initTimeout=0),at.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof at.wasm.proxy!="boolean"&&(at.wasm.proxy=!1),typeof at.wasm.trace!="boolean"&&(at.wasm.trace=!1),typeof at.wasm.numThreads!="number"||!Number.isInteger(at.wasm.numThreads)||at.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)at.wasm.numThreads=1;else{let e=typeof navigator>"u"?Rg("node:os").cpus().length:navigator.hardwareConcurrency;at.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},En=class{async init(e){Sn(),await Dh(),await Rh(e)}async createInferenceSessionHandler(e,t){let r=new Lh;return await r.loadModel(e,t),Promise.resolve(r)}},qh=new En});Lt();Lt();Lt();var Y_="1.21.0-dev.20250206-d981b153d3";{let e=(Z_(),Ha(Wh)).wasmBackend;Nr("webgpu",e,5),Nr("webnn",e,5),Nr("cpu",e,10),Nr("wasm",e,10)}Object.defineProperty(at.versions,"web",{value:Y_,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wd(e,t,r){const a=e.slice();return a[10]=t[r],a}function qd(e){let t,r,a=e[1].name+"",i,s,n,o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',l,p,c,f,u,m,_=e[3].t("Close")+"",b,w,v;function y(E,T){return E[2].length?J_:X_}let k=y(e),S=k(e);return{c(){t=M("div"),r=M("div"),i=Te(a),s=ce(),n=M("button"),n.innerHTML=o,l=ce(),p=M("div"),c=M("div"),S.c(),f=ce(),u=M("div"),m=M("button"),b=Te(_),this.h()},l(E){t=P(E,"DIV",{class:!0});var T=G(t);r=P(T,"DIV",{class:!0});var I=G(r);i=Ie(I,a),I.forEach(C),s=fe(T),n=P(T,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),wr(n)!=="svelte-1yw1f3d"&&(n.innerHTML=o),T.forEach(C),l=fe(E),p=P(E,"DIV",{class:!0});var D=G(p);c=P(D,"DIV",{class:!0});var R=G(c);S.l(R),R.forEach(C),f=fe(D),u=P(D,"DIV",{class:!0});var W=G(u);m=P(W,"BUTTON",{class:!0,type:!0});var ne=G(m);b=Ie(ne,_),ne.forEach(C),W.forEach(C),D.forEach(C),this.h()},h(){N(r,"class","text-lg font-medium self-center"),N(n,"class","self-center"),N(n,"aria-label","Close"),N(t,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),N(c,"class","mb-2"),N(m,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),N(m,"type","button"),N(u,"class","flex justify-end pt-3"),N(p,"class","px-5 pb-4 dark:text-gray-200")},m(E,T){de(E,t,T),A(t,r),A(r,i),A(t,s),A(t,n),de(E,l,T),de(E,p,T),A(p,c),S.m(c,null),A(p,f),A(p,u),A(u,m),A(m,b),w||(v=[pt(n,"click",e[5]),pt(m,"click",e[5])],w=!0)},p(E,T){T&2&&a!==(a=E[1].name+"")&&Be(i,a),k===(k=y(E))&&S?S.p(E,T):(S.d(1),S=k(E),S&&(S.c(),S.m(c,null))),T&8&&_!==(_=E[3].t("Close")+"")&&Be(b,_)},d(E){E&&(C(t),C(l),C(p)),S.d(),w=!1,Hr(v)}}}function X_(e){let t,r="-";return{c(){t=M("span"),t.textContent=r},l(a){t=P(a,"SPAN",{"data-svelte-h":!0}),wr(t)!=="svelte-1s4sarz"&&(t.textContent=r)},m(a,i){de(a,t,i)},p:ct,d(a){a&&C(t)}}}function J_(e){let t,r=ur(e[2]),a=[];for(let i=0;i<r.length;i+=1)a[i]=Hd(Wd(e,r,i));return{c(){t=M("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){t=P(i,"DIV",{class:!0});var s=G(t);for(let n=0;n<a.length;n+=1)a[n].l(s);s.forEach(C),this.h()},h(){N(t,"class","flex flex-wrap gap-1 mt-1")},m(i,s){de(i,t,s);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(t,null)},p(i,s){if(s&4){r=ur(i[2]);let n;for(n=0;n<r.length;n+=1){const o=Wd(i,r,n);a[n]?a[n].p(o,s):(a[n]=Hd(o),a[n].c(),a[n].m(t,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},d(i){i&&C(t),ip(a,i)}}}function Hd(e){let t,r=e[10].tag+"",a,i,s,n,o=e[10].count+"",l,p,c;return{c(){t=M("span"),a=Te(r),i=ce(),s=M("span"),n=Te("("),l=Te(o),p=Te(")"),c=ce(),this.h()},l(f){t=P(f,"SPAN",{class:!0});var u=G(t);a=Ie(u,r),i=fe(u),s=P(u,"SPAN",{class:!0});var m=G(s);n=Ie(m,"("),l=Ie(m,o),p=Ie(m,")"),m.forEach(C),c=fe(u),u.forEach(C),this.h()},h(){N(s,"class","text-gray-500"),N(t,"class","px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs")},m(f,u){de(f,t,u),A(t,a),A(t,i),A(t,s),A(s,n),A(s,l),A(s,p),A(t,c)},p(f,u){u&4&&r!==(r=f[10].tag+"")&&Be(a,r),u&4&&o!==(o=f[10].count+"")&&Be(l,o)},d(f){f&&C(t)}}}function e0(e){let t,r=e[1]&&qd(e);return{c(){r&&r.c(),t=lr()},l(a){r&&r.l(a),t=lr()},m(a,i){r&&r.m(a,i),de(a,t,i)},p(a,i){a[1]?r?r.p(a,i):(r=qd(a),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(a){a&&C(t),r&&r.d(a)}}}function t0(e){let t,r,a;function i(n){e[8](n)}let s={size:"sm",$$slots:{default:[e0]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new op({props:s}),Lr.push(()=>jr(t,"show",i)),{c(){Ce(t.$$.fragment)},l(n){ze(t.$$.fragment,n)},m(n,o){Ae(t,n,o),a=!0},p(n,[o]){const l={};o&8206&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],Wr(()=>r=!1)),t.$set(l)},i(n){a||(te(t.$$.fragment,n),a=!0)},o(n){ae(t.$$.fragment,n),a=!1},d(n){Oe(t,n)}}}function r0(e,t,r){let a,i,{show:s=!1}=t,{model:n=null}=t,{feedbacks:o=[]}=t,{onClose:l=()=>{}}=t;const p=qr("i18n");or(e,p,m=>r(3,i=m));const c=()=>{r(0,s=!1),l()},f=(m,_,b=5)=>{const w=new Map;return _.filter(v=>v.data.model_id===m).forEach(v=>{(v.data.tags||[]).forEach(y=>{w.set(y,(w.get(y)||0)+1)})}),Array.from(w.entries()).sort((v,y)=>y[1]-v[1]).slice(0,b).map(([v,y])=>({tag:v,count:y}))};function u(m){s=m,r(0,s)}return e.$$set=m=>{"show"in m&&r(0,s=m.show),"model"in m&&r(1,n=m.model),"feedbacks"in m&&r(6,o=m.feedbacks),"onClose"in m&&r(7,l=m.onClose)},e.$$.update=()=>{e.$$.dirty&66&&r(2,a=n?f(n.id,o):[])},[s,n,a,i,p,c,o,l,u]}class a0 extends Gr{constructor(t){super(),Fr(this,t,r0,t0,Vr,{show:0,model:1,feedbacks:6,onClose:7})}}const{Map:i0}=lg;function Gd(e,t,r){const a=e.slice();return a[10]=t[r],a[38]=r,a}function n0(e){let t,r,a,i,s,n,o,l,p;return a=new gg({props:{className:"size-3"}}),{c(){t=M("div"),r=M("div"),Ce(a.$$.fragment),i=ce(),s=M("input"),this.h()},l(c){t=P(c,"DIV",{class:!0});var f=G(t);r=P(f,"DIV",{class:!0});var u=G(r);ze(a.$$.fragment,u),u.forEach(C),i=fe(f),s=P(f,"INPUT",{class:!0,placeholder:!0}),f.forEach(C),this.h()},h(){N(r,"class","self-center ml-1 mr-3"),N(s,"class","w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"),N(s,"placeholder",n=e[9].t("Search")),N(t,"class","flex flex-1")},m(c,f){de(c,t,f),A(t,r),Ae(a,r,null),A(t,i),A(t,s),lo(s,e[2]),o=!0,l||(p=[pt(s,"input",e[17]),pt(s,"focus",e[18])],l=!0)},p(c,f){(!o||f[0]&512&&n!==(n=c[9].t("Search")))&&N(s,"placeholder",n),f[0]&4&&s.value!==c[2]&&lo(s,c[2])},i(c){o||(te(a.$$.fragment,c),o=!0)},o(c){ae(a.$$.fragment,c),o=!1},d(c){c&&C(t),Oe(a),l=!1,Hr(p)}}}function Fd(e){let t,r,a,i;return a=new mg({}),{c(){t=M("div"),r=M("div"),Ce(a.$$.fragment),this.h()},l(s){t=P(s,"DIV",{class:!0});var n=G(t);r=P(n,"DIV",{class:!0});var o=G(r);ze(a.$$.fragment,o),o.forEach(C),n.forEach(C),this.h()},h(){N(r,"class","m-auto"),N(t,"class","absolute top-0 bottom-0 left-0 right-0 flex")},m(s,n){de(s,t,n),A(t,r),Ae(a,r,null),i=!0},i(s){i||(te(a.$$.fragment,s),i=!0)},o(s){ae(a.$$.fragment,s),i=!1},d(s){s&&C(t),Oe(a)}}}function s0(e){let t,r,a,i,s,n=e[9].t("RK")+"",o,l,p,c,f,u,m,_=e[9].t("Model")+"",b,w,v,y,k,S,E,T=e[9].t("Rating")+"",I,D,R,W,ne,X,K,U=e[9].t("Won")+"",O,V,Y,J,oe,se,F,ie=e[9].t("Lost")+"",ee,L,B,H,$e,ve,_e=[],be=new i0,Ue,ke,we,Ge;const it=[u0,l0],Ve=[];function et(me,Pe){return me[3]==="rating"?0:1}p=et(e),c=Ve[p]=it[p](e);const _t=[f0,c0],tt=[];function Rt(me,Pe){return me[3]==="name"?0:1}v=Rt(e),y=tt[v]=_t[v](e);const kt=[_0,g0],ft=[];function xe(me,Pe){return me[3]==="rating"?0:1}R=xe(e),W=ft[R]=kt[R](e);const Re=[v0,$0],Xe=[];function nt(me,Pe){return me[3]==="won"?0:1}Y=nt(e),J=Xe[Y]=Re[Y](e);const vt=[S0,k0],ot=[];function Et(me,Pe){return me[3]==="lost"?0:1}B=Et(e),H=ot[B]=vt[B](e);let qe=ur(e[8]);const Kt=me=>me[10].id;for(let me=0;me<qe.length;me+=1){let Pe=Gd(e,qe,me),Je=Kt(Pe);be.set(Je,_e[me]=jd(Je,Pe))}return{c(){t=M("table"),r=M("thead"),a=M("tr"),i=M("th"),s=M("div"),o=Te(n),l=ce(),c.c(),f=ce(),u=M("th"),m=M("div"),b=Te(_),w=ce(),y.c(),k=ce(),S=M("th"),E=M("div"),I=Te(T),D=ce(),W.c(),ne=ce(),X=M("th"),K=M("div"),O=Te(U),V=ce(),J.c(),oe=ce(),se=M("th"),F=M("div"),ee=Te(ie),L=ce(),H.c(),$e=ce(),ve=M("tbody");for(let me=0;me<_e.length;me+=1)_e[me].c();this.h()},l(me){t=P(me,"TABLE",{class:!0});var Pe=G(t);r=P(Pe,"THEAD",{class:!0});var Je=G(r);a=P(Je,"TR",{class:!0});var rt=G(a);i=P(rt,"TH",{scope:!0,class:!0});var Tt=G(i);s=P(Tt,"DIV",{class:!0});var ht=G(s);o=Ie(ht,n),l=fe(ht),c.l(ht),ht.forEach(C),Tt.forEach(C),f=fe(rt),u=P(rt,"TH",{scope:!0,class:!0});var Qt=G(u);m=P(Qt,"DIV",{class:!0});var cr=G(m);b=Ie(cr,_),w=fe(cr),y.l(cr),cr.forEach(C),Qt.forEach(C),k=fe(rt),S=P(rt,"TH",{scope:!0,class:!0});var Qr=G(S);E=P(Qr,"DIV",{class:!0});var fr=G(E);I=Ie(fr,T),D=fe(fr),W.l(fr),fr.forEach(C),Qr.forEach(C),ne=fe(rt),X=P(rt,"TH",{scope:!0,class:!0});var hr=G(X);K=P(hr,"DIV",{class:!0});var Ir=G(K);O=Ie(Ir,U),V=fe(Ir),J.l(Ir),Ir.forEach(C),hr.forEach(C),oe=fe(rt),se=P(rt,"TH",{scope:!0,class:!0});var ha=G(se);F=P(ha,"DIV",{class:!0});var Cr=G(F);ee=Ie(Cr,ie),L=fe(Cr),H.l(Cr),Cr.forEach(C),ha.forEach(C),rt.forEach(C),Je.forEach(C),$e=fe(Pe),ve=P(Pe,"TBODY",{class:!0});var ma=G(ve);for(let zr=0;zr<_e.length;zr+=1)_e[zr].l(ma);ma.forEach(C),Pe.forEach(C),this.h()},h(){N(s,"class","flex gap-1.5 items-center"),N(i,"scope","col"),N(i,"class","px-3 py-1.5 cursor-pointer select-none w-3"),N(m,"class","flex gap-1.5 items-center"),N(u,"scope","col"),N(u,"class","px-3 py-1.5 cursor-pointer select-none"),N(E,"class","flex gap-1.5 items-center justify-end"),N(S,"scope","col"),N(S,"class","px-3 py-1.5 text-right cursor-pointer select-none w-fit"),N(K,"class","flex gap-1.5 items-center justify-end"),N(X,"scope","col"),N(X,"class","px-3 py-1.5 text-right cursor-pointer select-none w-5"),N(F,"class","flex gap-1.5 items-center justify-end"),N(se,"scope","col"),N(se,"class","px-3 py-1.5 text-right cursor-pointer select-none w-5"),N(a,"class",""),N(r,"class","text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"),N(ve,"class",""),N(t,"class",Ue="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded "+(e[5]?"opacity-20":""))},m(me,Pe){de(me,t,Pe),A(t,r),A(r,a),A(a,i),A(i,s),A(s,o),A(s,l),Ve[p].m(s,null),A(a,f),A(a,u),A(u,m),A(m,b),A(m,w),tt[v].m(m,null),A(a,k),A(a,S),A(S,E),A(E,I),A(E,D),ft[R].m(E,null),A(a,ne),A(a,X),A(X,K),A(K,O),A(K,V),Xe[Y].m(K,null),A(a,oe),A(a,se),A(se,F),A(F,ee),A(F,L),ot[B].m(F,null),A(t,$e),A(t,ve);for(let Je=0;Je<_e.length;Je+=1)_e[Je]&&_e[Je].m(ve,null);ke=!0,we||(Ge=[pt(i,"click",e[19]),pt(u,"click",e[20]),pt(S,"click",e[21]),pt(X,"click",e[22]),pt(se,"click",e[23])],we=!0)},p(me,Pe){(!ke||Pe[0]&512)&&n!==(n=me[9].t("RK")+"")&&Be(o,n);let Je=p;p=et(me),p===Je?Ve[p].p(me,Pe):(Ze(),ae(Ve[Je],1,1,()=>{Ve[Je]=null}),Ye(),c=Ve[p],c?c.p(me,Pe):(c=Ve[p]=it[p](me),c.c()),te(c,1),c.m(s,null)),(!ke||Pe[0]&512)&&_!==(_=me[9].t("Model")+"")&&Be(b,_);let rt=v;v=Rt(me),v===rt?tt[v].p(me,Pe):(Ze(),ae(tt[rt],1,1,()=>{tt[rt]=null}),Ye(),y=tt[v],y?y.p(me,Pe):(y=tt[v]=_t[v](me),y.c()),te(y,1),y.m(m,null)),(!ke||Pe[0]&512)&&T!==(T=me[9].t("Rating")+"")&&Be(I,T);let Tt=R;R=xe(me),R===Tt?ft[R].p(me,Pe):(Ze(),ae(ft[Tt],1,1,()=>{ft[Tt]=null}),Ye(),W=ft[R],W?W.p(me,Pe):(W=ft[R]=kt[R](me),W.c()),te(W,1),W.m(E,null)),(!ke||Pe[0]&512)&&U!==(U=me[9].t("Won")+"")&&Be(O,U);let ht=Y;Y=nt(me),Y===ht?Xe[Y].p(me,Pe):(Ze(),ae(Xe[ht],1,1,()=>{Xe[ht]=null}),Ye(),J=Xe[Y],J?J.p(me,Pe):(J=Xe[Y]=Re[Y](me),J.c()),te(J,1),J.m(K,null)),(!ke||Pe[0]&512)&&ie!==(ie=me[9].t("Lost")+"")&&Be(ee,ie);let Qt=B;B=Et(me),B===Qt?ot[B].p(me,Pe):(Ze(),ae(ot[Qt],1,1,()=>{ot[Qt]=null}),Ye(),H=ot[B],H?H.p(me,Pe):(H=ot[B]=vt[B](me),H.c()),te(H,1),H.m(F,null)),Pe[0]&8448&&(qe=ur(me[8]),_e=sp(_e,Pe,Kt,1,me,qe,be,ve,ug,jd,null,Gd)),(!ke||Pe[0]&32&&Ue!==(Ue="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded "+(me[5]?"opacity-20":"")))&&N(t,"class",Ue)},i(me){ke||(te(c),te(y),te(W),te(J),te(H),ke=!0)},o(me){ae(c),ae(y),ae(W),ae(J),ae(H),ke=!1},d(me){me&&C(t),Ve[p].d(),tt[v].d(),ft[R].d(),Xe[Y].d(),ot[B].d();for(let Pe=0;Pe<_e.length;Pe+=1)_e[Pe].d();we=!1,Hr(Ge)}}}function o0(e){let t,r=e[9].t("No models found")+"",a;return{c(){t=M("div"),a=Te(r),this.h()},l(i){t=P(i,"DIV",{class:!0});var s=G(t);a=Ie(s,r),s.forEach(C),this.h()},h(){N(t,"class","text-center text-xs text-gray-500 dark:text-gray-400 py-1")},m(i,s){de(i,t,s),A(t,a)},p(i,s){s[0]&512&&r!==(r=i[9].t("No models found")+"")&&Be(a,r)},i:ct,o:ct,d(i){i&&C(t)}}}function l0(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function u0(e){let t,r,a,i;const s=[p0,d0],n=[];function o(l,p){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function d0(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function p0(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function c0(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function f0(e){let t,r,a,i;const s=[m0,h0],n=[];function o(l,p){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function h0(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function m0(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function g0(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function _0(e){let t,r,a,i;const s=[b0,y0],n=[];function o(l,p){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function y0(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function b0(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function $0(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function v0(e){let t,r,a,i;const s=[x0,w0],n=[];function o(l,p){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function w0(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function x0(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function k0(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function S0(e){let t,r,a,i;const s=[T0,E0],n=[];function o(l,p){return l[4]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function E0(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function T0(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function I0(e){let t,r=(e[10].stats.won/e[10].stats.count*100).toFixed(1)+"",a,i,s,n,o=e[10].stats.won+"",l;return{c(){t=M("span"),a=Te(r),i=Te("%"),s=ce(),n=M("span"),l=Te(o),this.h()},l(p){t=P(p,"SPAN",{class:!0});var c=G(t);a=Ie(c,r),i=Ie(c,"%"),c.forEach(C),s=fe(p),n=P(p,"SPAN",{class:!0});var f=G(n);l=Ie(f,o),f.forEach(C),this.h()},h(){N(t,"class","hidden group-hover:inline"),N(n,"class","group-hover:hidden")},m(p,c){de(p,t,c),A(t,a),A(t,i),de(p,s,c),de(p,n,c),A(n,l)},p(p,c){c[0]&256&&r!==(r=(p[10].stats.won/p[10].stats.count*100).toFixed(1)+"")&&Be(a,r),c[0]&256&&o!==(o=p[10].stats.won+"")&&Be(l,o)},d(p){p&&(C(t),C(s),C(n))}}}function C0(e){let t;return{c(){t=Te("-")},l(r){t=Ie(r,"-")},m(r,a){de(r,t,a)},p:ct,d(r){r&&C(t)}}}function z0(e){let t,r=(e[10].stats.lost/e[10].stats.count*100).toFixed(1)+"",a,i,s,n,o=e[10].stats.lost+"",l;return{c(){t=M("span"),a=Te(r),i=Te("%"),s=ce(),n=M("span"),l=Te(o),this.h()},l(p){t=P(p,"SPAN",{class:!0});var c=G(t);a=Ie(c,r),i=Ie(c,"%"),c.forEach(C),s=fe(p),n=P(p,"SPAN",{class:!0});var f=G(n);l=Ie(f,o),f.forEach(C),this.h()},h(){N(t,"class","hidden group-hover:inline"),N(n,"class","group-hover:hidden")},m(p,c){de(p,t,c),A(t,a),A(t,i),de(p,s,c),de(p,n,c),A(n,l)},p(p,c){c[0]&256&&r!==(r=(p[10].stats.lost/p[10].stats.count*100).toFixed(1)+"")&&Be(a,r),c[0]&256&&o!==(o=p[10].stats.lost+"")&&Be(l,o)},d(p){p&&(C(t),C(s),C(n))}}}function A0(e){let t;return{c(){t=Te("-")},l(r){t=Ie(r,"-")},m(r,a){de(r,t,a)},p:ct,d(r){r&&C(t)}}}function jd(e,t){var ie;let r,a,i,s=(((ie=t[10])==null?void 0:ie.rating)!=="-"?t[38]+1:"-")+"",n,o,l,p,c,f,u,m,_,b,w=t[10].name+"",v,y,k,S=t[10].rating+"",E,T,I,D,R,W,ne,X,K,U;function O(ee,L){return ee[10].stats.won==="-"?C0:I0}let V=O(t),Y=V(t);function J(ee,L){return ee[10].stats.lost==="-"?A0:z0}let oe=J(t),se=oe(t);function F(){return t[24](t[10])}return{key:e,first:null,c(){r=M("tr"),a=M("td"),i=M("div"),n=Te(s),o=ce(),l=M("td"),p=M("div"),c=M("div"),f=M("img"),_=ce(),b=M("div"),v=Te(w),y=ce(),k=M("td"),E=Te(S),T=ce(),I=M("td"),D=M("div"),Y.c(),R=ce(),W=M("td"),ne=M("div"),se.c(),X=ce(),this.h()},l(ee){r=P(ee,"TR",{class:!0});var L=G(r);a=P(L,"TD",{class:!0});var B=G(a);i=P(B,"DIV",{class:!0});var H=G(i);n=Ie(H,s),H.forEach(C),B.forEach(C),o=fe(L),l=P(L,"TD",{class:!0});var $e=G(l);p=P($e,"DIV",{class:!0});var ve=G(p);c=P(ve,"DIV",{class:!0});var _e=G(c);f=P(_e,"IMG",{src:!0,alt:!0,class:!0}),_e.forEach(C),_=fe(ve),b=P(ve,"DIV",{class:!0});var be=G(b);v=Ie(be,w),be.forEach(C),ve.forEach(C),$e.forEach(C),y=fe(L),k=P(L,"TD",{class:!0});var Ue=G(k);E=Ie(Ue,S),Ue.forEach(C),T=fe(L),I=P(L,"TD",{class:!0});var ke=G(I);D=P(ke,"DIV",{class:!0});var we=G(D);Y.l(we),we.forEach(C),ke.forEach(C),R=fe(L),W=P(L,"TD",{class:!0});var Ge=G(W);ne=P(Ge,"DIV",{class:!0});var it=G(ne);se.l(it),it.forEach(C),Ge.forEach(C),X=fe(L),L.forEach(C),this.h()},h(){var ee,L,B;N(i,"class","line-clamp-1"),N(a,"class","px-3 py-1.5 text-left font-medium text-gray-900 dark:text-white w-fit"),qa(f.src,u=((B=(L=(ee=t[10])==null?void 0:ee.info)==null?void 0:L.meta)==null?void 0:B.profile_image_url)??"/favicon.png")||N(f,"src",u),N(f,"alt",m=t[10].name),N(f,"class","size-5 rounded-full object-cover shrink-0"),N(c,"class","shrink-0"),N(b,"class","font-medium text-gray-800 dark:text-gray-200 pr-4"),N(p,"class","flex items-center gap-2"),N(l,"class","px-3 py-1.5 flex flex-col justify-center"),N(k,"class","px-3 py-1.5 text-right font-medium text-gray-900 dark:text-white w-max"),N(D,"class","w-10"),N(I,"class","px-3 py-1.5 text-right font-semibold text-green-500"),N(ne,"class","w-10"),N(W,"class","px-3 py-1.5 text-right font-semibold text-red-500"),N(r,"class","bg-white dark:bg-gray-900 dark:border-gray-850 text-xs group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"),this.first=r},m(ee,L){de(ee,r,L),A(r,a),A(a,i),A(i,n),A(r,o),A(r,l),A(l,p),A(p,c),A(c,f),A(p,_),A(p,b),A(b,v),A(r,y),A(r,k),A(k,E),A(r,T),A(r,I),A(I,D),Y.m(D,null),A(r,R),A(r,W),A(W,ne),se.m(ne,null),A(r,X),K||(U=pt(r,"click",F),K=!0)},p(ee,L){var B,H,$e,ve;t=ee,L[0]&256&&s!==(s=(((B=t[10])==null?void 0:B.rating)!=="-"?t[38]+1:"-")+"")&&Be(n,s),L[0]&256&&!qa(f.src,u=((ve=($e=(H=t[10])==null?void 0:H.info)==null?void 0:$e.meta)==null?void 0:ve.profile_image_url)??"/favicon.png")&&N(f,"src",u),L[0]&256&&m!==(m=t[10].name)&&N(f,"alt",m),L[0]&256&&w!==(w=t[10].name+"")&&Be(v,w),L[0]&256&&S!==(S=t[10].rating+"")&&Be(E,S),V===(V=O(t))&&Y?Y.p(t,L):(Y.d(1),Y=V(t),Y&&(Y.c(),Y.m(D,null))),oe===(oe=J(t))&&se?se.p(t,L):(se.d(1),se=oe(t),se&&(se.c(),se.m(ne,null)))},d(ee){ee&&C(r),Y.d(),se.d(),K=!1,U()}}}function O0(e){let t,r,a,i,s,n,o=e[9].t("Leaderboard")+"",l,p,c,f,u,m=e[1].length+"",_,b,w,v,y,k,S,E,T,I,D,R,W,ne,X=e[9].t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time.")+"",K,U,O=e[9].t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")+"",V,Y;function J(L){e[16](L)}let oe={model:e[7],feedbacks:e[0],onClose:e[14]};e[6]!==void 0&&(oe.show=e[6]),t=new a0({props:oe}),Lr.push(()=>jr(t,"show",J)),v=new Kr({props:{content:e[9].t("Re-rank models by topic similarity"),$$slots:{default:[n0]},$$scope:{ctx:e}}});let se=e[5]&&Fd();const F=[o0,s0],ie=[];function ee(L,B){return(L[1]??[]).length===0?0:1}return E=ee(e),T=ie[E]=F[E](e),{c(){Ce(t.$$.fragment),a=ce(),i=M("div"),s=M("div"),n=M("div"),l=Te(o),p=ce(),c=M("div"),f=ce(),u=M("span"),_=Te(m),b=ce(),w=M("div"),Ce(v.$$.fragment),y=ce(),k=M("div"),se&&se.c(),S=ce(),T.c(),I=ce(),D=M("div"),R=M("div"),W=M("div"),ne=Te("ⓘ "),K=Te(X),U=ce(),V=Te(O),this.h()},l(L){ze(t.$$.fragment,L),a=fe(L),i=P(L,"DIV",{class:!0});var B=G(i);s=P(B,"DIV",{class:!0});var H=G(s);n=P(H,"DIV",{class:!0});var $e=G(n);l=Ie($e,o),$e.forEach(C),p=fe(H),c=P(H,"DIV",{class:!0}),G(c).forEach(C),f=fe(H),u=P(H,"SPAN",{class:!0});var ve=G(u);_=Ie(ve,m),ve.forEach(C),H.forEach(C),b=fe(B),w=P(B,"DIV",{class:!0});var _e=G(w);ze(v.$$.fragment,_e),_e.forEach(C),B.forEach(C),y=fe(L),k=P(L,"DIV",{class:!0});var be=G(k);se&&se.l(be),S=fe(be),T.l(be),be.forEach(C),I=fe(L),D=P(L,"DIV",{class:!0});var Ue=G(D);R=P(Ue,"DIV",{class:!0});var ke=G(R);W=P(ke,"DIV",{class:!0});var we=G(W);ne=Ie(we,"ⓘ "),K=Ie(we,X),we.forEach(C),U=fe(ke),V=Ie(ke,O),ke.forEach(C),Ue.forEach(C),this.h()},h(){N(n,"class","gap-1"),N(c,"class","flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"),N(u,"class","text-lg font-medium text-gray-500 dark:text-gray-300 mr-1.5"),N(s,"class","flex md:self-center text-lg font-medium px-0.5 shrink-0 items-center"),N(w,"class","flex space-x-2"),N(i,"class","mt-0.5 mb-2 gap-1 flex flex-col md:flex-row justify-between"),N(k,"class","scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5"),N(W,"class","line-clamp-1"),N(R,"class","text-right"),N(D,"class","text-gray-500 text-xs mt-1.5 w-full flex justify-end")},m(L,B){Ae(t,L,B),de(L,a,B),de(L,i,B),A(i,s),A(s,n),A(n,l),A(s,p),A(s,c),A(s,f),A(s,u),A(u,_),A(i,b),A(i,w),Ae(v,w,null),de(L,y,B),de(L,k,B),se&&se.m(k,null),A(k,S),ie[E].m(k,null),de(L,I,B),de(L,D,B),A(D,R),A(R,W),A(W,ne),A(W,K),A(R,U),A(R,V),Y=!0},p(L,B){const H={};B[0]&128&&(H.model=L[7]),B[0]&1&&(H.feedbacks=L[0]),!r&&B[0]&64&&(r=!0,H.show=L[6],Wr(()=>r=!1)),t.$set(H),(!Y||B[0]&512)&&o!==(o=L[9].t("Leaderboard")+"")&&Be(l,o),(!Y||B[0]&2)&&m!==(m=L[1].length+"")&&Be(_,m);const $e={};B[0]&512&&($e.content=L[9].t("Re-rank models by topic similarity")),B[0]&516|B[1]&256&&($e.$$scope={dirty:B,ctx:L}),v.$set($e),L[5]?se?B[0]&32&&te(se,1):(se=Fd(),se.c(),te(se,1),se.m(k,S)):se&&(Ze(),ae(se,1,1,()=>{se=null}),Ye());let ve=E;E=ee(L),E===ve?ie[E].p(L,B):(Ze(),ae(ie[ve],1,1,()=>{ie[ve]=null}),Ye(),T=ie[E],T?T.p(L,B):(T=ie[E]=F[E](L),T.c()),te(T,1),T.m(k,null)),(!Y||B[0]&512)&&X!==(X=L[9].t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time.")+"")&&Be(K,X),(!Y||B[0]&512)&&O!==(O=L[9].t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")+"")&&Be(V,O)},i(L){Y||(te(t.$$.fragment,L),te(v.$$.fragment,L),te(se),te(T),Y=!0)},o(L){ae(t.$$.fragment,L),ae(v.$$.fragment,L),ae(se),ae(T),Y=!1},d(L){L&&(C(a),C(i),C(y),C(k),C(I),C(D)),Oe(t,L),Oe(v),se&&se.d(),ie[E].d()}}}const Kd="TaylorAI/bge-micro-v2";function D0(e,t,r){let a,i,s;or(e,hg,ee=>r(28,i=ee)),pg.backends.onnx.wasm.wasmPaths="/wasm/";const n=qr("i18n");or(e,n,ee=>r(9,s=ee));let o=null,l=null,{feedbacks:p=[]}=t,c=[],f="",u=new Map,m=!0,_,b="rating",w="desc";function v(ee){b===ee?r(4,w=w==="asc"?"desc":"asc"):(r(3,b=ee),r(4,w=ee==="name"?"asc":"desc"))}let y=!1,k=null;const S=ee=>{r(6,y=!0),r(7,k=ee)},E=()=>{r(6,y=!1),r(7,k=null)},T=async(ee=new Map)=>{const L=I(p,ee);r(1,c=i.filter(B=>{var H,$e;return(B==null?void 0:B.owned_by)!=="arena"&&((($e=(H=B==null?void 0:B.info)==null?void 0:H.meta)==null?void 0:$e.hidden)??!1)!==!0}).map(B=>{const H=L.get(B.id);return{...B,rating:H?Math.round(H.rating):"-",stats:{count:H?H.won+H.lost:0,won:H?H.won.toString():"-",lost:H?H.lost.toString():"-"}}}).sort((B,H)=>B.rating==="-"&&H.rating!=="-"?1:H.rating==="-"&&B.rating!=="-"?-1:B.rating!=="-"&&H.rating!=="-"?H.rating-B.rating:B.name.localeCompare(H.name))),r(5,m=!1)};function I(ee,L){const B=new Map,H=32;function $e(be){return B.get(be)||{rating:1e3,won:0,lost:0}}function ve(be,Ue,ke){const we=$e(be);we.rating+=Ue,ke===1?we.won++:ke===0&&we.lost++,B.set(be,we)}function _e(be,Ue,ke,we){const Ge=1/(1+Math.pow(10,(Ue-be)/400));return H*(ke-Ge)*we}return ee.forEach(be=>{const Ue=be.data.model_id,ke=$e(Ue);let we;switch(be.data.rating.toString()){case"1":we=1;break;case"-1":we=0;break;default:return}const Ge=f!==""?L.get(be.id)||0:1;(be.data.sibling_model_ids||[]).forEach(Ve=>{const et=$e(Ve),_t=_e(ke.rating,et.rating,we,Ge),tt=_e(et.rating,ke.rating,1-we,Ge);ve(Ue,_t,we),ve(Ve,tt,1-we)})}),B}const D=(ee,L)=>{if(ee.length!==L.length)throw new Error("Vectors must be the same length");let B=0,H=0,$e=0;for(let ve=0;ve<ee.length;ve++)B+=ee[ve]*L[ve],H+=ee[ve]**2,$e+=L[ve]**2;return H=Math.sqrt(H),$e=Math.sqrt($e),H===0||$e===0?0:B/(H*$e)},R=(ee,L)=>{let B=0;for(const H of L.values()){const $e=D(ee,H);B=Math.max(B,$e)}return B},W=async()=>{window.tokenizer||(window.tokenizer=await cg.from_pretrained(Kd)),window.model||(window.model=await fg.from_pretrained(Kd)),o=window.tokenizer,r(10,l=window.model);const ee=new Set(p.flatMap(L=>L.data.tags||[]));await X(Array.from(ee))},ne=async ee=>{const L=await o(ee);return(await l(L)).last_hidden_state.mean(1).ort_tensor.data},X=async ee=>{const L=new Map;for(const B of ee)u.has(B)||u.set(B,await ne(B)),L.set(B,u.get(B));return L},K=async()=>{if(r(5,m=!0),f.trim()===""){T();return}clearTimeout(_),_=setTimeout(async()=>{const ee=await ne(f),L=new Map;for(const B of p){const H=B.data.tags||[],$e=await X(H),ve=R(ee,$e);L.set(B.id,ve)}T(L)},1500)};np(async()=>{T()});function U(ee){y=ee,r(6,y)}function O(){f=this.value,r(2,f)}const V=()=>{W()},Y=()=>v("rating"),J=()=>v("name"),oe=()=>v("rating"),se=()=>v("won"),F=()=>v("lost"),ie=ee=>S(ee);return e.$$set=ee=>{"feedbacks"in ee&&r(0,p=ee.feedbacks)},e.$$.update=()=>{e.$$.dirty[0]&4&&K(),e.$$.dirty[0]&26&&r(8,a=[...c].sort((ee,L)=>{let B,H;return b==="name"?(B=ee.name,H=L.name,w==="asc"?B.localeCompare(H):H.localeCompare(B)):b==="rating"?(B=ee.rating==="-"?-1/0:ee.rating,H=L.rating==="-"?-1/0:L.rating,w==="asc"?B-H:H-B):b==="won"?(B=ee.stats.won==="-"?-1/0:Number(ee.stats.won),H=L.stats.won==="-"?-1/0:Number(L.stats.won),w==="asc"?B-H:H-B):b==="lost"?(B=ee.stats.lost==="-"?-1/0:Number(ee.stats.lost),H=L.stats.lost==="-"?-1/0:Number(L.stats.lost),w==="asc"?B-H:H-B):0}))},[p,c,f,b,w,m,y,k,a,s,l,n,v,S,E,W,U,O,V,Y,J,oe,se,F,ie]}class R0 extends Gr{constructor(t){super(),Fr(this,t,D0,O0,Vr,{feedbacks:0},null,[-1,-1])}}function N0(e){let t;const r=e[4].default,a=ag(r,e,e[7],null);return{c(){a&&a.c()},l(i){a&&a.l(i)},m(i,s){a&&a.m(i,s),t=!0},p(i,s){a&&a.p&&(!t||s&128)&&ig(a,r,i,i[7],t?sg(r,i[7],s,null):ng(i[7]),null)},i(i){t||(te(a,i),t=!0)},o(i){ae(a,i),t=!1},d(i){a&&a.d(i)}}}function B0(e){let t,r;return t=new Kr({props:{content:e[1].t("More"),$$slots:{default:[N0]},$$scope:{ctx:e}}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},p(a,i){const s={};i&2&&(s.content=a[1].t("More")),i&128&&(s.$$scope={dirty:i,ctx:a}),t.$set(s)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function M0(e){let t,r,a,i=e[1].t("Delete")+"",s,n;return t=new Cg({props:{strokeWidth:"2"}}),{c(){Ce(t.$$.fragment),r=ce(),a=M("div"),s=Te(i),this.h()},l(o){ze(t.$$.fragment,o),r=fe(o),a=P(o,"DIV",{class:!0});var l=G(a);s=Ie(l,i),l.forEach(C),this.h()},h(){N(a,"class","flex items-center")},m(o,l){Ae(t,o,l),de(o,r,l),de(o,a,l),A(a,s),n=!0},p(o,l){(!n||l&2)&&i!==(i=o[1].t("Delete")+"")&&Be(s,i)},i(o){n||(te(t.$$.fragment,o),n=!0)},o(o){ae(t.$$.fragment,o),n=!1},d(o){o&&(C(r),C(a)),Oe(t,o)}}}function P0(e){let t,r;return t=new Sg({props:{class:"flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",$$slots:{default:[M0]},$$scope:{ctx:e}}}),t.$on("click",e[5]),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},p(a,i){const s={};i&130&&(s.$$scope={dirty:i,ctx:a}),t.$set(s)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function U0(e){let t,r,a;return r=new Eg({props:{class:"w-full max-w-[150px] rounded-xl px-1 py-1.5 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",sideOffset:-2,side:"bottom",align:"start",transition:Tg,$$slots:{default:[P0]},$$scope:{ctx:e}}}),{c(){t=M("div"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"DIV",{slot:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"slot","content")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p(i,s){const n={};s&131&&(n.$$scope={dirty:s,ctx:i}),r.$set(n)},i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function V0(e){let t,r,a;function i(n){e[6](n)}let s={$$slots:{content:[U0],default:[B0]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new Ig({props:s}),Lr.push(()=>jr(t,"show",i)),t.$on("change",L0),{c(){Ce(t.$$.fragment)},l(n){ze(t.$$.fragment,n)},m(n,o){Ae(t,n,o),a=!0},p(n,[o]){const l={};o&131&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],Wr(()=>r=!1)),t.$set(l)},i(n){a||(te(t.$$.fragment,n),a=!0)},o(n){ae(t.$$.fragment,n),a=!1},d(n){Oe(t,n)}}}const L0=e=>{};function W0(e,t,r){let a,{$$slots:i={},$$scope:s}=t;const n=rg(),o=qr("i18n");or(e,o,f=>r(1,a=f));let l=!1;const p=()=>{n("delete"),r(0,l=!1)};function c(f){l=f,r(0,l)}return e.$$set=f=>{"$$scope"in f&&r(7,s=f.$$scope)},[l,a,n,o,i,p,c,s]}class q0 extends Gr{constructor(t){super(),Fr(this,t,W0,V0,Vr,{})}}function Qd(e,t,r){const a=e.slice();return a[7]=t[r],a}function Zd(e){var $e,ve,_e,be,Ue;let t,r,a,i=e[2].t("Feedback Details")+"",s,n,o,l='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',p,c,f,u,m,_=e[2].t("Rating")+"",b,w,v,y,k=(((_e=(ve=($e=e[1])==null?void 0:$e.data)==null?void 0:ve.details)==null?void 0:_e.rating)??"-")+"",S,E,T,I,D=e[2].t("Reason")+"",R,W,ne,X,K=(((Ue=(be=e[1])==null?void 0:be.data)==null?void 0:Ue.reason)||"-")+"",U,O,V,Y,J,oe,se=e[2].t("Close")+"",F,ie,ee;function L(ke,we){var Ge,it,Ve,et;return(it=(Ge=ke[1])==null?void 0:Ge.data)!=null&&it.tags&&((et=(Ve=ke[1])==null?void 0:Ve.data)!=null&&et.tags.length)?G0:H0}let B=L(e),H=B(e);return{c(){t=M("div"),r=M("div"),a=M("div"),s=Te(i),n=ce(),o=M("button"),o.innerHTML=l,p=ce(),c=M("div"),f=M("div"),u=M("div"),m=M("div"),b=Te(_),w=ce(),v=M("div"),y=M("span"),S=Te(k),E=ce(),T=M("div"),I=M("div"),R=Te(D),W=ce(),ne=M("div"),X=M("span"),U=Te(K),O=ce(),V=M("div"),H.c(),Y=ce(),J=M("div"),oe=M("button"),F=Te(se),this.h()},l(ke){t=P(ke,"DIV",{});var we=G(t);r=P(we,"DIV",{class:!0});var Ge=G(r);a=P(Ge,"DIV",{class:!0});var it=G(a);s=Ie(it,i),it.forEach(C),n=fe(Ge),o=P(Ge,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),wr(o)!=="svelte-1cxmfa"&&(o.innerHTML=l),Ge.forEach(C),p=fe(we),c=P(we,"DIV",{class:!0});var Ve=G(c);f=P(Ve,"DIV",{class:!0});var et=G(f);u=P(et,"DIV",{class:!0});var _t=G(u);m=P(_t,"DIV",{class:!0});var tt=G(m);b=Ie(tt,_),tt.forEach(C),w=fe(_t),v=P(_t,"DIV",{class:!0});var Rt=G(v);y=P(Rt,"SPAN",{});var kt=G(y);S=Ie(kt,k),kt.forEach(C),Rt.forEach(C),_t.forEach(C),E=fe(et),T=P(et,"DIV",{class:!0});var ft=G(T);I=P(ft,"DIV",{class:!0});var xe=G(I);R=Ie(xe,D),xe.forEach(C),W=fe(ft),ne=P(ft,"DIV",{class:!0});var Re=G(ne);X=P(Re,"SPAN",{});var Xe=G(X);U=Ie(Xe,K),Xe.forEach(C),Re.forEach(C),ft.forEach(C),O=fe(et),V=P(et,"DIV",{class:!0});var nt=G(V);H.l(nt),nt.forEach(C),Y=fe(et),J=P(et,"DIV",{class:!0});var vt=G(J);oe=P(vt,"BUTTON",{class:!0,type:!0});var ot=G(oe);F=Ie(ot,se),ot.forEach(C),vt.forEach(C),et.forEach(C),Ve.forEach(C),we.forEach(C),this.h()},h(){N(a,"class","text-lg font-medium self-center"),N(o,"class","self-center"),N(o,"aria-label","Close"),N(r,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"),N(m,"class","mb-1 text-xs text-gray-500"),N(v,"class","flex-1"),N(u,"class","flex flex-col w-full mb-2"),N(I,"class","mb-1 text-xs text-gray-500"),N(ne,"class","flex-1"),N(T,"class","flex flex-col w-full mb-2"),N(V,"class","mb-2"),N(oe,"class","px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"),N(oe,"type","button"),N(J,"class","flex justify-end pt-3"),N(f,"class","flex flex-col w-full"),N(c,"class","flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200")},m(ke,we){de(ke,t,we),A(t,r),A(r,a),A(a,s),A(r,n),A(r,o),A(t,p),A(t,c),A(c,f),A(f,u),A(u,m),A(m,b),A(u,w),A(u,v),A(v,y),A(y,S),A(f,E),A(f,T),A(T,I),A(I,R),A(T,W),A(T,ne),A(ne,X),A(X,U),A(f,O),A(f,V),H.m(V,null),A(f,Y),A(f,J),A(J,oe),A(oe,F),ie||(ee=[pt(o,"click",e[4]),pt(oe,"click",e[4])],ie=!0)},p(ke,we){var Ge,it,Ve,et,_t;we&4&&i!==(i=ke[2].t("Feedback Details")+"")&&Be(s,i),we&4&&_!==(_=ke[2].t("Rating")+"")&&Be(b,_),we&2&&k!==(k=(((Ve=(it=(Ge=ke[1])==null?void 0:Ge.data)==null?void 0:it.details)==null?void 0:Ve.rating)??"-")+"")&&Be(S,k),we&4&&D!==(D=ke[2].t("Reason")+"")&&Be(R,D),we&2&&K!==(K=(((_t=(et=ke[1])==null?void 0:et.data)==null?void 0:_t.reason)||"-")+"")&&Be(U,K),B===(B=L(ke))&&H?H.p(ke,we):(H.d(1),H=B(ke),H&&(H.c(),H.m(V,null))),we&4&&se!==(se=ke[2].t("Close")+"")&&Be(F,se)},d(ke){ke&&C(t),H.d(),ie=!1,Hr(ee)}}}function H0(e){let t,r="-";return{c(){t=M("span"),t.textContent=r},l(a){t=P(a,"SPAN",{"data-svelte-h":!0}),wr(t)!=="svelte-1s4sarz"&&(t.textContent=r)},m(a,i){de(a,t,i)},p:ct,d(a){a&&C(t)}}}function G0(e){var i,s;let t,r=ur((s=(i=e[1])==null?void 0:i.data)==null?void 0:s.tags),a=[];for(let n=0;n<r.length;n+=1)a[n]=Yd(Qd(e,r,n));return{c(){t=M("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){t=P(n,"DIV",{class:!0});var o=G(t);for(let l=0;l<a.length;l+=1)a[l].l(o);o.forEach(C),this.h()},h(){N(t,"class","flex flex-wrap gap-1 mt-1")},m(n,o){de(n,t,o);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(t,null)},p(n,o){var l,p;if(o&2){r=ur((p=(l=n[1])==null?void 0:l.data)==null?void 0:p.tags);let c;for(c=0;c<r.length;c+=1){const f=Qd(n,r,c);a[c]?a[c].p(f,o):(a[c]=Yd(f),a[c].c(),a[c].m(t,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=r.length}},d(n){n&&C(t),ip(a,n)}}}function Yd(e){let t,r=e[7]+"",a;return{c(){t=M("span"),a=Te(r),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);a=Ie(s,r),s.forEach(C),this.h()},h(){N(t,"class","px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs")},m(i,s){de(i,t,s),A(t,a)},p(i,s){s&2&&r!==(r=i[7]+"")&&Be(a,r)},d(i){i&&C(t)}}}function F0(e){let t,r=e[1]&&Zd(e);return{c(){r&&r.c(),t=lr()},l(a){r&&r.l(a),t=lr()},m(a,i){r&&r.m(a,i),de(a,t,i)},p(a,i){a[1]?r?r.p(a,i):(r=Zd(a),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(a){a&&C(t),r&&r.d(a)}}}function j0(e){let t,r,a;function i(n){e[6](n)}let s={size:"sm",$$slots:{default:[F0]},$$scope:{ctx:e}};return e[0]!==void 0&&(s.show=e[0]),t=new op({props:s}),Lr.push(()=>jr(t,"show",i)),{c(){Ce(t.$$.fragment)},l(n){ze(t.$$.fragment,n)},m(n,o){Ae(t,n,o),a=!0},p(n,[o]){const l={};o&1030&&(l.$$scope={dirty:o,ctx:n}),!r&&o&1&&(r=!0,l.show=n[0],Wr(()=>r=!1)),t.$set(l)},i(n){a||(te(t.$$.fragment,n),a=!0)},o(n){ae(t.$$.fragment,n),a=!1},d(n){Oe(t,n)}}}function K0(e,t,r){let a;const i=qr("i18n");or(e,i,c=>r(2,a=c));let{show:s=!1}=t,{selectedFeedback:n=null}=t,{onClose:o=()=>{}}=t;const l=()=>{r(0,s=!1),o()};function p(c){s=c,r(0,s)}return e.$$set=c=>{"show"in c&&r(0,s=c.show),"selectedFeedback"in c&&r(1,n=c.selectedFeedback),"onClose"in c&&r(5,o=c.onClose)},[s,n,a,i,l,o,p]}class Q0 extends Gr{constructor(t){super(),Fr(this,t,K0,j0,Vr,{show:0,selectedFeedback:1,onClose:5})}}function Xd(e,t,r){const a=e.slice();return a[27]=t[r],a}function Jd(e){let t,r,a;return r=new Kr({props:{content:e[7].t("Export"),$$slots:{default:[Z0]},$$scope:{ctx:e}}}),{c(){t=M("div"),Ce(r.$$.fragment)},l(i){t=P(i,"DIV",{});var s=G(t);ze(r.$$.fragment,s),s.forEach(C)},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p(i,s){const n={};s&128&&(n.content=i[7].t("Export")),s&1073741824&&(n.$$scope={dirty:s,ctx:i}),r.$set(n)},i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function Z0(e){let t,r,a,i,s;return r=new wg({props:{className:"size-3"}}),{c(){t=M("button"),Ce(r.$$.fragment),this.h()},l(n){t=P(n,"BUTTON",{class:!0});var o=G(t);ze(r.$$.fragment,o),o.forEach(C),this.h()},h(){N(t,"class","p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1")},m(n,o){de(n,t,o),Ae(r,t,null),a=!0,i||(s=pt(t,"click",e[17]),i=!0)},p:ct,i(n){a||(te(r.$$.fragment,n),a=!0)},o(n){ae(r.$$.fragment,n),a=!1},d(n){n&&C(t),Oe(r),i=!1,s()}}}function Y0(e){let t,r,a,i,s,n=e[7].t("User")+"",o,l,p,c,f,u,m,_=e[7].t("Models")+"",b,w,v,y,k,S,E,T=e[7].t("Result")+"",I,D,R,W,ne,X,K,U=e[7].t("Updated At")+"",O,V,Y,J,oe,se,F="",ie,ee,L=[],B=new Map,H,$e,ve;const _e=[ey,J0],be=[];function Ue(xe,Re){return xe[2]==="user"?0:1}p=Ue(e),c=be[p]=_e[p](e);const ke=[iy,ay],we=[];function Ge(xe,Re){return xe[2]==="model_id"?0:1}v=Ge(e),y=we[v]=ke[v](e);const it=[ly,oy],Ve=[];function et(xe,Re){return xe[2]==="rating"?0:1}R=et(e),W=Ve[R]=it[R](e);const _t=[cy,py],tt=[];function Rt(xe,Re){return xe[2]==="updated_at"?0:1}Y=Rt(e),J=tt[Y]=_t[Y](e);let kt=ur(e[6]);const ft=xe=>xe[27].id;for(let xe=0;xe<kt.length;xe+=1){let Re=Xd(e,kt,xe),Xe=ft(Re);B.set(Xe,L[xe]=ep(Xe,Re))}return{c(){t=M("table"),r=M("thead"),a=M("tr"),i=M("th"),s=M("div"),o=Te(n),l=ce(),c.c(),f=ce(),u=M("th"),m=M("div"),b=Te(_),w=ce(),y.c(),k=ce(),S=M("th"),E=M("div"),I=Te(T),D=ce(),W.c(),ne=ce(),X=M("th"),K=M("div"),O=Te(U),V=ce(),J.c(),oe=ce(),se=M("th"),se.innerHTML=F,ie=ce(),ee=M("tbody");for(let xe=0;xe<L.length;xe+=1)L[xe].c();this.h()},l(xe){t=P(xe,"TABLE",{class:!0});var Re=G(t);r=P(Re,"THEAD",{class:!0});var Xe=G(r);a=P(Xe,"TR",{class:!0});var nt=G(a);i=P(nt,"TH",{scope:!0,class:!0});var vt=G(i);s=P(vt,"DIV",{class:!0});var ot=G(s);o=Ie(ot,n),l=fe(ot),c.l(ot),ot.forEach(C),vt.forEach(C),f=fe(nt),u=P(nt,"TH",{scope:!0,class:!0});var Et=G(u);m=P(Et,"DIV",{class:!0});var qe=G(m);b=Ie(qe,_),w=fe(qe),y.l(qe),qe.forEach(C),Et.forEach(C),k=fe(nt),S=P(nt,"TH",{scope:!0,class:!0});var Kt=G(S);E=P(Kt,"DIV",{class:!0});var me=G(E);I=Ie(me,T),D=fe(me),W.l(me),me.forEach(C),Kt.forEach(C),ne=fe(nt),X=P(nt,"TH",{scope:!0,class:!0});var Pe=G(X);K=P(Pe,"DIV",{class:!0});var Je=G(K);O=Ie(Je,U),V=fe(Je),J.l(Je),Je.forEach(C),Pe.forEach(C),oe=fe(nt),se=P(nt,"TH",{scope:!0,class:!0,"data-svelte-h":!0}),wr(se)!=="svelte-twvnjj"&&(se.innerHTML=F),nt.forEach(C),Xe.forEach(C),ie=fe(Re),ee=P(Re,"TBODY",{class:!0});var rt=G(ee);for(let Tt=0;Tt<L.length;Tt+=1)L[Tt].l(rt);rt.forEach(C),Re.forEach(C),this.h()},h(){N(s,"class","flex gap-1.5 items-center justify-end"),N(i,"scope","col"),N(i,"class","px-3 py-1.5 cursor-pointer select-none w-3"),N(m,"class","flex gap-1.5 items-center"),N(u,"scope","col"),N(u,"class","px-3 pr-1.5 cursor-pointer select-none"),N(E,"class","flex gap-1.5 items-center justify-end"),N(S,"scope","col"),N(S,"class","px-3 py-1.5 text-right cursor-pointer select-none w-fit"),N(K,"class","flex gap-1.5 items-center justify-end"),N(X,"scope","col"),N(X,"class","px-3 py-1.5 text-right cursor-pointer select-none w-0"),N(se,"scope","col"),N(se,"class","px-3 py-1.5 text-right cursor-pointer select-none w-0"),N(a,"class",""),N(r,"class","text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 -translate-y-0.5"),N(ee,"class",""),N(t,"class","w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full rounded-sm")},m(xe,Re){de(xe,t,Re),A(t,r),A(r,a),A(a,i),A(i,s),A(s,o),A(s,l),be[p].m(s,null),A(a,f),A(a,u),A(u,m),A(m,b),A(m,w),we[v].m(m,null),A(a,k),A(a,S),A(S,E),A(E,I),A(E,D),Ve[R].m(E,null),A(a,ne),A(a,X),A(X,K),A(K,O),A(K,V),tt[Y].m(K,null),A(a,oe),A(a,se),A(t,ie),A(t,ee);for(let Xe=0;Xe<L.length;Xe+=1)L[Xe]&&L[Xe].m(ee,null);H=!0,$e||(ve=[pt(i,"click",e[18]),pt(u,"click",e[19]),pt(S,"click",e[20]),pt(X,"click",e[21])],$e=!0)},p(xe,Re){(!H||Re&128)&&n!==(n=xe[7].t("User")+"")&&Be(o,n);let Xe=p;p=Ue(xe),p===Xe?be[p].p(xe,Re):(Ze(),ae(be[Xe],1,1,()=>{be[Xe]=null}),Ye(),c=be[p],c?c.p(xe,Re):(c=be[p]=_e[p](xe),c.c()),te(c,1),c.m(s,null)),(!H||Re&128)&&_!==(_=xe[7].t("Models")+"")&&Be(b,_);let nt=v;v=Ge(xe),v===nt?we[v].p(xe,Re):(Ze(),ae(we[nt],1,1,()=>{we[nt]=null}),Ye(),y=we[v],y?y.p(xe,Re):(y=we[v]=ke[v](xe),y.c()),te(y,1),y.m(m,null)),(!H||Re&128)&&T!==(T=xe[7].t("Result")+"")&&Be(I,T);let vt=R;R=et(xe),R===vt?Ve[R].p(xe,Re):(Ze(),ae(Ve[vt],1,1,()=>{Ve[vt]=null}),Ye(),W=Ve[R],W?W.p(xe,Re):(W=Ve[R]=it[R](xe),W.c()),te(W,1),W.m(E,null)),(!H||Re&128)&&U!==(U=xe[7].t("Updated At")+"")&&Be(O,U);let ot=Y;Y=Rt(xe),Y===ot?tt[Y].p(xe,Re):(Ze(),ae(tt[ot],1,1,()=>{tt[ot]=null}),Ye(),J=tt[Y],J?J.p(xe,Re):(J=tt[Y]=_t[Y](xe),J.c()),te(J,1),J.m(K,null)),Re&5312&&(kt=ur(xe[6]),Ze(),L=sp(L,Re,ft,1,xe,kt,B,ee,dg,ep,null,Xd),Ye())},i(xe){if(!H){te(c),te(y),te(W),te(J);for(let Re=0;Re<kt.length;Re+=1)te(L[Re]);H=!0}},o(xe){ae(c),ae(y),ae(W),ae(J);for(let Re=0;Re<L.length;Re+=1)ae(L[Re]);H=!1},d(xe){xe&&C(t),be[p].d(),we[v].d(),Ve[R].d(),tt[Y].d();for(let Re=0;Re<L.length;Re+=1)L[Re].d();$e=!1,Hr(ve)}}}function X0(e){let t,r=e[7].t("No feedbacks found")+"",a;return{c(){t=M("div"),a=Te(r),this.h()},l(i){t=P(i,"DIV",{class:!0});var s=G(t);a=Ie(s,r),s.forEach(C),this.h()},h(){N(t,"class","text-center text-xs text-gray-500 dark:text-gray-400 py-1")},m(i,s){de(i,t,s),A(t,a)},p(i,s){s&128&&r!==(r=i[7].t("No feedbacks found")+"")&&Be(a,r)},i:ct,o:ct,d(i){i&&C(t)}}}function J0(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function ey(e){let t,r,a,i;const s=[ry,ty],n=[];function o(l,p){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function ty(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function ry(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function ay(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function iy(e){let t,r,a,i;const s=[sy,ny],n=[];function o(l,p){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function ny(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function sy(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function oy(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function ly(e){let t,r,a,i;const s=[dy,uy],n=[];function o(l,p){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function uy(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function dy(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function py(e){let t,r,a;return r=new bt({props:{className:"size-2"}}),{c(){t=M("span"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"SPAN",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","invisible")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function cy(e){let t,r,a,i;const s=[hy,fy],n=[];function o(l,p){return l[3]==="asc"?0:1}return r=o(e),a=n[r]=s[r](e),{c(){t=M("span"),a.c(),this.h()},l(l){t=P(l,"SPAN",{class:!0});var p=G(t);a.l(p),p.forEach(C),this.h()},h(){N(t,"class","font-normal")},m(l,p){de(l,t,p),n[r].m(t,null),i=!0},p(l,p){let c=r;r=o(l),r!==c&&(Ze(),ae(n[c],1,1,()=>{n[c]=null}),Ye(),a=n[r],a||(a=n[r]=s[r](l),a.c()),te(a,1),a.m(t,null))},i(l){i||(te(a),i=!0)},o(l){ae(a),i=!1},d(l){l&&C(t),n[r].d()}}}function fy(e){let t,r;return t=new Jt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function hy(e){let t,r;return t=new bt({props:{className:"size-2"}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function my(e){let t,r,a,i;return{c(){t=M("div"),r=M("img"),this.h()},l(s){t=P(s,"DIV",{class:!0});var n=G(t);r=P(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(C),this.h()},h(){var s,n,o,l;qa(r.src,a=((n=(s=e[27])==null?void 0:s.user)==null?void 0:n.profile_image_url)??"/user.png")||N(r,"src",a),N(r,"alt",i=(l=(o=e[27])==null?void 0:o.user)==null?void 0:l.name),N(r,"class","size-5 rounded-full object-cover shrink-0"),N(t,"class","shrink-0")},m(s,n){de(s,t,n),A(t,r)},p(s,n){var o,l,p,c;n&64&&!qa(r.src,a=((l=(o=s[27])==null?void 0:o.user)==null?void 0:l.profile_image_url)??"/user.png")&&N(r,"src",a),n&64&&i!==(i=(c=(p=s[27])==null?void 0:p.user)==null?void 0:c.name)&&N(r,"alt",i)},d(s){s&&C(t)}}}function gy(e){var i;let t,r=((i=e[27].data)==null?void 0:i.model_id)+"",a;return{c(){t=M("div"),a=Te(r),this.h()},l(s){t=P(s,"DIV",{class:!0});var n=G(t);a=Ie(n,r),n.forEach(C),this.h()},h(){N(t,"class","text-sm font-medium text-gray-600 dark:text-gray-400 flex-1 py-1.5")},m(s,n){de(s,t,n),A(t,a)},p(s,n){var o;n&64&&r!==(r=((o=s[27].data)==null?void 0:o.model_id)+"")&&Be(a,r)},i:ct,o:ct,d(s){s&&C(t)}}}function _y(e){var o;let t,r=((o=e[27].data)==null?void 0:o.model_id)+"",a,i,s,n;return s=new Kr({props:{content:e[27].data.sibling_model_ids.join(", "),$$slots:{default:[$y]},$$scope:{ctx:e}}}),{c(){t=M("div"),a=Te(r),i=ce(),Ce(s.$$.fragment),this.h()},l(l){t=P(l,"DIV",{class:!0});var p=G(t);a=Ie(p,r),p.forEach(C),i=fe(l),ze(s.$$.fragment,l),this.h()},h(){N(t,"class","font-semibold text-gray-600 dark:text-gray-400 flex-1")},m(l,p){de(l,t,p),A(t,a),de(l,i,p),Ae(s,l,p),n=!0},p(l,p){var f;(!n||p&64)&&r!==(r=((f=l[27].data)==null?void 0:f.model_id)+"")&&Be(a,r);const c={};p&64&&(c.content=l[27].data.sibling_model_ids.join(", ")),p&1073742016&&(c.$$scope={dirty:p,ctx:l}),s.$set(c)},i(l){n||(te(s.$$.fragment,l),n=!0)},o(l){ae(s.$$.fragment,l),n=!1},d(l){l&&(C(t),C(i)),Oe(s,l)}}}function yy(e){let t=e[27].data.sibling_model_ids.join(", ")+"",r;return{c(){r=Te(t)},l(a){r=Ie(a,t)},m(a,i){de(a,r,i)},p(a,i){i&64&&t!==(t=a[27].data.sibling_model_ids.join(", ")+"")&&Be(r,t)},d(a){a&&C(r)}}}function by(e){let t=e[27].data.sibling_model_ids.slice(0,2).join(", ")+"",r,a,i=e[7].t("and {{COUNT}} more",{COUNT:e[27].data.sibling_model_ids.length-2})+"",s;return{c(){r=Te(t),a=Te(", "),s=Te(i)},l(n){r=Ie(n,t),a=Ie(n,", "),s=Ie(n,i)},m(n,o){de(n,r,o),de(n,a,o),de(n,s,o)},p(n,o){o&64&&t!==(t=n[27].data.sibling_model_ids.slice(0,2).join(", ")+"")&&Be(r,t),o&192&&i!==(i=n[7].t("and {{COUNT}} more",{COUNT:n[27].data.sibling_model_ids.length-2})+"")&&Be(s,i)},d(n){n&&(C(r),C(a),C(s))}}}function $y(e){let t;function r(s,n){return s[27].data.sibling_model_ids.length>2?by:yy}let a=r(e),i=a(e);return{c(){t=M("div"),i.c(),this.h()},l(s){t=P(s,"DIV",{class:!0});var n=G(t);i.l(n),n.forEach(C),this.h()},h(){N(t,"class","text-[0.65rem] text-gray-600 dark:text-gray-400 line-clamp-1")},m(s,n){de(s,t,n),i.m(t,null)},p(s,n){a===(a=r(s))&&i?i.p(s,n):(i.d(1),i=a(s),i&&(i.c(),i.m(t,null)))},d(s){s&&C(t),i.d()}}}function vy(e){let t,r;return t=new Tn({props:{type:"error",content:e[7].t("Lost")}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},p(a,i){const s={};i&128&&(s.content=a[7].t("Lost")),t.$set(s)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function wy(e){let t,r;return t=new Tn({props:{type:"muted",content:e[7].t("Draw")}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},p(a,i){const s={};i&128&&(s.content=a[7].t("Draw")),t.$set(s)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function xy(e){let t,r;return t=new Tn({props:{type:"info",content:e[7].t("Won")}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},p(a,i){const s={};i&128&&(s.content=a[7].t("Won")),t.$set(s)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function ky(e){let t,r,a;return r=new zg({}),{c(){t=M("button"),Ce(r.$$.fragment),this.h()},l(i){t=P(i,"BUTTON",{class:!0});var s=G(t);ze(r.$$.fragment,s),s.forEach(C),this.h()},h(){N(t,"class","self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl")},m(i,s){de(i,t,s),Ae(r,t,null),a=!0},p:ct,i(i){a||(te(r.$$.fragment,i),a=!0)},o(i){ae(r.$$.fragment,i),a=!1},d(i){i&&C(t),Oe(r)}}}function ep(e,t){var ee,L;let r,a,i,s,n,o,l,p,c,f,u,m,_,b,w,v,y,k,S,E,T=cn(t[27].updated_at*1e3).fromNow()+"",I,D,R,W,ne,X,K,U;s=new Kr({props:{content:(L=(ee=t[27])==null?void 0:ee.user)==null?void 0:L.name,$$slots:{default:[my]},$$scope:{ctx:t}}});const O=[_y,gy],V=[];function Y(B,H){var $e;return($e=B[27].data)!=null&&$e.sibling_model_ids?0:1}c=Y(t),f=V[c]=O[c](t);const J=[xy,wy,vy],oe=[];function se(B,H){return H&64&&(b=null),H&64&&(w=null),H&64&&(v=null),b==null&&(b=B[27].data.rating.toString()==="1"),b?0:(w==null&&(w=B[27].data.rating.toString()==="0"),w?1:(v==null&&(v=B[27].data.rating.toString()==="-1"),v?2:-1))}~(y=se(t,-1))&&(k=oe[y]=J[y](t));function F(...B){return t[22](t[27],...B)}W=new q0({props:{$$slots:{default:[ky]},$$scope:{ctx:t}}}),W.$on("delete",F);function ie(){return t[23](t[27])}return{key:e,first:null,c(){r=M("tr"),a=M("td"),i=M("div"),Ce(s.$$.fragment),n=ce(),o=M("td"),l=M("div"),p=M("div"),f.c(),u=ce(),m=M("td"),_=M("div"),k&&k.c(),S=ce(),E=M("td"),I=Te(T),D=ce(),R=M("td"),Ce(W.$$.fragment),ne=ce(),this.h()},l(B){r=P(B,"TR",{class:!0});var H=G(r);a=P(H,"TD",{class:!0});var $e=G(a);i=P($e,"DIV",{class:!0});var ve=G(i);ze(s.$$.fragment,ve),ve.forEach(C),$e.forEach(C),n=fe(H),o=P(H,"TD",{class:!0});var _e=G(o);l=P(_e,"DIV",{class:!0});var be=G(l);p=P(be,"DIV",{class:!0});var Ue=G(p);f.l(Ue),Ue.forEach(C),be.forEach(C),_e.forEach(C),u=fe(H),m=P(H,"TD",{class:!0});var ke=G(m);_=P(ke,"DIV",{class:!0});var we=G(_);k&&k.l(we),we.forEach(C),ke.forEach(C),S=fe(H),E=P(H,"TD",{class:!0});var Ge=G(E);I=Ie(Ge,T),Ge.forEach(C),D=fe(H),R=P(H,"TD",{class:!0});var it=G(R);ze(W.$$.fragment,it),it.forEach(C),ne=fe(H),H.forEach(C),this.h()},h(){N(i,"class","flex justify-center"),N(a,"class","py-0.5 text-right font-semibold"),N(p,"class","flex flex-col h-full"),N(l,"class","flex flex-col items-start gap-0.5 h-full"),N(o,"class","py-1 pl-3 flex flex-col"),N(_,"class","flex justify-end"),N(m,"class","px-3 py-1 text-right font-medium text-gray-900 dark:text-white w-max"),N(E,"class","px-3 py-1 text-right font-medium"),N(R,"class","px-3 py-1 text-right font-semibold"),N(r,"class","bg-white dark:bg-gray-900 dark:border-gray-850 text-xs cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"),this.first=r},m(B,H){de(B,r,H),A(r,a),A(a,i),Ae(s,i,null),A(r,n),A(r,o),A(o,l),A(l,p),V[c].m(p,null),A(r,u),A(r,m),A(m,_),~y&&oe[y].m(_,null),A(r,S),A(r,E),A(E,I),A(r,D),A(r,R),Ae(W,R,null),A(r,ne),X=!0,K||(U=pt(r,"click",ie),K=!0)},p(B,H){var Ue,ke;t=B;const $e={};H&64&&($e.content=(ke=(Ue=t[27])==null?void 0:Ue.user)==null?void 0:ke.name),H&1073741888&&($e.$$scope={dirty:H,ctx:t}),s.$set($e);let ve=c;c=Y(t),c===ve?V[c].p(t,H):(Ze(),ae(V[ve],1,1,()=>{V[ve]=null}),Ye(),f=V[c],f?f.p(t,H):(f=V[c]=O[c](t),f.c()),te(f,1),f.m(p,null));let _e=y;y=se(t,H),y===_e?~y&&oe[y].p(t,H):(k&&(Ze(),ae(oe[_e],1,1,()=>{oe[_e]=null}),Ye()),~y?(k=oe[y],k?k.p(t,H):(k=oe[y]=J[y](t),k.c()),te(k,1),k.m(_,null)):k=null),(!X||H&64)&&T!==(T=cn(t[27].updated_at*1e3).fromNow()+"")&&Be(I,T);const be={};H&1073741824&&(be.$$scope={dirty:H,ctx:t}),W.$set(be)},i(B){X||(te(s.$$.fragment,B),te(f),te(k),te(W.$$.fragment,B),X=!0)},o(B){ae(s.$$.fragment,B),ae(f),ae(k),ae(W.$$.fragment,B),X=!1},d(B){B&&C(r),Oe(s),V[c].d(),~y&&oe[y].d(),Oe(W),K=!1,U()}}}function tp(e){let t,r,a=e[7].t("Help us create the best community leaderboard by sharing your feedback history!")+"",i,s,n,o,l;return o=new Kr({props:{content:e[7].t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included."),$$slots:{default:[Sy]},$$scope:{ctx:e}}}),{c(){t=M("div"),r=M("div"),i=Te(a),s=ce(),n=M("div"),Ce(o.$$.fragment),this.h()},l(p){t=P(p,"DIV",{class:!0});var c=G(t);r=P(c,"DIV",{class:!0});var f=G(r);i=Ie(f,a),f.forEach(C),s=fe(c),n=P(c,"DIV",{class:!0});var u=G(n);ze(o.$$.fragment,u),u.forEach(C),c.forEach(C),this.h()},h(){N(r,"class","line-clamp-1 text-gray-500 text-xs"),N(n,"class","flex space-x-1 ml-auto"),N(t,"class","flex flex-col justify-end w-full text-right gap-1")},m(p,c){de(p,t,c),A(t,r),A(r,i),A(t,s),A(t,n),Ae(o,n,null),l=!0},p(p,c){(!l||c&128)&&a!==(a=p[7].t("Help us create the best community leaderboard by sharing your feedback history!")+"")&&Be(i,a);const f={};c&128&&(f.content=p[7].t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included.")),c&1073741952&&(f.$$scope={dirty:c,ctx:p}),o.$set(f)},i(p){l||(te(o.$$.fragment,p),l=!0)},o(p){ae(o.$$.fragment,p),l=!1},d(p){p&&C(t),Oe(o)}}}function Sy(e){let t,r,a=e[7].t("Share to Open WebUI Community")+"",i,s,n,o,l,p,c;return o=new xg({props:{className:"size-3",strokeWidth:"3"}}),{c(){t=M("button"),r=M("div"),i=Te(a),s=ce(),n=M("div"),Ce(o.$$.fragment),this.h()},l(f){t=P(f,"BUTTON",{class:!0});var u=G(t);r=P(u,"DIV",{class:!0});var m=G(r);i=Ie(m,a),m.forEach(C),s=fe(u),n=P(u,"DIV",{class:!0});var _=G(n);ze(o.$$.fragment,_),_.forEach(C),u.forEach(C),this.h()},h(){N(r,"class","self-center mr-2 font-medium line-clamp-1"),N(n,"class","self-center"),N(t,"class","flex text-xs items-center px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition")},m(f,u){de(f,t,u),A(t,r),A(r,i),A(t,s),A(t,n),Ae(o,n,null),l=!0,p||(c=pt(t,"click",e[24]),p=!0)},p(f,u){(!l||u&128)&&a!==(a=f[7].t("Share to Open WebUI Community")+"")&&Be(i,a)},i(f){l||(te(o.$$.fragment,f),l=!0)},o(f){ae(o.$$.fragment,f),l=!1},d(f){f&&C(t),Oe(o),p=!1,c()}}}function rp(e){let t,r,a;function i(n){e[25](n)}let s={count:e[0].length,perPage:10};return e[1]!==void 0&&(s.page=e[1]),t=new kg({props:s}),Lr.push(()=>jr(t,"page",i)),{c(){Ce(t.$$.fragment)},l(n){ze(t.$$.fragment,n)},m(n,o){Ae(t,n,o),a=!0},p(n,o){const l={};o&1&&(l.count=n[0].length),!r&&o&2&&(r=!0,l.page=n[1],Wr(()=>r=!1)),t.$set(l)},i(n){a||(te(t.$$.fragment,n),a=!0)},o(n){ae(t.$$.fragment,n),a=!1},d(n){Oe(t,n)}}}function Ey(e){let t,r,a,i,s,n=e[7].t("Feedback History")+"",o,l,p,c,f,u=e[0].length+"",m,_,b,w,v,y,k,S,E,T;function I(O){e[16](O)}let D={selectedFeedback:e[5],onClose:e[11]};e[4]!==void 0&&(D.show=e[4]),t=new Q0({props:D}),Lr.push(()=>jr(t,"show",I));let R=e[0].length>0&&Jd(e);const W=[X0,Y0],ne=[];function X(O,V){return(O[0]??[]).length===0?0:1}v=X(e),y=ne[v]=W[v](e);let K=e[0].length>0&&tp(e),U=e[0].length>10&&rp(e);return{c(){Ce(t.$$.fragment),a=ce(),i=M("div"),s=M("div"),o=Te(n),l=ce(),p=M("div"),c=ce(),f=M("span"),m=Te(u),_=ce(),R&&R.c(),b=ce(),w=M("div"),y.c(),k=ce(),K&&K.c(),S=ce(),U&&U.c(),E=lr(),this.h()},l(O){ze(t.$$.fragment,O),a=fe(O),i=P(O,"DIV",{class:!0});var V=G(i);s=P(V,"DIV",{class:!0});var Y=G(s);o=Ie(Y,n),l=fe(Y),p=P(Y,"DIV",{class:!0}),G(p).forEach(C),c=fe(Y),f=P(Y,"SPAN",{class:!0});var J=G(f);m=Ie(J,u),J.forEach(C),Y.forEach(C),_=fe(V),R&&R.l(V),V.forEach(C),b=fe(O),w=P(O,"DIV",{class:!0});var oe=G(w);y.l(oe),oe.forEach(C),k=fe(O),K&&K.l(O),S=fe(O),U&&U.l(O),E=lr(),this.h()},h(){N(p,"class","flex self-center w-[1px] h-6 mx-2.5 bg-gray-50 dark:bg-gray-850"),N(f,"class","text-lg font-medium text-gray-500 dark:text-gray-300"),N(s,"class","flex md:self-center text-lg font-medium px-0.5"),N(i,"class","mt-0.5 mb-2 gap-1 flex flex-row justify-between"),N(w,"class","scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm pt-0.5")},m(O,V){Ae(t,O,V),de(O,a,V),de(O,i,V),A(i,s),A(s,o),A(s,l),A(s,p),A(s,c),A(s,f),A(f,m),A(i,_),R&&R.m(i,null),de(O,b,V),de(O,w,V),ne[v].m(w,null),de(O,k,V),K&&K.m(O,V),de(O,S,V),U&&U.m(O,V),de(O,E,V),T=!0},p(O,[V]){const Y={};V&32&&(Y.selectedFeedback=O[5]),!r&&V&16&&(r=!0,Y.show=O[4],Wr(()=>r=!1)),t.$set(Y),(!T||V&128)&&n!==(n=O[7].t("Feedback History")+"")&&Be(o,n),(!T||V&1)&&u!==(u=O[0].length+"")&&Be(m,u),O[0].length>0?R?(R.p(O,V),V&1&&te(R,1)):(R=Jd(O),R.c(),te(R,1),R.m(i,null)):R&&(Ze(),ae(R,1,1,()=>{R=null}),Ye());let J=v;v=X(O),v===J?ne[v].p(O,V):(Ze(),ae(ne[J],1,1,()=>{ne[J]=null}),Ye(),y=ne[v],y?y.p(O,V):(y=ne[v]=W[v](O),y.c()),te(y,1),y.m(w,null)),O[0].length>0?K?(K.p(O,V),V&1&&te(K,1)):(K=tp(O),K.c(),te(K,1),K.m(S.parentNode,S)):K&&(Ze(),ae(K,1,1,()=>{K=null}),Ye()),O[0].length>10?U?(U.p(O,V),V&1&&te(U,1)):(U=rp(O),U.c(),te(U,1),U.m(E.parentNode,E)):U&&(Ze(),ae(U,1,1,()=>{U=null}),Ye())},i(O){T||(te(t.$$.fragment,O),te(R),te(y),te(K),te(U),T=!0)},o(O){ae(t.$$.fragment,O),ae(R),ae(y),ae(K),ae(U),T=!1},d(O){O&&(C(a),C(i),C(b),C(w),C(k),C(S),C(E)),Oe(t,O),R&&R.d(),ne[v].d(),K&&K.d(O),U&&U.d(O)}}}function Ty(e,t,r){let a,i,s;const{saveAs:n}=_g;cn.extend(yg);const o=qr("i18n");or(e,o,U=>r(7,s=U));let{feedbacks:l=[]}=t,p=1,c="updated_at",f="desc";function u(U){c===U?r(3,f=f==="asc"?"desc":"asc"):(r(2,c=U),U==="user"||U==="model_id"?r(3,f="asc"):r(3,f="desc")),r(1,p=1)}let m=!1,_=null;const b=U=>{r(4,m=!0),r(5,_=U)},w=()=>{r(4,m=!1),r(5,_=null)},v=async U=>{await bg(localStorage.token,U).catch(V=>(hi.error(V),null))&&r(0,l=l.filter(V=>V.id!==U))},y=async()=>{hi.success(s.t("Redirecting you to Open WebUI Community"));const U=l.map(J=>{const{snapshot:oe,user:se,...F}=J;return F}),O="https://openwebui.com",V=await window.open(`${O}/leaderboard`,"_blank"),Y=J=>{J.origin===O&&J.data==="loaded"&&(V.postMessage(JSON.stringify(U),"*"),window.removeEventListener("message",Y))};window.addEventListener("message",Y,!1)},k=async()=>{const U=await $g(localStorage.token).catch(O=>(hi.error(O),null));if(U){let O=new Blob([JSON.stringify(U)],{type:"application/json"});n(O,`feedback-history-export-${Date.now()}.json`)}};function S(U){m=U,r(4,m)}const E=()=>{k()},T=()=>u("user"),I=()=>u("model_id"),D=()=>u("rating"),R=()=>u("updated_at"),W=(U,O)=>{v(U.id)},ne=U=>b(U),X=async()=>{y()};function K(U){p=U,r(1,p)}return e.$$set=U=>{"feedbacks"in U&&r(0,l=U.feedbacks)},e.$$.update=()=>{e.$$.dirty&13&&r(15,i=[...l].sort((U,O)=>{var J,oe;let V,Y;switch(c){case"user":return V=((J=U.user)==null?void 0:J.name)||"",Y=((oe=O.user)==null?void 0:oe.name)||"",f==="asc"?V.localeCompare(Y):Y.localeCompare(V);case"model_id":return V=U.data.model_id||"",Y=O.data.model_id||"",f==="asc"?V.localeCompare(Y):Y.localeCompare(V);case"rating":return V=U.data.rating,Y=O.data.rating,f==="asc"?V-Y:Y-V;case"updated_at":return V=U.updated_at,Y=O.updated_at,f==="asc"?V-Y:Y-V;default:return 0}})),e.$$.dirty&32770&&r(6,a=i.slice((p-1)*10,p*10))},[l,p,c,f,m,_,a,s,o,u,b,w,v,y,k,i,S,E,T,I,D,R,W,ne,X,K]}class Iy extends Gr{constructor(t){super(),Fr(this,t,Ty,Ey,Vr,{feedbacks:0})}}function ap(e){let t,r,a,i,s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm6 5.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5Zm-2.75 1.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-2Zm-2 .75a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"></path></svg>',n,o,l=e[3].t("Leaderboard")+"",p,c,f,u,m,_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M5.25 2A2.25 2.25 0 0 0 3 4.25v9a.75.75 0 0 0 1.183.613l1.692-1.195 1.692 1.195a.75.75 0 0 0 .866 0l1.692-1.195 1.693 1.195A.75.75 0 0 0 13 13.25v-9A2.25 2.25 0 0 0 10.75 2h-5.5Zm3.03 3.28a.75.75 0 0 0-1.06-1.06L4.97 6.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h1.315c.76 0 1.375.616 1.375 1.375a.75.75 0 0 0 1.5 0A2.875 2.875 0 0 0 8.625 6.25H7.311l.97-.97Z" clip-rule="evenodd"></path></svg>',b,w,v=e[3].t("Feedbacks")+"",y,k,S,E,T,I,D,R,W;const ne=[zy,Cy],X=[];function K(U,O){return U[0]==="leaderboard"?0:U[0]==="feedbacks"?1:-1}return~(T=K(e))&&(I=X[T]=ne[T](e)),{c(){t=M("div"),r=M("div"),a=M("button"),i=M("div"),i.innerHTML=s,n=ce(),o=M("div"),p=Te(l),f=ce(),u=M("button"),m=M("div"),m.innerHTML=_,b=ce(),w=M("div"),y=Te(v),S=ce(),E=M("div"),I&&I.c(),this.h()},l(U){t=P(U,"DIV",{class:!0});var O=G(t);r=P(O,"DIV",{id:!0,class:!0});var V=G(r);a=P(V,"BUTTON",{id:!0,class:!0});var Y=G(a);i=P(Y,"DIV",{class:!0,"data-svelte-h":!0}),wr(i)!=="svelte-ujm47k"&&(i.innerHTML=s),n=fe(Y),o=P(Y,"DIV",{class:!0});var J=G(o);p=Ie(J,l),J.forEach(C),Y.forEach(C),f=fe(V),u=P(V,"BUTTON",{id:!0,class:!0});var oe=G(u);m=P(oe,"DIV",{class:!0,"data-svelte-h":!0}),wr(m)!=="svelte-1fzwrf2"&&(m.innerHTML=_),b=fe(oe),w=P(oe,"DIV",{class:!0});var se=G(w);y=Ie(se,v),se.forEach(C),oe.forEach(C),V.forEach(C),S=fe(O),E=P(O,"DIV",{class:!0});var F=G(E);I&&I.l(F),F.forEach(C),O.forEach(C),this.h()},h(){N(i,"class","self-center mr-2"),N(o,"class","self-center"),N(a,"id","leaderboard"),N(a,"class",c="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(e[0]==="leaderboard"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")),N(m,"class","self-center mr-2"),N(w,"class","self-center"),N(u,"id","feedbacks"),N(u,"class",k="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(e[0]==="feedbacks"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")),N(r,"id","users-tabs-container"),N(r,"class","tabs flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"),N(E,"class","flex-1 mt-1 lg:mt-0 overflow-y-scroll"),N(t,"class","flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4")},m(U,O){de(U,t,O),A(t,r),A(r,a),A(a,i),A(a,n),A(a,o),A(o,p),A(r,f),A(r,u),A(u,m),A(u,b),A(u,w),A(w,y),A(t,S),A(t,E),~T&&X[T].m(E,null),D=!0,R||(W=[pt(a,"click",e[6]),pt(u,"click",e[7])],R=!0)},p(U,O){(!D||O&8)&&l!==(l=U[3].t("Leaderboard")+"")&&Be(p,l),(!D||O&1&&c!==(c="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(U[0]==="leaderboard"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")))&&N(a,"class",c),(!D||O&8)&&v!==(v=U[3].t("Feedbacks")+"")&&Be(y,v),(!D||O&1&&k!==(k="px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition "+(U[0]==="feedbacks"?"":" text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white")))&&N(u,"class",k);let V=T;T=K(U),T===V?~T&&X[T].p(U,O):(I&&(Ze(),ae(X[V],1,1,()=>{X[V]=null}),Ye()),~T?(I=X[T],I?I.p(U,O):(I=X[T]=ne[T](U),I.c()),te(I,1),I.m(E,null)):I=null)},i(U){D||(te(I),D=!0)},o(U){ae(I),D=!1},d(U){U&&C(t),~T&&X[T].d(),R=!1,Hr(W)}}}function Cy(e){let t,r;return t=new Iy({props:{feedbacks:e[2]}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},p(a,i){const s={};i&4&&(s.feedbacks=a[2]),t.$set(s)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function zy(e){let t,r;return t=new R0({props:{feedbacks:e[2]}}),{c(){Ce(t.$$.fragment)},l(a){ze(t.$$.fragment,a)},m(a,i){Ae(t,a,i),r=!0},p(a,i){const s={};i&4&&(s.feedbacks=a[2]),t.$set(s)},i(a){r||(te(t.$$.fragment,a),r=!0)},o(a){ae(t.$$.fragment,a),r=!1},d(a){Oe(t,a)}}}function Ay(e){let t,r,a=e[1]&&ap(e);return{c(){a&&a.c(),t=lr()},l(i){a&&a.l(i),t=lr()},m(i,s){a&&a.m(i,s),de(i,t,s),r=!0},p(i,[s]){i[1]?a?(a.p(i,s),s&2&&te(a,1)):(a=ap(i),a.c(),te(a,1),a.m(t.parentNode,t)):a&&(Ze(),ae(a,1,1,()=>{a=null}),Ye())},i(i){r||(te(a),r=!0)},o(i){ae(a),r=!1},d(i){i&&C(t),a&&a.d(i)}}}function Oy(e,t,r){let a,i;or(e,og,u=>r(5,a=u));const s=qr("i18n");or(e,s,u=>r(3,i=u));let n;const o=u=>{const m=document.getElementById(u);m&&m.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})};let l=!1,p=[];np(async()=>{r(2,p=await vg(localStorage.token)),r(1,l=!0);const u=document.getElementById("users-tabs-container");u&&u.addEventListener("wheel",function(m){m.deltaY!==0&&(u.scrollLeft+=m.deltaY)}),o(n)});const c=()=>{uo("/admin/evaluations/leaderboard")},f=()=>{uo("/admin/evaluations/feedbacks")};return e.$$.update=()=>{if(e.$$.dirty&32){const u=a.url.pathname.split("/"),m=u[u.length-1];r(0,n=["leaderboard","feedbacks"].includes(m)?m:"leaderboard")}e.$$.dirty&1&&n&&o(n)},[n,l,p,i,s,a,c,f]}class lb extends Gr{constructor(t){super(),Fr(this,t,Oy,Ay,Vr,{})}}export{lb as E};
//# sourceMappingURL=B73DVJIM.js.map
