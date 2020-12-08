const apiUrl = 'http://localhost:8080'

function contact() {
    let name = document.getElementById('contact_name');
    let email = document.getElementById('contact_email');
    let subject = document.getElementById('contact_subject');
    let message = document.getElementById('contact_message');

    grecaptcha.ready(function() {
        //calling execute method to receive a token
        grecaptcha.execute('SITE_KEY', {action: 'login'}).then(function(token) {
            document.getElementById('recaptchaToken').value=token; //setting the received token to be submitted with the login form.
        });
    });
}
