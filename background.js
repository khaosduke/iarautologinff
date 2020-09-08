
//Receive messages for redirects
var singleRedirect = true;
//Need to get a better way of stopping redirects, this is ugly, for now it will work until we can properly check the load page.
browser.runtime.onMessage.addListener(function(request, sender) {
    if(singleRedirect){
      browser.tabs.update(sender.tab.id, {url: request.redirect});
      singleRedirect = false;
    }
});
