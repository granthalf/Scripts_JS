// ==UserScript==
// @name         HIDE_GOOGLE_CNCT
// @namespace    https://github.com/granthalf
// @version      2026-03-10
// @description  Hide a Google Connection
// @author       GrantHalf
// @match        https://*/*
// @icon        data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgd2lkdGg9IjUxMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNDgyLjU2IDI2MS4zNmMwLTE2LjczLTEuNS0zMi44My00LjI5LTQ4LjI3SDI1NnY5MS4yOWgxMjcuMDFjLTUuNDcgMjkuNS0yMi4xIDU0LjQ5LTQ3LjA5IDcxLjIzdjU5LjIxaDc2LjI3YzQ0LjYzLTQxLjA5IDcwLjM3LTEwMS41OSA3MC4zNy0xNzMuNDZ6IiBmaWxsPSIjNDI4NWY0Ii8+PHBhdGggZD0iTTI1NiA0OTJjNjMuNzIgMCAxMTcuMTQtMjEuMTMgMTU2LjE5LTU3LjE4bC03Ni4yNy01OS4yMWMtMjEuMTMgMTQuMTYtNDguMTcgMjIuNTMtNzkuOTIgMjIuNTMtNjEuNDcgMC0xMTMuNDktNDEuNTEtMTMyLjA1LTk3LjNINDUuMXY2MS4xNWMzOC44MyA3Ny4xMyAxMTguNjQgMTMwLjAxIDIxMC45IDEzMC4wMXoiIGZpbGw9IiMzNGE4NTMiLz48cGF0aCBkPSJNMTIzLjk1IDMwMC44NGMtNC43Mi0xNC4xNi03LjQtMjkuMjktNy40LTQ0Ljg0czIuNjgtMzAuNjggNy40LTQ0Ljg0VjE1MC4wMUg0NS4xQzI5LjEyIDE4MS44NyAyMCAyMTcuOTIgMjAgMjU2YzAgMzguMDggOS4xMiA3NC4xMyAyNS4xIDEwNS45OWw3OC44NS02MS4xNXoiIGZpbGw9IiNmYmJjMDUiLz48cGF0aCBkPSJNMjU2IDExMy44NmMzNC42NSAwIDY1Ljc2IDExLjkxIDkwLjIyIDM1LjI5bDY3LjY5LTY3LjY5QzM3My4wMyA0My4zOSAzMTkuNjEgMjAgMjU2IDIwYy05Mi4yNSAwLTE3Mi4wNyA1Mi44OS0yMTAuOSAxMzAuMDFsNzguODUgNjEuMTVjMTguNTYtNTUuNzggNzAuNTktOTcuMyAxMzIuMDUtOTcuM3oiIGZpbGw9IiNlYTQzMzUiLz48cGF0aCBkPSJNMjAgMjBoNDcydjQ3MkgyMFYyMHoiLz48L2c+PC9zdmc+
// @grant        none
// ==/UserScript==

// Display a text to use extension to block a closed DOM before it come injected in the page visited
(function(){var ok=[...document.scripts].some(s=>s.src.includes("accounts.google.com/gsi/client"));if(ok){var d=document.createElement('div');d.textContent='Script Google One-Tap detected : << // google closed DOM popup  ||accounts.google.com/gsi/iframe* >> is need to add inside the Extension "uBlock Origin"';d.style='position:fixed;top:0;left:0;margin:10px;padding:15px;background:#555;color:#fff;font-size:16px;font-weight:bold;z-index:2147483647;border-radius:6px;box-shadow:0 0 10px #000;pointer-events:none;';document.body.appendChild(d);setTimeout(()=>d.remove(),3000);}else{console.log("Script GSI non détecté");}})();

// Try to overload the call to this function in order to disable it (CORS request failed)
(function(){console.log([...document.scripts].some(s=>s.src.includes("accounts.google.com/gsi/client"))?"GSI client détecté":"GSI client NON détecté");})();
