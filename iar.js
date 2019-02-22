/** IamResponding Auto login
Icon made by Freepik from www.flaticon.com
*/

//var loginBox = document.querySelector('#memberLoginDialog');
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
