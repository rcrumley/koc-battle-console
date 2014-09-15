// ==UserScript==
// @name			Temp KoC Fix
// @namespace		TempKoCFix
// @description		Temp Fix for KoC Styles
// @include			*.kingdomsofcamelot.com/*main_src.php*
// @grant			GM_addStyle
// @grant  		    GM_getResourceText
// @resource    	customCSS http://koc-power-bot.googlecode.com/svn/trunk/camelotmain-1604.css
// ==/UserScript==

var newCSS = GM_getResourceText ("customCSS");
GM_addStyle (newCSS);

