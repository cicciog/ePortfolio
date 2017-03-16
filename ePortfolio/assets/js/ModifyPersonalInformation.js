$(document).ready(function () {
    $("#personalInformation").mouseover(function () {
        $("#changePibtn").show();
    });
    $("#personalInformation").mouseout(function () {
        $("#changePibtn").hide();
    });

    $('#changePibtn').click(function () {
        var oldEmail = $('#emailId').text();
        var oldPhone = $('#phoneId').text();
        var oldWeb = $('#websiteId').text();

        $('#fEmail').val(oldEmail);
        $('#fPhone').val(oldPhone);
        $('#fWeb').val(oldWeb);

    });

    $('#confirmPI').click(function () {
        var newEmail = $('#fEmail').val();
        var newPhone = $('#fPhone').val();
        var newWeb = $('#fWeb').val();

        $('#emailId').text(newEmail);
        $('#phoneId').text(newPhone);
        $('#websiteId').text(newWeb);
    });

});
