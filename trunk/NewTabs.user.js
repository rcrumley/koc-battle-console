// ==UserScript==
// @name			Popup Tabs Example
// @namespace		PTE
// @description		How to create a popup tabset
// @include			*.kingdomsofcamelot.com/*main_src.php*
// @grant			unsafeWindow
// @version			0.1a
// ==/UserScript==

var JSON2 = JSON; 
var uW = unsafeWindow;
var mainPop;
var Tabs = {};

var WinManager = {
	wins : {},    // prefix : CPopup obj

	get : function (prefix){
		var t = WinManager;
		return t.wins[prefix];
	},
  
	add : function (prefix, pop){
		var t = WinManager;
		t.wins[prefix] = pop;
		if (uW.cpopupWins == null)
			uW.cpopupWins = {};
		uW.cpopupWins[prefix] = pop;
	},
  
	delete : function (prefix){
		var t = WinManager;
		delete t.wins[prefix];
		delete uW.cpopupWins[prefix];
	}    
}

// creates a 'popup' div
// prefix must be a unique (short) name for the popup window
function CPopup(prefix, x, y, width, height, enableDrag, onClose) {
	var pop = WinManager.get(prefix);
	if (pop) {
		pop.show(false);
		return pop;
	}
	this.BASE_ZINDEX = 111111;
	// protos ...
	this.show = show;
	this.toggleHide = toggleHide;
	this.getTopDiv = getTopDiv;
	this.getMainDiv = getMainDiv;
	this.getLayer = getLayer;
	this.setLayer = setLayer;
	this.setEnableDrag = setEnableDrag;
	this.getLocation = getLocation;
	this.setLocation = setLocation;
	this.focusMe = focusMe;
	this.unfocusMe = unfocusMe;
	this.centerMe = centerMe;
	this.destroy = destroy;
	// object vars ...
	this.div = document.createElement('div');
	this.prefix = prefix;
	this.onClose = onClose;
	var t = this;
	this.div.className = 'CPopup ' + prefix + '_CPopup';
	this.div.id = prefix + '_outer';
	this.div.style.background = "#fff";
	this.div.style.zIndex = this.BASE_ZINDEX // KOC modal is 100210 ?
	this.div.style.display = 'none';
	this.div.style.width = width + 'px';
	this.div.style.height = height + 'px';
	this.div.style.position = "absolute";
	this.div.style.top = y + 'px';
	this.div.style.left = x + 'px';
	topClass = 'CPopupTop ' + prefix + '_CPopupTop';
	var m = '<TABLE cellspacing=0 width=100% height=100%><TR id="' + prefix + '_bar" class="' + topClass + '"><TD style="-moz-border-radius-topleft: 20px; border-top-left-radius: 20px;" width=99%><SPAN id="'+ prefix +'_top"></span></td>\
      <TD id=' + prefix + '_X align=right valign=middle onmouseover="this.style.cursor=\'pointer\'" style="color:#fff; background:#333; font-weight:bold; font-size:14px; padding:0px 5px;  -moz-border-radius-topright: 20px; border-top-right-radius: 20px;">X</td></tr>\
      <TR><TD height=100% valign=top class="CPopMain ' + prefix + '_CPopMain" colspan=2 id="' + prefix + '_main"></td></tr></table>';
	document.body.appendChild(this.div);
	this.div.innerHTML = m;
	document.getElementById(prefix + '_X').addEventListener('click', e_XClose, false);
	this.dragger = new CWinDrag(document.getElementById(prefix + '_bar'), this.div, enableDrag);
	this.div.addEventListener('mousedown', e_divClicked, false);
	WinManager.add(prefix, this);

	function e_divClicked() {
		t.focusMe();
	}

	function e_XClose() {
		t.show(false);
		if (t.onClose != null)
			t.onClose();
	}

	function focusMe() {
		t.setLayer(5);
		for (k in uW.cpopupWins) {
			if (k != t.prefix)
				uW.cpopupWins[k].unfocusMe();
		}
	}

	function unfocusMe() {
		t.setLayer(-5);
	}

	function getLocation() {
		return {
			x: parseInt(this.div.style.left),
			y: parseInt(this.div.style.top)
		};
	}

	function setLocation(loc) {
		t.div.style.left = loc.x + 'px';
		t.div.style.top = loc.y + 'px';
	}

	function destroy() {
		document.body.removeChild(t.div);
		WinManager.delete(t.prefix);
	}

	function centerMe(parent) {
		if (parent == null) {
			var coords = getClientCoords(document.body);
		} else
			var coords = getClientCoords(parent);
		var x = ((coords.width - parseInt(t.div.style.width)) / 2) + coords.x;
		var y = ((coords.height - parseInt(t.div.style.height)) / 2) + coords.y;
		if (x < 0)
			x = 0;
		if (y < 0)
			y = 0;
		t.div.style.left = x + 'px';
		t.div.style.top = y + 'px';
	}

	function setEnableDrag(tf) {
		t.dragger.setEnable(tf);
	}

	function setLayer(zi) {
		t.div.style.zIndex = '' + (this.BASE_ZINDEX + zi);
	}

	function getLayer() {
		return parseInt(t.div.style.zIndex) - this.BASE_ZINDEX;
	}

	function getTopDiv() {
		return document.getElementById(this.prefix + '_top');
	}

	function getMainDiv() {
		return document.getElementById(this.prefix + '_main');
	}

	function show(tf) {
		if (tf) {
			t.div.style.display = 'block';
			t.focusMe();
		} else {
			t.div.style.display = 'none';
		}
		return tf;
	}

	function toggleHide(t) {
		if (t.div.style.display == 'block') {
			return t.show(false);
		} else {
			return t.show(true);
		}
	}
}

function CWinDrag (clickableElement, movingDiv, enabled) {
	var t=this;
	this.setEnable = setEnable;
	this.setBoundRect = setBoundRect;
	this.lastX = null;
	this.lastY = null;
	this.enabled = true;
	this.moving = false;
	this.theDiv = movingDiv;
	this.body = document.body;
	this.ce = clickableElement;
	this.moveHandler = new CeventMove(this).handler;
	this.outHandler = new CeventOut(this).handler;
	this.upHandler = new CeventUp(this).handler;
	this.downHandler = new CeventDown(this).handler;
	this.clickableRect = null;
	this.boundRect = null;
	this.bounds = null;
	this.enabled = false;
	if (enabled == null)
		enabled = true;
	this.setEnable (enabled);

	function setBoundRect (b){    // this rect (client coords) will not go outside of current body
		this.boundRect = boundRect;
		this.bounds = null;
	}

	function setEnable (enable){
		if (enable == t.enabled)
			return;
		if (enable){
			clickableElement.addEventListener('mousedown',  t.downHandler, false);
			t.body.addEventListener('mouseup', t.upHandler, false);
		} else {
			clickableElement.removeEventListener('mousedown', t.downHandler, false);
			t.body.removeEventListener('mouseup', t.upHandler, false);
		}
		t.enabled = enable;
	}

	function CeventDown (that){
		this.handler = handler;
		var t = that;
		
		function handler (me){
			if (t.bounds == null){
				t.clickableRect = getClientCoords(clickableElement);
				t.bodyRect = getClientCoords(document.body);
				if (t.boundRect == null)
					t.boundRect = t.clickableRect;
				t.bounds = {top:10-t.clickableRect.height, bot:t.bodyRect.height-25, left:40-t.clickableRect.width, right:t.bodyRect.width-25};
			}
			if (me.button==0 && t.enabled){
				t.body.addEventListener('mousemove', t.moveHandler, true);
				t.body.addEventListener('mouseout', t.outHandler, true);
				t.lastX = me.clientX;
				t.lastY = me.clientY;
				t.moving = true;
			}
		}
	}

	function CeventUp  (that){
		this.handler = handler;
		var t = that;
		
		function handler (me){
			if (me.button==0 && t.moving)
				_doneMoving(t);
		}
	}

	function _doneMoving (t){
		t.body.removeEventListener('mousemove', t.moveHandler, true);
		t.body.removeEventListener('mouseout', t.outHandler, true);
		t.moving = false;
	}

	function CeventOut  (that){
		this.handler = handler;
		var t = that;
		
		function handler (me){
			if (me.button==0){
				t.moveHandler (me);
			}
		}
	}

	function CeventMove (that){
		this.handler = handler;
		var t = that;
		
		function handler (me){
			if (t.enabled && !t.wentOut){
				var newTop = parseInt(t.theDiv.style.top) + me.clientY - t.lastY;
				var newLeft = parseInt(t.theDiv.style.left) + me.clientX - t.lastX;
				if (newTop < t.bounds.top){     // if out-of-bounds...
					newTop = t.bounds.top;
					_doneMoving(t);
				} else if (newLeft < t.bounds.left){
					newLeft = t.bounds.left;
					_doneMoving(t);
				} else if (newLeft > t.bounds.right){
					newLeft = t.bounds.right;
					_doneMoving(t);
				} else if (newTop > t.bounds.bot){
					newTop = t.bounds.bot;
					_doneMoving(t);
				}
				t.theDiv.style.top = newTop + 'px';
				t.theDiv.style.left = newLeft + 'px';
				t.lastX = me.clientX;
				t.lastY = me.clientY;
			}
		}
	}
}

function getClientCoords(e) {
	if (e == null)
		return {
			x: null,
			y: null,
			width: null,
			height: null
		};
	var x = 0,
		y = 0;
	ret = {
		x: 0,
		y: 0,
		width: e.clientWidth,
		height: e.clientHeight
	};
	while (e.offsetParent != null) {
		ret.x += e.offsetLeft;
		ret.y += e.offsetTop;
		e = e.offsetParent;
	}
	return ret;
}

var tabManager = {
	tabList : {},           // {name, obj, div}
	currentTab : null,
  
	init : function (mainDiv){
		var t = tabManager;
		var sorter = [];
		for (k in Tabs){
			if (!Tabs[k].tabDisabled){  
				t.tabList[k] = {};
				t.tabList[k].name = k;
				t.tabList[k].tabColor = Tabs[k].tabColor?Tabs[k].tabColor:'blue';
				t.tabList[k].obj = Tabs[k];
				if (Tabs[k].tabLabel != null)
					t.tabList[k].label = Tabs[k].tabLabel;
				else
					t.tabList[k].label = k;
				if (Tabs[k].tabOrder != null)
					sorter.push([Tabs[k].tabOrder, t.tabList[k]]);
				else
					sorter.push([1000, t.tabList[k]]);
				t.tabList[k].div = document.createElement('div');
			}
		}

		sorter.sort (function (a,b){return a[0]-b[0]});
		var m = '';
		
		m += '<TABLE><TR>';
		for (var i=0; i<sorter.length; i++) {
			var color = sorter[i][1].tabColor;
			m += '<TD align=center ><A id=nttc'+ sorter[i][1].name +' class="buttonv2 h20 '+color+'"><SPAN>'+ sorter[i][1].label +'</span></a></td>';
			if ((i+1)%9 == 0) m+='</tr><TR>';
		}
		m+='</tr></table>';  
			
		mainPop.getTopDiv().innerHTML = m;
    
		var contentDiv = document.createElement('div');
		contentDiv.id = 'ntMain_content';
		mainDiv.appendChild(contentDiv);
		
		for (k in t.tabList) {
			document.getElementById('nttc'+ k).addEventListener('click', this.e_clickedTab, false);
			var div = t.tabList[k].div;
			div.style.display = 'none';
			div.style.height = '100%';
			contentDiv.appendChild(div);
			try {
				t.tabList[k].obj.init(div);
			} catch (e){
				div.innerHTML = "INIT ERROR: "+ e;
			}
		}
    
		if (t.currentTab == null)
			t.currentTab = sorter[0][1];    
		t.currentTab.div.style.display = 'block';
	},
  
	hideTab : function (){
		var t = tabManager;
		t.currentTab.obj.hide();
	},
  
	showTab : function (){
		var t = tabManager;
		t.currentTab.obj.show();
	},
    
	setTabStyle : function (Tab, selected){
		var e = document.getElementById ('nttc'+ Tab.name)
		var c = Tab.tabColor?Tab.tabColor:"blue";
		if (selected){
			e.className = 'buttonv2 h20 green';
		} else {
			e.className = 'buttonv2 h20 '+c;
		}
	},
  
	e_clickedTab : function (e){
		var t = tabManager;
		mainPop.show (true);
		if (e.target.id)
			var newTab = t.tabList[e.target.id.substring(4)];
		else
			var newTab = t.tabList[e.target.parentNode.id.substring(4)];
		if (t.currentTab.name != newTab.name){
			t.setTabStyle (t.currentTab, false);
			t.setTabStyle (newTab, true);
			t.currentTab.obj.hide ();
			t.currentTab.div.style.display = 'none';
			t.currentTab = newTab;
			newTab.div.style.display = 'block';
		}
		newTab.obj.show();
	},

}

function eventHideShow() {
	if (mainPop.toggleHide(mainPop)) {
		tabManager.showTab();
	} else {
		tabManager.hideTab();
	}
}

function createButton(label) {
	var a = document.createElement('a');
	a.className = 'button20';
	a.innerHTML = '<span style="color: #ff6">' + label + '</span>';
	return a;
}

function AddMainTabLink(text, eventListener, mouseListener) {
	var a = createButton(text);
	a.className = 'tab';
	var tabs = document.getElementById('main_engagement_tabs');
	if (!tabs) {
		tabs = document.getElementById('topnav_msg');
		if (tabs)
			tabs = tabs.parentNode;
	}
	if (tabs) {
		var e = tabs.parentNode;
		var gmTabs = null;
		for (var i = 0; i < e.childNodes.length; i++) {
			var ee = e.childNodes[i];
			//if (ee.tagName=='DIV') logit ("CHILD: "+  ee.tagName +' : '+ ee.className+' : '+ ee.id);      
			if (ee.tagName && ee.tagName == 'DIV' && ee.className == 'tabs_engagement' && ee.id != 'main_engagement_tabs') {
				gmTabs = ee;
				break;
			}
		}
		if (gmTabs == null) {
			gmTabs = document.createElement('div');
			gmTabs.className = 'tabs_engagement';
			tabs.parentNode.insertBefore(gmTabs, tabs);
			gmTabs.style.whiteSpace = 'normal';
			gmTabs.style.width = '735px';
		}
		gmTabs.style.height = '0%';
		gmTabs.style.overflow = 'auto';
		if (gmTabs.firstChild)
			gmTabs.insertBefore(a, gmTabs.firstChild);
		else
			gmTabs.appendChild(a);
		a.addEventListener('click', eventListener, false);
		if (mouseListener != null)
			a.addEventListener('mousedown', mouseListener, true);
		return a;
	}
	return null;
}

function ScriptStartup () {
	var metc = getClientCoords(document.getElementById('main_engagement_tabs'));
	if (metc.width==null || metc.width==0) {
		setTimeout (ScriptStartup, 1000);
		return;
	}
	
	// initialise 

	var styles = '\
	tr.CPopupTop td {background-color:#342819; border:1px solid #000000; height: 21px;  padding:0px; color:#FFFFFF;}\
	.CPopMain       {background-color:#F7F3E6; border:1px solid #000000; -moz-box-shadow:inset 0px 0px 10px #6a6a6a; -moz-border-radius-bottomright: 20px; -moz-border-radius-bottomleft: 20px; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px; font-size:11px; color:#000000}\
	.CPopup         {border:5px ridge #666; opacity:1; -moz-border-radius:25px; border-radius:25px; -moz-box-shadow: 1px 1px 5px #000000;}\
	.divHeader		 {border:0px solid; border-color:#000000; background: -moz-linear-gradient(top, #E9D9AE, #8C7D5D); -moz-border-radius:5px; height: 16px;border-bottom:0px solid #000000;font-weight:bold;font-size:11px;opacity:0.75;margin-left:0px;margin-right:0px;margin-top:1px;margin-bottom:0px;padding-top:4px;padding-right:10px;vertical-align:text-top;align:left; color:#000000;}';
	
	AddMainTabLink('New Tabs', eventHideShow);

	mainPop = new CPopup ('ntMain', 0, 0, 400, 300 , true, function (){ tabManager.hideTab(); });
	mainPop.getMainDiv().innerHTML = '<STYLE>'+ styles +'</style>';

	tabManager.init (mainPop.getMainDiv());
}

/*********************************** TABS ***********************************/

Tabs.Tab1 = {
	tabOrder: 100,
	tabLabel: 'Tab 1',
	tabColor: 'red',
	
	init: function (div) {
		var t = Tabs.Tab1;
		t.mydiv = div;
	},
	
	hide: function () {},
	
	show: function () {
		var t = Tabs.Tab1;

		m = '<div>';
		m += '<div class="divHeader" align="center">TAB 1</div>';
		m += '<div align="center"><br><br>This is the first tab</div>';

		t.mydiv.innerHTML = m;
	},
}

Tabs.Tab2 = {
	tabOrder: 100,
	tabLabel: 'Tab 2',
	tabColor: 'blue',
	
	init: function (div) {
		var t = Tabs.Tab2;
		t.mydiv = div;
	},
	
	hide: function () {},
	
	show: function () {
		var t = Tabs.Tab2;

		m = '<div>';
		m += '<div class="divHeader" align="center">TAB 2</div>';
		m += '<div align="center"><br><br>This is the second tab</div>';

		t.mydiv.innerHTML = m;
	},
}

/***********************************************************************/

ScriptStartup();

