(function(window, location) {
if(window.history.length==1){
//alert(" 1========length: " + window.history.length +"location: " + window.document.location );
//window.history.replaceState(null, 'index', "index.html#!/stealingyourhistory");

//	window.history.replaceState(null, window.document.title, window.document.location.pathname+"#!/stealingyourhistory");
//alert(" 2========length: " + window.history.length +"location: " + window.document.location );

	window.history.pushState(null, 'page1', 'page1.html');
//alert(" 3========length: " + window.history.length +"location: " + window.document.location );

//window.document.location.replace("page1.html");
}	
window.addEventListener("popstate", function() {//this func called only once
		
setTimeout(function(){

window.document.location.replace("index.html");
},0);
	 
	}, false);
}(window, location));