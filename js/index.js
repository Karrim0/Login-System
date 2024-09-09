var checkEmail = document.getElementById('signEmail');
var checkPassword = document.getElementById('signPassword');
var loginButton = document.getElementById('loginButton');
var alertMessege = document.getElementById('alertMessege');
var dataContainer = [] ;
if (localStorage.getItem("userData") !=null)
    {
        dataContainer = JSON.parse(localStorage.getItem('userData'));
    }
function checkData ()
{
    if (checkInputsEmpty() == true)
    {
        getAlertMessege ( "All input is required", 'red')
    }else
    {
        if ( checkEmailPass () == true)
        {
            window.location.href ='home.html'
        }else{
            getAlertMessege ('Email or Password notCorrect','red')
        }
    }
}
function checkEmailPass ()
{
    for (var i = 0 ; i < dataContainer.length ; i++)
    {
        if (dataContainer[i].email == checkEmail.value && dataContainer[i].password == checkPassword.value)
        {
            localStorage.setItem('userName' , dataContainer[i].name) ;
            return true ;
        }
    }
}
function getAlertMessege( text , color ){
    alertMessege.classList.remove('d-none')
    alertMessege.innerHTML = text ;
    alertMessege.style.color = color ;
}
function checkInputsEmpty() {
    if ( checkEmail.value == '' || checkPassword.value == '')
        return true;
    else
        return false;
}
loginButton.addEventListener('click', checkData);
function validationName ()
{
    regexName = /^[A-z][a-z]{2,8}$/
    if ( regexName.test(userName.value) == true)
    {
        userName.classList.add('is-valid')
        userName.classList.remove('is-invalid')
        return true ;

    }
    else
    {
        userName.classList.add('is-invalid')
        userName.classList.remove('is-valid')
        return false ;
    }
}