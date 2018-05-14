//start clock------
function clock(){
    var time = new Date(),

    hours = time.getHours(),
    minutes = time.getMinutes();

    document.querySelectorAll('.clock')[0].innerHTML=harold(hours) + ":" + harold(minutes);
    function harold(standIn){
        if(standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}
setInterval(clock, 1000);
//end of clock-------------