function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    agency: document.querySelector("#agencyInput").value,
    username: document.querySelector("#usernameInput").value,
    password: document.querySelector("#passwordInput").value
  });
}

function restoreOptions() {

  function setCurrentChoices(result) {
    document.querySelector("#agencyInput").value = result['agency'] || NULL;
    document.querySelector("#usernameInput").value = result['username'] || NULL;
    document.querySelector("#passwordInput").value = result['password'] || NULL;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.sync.get(["agency","username","password"]);
  getting.then(setCurrentChoices, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
