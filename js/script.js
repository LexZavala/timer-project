"use strict"
var mySeconds;
var intervalHandle;

function resetPage(){
    // document.getElementsByClassName('inputField');
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
        // timeDisplay.innerHTML = "DONE";
        alert("Time is up");
        clearInterval(intervalHandle);
        resetPage();
    }
    mySeconds--;
}

function startCounter(){
    var myInput = document.getElementById('inputField').value;
    alert(myInput);
    if (isNaN(myInput)){
        alert("Type a valid number please");
        return;
    }
    mySeconds = myInput*60;

    intervalHandle=setInterval(tick, 1000);

    document.getElementById('inputField').style.display="none";
}

$('#myButton').click(function (){
    startCounter();
});

// var input = document.getElementsByClassName('inputField');
// var checkEnter = input.addEventListener('keydown', function (e){
//     if (e.code.includes("Enter")){
//         startCounter();
//     }
// });

