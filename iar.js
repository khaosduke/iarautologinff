/** IamResponding Auto login
Icon made by Freepik from www.flaticon.com
*/

var loginBox = document.querySelector('#memberLoginDialog');
loginBox.style.display = 'block';

var agency = document.querySelector('input#ddlsubsciribers');
agency.value = "lorem";
agency.style.border = "2px solid blue";
document.querySelector("input#memberfname").value = "lorem";
document.querySelector("input#memberpwd").value = "ipsum";

document.querySelector("#login").click();
