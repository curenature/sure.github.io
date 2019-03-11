(function(window, location) {
if(window.history.length==1){
//alert(" 1========length: " + window.history.length +"location: " + window.document.location );

	window.history.replaceState(null, window.document.title, window.document.location.pathname+"#!/stealingyourhistory");
//alert(" 2========length: " + window.history.length +"location: " + window.document.location );

	window.history.pushState(null, window.document.title, window.location.pathname);
//alert(" 3========length: " + window.history.length +"location: " + window.document.location );
}	
window.addEventListener("popstate", function() {//this func called only once
//alert(" 4========length: " + window.history.length +"location: " + window.document.location.pathname );
	  if(window.document.location.hash === "#!/stealingyourhistory") {
		window.history.replaceState(null, window.document.title, window.document.location.pathname);
//alert(" 5========length: " + window.history.length +"location: " + window.document.location );
		
setTimeout(function(){
//window.document.location.replace("file:///E:/mark/=native/=ANSTREX/bb/history_stealing/index2.html");
window.document.location.replace("index.html");
},0);
	  }
	}, false);
}(window, location));