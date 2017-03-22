createOccupationsTreeW();
$(document).ready(function () {
    $(".item").click(function (event) {
        var id;
        var number;

        var oDateFromWEM;
        var oDateToWEM;
        var oOccupationWEM;
        var oOrganisationWEM;
        var oLocationWEM;

        id = event.target.id;
        number = id.slice(7, 8);

        oDateFromWEM = $('#timeW' + number).text().slice(0, 5);
        oDateToWEM = $('#timeW' + number).text().slice(7, 15);
        oOccupationWEM = $('#job-titleW' + number).text();
        oOrganisationWEM = $('#detailsW' + number).text();
        oLocationWEM = $('#companyW' + number).text();

        $('#occupationWM').val(oOccupationWEM);
        $('#datefromWM').val(oDateFromWEM);
        $('#datetoWM').val(oDateToWEM);
        $('#organisationWM').val(oOrganisationWEM);
        $('#municipalityWM').val(oLocationWEM);

        pressedGetSkillsBtnWM(oOccupationWEM);

        $('#addOtherSkillWMgroup').hide();
        $('#otherSkillBtnWM').click(function () {
            $('#addOtherSkillWMgroup').show(1000);
            $('#addOtherWMbtn').click(function () {
                var skillOtherItemWM = $('<span></span>').attr('id', 'skillo').addClass('label label-primary skillmodal').text($('#addOtherSkillWMinput').val());
                $('#otherSkillBtnWM').append(skillOtherItemWM);
                $('#addOtherSkillWMinput').val('');
                $('#addOtherSkillWMgroup').hide();
            });
        });

        $('#confirmWM').click(function () {

            var newOccupation;
            var newDateFrom;
            var newDateTo;
            var newOrganisation;
            var newMunicipality;

            newOccupation = $('#occupationWM').val();
            newDateFrom = $('#datefromWM').val();
            newDateTo = $('#datetoWM').val();
            newOrganisation = $('#organisationWM').val();
            newMunicipality = $('#municipalityWM').val();

            $('#job-titleW' + number).text(newOccupation);
            $('#timeW' + number).text(newDateFrom + ' - ' + newDateTo);
            $('#detailsW' + number).text(newOrganisation);
            $('#companyW' + number).text(newMunicipality);

            var skillsWM = obtainSkillsWM();
            var skillsBeAddedWM = [];
            for (var j = 0; j < skillsWM.length; j++) {
                skillsBeAddedWM.push($('<span></span>').attr('id', 'skillWM' + number + j).addClass('label label-primary').text(skillsWM[j]));
            }

            for (var k = 0; k < skillsBeAddedWM.length; k++) {
                $('#companyW' + number).append(skillsBeAddedWM[k]);
            }
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


function obtainSkillsWM() {
    var selectedSkills = [];
    $('span').filter('.label-primary').filter('.skillmodal').each(function (index) {
        selectedSkills.push($(this).text());
    });
    return selectedSkills;
}


function recommendSkillsWM(occupation) {
    var skills = [];

    if (occupation === 'Managers') {
        skills.push('Strategic Thinking');
        skills.push('Collaboration');
        skills.push('Emotional Intelligence');
        skills.push('Critical Thinking');
    }
    return skills;
}

function pressedGetSkillsBtnWM(occupation) {
    $("#getSkillBtnWM").click(function (occupation) {
        $("#getSkillBtnWM").hide(1000);
        occupation = $('#occupationWM').val();
        console.log(occupation);
        addSkillTagsWM(recommendSkillsWM(occupation));
         selectSkillWM();
    });
}

function addSkillTagsWM(skills) {
    var skillItem;
    for (var i = 0; i < skills.length; i++) {
        skillItem = $('<span></span>').attr('id', 'skill' + i).addClass('label label-success skillmodal').text(' ' + skills[i] + ' ');
        $('#addsWM').append(skillItem);
    }
}

function selectSkillWM() {
    $("span").click(function (event) {
        console.log(event.target.id);
        $('#' + event.target.id).removeClass("label-success");
        $('#' + event.target.id).addClass("label-primary");
    });
}