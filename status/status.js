

//Checks if the plug in has credentials stored.
var active = false;

function onError(error) {
  console.log(`Error: ${error}`);
  //Something occured on credential retrieve so the plugin cannot be active
  active = false;
}

function setActive() {
  if(active) {
      document.querySelector('.not-active').style.display = "none";
  } else {
      document.querySelector('.active').style.display = "none";
  }
}

function onGot(item) {
  //Pull Current credentials, check for empty or null
  if (item.agency && item.username && item.password) {
    active = true;
  } else {
    active = false;
  }

  setActive();
}

var getting = browser.storage.sync.get(['agency','username','password']);
getting.then(onGot, onError);
