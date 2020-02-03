var time = 15000;

function timer() {
    setTimeout(function () {
        time--;

        var min = Math.floor(time / 100 / 60);
        var sec = Math.floor(time / 100);
        var mSec = time % 100;

        if (min < 10) min = "0" + min;

        if (sec >= 60) sec = sec % 60;

        if (sec < 10) sec = "0" + sec;

        if (mSec < 10) mSec = "0" + mSec;

        document.getElementById('zegar').innerHTML = min + ":" + sec + ":" + mSec;

        timer();
    }, 10);

}

