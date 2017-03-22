var countW = 3;
createOccupationsTree();
$(document).ready(function () {
    addOtherSkillWgroupHide();
    var occupation;
    var dateFrom;
    var dateTo;
    var organisation;
    var country;

    occupation = $('#occupationW').val();
    dateFrom = $('#datefromW').val();
    dateTo = $('#datetoW').val();
    organisation = $('#organisationW').val();
    country = $('#municipalityW').val();

    $('#presentW').click(function () {
        presentCheckedW();
    });

    pressedGetSkillsBtn(occupation);

    $('#otherSkillBtnW').click(function () {
        addOtherSkillWgroupShow();
        $('#addOtherWbtn').click(function () {
            var skillOtherItemW = $('<span></span>').attr('id', 'skillo').addClass('label label-primary skillmodal').text($('#AddOtherSkillWinput').val());
            $('#otherSkillBtnW').append(skillOtherItemW);
            $('#AddOtherSkillWinput').val('');
            addOtherSkillWgroupHide();
        });
    });

    $('#confirmW').click(function () {
        addWorkExperinece(countW);
        obtainSkills();
        countW++;
    });
});


function recommendSkills(occupation) {
    var skills = [];

    if (occupation === 'Managers') {
        skills.push('Strategic Thinking');
        skills.push('Collaboration');
        skills.push('Emotional Intelligence');
        skills.push('Critical Thinking');
    }
    return skills;
}

function pressedGetSkillsBtn(occupation) {
    $("#getSkillBtn").click(function (occupation) {
        $("#getSkillBtn").hide(1000);
        occupation = $('#occupationW').val();
        console.log(occupation);
        addSkillTags(recommendSkills(occupation));
        selectSkill();
    });
}

function addSkillTags(skills) {
    var skillItem;
    for (var i = 0; i < skills.length; i++) {
        skillItem = $('<span></span>').attr('id', 'skill' + i).addClass('label label-success skillmodal').text(' ' + skills[i] + ' ');
        $('#addsW').append(skillItem);
    }
}

function presentCheckedW() {
    if ($('#presentW').is(":checked")) {
        $('#datetoW').hide(1000);
    } else {
        $('#datetoW').show(1000);
    }
}

function addWorkExperinece(i) {

    var occupation = $('#occupationW').val();
    var dateFrom = $('#datefromW').val();
    var dateTo = $('#datetoW').val();
    var organisation = $('#organisationW').val();
    var country = $('#municipalityW').val();
    var skills = obtainSkills();


    var item = $('<div></div>').attr('id', 'itemW' + i.toString()).addClass('item');
    var meta = $('<div></div>').attr('id', 'metaW' + i).addClass('meta');
    var upperRow = $('<div></div>').attr('id', 'upperRowW' + i).addClass('upper-row');
    var educationTitle = $('<h3></h3>').attr('id', 'job-titleW' + i).addClass('job-title').text(occupation);
    var time = $('<div></div>').attr('id', 'timeW' + i).addClass('time').text(dateFrom + ' - ' + dateTo);
    var details = $('<div></div>').attr('id', 'detailsW' + i).addClass('details').text(organisation);
    var company = $('<div></div>').attr('id', 'countryW' + i).addClass('country').text(country);
    var skillsBeAdded = [];
    for (var j = 0; j < skills.length; j++) {
        skillsBeAdded.push($('<span></span>').attr('id', 'skill' + i + j).addClass('label label-primary').text(skills[j]));
    }


    $('#addWE').append(item);
    $('#itemW' + i).append(meta);
    $('#metaW' + i).append(upperRow);
    $('#upperRowW' + i).append(educationTitle);
    $('#job-titleW' + i).append(time);
    $('#metaW' + i).append(details);
    $('#detailsW' + i).append(company);
    $('#countryW' + i).append('<br><br>');
    for (var k = 0; k < skillsBeAdded.length; k++) {
        $('#countryW' + i).append(skillsBeAdded[k]);
    }


}

function selectSkill() {
    $("span").click(function (event) {
        console.log(event.target.id);
        $('#' + event.target.id).removeClass("label-success");
        $('#' + event.target.id).addClass("label-primary");
    });
}

function obtainSkills() {
    var selectedSkills = [];
    $('span').filter('.label-primary').filter('.skillmodal').each(function (index) {
        selectedSkills.push($(this).text());
    });
    return selectedSkills;
}

function createOccupationsTree() {
    var data = [
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
        $('#occupationWtree').tree({
            data: data
        });
    });

    // bind 'tree.click' event
    $('#occupationWtree').bind('tree.click',
            function (event) {
                // The clicked node is 'event.node'
                var node = event.node;
                $('#occupationW').val(node.name);
            }
    );
}

function resetAddWorkExperience() {
    $('#occupationW').val('');
    $('#datefromW').val('');
    $('#datetoW').val('');
    $('#organisationW').val('');
    $('#municipalityW').val('');
}

function addOtherSkillWgroupShow() {
    $('#AddOtherSkillWgroup').show(1000);
}

function addOtherSkillWgroupHide() {
    $('#AddOtherSkillWgroup').hide(1000);
}
