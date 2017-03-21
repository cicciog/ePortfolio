var countE = 2;

$(document).ready(function () {
    resetEducationFields();
    presentCheckedE();
    addEducation(countE);
    
    $('#confirmE').click(function (){
        addEducation(countE);
        countE++;
    });
    
});

function presentCheckedE() {
    if ($('#presentE').is(":checked")) {
        $('#datetoE').hide(1000);
    } else {
        $('#datetoE').show(1000);
    }
}

function addEducation(i) {

    var dateFromE = $('#datefromE').val();
    var dateToE = $('#datetoE').val();
    var levelE = $('#levelE').val();
    var titleE = $('#titleE').val();
    var organisationE = $('#organisationE').val();
    var locationE = $('#locationE').val();
    var skillsByNameE = $('#skillsByNameE').val();

    var itemE = $('<div></div>').attr('id', 'itemE' + i.toString()).addClass('item');
    var metaE = $('<div></div>').attr('id', 'metaE' + i).addClass('meta');
    var upperRowE = $('<div></div>').attr('id', 'upperRowE' + i).addClass('upper-row');
    var educationTitleE = $('<h3></h3>').attr('id', 'education-titleE' + i).addClass('education-title').text(levelE + ' - ' + titleE);
    var timeE = $('<div></div>').attr('id', 'timeE' + i).addClass('time').text(dateFromE + ' - ' + dateToE);
    var detailsE = $('<div></div>').attr('id', 'detailsE' + i).addClass('details').text(organisationE);
    var companyE = $('<div></div>').attr('id', 'companyE' + i).addClass('company').text(locationE);
    var skillsE = $('<span></span>').attr('id', 'skillE' + i).addClass('label label-primary').text(skillsByNameE);

    $('#addE').append(itemE);
    $('#itemE' + i).append(metaE);
    $('#metaE' + i).append(upperRowE);
    $('#upperRowE' + i).append(educationTitleE);
    $('#metaE' + i).append(timeE);
    $('#metaE' + i).append(detailsE);
    $('#detailsE' + i).append(companyE);
    $('#companyE' + i).append('<br><br>');
    $('#companyE' + i).append(skillsE);

}


function resetEducationFields() {

    $('#levelE').val('');
    $('#titleE').val('');
    $('#datefromE').val('');
    $('#datetoE').val('');
    $('#organisationE').val('');
    $('#locationE').val('');

}

function getSkillsByName() {
    var availableSkills = [
        'Adaptability',
        'Confidence',
        'Communication',
        'Team Player',
        'Continuous Learner',
        'Imaginative',
        'Leadership',
        'Organization',
        'Innovative',
        'Commitment',
        'Ability to Manage Online Reputation',
        'Ability to Engage',
        'Understanding of Technology',
        'Ability to Empower'
    ];

    $("#skillsByNameE").autocomplete({
        source: availableSkills
    });
}

