'use strict';function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}}return step('next')})}}module.exports.init=function(){const crypto=window.crypto.subtle;const encoder=new TextEncoder('utf-8');const HASH='SHA-512';const num2hex=function num2hex(num){return('00'+num.toString(16)).slice(-2)};const bin2hex=function bin2hex(payload){const array=new Uint8Array(payload);return[...array].map(num2hex).join('')};const str2arr=function str2arr(str){return encoder.encode(str)};const importKey=(()=>{var _ref=_asyncToGenerator(function*(secret,target){const secretParams=str2arr(secret);const keyOptions={name:'HMAC',hash:{name:HASH}};const key=yield crypto.importKey('raw',secretParams,keyOptions,false,[target]);return key});return function importKey(_x,_x2){return _ref.apply(this,arguments)}})();const hmac=(()=>{var _ref2=_asyncToGenerator(function*(secret,message){const payload=str2arr(message);const key=yield importKey(secret,'sign');const signature=yield crypto.sign('HMAC',key,payload);return bin2hex(signature)});return function hmac(_x3,_x4){return _ref2.apply(this,arguments)}})();return{hmac}};