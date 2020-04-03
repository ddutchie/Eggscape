// Garden Gnome Software - Skin
// Pano2VR 6.1.0/17841
// Filename: counter.ggsk
// Generated 2020-04-03T15:46:54

function pano2vrSkin(player,base) {
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_egg_popup', 2, false);
	player.addVariable('ht_counter_visit', 2, false);
	player.addVariable('my_total_count', 1, 0);
	player.addVariable('my_count_1', 1, 0);
	player.addVariable('my_count_2', 1, 0);
	player.addVariable('my_count_3', 1, 0);
	player.addVariable('my_count_4', 1, 0);
	player.addVariable('my_count_5', 1, 0);
	player.addVariable('my_count_6', 1, 0);
	player.addVariable('my_count_7', 1, 0);
	player.addVariable('my_count_8', 1, 0);
	player.addVariable('my_count_9', 1, 0);
	player.addVariable('my_count_10', 1, 0);
	player.addVariable('my_count_11', 1, 0);
	player.addVariable('my_count_12', 1, 0);
	player.addVariable('my_count_13', 1, 0);
	player.addVariable('my_count_14', 1, 0);
	player.addVariable('my_count_15', 1, 0);
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_timer', 2, false);
	player.addVariable('vis_start_popup', 2, true);
	player.addVariable('my_count_special', 1, 0);
	player.addVariable('my_count_16', 1, 0);
	player.addVariable('my_count_17', 1, 0);
	player.addVariable('my_count_18', 1, 0);
	player.addVariable('my_count_19', 1, 0);
	player.addVariable('my_count_20', 1, 0);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
			player.startAutorotate("0.1");
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information.ggCurrentLogicStateSize = newLogicStateSize;
				me._information.style[domTransition]='width 0s, height 0s';
				if (me._information.ggCurrentLogicStateSize == 0) {
					me._information.style.width='300px';
					me._information.style.height='150px';
					skin.updateSize(me._information);
				}
				else {
					me._information.style.width='400px';
					me._information.style.height='250px';
					skin.updateSize(me._information);
				}
			}
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='width 0s, height 0s';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var hs=player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_text_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 8%;';
		hs+='left : 3%;';
		hs+='position : absolute;';
		hs+='top : 5%;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('ht_counter_visit', true);
			player.startAutorotate("0.1");
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._eggfound=document.createElement('div');
		el.ggId="EggFound";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 216px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._eggfound.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._eggfound.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._eggfound.ggCurrentLogicStateSize != newLogicStateSize) {
				me._eggfound.ggCurrentLogicStateSize = newLogicStateSize;
				me._eggfound.style[domTransition]='width 0s, height 0s';
				if (me._eggfound.ggCurrentLogicStateSize == 0) {
					me._eggfound.style.width='300px';
					me._eggfound.style.height='250px';
					skin.updateSize(me._eggfound);
				}
				else {
					me._eggfound.style.width='411px';
					me._eggfound.style.height='216px';
					skin.updateSize(me._eggfound);
				}
			}
		}
		me._eggfound.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_egg_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._eggfound.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._eggfound.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._eggfound.style[domTransition]='width 0s, height 0s';
				if (me._eggfound.ggCurrentLogicStateVisible == 0) {
					me._eggfound.style.visibility=(Number(me._eggfound.style.opacity)>0||!me._eggfound.style.opacity)?'inherit':'hidden';
					me._eggfound.ggVisible=true;
				}
				else {
					me._eggfound.style.visibility="hidden";
					me._eggfound.ggVisible=false;
				}
			}
		}
		me._eggfound.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_30=document.createElement('div');
		els=me._image_30__img=document.createElement('img');
		els.className='ggskin ggskin_image_30';
		hs=basePath + 'images/image_30.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 216px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._eggfound.appendChild(me._image_30);
		el=me._info_eggtext_body=document.createElement('div');
		els=me._info_eggtext_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_eggtext_body";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 400px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 35px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="You found an Egg!";
		el.appendChild(els);
		me._info_eggtext_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_eggtext_body.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._eggfound.appendChild(me._info_eggtext_body);
		el=me._info_eggtitle=document.createElement('div');
		els=me._info_eggtitle__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_eggtitle";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_eggtitle.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_eggtitle.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._info_eggtitle.ggUpdateText();
		});
		el.appendChild(els);
		me._info_eggtitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_eggtitle.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._eggfound.appendChild(me._info_eggtitle);
		me.divSkin.appendChild(me._eggfound);
		el=me._button_next_previous=document.createElement('div');
		el.ggId="button_next_previous";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 440px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_next_previous.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_next_previous.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._button_next_previous.ggCurrentLogicStateSize != newLogicStateSize) {
				me._button_next_previous.ggCurrentLogicStateSize = newLogicStateSize;
				me._button_next_previous.style[domTransition]='width 0s, height 0s';
				if (me._button_next_previous.ggCurrentLogicStateSize == 0) {
					me._button_next_previous.style.width='220px';
					me._button_next_previous.style.height='32px';
					skin.updateSize(me._button_next_previous);
				}
				else {
					me._button_next_previous.style.width='440px';
					me._button_next_previous.style.height='32px';
					skin.updateSize(me._button_next_previous);
				}
			}
		}
		me._button_next_previous.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNSwwLDEyLjUsNS41OTUsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1MyYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE1LTEuMTI5LDcuMTQ4LTIuOTZsMCwwYzEuODMtMS44MzMsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNS'+
			'w1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xOS45MTYsMjIuNjE2bC01Ljg5NS01Ljc2Yy0wLjIzMi0wLjIyNy0wLjM2LTAuNTMyLTAuMzYtMC44NTZsMCwwYzAtMC4zMjQsMC4xMjgtMC42MjksMC4zNi0wLjg1NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsNS44OTUtNS43NjFjMC4zNDQtMC4zMzYsMC44NTgtMC40MzQsMS4zMDEtMC4yNDdsMCwwYzAuNDQyLDAuMTg2LDAuNzMyLDAuNjIyLDAuNzMyLDEuMTAzbDAsMHYxMS41MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjQ3OS0wLjI5'+
			'LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7TDE5LjkxNiwyMi42MTZ6IE0xNi41NjksMTZsMi45ODgsMi45MTl2LTUuODM4TDE2LjU2OSwxNkwxNi41NjksMTZ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNC4wMTEsMjIuNjE2bC01Ljg5Ni01Ljc2MWMtMC4yMzQtMC4yMjktMC4zNjMtMC41NC0wLjM2LTAuODY4bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjAwNC0wLjMyOSwwLjEzOS0wLjYzNy'+
			'wwLjM3OS0wLjg2MWwwLDBsNi4xNjEtNS43NjFjMC40ODItMC40NTIsMS4yNC0wLjQyNiwxLjY5MSwwLjA1N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bDUsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMjM1LDAuMjM5LTAuNTQ1LDAuMzU5LTAuODU2LDAuMzU5bDAsMEMxNC41NDYsMjIuOTU3LDE0LjI0NCwyMi44NDQsMTQuMDExLDIyLjYxNkwxNC4wMTEsMjIuNjE2eiIvPgogIDwv'+
			'Zz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDUsMCwxMi41LDUuNTk1LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAsMi43OT'+
			'UsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNS0xLjEyOSw3LjE0OC0yLjk2bDAsMGMxLjgzLTEuODMzLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzeiIvPgogIDxnPgogICA8cGF0aCBk'+
			'PSJNMTkuOTE2LDIyLjYxNmwtNS44OTUtNS43NmMtMC4yMzItMC4yMjctMC4zNi0wLjUzMi0wLjM2LTAuODU2bDAsMGMwLTAuMzI0LDAuMTI4LTAuNjI5LDAuMzYtMC44NTVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2MTEuNTIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC40NzktMC4yOSwwLjkxNy0wLjczMiwxLjEwM2wwLDBjLTAuMTQ5LDAuMDYzLTAuMzA3LDAuMDk0LTAuNDYzLDAuMDk0bDAsME'+
			'MyMC40NDcsMjIuOTU3LDIwLjE0NSwyMi44MzksMTkuOTE2LDIyLjYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0wxOS45MTYsMjIuNjE2eiBNMTYuNTY5LDE2bDIuOTg4LDIuOTE5di01LjgzOEwxNi41NjksMTZMMTYuNTY5LDE2eiIvPgogICA8cGF0aCBkPSJNMTQuMDExLDIyLjYxNmwtNS44OTYtNS43NjFjLTAuMjM0LTAuMjI5LTAuMzYzLTAuNTQtMC4zNi0wLjg2OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNzYxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTds'+
			'MCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDUxLDAuNDgyLDAuNDI2LDEuMjM5LTAuMDU2LDEuNjlsMCwwbC01LjI0OCw0LjkwN2w1LDQuODg2djAuMDAxYzAuNDcyLDAuNDYxLDAuNDgxLDEuMjE5LDAuMDIsMS42OTFsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjIzNSwwLjIzOS0wLjU0NSwwLjM1OS0wLjg1NiwwLjM1OWwwLDBDMTQuNTQ2LDIyLjk1NywxNC4yNDQsMjIuODQ0LDE0LjAxMSwyMi42MTZMMTQuMDExLDIyLjYxNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_prev__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBvcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBD'+
			'OS4wOTYsMjguNDk4LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7JiN4OTtDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2w1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43MzIsMC42MjIsMC43MzIs'+
			'MS4xMDNsMCwwdjExLjUyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBDMjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5LjkxNiwyMi42MTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44Nj'+
			'hsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMDA0LTAuMzI5LDAuMTM5LTAuNjM3LDAuMzc5LTAuODYxbDAsMGw2LjE2MS01Ljc2MWMwLjQ4Mi0wLjQ1MiwxLjI0LTAuNDI2LDEuNjkxLDAuMDU3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ1MSwwLjQ4MiwwLjQyNiwxLjIzOS0wLjA1NiwxLjY5bDAsMGwtNS4yNDgsNC45MDdsNSw0Ljg4NnYwLjAwMWMwLjQ3MiwwLjQ2MSwwLjQ4MSwxLjIxOSwwLjAyLDEuNjkxbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0'+
			'NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOT'+
			'YsMjguNDk4LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7JiN4OTtDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2w1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43MzIsMC42MjIsMC43MzIsMS4xMD'+
			'NsMCwwdjExLjUyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBDMjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5LjkxNiwyMi42MTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCww'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMDA0LTAuMzI5LDAuMTM5LTAuNjM3LDAuMzc5LTAuODYxbDAsMGw2LjE2MS01Ljc2MWMwLjQ4Mi0wLjQ1MiwxLjI0LTAuNDI2LDEuNjkxLDAuMDU3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ1MSwwLjQ4MiwwLjQyNiwxLjIzOS0wLjA1NiwxLjY5bDAsMGwtNS4yNDgsNC45MDdsNSw0Ljg4NnYwLjAwMWMwLjQ3MiwwLjQ2MSwwLjQ4MSwxLjIxOSwwLjAyLDEuNjkxbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi'+
			'45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Prev";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._pano_prev.onmouseover=function (e) {
			me._pano_prev__img.style.visibility='hidden';
			me._pano_prev__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_prev']=true;
			me._tt_pano_prev.logicBlock_visible();
		}
		me._pano_prev.onmouseout=function (e) {
			me._pano_prev__img.style.visibility='inherit';
			me._pano_prev__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_prev']=false;
			me._tt_pano_prev.logicBlock_visible();
		}
		me._pano_prev.ontouchend=function (e) {
			me.elementMouseOver['pano_prev']=false;
			me._tt_pano_prev.logicBlock_visible();
		}
		me._pano_prev.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_pano_prev=document.createElement('div');
		els=me._tt_pano_prev__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_pano_prev";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Previous Panorama";
		el.appendChild(els);
		me._tt_pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_pano_prev.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_pano_prev.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_pano_prev.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_pano_prev.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_prev.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_pano_prev.style.top='-25px';
					me._tt_pano_prev.ggUpdatePosition(true);
				}
				else {
					me._tt_pano_prev.ggDx=0;
					me._tt_pano_prev.style.top='32px';
					me._tt_pano_prev.ggUpdatePosition(true);
				}
			}
		}
		me._tt_pano_prev.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pano_prev'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_pano_prev.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_pano_prev.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_pano_prev.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_prev.ggCurrentLogicStateVisible == 0) {
					me._tt_pano_prev.style.visibility=(Number(me._tt_pano_prev.style.opacity)>0||!me._tt_pano_prev.style.opacity)?'inherit':'hidden';
					me._tt_pano_prev.ggVisible=true;
				}
				else {
					me._tt_pano_prev.style.visibility="hidden";
					me._tt_pano_prev.ggVisible=false;
				}
			}
		}
		me._tt_pano_prev.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._pano_prev.appendChild(me._tt_pano_prev);
		me._button_next_previous.appendChild(me._pano_prev);
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIu'+
			'Nzk1LDEuMTI5LDUuMzEzLDIuOTYsNy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTMtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLD'+
			'EwLjY4Nyw1Ljg5NCwxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMC43ODQsMjIuODY0Yy0wLjQ0My0wLjE4Ny0wLjczMi0wLjYyMi0wLjczMi0xLjEwM2wwLDBWMTAuMjM5YzAtMC40OCwwLjI5LTAuOTE3LDAuNzMyLTEuMTAzbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ0Mi0wLjE4NiwwLjk1Ny0wLjA4OCwxLjMsMC4yNDdsMCwwbDUuODk1LDUuNzYxYzAuMjMyLDAuMjI2LDAuMzYsMC41MzEsMC4zNiwwLjg1NWwwLDBjMCwwLjMyNC0wLjEyOCwwLjYyOS0wLjM2LDAuODU2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTsmI3g5O2wtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIuNDQ0LDE4LjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7TDE1LjQzMiwxNmwtMi45ODctMi45MTlWMTguOTJMMTIuNDQ0LDE4LjkyeiIvPgogICA8cGF0aCBkPSJNMTYuMDEzLDIyLjU3OGMtMC40NTEtMC40ODItMC40MjYtMS4yMzksMC4wNTctMS42OWwwLDBsNS4yNDctNC45MDdsLTUtNC44ODcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNDczLTAuND'+
			'YxLTAuNDgyLTEuMjE5LTAuMDItMS42OTFsMCwwYzAuNDYyLTAuNDczLDEuMjE5LTAuNDgyLDEuNjkyLTAuMDJsMCwwbDUuODk1LDUuNzYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLTAuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMywwLjIxNi0wLjUyNCwwLjMyMy0wLjgxNywwLjMyM2wwLDBDMTYuNTY3LDIyLjk1OCwxNi4yNDksMjIuODMsMTYuMDEzLDIyLjU3OEwxNi4wMTMsMjIuNTc4eiIvPgogIDwvZz4K'+
			'IDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2LDcuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBjMS44MzMsMS44Mz'+
			'EsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMS0yLjc5NS0xLjEzLTUuMzEzLTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODcsNS44OTQsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogIDxnPgogICA8cGF0aCBk'+
			'PSJNMTAuNzg0LDIyLjg2NGMtMC40NDMtMC4xODctMC43MzItMC42MjItMC43MzItMS4xMDNsMCwwVjEwLjIzOWMwLTAuNDgsMC4yOS0wLjkxNywwLjczMi0xLjEwM2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQtMC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTUuODk1LDUuNzZjLTAuMjI4LDAuMjI0LTAuNTMsMC4zNDEtMC44MzcsMC4zNDFsMCwwQzExLj'+
			'A5LDIyLjk1NywxMC45MzMsMjIuOTI3LDEwLjc4NCwyMi44NjRMMTAuNzg0LDIyLjg2NHogTTEyLjQ0NCwxOC45MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0wxNS40MzIsMTZsLTIuOTg3LTIuOTE5VjE4LjkyTDEyLjQ0NCwxOC45MnoiLz4KICAgPHBhdGggZD0iTTE2LjAxMywyMi41NzhjLTAuNDUxLTAuNDgyLTAuNDI2LTEuMjM5LDAuMDU3LTEuNjlsMCwwbDUuMjQ3LTQuOTA3bC01LTQuODg3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMGMwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAs'+
			'MGw1Ljg5NSw1Ljc2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIzNSwwLjIyOSwwLjM2NCwwLjU0LDAuMzYsMC44NjlsMCwwYy0wLjAwNCwwLjMyOS0wLjE0LDAuNjM2LTAuMzc5LDAuODYxbDAsMGwtNi4xNjEsNS43NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMjMsMC4yMTYtMC41MjQsMC4zMjMtMC44MTcsMC4zMjNsMCwwQzE2LjU2NywyMi45NTgsMTYuMjQ5LDIyLjgzLDE2LjAxMywyMi41NzhMMTYuMDEzLDIyLjU3OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBvcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVs'+
			'MCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC'+
			'01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUzMSwwLjM2LDAuODU1'+
			'bDAsMGMwLDAuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMxMS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQsMjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1Lj'+
			'I0Ny00LjkwN2wtNS00Ljg4NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40NzMtMC40NjEtMC40ODItMS4yMTktMC4wMi0xLjY5MWwwLDBjMC40NjItMC40NzMsMS4yMTktMC40ODIsMS42OTItMC4wMmwwLDBsNS44OTUsNS43NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yMzUsMC4yMjksMC4zNjQsMC41NCwwLjM2LDAuODY5bDAsMGMtMC4wMDQsMC4zMjktMC4xNCwwLjYzNi0wLjM3OSwwLjg2MWwwLDBsLTYuMTYxLDUuNzYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41Njcs'+
			'MjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMD'+
			'k2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwx'+
			'LjEyOS03LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUzMSwwLjM2LDAuODU1bDAsMGMwLD'+
			'AuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMxMS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQsMjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00Ljkw'+
			'N2wtNS00Ljg4NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40NzMtMC40NjEtMC40ODItMS4yMTktMC4wMi0xLjY5MWwwLDBjMC40NjItMC40NzMsMS4yMTktMC40ODIsMS42OTItMC4wMmwwLDBsNS44OTUsNS43NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4yMzUsMC4yMjksMC4zNjQsMC41NCwwLjM2LDAuODY5bDAsMGMtMC4wMDQsMC4zMjktMC4xNCwwLjYzNi0wLjM3OSwwLjg2MWwwLDBsLTYuMTYxLDUuNzYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LD'+
			'E2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._pano_next.onmouseover=function (e) {
			me._pano_next__img.style.visibility='hidden';
			me._pano_next__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_next']=true;
			me._tt_pano_next0.logicBlock_visible();
		}
		me._pano_next.onmouseout=function (e) {
			me._pano_next__img.style.visibility='inherit';
			me._pano_next__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_next']=false;
			me._tt_pano_next0.logicBlock_visible();
		}
		me._pano_next.ontouchend=function (e) {
			me.elementMouseOver['pano_next']=false;
			me._tt_pano_next0.logicBlock_visible();
		}
		me._pano_next.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_pano_next0=document.createElement('div');
		els=me._tt_pano_next0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_pano_next";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Next Panorama";
		el.appendChild(els);
		me._tt_pano_next0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_pano_next0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_pano_next0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_pano_next0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_pano_next0.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_next0.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_pano_next0.style.top='-25px';
					me._tt_pano_next0.ggUpdatePosition(true);
				}
				else {
					me._tt_pano_next0.ggDx=0;
					me._tt_pano_next0.style.top='32px';
					me._tt_pano_next0.ggUpdatePosition(true);
				}
			}
		}
		me._tt_pano_next0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['pano_next'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_pano_next0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_pano_next0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_pano_next0.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_next0.ggCurrentLogicStateVisible == 0) {
					me._tt_pano_next0.style.visibility=(Number(me._tt_pano_next0.style.opacity)>0||!me._tt_pano_next0.style.opacity)?'inherit':'hidden';
					me._tt_pano_next0.ggVisible=true;
				}
				else {
					me._tt_pano_next0.style.visibility="hidden";
					me._tt_pano_next0.ggVisible=false;
				}
			}
		}
		me._tt_pano_next0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._pano_next.appendChild(me._tt_pano_next0);
		me._button_next_previous.appendChild(me._pano_next);
		me.divSkin.appendChild(me._button_next_previous);
		el=me._visible_counters=document.createElement('div');
		el.ggId="visible_counters";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._visible_counters.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._visible_counters.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("sunrise") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._visible_counters.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._visible_counters.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._visible_counters.style[domTransition]='';
				if (me._visible_counters.ggCurrentLogicStateVisible == 0) {
					me._visible_counters.style.visibility=(Number(me._visible_counters.style.opacity)>0||!me._visible_counters.style.opacity)?'inherit':'hidden';
					me._visible_counters.ggVisible=true;
				}
				else {
					me._visible_counters.style.visibility="hidden";
					me._visible_counters.ggVisible=false;
				}
			}
		}
		me._visible_counters.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._count_1=document.createElement('div');
		els=me._count_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="count_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._count_1.ggUpdateText=function() {
			var hs="ht 3 count = "+player.getVariableValue('my_count_3');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._count_1.ggUpdateText();
		player.addListener('timer', function() {
			me._count_1.ggUpdateText();
		});
		el.appendChild(els);
		me._count_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._count_1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._visible_counters.appendChild(me._count_1);
		el=me._count_2=document.createElement('div');
		els=me._count_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="count_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._count_2.ggUpdateText=function() {
			var hs="ht 2 count = "+player.getVariableValue('my_count_2');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._count_2.ggUpdateText();
		player.addListener('timer', function() {
			me._count_2.ggUpdateText();
		});
		el.appendChild(els);
		me._count_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._count_2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._visible_counters.appendChild(me._count_2);
		el=me._count_3=document.createElement('div');
		els=me._count_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="count_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._count_3.ggUpdateText=function() {
			var hs="ht 1 count = "+player.getVariableValue('my_count_1');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._count_3.ggUpdateText();
		player.addListener('timer', function() {
			me._count_3.ggUpdateText();
		});
		el.appendChild(els);
		me._count_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._count_3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._visible_counters.appendChild(me._count_3);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAAAoCAYAAAAR1ubMAAAUcklEQVR4nO2d6ZbjuJGFvwBAasmsrKXL3W2Pz4wfYh5nnn6Ox912u5bctJAAYn6AlCiJUmons6ruKZWkFJcAAoiLCARA+eW//0c5AYqAQPpPTrlUD3BSVWxeR0HOds3r4NvS57mg6aV1jbwmnQr6Q59rqPunvjp91hIv+2gbTtOzO/bEH8ZjF4TagiiCKPS/4VX0JbL4/gM1lh1RUVB5BWT/fepTJOlnt3ba9An97qOJ3KX+vPNY5RR9H0gKVdWtsNSxN992XleKOe6+0iiGrlyi/kGX9dVLz+H7NB6Ho1EvomlQ1Gt91v99+/o0AsZEMhuxRvFBKLwl6u6yC6nZi6S+G3tHDlL/AyMYYyqBq58VNAmORl2T+nhi2JMU1hta8/0Q1AxtqheAqX6LlZ'+
			'ce0wvoj3JWYUTACFK9aqgm5RCUuGCITWMii2J1Vb5zkvv3htrQav/0ufj4fZCBANZGBi5yOyx4Ny4ZZJGHqeNfDyMm8+3mzYgyyAKjPGBEmRaWaWGJSj88B5Fk/63BOIvJDMaaZHOq9qeABiX4SCwD0UdiPF3mHaTQ1tCa74dCEhEYBzZHxSaKb5JCVEQDhAKir8ihWci2Au+qhPPH3Iw12NxiM4tYwRhZjLI1RmJQQhGgCMQQG2cujYnWVmTR+F4qxzlwbn2eA9vKvO3vu2S9djma+gRWwhDV96vI0Cdyv54+rYkMs8ibUcGHm4L3NwVvRwXOKveTnBANhTf4YDbONaLcDD2/3E35cFMgonx+HvD7/YjnmSNZne70mUylYAcON3CYzGKdXQxApRqTaCVXDJFQBPzM4+dNu3Oct9AghbXin7WhCRgLdoC6IRiHimHp'+
			'G1U3tZqIwOaIn4GfgfqmVKvQ3ZItHKqNg9Yra7/yWWdwQ4cbZokUjGyGj1TxeaCclvipXyOG+l7NOYeGR6EbWjgBl9TnKdC199WfdkvWcJFXDpS1612zfLLy8br6bH7oSqe79Qm7JDtOn9ZE7kYlP9/N+PhmzrtxQe4UU51zNyr5cFPw6WnQSgq5C/z8ZsbfPj7zZpjsy+3QIwL/93nMZG4Xc6a14b2UPtvKb6zBDTKycYbL7Uo0onl6RRFYZ5MXYQ1Q4mflCR6D4lTWb3juRpY8BHVDcGPUuPZLV0ZLxSaPAkE0gveNYL0eJNXi2Eb96OKXdQvUEu5pwFiDGznycY5xlo1qo2JwEVzu0h2CEqfbWLtZz8veo+tyvGgo10qwcXBfjEbjcyPccqhU6zptncZpP+PC2F+f+0q1W5/7XuUSWCOCM+pz7eNGEQXIXeTnux'+
			'l/+/jEOI8YWTWARpTcRpzZNIxGlFEe+OnNnDcjvySSoec/3k8og/DblzGz0rYKe6w+28lv8wbGJPuR32TY3LXamdYzRXC5hagpjFT4l0/akC69u6sYDZuBHW4nhHWIoDZD4gDCHNHybKKs8LO2KWuTHETA5pZsmG0lhJV7CCkO6MxiEmsfqZafdeXrkVPgR511PrQZjsONxktY12fzzrsN6qHYPWjYfp9NfcIxOu2jPuESE+2yxhDr+jQouQsMsk1CAFAVQmzvdyKJVIZZWBACJLK4G5b85d2UWWH518OIENts47n02XItQJzBjQ4jhOXVBJOl+QeKl47ers89rfQJEFCTJWI46FaCGocYC/F8pLB5F2i2vGWq7dIISO2i7UEI7Xc4NLbXtQE4BcqlieAlSOP+q6GzQwz7vvHxQ0nitaFhPC5IBLsgK+1JKLxwP8l4'+
			'nDrejj22QQxRhZk3PM0zCr8ZOkIhKsT1qC7gjPJuXPDL2xlP84zHabZVovNg3cMRbGax+TF2hhSUEVk7d932bJLBuj6PXqewPySN/I+qyOs2PqgqSNvIYX9ZVCGGSPQxpYx9F1glg76kai71yRo5bGuPu+RuI5VDiOY1YZUM+qJPUEKEz485w2xE1Bk3A4+pPOp5afnjccAfjwOKlvkEBWal42nu+BALsrUQU2aV22HJKPc7SOFCEDBGkKMYIdkdjXGZvLn66/L9BXK/PCmoprkBDWm+YO/zIhLLlIXUAVbIgSpO5wNidrt1qhB9ygQIZbiavN2hr8ZjFZvksPxliXXZD/EWDvUG+4p143F9T+8lqAqTwvKPzyOmheXNyJPZSIyGSeH4/JTzMMvRlnUKUYVZYfn345DboefdqMTZVMaoMCstj9OMeducwtmxGT46qf'+
			'dEJZSB4Jt2p77H/gO2K3gKQCjBFiBDGtPm26GKxAL8FLRbwypVZw+Fx8+S12OtqdJpm1A0VoQwT9lH0bdS9jeEZWOTV+IRtZPDeuc8tCzN4/tmQg9B//QpjdBQ08gnYnBMv1iyh4i1SlTBB4cPuyMTPho+PQ0QYHI35XbosUYpvOHrJOef9yOeZlf2EgC0HnxGjLEHNSVVJfiAnwW0XF/nddiA7QqkoBBLpJymryZHF2sTNkdpEiPEAvETCEUvGqeqQoiUk4IYFDdwiDOL+J0qKdMoJEIIrWsUviW8Du9gFwRNE5Fr80enjdVecyipIoQe6FNEMUJaoWyTXDEKZTCEKAtyUE3kMI8WynWi3+65qcK0cPx+b3iYOca5xxkogvA0y5gW7sXV0JdAVJAy4AuPsYJY8+LcQgoZVYQwLfFzXy2c1eUBB3p71yEF9eADEgO4'+
			'AYhL6xaq+YZacGJIIaMwT0TSHhzrBKqKBkUnBaEIKbPICCCLlcwxRNTHV2giD8Fqg3uN5q9G4gNtmT86Ba+NGPpF8CKKs8rbccGH24JRnpaSFd5y/+z4MsmZFbY1NLTUJ2teYDvKYLifDLifDM5ejmMRfaScpsQaN3DVKmbYLEcVmQiRUFbh6sVg9LS5vQuTQnP0EStjX4DJQGr3qBqdpeH2YiVzL7uUgqJo6Ql+33zxXpbkSPRnNHlOJK9hj7Dm3ngt8wv9CxcZgfc3Bf/58Zmf7wqGLg2yypAyjv7+OfLb1yGzYrvpWurzNRD0qneqQChCGmSWoVrNXA1Aa7ehGqCGEIllIoXow2pSywl99EKksG30kYy/hHn1fdckX78hGyPMtobX58Z4KL5NQqixDCedM92wz/rvnz6l2o/o57sZv76dk9uKsIDcKh9u0wh6Uj'+
			'jmZbu3sLhWrc/6Ar3WxSaijxQ+YmxYhpJYWskYYhWy3twn7lSCvwApLAngZeH60RiPRZq0lOXeNxuLXL4V9M+AXAKb4aRT0GdS6Kc+BRjlnjcjvyCEJqwot0PP3ajkj4fBi4tC6zVIy7mjvupj+1xWDJEYAHYl3JwWLlpHy+qOU3AIIXwraJb1Nbirh0CXL9VeGZBLos5dMVte+6OP9dVPQqhhhNZVyjWsUZyNmJYtLLZB6vB0D8u7xLE247yEAGf1FFZDRN8bRJXNfaReM9ZCfp3Kcl3Ui4eMEay1ywyzqIQYMar0JwXiEPSbEBSYe8O0tASVlZXKNUIUfDBbFmhtx2q2WV9b86HZb+cnBDgbKXy/BqSJ9NCnb8Fb+KFPI0KeOTKXFisqEGPEh4j3AUJ8ZcTQb0IAQIVp4fj8NODtyHM38hipl48KPsDDLONpmh2V'+
			'MrqNGKzR6pU0GqLBB+kkLXV/YrgMIcBZSOGHAVlCK2Kov7/m2vi+9WmswVmLtSntGMAawRqDEWGuPm0p0K2Ye+IVEAJJSh+Efz/kZDbyy9s5N3kihqCGp5nlt68jvkyyo4MRTWIQIHO6eEDPOAso8FxY7ic5T7OMsmWrjMuj7nXbCnk5QoCTSeF7nEN4GSmUtPjWpShHoDmH8AOrEIyBzFlCVGKxDyl0PeH8OgihhqrwPHf8/fOIp5njdpBWG5dBeJpn3D9nzH31LJYjUdeDs8qH2zl//TDhp5s5oyzpczK3/PE04LevYz49DvCxC2JIkq5CVz5eSp9n8RR+EMImXicx/CCEGjFGQoxYNdVWC3WNpFXspvlw396in4RQb12xLaVUVZjOHbPCYiUdH1WIuv2ctus3r7dxDJFx7vnz2yl/eTsla2Q73Y08eRYRgVlhuZ'+
			'/mhxTvwri8Pk8ghdTgfhDCdryuOYamAfneocQIpQ8YEdzadgOqilZ19dJ1zp7gtxeaId3+EYKzihGl9GZn3F5V8Ar7tkiRNDeQu4izaX6g9IbSW8IaoRiBm0HJ23GxQgg1cqf8dDPn03jYE1K4HsEfSQrLEeUP7EI1wdB7YujniLIrqCYnwPsACtEZjDGIGEAJGgl+/fnhXWJdjsvGnI+FSB2yKRi4wKenAc+zarubk6+dFr69vyl4f1MyytP8wLRwfH3K+PKcM/dmQQz1grjMtqcLGJRhVj2Mp/JUusN19XkEKfwYUR6C/i+5/0EIbai3DPAhEGLAmrQBogIaY5pTePEql9b1FjKoPvZPn8o49/zl/ZQ3Q09UYVqMWh94cwhElMwqf7qb818fJ7wfl4vRfxGEz+Mc90n55/2QwtdL2lL669xblNCqqRhTyKpbNLy+'+
			'K+nzQFLomwHZt9N1K2t/iaFv+oT96uZ6sqqmbJUYQ3PrmSRBp+tSdMtneqtPZyPvb0o+3BQMs7hYmTyPpz+7YJx7frmb8/G2XFn8llvl45siEVBp+fSYnrMQFZ5nji/PGW+GntzpyuM5yyA8zDIeZ8elv54H3STyHEAKfTEgS6bfvhPieieRxhHdyN4/YuiLPmEhwc6J+eYouBt9NvulUHkTO4nhUjreQQj0SJ/pI5BmVkZ55MNtwe0wECIYQ+V9naZPIzDII+NBaF0NbQ3cjUruRiWfn/JqcbMwLSz/uh8ycMpPt8UilBSj8Dh3/OPriPtrP31tgW4IAfYmhT4YkKbhWGaCbDt2iRTn0kVcTpq0clX0hxj6ps/l317WaZ/0SWMxVNuvl8ALhKDa+jjHazwWdpGztnL/enV45HbkuRuXiKRtq+elw0cLUrfCVJmpex'+
			'wmr5HY6FerENIEtDMxzQ9UbS+o4fNTTgjCw9QxysJCtodpzqenwc7dWC+H7ggB9iKF7g3IcoOyXUZjG5oE0jAoKp2Up3tiuI4+19MCYZn9sbnh3CF1sEuf6erXxPZtty+h1+2EsOgZKV8WkWoORBWNy63oL0EOm2SwWfbMRd6OSsZ5oPDC10nOl0mOj5t9WusU4D3bqCoU3jIvLVH9hrcQEXw0lGE120kVfDB8fs55mGZkLtVTiIYiGIJ2tT4BuiIEeJEUuiWE08igDY1rSOrM3RqSaxPD5fUp1bYE1ipWFKnqOUTBR2h/6t7Rd1v52BXZbxLDdSeY694h1mCtQ6xdfSqgBqKPBO+XYa+zoPb2dnvupkpDtUZ5njsepo7fv464n+QbaaKJ6isyE6o+ulteBZ7n6dnMb4aem0GonpabdrwtvPD12fEwbV8JrSqUQVZW'+
			'L6dyddE/q/eOCEGRbaTQFO5bIYQmqmuK9sCQXKvhXYcQnFGGeWA8COQ2LQCKCoU3PM8d00IuMAJrI/uuieHc2BYaSS/jLDbLcc4hdrV+VR3RRsQYQllCjGcghnrL+H36p+CD8MfjgC/POU8zx9M8w1dG2IiSu8AgiziT0j8Lb5h7Qwi8OHhTFeal4Z/3Q6ykLKRhnoJEPqbQ0D8+jypS2E9Byzmj5l8uiVVCuH78YOnttZBCZTygM/clEcIlyGAddUV0bUh05a/nxXUIviaEN6OSdzcpTFCnBaqmbI5RHvn8DE8Xy+iQxZt2MJhZ3XBtTaazQVc+ioBYi8tzbJa1zieICNbZakCv+HlxogyHEEIaFEwLx7QlPm+Ncjso+Xg3412VShpiGvl/ehrw5XlA4ZPnIHXIsAWqwuPU8b9hzP3UMc4jIkoZDI9Tx+P08H2MUn'+
			'Xt/3jP49GviIxr/rR473z+4BqEUKN7YqicFVhp9KeWf1WfjbHARSDAeOBTdskgrMw1iqQVom9NQdS0ynRabotcbp25PUASOiQGWgzJxpcjsUoI6RHhgnUO61wrIaxIYA3WOaIPBO+PlEEaW8SfViYjMMwCv76b8F8fJynsQ1r/UXrD3ahARPnjYUiI+xHDZO6YFnZh4+px7b4eQhsuR/bd29y2iIxZegbpJd8VIdSow0mXNp07JNA6jthoKEfpYVWfdWO7KCFUMeObgWecrxJCE8bATR4YZrueInU2qUAuXfJddz+XPtfO1dRW6j4qxiQvwLw8ChYEYy1iLVuV9MIVdNE/T69XEeVuVPDr2xlvBn6xTsAAAxf5023Bn99OuRkElvrkxXundQhCjIKqnEQIC1lrfepa/zoKzf6pK/q8JraF6N1KY+uIDNLtuyKEGt16'+
			'DEkCXQ7sd1ZD/WObjN3o05nIIFPsDtskpAVMrmWvmdWjzgXpzGOo7r7Fa2g9kp36rK61fhlj0xYchwh13Jq7JiGcB0aU8cAzytu9FueUd+OS20HJwzRjqc/dHsOlUM9rbE9D3jx6U8a18F+nA3BoI3jX/Y6YzQyGbiXpAzFAlXNNnYVBS7W0yNX4UycGUKpwRu/QLTEkCbTJ1QuxltgilzbO33ZtOdrKH4DmHMK5r7y73aTHb9Yj64ZH36Hdqsketulz5ZeNP3W9uPClJB7XdT/uDyHU6JYYjOgiX7oIJu290m0b2guqvLhPjJIWBvnQQXiwY2JYSrLODqdBVQ+7VtQDM48uRwhRhUlheS4cg6zY2E9WNe1PlPYrat7/29XnpbFPVmeXqzN6EDLahm7mGIxRboaeX9/N+OluvnUHxz7CR8O8NIQdIocgTOaWWXn6Xj'+
			'eHo9s5hktBoxL3fGCxqhJCJIa4nIHdicOyjA6FqqSVw48DpkV6LrNWM2Ch2obi09OAx1nb1tXfpj4viX3T/LtYww30mRBqXNdjEFFucs9fP0z5092MPx6GfHoYXPSe54Jqen7u89wxyiM3A48xy+6qCj4Kk8LxMM0p/DZSuHwYpOvQ4LkRQ8okMrbe2rsdSlrZHL1Hwz4T/ZclBFimqv72dYQI1UZ5SbZZafj8NOD3ryOmxY72cjaPQRFJ4SojaeBf75J6jonqrrHsjS/r8/8BGpYCpi6PURsAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._count_status=document.createElement('div');
		els=me._count_status__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="count_status";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 371px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._count_status.ggUpdateText=function() {
			var hs="You have found "+player.getVariableValue('my_total_count')+" out of 20 eggs.";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._count_status.ggUpdateText();
		player.addListener('timer', function() {
			me._count_status.ggUpdateText();
		});
		el.appendChild(els);
		me._count_status.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._count_status.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('my_total_count') == 0))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('my_total_count') >= 20))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._count_status.ggCurrentLogicStateText != newLogicStateText) {
				me._count_status.ggCurrentLogicStateText = newLogicStateText;
				me._count_status.style[domTransition]='';
				if (me._count_status.ggCurrentLogicStateText == 0) {
					me._count_status.ggText="You haven\'t found any eggs.";
					me._count_status__text.innerHTML=me._count_status.ggText;
					if (me._count_status.ggUpdateText) {
					me._count_status.ggUpdateText=function() {
						var hs="You haven\'t found any eggs.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._count_status.ggUpdatePosition) me._count_status.ggUpdatePosition();
					}
				}
				else if (me._count_status.ggCurrentLogicStateText == 1) {
					me._count_status.ggText="You have viewed all the hotspots";
					me._count_status__text.innerHTML=me._count_status.ggText;
					if (me._count_status.ggUpdateText) {
					me._count_status.ggUpdateText=function() {
						var hs="You have viewed all the hotspots";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._count_status.ggUpdatePosition) me._count_status.ggUpdatePosition();
					}
				}
				else {
					me._count_status.ggText="You have found "+player.getVariableValue('my_total_count')+" out of 20 eggs.";
					me._count_status__text.innerHTML=me._count_status.ggText;
					if (me._count_status.ggUpdateText) {
					me._count_status.ggUpdateText=function() {
						var hs="You have found "+player.getVariableValue('my_total_count')+" out of 20 eggs.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._count_status.ggUpdatePosition) me._count_status.ggUpdatePosition();
					}
				}
			}
		}
		me._count_status.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_2.appendChild(me._count_status);
		me._visible_counters.appendChild(me._image_2);
		me.divSkin.appendChild(me._visible_counters);
		el=me._resetcounter=document.createElement('div');
		el.ggId="ResetCounter";
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 52px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._resetcounter.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._resetcounter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_total_count') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._resetcounter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._resetcounter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._resetcounter.style[domTransition]='';
				if (me._resetcounter.ggCurrentLogicStateVisible == 0) {
					me._resetcounter.style.visibility=(Number(me._resetcounter.style.opacity)>0||!me._resetcounter.style.opacity)?'inherit':'hidden';
					me._resetcounter.ggVisible=true;
				}
				else {
					me._resetcounter.style.visibility="hidden";
					me._resetcounter.ggVisible=false;
				}
			}
		}
		me._resetcounter.onmouseover=function (e) {
			me.elementMouseOver['resetcounter']=true;
			me._tt_pano_next.logicBlock_visible();
		}
		me._resetcounter.onmouseout=function (e) {
			me.elementMouseOver['resetcounter']=false;
			me._tt_pano_next.logicBlock_visible();
		}
		me._resetcounter.ontouchend=function (e) {
			me.elementMouseOver['resetcounter']=false;
			me._tt_pano_next.logicBlock_visible();
		}
		me._resetcounter.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_pano_next=document.createElement('div');
		els=me._tt_pano_next__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_pano_next";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Counter Reset";
		el.appendChild(els);
		me._tt_pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_pano_next.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_pano_next.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_pano_next.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_pano_next.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_next.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_pano_next.style.top='-25px';
					me._tt_pano_next.ggUpdatePosition(true);
				}
				else {
					me._tt_pano_next.ggDx=0;
					me._tt_pano_next.style.top='32px';
					me._tt_pano_next.ggUpdatePosition(true);
				}
			}
		}
		me._tt_pano_next.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['resetcounter'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_pano_next.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_pano_next.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_pano_next.style[domTransition]='left 0s, top 0s';
				if (me._tt_pano_next.ggCurrentLogicStateVisible == 0) {
					me._tt_pano_next.style.visibility=(Number(me._tt_pano_next.style.opacity)>0||!me._tt_pano_next.style.opacity)?'inherit':'hidden';
					me._tt_pano_next.ggVisible=true;
				}
				else {
					me._tt_pano_next.style.visibility="hidden";
					me._tt_pano_next.ggVisible=false;
				}
			}
		}
		me._tt_pano_next.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._resetcounter.appendChild(me._tt_pano_next);
		el=me._counter_reset=document.createElement('div');
		els=me._counter_reset__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._counter_reset__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._counter_reset__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._counter_reset__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="counter_reset";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 32px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._counter_reset.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._counter_reset.onclick=function (e) {
			player.setVariableValue('my_count_1', Number("0"));
			player.setVariableValue('my_count_2', Number("0"));
			player.setVariableValue('my_count_3', Number("0"));
			player.setVariableValue('my_total_count', Number("0"));
		}
		me._counter_reset.onmouseover=function (e) {
			me._counter_reset__img.style.visibility='hidden';
			me._counter_reset__imgo.style.visibility='inherit';
		}
		me._counter_reset.onmouseout=function (e) {
			me._counter_reset__img.style.visibility='inherit';
			me._counter_reset__imgo.style.visibility='hidden';
		}
		me._counter_reset.ggUpdatePosition=function (useTransition) {
		}
		me._resetcounter.appendChild(me._counter_reset);
		me.divSkin.appendChild(me._resetcounter);
		el=me._egg_show_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=1000;
		el.ggId="egg_show_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 46px;';
		hs+='position : absolute;';
		hs+='top : 389px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._egg_show_timer.ggIsActive=function() {
			return (me._egg_show_timer.ggTimestamp + me._egg_show_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._egg_show_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._egg_show_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._egg_show_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._egg_show_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._egg_show_timer.style[domTransition]='';
				if (me._egg_show_timer.ggCurrentLogicStateVisible == 0) {
					me._egg_show_timer.style.visibility="hidden";
					me._egg_show_timer.ggVisible=false;
				}
				else {
					me._egg_show_timer.style.visibility=(Number(me._egg_show_timer.style.opacity)>0||!me._egg_show_timer.style.opacity)?'inherit':'hidden';
					me._egg_show_timer.ggVisible=true;
				}
			}
		}
		me._egg_show_timer.ggDeactivate=function () {
			player.setVariableValue('vis_egg_popup', false);
		}
		me._egg_show_timer.ggCurrentLogicStateVisible = -1;
		me._egg_show_timer.ggUpdateConditionTimer=function () {
			me._egg_show_timer.logicBlock_visible();
		}
		me._egg_show_timer.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._egg_show_timer);
		el=me._start=document.createElement('div');
		el.ggId="start";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._start.ggCurrentLogicStateSize != newLogicStateSize) {
				me._start.ggCurrentLogicStateSize = newLogicStateSize;
				me._start.style[domTransition]='width 0s, height 0s';
				if (me._start.ggCurrentLogicStateSize == 0) {
					me._start.style.width='300px';
					me._start.style.height='150px';
					skin.updateSize(me._start);
				}
				else {
					me._start.style.width='400px';
					me._start.style.height='200px';
					skin.updateSize(me._start);
				}
			}
		}
		me._start.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_start_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start.style[domTransition]='width 0s, height 0s';
				if (me._start.ggCurrentLogicStateVisible == 0) {
					me._start.style.visibility=(Number(me._start.style.opacity)>0||!me._start.style.opacity)?'inherit':'hidden';
					me._start.ggVisible=true;
				}
				else {
					me._start.style.visibility="hidden";
					me._start.ggVisible=false;
				}
			}
		}
		me._start.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._start.appendChild(me._image_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #ffffff;';
		hs+='bottom : 3px;';
		hs+='cursor : default;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 81.5789%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: #000000;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Click and Drag to rotate. Click on any Eggs you might find.";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_2.ggCurrentLogicStateText != newLogicStateText) {
				me._text_2.ggCurrentLogicStateText = newLogicStateText;
				me._text_2.style[domTransition]='';
				if (me._text_2.ggCurrentLogicStateText == 0) {
					me._text_2.ggText="Drag to rotate. Click on any Eggs you might find.";
					me._text_2__text.innerHTML=me._text_2.ggText;
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var hs="Drag to rotate. Click on any Eggs you might find.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
				else {
					me._text_2.ggText="Click and Drag to rotate. Click on any Eggs you might find.";
					me._text_2__text.innerHTML=me._text_2.ggText;
					if (me._text_2.ggUpdateText) {
					me._text_2.ggUpdateText=function() {
						var hs="Click and Drag to rotate. Click on any Eggs you might find.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._text_2.ggUpdatePosition) me._text_2.ggUpdatePosition();
					}
				}
			}
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._text_2);
		me._start.appendChild(me._rectangle_2);
		el=me._ht_start_info_close=document.createElement('div');
		els=me._ht_start_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_start_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_start_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_start_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_start_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_start_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_start_info_close.onclick=function (e) {
			player.setVariableValue('vis_start_popup', false);
			player.setVariableValue('ht_counter_visit', true);
		}
		me._ht_start_info_close.onmouseover=function (e) {
			me._ht_start_info_close__img.style.visibility='hidden';
			me._ht_start_info_close__imgo.style.visibility='inherit';
		}
		me._ht_start_info_close.onmouseout=function (e) {
			me._ht_start_info_close__img.style.visibility='inherit';
			me._ht_start_info_close__imgo.style.visibility='hidden';
		}
		me._ht_start_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._start.appendChild(me._ht_start_info_close);
		me.divSkin.appendChild(me._start);
		el=me._alleggsfound=document.createElement('div');
		el.ggId="AllEggsFound";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 216px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 411px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._alleggsfound.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._alleggsfound.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._alleggsfound.ggCurrentLogicStateSize != newLogicStateSize) {
				me._alleggsfound.ggCurrentLogicStateSize = newLogicStateSize;
				me._alleggsfound.style[domTransition]='width 0s, height 0s';
				if (me._alleggsfound.ggCurrentLogicStateSize == 0) {
					me._alleggsfound.style.width='300px';
					me._alleggsfound.style.height='150px';
					skin.updateSize(me._alleggsfound);
				}
				else {
					me._alleggsfound.style.width='411px';
					me._alleggsfound.style.height='216px';
					skin.updateSize(me._alleggsfound);
				}
			}
		}
		me._alleggsfound.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_total_count') >= 20))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._alleggsfound.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._alleggsfound.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._alleggsfound.style[domTransition]='width 0s, height 0s';
				if (me._alleggsfound.ggCurrentLogicStateVisible == 0) {
					me._alleggsfound.style.visibility=(Number(me._alleggsfound.style.opacity)>0||!me._alleggsfound.style.opacity)?'inherit':'hidden';
					me._alleggsfound.ggVisible=true;
				}
				else {
					me._alleggsfound.style.visibility="hidden";
					me._alleggsfound.ggVisible=false;
				}
			}
		}
		me._alleggsfound.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 216px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 411px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._alleggsfound.appendChild(me._image_3);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='bottom : 13%;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['rectangle_1'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_1.style[domTransition]='background-color 0s';
				if (me._rectangle_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_1.style.backgroundColor="rgba(235,235,235,1)";
				}
				else {
					me._rectangle_1.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_1.onclick=function (e) {
			player.openUrl("https:\/\/www.google.com","_self");
		}
		me._rectangle_1.onmouseover=function (e) {
			me.elementMouseOver['rectangle_1']=true;
			me._rectangle_1.logicBlock_backgroundcolor();
		}
		me._rectangle_1.onmouseout=function (e) {
			me.elementMouseOver['rectangle_1']=false;
			me._rectangle_1.logicBlock_backgroundcolor();
		}
		me._rectangle_1.ontouchend=function (e) {
			me.elementMouseOver['rectangle_1']=false;
			me._rectangle_1.logicBlock_backgroundcolor();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 194px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 194px;';
		hs+='height: 35px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Enter Lucky Draw";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._text_1);
		me._alleggsfound.appendChild(me._rectangle_1);
		el=me._info_alleggtext_body=document.createElement('div');
		els=me._info_alleggtext_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_alleggtext_body";
		el.ggDx=0;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 416px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 416px;';
		hs+='height: 44px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 25px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="You found all the Eggs!";
		el.appendChild(els);
		me._info_alleggtext_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_alleggtext_body.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._alleggsfound.appendChild(me._info_alleggtext_body);
		me.divSkin.appendChild(me._alleggsfound);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information20.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information20.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information20.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information20.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_tooltip.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_1_changenode = function(){
		if(hotspotTemplates['ht_egg_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_1'].length; i++) {
				if (hotspotTemplates['ht_egg_1'][i]._ht_egg_1.logicBlock_visible) {
					hotspotTemplates['ht_egg_1'][i]._ht_egg_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_1_configloaded = function(){
		if(hotspotTemplates['ht_egg_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_1'].length; i++) {
				if (hotspotTemplates['ht_egg_1'][i]._tt_information19.logicBlock_position) {
					hotspotTemplates['ht_egg_1'][i]._tt_information19.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_1_mouseover = function(){
		if(hotspotTemplates['ht_egg_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_1'].length; i++) {
				if (hotspotTemplates['ht_egg_1'][i]._tt_information19.logicBlock_visible) {
					hotspotTemplates['ht_egg_1'][i]._tt_information19.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_1_varchanged_my_count_1 = function(){
		if(hotspotTemplates['ht_egg_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_1'].length; i++) {
				if (hotspotTemplates['ht_egg_1'][i]._ht_egg_1.logicBlock_visible) {
					hotspotTemplates['ht_egg_1'][i]._ht_egg_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_2_changenode = function(){
		if(hotspotTemplates['ht_egg_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_2'].length; i++) {
				if (hotspotTemplates['ht_egg_2'][i]._ht_egg_2.logicBlock_visible) {
					hotspotTemplates['ht_egg_2'][i]._ht_egg_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_2_configloaded = function(){
		if(hotspotTemplates['ht_egg_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_2'].length; i++) {
				if (hotspotTemplates['ht_egg_2'][i]._tt_information18.logicBlock_position) {
					hotspotTemplates['ht_egg_2'][i]._tt_information18.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_2_mouseover = function(){
		if(hotspotTemplates['ht_egg_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_2'].length; i++) {
				if (hotspotTemplates['ht_egg_2'][i]._tt_information18.logicBlock_visible) {
					hotspotTemplates['ht_egg_2'][i]._tt_information18.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_2_varchanged_my_count_2 = function(){
		if(hotspotTemplates['ht_egg_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_2'].length; i++) {
				if (hotspotTemplates['ht_egg_2'][i]._ht_egg_2.logicBlock_visible) {
					hotspotTemplates['ht_egg_2'][i]._ht_egg_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_3_changenode = function(){
		if(hotspotTemplates['ht_egg_3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_3'].length; i++) {
				if (hotspotTemplates['ht_egg_3'][i]._ht_egg_3.logicBlock_visible) {
					hotspotTemplates['ht_egg_3'][i]._ht_egg_3.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_3_configloaded = function(){
		if(hotspotTemplates['ht_egg_3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_3'].length; i++) {
				if (hotspotTemplates['ht_egg_3'][i]._tt_information17.logicBlock_position) {
					hotspotTemplates['ht_egg_3'][i]._tt_information17.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_3_mouseover = function(){
		if(hotspotTemplates['ht_egg_3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_3'].length; i++) {
				if (hotspotTemplates['ht_egg_3'][i]._tt_information17.logicBlock_visible) {
					hotspotTemplates['ht_egg_3'][i]._tt_information17.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_3_varchanged_my_count_3 = function(){
		if(hotspotTemplates['ht_egg_3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_3'].length; i++) {
				if (hotspotTemplates['ht_egg_3'][i]._ht_egg_3.logicBlock_visible) {
					hotspotTemplates['ht_egg_3'][i]._ht_egg_3.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_4_changenode = function(){
		if(hotspotTemplates['ht_egg_4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_4'].length; i++) {
				if (hotspotTemplates['ht_egg_4'][i]._ht_egg_4.logicBlock_visible) {
					hotspotTemplates['ht_egg_4'][i]._ht_egg_4.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_4_configloaded = function(){
		if(hotspotTemplates['ht_egg_4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_4'].length; i++) {
				if (hotspotTemplates['ht_egg_4'][i]._tt_information16.logicBlock_position) {
					hotspotTemplates['ht_egg_4'][i]._tt_information16.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_4_mouseover = function(){
		if(hotspotTemplates['ht_egg_4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_4'].length; i++) {
				if (hotspotTemplates['ht_egg_4'][i]._tt_information16.logicBlock_visible) {
					hotspotTemplates['ht_egg_4'][i]._tt_information16.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_4_varchanged_my_count_4 = function(){
		if(hotspotTemplates['ht_egg_4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_4'].length; i++) {
				if (hotspotTemplates['ht_egg_4'][i]._ht_egg_4.logicBlock_visible) {
					hotspotTemplates['ht_egg_4'][i]._ht_egg_4.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_5_changenode = function(){
		if(hotspotTemplates['ht_egg_5']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_5'].length; i++) {
				if (hotspotTemplates['ht_egg_5'][i]._ht_egg_5.logicBlock_visible) {
					hotspotTemplates['ht_egg_5'][i]._ht_egg_5.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_5_configloaded = function(){
		if(hotspotTemplates['ht_egg_5']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_5'].length; i++) {
				if (hotspotTemplates['ht_egg_5'][i]._tt_information15.logicBlock_position) {
					hotspotTemplates['ht_egg_5'][i]._tt_information15.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_5_mouseover = function(){
		if(hotspotTemplates['ht_egg_5']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_5'].length; i++) {
				if (hotspotTemplates['ht_egg_5'][i]._tt_information15.logicBlock_visible) {
					hotspotTemplates['ht_egg_5'][i]._tt_information15.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_5_varchanged_my_count_5 = function(){
		if(hotspotTemplates['ht_egg_5']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_5'].length; i++) {
				if (hotspotTemplates['ht_egg_5'][i]._ht_egg_5.logicBlock_visible) {
					hotspotTemplates['ht_egg_5'][i]._ht_egg_5.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_6_changenode = function(){
		if(hotspotTemplates['ht_egg_6']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_6'].length; i++) {
				if (hotspotTemplates['ht_egg_6'][i]._ht_egg_6.logicBlock_visible) {
					hotspotTemplates['ht_egg_6'][i]._ht_egg_6.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_6_configloaded = function(){
		if(hotspotTemplates['ht_egg_6']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_6'].length; i++) {
				if (hotspotTemplates['ht_egg_6'][i]._tt_information14.logicBlock_position) {
					hotspotTemplates['ht_egg_6'][i]._tt_information14.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_6_mouseover = function(){
		if(hotspotTemplates['ht_egg_6']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_6'].length; i++) {
				if (hotspotTemplates['ht_egg_6'][i]._tt_information14.logicBlock_visible) {
					hotspotTemplates['ht_egg_6'][i]._tt_information14.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_6_varchanged_my_count_6 = function(){
		if(hotspotTemplates['ht_egg_6']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_6'].length; i++) {
				if (hotspotTemplates['ht_egg_6'][i]._ht_egg_6.logicBlock_visible) {
					hotspotTemplates['ht_egg_6'][i]._ht_egg_6.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_7_changenode = function(){
		if(hotspotTemplates['ht_egg_7']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_7'].length; i++) {
				if (hotspotTemplates['ht_egg_7'][i]._ht_egg_7.logicBlock_visible) {
					hotspotTemplates['ht_egg_7'][i]._ht_egg_7.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_7_configloaded = function(){
		if(hotspotTemplates['ht_egg_7']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_7'].length; i++) {
				if (hotspotTemplates['ht_egg_7'][i]._tt_information13.logicBlock_position) {
					hotspotTemplates['ht_egg_7'][i]._tt_information13.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_7_mouseover = function(){
		if(hotspotTemplates['ht_egg_7']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_7'].length; i++) {
				if (hotspotTemplates['ht_egg_7'][i]._tt_information13.logicBlock_visible) {
					hotspotTemplates['ht_egg_7'][i]._tt_information13.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_7_varchanged_my_count_7 = function(){
		if(hotspotTemplates['ht_egg_7']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_7'].length; i++) {
				if (hotspotTemplates['ht_egg_7'][i]._ht_egg_7.logicBlock_visible) {
					hotspotTemplates['ht_egg_7'][i]._ht_egg_7.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_8_changenode = function(){
		if(hotspotTemplates['ht_egg_8']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_8'].length; i++) {
				if (hotspotTemplates['ht_egg_8'][i]._ht_egg_8.logicBlock_visible) {
					hotspotTemplates['ht_egg_8'][i]._ht_egg_8.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_8_configloaded = function(){
		if(hotspotTemplates['ht_egg_8']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_8'].length; i++) {
				if (hotspotTemplates['ht_egg_8'][i]._tt_information12.logicBlock_position) {
					hotspotTemplates['ht_egg_8'][i]._tt_information12.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_8_mouseover = function(){
		if(hotspotTemplates['ht_egg_8']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_8'].length; i++) {
				if (hotspotTemplates['ht_egg_8'][i]._tt_information12.logicBlock_visible) {
					hotspotTemplates['ht_egg_8'][i]._tt_information12.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_8_varchanged_my_count_8 = function(){
		if(hotspotTemplates['ht_egg_8']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_8'].length; i++) {
				if (hotspotTemplates['ht_egg_8'][i]._ht_egg_8.logicBlock_visible) {
					hotspotTemplates['ht_egg_8'][i]._ht_egg_8.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_9_changenode = function(){
		if(hotspotTemplates['ht_egg_9']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_9'].length; i++) {
				if (hotspotTemplates['ht_egg_9'][i]._ht_egg_9.logicBlock_visible) {
					hotspotTemplates['ht_egg_9'][i]._ht_egg_9.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_9_configloaded = function(){
		if(hotspotTemplates['ht_egg_9']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_9'].length; i++) {
				if (hotspotTemplates['ht_egg_9'][i]._tt_information11.logicBlock_position) {
					hotspotTemplates['ht_egg_9'][i]._tt_information11.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_9_mouseover = function(){
		if(hotspotTemplates['ht_egg_9']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_9'].length; i++) {
				if (hotspotTemplates['ht_egg_9'][i]._tt_information11.logicBlock_visible) {
					hotspotTemplates['ht_egg_9'][i]._tt_information11.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_9_varchanged_my_count_9 = function(){
		if(hotspotTemplates['ht_egg_9']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_9'].length; i++) {
				if (hotspotTemplates['ht_egg_9'][i]._ht_egg_9.logicBlock_visible) {
					hotspotTemplates['ht_egg_9'][i]._ht_egg_9.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_10_changenode = function(){
		if(hotspotTemplates['ht_egg_10']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_10'].length; i++) {
				if (hotspotTemplates['ht_egg_10'][i]._ht_egg_10.logicBlock_visible) {
					hotspotTemplates['ht_egg_10'][i]._ht_egg_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_10_configloaded = function(){
		if(hotspotTemplates['ht_egg_10']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_10'].length; i++) {
				if (hotspotTemplates['ht_egg_10'][i]._tt_information10.logicBlock_position) {
					hotspotTemplates['ht_egg_10'][i]._tt_information10.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_10_mouseover = function(){
		if(hotspotTemplates['ht_egg_10']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_10'].length; i++) {
				if (hotspotTemplates['ht_egg_10'][i]._tt_information10.logicBlock_visible) {
					hotspotTemplates['ht_egg_10'][i]._tt_information10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_10_varchanged_my_count_10 = function(){
		if(hotspotTemplates['ht_egg_10']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_10'].length; i++) {
				if (hotspotTemplates['ht_egg_10'][i]._ht_egg_10.logicBlock_visible) {
					hotspotTemplates['ht_egg_10'][i]._ht_egg_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_11_changenode = function(){
		if(hotspotTemplates['ht_egg_11']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_11'].length; i++) {
				if (hotspotTemplates['ht_egg_11'][i]._ht_egg_11.logicBlock_visible) {
					hotspotTemplates['ht_egg_11'][i]._ht_egg_11.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_11_configloaded = function(){
		if(hotspotTemplates['ht_egg_11']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_11'].length; i++) {
				if (hotspotTemplates['ht_egg_11'][i]._tt_information9.logicBlock_position) {
					hotspotTemplates['ht_egg_11'][i]._tt_information9.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_11_mouseover = function(){
		if(hotspotTemplates['ht_egg_11']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_11'].length; i++) {
				if (hotspotTemplates['ht_egg_11'][i]._tt_information9.logicBlock_visible) {
					hotspotTemplates['ht_egg_11'][i]._tt_information9.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_11_varchanged_my_count_11 = function(){
		if(hotspotTemplates['ht_egg_11']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_11'].length; i++) {
				if (hotspotTemplates['ht_egg_11'][i]._ht_egg_11.logicBlock_visible) {
					hotspotTemplates['ht_egg_11'][i]._ht_egg_11.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_12_changenode = function(){
		if(hotspotTemplates['ht_egg_12']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_12'].length; i++) {
				if (hotspotTemplates['ht_egg_12'][i]._ht_egg_12.logicBlock_visible) {
					hotspotTemplates['ht_egg_12'][i]._ht_egg_12.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_12_configloaded = function(){
		if(hotspotTemplates['ht_egg_12']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_12'].length; i++) {
				if (hotspotTemplates['ht_egg_12'][i]._tt_information8.logicBlock_position) {
					hotspotTemplates['ht_egg_12'][i]._tt_information8.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_12_mouseover = function(){
		if(hotspotTemplates['ht_egg_12']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_12'].length; i++) {
				if (hotspotTemplates['ht_egg_12'][i]._tt_information8.logicBlock_visible) {
					hotspotTemplates['ht_egg_12'][i]._tt_information8.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_12_varchanged_my_count_12 = function(){
		if(hotspotTemplates['ht_egg_12']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_12'].length; i++) {
				if (hotspotTemplates['ht_egg_12'][i]._ht_egg_12.logicBlock_visible) {
					hotspotTemplates['ht_egg_12'][i]._ht_egg_12.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_13_changenode = function(){
		if(hotspotTemplates['ht_egg_13']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_13'].length; i++) {
				if (hotspotTemplates['ht_egg_13'][i]._ht_egg_13.logicBlock_visible) {
					hotspotTemplates['ht_egg_13'][i]._ht_egg_13.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_13_configloaded = function(){
		if(hotspotTemplates['ht_egg_13']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_13'].length; i++) {
				if (hotspotTemplates['ht_egg_13'][i]._tt_information7.logicBlock_position) {
					hotspotTemplates['ht_egg_13'][i]._tt_information7.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_13_mouseover = function(){
		if(hotspotTemplates['ht_egg_13']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_13'].length; i++) {
				if (hotspotTemplates['ht_egg_13'][i]._tt_information7.logicBlock_visible) {
					hotspotTemplates['ht_egg_13'][i]._tt_information7.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_13_varchanged_my_count_13 = function(){
		if(hotspotTemplates['ht_egg_13']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_13'].length; i++) {
				if (hotspotTemplates['ht_egg_13'][i]._ht_egg_13.logicBlock_visible) {
					hotspotTemplates['ht_egg_13'][i]._ht_egg_13.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_14_changenode = function(){
		if(hotspotTemplates['ht_egg_14']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_14'].length; i++) {
				if (hotspotTemplates['ht_egg_14'][i]._ht_egg_14.logicBlock_visible) {
					hotspotTemplates['ht_egg_14'][i]._ht_egg_14.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_14_configloaded = function(){
		if(hotspotTemplates['ht_egg_14']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_14'].length; i++) {
				if (hotspotTemplates['ht_egg_14'][i]._tt_information6.logicBlock_position) {
					hotspotTemplates['ht_egg_14'][i]._tt_information6.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_14_mouseover = function(){
		if(hotspotTemplates['ht_egg_14']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_14'].length; i++) {
				if (hotspotTemplates['ht_egg_14'][i]._tt_information6.logicBlock_visible) {
					hotspotTemplates['ht_egg_14'][i]._tt_information6.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_14_varchanged_my_count_14 = function(){
		if(hotspotTemplates['ht_egg_14']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_14'].length; i++) {
				if (hotspotTemplates['ht_egg_14'][i]._ht_egg_14.logicBlock_visible) {
					hotspotTemplates['ht_egg_14'][i]._ht_egg_14.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_15_changenode = function(){
		if(hotspotTemplates['ht_egg_15']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_15'].length; i++) {
				if (hotspotTemplates['ht_egg_15'][i]._ht_egg_15.logicBlock_visible) {
					hotspotTemplates['ht_egg_15'][i]._ht_egg_15.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_15_configloaded = function(){
		if(hotspotTemplates['ht_egg_15']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_15'].length; i++) {
				if (hotspotTemplates['ht_egg_15'][i]._tt_information5.logicBlock_position) {
					hotspotTemplates['ht_egg_15'][i]._tt_information5.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_15_mouseover = function(){
		if(hotspotTemplates['ht_egg_15']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_15'].length; i++) {
				if (hotspotTemplates['ht_egg_15'][i]._tt_information5.logicBlock_visible) {
					hotspotTemplates['ht_egg_15'][i]._tt_information5.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_15_varchanged_my_count_15 = function(){
		if(hotspotTemplates['ht_egg_15']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_15'].length; i++) {
				if (hotspotTemplates['ht_egg_15'][i]._ht_egg_15.logicBlock_visible) {
					hotspotTemplates['ht_egg_15'][i]._ht_egg_15.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_16_changenode = function(){
		if(hotspotTemplates['ht_egg_16']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_16'].length; i++) {
				if (hotspotTemplates['ht_egg_16'][i]._ht_egg_16.logicBlock_visible) {
					hotspotTemplates['ht_egg_16'][i]._ht_egg_16.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_16_configloaded = function(){
		if(hotspotTemplates['ht_egg_16']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_16'].length; i++) {
				if (hotspotTemplates['ht_egg_16'][i]._tt_information4.logicBlock_position) {
					hotspotTemplates['ht_egg_16'][i]._tt_information4.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_16_mouseover = function(){
		if(hotspotTemplates['ht_egg_16']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_16'].length; i++) {
				if (hotspotTemplates['ht_egg_16'][i]._tt_information4.logicBlock_visible) {
					hotspotTemplates['ht_egg_16'][i]._tt_information4.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_16_varchanged_my_count_16 = function(){
		if(hotspotTemplates['ht_egg_16']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_16'].length; i++) {
				if (hotspotTemplates['ht_egg_16'][i]._ht_egg_16.logicBlock_visible) {
					hotspotTemplates['ht_egg_16'][i]._ht_egg_16.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_17_changenode = function(){
		if(hotspotTemplates['ht_egg_17']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_17'].length; i++) {
				if (hotspotTemplates['ht_egg_17'][i]._ht_egg_17.logicBlock_visible) {
					hotspotTemplates['ht_egg_17'][i]._ht_egg_17.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_17_configloaded = function(){
		if(hotspotTemplates['ht_egg_17']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_17'].length; i++) {
				if (hotspotTemplates['ht_egg_17'][i]._tt_information3.logicBlock_position) {
					hotspotTemplates['ht_egg_17'][i]._tt_information3.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_17_mouseover = function(){
		if(hotspotTemplates['ht_egg_17']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_17'].length; i++) {
				if (hotspotTemplates['ht_egg_17'][i]._tt_information3.logicBlock_visible) {
					hotspotTemplates['ht_egg_17'][i]._tt_information3.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_17_varchanged_my_count_17 = function(){
		if(hotspotTemplates['ht_egg_17']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_17'].length; i++) {
				if (hotspotTemplates['ht_egg_17'][i]._ht_egg_17.logicBlock_visible) {
					hotspotTemplates['ht_egg_17'][i]._ht_egg_17.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_18_changenode = function(){
		if(hotspotTemplates['ht_egg_18']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_18'].length; i++) {
				if (hotspotTemplates['ht_egg_18'][i]._ht_egg_18.logicBlock_visible) {
					hotspotTemplates['ht_egg_18'][i]._ht_egg_18.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_18_configloaded = function(){
		if(hotspotTemplates['ht_egg_18']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_18'].length; i++) {
				if (hotspotTemplates['ht_egg_18'][i]._tt_information2.logicBlock_position) {
					hotspotTemplates['ht_egg_18'][i]._tt_information2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_18_mouseover = function(){
		if(hotspotTemplates['ht_egg_18']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_18'].length; i++) {
				if (hotspotTemplates['ht_egg_18'][i]._tt_information2.logicBlock_visible) {
					hotspotTemplates['ht_egg_18'][i]._tt_information2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_18_varchanged_my_count_18 = function(){
		if(hotspotTemplates['ht_egg_18']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_18'].length; i++) {
				if (hotspotTemplates['ht_egg_18'][i]._ht_egg_18.logicBlock_visible) {
					hotspotTemplates['ht_egg_18'][i]._ht_egg_18.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_19_changenode = function(){
		if(hotspotTemplates['ht_egg_19']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_19'].length; i++) {
				if (hotspotTemplates['ht_egg_19'][i]._ht_egg_19.logicBlock_visible) {
					hotspotTemplates['ht_egg_19'][i]._ht_egg_19.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_19_configloaded = function(){
		if(hotspotTemplates['ht_egg_19']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_19'].length; i++) {
				if (hotspotTemplates['ht_egg_19'][i]._tt_information1.logicBlock_position) {
					hotspotTemplates['ht_egg_19'][i]._tt_information1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_19_mouseover = function(){
		if(hotspotTemplates['ht_egg_19']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_19'].length; i++) {
				if (hotspotTemplates['ht_egg_19'][i]._tt_information1.logicBlock_visible) {
					hotspotTemplates['ht_egg_19'][i]._tt_information1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_19_varchanged_my_count_19 = function(){
		if(hotspotTemplates['ht_egg_19']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_19'].length; i++) {
				if (hotspotTemplates['ht_egg_19'][i]._ht_egg_19.logicBlock_visible) {
					hotspotTemplates['ht_egg_19'][i]._ht_egg_19.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_20_changenode = function(){
		if(hotspotTemplates['ht_egg_20']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_20'].length; i++) {
				if (hotspotTemplates['ht_egg_20'][i]._ht_egg_20.logicBlock_visible) {
					hotspotTemplates['ht_egg_20'][i]._ht_egg_20.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_20_configloaded = function(){
		if(hotspotTemplates['ht_egg_20']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_20'].length; i++) {
				if (hotspotTemplates['ht_egg_20'][i]._tt_information0.logicBlock_position) {
					hotspotTemplates['ht_egg_20'][i]._tt_information0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_20_mouseover = function(){
		if(hotspotTemplates['ht_egg_20']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_20'].length; i++) {
				if (hotspotTemplates['ht_egg_20'][i]._tt_information0.logicBlock_visible) {
					hotspotTemplates['ht_egg_20'][i]._tt_information0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_20_varchanged_my_count_20 = function(){
		if(hotspotTemplates['ht_egg_20']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_20'].length; i++) {
				if (hotspotTemplates['ht_egg_20'][i]._ht_egg_20.logicBlock_visible) {
					hotspotTemplates['ht_egg_20'][i]._ht_egg_20.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_special_changenode = function(){
		if(hotspotTemplates['ht_egg_special']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_special'].length; i++) {
				if (hotspotTemplates['ht_egg_special'][i]._ht_egg_special.logicBlock_visible) {
					hotspotTemplates['ht_egg_special'][i]._ht_egg_special.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_special_configloaded = function(){
		if(hotspotTemplates['ht_egg_special']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_special'].length; i++) {
				if (hotspotTemplates['ht_egg_special'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_egg_special'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_special_mouseover = function(){
		if(hotspotTemplates['ht_egg_special']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_special'].length; i++) {
				if (hotspotTemplates['ht_egg_special'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_egg_special'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_egg_special_varchanged_my_count_special = function(){
		if(hotspotTemplates['ht_egg_special']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_special'].length; i++) {
				if (hotspotTemplates['ht_egg_special'][i]._ht_egg_special.logicBlock_visible) {
					hotspotTemplates['ht_egg_special'][i]._ht_egg_special.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._egg_show_timer.ggLastIsActive!=me._egg_show_timer.ggIsActive()) {
			me._egg_show_timer.ggLastIsActive=me._egg_show_timer.ggIsActive();
			if (me._egg_show_timer.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_egg_popup', false);
			}
		}
		me._egg_show_timer.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 319px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			player.stopAutorotate();
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information20.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information20.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information20.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image20=document.createElement('div');
		els=me._ht_info_image20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1NCw4'+
			'Ljg1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMS4zMTMsNy4wMj'+
			'IsMTguNzk1LDUuODkzLDE2LDUuODkybDAsMEMxMy4yMDUsNS44OTMsMTAuNjg2LDcuMDIyLDguODU0LDguODUzTDguODU0LDguODUzeiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTE0Ljk2MywxMC4wNVY5LjUyMWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk3LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzYsMS4xOTYsMS4xOTZsMCwwdjAuNTI5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8'+
			'cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2MS0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMi4yMjZjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDEuMDMxdjUuMzc5aC0xLjIwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNi'+
			'wxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxnPgogICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUsMTYsMy41bDAsMGM2LjkwMywwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0w'+
			'LjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bD'+
			'AsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYxLTAuNTM2LDEuMTk2'+
			'LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS'+
			'4yMDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoNC43NzVjMC42NiwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image20__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image20__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMn'+
			'B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB5PSIwcHgiIHdpZHRoPSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBvcGFjaXR5PSIwLjQiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEy'+
			'LjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMz'+
			'E0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4y'+
			'NDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8Zz4K'+
			'ICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAuMDAxLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMGMxLjgzMiwxLjgzMSw0LjM1MiwyLj'+
			'k2LDcuMTQ2LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEs'+
			'MC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2MS0wLjUzNiwxLjE5Ni0xLjE5NiwxLjE5NmwwLDBDMTUuNSwxMS4yNDcsMTQuOTYzLDEwLjcxMSwxNC45NjMsMTAuMDVMMTQuOTYzLDEwLjA1eiIvPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0xOC41MzIsMjAuMzkxaC0xLjE3NnYtNi40NzNjMC0wLjAyMS0wLjAwNS0wLjA0Mi0wLjAwNi0wLjA2M2MwLTAuMDE0LDAuMDA0LTAuMDI2LDAuMDA0LTAuMDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsmI3g5O2'+
			'MwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyYjeDk7QzE5LjcyOSwyMC45MjYsMTkuMTkyLDIwLjM5MSwxOC41MzIsMjAuMzkxeiIv'+
			'PgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image20__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image20.onmouseover=function (e) {
			me._ht_info_image20__img.style.visibility='hidden';
			me._ht_info_image20__imgo.style.visibility='inherit';
		}
		me._ht_info_image20.onmouseout=function (e) {
			me._ht_info_image20__img.style.visibility='inherit';
			me._ht_info_image20__imgo.style.visibility='hidden';
		}
		me._ht_info_image20.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image20);
		el=me._tt_information20=document.createElement('div');
		els=me._tt_information20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information20.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information20.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information20.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information20.style[domTransition]='left 0s, top 0s';
				if (me._tt_information20.ggCurrentLogicStatePosition == 0) {
					me._tt_information20.style.left='-50px';
					me._tt_information20.style.top='-47px';
				}
				else {
					me._tt_information20.style.left='-50px';
					me._tt_information20.style.top='21px';
				}
			}
		}
		me._tt_information20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information20.style[domTransition]='left 0s, top 0s';
				if (me._tt_information20.ggCurrentLogicStateVisible == 0) {
					me._tt_information20.style.visibility=(Number(me._tt_information20.style.opacity)>0||!me._tt_information20.style.opacity)?'inherit':'hidden';
					me._tt_information20.ggVisible=true;
				}
				else {
					me._tt_information20.style.visibility="hidden";
					me._tt_information20.ggVisible=false;
				}
			}
		}
		me._tt_information20.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information20);
		el=me._checkmark_tick_3=document.createElement('div');
		els=me._checkmark_tick_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgdmlld0JveD0iLTM3MjIgLTI2MDYgMzIgMzIiIHhtbG5zOng9Imh0dHA6Ly9ucy'+
			'5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB3aWR0aD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSIgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0'+
			'0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40'+
			'NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLj'+
			'E5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk1LjQ3'+
			'My0yNTk4LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNj'+
			'k0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5'+
			'OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : -29px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick_3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._checkmark_tick_3);
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage=document.createElement('div');
		els=me._hsimage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgdmlld0JveD0iMCAwIDQ2OS4zMzMgNDY5LjMzMyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeD0iMHB4IiBoZWlnaHQ9IjUxMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIHk9IjBweCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY5LjMzMyA0NjkuMzMzOyIgY2xhc3M9IiIgd2lkdGg9IjUxMnB4Ij4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxnPgogICAgIDxwYXRoIGZpbGw9IiNGRkZGRk'+
			'YiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBkPSJNMjM0LjY2NywxNzAuNjY3Yy0zNS4zMDcsMC02NCwyOC42OTMtNjQsNjRzMjguNjkzLDY0LDY0LDY0czY0LTI4LjY5Myw2NC02NFMyNjkuOTczLDE3MC42NjcsMjM0LjY2NywxNzAuNjY3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIi8+CiAgICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGQ9Ik0yMzQuNjY3LDc0LjY2N0MxMjgsNzQuNjY3LDM2LjkwNywxNDEuMDEzLDAsMjM0LjY2N2MzNi45MDcsOTMuNjUzLDEyOCwxNjAsMjM0LjY2NywxNjAgICAgIGMxMDYuNzcz'+
			'LDAsMTk3Ljc2LTY2LjM0NywyMzQuNjY3LTE2MEM0MzIuNDI3LDE0MS4wMTMsMzQxLjQ0LDc0LjY2NywyMzQuNjY3LDc0LjY2N3ogTTIzNC42NjcsMzQxLjMzMyAgICAgYy01OC44OCwwLTEwNi42NjctNDcuNzg3LTEwNi42NjctMTA2LjY2N1MxNzUuNzg3LDEyOCwyMzQuNjY3LDEyOHMxMDYuNjY3LDQ3Ljc4NywxMDYuNjY3LDEwNi42NjcgICAgIFMyOTMuNTQ3LDM0MS4zMzMsMjM0LjY2NywzNDEuMzMzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIi8+CiAgICA8L2c+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._hsimage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hsimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hsimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hsimage.style[domTransition]='';
				if (me._hsimage.ggCurrentLogicStateVisible == 0) {
					me._hsimage.style.visibility="hidden";
					me._hsimage.ggVisible=false;
				}
				else {
					me._hsimage.style.visibility=(Number(me._hsimage.style.opacity)>0||!me._hsimage.style.opacity)?'inherit':'hidden';
					me._hsimage.ggVisible=true;
				}
			}
		}
		me._hsimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._hsimage);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 103px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._preview_picture_frame_=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 99px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._preview_picture_frame_);
		el=me._preview_nodeimage=document.createElement('div');
		els=me._preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style[domTransition]='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB3aWR0aD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSIgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0'+
			'0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40'+
			'NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLj'+
			'E5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk1LjQ3'+
			'My0yNTk4LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNj'+
			'k0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5'+
			'OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		me._ht_node.appendChild(me._hotspot_preview);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-50px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=0;
					me._tt_ht_node.style.top='22px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_node);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_egg_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_1=document.createElement('div');
		el.ggId="ht_egg_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_1') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_1.style[domTransition]='';
				if (me._ht_egg_1.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_1.style.visibility="hidden";
					me._ht_egg_1.ggVisible=false;
				}
				else {
					me._ht_egg_1.style.visibility=(Number(me._ht_egg_1.style.opacity)>0||!me._ht_egg_1.style.opacity)?'inherit':'hidden';
					me._ht_egg_1.ggVisible=true;
				}
			}
		}
		me._ht_egg_1.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_1') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_1') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_1') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_1') == 0))
				)
			) {
				player.setVariableValue('my_count_1', player.getVariableValue('my_count_1') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_1']=true;
			me._tt_information19.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_1']=false;
			me._tt_information19.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_1.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_1']=false;
			me._tt_information19.logicBlock_visible();
		}
		me._ht_egg_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image19=document.createElement('div');
		els=me._ht_info_image19__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image19__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image19__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image19__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image19.onmouseover=function (e) {
			me._ht_info_image19__img.style.visibility='hidden';
			me._ht_info_image19__imgo.style.visibility='inherit';
		}
		me._ht_info_image19.onmouseout=function (e) {
			me._ht_info_image19__img.style.visibility='inherit';
			me._ht_info_image19__imgo.style.visibility='hidden';
		}
		me._ht_info_image19.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_1.appendChild(me._ht_info_image19);
		el=me._tt_information19=document.createElement('div');
		els=me._tt_information19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information19.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information19.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information19.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information19.style[domTransition]='left 0s, top 0s';
				if (me._tt_information19.ggCurrentLogicStatePosition == 0) {
					me._tt_information19.style.left='-50px';
					me._tt_information19.style.top='-47px';
				}
				else {
					me._tt_information19.style.left='-50px';
					me._tt_information19.style.top='21px';
				}
			}
		}
		me._tt_information19.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information19.style[domTransition]='left 0s, top 0s';
				if (me._tt_information19.ggCurrentLogicStateVisible == 0) {
					me._tt_information19.style.visibility=(Number(me._tt_information19.style.opacity)>0||!me._tt_information19.style.opacity)?'inherit':'hidden';
					me._tt_information19.ggVisible=true;
				}
				else {
					me._tt_information19.style.visibility="hidden";
					me._tt_information19.ggVisible=false;
				}
			}
		}
		me._tt_information19.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_1.appendChild(me._tt_information19);
		me.__div = me._ht_egg_1;
	};
	function SkinHotspotClass_ht_egg_2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_2=document.createElement('div');
		el.ggId="ht_egg_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_2') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_2.style[domTransition]='';
				if (me._ht_egg_2.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_2.style.visibility="hidden";
					me._ht_egg_2.ggVisible=false;
				}
				else {
					me._ht_egg_2.style.visibility=(Number(me._ht_egg_2.style.opacity)>0||!me._ht_egg_2.style.opacity)?'inherit':'hidden';
					me._ht_egg_2.ggVisible=true;
				}
			}
		}
		me._ht_egg_2.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_2') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_2') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_2') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_2') == 0))
				)
			) {
				player.setVariableValue('my_count_2', player.getVariableValue('my_count_2') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_2']=true;
			me._tt_information18.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_2']=false;
			me._tt_information18.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_2.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_2']=false;
			me._tt_information18.logicBlock_visible();
		}
		me._ht_egg_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image18=document.createElement('div');
		els=me._ht_info_image18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image18__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image18__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image18__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image18.onmouseover=function (e) {
			me._ht_info_image18__img.style.visibility='hidden';
			me._ht_info_image18__imgo.style.visibility='inherit';
		}
		me._ht_info_image18.onmouseout=function (e) {
			me._ht_info_image18__img.style.visibility='inherit';
			me._ht_info_image18__imgo.style.visibility='hidden';
		}
		me._ht_info_image18.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_2.appendChild(me._ht_info_image18);
		el=me._tt_information18=document.createElement('div');
		els=me._tt_information18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information18.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information18.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information18.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information18.style[domTransition]='left 0s, top 0s';
				if (me._tt_information18.ggCurrentLogicStatePosition == 0) {
					me._tt_information18.style.left='-50px';
					me._tt_information18.style.top='-47px';
				}
				else {
					me._tt_information18.style.left='-50px';
					me._tt_information18.style.top='21px';
				}
			}
		}
		me._tt_information18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information18.style[domTransition]='left 0s, top 0s';
				if (me._tt_information18.ggCurrentLogicStateVisible == 0) {
					me._tt_information18.style.visibility=(Number(me._tt_information18.style.opacity)>0||!me._tt_information18.style.opacity)?'inherit':'hidden';
					me._tt_information18.ggVisible=true;
				}
				else {
					me._tt_information18.style.visibility="hidden";
					me._tt_information18.ggVisible=false;
				}
			}
		}
		me._tt_information18.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_2.appendChild(me._tt_information18);
		me.__div = me._ht_egg_2;
	};
	function SkinHotspotClass_ht_egg_3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_3=document.createElement('div');
		el.ggId="ht_egg_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_3') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_3.style[domTransition]='';
				if (me._ht_egg_3.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_3.style.visibility="hidden";
					me._ht_egg_3.ggVisible=false;
				}
				else {
					me._ht_egg_3.style.visibility=(Number(me._ht_egg_3.style.opacity)>0||!me._ht_egg_3.style.opacity)?'inherit':'hidden';
					me._ht_egg_3.ggVisible=true;
				}
			}
		}
		me._ht_egg_3.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_3') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_3') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_3') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_3') == 0))
				)
			) {
				player.setVariableValue('my_count_3', player.getVariableValue('my_count_3') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_3.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_3']=true;
			me._tt_information17.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_3']=false;
			me._tt_information17.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_3.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_3']=false;
			me._tt_information17.logicBlock_visible();
		}
		me._ht_egg_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image17=document.createElement('div');
		els=me._ht_info_image17__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image17__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image17__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image17__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image17.onmouseover=function (e) {
			me._ht_info_image17__img.style.visibility='hidden';
			me._ht_info_image17__imgo.style.visibility='inherit';
		}
		me._ht_info_image17.onmouseout=function (e) {
			me._ht_info_image17__img.style.visibility='inherit';
			me._ht_info_image17__imgo.style.visibility='hidden';
		}
		me._ht_info_image17.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_3.appendChild(me._ht_info_image17);
		el=me._tt_information17=document.createElement('div');
		els=me._tt_information17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information17.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information17.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information17.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information17.style[domTransition]='left 0s, top 0s';
				if (me._tt_information17.ggCurrentLogicStatePosition == 0) {
					me._tt_information17.style.left='-50px';
					me._tt_information17.style.top='-47px';
				}
				else {
					me._tt_information17.style.left='-50px';
					me._tt_information17.style.top='21px';
				}
			}
		}
		me._tt_information17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_3'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information17.style[domTransition]='left 0s, top 0s';
				if (me._tt_information17.ggCurrentLogicStateVisible == 0) {
					me._tt_information17.style.visibility=(Number(me._tt_information17.style.opacity)>0||!me._tt_information17.style.opacity)?'inherit':'hidden';
					me._tt_information17.ggVisible=true;
				}
				else {
					me._tt_information17.style.visibility="hidden";
					me._tt_information17.ggVisible=false;
				}
			}
		}
		me._tt_information17.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_3.appendChild(me._tt_information17);
		me.__div = me._ht_egg_3;
	};
	function SkinHotspotClass_ht_egg_4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_4=document.createElement('div');
		el.ggId="ht_egg_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_4') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_4.style[domTransition]='';
				if (me._ht_egg_4.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_4.style.visibility="hidden";
					me._ht_egg_4.ggVisible=false;
				}
				else {
					me._ht_egg_4.style.visibility=(Number(me._ht_egg_4.style.opacity)>0||!me._ht_egg_4.style.opacity)?'inherit':'hidden';
					me._ht_egg_4.ggVisible=true;
				}
			}
		}
		me._ht_egg_4.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_4') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_4') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_4') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_4') == 0))
				)
			) {
				player.setVariableValue('my_count_4', player.getVariableValue('my_count_4') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_4.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_4']=true;
			me._tt_information16.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_4']=false;
			me._tt_information16.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_4.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_4']=false;
			me._tt_information16.logicBlock_visible();
		}
		me._ht_egg_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image16=document.createElement('div');
		els=me._ht_info_image16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_info_image16__img.setAttribute('src',basePath + 'images/ht_info_image16.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image16__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ht_info_image16__imgo.setAttribute('src',basePath + 'images/ht_info_image16__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image16.onmouseover=function (e) {
			me._ht_info_image16__img.style.visibility='hidden';
			me._ht_info_image16__imgo.style.visibility='inherit';
		}
		me._ht_info_image16.onmouseout=function (e) {
			me._ht_info_image16__img.style.visibility='inherit';
			me._ht_info_image16__imgo.style.visibility='hidden';
		}
		me._ht_info_image16.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_4.appendChild(me._ht_info_image16);
		el=me._tt_information16=document.createElement('div');
		els=me._tt_information16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information16.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information16.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information16.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information16.style[domTransition]='left 0s, top 0s';
				if (me._tt_information16.ggCurrentLogicStatePosition == 0) {
					me._tt_information16.style.left='-50px';
					me._tt_information16.style.top='-47px';
				}
				else {
					me._tt_information16.style.left='-50px';
					me._tt_information16.style.top='21px';
				}
			}
		}
		me._tt_information16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_4'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information16.style[domTransition]='left 0s, top 0s';
				if (me._tt_information16.ggCurrentLogicStateVisible == 0) {
					me._tt_information16.style.visibility=(Number(me._tt_information16.style.opacity)>0||!me._tt_information16.style.opacity)?'inherit':'hidden';
					me._tt_information16.ggVisible=true;
				}
				else {
					me._tt_information16.style.visibility="hidden";
					me._tt_information16.ggVisible=false;
				}
			}
		}
		me._tt_information16.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_4.appendChild(me._tt_information16);
		me.__div = me._ht_egg_4;
	};
	function SkinHotspotClass_ht_egg_5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_5=document.createElement('div');
		el.ggId="ht_egg_5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_5') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_5.style[domTransition]='';
				if (me._ht_egg_5.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_5.style.visibility="hidden";
					me._ht_egg_5.ggVisible=false;
				}
				else {
					me._ht_egg_5.style.visibility=(Number(me._ht_egg_5.style.opacity)>0||!me._ht_egg_5.style.opacity)?'inherit':'hidden';
					me._ht_egg_5.ggVisible=true;
				}
			}
		}
		me._ht_egg_5.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_5') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_5') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_5') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_5') == 0))
				)
			) {
				player.setVariableValue('my_count_5', player.getVariableValue('my_count_5') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_5.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_5.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_5']=true;
			me._tt_information15.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_5.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_5']=false;
			me._tt_information15.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_5.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_5']=false;
			me._tt_information15.logicBlock_visible();
		}
		me._ht_egg_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image15=document.createElement('div');
		els=me._ht_info_image15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image15__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image15__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image15__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image15.onmouseover=function (e) {
			me._ht_info_image15__img.style.visibility='hidden';
			me._ht_info_image15__imgo.style.visibility='inherit';
		}
		me._ht_info_image15.onmouseout=function (e) {
			me._ht_info_image15__img.style.visibility='inherit';
			me._ht_info_image15__imgo.style.visibility='hidden';
		}
		me._ht_info_image15.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_5.appendChild(me._ht_info_image15);
		el=me._tt_information15=document.createElement('div');
		els=me._tt_information15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information15.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information15.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information15.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information15.style[domTransition]='left 0s, top 0s';
				if (me._tt_information15.ggCurrentLogicStatePosition == 0) {
					me._tt_information15.style.left='-50px';
					me._tt_information15.style.top='-47px';
				}
				else {
					me._tt_information15.style.left='-50px';
					me._tt_information15.style.top='21px';
				}
			}
		}
		me._tt_information15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_5'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information15.style[domTransition]='left 0s, top 0s';
				if (me._tt_information15.ggCurrentLogicStateVisible == 0) {
					me._tt_information15.style.visibility=(Number(me._tt_information15.style.opacity)>0||!me._tt_information15.style.opacity)?'inherit':'hidden';
					me._tt_information15.ggVisible=true;
				}
				else {
					me._tt_information15.style.visibility="hidden";
					me._tt_information15.ggVisible=false;
				}
			}
		}
		me._tt_information15.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_5.appendChild(me._tt_information15);
		me.__div = me._ht_egg_5;
	};
	function SkinHotspotClass_ht_egg_6(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_6=document.createElement('div');
		el.ggId="ht_egg_6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_6') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_6.style[domTransition]='';
				if (me._ht_egg_6.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_6.style.visibility="hidden";
					me._ht_egg_6.ggVisible=false;
				}
				else {
					me._ht_egg_6.style.visibility=(Number(me._ht_egg_6.style.opacity)>0||!me._ht_egg_6.style.opacity)?'inherit':'hidden';
					me._ht_egg_6.ggVisible=true;
				}
			}
		}
		me._ht_egg_6.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_6') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_6') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_6') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_6') == 0))
				)
			) {
				player.setVariableValue('my_count_6', player.getVariableValue('my_count_6') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_6.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_6.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_6']=true;
			me._tt_information14.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_6.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_6']=false;
			me._tt_information14.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_6.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_6']=false;
			me._tt_information14.logicBlock_visible();
		}
		me._ht_egg_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image14=document.createElement('div');
		els=me._ht_info_image14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image14__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image14__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image14__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image14.onmouseover=function (e) {
			me._ht_info_image14__img.style.visibility='hidden';
			me._ht_info_image14__imgo.style.visibility='inherit';
		}
		me._ht_info_image14.onmouseout=function (e) {
			me._ht_info_image14__img.style.visibility='inherit';
			me._ht_info_image14__imgo.style.visibility='hidden';
		}
		me._ht_info_image14.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_6.appendChild(me._ht_info_image14);
		el=me._tt_information14=document.createElement('div');
		els=me._tt_information14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information14.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information14.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information14.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information14.style[domTransition]='left 0s, top 0s';
				if (me._tt_information14.ggCurrentLogicStatePosition == 0) {
					me._tt_information14.style.left='-50px';
					me._tt_information14.style.top='-47px';
				}
				else {
					me._tt_information14.style.left='-50px';
					me._tt_information14.style.top='21px';
				}
			}
		}
		me._tt_information14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_6'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information14.style[domTransition]='left 0s, top 0s';
				if (me._tt_information14.ggCurrentLogicStateVisible == 0) {
					me._tt_information14.style.visibility=(Number(me._tt_information14.style.opacity)>0||!me._tt_information14.style.opacity)?'inherit':'hidden';
					me._tt_information14.ggVisible=true;
				}
				else {
					me._tt_information14.style.visibility="hidden";
					me._tt_information14.ggVisible=false;
				}
			}
		}
		me._tt_information14.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_6.appendChild(me._tt_information14);
		me.__div = me._ht_egg_6;
	};
	function SkinHotspotClass_ht_egg_7(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_7=document.createElement('div');
		el.ggId="ht_egg_7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_7') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_7.style[domTransition]='';
				if (me._ht_egg_7.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_7.style.visibility="hidden";
					me._ht_egg_7.ggVisible=false;
				}
				else {
					me._ht_egg_7.style.visibility=(Number(me._ht_egg_7.style.opacity)>0||!me._ht_egg_7.style.opacity)?'inherit':'hidden';
					me._ht_egg_7.ggVisible=true;
				}
			}
		}
		me._ht_egg_7.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_7') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_7') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_7') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_7') == 0))
				)
			) {
				player.setVariableValue('my_count_7', player.getVariableValue('my_count_7') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_7.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_7.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_7']=true;
			me._tt_information13.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_7.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_7']=false;
			me._tt_information13.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_7.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_7']=false;
			me._tt_information13.logicBlock_visible();
		}
		me._ht_egg_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image13=document.createElement('div');
		els=me._ht_info_image13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image13__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image13__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image13__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image13.onmouseover=function (e) {
			me._ht_info_image13__img.style.visibility='hidden';
			me._ht_info_image13__imgo.style.visibility='inherit';
		}
		me._ht_info_image13.onmouseout=function (e) {
			me._ht_info_image13__img.style.visibility='inherit';
			me._ht_info_image13__imgo.style.visibility='hidden';
		}
		me._ht_info_image13.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_7.appendChild(me._ht_info_image13);
		el=me._tt_information13=document.createElement('div');
		els=me._tt_information13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information13.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information13.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information13.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information13.style[domTransition]='left 0s, top 0s';
				if (me._tt_information13.ggCurrentLogicStatePosition == 0) {
					me._tt_information13.style.left='-50px';
					me._tt_information13.style.top='-47px';
				}
				else {
					me._tt_information13.style.left='-50px';
					me._tt_information13.style.top='21px';
				}
			}
		}
		me._tt_information13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_7'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information13.style[domTransition]='left 0s, top 0s';
				if (me._tt_information13.ggCurrentLogicStateVisible == 0) {
					me._tt_information13.style.visibility=(Number(me._tt_information13.style.opacity)>0||!me._tt_information13.style.opacity)?'inherit':'hidden';
					me._tt_information13.ggVisible=true;
				}
				else {
					me._tt_information13.style.visibility="hidden";
					me._tt_information13.ggVisible=false;
				}
			}
		}
		me._tt_information13.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_7.appendChild(me._tt_information13);
		me.__div = me._ht_egg_7;
	};
	function SkinHotspotClass_ht_egg_8(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_8=document.createElement('div');
		el.ggId="ht_egg_8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_8.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_8') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_8.style[domTransition]='';
				if (me._ht_egg_8.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_8.style.visibility="hidden";
					me._ht_egg_8.ggVisible=false;
				}
				else {
					me._ht_egg_8.style.visibility=(Number(me._ht_egg_8.style.opacity)>0||!me._ht_egg_8.style.opacity)?'inherit':'hidden';
					me._ht_egg_8.ggVisible=true;
				}
			}
		}
		me._ht_egg_8.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_8') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_8') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_8') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_8') == 0))
				)
			) {
				player.setVariableValue('my_count_8', player.getVariableValue('my_count_8') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_8.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_8.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_8']=true;
			me._tt_information12.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_8.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_8']=false;
			me._tt_information12.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_8.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_8']=false;
			me._tt_information12.logicBlock_visible();
		}
		me._ht_egg_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image12=document.createElement('div');
		els=me._ht_info_image12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_info_image12__img.setAttribute('src',basePath + 'images/ht_info_image12.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image12__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ht_info_image12__imgo.setAttribute('src',basePath + 'images/ht_info_image12__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image12.onmouseover=function (e) {
			me._ht_info_image12__img.style.visibility='hidden';
			me._ht_info_image12__imgo.style.visibility='inherit';
		}
		me._ht_info_image12.onmouseout=function (e) {
			me._ht_info_image12__img.style.visibility='inherit';
			me._ht_info_image12__imgo.style.visibility='hidden';
		}
		me._ht_info_image12.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_8.appendChild(me._ht_info_image12);
		el=me._tt_information12=document.createElement('div');
		els=me._tt_information12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information12.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information12.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information12.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information12.style[domTransition]='left 0s, top 0s';
				if (me._tt_information12.ggCurrentLogicStatePosition == 0) {
					me._tt_information12.style.left='-50px';
					me._tt_information12.style.top='-47px';
				}
				else {
					me._tt_information12.style.left='-50px';
					me._tt_information12.style.top='21px';
				}
			}
		}
		me._tt_information12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_8'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information12.style[domTransition]='left 0s, top 0s';
				if (me._tt_information12.ggCurrentLogicStateVisible == 0) {
					me._tt_information12.style.visibility=(Number(me._tt_information12.style.opacity)>0||!me._tt_information12.style.opacity)?'inherit':'hidden';
					me._tt_information12.ggVisible=true;
				}
				else {
					me._tt_information12.style.visibility="hidden";
					me._tt_information12.ggVisible=false;
				}
			}
		}
		me._tt_information12.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_8.appendChild(me._tt_information12);
		me.__div = me._ht_egg_8;
	};
	function SkinHotspotClass_ht_egg_9(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_9=document.createElement('div');
		el.ggId="ht_egg_9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_9.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_9') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_9.style[domTransition]='';
				if (me._ht_egg_9.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_9.style.visibility="hidden";
					me._ht_egg_9.ggVisible=false;
				}
				else {
					me._ht_egg_9.style.visibility=(Number(me._ht_egg_9.style.opacity)>0||!me._ht_egg_9.style.opacity)?'inherit':'hidden';
					me._ht_egg_9.ggVisible=true;
				}
			}
		}
		me._ht_egg_9.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_9') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_9') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_9') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_9') == 0))
				)
			) {
				player.setVariableValue('my_count_9', player.getVariableValue('my_count_9') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_9.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_9.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_9']=true;
			me._tt_information11.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_9.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_9']=false;
			me._tt_information11.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_9.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_9']=false;
			me._tt_information11.logicBlock_visible();
		}
		me._ht_egg_9.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image11=document.createElement('div');
		els=me._ht_info_image11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image11__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image11__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image11.onmouseover=function (e) {
			me._ht_info_image11__img.style.visibility='hidden';
			me._ht_info_image11__imgo.style.visibility='inherit';
		}
		me._ht_info_image11.onmouseout=function (e) {
			me._ht_info_image11__img.style.visibility='inherit';
			me._ht_info_image11__imgo.style.visibility='hidden';
		}
		me._ht_info_image11.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_9.appendChild(me._ht_info_image11);
		el=me._tt_information11=document.createElement('div');
		els=me._tt_information11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information11.style[domTransition]='left 0s, top 0s';
				if (me._tt_information11.ggCurrentLogicStatePosition == 0) {
					me._tt_information11.style.left='-50px';
					me._tt_information11.style.top='-47px';
				}
				else {
					me._tt_information11.style.left='-50px';
					me._tt_information11.style.top='21px';
				}
			}
		}
		me._tt_information11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_9'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information11.style[domTransition]='left 0s, top 0s';
				if (me._tt_information11.ggCurrentLogicStateVisible == 0) {
					me._tt_information11.style.visibility=(Number(me._tt_information11.style.opacity)>0||!me._tt_information11.style.opacity)?'inherit':'hidden';
					me._tt_information11.ggVisible=true;
				}
				else {
					me._tt_information11.style.visibility="hidden";
					me._tt_information11.ggVisible=false;
				}
			}
		}
		me._tt_information11.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_9.appendChild(me._tt_information11);
		me.__div = me._ht_egg_9;
	};
	function SkinHotspotClass_ht_egg_10(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_10=document.createElement('div');
		el.ggId="ht_egg_10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_10') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_10.style[domTransition]='';
				if (me._ht_egg_10.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_10.style.visibility="hidden";
					me._ht_egg_10.ggVisible=false;
				}
				else {
					me._ht_egg_10.style.visibility=(Number(me._ht_egg_10.style.opacity)>0||!me._ht_egg_10.style.opacity)?'inherit':'hidden';
					me._ht_egg_10.ggVisible=true;
				}
			}
		}
		me._ht_egg_10.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_10') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_10') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_10') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_10') == 0))
				)
			) {
				player.setVariableValue('my_count_10', player.getVariableValue('my_count_10') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_10.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_10.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_10']=true;
			me._tt_information10.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_10.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_10']=false;
			me._tt_information10.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_10.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_10']=false;
			me._tt_information10.logicBlock_visible();
		}
		me._ht_egg_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image10=document.createElement('div');
		els=me._ht_info_image10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image10__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image10.onmouseover=function (e) {
			me._ht_info_image10__img.style.visibility='hidden';
			me._ht_info_image10__imgo.style.visibility='inherit';
		}
		me._ht_info_image10.onmouseout=function (e) {
			me._ht_info_image10__img.style.visibility='inherit';
			me._ht_info_image10__imgo.style.visibility='hidden';
		}
		me._ht_info_image10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_10.appendChild(me._ht_info_image10);
		el=me._tt_information10=document.createElement('div');
		els=me._tt_information10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information10.style[domTransition]='left 0s, top 0s';
				if (me._tt_information10.ggCurrentLogicStatePosition == 0) {
					me._tt_information10.style.left='-50px';
					me._tt_information10.style.top='-47px';
				}
				else {
					me._tt_information10.style.left='-50px';
					me._tt_information10.style.top='21px';
				}
			}
		}
		me._tt_information10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_10'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information10.style[domTransition]='left 0s, top 0s';
				if (me._tt_information10.ggCurrentLogicStateVisible == 0) {
					me._tt_information10.style.visibility=(Number(me._tt_information10.style.opacity)>0||!me._tt_information10.style.opacity)?'inherit':'hidden';
					me._tt_information10.ggVisible=true;
				}
				else {
					me._tt_information10.style.visibility="hidden";
					me._tt_information10.ggVisible=false;
				}
			}
		}
		me._tt_information10.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_10.appendChild(me._tt_information10);
		me.__div = me._ht_egg_10;
	};
	function SkinHotspotClass_ht_egg_11(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_11=document.createElement('div');
		el.ggId="ht_egg_11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_11') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_11.style[domTransition]='';
				if (me._ht_egg_11.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_11.style.visibility="hidden";
					me._ht_egg_11.ggVisible=false;
				}
				else {
					me._ht_egg_11.style.visibility=(Number(me._ht_egg_11.style.opacity)>0||!me._ht_egg_11.style.opacity)?'inherit':'hidden';
					me._ht_egg_11.ggVisible=true;
				}
			}
		}
		me._ht_egg_11.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_11') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_11') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_11') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_11') == 0))
				)
			) {
				player.setVariableValue('my_count_11', player.getVariableValue('my_count_11') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_11.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_11.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_11']=true;
			me._tt_information9.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_11.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_11']=false;
			me._tt_information9.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_11.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_11']=false;
			me._tt_information9.logicBlock_visible();
		}
		me._ht_egg_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image9=document.createElement('div');
		els=me._ht_info_image9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image9__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image9__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image9.onmouseover=function (e) {
			me._ht_info_image9__img.style.visibility='hidden';
			me._ht_info_image9__imgo.style.visibility='inherit';
		}
		me._ht_info_image9.onmouseout=function (e) {
			me._ht_info_image9__img.style.visibility='inherit';
			me._ht_info_image9__imgo.style.visibility='hidden';
		}
		me._ht_info_image9.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_11.appendChild(me._ht_info_image9);
		el=me._tt_information9=document.createElement('div');
		els=me._tt_information9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information9.style[domTransition]='left 0s, top 0s';
				if (me._tt_information9.ggCurrentLogicStatePosition == 0) {
					me._tt_information9.style.left='-50px';
					me._tt_information9.style.top='-47px';
				}
				else {
					me._tt_information9.style.left='-50px';
					me._tt_information9.style.top='21px';
				}
			}
		}
		me._tt_information9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_11'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information9.style[domTransition]='left 0s, top 0s';
				if (me._tt_information9.ggCurrentLogicStateVisible == 0) {
					me._tt_information9.style.visibility=(Number(me._tt_information9.style.opacity)>0||!me._tt_information9.style.opacity)?'inherit':'hidden';
					me._tt_information9.ggVisible=true;
				}
				else {
					me._tt_information9.style.visibility="hidden";
					me._tt_information9.ggVisible=false;
				}
			}
		}
		me._tt_information9.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_11.appendChild(me._tt_information9);
		me.__div = me._ht_egg_11;
	};
	function SkinHotspotClass_ht_egg_12(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_12=document.createElement('div');
		el.ggId="ht_egg_12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_12.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_12') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_12.style[domTransition]='';
				if (me._ht_egg_12.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_12.style.visibility="hidden";
					me._ht_egg_12.ggVisible=false;
				}
				else {
					me._ht_egg_12.style.visibility=(Number(me._ht_egg_12.style.opacity)>0||!me._ht_egg_12.style.opacity)?'inherit':'hidden';
					me._ht_egg_12.ggVisible=true;
				}
			}
		}
		me._ht_egg_12.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_12') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_12') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_12') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_12') == 0))
				)
			) {
				player.setVariableValue('my_count_12', player.getVariableValue('my_count_12') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_12.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_12.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_12']=true;
			me._tt_information8.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_12.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_12']=false;
			me._tt_information8.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_12.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_12']=false;
			me._tt_information8.logicBlock_visible();
		}
		me._ht_egg_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image8=document.createElement('div');
		els=me._ht_info_image8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_info_image8__img.setAttribute('src',basePath + 'images/ht_info_image8.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image8__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ht_info_image8__imgo.setAttribute('src',basePath + 'images/ht_info_image8__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image8.onmouseover=function (e) {
			me._ht_info_image8__img.style.visibility='hidden';
			me._ht_info_image8__imgo.style.visibility='inherit';
		}
		me._ht_info_image8.onmouseout=function (e) {
			me._ht_info_image8__img.style.visibility='inherit';
			me._ht_info_image8__imgo.style.visibility='hidden';
		}
		me._ht_info_image8.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_12.appendChild(me._ht_info_image8);
		el=me._tt_information8=document.createElement('div');
		els=me._tt_information8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information8.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information8.style[domTransition]='left 0s, top 0s';
				if (me._tt_information8.ggCurrentLogicStatePosition == 0) {
					me._tt_information8.style.left='-50px';
					me._tt_information8.style.top='-47px';
				}
				else {
					me._tt_information8.style.left='-50px';
					me._tt_information8.style.top='21px';
				}
			}
		}
		me._tt_information8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_12'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information8.style[domTransition]='left 0s, top 0s';
				if (me._tt_information8.ggCurrentLogicStateVisible == 0) {
					me._tt_information8.style.visibility=(Number(me._tt_information8.style.opacity)>0||!me._tt_information8.style.opacity)?'inherit':'hidden';
					me._tt_information8.ggVisible=true;
				}
				else {
					me._tt_information8.style.visibility="hidden";
					me._tt_information8.ggVisible=false;
				}
			}
		}
		me._tt_information8.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_12.appendChild(me._tt_information8);
		me.__div = me._ht_egg_12;
	};
	function SkinHotspotClass_ht_egg_13(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_13=document.createElement('div');
		el.ggId="ht_egg_13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_13.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_13') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_13.style[domTransition]='';
				if (me._ht_egg_13.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_13.style.visibility="hidden";
					me._ht_egg_13.ggVisible=false;
				}
				else {
					me._ht_egg_13.style.visibility=(Number(me._ht_egg_13.style.opacity)>0||!me._ht_egg_13.style.opacity)?'inherit':'hidden';
					me._ht_egg_13.ggVisible=true;
				}
			}
		}
		me._ht_egg_13.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_13') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_13') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_13') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_13') == 0))
				)
			) {
				player.setVariableValue('my_count_13', player.getVariableValue('my_count_13') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_13.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_13.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_13']=true;
			me._tt_information7.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_13.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_13']=false;
			me._tt_information7.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_13.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_13']=false;
			me._tt_information7.logicBlock_visible();
		}
		me._ht_egg_13.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image7=document.createElement('div');
		els=me._ht_info_image7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image7__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image7__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image7.onmouseover=function (e) {
			me._ht_info_image7__img.style.visibility='hidden';
			me._ht_info_image7__imgo.style.visibility='inherit';
		}
		me._ht_info_image7.onmouseout=function (e) {
			me._ht_info_image7__img.style.visibility='inherit';
			me._ht_info_image7__imgo.style.visibility='hidden';
		}
		me._ht_info_image7.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_13.appendChild(me._ht_info_image7);
		el=me._tt_information7=document.createElement('div');
		els=me._tt_information7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information7.style[domTransition]='left 0s, top 0s';
				if (me._tt_information7.ggCurrentLogicStatePosition == 0) {
					me._tt_information7.style.left='-50px';
					me._tt_information7.style.top='-47px';
				}
				else {
					me._tt_information7.style.left='-50px';
					me._tt_information7.style.top='21px';
				}
			}
		}
		me._tt_information7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_13'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information7.style[domTransition]='left 0s, top 0s';
				if (me._tt_information7.ggCurrentLogicStateVisible == 0) {
					me._tt_information7.style.visibility=(Number(me._tt_information7.style.opacity)>0||!me._tt_information7.style.opacity)?'inherit':'hidden';
					me._tt_information7.ggVisible=true;
				}
				else {
					me._tt_information7.style.visibility="hidden";
					me._tt_information7.ggVisible=false;
				}
			}
		}
		me._tt_information7.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_13.appendChild(me._tt_information7);
		me.__div = me._ht_egg_13;
	};
	function SkinHotspotClass_ht_egg_14(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_14=document.createElement('div');
		el.ggId="ht_egg_14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_14.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_14') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_14.style[domTransition]='';
				if (me._ht_egg_14.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_14.style.visibility="hidden";
					me._ht_egg_14.ggVisible=false;
				}
				else {
					me._ht_egg_14.style.visibility=(Number(me._ht_egg_14.style.opacity)>0||!me._ht_egg_14.style.opacity)?'inherit':'hidden';
					me._ht_egg_14.ggVisible=true;
				}
			}
		}
		me._ht_egg_14.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_14') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_14') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_14') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_14') == 0))
				)
			) {
				player.setVariableValue('my_count_14', player.getVariableValue('my_count_14') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_14.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_14.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_14']=true;
			me._tt_information6.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_14.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_14']=false;
			me._tt_information6.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_14.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_14']=false;
			me._tt_information6.logicBlock_visible();
		}
		me._ht_egg_14.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image6=document.createElement('div');
		els=me._ht_info_image6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image6__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image6.onmouseover=function (e) {
			me._ht_info_image6__img.style.visibility='hidden';
			me._ht_info_image6__imgo.style.visibility='inherit';
		}
		me._ht_info_image6.onmouseout=function (e) {
			me._ht_info_image6__img.style.visibility='inherit';
			me._ht_info_image6__imgo.style.visibility='hidden';
		}
		me._ht_info_image6.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_14.appendChild(me._ht_info_image6);
		el=me._tt_information6=document.createElement('div');
		els=me._tt_information6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information6.style[domTransition]='left 0s, top 0s';
				if (me._tt_information6.ggCurrentLogicStatePosition == 0) {
					me._tt_information6.style.left='-50px';
					me._tt_information6.style.top='-47px';
				}
				else {
					me._tt_information6.style.left='-50px';
					me._tt_information6.style.top='21px';
				}
			}
		}
		me._tt_information6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_14'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information6.style[domTransition]='left 0s, top 0s';
				if (me._tt_information6.ggCurrentLogicStateVisible == 0) {
					me._tt_information6.style.visibility=(Number(me._tt_information6.style.opacity)>0||!me._tt_information6.style.opacity)?'inherit':'hidden';
					me._tt_information6.ggVisible=true;
				}
				else {
					me._tt_information6.style.visibility="hidden";
					me._tt_information6.ggVisible=false;
				}
			}
		}
		me._tt_information6.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_14.appendChild(me._tt_information6);
		me.__div = me._ht_egg_14;
	};
	function SkinHotspotClass_ht_egg_15(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_15=document.createElement('div');
		el.ggId="ht_egg_15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_15.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_15') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_15.style[domTransition]='';
				if (me._ht_egg_15.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_15.style.visibility="hidden";
					me._ht_egg_15.ggVisible=false;
				}
				else {
					me._ht_egg_15.style.visibility=(Number(me._ht_egg_15.style.opacity)>0||!me._ht_egg_15.style.opacity)?'inherit':'hidden';
					me._ht_egg_15.ggVisible=true;
				}
			}
		}
		me._ht_egg_15.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_15') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_15') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_15') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_15') == 0))
				)
			) {
				player.setVariableValue('my_count_15', player.getVariableValue('my_count_15') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_15.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_15.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_15']=true;
			me._tt_information5.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_15.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_15']=false;
			me._tt_information5.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_15.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_15']=false;
			me._tt_information5.logicBlock_visible();
		}
		me._ht_egg_15.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image5=document.createElement('div');
		els=me._ht_info_image5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image5.onmouseover=function (e) {
			me._ht_info_image5__img.style.visibility='hidden';
			me._ht_info_image5__imgo.style.visibility='inherit';
		}
		me._ht_info_image5.onmouseout=function (e) {
			me._ht_info_image5__img.style.visibility='inherit';
			me._ht_info_image5__imgo.style.visibility='hidden';
		}
		me._ht_info_image5.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_15.appendChild(me._ht_info_image5);
		el=me._tt_information5=document.createElement('div');
		els=me._tt_information5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information5.style[domTransition]='left 0s, top 0s';
				if (me._tt_information5.ggCurrentLogicStatePosition == 0) {
					me._tt_information5.style.left='-50px';
					me._tt_information5.style.top='-47px';
				}
				else {
					me._tt_information5.style.left='-50px';
					me._tt_information5.style.top='21px';
				}
			}
		}
		me._tt_information5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_15'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information5.style[domTransition]='left 0s, top 0s';
				if (me._tt_information5.ggCurrentLogicStateVisible == 0) {
					me._tt_information5.style.visibility=(Number(me._tt_information5.style.opacity)>0||!me._tt_information5.style.opacity)?'inherit':'hidden';
					me._tt_information5.ggVisible=true;
				}
				else {
					me._tt_information5.style.visibility="hidden";
					me._tt_information5.ggVisible=false;
				}
			}
		}
		me._tt_information5.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_15.appendChild(me._tt_information5);
		me.__div = me._ht_egg_15;
	};
	function SkinHotspotClass_ht_egg_16(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_16=document.createElement('div');
		el.ggId="ht_egg_16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_16.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_16') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_16.style[domTransition]='';
				if (me._ht_egg_16.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_16.style.visibility="hidden";
					me._ht_egg_16.ggVisible=false;
				}
				else {
					me._ht_egg_16.style.visibility=(Number(me._ht_egg_16.style.opacity)>0||!me._ht_egg_16.style.opacity)?'inherit':'hidden';
					me._ht_egg_16.ggVisible=true;
				}
			}
		}
		me._ht_egg_16.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_16') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_16') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_16') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_16') == 0))
				)
			) {
				player.setVariableValue('my_count_16', player.getVariableValue('my_count_16') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_16.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_16.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_16']=true;
			me._tt_information4.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_16.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_16']=false;
			me._tt_information4.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_16.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_16']=false;
			me._tt_information4.logicBlock_visible();
		}
		me._ht_egg_16.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image4=document.createElement('div');
		els=me._ht_info_image4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_info_image4__img.setAttribute('src',basePath + 'images/ht_info_image4.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ht_info_image4__imgo.setAttribute('src',basePath + 'images/ht_info_image4__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image4.onmouseover=function (e) {
			me._ht_info_image4__img.style.visibility='hidden';
			me._ht_info_image4__imgo.style.visibility='inherit';
		}
		me._ht_info_image4.onmouseout=function (e) {
			me._ht_info_image4__img.style.visibility='inherit';
			me._ht_info_image4__imgo.style.visibility='hidden';
		}
		me._ht_info_image4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_16.appendChild(me._ht_info_image4);
		el=me._tt_information4=document.createElement('div');
		els=me._tt_information4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information4.style[domTransition]='left 0s, top 0s';
				if (me._tt_information4.ggCurrentLogicStatePosition == 0) {
					me._tt_information4.style.left='-50px';
					me._tt_information4.style.top='-47px';
				}
				else {
					me._tt_information4.style.left='-50px';
					me._tt_information4.style.top='21px';
				}
			}
		}
		me._tt_information4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_16'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information4.style[domTransition]='left 0s, top 0s';
				if (me._tt_information4.ggCurrentLogicStateVisible == 0) {
					me._tt_information4.style.visibility=(Number(me._tt_information4.style.opacity)>0||!me._tt_information4.style.opacity)?'inherit':'hidden';
					me._tt_information4.ggVisible=true;
				}
				else {
					me._tt_information4.style.visibility="hidden";
					me._tt_information4.ggVisible=false;
				}
			}
		}
		me._tt_information4.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_16.appendChild(me._tt_information4);
		me.__div = me._ht_egg_16;
	};
	function SkinHotspotClass_ht_egg_17(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_17=document.createElement('div');
		el.ggId="ht_egg_17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_17.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_17') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_17.style[domTransition]='';
				if (me._ht_egg_17.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_17.style.visibility="hidden";
					me._ht_egg_17.ggVisible=false;
				}
				else {
					me._ht_egg_17.style.visibility=(Number(me._ht_egg_17.style.opacity)>0||!me._ht_egg_17.style.opacity)?'inherit':'hidden';
					me._ht_egg_17.ggVisible=true;
				}
			}
		}
		me._ht_egg_17.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_17') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_17') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_17') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_17') == 0))
				)
			) {
				player.setVariableValue('my_count_17', player.getVariableValue('my_count_17') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_17.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_17.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_17']=true;
			me._tt_information3.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_17.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_17']=false;
			me._tt_information3.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_17.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_17']=false;
			me._tt_information3.logicBlock_visible();
		}
		me._ht_egg_17.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image3=document.createElement('div');
		els=me._ht_info_image3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOHttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNlYzVhNTU7fS5jbHMtNXtmaWxsOiNmZmY7fS5jbHMtNnttYXNrOnVybCgjbW'+
			'Fzay0yKTt9LmNscy03e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtOXtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcCk7fTwvc3R5bGU+CiAgPGZpbHRlciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAiIHk9Ii03ODQxLjk0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjkuMjgiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0i'+
			'I2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9IjEwMC42IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTc4NDEuOTQiIHdpZHRoPSIxNjkuMjgiPgogICA8ZyBjbGFzcz0iY2xzLTkiLz4KICA8L21hc2s+CiAgPGxpbmVhckdyYWRpZW50IHgyPSItNTgyIiB5Mj0iLTk1OS41OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ5LCAwLjEsIC0wLjE0LCAwLjY3LCAzMDUuNDMsIDEwMjEuMykiIGlkPSJsaW5lYXItZ3JhZGllbnQiIGdyYW'+
			'RpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iLTEzNjUuNjUiIHgxPSItNTgyIj4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0'+
			'PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBpZD0ibHVtaW5vc2l0eS1ub2NsaXAtMiIgeT0iNDcuODkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTAwLjYiIGhlaWdodD0iMjcxLjkzIiBtYXNrVW'+
			'5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzay0yIiB5PSI0Ny44OSIgd2lkdGg9IjE2OS4yOCI+CiAgIDxnIGNsYXNzPSJjbHMtMSI+CiAgICA8cGF0aCBkPSJNMTU4LjMzLDMxOC42OGMtMTkuMTItNC4wOS0zNS4zNy0xOC43Ny00NS43NS00MS4zMkM5OS40MywyNDguODEsOTcsMjExLDEwNS44NSwxNzMuNjEsMTE1LDEzNSwxMzIuMzEsMTAwLjY4LDE1NC41NSw3N2MyMC41OC0yMS45Miw0My0zMi4yMSw2MS41LTI4LjI2LDM2LDcuNjksNjUuMDYsNzAuNjksNDkuNTgsMTU5LjA5LTYuMzgsMzYuMzUtMjMuNzYsNjkuNDEtNDcuNzEsOTAuNzItMTkuMjEsMTcuMTEtNDAuMzQsMjQuMjYtNTku'+
			'NDksMjAuMTdaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii01ODIiIHkyPSItOTU5LjU4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAuNDksIDAuMSwgLTAuMTQsIDAuNjcsIDMwNS40MywgMTAyMS4zKSIgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTE9Ii0xMzY1LjY1IiB4MT0iLTU4MiI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZiIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZW'+
			'ZzPgogPHRpdGxlPkRvdHRlZCBFZ2c8L3RpdGxlPgogPGcgY2xhc3M9ImNscy0zIj4KICA8ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGlkPSJMYXllcl8xIj4KICAgPGcgaWQ9IkVnZ3MiPgogICAgPHBhdGggZD0iTTI2My4zMiw0ODguODRjMTAwLTMuNDUsMTgxLjQ2LTExMCwxNzEuNzgtMjI3LjExQzQyMy4yNCwxMTguNCwzMzMuNTQsMjAuMTUsMjQ3LjMsMjMuMTNoLS4yMkMxNjMuNzQsMjYsNzUuMzQsMTMwLjI2LDc2LjEzLDI3NC4wN2MuNjUsMTIyLjMyLDg2LjksMjE4LjIyLDE4NywyMTQuNzhaIiBjbGFzcz0iY2xzLTQiLz4KICAgIDxwYXRoIGQ9Ik0zNDUsMzU4LjUyYTE2LjE5LDE2LjE5LDAs'+
			'MCwxLDEuNjMsOC4xN2MtLjQzLDEwLTkuNjEsMTcuMzgtMTguMjIsMTcuNjYtOC4zMy4yNy0xNC45My01LjE3LTE1Ljg0LTEzLjM2LTEuMDktOS43LDUuNTUtMTYuOTMsMTIuNDgtMTkuMzlhMTkuMjQsMTkuMjQsMCwwLDEsMy43MS0uNzNDMzM3LjE5LDM0OS43NSwzNDIuNzIsMzU0LjA3LDM0NSwzNTguNTJaTTM0MC40MSwyMDJjLTMuMDktNC42OC04LjktOS4yOS0xNy40Ni04LjA3YTE2LjYxLDE2LjYxLDAsMCwwLTEzLjUxLDEwLjkxYy01LjQ1LDE1LDkuMiwyOC4zNiwyMi4zNCwyNC4xOWExNy4zMSwxNy4zMSwwLDAsMCwxMS44MS0xNy4yOUExOS4xMywxOS4xMywwLDAsMCwzNDAuNDEsMjAyWk'+
			'0zMTcuMzMsODIuNjRjOC4yLjQ1LDE2LjgzLTUsMTMuMS0xNC4zNC0xLjMtMy4yNi01LjUzLTcuMzMtOC4zOC05YTIyLjA5LDIyLjA5LDAsMCwwLTEzLjY5LTIuODFjLTYuMzMsMS0xMS4yMSw2LjI2LTguNjMsMTMuODhDMzAyLDc3LjEsMzEwLDgyLjI0LDMxNy4zMyw4Mi42NFpNMjM2Ljg4LDI4LjQ1YTMwLjg2LDMwLjg2LDAsMCwwLDE4LjUtLjYzYzIuMTYtLjgxLDUuNDUtMi4xLDUuODItNC4zYTExMS4zNSwxMTEuMzUsMCwwLDAtMTMuODktLjRoLS4yMmExMDcuNzEsMTA3LjcxLDAsMCwwLTE2LjEsMS44QzIzMS44NiwyNi43MiwyMzUsMjcuODcsMjM2Ljg4LDI4LjQ1Wm0tLjQ4LDI2OC4yMmMx'+
			'LjIxLDkuODgsMTAuMzUsMTYuODgsMjAuNzEsMTUuNzNhMTguMjcsMTguMjcsMCwwLDAsMTYuMDktMTguNjNBMTguNzcsMTguNzcsMCwwLDAsMjY0LDI3OC4xYTIwLDIwLDAsMCwwLTExLjI3LTIuMTUsMTksMTksMCwwLDAtMTIuMzIsNi41NEExOS4xNywxOS4xNywwLDAsMCwyMzYuMzksMjk2LjY4Wk04NC40NSwyNDAuNDljNC42NC4zNiw3LjkxLTMuMjksOS45Mi02LjkxYTIzLjYzLDIzLjYzLDAsMCwwLDIuNzEtMTIuNjRjLS40Ny02LjgyLTQuNTktMTMuNjYtMTAuNTktMTIuNjRhOC4zMSw4LjMxLDAsMCwwLTQuODEsMi44NHEtMi4xMiwxMS40Mi0zLjQ4LDIzLjMzQzc5LjMyLDIzNy43NSw4MS'+
			'4zMiwyNDAuMjYsODQuNDUsMjQwLjQ5Wm00MiwzOC43NGMtOC44OCwxLjI3LTEzLjc2LDEwLjQ0LTEyLDE5LjUzLDEuNTQsOC4xMyw4LjA5LDE2LjEyLDE3Ljg0LDE0LjkzLDUuODEtLjcyLDEwLTUuMiwxMS42Mi05LjY2LDIuNjgtNy4yNC0uMTEtMTUuODEtNC4yOC0yMEExNS42MywxNS42MywwLDAsMCwxMjYuNDMsMjc5LjI0Wm0yMS4zOCwxNjAuN2MyLjUsMS4zMiw1LjkxLDIuNzgsOC43NCwxLjY4YTUuMzEsNS4zMSwwLDAsMCwzLjIyLTUuMTVjLjExLTYuNDgtNi4zMi0xMy4wOC0xMi42NS0xNi4zLTQuMTYtMi4xMS0xMS4zOS00LjY1LTEzLjcxLjkyYTExLjE1LDExLjE1LDAsMCwwLDEuMTYs'+
			'NS4yOCwyMi4xNSwyMi4xNSwwLDAsMCwzLjUzLDUuMSw1MS4zOCw1MS4zOCwwLDAsMCwzLjY4LDRBMjcuNDQsMjcuNDQsMCwwLDAsMTQ3LjgxLDQzOS45M1pNMTI5LjI1LDEzMS4yNGExNi41LDE2LjUsMCwwLDAtNi40OSwyLjQ2LDIzLjA4LDIzLjA4LDAsMCwwLTguOCwxMy4xNWMtMS41Niw2LjgsMSwxMy4yNyw2LjIsMTUuNDgsNS41MSwyLjMsMTIuMzktLjYyLDE1Ljg3LTMuODNhMjAuNDYsMjAuNDYsMCwwLDAsNi40NC0xMi4zM0MxNDMuNjYsMTM2LjY3LDEzNy44MiwxMzAsMTI5LjI1LDEzMS4yNFpNOTMuNzgsMzQ2LjU0Yy03LjUtMS42OC0yLjQ0LDExLjQyLTEuMywxNC4yNS4zLjc1LDEuMD'+
			'YsMi4xNywxLjI4LDIuNjQuNzYsMS41MSwxLjQxLDMuMDksMi4yMSw0LjU2YTE5LjMyLDE5LjMyLDAsMCwwLDQuMjYsNS42OCw2LjEsNi4xLDAsMCwwLDIuOSwxLjU0YzQuMzYuMjMsNS4xOC01LjQ3LDQuNi05LjcyQzEwNi42NywzNTcuOTQsMTAwLjMzLDM0OCw5My43OCwzNDYuNTRaTTI1NC44OSwxNTIuMzJhMTcuMzgsMTcuMzgsMCwwLDAsMTIuMzYtMTQuMTdBMTYuMDYsMTYuMDYsMCwwLDAsMjY0Ljc3LDEyN2MtMy4zNC01LjE3LTkuNDQtOS4wOC0xOC4xOS03Ljg4YTE3Ljc2LDE3Ljc2LDAsMCwwLTUuNjMsMS41NCwxNy4wNywxNy4wNywwLDAsMC05LjczLDE2Ljc3QzIzMiwxNDguODEsMjQ0'+
			'LjMsMTU1LjUxLDI1NC44OSwxNTIuMzJabTEyMC42NSwyLjI4YzYuNTUtLjU1LDEwLjIzLTUuODgsMTAuMTktMTEuNzEsMC01LjY2LTMuMDYtMTAuODktNi0xNC4xNHMtOC4xOS02LjQ5LTEzLjk0LTUuNjRjLTUuOTUuODgtOS43Miw2LjEyLTkuNTgsMTIuMjdDMzU2LjQ0LDE0Ni4zMiwzNjUuODcsMTU1LjQsMzc1LjU0LDE1NC41OVpNMzgxLjcyLDQyMWEzNS4zNiwzNS4zNiwwLDAsMCwyLTMuNDYsOS4zNCw5LjM0LDAsMCwwLC43My01Yy0uNjEtMy00LjE5LTMuNDktNy0zYTE5LjcxLDE5LjcxLDAsMCwwLTYuNzcsMi43OGMtNS4zNywzLjE1LTExLDkuMzctMTEuNDEsMTUuOTItLjE0LDIuNTIuOD'+
			'EsNS4wNiwzLjI4LDYuMDcsNS4xLDIuMDcsMTEuMzMtMy44OCwxNC40Ny03LjI1QTQyLjE0LDQyLjE0LDAsMCwwLDM4MS43Miw0MjFabTM4Ljc2LTIxOS43M2MtNC43Myw3LjIyLTEuMzEsMjEuNTcsNC4zMywyNi40NiwxLjUyLDEuMzEsNC4wOSwyLjU0LDYsLjc2LTEuNzgtMTAuMjQtNC0yMC4yMS02LjU0LTI5Ljg2YS4wNi4wNiwwLDAsMSwwLDBDNDIyLjkxLDE5OC4zLDQyMSwyMDAuNSw0MjAuNDcsMjAxLjI5Wk0zNzguNjMsMzA1LjIzYTEzLjc3LDEzLjc3LDAsMCwwLDkuMy0zLDE5LjMzLDE5LjMzLDAsMCwwLDcuMTQtMTQuMTNjLjUyLTEwLjQ2LTYuMDktMTguOTMtMTYuMjktMTcuNTJhMTQu'+
			'NTksMTQuNTksMCwwLDAtOSw0LjY0LDE3Ljg3LDE3Ljg3LDAsMCwwLTQuOCw4LjIzQzM2Mi4xMiwyOTQuMTcsMzY4Ljg5LDMwNC45NCwzNzguNjMsMzA1LjIzWm01MC40NSwyOC4yMmMtLjc5LS4xNC0yLjYsMS45NC0zLjM1LDNhNDYuODUsNDYuODUsMCwwLDAtMy4yMyw1LjM3LDM3LDM3LDAsMCwwLTQsMTMuMDhjLS4xNiwxLjYyLDAsNi44NSwxLjg3LDYuNTEuNzEtLjQ1Ljc4LS44OSwxLjEzLTEuODNhMy4yOCwzLjI4LDAsMCwxLC40OC0uMDljLjUxLS4xLDEuNzQtNSwyLTUuNjdxMS0zLDEuOTEtNmMxLjIyLTQsMi4zNy04LjEyLDMuMzUtMTIuMjFDNDI5LjU5LDMzNC4xMSw0MjkuNDYsMzMzLj'+
			'UxLDQyOS4wOCwzMzMuNDVabS05NiwxMzQuMjRjLS4yMi40My0uNDYsMC0uODkuMTkuMDgsMCwuMTguMTIsMCwuMTUtMi43LS4wOC02LjMxLjkxLTkuOTMsMi4yOC0uNiwwLS44OC4zMy0xLjQ4LjM2YTQ0LjE2LDQ0LjE2LDAsMCwwLTEwLjcsNmMtMS4zOSwxLjE2LTMsMi4xLTMuMzIsMy44NUgzMDdhMTU5Ljc5LDE1OS43OSwwLDAsMCwyNi40MS0xMkEuNzIuNzIsMCwwLDAsMzMzLjExLDQ2Ny42OVptLTU3LjIzLTIyLjA4YTEzLDEzLDAsMCwwLS4zNi0xMC43NGMtMi44OS01LjMzLTkuOC04LjgtMTcuNzYtNy45LTYuODUuNzYtMTIuMTIsNC40MS0xNC4xOSw5LjE1LTQuNzUsMTAuOTIsNi42Niwx'+
			'OC45LDE2Ljc5LDE4LjU0QzI2Ni41MSw0NTQuNDUsMjczLjQsNDUxLDI3NS44OCw0NDUuNjFaTTE5Ni44Miw1OC4xYy03LjI0LjY2LTEzLjM2LDQuODMtMTYsOC45MUEyMy44MSwyMy44MSwwLDAsMCwxNzksNzAuNjZjLTMuMTUsMTAuMjksNi43NSwxNS40OCwxNS4zMSwxNC41Nyw3LjY4LS44MywxNS45NC02Ljc2LDE3LTE0LjQ3QzIxMi41Myw2MS41NywyMDQuMzEsNTcuNCwxOTYuODIsNTguMVptMi41OSwxNzUuNDVhMTguMjgsMTguMjgsMCwwLDAsMTQuMTUtMTksMTguNzMsMTguNzMsMCwwLDAtNS4xOS0xMS43OCwxNy40OCwxNy40OCwwLDAsMC0xNS00Ljg2LDE4LDE4LDAsMCwwLTExLjE2LD'+
			'UuOTIsMTkuNTEsMTkuNTEsMCwwLDAtNC42MSwxMy42QTE3LjQ4LDE3LjQ4LDAsMCwwLDE5OS40MSwyMzMuNTZabTI4LjE2LDI0OS4yN2EzMi41MSwzMi41MSwwLDAsMC0xMy01LjM3Yy01LjIyLTEtMTAuNTQtMS4yNC0xMy4yOS41N2ExNTcsMTU3LDAsMCwwLDI4LjM5LDguMjRDMjMwLDQ4NC44NCwyMjguNjYsNDgzLjY4LDIyNy41Nyw0ODIuODNabS0xOS4yMi05My43NWExNS43NiwxNS43NiwwLDAsMCwxMS4wOS0xMS43NCwxNy40MywxNy40MywwLDAsMC0xLjkyLTEyLjE4LDE4LjcyLDE4LjcyLDAsMCwwLTE5LjEzLTkuMDZjLTYuMzEuODktMTAuMzEsNC40NC0xMi4yNyw4LjQ5YTIxLjExLDIx'+
			'LjExLDAsMCwwLTEuMyw5LjkxQzE4Ni4yOSwzODMuOTQsMTk2Ljg5LDM5Mi4yNCwyMDguMzUsMzg5LjA4WiIgY2xhc3M9ImNscy01Ii8+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xNTguMzMsMzE4LjY4Yy0xOS4xMi00LjA5LTM1LjM3LTE4Ljc3LTQ1Ljc1LTQxLjMyQzk5LjQzLDI0OC44MSw5NywyMTEsMTA1Ljg1LDE3My42MSwxMTUsMTM1LDEzMi4zMSwxMDAuNjgsMTU0LjU1LDc3YzIwLjU4LTIxLjkyLDQzLTMyLjIxLDYxLjUtMjguMjYsMzYsNy42OSw2NS4wNiw3MC42OSw0OS41OCwxNTkuMDktNi4zOCwzNi4zNS0yMy43Niw2OS40MS00Ny43MSw5MC43Mi'+
			'0xOS4yMSwxNy4xMS00MC4zNCwyNC4yNi01OS40OSwyMC4xN1oiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMTEuNTksNDQ3LjYybC4yNCwwYzExNS43NS0yMi4zOSwxODIuOC0xNTIuMTQsMTU0LjEyLTMxMGE1OTMuMyw1OTMuMywwLDAsMC0xNS02NC4zNGgwbC4wOC4wOWMzOC43LDQ2Ljc5LDY5LjUzLDExOC4yMiw3NS4yMywxOTguNzksOC4zLDExNy4wNy01Ny41OSwyMDctMTYyLjM0LDIwOS4zN2gtLjIyYy0zOC41My44OS03Mi05LjY4LTk4Ljc4LTI5LjQzQzE3OS4zMSw0NTIuNzUsMTk3LDQ1MC40NCwyMTEuNTksNDQ3LjYyWiIgY2xhc3M9ImNscy04Ii8+CiAgPC9n'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image3.onmouseover=function (e) {
			me._ht_info_image3__img.style.visibility='hidden';
			me._ht_info_image3__imgo.style.visibility='inherit';
		}
		me._ht_info_image3.onmouseout=function (e) {
			me._ht_info_image3__img.style.visibility='inherit';
			me._ht_info_image3__imgo.style.visibility='hidden';
		}
		me._ht_info_image3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_17.appendChild(me._ht_info_image3);
		el=me._tt_information3=document.createElement('div');
		els=me._tt_information3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information3.style[domTransition]='left 0s, top 0s';
				if (me._tt_information3.ggCurrentLogicStatePosition == 0) {
					me._tt_information3.style.left='-50px';
					me._tt_information3.style.top='-47px';
				}
				else {
					me._tt_information3.style.left='-50px';
					me._tt_information3.style.top='21px';
				}
			}
		}
		me._tt_information3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_17'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information3.style[domTransition]='left 0s, top 0s';
				if (me._tt_information3.ggCurrentLogicStateVisible == 0) {
					me._tt_information3.style.visibility=(Number(me._tt_information3.style.opacity)>0||!me._tt_information3.style.opacity)?'inherit':'hidden';
					me._tt_information3.ggVisible=true;
				}
				else {
					me._tt_information3.style.visibility="hidden";
					me._tt_information3.ggVisible=false;
				}
			}
		}
		me._tt_information3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_17.appendChild(me._tt_information3);
		me.__div = me._ht_egg_17;
	};
	function SkinHotspotClass_ht_egg_18(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_18=document.createElement('div');
		el.ggId="ht_egg_18";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_18.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_18') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_18.style[domTransition]='';
				if (me._ht_egg_18.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_18.style.visibility="hidden";
					me._ht_egg_18.ggVisible=false;
				}
				else {
					me._ht_egg_18.style.visibility=(Number(me._ht_egg_18.style.opacity)>0||!me._ht_egg_18.style.opacity)?'inherit':'hidden';
					me._ht_egg_18.ggVisible=true;
				}
			}
		}
		me._ht_egg_18.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_18') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_18') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_18') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_18') == 0))
				)
			) {
				player.setVariableValue('my_count_18', player.getVariableValue('my_count_18') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_18.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_18.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_18']=true;
			me._tt_information2.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_18.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_18']=false;
			me._tt_information2.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_18.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_18']=false;
			me._tt_information2.logicBlock_visible();
		}
		me._ht_egg_18.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image2=document.createElement('div');
		els=me._ht_info_image2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe21hc2s6dXJsKCNtYXNrKTtmaWx0ZXI6dXJsKCNsdW1pbm9zaXR5LW5vY2xpcC0yKTt9LmNscy0yLC5jbHMtOXttaXgtYmxlbmQtbW9kZTptdWx0aXBseTt9LmNscy0ye2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQpO30uY2xzLTN7aXNvbGF0aW9uOmlzb2xhdGU7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiMwNjViYWU7fS5jbHMtNntmaWxsOiM1Y2I5YW'+
			'I7fS5jbHMtN3ttYXNrOnVybCgjbWFzay0yKTt9LmNscy04e29wYWNpdHk6MC40O21peC1ibGVuZC1tb2RlOmxpZ2h0ZW47ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy05e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7fS5jbHMtMTB7ZmlsdGVyOnVybCgjbHVtaW5vc2l0eS1ub2NsaXApO308L3N0eWxlPgogIDxmaWx0ZXIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIiB4PSIxMTQuOTgiIGhlaWdodD0iMzI3NjYiIGlkPSJsdW1pbm9zaXR5LW5vY2xpcCIgeT0iLTg0NDgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjE2Ny43NiI+CiAgIDxm'+
			'ZUZsb29kIGZsb29kLWNvbG9yPSIjZmZmIiByZXN1bHQ9ImJnIi8+CiAgIDxmZUJsZW5kIGluMj0iYmciIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgPC9maWx0ZXI+CiAgPG1hc2sgeD0iMTE0Ljk4IiBoZWlnaHQ9IjMyNzY2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ibWFzayIgeT0iLTg0NDgiIHdpZHRoPSIxNjcuNzYiPgogICA8ZyBjbGFzcz0iY2xzLTEwIi8+CiAgPC9tYXNrPgogIDxsaW5lYXJHcmFkaWVudCB4Mj0iLTIzOTEuMDYiIHkyPSItMTQ4Ni4xMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjQ3LCAwLjE2LCAtMC4yMiwgMC42NSwgOTcyLjUxLCAxNjI4LjMyKS'+
			'IgaWQ9ImxpbmVhci1ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzgiIHN0b3AtY29sb3I9IiM5MzkzOTMiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjU4IiBzdG9wLWNvbG9yPSIjNjI2MjYyIi8+CiAgIDxzdG9wIG9mZnNldD0iMC43NiIgc3RvcC1jb2xvcj0iIzNlM2UzZSIvPgogICA8c3RvcCBvZmZzZXQ9IjAuOTEiIHN0b3AtY29sb3I9'+
			'IiMyOTI5MjkiLz4KICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjEyMTIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8ZmlsdGVyIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgeD0iMTE0Ljk4IiBoZWlnaHQ9IjI1Mi43MyIgaWQ9Imx1bWlub3NpdHktbm9jbGlwLTIiIHk9IjM3Ljg5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNjcuNzYiPgogICA8ZmVGbG9vZCBmbG9vZC1jb2xvcj0iI2ZmZiIgcmVzdWx0PSJiZyIvPgogICA8ZmVCbGVuZCBpbjI9ImJnIiBpbj0iU291cmNlR3JhcGhpYyIvPgogIDwvZmlsdGVyPgogIDxtYXNrIHg9Ij'+
			'ExNC45OCIgaGVpZ2h0PSIyNTIuNzMiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTIiIHk9IjM3Ljg5IiB3aWR0aD0iMTY3Ljc2Ij4KICAgPGcgY2xhc3M9ImNscy0xIj4KICAgIDxwYXRoIGQ9Ik0xNTkuODIsMjg4LjA5Yy0xNy41OC01Ljg1LTMxLjM2LTIxLjM3LTM4Ljc5LTQzLjctOS40MS0yOC4yNi03Ljc4LTY0LjE2LDQuNDgtOTguNDUsMTIuNjYtMzUuNDMsMzIuNTQtNjYsNTYtODYsMjEuNjctMTguNSw0My44Ny0yNS44Nyw2MC44OS0yMC4yMiwzMy4wOCwxMSw1NCw3My4zOSwzMC4xMiwxNTUuMDgtOS44LDMzLjU5LTI5LjYzLDYyLjkzLTU0LjQyLDgwLjUxLTE5Ljg5'+
			'LDE0LjEtNDAuNTQsMTguNjQtNTguMTYsMTIuNzlaIiBjbGFzcz0iY2xzLTIiLz4KICAgPC9nPgogIDwvbWFzaz4KICA8bGluZWFyR3JhZGllbnQgeDI9Ii0yMzkxLjA2IiB5Mj0iLTE0ODYuMTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMC40NywgMC4xNiwgLTAuMjIsIDAuNjUsIDk3Mi41MSwgMTYyOC4zMikiIGlkPSJsaW5lYXItZ3JhZGllbnQtMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkxPSItMTg3MSIgeDE9Ii0yMzkxLjA2Ij4KICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZi'+
			'IvPgogIDwvbGluZWFyR3JhZGllbnQ+CiA8L2RlZnM+CiA8dGl0bGU+U3RpcGUgRWdnPC90aXRsZT4KIDxnIGNsYXNzPSJjbHMtMyI+CiAgPGcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSI+CiAgIDxwYXRoIGQ9Ik0yNTkuNTEsNDg0LjA2Yzk4LTEuNjUsMTc5LjQ5LTEwNC41NiwxNzItMjE5LjM0QzQyMi40LDEyNC4yLDMzNi4zMiwyNi41MSwyNTEuODQsMjcuOTNoLS4yQzE3MCwyOS4zMSw4MS43MSwxMjkuODMsODAsMjcwLjYzYy0xLjQ1LDExOS43Myw4MS4zMywyMTUuMDcsMTc5LjMsMjEzLjQzWiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik00MjUuOCwyMTkuOGEzNTgs'+
			'MzU4LDAsMCwxLDUuMjIsMzhjLTExNi40NiwzLjE3LTIzNC4zOSw1LjQ3LTM1MC44OSw2Ljk0YTMzMS40NCwzMzEuNDQsMCwwLDEsMy4yMy0zNy40NEMxNTguODQsMjE4LjcyLDM4OC4xNCwyMTcuNTQsNDI1LjgsMjE5LjhabS0xNjUsMjA5LjYxYy00Ni40Ni45Mi05NS4zNiwyLTEyNy4yLTguMzRhMjEuNzgsMjEuNzgsMCwwLDEtNC40My0yLjA3LDE5MS4yLDE5MS4yLDAsMCwwLDI5LjE5LDI5LjJjMjksOS41Nyw3NS4xNyw3LjksMTExLjIyLDYuODQsMzEuNTgtLjkzLDYzLjk0LTEuNjcsODcuNzUtOS40NGExOTYuMjYsMTk2LjI2LDAsMCwwLDI4LjU3LTI5Ljg0Yy0xNS4zNiw2LjI3LTM2Ljc5LD'+
			'guNC01OC4yMiwxMC4zUzI4NC4xMiw0MjguOTQsMjYwLjc5LDQyOS40MVpNNDI2LjU5LDI5NS44Yy01MC4xOSw2LjQxLTExMC45MSw1LjU5LTE3Mi40Nyw2LjgxLTI4LjY0LjU3LTU4Ljg0LjQ5LTg3LjY2LDEuMDYtMjcuODUuNTUtNjEuMzkuOTMtODUtMi43M0EyNDAuNTIsMjQwLjUyLDAsMCwwLDkyLDM0OS44OGEyNS4wNywyNS4wNywwLDAsMCw1LDIsMTM4LjkxLDEzOC45MSwwLDAsMCwyMC4wOCwzYzQxLjk0LDMuODYsODkuMzYsMywxMzQsMi4wOSw2MC4zMy0xLjIsMTIyLjExLTIuMjcsMTcxLjQ2LTEyLjg4QTIyNS41NSwyMjUuNTUsMCwwLDAsNDMxLjQ2LDI5NUM0MjkuODcsMjk1LjMxLDQy'+
			'OC4yNiwyOTUuNTksNDI2LjU5LDI5NS44Wk0yNTEuODQsMjcuOTNoLS4yYy0yMS4xLjM2LTQyLjY0LDcuMzUtNjMsMTkuOTUsMzguNzktNyw4OC4zLTguMywxMjcuMTMtMi40N0MyOTUuMjIsMzMuNzIsMjczLjQ4LDI3LjU3LDI1MS44NCwyNy45M1pNMTcwLjEsMTM4LjY0Yzc1LjYyLTUsMTYxLjczLTYuMjMsMjI5LjM5LDEuNmEyNjMuNTksMjYzLjU5LDAsMCwwLTI1LjItNDEuNDdDMzM3LjU1LDkxLDIzOS4zNyw5MCwxNTAuNjQsMTAwLjJhMTkwLjY5LDE5MC42OSwwLDAsMC0xOS41NywzLjM4LDI2MC45MywyNjAuOTMsMCwwLDAtMjQuNDQsNDNDMTI1LjczLDE0MS4xNiwxNDcuNjcsMTQwLjExLD'+
			'E3MC4xLDEzOC42NFoiIGNsYXNzPSJjbHMtNSIvPgogICA8cGF0aCBkPSJNNDMxLDI1Ny44Yy4xOSwyLjMuMzcsNC42LjUyLDYuOTJhMjI2LjI0LDIyNi4yNCwwLDAsMS0uMTQsMzEuMTJjLTUxLjc1LDYuMjYtMTE0LjEzLDUuNTItMTc3LjM3LDYuNzctMjkuNjguNTktNjEsLjUzLTkwLjg0LDEuMTMtMjYuNDIuNTItNTcuNzQuODgtODEuNjItMS44NEEyNTMuMDcsMjUzLjA3LDAsMCwxLDgwLDI3MC42M2MwLTIsLjA3LTMuOTMuMTMtNS44OUMxOTYuNjYsMjYzLjIxLDMxNC41MiwyNjAuOTEsNDMxLDI1Ny44Wk0xNzkuMjcsMzkzYy0yNi41NS0uNjYtNTIuNzktLjMyLTcxLjU4LTYuNDNhMjA5LjYx'+
			'LDIwOS42MSwwLDAsMCwyMy44OCwzNS4zM2MzMyw5LjUsODIuMzUsOC40MywxMjkuMjcsNy41LDI0LjE5LS40OCw0Ny4yMi0xLjUsNjkuMzMtMy40MSwxOS40NC0xLjY4LDM4Ljg3LTMuNTUsNTQuMS04LjJhMjEzLjgsMjEzLjgsMCwwLDAsMjMuMjQtMzYuMmMtMTkuMyw1LjIxLTQzLjA2LDYuNi02Ni42LDguMjFDMjg4LDM5My40NCwyMzIuNjEsMzk0LjM2LDE3OS4yNywzOTNabTg3LjU3LDkwLjcyLDIuMTMtLjE1YzEuMjYtLjEsMi41MS0uMjMsMy43Ny0uMzZsLjU4LS4wN2ExNTIuNjksMTUyLjY5LDAsMCwwLDYyLjEtMjEuNzdjLTIxLjQ1LDUuMDYtNDguNjYsNi44OC03NS4yMiw3LjQxLTI4Lj'+
			'g5LjU4LTU3LjY0LS4zMy03OS44Mi01LjU1YTE1My44OCwxNTMuODgsMCwwLDAsNjUsMjAuNGwuNjgsMHExLjgxLjEzLDMuNjMuMjJsMi4xNy4wOGMuODQsMCwxLjY3LjA3LDIuNTEuMDhxMi40LDAsNC44MywwaC4zYzEuNjIsMCwzLjIzLS4wOCw0Ljg0LS4xN0MyNjUuMTgsNDgzLjg1LDI2Niw0ODMuNzgsMjY2Ljg0LDQ4My43MlptLTExNi00MDQuNDljMTMtMi4xNCwyOC43My0zLjEsMzkuMzMtNC4xMiw1Mi01LDEwOC42OS01LjY1LDE1Ny40Mi4yOCwyLjQ5LjMxLDUsLjU3LDcuNTEuODRBMTc5LjA2LDE3OS4wNiwwLDAsMCwzMTUsNDVDMjc2LjIsMzkuNzksMjI4LDQxLDE4OS4zMyw0Ny40NEEx'+
			'ODUuMzIsMTg1LjMyLDAsMCwwLDE1MC44Miw3OS4yM1ptLTIwLjI0LDk1LjVjODcuNjctNS42OCwxOTYuODQtOS41MywyODIuMzEtMi41NmEyOTcuNzYsMjk3Ljc2LDAsMCwwLTEzLjc1LTMyLjYzYy02OS4yMS03LjExLTE1NS43OC01LjczLTIzMi4wNy0uODQtMjEsMS4zNC00MS40OCwyLjM3LTU5LjgzLDYuNTFBMjg3LjU1LDI4Ny41NSwwLDAsMCw5NC43MSwxNzcuN0MxMDYuMiwxNzYuNjUsMTE4LjE5LDE3NS41MywxMzAuNTgsMTc0LjczWiIgY2xhc3M9ImNscy02Ii8+CiAgIDxnIGNsYXNzPSJjbHMtNyI+CiAgICA8cGF0aCBkPSJNMTU5LjgyLDI4OC4wOWMtMTcuNTgtNS44NS0zMS4zNi0yMS'+
			'4zNy0zOC43OS00My43LTkuNDEtMjguMjYtNy43OC02NC4xNiw0LjQ4LTk4LjQ1LDEyLjY2LTM1LjQzLDMyLjU0LTY2LDU2LTg2LDIxLjY3LTE4LjUsNDMuODctMjUuODcsNjAuODktMjAuMjIsMzMuMDgsMTEsNTQsNzMuMzksMzAuMTIsMTU1LjA4LTkuOCwzMy41OS0yOS42Myw2Mi45My01NC40Miw4MC41MS0xOS44OSwxNC4xLTQwLjU0LDE4LjY0LTU4LjE2LDEyLjc5WiIgY2xhc3M9ImNscy04Ii8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTIxNC42NSw0MzYuNjdsLjI0LDBDMzI3LjcsNDE0Ljc5LDM5My4wNSwyODguMzMsMzY1LjEsMTM0LjVBNTc4LjI4LDU3OC4yOCwwLDAsMCwzNTAuNDYsNzEu'+
			'OGgwbC4wNy4wOWMzNy43Miw0NS42MSw2Ny43NywxMTUuMjMsNzMuMzMsMTkzLjc2QzQzMiwzNzkuNzYsMzY3LjczLDQ2Ny4zOCwyNjUuNjQsNDY5LjczaC0uMjFjLTM3LjU2Ljg2LTcwLjEzLTkuNDMtOTYuMjgtMjguNjhDMTgzLjE4LDQ0MS42NywyMDAuNCw0MzkuNDIsMjE0LjY1LDQzNi42N1oiIGNsYXNzPSJjbHMtOSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image2.onmouseover=function (e) {
			me._ht_info_image2__img.style.visibility='hidden';
			me._ht_info_image2__imgo.style.visibility='inherit';
		}
		me._ht_info_image2.onmouseout=function (e) {
			me._ht_info_image2__img.style.visibility='inherit';
			me._ht_info_image2__imgo.style.visibility='hidden';
		}
		me._ht_info_image2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_18.appendChild(me._ht_info_image2);
		el=me._tt_information2=document.createElement('div');
		els=me._tt_information2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information2.style[domTransition]='left 0s, top 0s';
				if (me._tt_information2.ggCurrentLogicStatePosition == 0) {
					me._tt_information2.style.left='-50px';
					me._tt_information2.style.top='-47px';
				}
				else {
					me._tt_information2.style.left='-50px';
					me._tt_information2.style.top='21px';
				}
			}
		}
		me._tt_information2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_18'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information2.style[domTransition]='left 0s, top 0s';
				if (me._tt_information2.ggCurrentLogicStateVisible == 0) {
					me._tt_information2.style.visibility=(Number(me._tt_information2.style.opacity)>0||!me._tt_information2.style.opacity)?'inherit':'hidden';
					me._tt_information2.ggVisible=true;
				}
				else {
					me._tt_information2.style.visibility="hidden";
					me._tt_information2.ggVisible=false;
				}
			}
		}
		me._tt_information2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_18.appendChild(me._tt_information2);
		me.__div = me._ht_egg_18;
	};
	function SkinHotspotClass_ht_egg_19(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_19=document.createElement('div');
		el.ggId="ht_egg_19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_19.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_19.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_19') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_19.style[domTransition]='';
				if (me._ht_egg_19.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_19.style.visibility="hidden";
					me._ht_egg_19.ggVisible=false;
				}
				else {
					me._ht_egg_19.style.visibility=(Number(me._ht_egg_19.style.opacity)>0||!me._ht_egg_19.style.opacity)?'inherit':'hidden';
					me._ht_egg_19.ggVisible=true;
				}
			}
		}
		me._ht_egg_19.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_19') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_19') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_19') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_19') == 0))
				)
			) {
				player.setVariableValue('my_count_19', player.getVariableValue('my_count_19') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_19.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_19.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_19']=true;
			me._tt_information1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_19.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_19']=false;
			me._tt_information1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_19.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_19']=false;
			me._tt_information1.logicBlock_visible();
		}
		me._ht_egg_19.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image1=document.createElement('div');
		els=me._ht_info_image1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmNscy0xe2lzb2xhdGlvbjppc29sYXRlO30uY2xzLTJ7ZmlsbDp1cmwoI1NmdW1hdHVyYV9zZW56YV9ub21lXzMxKTt9LmNscy0ze2ZpbGw6I2VjNWE1NTt9LmNscy00e2ZpbGw6IzA2NWJhZTt9LmNscy01e2ZpbGw6I2Y3ODRiMDt9LmNscy02e29wYWNpdHk6MC44O30uY2xzLTcsLmNscy05e2ZpbGw6I2ZmZjt9LmNscy04e2ZpbGw6I2U2ZTZlNjtvcGFjaXR5OjAuODM7bWl4LW'+
			'JsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtOXtvcGFjaXR5OjAuMjU7fS5jbHMtMTB7ZmlsbDojZjJmMmYyO29wYWNpdHk6MC4yO30uY2xzLTExe2ZpbGw6IzAwMmY1MDt9PC9zdHlsZT4KICA8cmFkaWFsR3JhZGllbnQgY3k9IjIwNy4yMyIgcj0iMjUzLjgiIGN4PSI2OS42OCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMSwgMCwgMCwgMSwgMzEwLjg3LCAwKSIgaWQ9IlNmdW1hdHVyYV9zZW56YV9ub21lXzMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzYzY2ViYyIvPgogICA8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0'+
			'b3AtY29sb3I9IiM2MGNjYmEiLz4KICAgPHN0b3Agb2Zmc2V0PSIwLjY0IiBzdG9wLWNvbG9yPSIjNTVjNWIzIi8+CiAgIDxzdG9wIG9mZnNldD0iMC45MiIgc3RvcC1jb2xvcj0iIzQ0YmFhOCIvPgogICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzZGI2YTQiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogPC9kZWZzPgogPHRpdGxlPlYmYW1wO2FtcDtBIEVnZzwvdGl0bGU+CiA8ZyBjbGFzcz0iY2xzLTEiPgogIDxnIGRhdGEtbmFtZT0iTGF5ZXIgMSIgaWQ9IkxheWVyXzEiPgogICA8cGF0aCBkPSJNMjU5Ljg3LDQ4NC43MmMxMDMtMi4zNywxNjcuNzQtOTAuNzQsMTU5LjU5LTIwNS44My'+
			'0xMC0xNDAuODYtOTgtMjUzLjI4LTE2OC44Ny0yNTEuNjVoLS4yMkMxODMuMTgsMjguNzksOTMuMjgsMTQ1LjIsOTEuODcsMjg2LjQzYy0xLjIxLDEyMC4xMiw2NC44MiwyMDAuNjcsMTY3Ljc5LDE5OC4zWiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Ik0yNTAuMzcsMjcuMjVoLjIyYzQ0Ljg1LTEsOTYuNiw0My43MSwxMzEuMDcsMTEyLjQybC0yMy45NCwxMy43My01MS42Mi0yOC4xLTUxLDI2Ljc5LTUxLTI5LjQtNDkuNjYsMjkuNC0yNy4xMy0xNC4yNkMxNjAsNzEuODgsMjA5LjQsMjguMTksMjUwLjM3LDI3LjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Ik05OS44MiwyMTYu'+
			'NzhsMy43Mi0xLjMxLDQ5LDMwLjcxLDUxLTI4Ljc1LDU0Ljg5LDI2Ljc5LDQ3LTI2LjE0LDUxLjYyLDI3LjQ0LDUzLjA4LTI3LjA5YTM3Ni41MSwzNzYuNTEsMCwwLDEsOS4zMSw2MC40NiwyNjYuNjcsMjY2LjY3LDAsMCwxLC4zMywzMi43bC0xMi40LTMuMzRMMzU5LDMzN2wtNTAuMzEtMjguNzUtNTEuNjIsMjguMS01Mi4yNy0yNy40NC00OSwyOC43NS01Mi4yNy0yNy40NEw5Mi44NywzMTRjLS43My05LTEuMDktMTguMTQtMS0yNy42QTM0My4xNywzNDMuMTcsMCwwLDEsOTkuODIsMjE2Ljc4WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Ik0xMjUuNzgsNDE2LjgzbDI5LjM3LDEzLjYxTD'+
			'IwNS40Nyw0MDFsNDkuNjYsMjguMSw0OS42Ni0yNi43OSw1Mi4yNywyOC4xLDI5LTEzYy0yOCw0MC42NS03MS43NCw2Ni0xMjYuMjQsNjcuMjZoLS4yMkMyMDEuMzUsNDg2LjA3LDE1NC45LDQ2MC44LDEyNS43OCw0MTYuODNaIiBjbGFzcz0iY2xzLTUiLz4KICAgPGcgY2xhc3M9ImNscy02Ij4KICAgIDxwYXRoIGQ9Ik0xMTYuMzcsNDAwLjc5bDM4LjE0LDIyLjY2LDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMywzOS44Ny0yMy42OWExNzAuNjgsMTcwLjY4LDAsMCwxLTE3LDI2LjNsLTE5LjMyLDExLjQ4'+
			'YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSw0MzYuMTNhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMyw0MDkuMjlsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0xOC0xMC42OUExNzAuNTYsMTcwLjU2LDAsMCwxLDExNi4zNyw0MDAuNzlaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik0zNjAuNDEsMTU5LjE4YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwxNTcuNzZhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywxMzAuOTJsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC0yNi40MS0xNS43cTMtNi4zOSw2LjIzLTEyLjQ5bDIzLjY5LDE0LjA4LD'+
			'Q3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yM0wzNzgsMTMyLjU1cTMuMjQsNi4xLDYuMzEsMTIuNDVaIiBjbGFzcz0iY2xzLTciLz4KICAgIDxwYXRoIGQ9Ik00MDgsMjIzLjc0LDM2MC40MSwyNTJhNyw3LDAsMCwxLTcuMTIsMGwtNDcuNDctMjguMjdMMjU5LDI1MC41OGE3LDcsMCwwLDEtNi45MywwTDIwNS4zLDIyMy43NGwtNDYuNTUsMjcuODVBNyw3LDAsMCwxLDE1MSwyNTJsLTQ3LjU4LTI4LjI3TDk3Ljc1LDIyN2MxLjEzLTYuMDcsMi4zOS0xMi4wOCwzLjgyLTE4YTYuOTQsNi45NCwwLDAsMSw1LjQ4'+
			'LjY4bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E2Ljk0LDYuOTQsMCwwLDEsMy4zMy0xYzEuNTEsNS42NywyLjkyLDExLjQsNC4xOCwxNy4yM1oiIGNsYXNzPSJjbHMtNyIvPgogICAgPHBhdGggZD0iTTEwMCwzMDIuNDZhNyw3LDAsMCwxLDcsLjA1bDQ3LjQ3LDI4LjIxLDQ3LjEzLTI4LjJhNyw3LDAsMCwxLDctLjA2bDQ2Ljg3LDI2Ljg4LDQ2Ljg3LTI2Ljg4YTcsNywwLDAsMSw3LC4wNmw0Ny40MSwyOC4yMyw0Ny41MS0yOC4yM2E3LDcsMCwwLDEsNy0uMD'+
			'VsOC41Niw0LjkxcS0uMjgsNy44NC0xLDE1LjQ3TDQwOCwzMTYuNTZsLTQ3LjU4LDI4LjI3YTcsNywwLDAsMS03LjEyLDBsLTQ3LjQ3LTI4LjI3TDI1OSwzNDMuNDFhNyw3LDAsMCwxLTYuOTMsMEwyMDUuMywzMTYuNTdsLTQ2LjU1LDI3Ljg1YTcsNywwLDAsMS03Ljc0LjQybC00Ny41OC0yOC4yNy05Ljc5LDUuNjJjLS41NS01LTEtMTAuMTItMS4yOC0xNS4zMVoiIGNsYXNzPSJjbHMtNyIvPgogICA8L2c+CiAgIDxwYXRoIGQ9Ik0yMDguNDQsNDUxLjM4bC4yNCwwYzExMy43OS0yMiwxNzkuNy0xNDkuNTYsMTUxLjUxLTMwNC43MWE1ODMuMjUsNTgzLjI1LDAsMCwwLTE0Ljc3LTYzLjI0aDBsLjA3'+
			'LjA5YzM4LDQ2LDY4LjM1LDExNi4yMiw3NCwxOTUuNDNDNDI3LjYyLDM5NCwzNjIuODQsNDgyLjM1LDI1OS44Nyw0ODQuNzJoLS4yMmMtMzcuODguODctNzAuNzQtOS41MS05Ny4xMS0yOC45M0MxNzYuNzEsNDU2LjQzLDE5NC4wNyw0NTQuMTYsMjA4LjQ0LDQ1MS4zOFoiIGNsYXNzPSJjbHMtOCIvPgogICA8cGF0aCBkPSJNMjQzLjk1LDQ4My40NmguMjNjODMuNTQtNS4xNCwxNTAtNjguMjUsMTczLjcyLTE1MS42MS0xMiw4OC4yMi03MS41MywxNTAuOS0xNTgsMTUyLjg5aC0uMjJhMTgxLjQ4LDE4MS40OCwwLDAsMS0yMy4xMS0xQzIzOSw0ODMuNywyNDEuNDYsNDgzLjYxLDI0My45NSw0ODMuND'+
			'ZaIiBjbGFzcz0iY2xzLTkiLz4KICAgPHBhdGggZD0iTTE1Mi4yMSwyNjcuMjljLTEzLjI3LTcuNi0yMi43NS0yMy4xMi0yNi43LTQzLjY5LTUtMjYtLjcyLTU3LjE0LDExLjcyLTg1LjM2LDEyLjg2LTI5LjE2LDMwLjk1LTUzLDUwLjkzLTY3LjE3LDE4LjQ5LTEzLjEsMzYuNDYtMTYuMzgsNDkuMy05LDI0Ljk1LDE0LjI5LDM2LDcxLjc1LDEwLjYxLDEzOS43NC0xMC40NiwyOC0yOC40MSw1MC43Ny00OS4yNiw2Mi42MS0xNi43Miw5LjUyLTMzLjI1LDEwLjU2LTQ2LjU0LDIuOTRaIiBjbGFzcz0iY2xzLTEwIi8+CiAgIDxlbGxpcHNlIGN5PSIxMTUuODkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0w'+
			'LjEzIDAuMykgcm90YXRlKC0wLjA3KSIgY3g9IjI1Ni41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4zKSByb3RhdGUoLTAuMDcpIiBjeD0iMjU2LjU1IiByeT0iNi4yIiBjbGFzcz0iY2xzLTExIiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iNDMyLjM1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IDAuMjQpIHJvdGF0ZSgtMC4wNykiIGN4PSIyMDUuNzQiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtMTEiIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSI0MzIuMzUiIHRyYW5zZm'+
			'9ybT0idHJhbnNsYXRlKC0wLjUgMC4zNSkgcm90YXRlKC0wLjA3KSIgY3g9IjMwNy4yNiIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjE4NC40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjEgMC4yMykgcm90YXRlKC0wLjA3KSIgY3g9IjIwMi44NSIgcnk9IjYuMiIgY2xhc3M9ImNscy03IiByeD0iOC45NCIvPgogICA8ZWxsaXBzZSBjeT0iMzkxLjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjQ1IDAuMTcpIHJvdGF0ZSgtMC4wNykiIGN4PSIxNTAuMDgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2Ug'+
			'Y3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjMpIHJvdGF0ZSgtMC4wNykiIGN4PSIyNTYuODciIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjM5MS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC40NSAwLjQyKSByb3RhdGUoLTAuMDcpIiBjeD0iMzYwLjEyIiByeT0iNi4yIiBjbGFzcz0iY2xzLTciIHJ4PSI4Ljk0Ii8+CiAgIDxlbGxpcHNlIGN5PSIxODQuNDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjIxIDAuMzUpIHJvdGF0ZSgtMC4wNykiIGN4PSIzMDYuOTgiIHJ5PSI2LjIiIGNsYXNzPSJjbHMtNyIgcng9IjguOT'+
			'QiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC4xOSkgcm90YXRlKC0wLjA3KSIgY3g9IjE2Mi41NSIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICAgPGVsbGlwc2UgY3k9IjExNS44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTMgMC40MSkgcm90YXRlKC0wLjA3KSIgY3g9IjM1NC4xMyIgcnk9IjYuMiIgY2xhc3M9ImNscy0xMSIgcng9IjguOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image1.onmouseover=function (e) {
			me._ht_info_image1__img.style.visibility='hidden';
			me._ht_info_image1__imgo.style.visibility='inherit';
		}
		me._ht_info_image1.onmouseout=function (e) {
			me._ht_info_image1__img.style.visibility='inherit';
			me._ht_info_image1__imgo.style.visibility='hidden';
		}
		me._ht_info_image1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_19.appendChild(me._ht_info_image1);
		el=me._tt_information1=document.createElement('div');
		els=me._tt_information1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information1.style[domTransition]='left 0s, top 0s';
				if (me._tt_information1.ggCurrentLogicStatePosition == 0) {
					me._tt_information1.style.left='-50px';
					me._tt_information1.style.top='-47px';
				}
				else {
					me._tt_information1.style.left='-50px';
					me._tt_information1.style.top='21px';
				}
			}
		}
		me._tt_information1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_19'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information1.style[domTransition]='left 0s, top 0s';
				if (me._tt_information1.ggCurrentLogicStateVisible == 0) {
					me._tt_information1.style.visibility=(Number(me._tt_information1.style.opacity)>0||!me._tt_information1.style.opacity)?'inherit':'hidden';
					me._tt_information1.ggVisible=true;
				}
				else {
					me._tt_information1.style.visibility="hidden";
					me._tt_information1.ggVisible=false;
				}
			}
		}
		me._tt_information1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_19.appendChild(me._tt_information1);
		me.__div = me._ht_egg_19;
	};
	function SkinHotspotClass_ht_egg_20(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_20=document.createElement('div');
		el.ggId="ht_egg_20";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_20.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_20') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_20.style[domTransition]='';
				if (me._ht_egg_20.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_20.style.visibility="hidden";
					me._ht_egg_20.ggVisible=false;
				}
				else {
					me._ht_egg_20.style.visibility=(Number(me._ht_egg_20.style.opacity)>0||!me._ht_egg_20.style.opacity)?'inherit':'hidden';
					me._ht_egg_20.ggVisible=true;
				}
			}
		}
		me._ht_egg_20.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_20') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_20') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_20') == 0))
				)
			) {
				player.setVariableValue('my_total_count', player.getVariableValue('my_total_count') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('my_count_20') == 0))
				)
			) {
				player.setVariableValue('my_count_20', player.getVariableValue('my_count_20') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_20.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_20.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_20']=true;
			me._tt_information0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_20.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_20']=false;
			me._tt_information0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_20.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_20']=false;
			me._tt_information0.logicBlock_visible();
		}
		me._ht_egg_20.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image0=document.createElement('div');
		els=me._ht_info_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_info_image0__img.setAttribute('src',basePath + 'images/ht_info_image0.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ht_info_image0__imgo.setAttribute('src',basePath + 'images/ht_info_image0__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image0.onmouseover=function (e) {
			me._ht_info_image0__img.style.visibility='hidden';
			me._ht_info_image0__imgo.style.visibility='inherit';
		}
		me._ht_info_image0.onmouseout=function (e) {
			me._ht_info_image0__img.style.visibility='inherit';
			me._ht_info_image0__imgo.style.visibility='hidden';
		}
		me._ht_info_image0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_20.appendChild(me._ht_info_image0);
		el=me._tt_information0=document.createElement('div');
		els=me._tt_information0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information0.style[domTransition]='left 0s, top 0s';
				if (me._tt_information0.ggCurrentLogicStatePosition == 0) {
					me._tt_information0.style.left='-50px';
					me._tt_information0.style.top='-47px';
				}
				else {
					me._tt_information0.style.left='-50px';
					me._tt_information0.style.top='21px';
				}
			}
		}
		me._tt_information0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_20'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information0.style[domTransition]='left 0s, top 0s';
				if (me._tt_information0.ggCurrentLogicStateVisible == 0) {
					me._tt_information0.style.visibility=(Number(me._tt_information0.style.opacity)>0||!me._tt_information0.style.opacity)?'inherit':'hidden';
					me._tt_information0.ggVisible=true;
				}
				else {
					me._tt_information0.style.visibility="hidden";
					me._tt_information0.ggVisible=false;
				}
			}
		}
		me._tt_information0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_20.appendChild(me._tt_information0);
		me.__div = me._ht_egg_20;
	};
	function SkinHotspotClass_ht_egg_special(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_egg_special=document.createElement('div');
		el.ggId="ht_egg_special";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_egg_special.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_egg_special.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('my_count_special') > 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_egg_special.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_egg_special.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_egg_special.style[domTransition]='';
				if (me._ht_egg_special.ggCurrentLogicStateVisible == 0) {
					me._ht_egg_special.style.visibility="hidden";
					me._ht_egg_special.ggVisible=false;
				}
				else {
					me._ht_egg_special.style.visibility=(Number(me._ht_egg_special.style.opacity)>0||!me._ht_egg_special.style.opacity)?'inherit':'hidden';
					me._ht_egg_special.ggVisible=true;
				}
			}
		}
		me._ht_egg_special.onclick=function (e) {
			skin._info_eggtitle.ggText=me.hotspot.title;
			skin._info_eggtitle.ggTextDiv.innerHTML=skin._info_eggtitle.ggText;
			if (skin._info_eggtitle.ggUpdateText) {
				skin._info_eggtitle.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtitle.ggUpdatePosition) {
				skin._info_eggtitle.ggUpdatePosition();
			}
			skin._info_eggtitle.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_special') == 0))
				)
			) {
				player.setVariableValue('vis_egg_popup', true);
			}
			if (
				(
					((player.getVariableValue('my_count_special') == 0))
				)
			) {
				skin._egg_show_timer.ggTimeout=Number("2") * 1000.0;
				skin._egg_show_timer.ggTimestamp=skin.ggCurrentTime;
			}
			skin._info_eggtext_body.ggText=me.hotspot.description;
			skin._info_eggtext_body.ggTextDiv.innerHTML=skin._info_eggtext_body.ggText;
			if (skin._info_eggtext_body.ggUpdateText) {
				skin._info_eggtext_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_eggtext_body.ggUpdatePosition) {
				skin._info_eggtext_body.ggUpdatePosition();
			}
			skin._info_eggtext_body.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('my_count_special') == 0))
				)
			) {
				player.setVariableValue('my_count_special', player.getVariableValue('my_count_special') + Number("1"));
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_special.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_special.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_egg_special']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_special.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_egg_special']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_egg_special.ontouchend=function (e) {
			me.elementMouseOver['ht_egg_special']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_egg_special.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ht_info_image__imgo.setAttribute('src',basePath + 'images/ht_info_image__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_egg_special.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='-47px';
				}
				else {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='21px';
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_egg_special'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_egg_special.appendChild(me._tt_information);
		me.__div = me._ht_egg_special;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
		} else
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview();;
		} else
		if (hotspot.skinid=='ht_egg_1') {
			hotspot.skinid = 'ht_egg_1';
			hsinst = new SkinHotspotClass_ht_egg_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_1_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_1_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_1_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_1_varchanged_my_count_1();;
		} else
		if (hotspot.skinid=='ht_egg_2') {
			hotspot.skinid = 'ht_egg_2';
			hsinst = new SkinHotspotClass_ht_egg_2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_2_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_2_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_2_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_2_varchanged_my_count_2();;
		} else
		if (hotspot.skinid=='ht_egg_3') {
			hotspot.skinid = 'ht_egg_3';
			hsinst = new SkinHotspotClass_ht_egg_3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_3_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_3_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_3_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_3_varchanged_my_count_3();;
		} else
		if (hotspot.skinid=='ht_egg_4') {
			hotspot.skinid = 'ht_egg_4';
			hsinst = new SkinHotspotClass_ht_egg_4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_4_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_4_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_4_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_4_varchanged_my_count_4();;
		} else
		if (hotspot.skinid=='ht_egg_5') {
			hotspot.skinid = 'ht_egg_5';
			hsinst = new SkinHotspotClass_ht_egg_5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_5_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_5_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_5_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_5_varchanged_my_count_5();;
		} else
		if (hotspot.skinid=='ht_egg_6') {
			hotspot.skinid = 'ht_egg_6';
			hsinst = new SkinHotspotClass_ht_egg_6(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_6_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_6_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_6_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_6_varchanged_my_count_6();;
		} else
		if (hotspot.skinid=='ht_egg_7') {
			hotspot.skinid = 'ht_egg_7';
			hsinst = new SkinHotspotClass_ht_egg_7(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_7_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_7_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_7_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_7_varchanged_my_count_7();;
		} else
		if (hotspot.skinid=='ht_egg_8') {
			hotspot.skinid = 'ht_egg_8';
			hsinst = new SkinHotspotClass_ht_egg_8(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_8_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_8_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_8_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_8_varchanged_my_count_8();;
		} else
		if (hotspot.skinid=='ht_egg_9') {
			hotspot.skinid = 'ht_egg_9';
			hsinst = new SkinHotspotClass_ht_egg_9(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_9_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_9_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_9_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_9_varchanged_my_count_9();;
		} else
		if (hotspot.skinid=='ht_egg_10') {
			hotspot.skinid = 'ht_egg_10';
			hsinst = new SkinHotspotClass_ht_egg_10(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_10_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_10_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_10_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_10_varchanged_my_count_10();;
		} else
		if (hotspot.skinid=='ht_egg_11') {
			hotspot.skinid = 'ht_egg_11';
			hsinst = new SkinHotspotClass_ht_egg_11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_11_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_11_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_11_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_11_varchanged_my_count_11();;
		} else
		if (hotspot.skinid=='ht_egg_12') {
			hotspot.skinid = 'ht_egg_12';
			hsinst = new SkinHotspotClass_ht_egg_12(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_12_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_12_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_12_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_12_varchanged_my_count_12();;
		} else
		if (hotspot.skinid=='ht_egg_13') {
			hotspot.skinid = 'ht_egg_13';
			hsinst = new SkinHotspotClass_ht_egg_13(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_13_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_13_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_13_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_13_varchanged_my_count_13();;
		} else
		if (hotspot.skinid=='ht_egg_14') {
			hotspot.skinid = 'ht_egg_14';
			hsinst = new SkinHotspotClass_ht_egg_14(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_14_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_14_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_14_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_14_varchanged_my_count_14();;
		} else
		if (hotspot.skinid=='ht_egg_15') {
			hotspot.skinid = 'ht_egg_15';
			hsinst = new SkinHotspotClass_ht_egg_15(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_15_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_15_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_15_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_15_varchanged_my_count_15();;
		} else
		if (hotspot.skinid=='ht_egg_16') {
			hotspot.skinid = 'ht_egg_16';
			hsinst = new SkinHotspotClass_ht_egg_16(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_16_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_16_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_16_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_16_varchanged_my_count_16();;
		} else
		if (hotspot.skinid=='ht_egg_17') {
			hotspot.skinid = 'ht_egg_17';
			hsinst = new SkinHotspotClass_ht_egg_17(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_17_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_17_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_17_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_17_varchanged_my_count_17();;
		} else
		if (hotspot.skinid=='ht_egg_18') {
			hotspot.skinid = 'ht_egg_18';
			hsinst = new SkinHotspotClass_ht_egg_18(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_18_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_18_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_18_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_18_varchanged_my_count_18();;
		} else
		if (hotspot.skinid=='ht_egg_19') {
			hotspot.skinid = 'ht_egg_19';
			hsinst = new SkinHotspotClass_ht_egg_19(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_19_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_19_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_19_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_19_varchanged_my_count_19();;
		} else
		if (hotspot.skinid=='ht_egg_20') {
			hotspot.skinid = 'ht_egg_20';
			hsinst = new SkinHotspotClass_ht_egg_20(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_20_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_20_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_20_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_20_varchanged_my_count_20();;
		} else
		{
			hotspot.skinid = 'ht_egg_special';
			hsinst = new SkinHotspotClass_ht_egg_special(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_egg_special_changenode();;
			me.callChildLogicBlocksHotspot_ht_egg_special_configloaded();;
			me.callChildLogicBlocksHotspot_ht_egg_special_mouseover();;
			me.callChildLogicBlocksHotspot_ht_egg_special_varchanged_my_count_special();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_1'].length; i++) {
				hotspotTemplates['ht_egg_1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_2'].length; i++) {
				hotspotTemplates['ht_egg_2'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_3'].length; i++) {
				hotspotTemplates['ht_egg_3'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_4']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_4'].length; i++) {
				hotspotTemplates['ht_egg_4'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_5']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_5'].length; i++) {
				hotspotTemplates['ht_egg_5'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_6']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_6'].length; i++) {
				hotspotTemplates['ht_egg_6'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_7']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_7'].length; i++) {
				hotspotTemplates['ht_egg_7'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_8']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_8'].length; i++) {
				hotspotTemplates['ht_egg_8'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_9']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_9'].length; i++) {
				hotspotTemplates['ht_egg_9'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_10']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_10'].length; i++) {
				hotspotTemplates['ht_egg_10'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_11']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_11'].length; i++) {
				hotspotTemplates['ht_egg_11'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_12']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_12'].length; i++) {
				hotspotTemplates['ht_egg_12'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_13']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_13'].length; i++) {
				hotspotTemplates['ht_egg_13'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_14']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_14'].length; i++) {
				hotspotTemplates['ht_egg_14'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_15']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_15'].length; i++) {
				hotspotTemplates['ht_egg_15'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_16']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_16'].length; i++) {
				hotspotTemplates['ht_egg_16'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_17']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_17'].length; i++) {
				hotspotTemplates['ht_egg_17'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_18']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_18'].length; i++) {
				hotspotTemplates['ht_egg_18'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_19']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_19'].length; i++) {
				hotspotTemplates['ht_egg_19'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_20']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_20'].length; i++) {
				hotspotTemplates['ht_egg_20'][i] = null;
			}
		}
		if(hotspotTemplates['ht_egg_special']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_egg_special'].length; i++) {
				hotspotTemplates['ht_egg_special'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	me._eggfound.logicBlock_visible();
	me._visible_counters.logicBlock_visible();
	me._count_status.logicBlock_text();
	me._resetcounter.logicBlock_visible();
	me._start.logicBlock_visible();
	me._alleggsfound.logicBlock_visible();
	me._information.logicBlock_size();
	me._eggfound.logicBlock_size();
	me._button_next_previous.logicBlock_size();
	me._tt_pano_prev.logicBlock_position();
	me._tt_pano_next0.logicBlock_position();
	me._tt_pano_next.logicBlock_position();
	me._start.logicBlock_size();
	me._text_2.logicBlock_text();
	me._alleggsfound.logicBlock_size();
	player.addListener('changenode', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible();me._eggfound.logicBlock_visible();me._visible_counters.logicBlock_visible();me._count_status.logicBlock_text();me._resetcounter.logicBlock_visible();me._start.logicBlock_visible();me._alleggsfound.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._information.logicBlock_size();me._eggfound.logicBlock_size();me._button_next_previous.logicBlock_size();me._tt_pano_prev.logicBlock_position();me._tt_pano_next0.logicBlock_position();me._tt_pano_next.logicBlock_position();me._start.logicBlock_size();me._text_2.logicBlock_text();me._alleggsfound.logicBlock_size(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_egg_popup', function(args) { me._eggfound.logicBlock_visible(); });
	player.addListener('varchanged_my_total_count', function(args) { me._count_status.logicBlock_text();me._resetcounter.logicBlock_visible();me._alleggsfound.logicBlock_visible(); });
	player.addListener('varchanged_vis_start_popup', function(args) { me._start.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_egg_1_changenode();me.callChildLogicBlocksHotspot_ht_egg_2_changenode();me.callChildLogicBlocksHotspot_ht_egg_3_changenode();me.callChildLogicBlocksHotspot_ht_egg_4_changenode();me.callChildLogicBlocksHotspot_ht_egg_5_changenode();me.callChildLogicBlocksHotspot_ht_egg_6_changenode();me.callChildLogicBlocksHotspot_ht_egg_7_changenode();me.callChildLogicBlocksHotspot_ht_egg_8_changenode();me.callChildLogicBlocksHotspot_ht_egg_9_changenode();me.callChildLogicBlocksHotspot_ht_egg_10_changenode();me.callChildLogicBlocksHotspot_ht_egg_11_changenode();me.callChildLogicBlocksHotspot_ht_egg_12_changenode();me.callChildLogicBlocksHotspot_ht_egg_13_changenode();me.callChildLogicBlocksHotspot_ht_egg_14_changenode();me.callChildLogicBlocksHotspot_ht_egg_15_changenode();me.callChildLogicBlocksHotspot_ht_egg_16_changenode();me.callChildLogicBlocksHotspot_ht_egg_17_changenode();me.callChildLogicBlocksHotspot_ht_egg_18_changenode();me.callChildLogicBlocksHotspot_ht_egg_19_changenode();me.callChildLogicBlocksHotspot_ht_egg_20_changenode();me.callChildLogicBlocksHotspot_ht_egg_special_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_info_configloaded();me.callChildLogicBlocksHotspot_ht_node_configloaded();me.callChildLogicBlocksHotspot_ht_egg_1_configloaded();me.callChildLogicBlocksHotspot_ht_egg_2_configloaded();me.callChildLogicBlocksHotspot_ht_egg_3_configloaded();me.callChildLogicBlocksHotspot_ht_egg_4_configloaded();me.callChildLogicBlocksHotspot_ht_egg_5_configloaded();me.callChildLogicBlocksHotspot_ht_egg_6_configloaded();me.callChildLogicBlocksHotspot_ht_egg_7_configloaded();me.callChildLogicBlocksHotspot_ht_egg_8_configloaded();me.callChildLogicBlocksHotspot_ht_egg_9_configloaded();me.callChildLogicBlocksHotspot_ht_egg_10_configloaded();me.callChildLogicBlocksHotspot_ht_egg_11_configloaded();me.callChildLogicBlocksHotspot_ht_egg_12_configloaded();me.callChildLogicBlocksHotspot_ht_egg_13_configloaded();me.callChildLogicBlocksHotspot_ht_egg_14_configloaded();me.callChildLogicBlocksHotspot_ht_egg_15_configloaded();me.callChildLogicBlocksHotspot_ht_egg_16_configloaded();me.callChildLogicBlocksHotspot_ht_egg_17_configloaded();me.callChildLogicBlocksHotspot_ht_egg_18_configloaded();me.callChildLogicBlocksHotspot_ht_egg_19_configloaded();me.callChildLogicBlocksHotspot_ht_egg_20_configloaded();me.callChildLogicBlocksHotspot_ht_egg_special_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_egg_1_mouseover();me.callChildLogicBlocksHotspot_ht_egg_2_mouseover();me.callChildLogicBlocksHotspot_ht_egg_3_mouseover();me.callChildLogicBlocksHotspot_ht_egg_4_mouseover();me.callChildLogicBlocksHotspot_ht_egg_5_mouseover();me.callChildLogicBlocksHotspot_ht_egg_6_mouseover();me.callChildLogicBlocksHotspot_ht_egg_7_mouseover();me.callChildLogicBlocksHotspot_ht_egg_8_mouseover();me.callChildLogicBlocksHotspot_ht_egg_9_mouseover();me.callChildLogicBlocksHotspot_ht_egg_10_mouseover();me.callChildLogicBlocksHotspot_ht_egg_11_mouseover();me.callChildLogicBlocksHotspot_ht_egg_12_mouseover();me.callChildLogicBlocksHotspot_ht_egg_13_mouseover();me.callChildLogicBlocksHotspot_ht_egg_14_mouseover();me.callChildLogicBlocksHotspot_ht_egg_15_mouseover();me.callChildLogicBlocksHotspot_ht_egg_16_mouseover();me.callChildLogicBlocksHotspot_ht_egg_17_mouseover();me.callChildLogicBlocksHotspot_ht_egg_18_mouseover();me.callChildLogicBlocksHotspot_ht_egg_19_mouseover();me.callChildLogicBlocksHotspot_ht_egg_20_mouseover();me.callChildLogicBlocksHotspot_ht_egg_special_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('varchanged_my_count_1', function(args) { me.callChildLogicBlocksHotspot_ht_egg_1_varchanged_my_count_1(); });
	player.addListener('varchanged_my_count_2', function(args) { me.callChildLogicBlocksHotspot_ht_egg_2_varchanged_my_count_2(); });
	player.addListener('varchanged_my_count_3', function(args) { me.callChildLogicBlocksHotspot_ht_egg_3_varchanged_my_count_3(); });
	player.addListener('varchanged_my_count_4', function(args) { me.callChildLogicBlocksHotspot_ht_egg_4_varchanged_my_count_4(); });
	player.addListener('varchanged_my_count_5', function(args) { me.callChildLogicBlocksHotspot_ht_egg_5_varchanged_my_count_5(); });
	player.addListener('varchanged_my_count_6', function(args) { me.callChildLogicBlocksHotspot_ht_egg_6_varchanged_my_count_6(); });
	player.addListener('varchanged_my_count_7', function(args) { me.callChildLogicBlocksHotspot_ht_egg_7_varchanged_my_count_7(); });
	player.addListener('varchanged_my_count_8', function(args) { me.callChildLogicBlocksHotspot_ht_egg_8_varchanged_my_count_8(); });
	player.addListener('varchanged_my_count_9', function(args) { me.callChildLogicBlocksHotspot_ht_egg_9_varchanged_my_count_9(); });
	player.addListener('varchanged_my_count_10', function(args) { me.callChildLogicBlocksHotspot_ht_egg_10_varchanged_my_count_10(); });
	player.addListener('varchanged_my_count_11', function(args) { me.callChildLogicBlocksHotspot_ht_egg_11_varchanged_my_count_11(); });
	player.addListener('varchanged_my_count_12', function(args) { me.callChildLogicBlocksHotspot_ht_egg_12_varchanged_my_count_12(); });
	player.addListener('varchanged_my_count_13', function(args) { me.callChildLogicBlocksHotspot_ht_egg_13_varchanged_my_count_13(); });
	player.addListener('varchanged_my_count_14', function(args) { me.callChildLogicBlocksHotspot_ht_egg_14_varchanged_my_count_14(); });
	player.addListener('varchanged_my_count_15', function(args) { me.callChildLogicBlocksHotspot_ht_egg_15_varchanged_my_count_15(); });
	player.addListener('varchanged_my_count_16', function(args) { me.callChildLogicBlocksHotspot_ht_egg_16_varchanged_my_count_16(); });
	player.addListener('varchanged_my_count_17', function(args) { me.callChildLogicBlocksHotspot_ht_egg_17_varchanged_my_count_17(); });
	player.addListener('varchanged_my_count_18', function(args) { me.callChildLogicBlocksHotspot_ht_egg_18_varchanged_my_count_18(); });
	player.addListener('varchanged_my_count_19', function(args) { me.callChildLogicBlocksHotspot_ht_egg_19_varchanged_my_count_19(); });
	player.addListener('varchanged_my_count_20', function(args) { me.callChildLogicBlocksHotspot_ht_egg_20_varchanged_my_count_20(); });
	player.addListener('varchanged_my_count_special', function(args) { me.callChildLogicBlocksHotspot_ht_egg_special_varchanged_my_count_special(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};