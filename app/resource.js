let dateobj = new Date();

let dayOfTheWeek = dateobj.getDay();
console.log(dayOfTheWeek);
//If this is a weekday
console.log(dateobj.toTimeString());
if(dayOfTheWeek > 0 || dayOfTheWeek < 6) {
    let timeString = dateobj.toTimeString();
    console.log(timeString);
    let timeStringArr = timeString.split(':');
    let hourNum = Number(timeStringArr[0]);
    console.log(hourNum);
    if(hourNum > 7 && hourNum < 10) {
        console.log('first period');
    } else if(hourNum > 7 && hourNum <= 10) {
        console.log('second period');
    }  else if(hourNum > 10 && hourNum <= 12) {
        console.log('third period');
    }  else if(hourNum > 13 && hourNum <= 15) {
        console.log('fourth period');
    } else {
        console.log('unauthorized time');
    }
}
