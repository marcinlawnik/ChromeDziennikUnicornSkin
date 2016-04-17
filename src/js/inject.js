var unikorn = document.createElement('img');
unikorn.id = "snowflake";
unikorn.class = "snowflake";
unikorn.src = chrome.extension.getURL('/images/modified/unicorn_new.png');
document.body.appendChild(unikorn);

var s = document.createElement('script');
s.src = chrome.extension.getURL('/js/snow.js');
s.onload = function() {
	this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);
