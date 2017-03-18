createOccupationsTreeW();
$(document).ready(function () {
    $(".item").click(function (event) {

        var id = event.target.id;
        var number = id.slice(7, 8);

        var oDateFromE = $('#timeE' + number).text().slice(0, 5);
        var oDateToE = $('#timeE' + number).text().slice(7, 15);
        var oLevelE = $('#levelE' + number).text();
        var oTitleE = $('#education-titleE' + number).text();
        var oOrganisationE = $('#organisationE' + number).text();
        var oLocationE = $('#locationE' + number).text();
        var oSkillsByNameE = $('#skillsByNameE' + number).text();

        $('#datefromEM').val();
        $('#datetoEM').val();
        $('#levelEM').val();
        $('#titleEM').val();
        $('#organisationEM').val();
        $('#locationEM').val();
        $('#skillsByNameEM').val();

        $('#confirmWM').click(function () {

            var newOccupation = $('#occupationWM').val();
            var newDateFrom = $('#datefromWM').val();
            var newDateTo = $('#datetoWM').val();
            var newOrganisation = $('#organisationWM').val();
            var newMunicipality = $('#municipalityWM').val();

            $('#job-titleW' + number).text(newOccupation);
            $('#timeW' + number).text(newDateFrom + ' - ' + newDateTo);
            $('#detailsW' + number).text(newOrganisation);
            $('#companyW' + number).text(newMunicipality);
        });
    });
});

function createOccupationsTreeW() {
    var dataM = [
        {
            name: 'Managers',
            children: [
                {
                    name: 'Chief Executives, Senior Officials and Legislators',
                    children: [
                        {
                            name: 'Legislators and Senior Officials',
                            children: [
                                {name: 'Legislators'},
                                {name: 'Senior Government Officials'},
                                {name: 'Traditional Chiefs and Heads of Villages'},
                                {name: 'Senior Officials of Special-interest Organizations'}
                            ]
                        },
                        {
                            name: 'Managing Directors and Chief Executives',
                            children: [
                                {name: 'child3'}
                            ]
                        }
                    ]
                },
                {
                    name: 'Administrative and Commercial Managers',
                    children: [
                        {name: 'child3'}
                    ]
                },
                {
                    name: 'Production and Specialized Services Managers',
                    children: [
                        {name: 'child3'}
                    ]
                },
                {
                    name: 'Hospitality, Retail and Other Services Managers',
                    children: [
                        {name: 'child3'}
                    ]
                }
            ]
        },
        {
            name: 'Clerical Support Workers',
            children: [
                {name: 'child1'},
                {name: 'child2'}
            ]
        },
        {
            name: 'Technicians and Associate Professionals',
            children: [
                {name: 'child3'}
            ]
        },
        {
            name: 'Professionals',
            children: [
                {name: 'child3'}
            ]
        },
        {
            name: 'Services and Sales Workers',
            children: [
                {name: 'child3'}
            ]
        },
        {
            name: 'Skilled Agricultural, Forestry and Fishery Workers',
            children: [
                {name: 'child3'}
            ]
        },
        {
            name: 'Craft and Related Trades Workers',
            children: [
                {name: 'child3'}
            ]
        },
        {
            name: 'Plant and Machine Operators and Assemblers',
            children: [
                {name: 'child3'}
            ]
        },
        {
            name: 'Elementary Occupations',
            children: [
                {name: 'child3'}
            ]
        },
        {
            name: 'Armed Forces Occupations',
            children: [
                {name: 'child3'}
            ]
        }
    ];

    $(function () {
        $('#occupationWtreeM').tree({
            data: dataM
        });
    });

    // bind 'tree.click' event
    $('#occupationWtreeM').bind('tree.click',
            function (event) {
                // The clicked node is 'event.node'
                var node = event.node;
                $('#occupationWM').val(node.name);
            }
    );
}

function updateFields(occupation, date, organisation, location, id) {
    $('#confirmWM').click(function (number) {
        $('#job-titleW' + number).text();
        $('#timeW' + number).text();
        $('#detailsW' + number).text();
        $('#companyW' + number).text();
    });
}
