var userName = localStorage.getItem('userName');
var wlcomeMessege = document.getElementById('wlcomeMessege');
wlcomeMessege.innerHTML = "Welcome" + " "+ userName ;

var logOutButton = document.getElementById('logOutButton');
logOutButton.addEventListener('click' , out )
function out (){
    window.location.href = 'index.html' ;
    localStorage.removeItem('userName')
}