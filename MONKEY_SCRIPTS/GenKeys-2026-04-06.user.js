// ==UserScript==
// @name         GenKeys
// @namespace    https://github.com/granthalf
// @version      2026-04-04
// @description  Generate Dual PEM Keys
// @author       GrantHalf
// @match        https://*/*
// @match        http://127.0.0.1:8000/*
// @match        http://localhost:8000/*
// @exclude-match https://youtube.com/*
// @exclude-match https://discord.com/*
// @exclude-match https://nssm.cc/*
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImtleVllbGxvdyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZFRTc2NiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0UwQjgwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEyIiBmaWxsPSJ1cmwoI2tleVllbGxvdykiIHN0cm9rZT0iI0MwOTAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNiIgZmlsbD0iI0ZGRjhDQyIvPjxyZWN0IHg9IjI2IiB5PSIxNyIgd2lkdGg9IjI2IiBoZWlnaHQ9IjYiIHJ4PSIzIiByeT0iMyIgZmlsbD0idXJsKCNrZXlZZWxsb3cpIiBzdHJva2U9IiNDMDkwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik00OCAyMyB2OCBoLTQgdi00IGgtNCB2OCBoLTQgdi02IGgtNCB2LTZ6IiBmaWxsPSJ1cmwoI2tleVllbGxvdykiIHN0cm9rZT0iI0MwOTAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+
// @grant        none
// ==/UserScript==

(()=>{let b=document.createElement("div");b.style.cssText="position:fixed;right:20px;top:50%;transform:translateY(-50%);width:35px;height:35px;cursor:pointer;z-index:2147483647;background:rgba(0,0,0,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid #FFD700;color:#FFD700;font-size:22px;";b.textContent="🔑";b.onclick=async()=>{let p=prompt("Password:");if(!p)return;let e=new TextEncoder(),salt=crypto.getRandomValues(new Uint8Array(16)),km=await crypto.subtle.importKey("raw",e.encode(p),"PBKDF2",false,["deriveKey"]),ak=await crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:2e5,hash:"SHA-256"},km,{name:"AES-GCM",length:256},false,["encrypt"]),k=await crypto.subtle.generateKey({name:"RSA-OAEP",modulusLength:4096,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},true,["encrypt","decrypt"]),pr=await crypto.subtle.exportKey("pkcs8",k.privateKey),pu=await crypto.subtle.exportKey("spki",k.publicKey),iv=crypto.getRandomValues(new Uint8Array(12)),enc=await crypto.subtle.encrypt({name:"AES-GCM",iv},ak,pr),join=(a,b,c)=>{let r=new Uint8Array(a.length+b.length+c.length);r.set(a,0);r.set(b,a.length);r.set(c,a.length+b.length);return r},blob=join(salt,iv,new Uint8Array(enc)),pem=b=>btoa(String.fromCharCode(...new Uint8Array(b))).replace(/.{64}/g,"$&\n"),dl=(n,c)=>{let a=document.createElement("a");a.href="data:application/octet-stream;base64,"+btoa(c);a.download=n;a.click();};dl("public_key.pem","-----BEGIN PUBLIC KEY-----\n"+pem(pu)+"\n-----END PUBLIC KEY-----");dl("private_key.pem","-----BEGIN ENCRYPTED PRIVATE KEY-----\n"+pem(blob)+"\n-----END ENCRYPTED PRIVATE KEY-----");alert("Download complete.");};document.body.appendChild(b);})();

