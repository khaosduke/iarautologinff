/** IamResponding Auto login
  Written by Wilfredo Crespo
  Icon made by Freepik from www.flaticon.com
*/

/* Keeping all the variables in one place makes them easier to change in the future
   When the page it self changes.
*/

var agencyField = 'input#ddlsubsciribers';
var usernameField = 'input#memberfname';
var passwordField = 'input#memberpwd';
var loginButton = '#login';

var loginPageUrl =  "https://www.iamresponding.com/v3/Pages/memberlogin.aspx"


function onError(error) {
  console.log(`Error: ${error}`);
}

function login(credentials) {
  document.querySelector(agencyField).value = credentials.agency;
  document.querySelector(usernameField).value = credentials.username;
  document.querySelector(passwordField).value = credentials.password;
  document.querySelector(loginButton).click();
}


function onGot(item) {
  if (item.agency && item.username && item.password) {
    login(item);
  }
}

//Check if we're logged in. The easy and stupid way, check to see if the sign out link is present...
function isLoggedIn() {
  //return document.querySelector("#SingOut1_lnkSignOut") != null;
  //New web page version
  return document.querySelector(".icon-sign-out") != null;
}

function isLoginPage() {
  return document.querySelector(agencyField) != null;
}

function redirectIfNotLoginPage() {
  //Check to see if the login box exists on the page we're on
  //If not , redirect to a known login page
  //if (document.querySelector(agencyField) == null && !isLoggedIn() ) {

  if (!isLoginPage() && !isLoggedIn()) {
    //We're not on the right page, attempt to redirect
    browser.runtime.sendMessage({redirect:loginPageUrl});
    console.log("Got a null going here");
  }
}


console.log("Loaded!");
redirectIfNotLoginPage();
var getting = browser.storage.sync.get(['agency','username','password']);
getting.then(onGot, onError);
