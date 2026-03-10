// ==UserScript==
// @name         OverloadDIVs
// @namespace    http://tampermonkey.net/
// @version      2026-03-09
// @description  They force us for money, We fight these unconsented coockies locks for free (pro <<§ 39 lines 05/2020>>, revoqued by <<June 19th/20>>)
// @author       GrantHalf
// @match        https://*/*
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCiAgPHJlY3QgeD0iNiIgeT0iOCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjM4IiByeD0iNiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjIiLz4KCiAgPHJlY3QgeD0iNiIgeT0iOCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjEwIiByeD0iNiIgZmlsbD0iIzUwMTFGQSIvPgoKICA8cmVjdCB4PSI0OCIgeT0iMTAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIyIiBmaWxsPSIjZmY1NTU1IiBzdHJva2U9IiNhYTAwMDAiIHN0cm9rZS13aWR0aD0iMSIvPgoKICA8bGluZSB4MT0iOCIgeTE9IjYiIHgyPSI1NiIgeTI9IjQ4IiBzdHJva2U9IiNmZjAwMDAiIHN0cm9rZS13aWR0aD0iOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGxpbmUgeDE9IjU2IiB5MT0iNiIgeDI9IjgiIHkyPSI0OCIgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2Utd2lkdGg9IjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgoKPC9zdmc+

// @grant        none
// ==/UserScript==

// CoPilot can update these scripts easily, guys!

// CAPITAL
(function(){function kill_capital(){document.querySelectorAll('iframe[src*="consent.capital.fr"], div[id^="img_"]').forEach(e=>e.remove());}kill_capital();new MutationObserver(()=>kill_capital()).observe(document.documentElement,{childList:true,subtree:true});})();

// VOICI
(function(){function kill_voici(){document.querySelectorAll('iframe[src*="consent.voici.fr"], div[id^="img_"]').forEach(e=>e.remove());}kill_voici();new MutationObserver(()=>kill_voici()).observe(document.documentElement,{childList:true,subtree:true});})();

// NUMERAMA
(function(){function kill_numerama(){document.querySelectorAll('#react-cookies-popin-root,dialog[aria-labelledby="cookies-popin-*"]').forEach(e=>e.remove());}kill_numerama();new MutationObserver(()=>kill_numerama()).observe(document.documentElement,{childList:true,subtree:true});})();


// Other Websites "Cookies Wall" removed a div (only div, not cookies!!!) without any additional line for them:
// FRANDROID
// PARIS MATCH

// NOTE: Browsers from smartphones could have a different behavior. Scripts try to be as generic as possible.

// /!\ ILLEGAL SITES /!\
// These websites collect cookies without collect the consent user! By Default, they force the consent.
// CAPITAL, VOICI, NUMERAMA, PARIS MATCH
//
// How to know? Watch cookie from the site. I don't have any option to refuse.
// VOICI: you find a property cookie "*id_cached_consent_data_exp" and "*id_cached_consent_data"
// [HUMANOID] FRANDROID: you find a property cookie "euconsent-v2"
// [HUMANOID] NUMERAMA: you find a property cookie "euconsent-v2"
// [HUMANOID] CLUBIC: you find a property cookie "euconsent-v2"
// [HUMANOID] LEMON.fr: you find a property cookie "euconsent-v2"
// [LVMH] CHALLENGES.fr: you find a property cookie "euconsent-v2"
// [LVMH] PARIS MATCH: you find a property cookie "euconsent-v2"


// SITES FULLY RESPECT
// These websites don't collect cookies without consent user.
// Use Extension Ghostery if needed.
//
// [LVMH] SCIENCESETAVENIR

