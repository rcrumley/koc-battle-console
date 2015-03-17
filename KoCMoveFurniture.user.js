// ==UserScript==
// @name        KoCMoveFurniture
// @namespace   kfn
// @include	     *.kingdomsofcamelot.com/*main_src.php*
// @description Move Throne Room Furniture about in Kingdoms of Camelot
// @license			http://creativecommons.org/licenses/by-nc-sa/3.0/
// ==/UserScript==

var trstyles = 'div#throneMainContainer div#tableContainer{width:80px;height:213px;top:400px;left:450px;}\
				div#throneMainContainer div#trophyContainer{width:71px;height:86px;top:41px;left:381px;}\
				div#throneMainContainer div#statueContainer{width:124px;height:296px;top:274px;left:150px;z-index:97;}\
				div#throneMainContainer div#advisorContainer{width:141px;height:240px;bottom:0pt;right:0pt;}\
				div#throneMainContainer div#heroContainer{width:85px;height:150px;top:190px;left:585px;z-index:97;}';

GM_addStyle (trstyles);
