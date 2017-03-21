$(document).ready(function () {
    $(".education").click(function (event) {
        var id = event.target.id;
        var number = id.slice(7, 8);

        // get position where found '-' symbol
        var split = $('#education-titleE' + number).text().indexOf('-');
        var oDateFromEM = $('#timeE' + number).text().slice(0, 5);
        var oDateToEM = $('#timeE' + number).text().slice(7, 15);
        var oLevelEM = $('#education-titleE' + number).text().slice(0, split);
        var oTitleEM = $('#education-titleE' + number).text().slice(split + 1, 50);
        var oOrganisation = $('#detailsE' + number).text();
        var oLocationEM = $('#companyE' + number).text();

        $('#confirmEM').click(function () {

            var newDateFromEM = $('#datefromEM').val();
            var newDateToEM = $('#datetoEM').val();
            var newLevelEM = $('#levelEM').val();
            var newTitleEM = $('#titleEM').val();
            var newOrganisation = $('#organisationEM').val();
            var newLocationEM = $('#locationEM').val();

            $('#education-titleE' + number).text();
            $('#timeE' + number).text(newDateFromEM+' - '+newDateToEM);
            $('#education-titleE' + number).text(newLevelEM+' - '+newTitleEM);
            $('#detailsE' + number).text(newOrganisation);
            $('#companyE' + number).text(newLocationEM);
        });
    });
});


function getLevel(education, split) {
    console.log(education.text().slice(0, split));
    return  education.text().slice(0, split);
}

function getTitle(education, split) {
    return  education.text().slice(split + 1, 50);
}

function getOldSkills() {

}