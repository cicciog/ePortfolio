$(document).ready(function () {

    $(".item").click(function (event) {
        var id = event.target.id;
        var number = id.slice(7, 8);

        var oOccupation = $('#job-titleW'+number).text();
        var oTime = $('#timeW'+number).text();
        var oDateTo = $('#detailsW'+number).text();
        var oOrganisation = $('#companyW'+number).text();

        $('#occupationW').val(oOccupation);
        $('#datefromW').val(oTime.slice(0,10));
        $('#datetoW').val(oTime.slice(0,10));
        $('#organisationW').val(oOrganisation);
    });
});

