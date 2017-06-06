/*
	TestJS (test.js)
	Author: Michael Grant
	Created: 06/06/2017
	
*/

var TestJS = function () {
	
	var m_bSidebarVisible = false;
	
	// *************************************************************
	// PUBLIC METHODS
	
	var fnInit = function(){
		// Init code here if needed . . .
	}
	
	var fnToggleSidebar = function (oSidebarBtn) { // pass through oSidebarBtn in case needed later
		
		var oSidebarElement = document.getElementById("sidebar"),
			oContentElement = document.getElementById("content");
		
		// Remove any classes assigned (in a more complex system individual classes would be targeted via regEx)
		oContentElement.className = oContentElement.className.replace(" contentExpand", "").trim();
		oContentElement.className = oContentElement.className.replace(" contentContact", "").trim();
		oSidebarElement.className = "";
		
		if (m_bSidebarVisible) {
			// hide the sidebar
			oSidebarElement.className += "hideSidebar";
			oContentElement.className += " contentExpand";
		} else {
			// show the sidebar
			oSidebarElement.className += "showSidebar";
			oContentElement.className += " contentContact";
		}
		oSidebarElement.addEventListener("animationend", animationFinished, false);
		m_bSidebarVisible = !m_bSidebarVisible;
		
		function animationFinished(oEvent) { // gets hoisted
			oSidebarElement.removeEventListener("animationend", animationFinished, false);
		}
		
	}
	
	// *************************************************************
	// PRIVATE METHODS
	
	// *************************************************************
	// Return public methods container
	return {
		init: fnInit,
		toggleSidebar: fnToggleSidebar
	};
	
}();