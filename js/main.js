var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var alertMessege = document.getElementById('alertMessege')
var signBtn = document.getElementById('signBtn');
var dataContainer =[]
if (localStorage.getItem('userData') != null)
{
    dataContainer = JSON.parse(localStorage.getItem('userData'))
}
function addData ()
{
    var userData = {
        name : userName.value ,
        email : userEmail.value ,
        password : userPassword.value ,
    }
    if ( validationName() == true && validationEmail () == true && validationPassword () == true)
    {
        if ( checkInputEmpty () == true )
            {
                getAlertMessege ('All input is requaired', 'red')
            }
            else
            {
                if( checkEmailExist() == true) 
                {
                    getAlertMessege ('Email Already Exist' , 'red')
                }else
                    {
                        dataContainer.push(userData)
                        localStorage.setItem('userData',JSON.stringify(dataContainer))
                        clrFrorm()
                        getAlertMessege ( 'Success', 'green')                      
                    }
            }
    }
}
function getAlertMessege( text , color ){
    alertMessege.classList.remove('d-none')
    alertMessege.innerHTML = text ;
    alertMessege.style.color = color ;
}
function checkInputEmpty ()
{
    if (userName.value == '' || userEmail.value == '' || userPassword == '')
        return true ;
    else
        return false ;
}
function checkEmailExist()
{
    for( var i = 0 ; i < dataContainer.length ; i++ )
    {
        if( dataContainer[i].email == userEmail.value )
        return true ;
    }
}
signBtn.addEventListener( 'click' , addData )
function clrFrorm() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
}
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
userName.addEventListener('input' , validationName )
function validationEmail ()
{
    regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if ( regexEmail.test(userEmail.value) == true)
    {
        userEmail.classList.add('is-valid')
        userEmail.classList.remove('is-invalid')
        return true ;
    }
    else
    {
        userEmail.classList.add('is-invalid')
        userEmail.classList.remove('is-valid')
        return false ;
    }
}
userEmail.addEventListener('input' , validationEmail )
function validationPassword ()
{
    regexPassword = /^([A-Za-z]{4,10}|\w{4,10})$/
    if ( regexPassword.test(userPassword.value) == true)
    {
        userPassword.classList.add('is-valid')
        userPassword.classList.remove('is-invalid')
        return true ;

    }
    else
    {
        userPassword.classList.add('is-invalid')
        userPassword.classList.remove('is-valid')
        return false ;
    }
}
userPassword.addEventListener('input' , validationPassword )
