$(document).ready(function () {
    $('#login-btn').click(function () {
        if (($('#userLogin').val() === 'user') && ($('#passwordLogin').val() === 'password')) {
            $(window.location).attr('href', 'joboffers - showcase.html');
        }else{
            $('#errorLogin').text('Try again, username o password is not valid!');
        }
    });
});
