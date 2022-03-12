window.onload = msShowPopup;

function msShowPopup() {
	var _contStyle = 'box-sizing:border-box;position:fixed; overflow:hidden; top:calc(50vh - 307px); left:calc(50vw - 485px); padding:0; width:970px; z-index:88; text-transform:uppercase; letter-spacing:0.05em; color:#fff !important; font-family: Arial !important; font-size:58px; background:#01ab8b; border:10px solid #fff;';
	
	var _textwrap = 'box-sizing:border-box; flex:1 1 50%; padding:50px; display:flex; flex-direction:column; align-items:flex-start;';
	
	var _closeButtonStyle = 'position:absolute; z-index:99; top:10px; right:10px; display:block; padding:0; font-size:16px; cursor: pointer; opacity:1;';
	
	var _toptext = '<div style="font-size:1em; line-height:1.2; font-weight:300; margin:0 0 0.2em;">Хочешь газ?</div>';
	var _bottomtext = '<div style="font-size:1em; line-height:1.2; font-weight:bold; margin:0 0 0.5em">Подай заявку!</div>';
	
	var _button = '<div style="flex-grow:1;"></div><a href="https://connectgas.ru/stages/dogasification" target="_blank" style="display:inline-block; padding:0.5em 1em; border-top-left-radius:10px; border-bottom-right-radius:10px; font-family: Arial !important; font-weight:bold !important; font-size:0.4em !important; background:#80264A !important; color:#fff !important; text-decoration:none !important; border:none !important; justify-self:flex-end;">Подробнее ›</a>';
	
	var _phoneHtml = '';

	if (typeof localStorage !== 'undefined') {
		if (localStorage.getItem('msPopupHided') !== '1') {
			addPopup();
		}
	} else { 
		// no localstorage
		addPopup();
	} 


	function addPopup() {
		if (window.innerWidth < 500) {
			// mobile
			_contStyle += 'width:100%; top: auto; left:0; right:0; bottom:0; font-size:22px; border:none;';
			_textwrap += 'padding:20px;';
			_closeButtonStyle += 'top:10px; right:10px;';
		}	
		
		if (window.mrg_gro_popup_phone) {
			_phoneHtml = '<div style="font-size:0.5em; margin:0 0 0.5em;">' + window.mrg_gro_popup_phone + '</div>';
		}
	
		var _html = '<div style="display:flex;"><div style="'+ _textwrap + '">'+ _toptext + _bottomtext + _phoneHtml + _button + '</div><div style="flex:0 0 50%;"><img src="https://www.gazprommap.ru/popup-right.jpg" style="width:100%; height:auto;" /></div></div>'; 
		
		var _closeButtonHtml = '<svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Combined Shape</title> <g id="misc" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ms-1400-copy" transform="translate(-1082.000000, -100.000000)" fill="#000000"> <path d="M1097,100 C1105.28427,100 1112,106.715729 1112,115 C1112,123.284271 1105.28427,130 1097,130 C1088.71573,130 1082,123.284271 1082,115 C1082,106.715729 1088.71573,100 1097,100 Z M1102.56066,109.43934 C1101.97487,108.853553 1101.02513,108.853553 1100.43934,109.43934 L1100.43934,109.43934 L1097,112.879 L1093.56066,109.43934 L1093.44674,109.33637 C1092.85758,108.855842 1091.98851,108.890165 1091.43934,109.43934 C1090.85355,110.025126 1090.85355,110.974874 1091.43934,111.56066 L1091.43934,111.56066 L1094.879,115 L1091.43934,118.43934 L1091.33637,118.553262 C1090.85584,119.142423 1090.89017,120.011485 1091.43934,120.56066 C1092.02513,121.146447 1092.97487,121.146447 1093.56066,120.56066 L1093.56066,120.56066 L1097,117.121 L1100.43934,120.56066 L1100.55326,120.66363 C1101.14242,121.144158 1102.01149,121.109835 1102.56066,120.56066 C1103.14645,119.974874 1103.14645,119.025126 1102.56066,118.43934 L1102.56066,118.43934 L1099.121,115 L1102.56066,111.56066 L1102.66363,111.446738 C1103.14416,110.857577 1103.10983,109.988515 1102.56066,109.43934 Z" id="Combined-Shape"></path> </g> </g></svg>';


		var popUpDiv = document.createElement("div");
		popUpDiv.id = 'msEogPopup';
		popUpDiv.setAttribute('style', _contStyle);
		popUpDiv.innerHTML = '<div id="msEogPopup-wrapper"><div id="msEogPopup-close" style="' + _closeButtonStyle + '"></div>' + _html + '</div>';
		document.body.appendChild(popUpDiv);
		// close button
		var closeButton = document.getElementById("msEogPopup-close");
		closeButton.innerHTML = _closeButtonHtml;
		closeButton.addEventListener('click', function (e) {
			localStorage.setItem('msPopupHided', '1');
			document.body.removeChild(popUpDiv);
		});
	}
}