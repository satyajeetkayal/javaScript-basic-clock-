function showTime(){

    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

   //min = Ticking(min);
    //sec =  Ticking(sec);

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
 
    document.getElementById("hour").innerHTML = hour + ":" + min;
    document.getElementById("sec").innerHTML = sec;

    if(hour >= 12){

        document.getElementById("hour_forma").innerHTML = "PM";

    }
    else{

        document.getElementById("hour_forma").innerHTML = "AM";
    }

    var time 
    time = setTimeout('showTime()', 0);

   // function Ticking(ticval){
  //   if(ticval >= 10){
 //    ticval = "0" + ticval;
//    return ticval;
//     }
//  }

}
