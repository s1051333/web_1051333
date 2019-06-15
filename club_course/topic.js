var topic = ["湖人 vs 勇士 ",
            "暴龍 vs 騎士",
            "灰狼 vs 金塊"];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2, 23);
