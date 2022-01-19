//given a time in 12-hour format, return the time in 24-hour format
//input: string
//output: string
// input 07:05:45PM
function convertTime(time) {
    var timeArray = time.split(":");
    var hour = timeArray[0];
    var minute = timeArray[1];
    var period = timeArray[2];
    var hour24 = "";
    if (period == "AM") {
        if (hour == "12") {
            hour24 = "00";
        } else {
            hour24 = hour;
        }
    } else {
        if (hour == "12") {
            hour24 = "12";
        } else {
            hour24 = parseInt(hour) + 12;
        }
    }
    return hour24 + ":" + minute+ ":" + period;
}
console.log(convertTime("07:05:45"));
//given a time in 24-hour format, return the time in 12-hour format
//input: string
//output: string

function convertTime24(time) {
    var timeArray = time.split(":");
    var hour = timeArray[0];
    var minute = timeArray[1];
    var period = "";
    var hour12 = "";
    if (hour < 12) {
        period = "AM";
        if (hour == "00") {
            hour12 = "12";
        } else {
            hour12 = hour;
        }
    } else {
        period = "PM";
        if (hour == "12") {
            hour12 = "12";
        } else {
            hour12 = parseInt(hour) - 12;
        }
    }
    return hour12 + ":" + minute + " " + period;
}