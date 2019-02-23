

//Checks if the plug in has credentials stored.
function checkStatus() {
  //Pull Current credentials
  var getting = browser.storage.sync.get(["agency","username","password"]);
  let ready = false;

  for each(key in getting) {
    
  }
}
