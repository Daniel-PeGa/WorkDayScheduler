// var dayToday = moment().format('MMMM Do YYYY, h:mm:ss a');
// $('#currentDay').html(dayToday);

function updateTime() {
    let today = moment();

    $('#currentDay').text(today.format('MMMM Do YYYY, h:mm:ss a'));
    
    let now = moment().format('kk');
    for (let i = 0; i < scheduleElementArray.length; i++) {
        scheduleElementArray[i].removeClass('past present future');
        if (now > scheduleElementArray[i].data('hour')) {
            scheduleElementArray[i].addClass('past');
        } else if (now === scheduleElementArray[i].attr('hour')) {
            scheduleElementArray[i].addClass('present');
        } else {
            scheduleElementArray[i].addClass('future');
        }
}

}

let saveBttn = $('.save-icon');
let containerElement = $('.container');
let schedule8am = $('#8AM');
let schedule9am = $('#9AM');
let schedule10am = $('#10AM');
let schedule11am = $('#11AM');
let schedule12pm = $('#12PM');
let schedule1pm = $('#1PM');
let schedule2pm = $('#2PM');
let schedule3pm = $('#3PM');
let schedule4pm = $('#4PM');
let schedule5pm = $('#5PM');
let schedule6pm = $('#6PM');
let schedule7pm = $('#7PM');
let schedule8pm = $('#8PM');
let schedyle9pm = $('#9PM');

let scheduleElementArray = [
    schedule8am,
    schedule9am,
    schedule10am,
    schedule11am,
    schedule12pm,
    schedule1pm,
    schedule2pm,
    schedule3pm,
    schedule4pm,
    schedule5pm,
    schedule6pm,
    schedule7pm,
    schedule8pm,
    schedyle9pm
];

renderLastRegistered();
updateTime();
setInterval(updateTime, 100);

function renderLastRegistered() {
    for (let el of scheduleElementArray) {
        el.val(localStorage.getItem("time block" + el.data('hour')));
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    let btnClicked = $(event.currentTarget);

    let targetText = btnClicked.siblings('textarea');

    let targetTimeBlock = targetText.data('hour');

    localStorage.setItem("time block" + targetTimeBlock, targetText.val());
}

saveBttn.on('click', handleFormSubmit);