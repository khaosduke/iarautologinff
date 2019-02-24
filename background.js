browser.runtime.onMessage.addListener(function(request, sender) {
    browser.tabs.update(sender.tab.id, {url: request.redirect});
});
