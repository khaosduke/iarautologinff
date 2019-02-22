/** IamResponding Auto login
Icon made by Freepik from www.flaticon.com
*/

/**
 TODO Make a browser action to show status, that the plugin is working
 ensure it only gets run once
 figure out issue with the correct URL or else it wont run
 pretty the options up
 */
function onError(error) {
  console.log(`Error: ${error}`);
}

function login(credentials) {
  document.querySelector('input#ddlsubsciribers').value = credentials.agency;
  document.querySelector("input#memberfname").value = credentials.username;
  document.querySelector("input#memberpwd").value = credentials.password;
  document.querySelector("#login").click();
}


function onGot(item) {
  if (item.agency && item.username && item.password) {
    login(item);
  }
}

var getting = browser.storage.sync.get(['agency','username','password']);
getting.then(onGot, onError);
