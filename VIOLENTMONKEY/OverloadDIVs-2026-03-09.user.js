// ==UserScript==
// @name         OverloadDIVs
// @namespace    https://violentmonkey.github.io/
// @version      2026-03-09
// @description  They force us for money, We fight these unconsented coockies locks for free (pro <<§ 39 lines 05/2020>>, revoqued by <<June 19th/20>>)
// @author       GrantHalf
// @match        https://*/*
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCiAgPHJlY3QgeD0iNiIgeT0iOCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjM4IiByeD0iNiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjIiLz4KCiAgPHJlY3QgeD0iNiIgeT0iOCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjEwIiByeD0iNiIgZmlsbD0iIzUwMTFGQSIvPgoKICA8cmVjdCB4PSI0OCIgeT0iMTAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIyIiBmaWxsPSIjZmY1NTU1IiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPgoKICA8bGluZSB4MT0iOCIgeTE9IjYiIHgyPSI1NiIgeTI9IjQ4IiBzdHJva2U9IiNmZjAwMDAiIHN0cm9rZS13aWR0aD0iOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGxpbmUgeDE9IjU2IiB5MT0iNiIgeDI9IjgiIHkyPSI0OCIgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2Utd2lkdGg9IjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgoKPC9zdmc+

// @grant        none
// ==/UserScript==

// CoPilot can update these scripts easily, guys!

// CAPITAL => concerning iframe subdomain "consent"
(function(){function kill_capital(){document.querySelectorAll('iframe[src*="consent.capital.fr"], div[id^="img_"]').forEach(e=>e.remove());}kill_capital();new MutationObserver(()=>kill_capital()).observe(document.documentElement,{childList:true,subtree:true});})();

// VOICI => concerning popin
(function(){function kill_voici(){document.querySelectorAll('iframe[src*="consent.voici.fr"], div[id^="img_"]').forEach(e=>e.remove());}kill_voici();new MutationObserver(()=>kill_voici()).observe(document.documentElement,{childList:true,subtree:true});})();

// NUMERAMA
(function(){function kill_numerama(){document.querySelectorAll('#react-cookies-popin-root,dialog[aria-labelledby="cookies-popin-*"]').forEach(e=>e.remove());}kill_numerama();new MutationObserver(()=>kill_numerama()).observe(document.documentElement,{childList:true,subtree:true});})();

// RTL.BE => concerning didomi
(function(){function kill_rtlbe(){document.querySelectorAll('#didomi-host,dialog[aria-labelledby="didomi*"]').forEach(e=>e.remove());}kill_rtlbe();new MutationObserver(()=>kill_rtlbe()).observe(document.documentElement,{childList:true,subtree:true});})();

// AUTONEWS
(function(){var k=setInterval(function(){document.querySelectorAll('iframe.swg-dialog,iframe[title*="abonner"],iframe[title*="Google"]').forEach(e=>e.remove());document.querySelectorAll('swg-popup-background').forEach(e=>e.remove());document.documentElement.classList.remove('swg-disable-scroll');},400);setTimeout(()=>clearInterval(k),60000);})();

// L EQUIPE
(function(){var k=setInterval(function(){document.documentElement.classList.remove('no-scroll');var i=document.getElementById('island-8');if(i&&i.parentNode)i.parentNode.removeChild(i);var b=document.getElementById('OfferBanner');if(b&&b.parentNode)b.parentNode.removeChild(b);},400);setTimeout(function(){clearInterval(k);},30000);})();
(function(){var k=setInterval(function(){document.documentElement.classList.remove('no-scroll');var i=document.getElementById('island-7');if(i&&i.parentNode)i.parentNode.removeChild(i);var b=document.getElementById('OfferBanner');if(b&&b.parentNode)b.parentNode.removeChild(b);},400);setTimeout(function(){clearInterval(k);},30000);})();
(function(){function kill(){document.querySelectorAll('[class*="player"]').forEach(e=>e.remove());}kill();new MutationObserver(kill).observe(document.documentElement,{childList:true,subtree:true});})();

// LAROUSSE => all technic with onetrust
(function(){document.querySelectorAll('#poool-widget,div[id^="poool"],div[class*="p3-"]').forEach(e=>e.remove());})();
(function(){function kill(){document.querySelectorAll('#onetrust-banner-sdk,#onetrust-banner-sdk,[id*="onetrust"],[class*="onetrust"],[class^="ot-"],[class*=" ot-"]').forEach(e=>e.remove());}kill();new MutationObserver(kill).observe(document.documentElement,{childList:true,subtree:true});})();
(function(){function unblur(){document.querySelectorAll('div.wrapper').forEach(e=>{e.style.filter='none';e.style.webkitFilter='none';e.style.mozFilter='none';e.style.oFilter='none';e.style.msFilter='none';});}unblur();new MutationObserver(unblur).observe(document.documentElement,{attributes:true,childList:true,subtree:true});})();

// LE PROGRES => all technic with didomi popup
(function(){var iframes=[...document.querySelectorAll('iframe')];iframes.forEach(function(f){var s=f.getAttribute('src')||'';if(s.includes('ultimedia.com')||f.classList.contains('digitekaContent')){f.remove();}});})();
(function(){document.body.classList.remove('didomi-popup-open');})();

// LE CRABE => all technic with abconsent div
(function(){document.querySelectorAll('div[id^="__abconsent-cmp"]').forEach(e=>e.remove());})();
(function(){document.documentElement.removeAttribute('class');})();
(function(){var r=()=>document.querySelectorAll('div[id^="__abconsent-cmp"]').forEach(e=>e.remove());r();new MutationObserver(r).observe(document.body,{childList:true,subtree:true});})();
(function(){var r=()=>document.documentElement.removeAttribute('class');r();new MutationObserver(r).observe(document.documentElement,{childList:true,subtree:true});})();

// LA DEPECHE
(function(){var r=()=>document.querySelectorAll('div[id^="r-cookies-wall"]').forEach(e=>e.remove());r();new MutationObserver(r).observe(document.body,{childList:true,subtree:true});})();

// NOTE: Browsers from smartphones could have a different behavior. Scripts try to be as generic as possible.

// Other Websites "Cookies Wall" removed a div (only div, not cookies!!!) without any additional line for them.
// To understand  which sites could use these filters, we need to investigate about what technical concept have been pushed.

// ------------------------------------------------------------------------------------------------

// /!\ [ILLEGAL SITES ?] /!\
// Are these websites collect cookies without collect the consent user? By Default, it seems they force the consent. Project "Check Cookies" raised in order to have elements for answering this question.
// CAPITAL, VOICI, FRANDROID, NUMERAMA, CLUBIC, LEMON, CHALLENGES, PARIS MATCH, DOCTISSIMO
//
// How to know? Watch cookie from the site. I don't have any option to refuse.
// [BOLLORE] CAPITAL: you find a property cookie "*id_cached_consent_data_exp" and "*id_cached_consent_data"
// [BOLLORE] VOICI: you find a property cookie "*id_cached_consent_data_exp" and "*id_cached_consent_data"
// [HUMANOID] FRANDROID: you find a property cookie "euconsent-v2"
// [HUMANOID] NUMERAMA: you find a property cookie "euconsent-v2"
// [HUMANOID] CLUBIC: you find a property cookie "euconsent-v2"
// [HUMANOID] LEMON.fr: you find a property cookie "euconsent-v2"
// [LVMH] CHALLENGES.fr: you find a property cookie "euconsent-v2"
// [LVMH] PARIS MATCH: you find a property cookie "euconsent-v2"
// [REWORLD MEDIA] DOCTISSIMO: : you find a property cookie "euconsent-v2" (+ cookie named "didomi_token") => consent set default by true /!\ (see decode didomi below)

// ------------------------------------------------------------------------------------------------

// BOLORRE GROUP OWNS THESE MAGASINES (same behavior expected)
// Ça m'intéresse, Capital, CuisineActuelle, Éditions Prisma, Femme actuelle, Geo, National Geographic, Oh! My mag, Passeport santé, Télé2Semaines, Télé Loisirs, Télé Z, Turbo, TV Grandes Chaines, Voici
// SOURCE: https://desarmerbollore.net

// ------------------------------------------------------------------------------------------------

// Technical cookie "euconsent-v2" is from a company called "IAB Europe".
// It's Cookie Didomi: https://support.didomi.io/didomi-cookies-storage-1
// To Decode Didomi Token: https://iabtcf.com/#/decode
// Belgium has initiated legal proceedings against this company for violation of GDPR. In 2023. Company is still active. Cookie too.
// SOURCE: https://www.autoriteprotectiondonnees.be/citoyen/iab-europe-est-tenue-responsable-d-un-mecanisme-qui-viole-le-rgpd

// ------------------------------------------------------------------------------------------------

// REWORLD MEDIA OWNS THESE MAGASINES (same behavior expected)
// 2022: Aufeminin, Marmiton.org, Doctissimo, Gamekult
// Technical cookie "euconsent-v2" is from a company called "IAB Europe".
// It's Cookie Didomi: https://support.didomi.io/didomi-cookies-storage-1
// Belgium has initiated legal proceedings against this company for violation of GDPR. In 2023. Company is still active. Cookie too.
// SOURCE: https://www.autoriteprotectiondonnees.be/citoyen/iab-europe-est-tenue-responsable-d-un-mecanisme-qui-viole-le-rgpd

// ------------------------------------------------------------------------------------------------

// DC COMPANY OWNS THESE MAGASINES (same behavior expected)
// Konbini, Gorafi

// ------------------------------------------------------------------------------------------------

// SITES FULLY RESPECT
// These websites don't collect cookies without consent user.
// Use Extension Ghostery if needed.
//
// [LVMH] SCIENCESETAVENIR
// [INDEP] MEDIAPART

