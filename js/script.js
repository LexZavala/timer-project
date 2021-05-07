"use strict"
var mySeconds;
var intervalHandle;

function resetPage(){
    // document.getElementsByClassName('inputField').style.display="none";
    var origin = document.getElementsByTagName("body").html;
    console.log(origin)
}
function tick(){
    var timeDisplay = document.getElementById('time');
    var min = Math.floor(mySeconds/60);
    var sec = mySeconds - (min*60);
    if (sec < 10) {
        sec="0"+sec;
    }

    var message = min.toString() + ":" + sec;
    timeDisplay.innerHTML = message;

    if (mySeconds === 0){
        timeDisplay.innerHTML = "TIME IS UP!";
        // alert("Time is up");
        clearInterval(intervalHandle);
        resetPage();
    }
    mySeconds--;
}

function startCounter(){
    var myInput = document.getElementById('inputField');
    var userTime = Number(myInput.value)
    if (isNaN(userTime)){
        alert("Type a valid number please");
        return;
    }
    mySeconds = userTime*60;

    intervalHandle=setInterval(tick, 1000);

    document.getElementById('inputField').style.display="none";
    $('#myButton').css('display', 'none');
}

$('#myButton').click(function (e){
    e.preventDefault();
    startCounter();
});



// var input = document.getElementsByClassName('inputField');
// var checkEnter = input.addEventListener('keydown', function (e){
//     if (e.code.includes("Enter")){
//         startCounter();
//     }
// });

