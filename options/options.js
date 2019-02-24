//variables

var agency = '#agencyInput';
var username = '#usernameInput';
var password = '#passwordInput';



function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    agency: document.querySelector(agency).value,
    username: document.querySelector(username).value,
    password: document.querySelector(password).value
  });
}

function restoreOptions() {

  function setCurrentChoices(result) {
    document.querySelector(agency).value = result['agency'] || null;
    document.querySelector(username).value = result['username'] || null;
    document.querySelector(password).value = result['password'] || null;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get(["agency","username","password"]);
  getting.then(setCurrentChoices, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
