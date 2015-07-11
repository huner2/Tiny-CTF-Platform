var ref = document.referrer;
var link = window.location.href;
var host = window.location.hostname;
if (ref.match(/^https?:\/\/([^\/]+\.)?localhost(\/|$)/i) || ref.match(host)) {
	console.log("Safe (I hope) referrer");
}
else if (link != host && !(ref.match(/^https?:\/\/([^\/]+\.)?127\.0\.0\.1(\/|$)/i))){
    console.log("Referrer is not this website, redirecting...");
	window.location.assign("http://" + host);
}