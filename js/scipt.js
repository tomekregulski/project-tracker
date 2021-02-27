var timeDis = $("#time-display");
var formModal = $("#modalForm");

function handleTimeDisplay() {
    var currTime = moment().format("MM DD, YYYY hh:mm:ss A");
    timeDis.text(currTime);
}

setInterval(handleTimeDisplay, 1000);

$(function() {
    $('#proj-date').datepicker({
        changeMonth: true,
        changeYear: true,
    });
});

function handleFormSubmit() {
    var formName = $('#proj-name').val().trim();
    var newTr = $('<tr>');
    var newTh = $('<th>');
}