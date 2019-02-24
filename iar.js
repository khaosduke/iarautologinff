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

//Check if we're logged in. The easy and stupid way, check to see if the sign out link is present...
function isLoggedIn() {
  return document.querySelector("#SingOut1_lnkSignOut") == null;
}

function redirectIfNotLoginPage() {
  console.log("checking...");
  //Check to see if the login box exists on the page we're on
  //If not , redirect to a known login page
  if (document.querySelector('input#ddlsubsciribers') == null && !isLoggedIn() ) {
    //We're not on the right page, attempt to redirect
    browser.runtime.sendMessage({redirect: "https://iamresponding.com/v3/Pages/default.aspx?bypass=1"});
  }
}


console.log("Loaded!");
//redirectIfNotLoginPage();
var getting = browser.storage.sync.get(['agency','username','password']);
getting.then(onGot, onError);
