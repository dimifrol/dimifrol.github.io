// 1. Выделить элемент. У элемента класс date.

var $logo = $('.logo');
var $date = $('.date');
// 2. Выбрали и сохранили элемент с классом date.

function getDate() {
var realDate = new Date();
//2. Получить дату

var day = realDate.getDate();
var month = realDate.getMonth()+1;
var year = realDate.getFullYear();

var hour = ('0' + realDate.getHours()).slice(-2);
var minutes = ('0' + realDate.getMinutes()).slice(-2);
var seconds = ('0' + realDate.getSeconds()).slice(-2);

var dateHtml = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds + ' ' + 'MSC';

$date.text(dateHtml);
}

$logo.click(getDate);

//setTimeout(getDate, 1000);
getDate();
setInterval(getDate, 1000);
