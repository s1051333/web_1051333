var topic = [
    "勇士VS湖人",
    "暴龍VS賽爾提克",
    "休賽",
    "籃網VS暴龍",
    "湖人VS火箭",
    "公鹿VS快艇"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2, 23);
