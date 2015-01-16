// ==UserScript==
// @name        RemoveGameBar
// @namespace   RemoveGameBar
// @description Remove annoying Facebook Games Bar from top of Kingdoms of Camelot screen
// @include     *apps.facebook.com/kingdomsofcamelot/*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle("._470m { display: none;}"); // remove annoying facebook games toolbar
