// ==UserScript==
// @name        KoCMoveFurniture
// @namespace   kfn
// @include	     *.kingdomsofcamelot.com/*main_src.php*
// @description Move Throne Room Furniture about in Kingdoms of Camelot
// @resource       jqcss http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require        https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js
// @grant       unsafeWindow
// @grant		GM_addStyle
// ==/UserScript==

//	December 2013 Barbarossa69 (http://userscripts.org/users/272942)									¦

var trstyles = 'div#throneMainContainer div#tableContainer{width:80px;height:213px;top:400px;left:200px;}\
				div#throneMainContainer div#trophyContainer{width:71px;height:86px;top:41px;left:381px;z-index:97;}\
				div#throneMainContainer div#statueContainer{width:124px;height:296px;top:274px;left:300px;z-index:99;}\
				div#throneMainContainer div#heroContainer{width:85px;height:136px;top:173px;left:450px;z-index:99;}';

GM_addStyle (trstyles);

$("#advisorContainer").draggable();
$("#heroContainer").draggable();
$("#chairContainer").draggable();
$("#candelabrumContainer").draggable();
$("#tableContainer").draggable();
$("#windowContainer").draggable();
$("#bannerContainer").draggable();
$("#trophyContainer").draggable();
$("#statueContainer").draggable();

